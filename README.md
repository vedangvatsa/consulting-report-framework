# Consulting Report Framework

A production-grade system for generating boardroom-ready consulting reports with McKinsey-level design fidelity.

## Architecture

```
consulting-report-framework/
├── AI_INSTRUCTIONS.md        # Comprehensive rules for AI-assisted report generation
├── assets/
│   └── chart_style.py        # McKinsey Blue palette + matplotlib defaults
├── scripts/
│   ├── build.sh              # Full pipeline: charts → QA → fact-check → PDF
│   ├── qa_check.py           # Automated quality assurance (slop words, emdashes, etc.)
│   └── fact_check.py         # Extract claims + sources for verification
├── reports/
│   ├── template.typ          # Typst template with all components
│   ├── charts/               # Generated chart PNGs + generate_charts.py
│   ├── images/               # Unsplash stock photos
│   └── *.typ                 # Report source files
└── templates/                # Markdown report structure templates
```

## Quick Start

```bash
# 1. Build a report (charts + QA + compile)
chmod +x scripts/build.sh
./scripts/build.sh reports/agentic-commerce-report.typ

# 2. Run QA check only
python3 scripts/qa_check.py reports/agentic-commerce-report.typ

# 3. Run fact-check audit only
python3 scripts/fact_check.py reports/agentic-commerce-report.typ

# 4. Compile only
cd reports && typst compile agentic-commerce-report.typ
```

## Design System

### McKinsey Blue Palette
| Token | Hex | Usage |
|---|---|---|
| Brand Primary | `#005EB8` | Chart highlights, KPI borders, exhibit rules |
| Highlight Blue | `#0091DA` | Secondary chart series |
| Dark Blue | `#003A70` | Headings, axis labels |
| Navy | `#16213E` | Cover page, section dividers |
| Silver | `#A2AAAD` | Non-highlighted data, source text |
| Light Gray | `#D9D9D9` | Context data, row fills |

### Typography
| Element | Font | Size |
|---|---|---|
| Report title | Georgia | 38pt |
| H1 section | Georgia | 22pt |
| H2 subsection | Helvetica Neue | 13pt |
| H3 subsection | Helvetica Neue | 11pt |
| Body text | Helvetica Neue | 10.5pt |
| Tables | Helvetica Neue | 9pt |
| Source lines | Helvetica Neue | 7pt |

### Components
| Component | Function |
|---|---|
| `report()` | Document wrapper with full-page navy cover |
| `section-divider()` | Navy divider with section number and title |
| `kpi-grid()` / `kpi-card()` | KPI dashboard (3-4 cards) |
| `chart-exhibit()` | Chart with blue rule, title, and source |
| `table-exhibit()` | Table with blue rule, title, and source |
| `callout()` | Key insight box with navy left border |
| `highlight-stat()` | Large featured statistic |
| `timeline-item()` | Implementation roadmap step |

## Quality Pipeline

### QA Check (`scripts/qa_check.py`)
Automated scanning for:
- AI slop words (60+ banned terms)
- Em-dashes and en-dashes
- Colons and semicolons in prose
- Hedging language without data
- Passive voice constructs
- Sentences exceeding 25 words
- Missing exhibit source citations
- Emoji characters

### Fact-Check Audit (`scripts/fact_check.py`)
Extracts:
- All quantitative claims (dollar amounts, percentages, growth rates)
- All source citations with line numbers
- Exhibit inventory with source attribution status

Outputs CSV files for systematic verification.

## Rules

All rules are codified in `AI_INSTRUCTIONS.md`. Key constraints:

- No AI slop words, no emdashes, no colons in prose, no semicolons
- Every exhibit must have an action title and source citation
- Charts generated via Python only (not AI image tools)
- All data must be verifiable with tier-1 sources
- Probabilistic language for forward-looking statements
- Consistent 0.8em spacing on all block components
- Tables left-aligned (never justified)
- KPI labels under 15 characters with hyphenation disabled
