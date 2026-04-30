#!/usr/bin/env python3
"""
Report Quality Assurance Checker
Scans a Typst report file for violations of AI_INSTRUCTIONS.md rules.
Run: python3 scripts/qa_check.py reports/your-report.typ
"""
import re
import sys
from pathlib import Path

# ============================================================
# BANNED WORD LIST (Section 1 of AI_INSTRUCTIONS.md)
# ============================================================
AI_SLOP_WORDS = [
    "delve", "tapestry", "testament", "navigate", "navigating",
    "multifaceted", "robust", "foster", "pivotal", "catalyst",
    "transformative", "revolutionize", "unprecedented", "realm",
    "seamless", "leverage", "empower", "unlock", "synergy",
    "democratize", "embark", "beacon", "underscores", "sheds light",
    "cautious optimism", "paradigm shift", "double-edged sword",
    "not merely", "landscape", "furthermore", "moreover",
    "simultaneously", "noteworthy", "notably", "consequently",
    "thus", "hence", "thereby", "highlight", "emerged", "emerging",
    "encompass", "streamline", "bolster", "spearhead", "reshape",
    "redefine", "reimagine", "reconfigure", "significant",
    "striking", "fundamental", "synthesize", "implications",
    "facilitate", "realm",
]

HEDGING_WORDS = [
    "somewhat", "perhaps", "it seems", "it appears",
    "may or may not", "to some extent", "in some ways",
]

# ============================================================
# CHECK FUNCTIONS
# ============================================================
def check_slop_words(lines):
    """Check for banned AI slop words."""
    issues = []
    for i, line in enumerate(lines, 1):
        line_lower = line.lower()
        # Skip comment lines and source citations
        if line.strip().startswith("//") or line.strip().startswith("#text(size: 7pt"):
            continue
        for word in AI_SLOP_WORDS:
            if word in line_lower:
                issues.append((i, f"AI slop word: \"{word}\"", line.strip()[:80]))
    return issues

def check_emdashes(lines):
    """Check for em-dashes (--- in Typst) and en-dashes (--)."""
    issues = []
    for i, line in enumerate(lines, 1):
        if line.strip().startswith("//"):
            continue
        # Typst emdash: ---
        if "---" in line and not line.strip().startswith("#"):
            issues.append((i, "Em-dash (---) found", line.strip()[:80]))
    return issues

def check_colons_in_prose(lines):
    """Check for colons in running prose (not headers, not exhibit titles, not Typst code)."""
    issues = []
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        # Skip: headings, function calls, comments, source lines, Typst code, strings
        if (stripped.startswith("=") or stripped.startswith("#") or
            stripped.startswith("//") or stripped.startswith("[") or
            stripped.startswith("*Source") or not stripped or
            stripped.startswith("table.") or stripped.startswith("text(") or
            stripped.startswith(")") or stripped.startswith("]")):
            continue
        # Skip lines that are Typst key-value args (word: "value" or word: value)
        if re.match(r'^\s*\w+\s*:', stripped):
            continue
        # Skip "Key Insight:" pattern (allowed in callouts)
        if "*Key Insight:*" in stripped or "Key Insight:" in stripped:
            continue
        # Skip bold-label patterns in lists: *Label:* or *Word:*
        if re.search(r'\*[^*]+:\*', stripped):
            continue
        if ":" in stripped:
            # Remove URLs and time formats
            cleaned = re.sub(r'https?://\S+', '', stripped)
            cleaned = re.sub(r'\d+:\d+', '', cleaned)
            if ":" in cleaned:
                issues.append((i, "Colon in prose", stripped[:80]))
    return issues

def check_semicolons(lines):
    """Check for semicolons in prose."""
    issues = []
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if stripped.startswith("//") or stripped.startswith("#"):
            continue
        if ";" in stripped:
            issues.append((i, "Semicolon in prose", stripped[:80]))
    return issues

def check_hedging(lines):
    """Check for hedging language without data."""
    issues = []
    for i, line in enumerate(lines, 1):
        line_lower = line.lower()
        if line.strip().startswith("//"):
            continue
        for word in HEDGING_WORDS:
            if word in line_lower:
                issues.append((i, f"Hedging: \"{word}\"", line.strip()[:80]))
    return issues

