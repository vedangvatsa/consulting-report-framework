# Consulting Report Framework

A reusable framework for generating boardroom-ready consulting reports from Markdown. Produces polished PDF deliverables with enforced structural rigor (Pyramid Principle, MECE, SCR), data integrity constraints, and professional typography.

## Design Standards

This framework enforces design standards derived from deep research of top-tier consulting report design:

- **Pyramid Principle:** Answer first, then evidence. Every section leads with a bold governing thought.
- **Action Titles:** Section headings and exhibit titles are insight-driven sentences, not descriptive labels.
- **MECE:** All categorizations, frameworks, and segmentations are mutually exclusive and collectively exhaustive.
- **SCR Framing:** Executive summaries use Situation-Complication-Resolution to create urgency and justify the recommendation.
- **Data Recency:** All data must be the most recent available. Stale data is flagged explicitly.
- **Anti-Slop:** 70+ banned AI-generated words/phrases. No em-dashes, no colons in prose, no emojis.
- **Exhibit Standards:** Every exhibit has a numbered action title, a source line, and tells a self-contained story.

## Typography and Color System

| Element | Font | Rationale |
|---|---|---|
| Headings | Arial / Helvetica | Clarity, modernity, data hierarchy |
| Body Text | Georgia | High x-height serif for dense analytical readability |
| Tables & Data | Arial / Helvetica | Maximum legibility for numbers |

| Token | Color | Usage |
|---|---|---|
| `TEXT_PRIMARY` | `#1A1A2E` | Body text (near-black, soft contrast) |
| `BRAND_PRIMARY` | `#0F3460` | Headings, borders, highlighted data |
| `BRAND_SECONDARY` | `#1A936F` | Accent (teal-green for positive changes) |
| `BRAND_ACCENT` | `#E76F51` | Warm terracotta for tertiary emphasis |
| `POSITIVE_GREEN` | `#2D6A4F` | Growth, positive deltas in charts |
| `NEGATIVE_RED` | `#C1292E` | Risk, negative deltas in charts |
| `NEUTRAL_GRAY` | `#BBBBBB` | Background/context data in charts |

## Setup

1.  **Prerequisites:** `pandoc` and `Google Chrome` for PDF generation.
    ```bash
    brew install pandoc
    ```
2.  **Make script executable:**
    ```bash
    chmod +x scripts/generate_pdf.sh
    ```
3.  **Python dependencies** (for chart generation):
    ```bash
    pip install matplotlib seaborn
    ```

## Usage Workflow

1.  **Start a new report:**
    *   Ask the AI: "I want to write a new report. Read the `AI_INSTRUCTIONS.md` file first."
    *   Choose a template from `templates/` and copy it to `reports/`.

2.  **Drafting:**
    *   The AI drafts the report following strict rules from `AI_INSTRUCTIONS.md`.
    *   Charts are generated via Python scripts using `assets/chart_style.py`.

3.  **Generating the PDF:**
    ```bash
    # Single-column consulting style (default)
    ./scripts/generate_pdf.sh reports/my_report.md reports/my_report.pdf

    # Two-column IEEE academic style
    ./scripts/generate_pdf.sh reports/my_report.md reports/my_report.pdf ieee
    ```

## Directory Structure

```
consulting-report-framework/
├── AI_INSTRUCTIONS.md          # Core rules: Pyramid Principle, MECE, SCR, anti-slop,
│                               # data recency, exhibit standards, quality checklist
├── README.md
├── .gitignore
├── pdf-style.css               # Single-column consulting style (Georgia + Arial)
├── pdf-style-ieee.css          # Two-column IEEE academic style
├── assets/
│   └── chart_style.py          # Matplotlib/seaborn style config, color palette,
│                               # helper functions (save_chart, highlight_bar, etc.)
├── reports/                    # Your reports go here
├── scripts/
│   └── generate_pdf.sh         # Markdown → PDF converter (both styles)
└── templates/
    ├── market_analysis.md      # TAM/SAM/SOM, competitive analysis, market entry
    ├── strategic_assessment.md # Growth diagnostics, options analysis, transformation
    ├── due_diligence.md        # Investment thesis, commercial DD, valuation
    └── industry_outlook.md     # Sector trends, disruption mapping, 5-year scenarios
```

## Report Types

| Template | Use Case | Key Frameworks |
|---|---|---|
| `market_analysis.md` | Market sizing and competitive analysis | TAM/SAM/SOM, Porter's Five Forces, positioning maps |
| `strategic_assessment.md` | Company-level strategy and transformation | SCR, weighted options analysis, implementation roadmap |
| `due_diligence.md` | Investment thesis and M&A evaluation | Comps, DCF, precedent transactions, risk matrix |
| `industry_outlook.md` | Sector-level trends and outlook | Scenario analysis (bull/base/bear), disruption vectors |

## Quality Standards Enforced

Every report is validated against a comprehensive checklist covering:

- **Structure:** Cover page, executive summary, governing thoughts, section numbering, pyramid principle
- **Data:** Recency verification, source citations, exhibit numbering, action titles
- **Recommendations:** Specificity (who, what, when, quantified impact), prioritization matrix
- **Writing:** Anti-slop vocabulary filter, active voice, sentence length limits, probabilistic language
- **Output:** Clean PDF rendering, page numbers, no browser artifacts
