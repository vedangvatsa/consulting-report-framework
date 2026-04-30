#!/usr/bin/env python3
"""
Fact-Check Audit Script
Extracts all quantitative claims and source citations from a Typst report,
then outputs a structured CSV for manual or automated verification.

Run: python3 scripts/fact_check.py reports/your-report.typ
Output: fact_check_audit.csv
"""
import re
import sys
import csv
from pathlib import Path
from datetime import datetime

def extract_claims(lines):
    """Extract lines containing quantitative claims (numbers, percentages, dollar amounts)."""
    claims = []
    # Patterns: $X.XT, X%, X billion, CAGR, etc.
    number_pattern = re.compile(
        r'(\$[\d,.]+[BTMKbtmk]?|[\d,.]+%|\d+[.,]\d+\s*(trillion|billion|million)|'
        r'CAGR|YoY|year-over-year|\d{4})',
        re.IGNORECASE
    )
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        # Skip comments, imports, function definitions
        if (stripped.startswith("//") or stripped.startswith("#import") or
            stripped.startswith("#let") or stripped.startswith("#show") or
            stripped.startswith("#set") or not stripped):
            continue
        if number_pattern.search(stripped):
            claims.append({
                "line": i,
                "text": stripped[:200],
                "verified": "",
                "source": "",
                "notes": "",
            })
    return claims

def extract_sources(lines):
    """Extract all source citations from the report."""
    sources = []
    source_pattern = re.compile(r'^\s*\+\s+(.+)$')
    in_sources = False
    for i, line in enumerate(lines, 1):
        if "Sources" in line or "Bibliography" in line:
            in_sources = True
            continue
        if in_sources:
            match = source_pattern.match(line)
            if match:
                sources.append({
                    "line": i,
                    "citation": match.group(1).strip(),
                    "url_verified": "",
                    "data_current": "",
                })
    return sources

def extract_exhibit_sources(lines):
    """Extract source attributions from chart-exhibit and table-exhibit calls."""
    exhibits = []
    for i, line in enumerate(lines, 1):
        if "chart-exhibit(" in line or "table-exhibit(" in line:
            # Extract quoted strings
            strings = re.findall(r'"([^"]*)"', line)
            exhibit_type = "chart" if "chart-exhibit" in line else "table"
            exhibits.append({
                "line": i,
                "type": exhibit_type,
                "title": strings[1] if len(strings) > 1 else "N/A",
                "source": strings[-1] if len(strings) > 2 else "MISSING",
            })
    return exhibits

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 fact_check.py <report.typ>")
        sys.exit(1)

    filepath = Path(sys.argv[1])
    if not filepath.exists():
        print(f"File not found: {filepath}")
        sys.exit(1)

    lines = filepath.read_text().splitlines()
    report_name = filepath.stem

    # Extract everything
    claims = extract_claims(lines)
    sources = extract_sources(lines)
    exhibits = extract_exhibit_sources(lines)

    # Write claims audit CSV
    claims_file = filepath.parent / f"{report_name}_fact_check.csv"
    with open(claims_file, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["line", "text", "verified", "source", "notes"])
        writer.writeheader()
        writer.writerows(claims)

    # Write sources audit CSV
    sources_file = filepath.parent / f"{report_name}_sources_audit.csv"
    with open(sources_file, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=["line", "citation", "url_verified", "data_current"])
        writer.writeheader()
        writer.writerows(sources)

    # Print summary
    print(f"\n  Fact-Check Audit: {filepath.name}")
    print(f"  {'='*50}")
    print(f"  Quantitative claims found: {len(claims)}")
    print(f"  Source citations found:    {len(sources)}")
    print(f"  Exhibits with sources:     {len([e for e in exhibits if e['source'] != 'MISSING'])}")
    print(f"  Exhibits MISSING sources:  {len([e for e in exhibits if e['source'] == 'MISSING'])}")
    print()

    # Flag exhibits without sources
    missing = [e for e in exhibits if e["source"] == "MISSING"]
    if missing:
        print("  ⚠ EXHIBITS MISSING SOURCE CITATIONS:")
        for e in missing:
            print(f"    L{e['line']}: [{e['type']}] {e['title']}")

    # Print exhibit inventory
    print(f"\n  Exhibit Inventory ({len(exhibits)} total):")
    for e in exhibits:
        status = "✓" if e["source"] != "MISSING" else "✗"
        print(f"    {status} L{e['line']} [{e['type']}] {e['title'][:60]}")
        if e["source"] != "MISSING":
            print(f"      Source: {e['source'][:80]}")

    print(f"\n  Output: {claims_file.name}")
    print(f"  Output: {sources_file.name}")
    print()

if __name__ == "__main__":
    main()