def check_passive_voice(lines):
    """Check for common passive voice patterns."""
    passive_patterns = [
        r'\bwas observed\b', r'\bwere found\b', r'\bhas been noted\b',
        r'\bwas determined\b', r'\bcan be seen\b', r'\bit was found\b',
        r'\bwere identified\b', r'\bwas reported\b',
    ]
    issues = []
    for i, line in enumerate(lines, 1):
        if line.strip().startswith("//") or line.strip().startswith("#"):
            continue
        for pattern in passive_patterns:
            if re.search(pattern, line, re.IGNORECASE):
                issues.append((i, f"Passive voice: {pattern}", line.strip()[:80]))
    return issues

def check_sentence_length(lines):
    """Check for sentences exceeding 25 words."""
    issues = []
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        # Only check prose lines
        if (stripped.startswith("=") or stripped.startswith("#") or
            stripped.startswith("//") or stripped.startswith("[") or
            stripped.startswith("+") or stripped.startswith("-") or
            not stripped):
            continue
        # Split into sentences
        sentences = re.split(r'[.!?]+', stripped)
        for sent in sentences:
            words = sent.split()
            if len(words) > 25:
                issues.append((i, f"Sentence too long ({len(words)} words)", sent.strip()[:80]))
    return issues

def check_exhibit_sources(lines):
    """Check that all chart-exhibit and table-exhibit calls have source arguments."""
    issues = []
    full_text = "\n".join(lines)
    # Find all exhibit calls across multiple lines
    for match in re.finditer(r'(chart-exhibit|table-exhibit)\(', full_text):
        # Count quoted strings in the next 200 chars after the match
        start = match.start()
        context = full_text[start:start+300]
        quote_count = len(re.findall(r'"[^"]*"', context))
        if quote_count < 3:
            line_num = full_text[:start].count('\n') + 1
            issues.append((line_num, "Exhibit may be missing source citation", context[:80]))
    return issues

def check_emojis(lines):
    """Check for emoji characters."""
    emoji_pattern = re.compile(
        "[\U0001F600-\U0001F64F\U0001F300-\U0001F5FF\U0001F680-\U0001F6FF"
        "\U0001F1E0-\U0001F1FF\U00002702-\U000027B0\U0001F900-\U0001F9FF"
        "\U0001FA00-\U0001FA6F\U0001FA70-\U0001FAFF\U00002600-\U000026FF]+",
        flags=re.UNICODE
    )
    issues = []
    for i, line in enumerate(lines, 1):
        if emoji_pattern.search(line):
            issues.append((i, "Emoji detected", line.strip()[:80]))
    return issues

# ============================================================
# MAIN
# ============================================================
def main():
    if len(sys.argv) < 2:
        print("Usage: python3 qa_check.py <report.typ>")
        sys.exit(1)

    filepath = Path(sys.argv[1])
    if not filepath.exists():
        print(f"File not found: {filepath}")
        sys.exit(1)

    lines = filepath.read_text().splitlines()
    print(f"\n  Scanning: {filepath.name} ({len(lines)} lines)\n")

    checks = [
        ("AI Slop Words", check_slop_words),
        ("Em-dashes", check_emdashes),
        ("Colons in Prose", check_colons_in_prose),
        ("Semicolons", check_semicolons),
        ("Hedging Language", check_hedging),
        ("Passive Voice", check_passive_voice),
        ("Long Sentences (>25 words)", check_sentence_length),
        ("Missing Sources", check_exhibit_sources),
        ("Emojis", check_emojis),
    ]

    total_issues = 0
    for name, check_fn in checks:
        issues = check_fn(lines)
        if issues:
            print(f"  ✗ {name} ({len(issues)} violations)")
            for line_num, desc, context in issues[:5]:  # Show max 5 per category
                print(f"    L{line_num}: {desc}")
                print(f"           {context}")
            if len(issues) > 5:
                print(f"    ... and {len(issues) - 5} more")
            total_issues += len(issues)
        else:
            print(f"  ✓ {name}")

    print(f"\n  {'PASS' if total_issues == 0 else 'FAIL'}: {total_issues} total violations\n")
    sys.exit(0 if total_issues == 0 else 1)

if __name__ == "__main__":
    main()
