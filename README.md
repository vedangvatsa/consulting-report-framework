# Consulting Report Framework

A production-ready, McKinsey-style consulting report generation system built on [Typst](https://typst.app). Generate 50-page boardroom-ready reports on any topic by providing just a topic name.

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/vedangvatsa/consulting-report-framework.git
cd consulting-report-framework

# 2. Generate charts
cd reports && python3 generate_charts.py

# 3. Compile the report
typst compile report.typ output.pdf
```

## How to Create a New Report

### Step 1: Define Your Topic
Replace the content in `report.typ` while keeping the template import:

```typst
#import "template.typ": *

#show: report.with(
  title: "Your Report Title",
  subtitle: "Subtitle describing scope",
  author: "Your Name",
  date: "Month Year",
)
```

### Step 2: Use the Component Library

The template provides these components:

| Component | Usage | Purpose |
|-----------|-------|---------|
| `#section-divider("01", "Title", "Subtitle")` | Full-page navy divider | Major section breaks |
| `#table-exhibit(N, "Title", "Source")[...]` | Data table with caption | Structured data display |
| `#chart-exhibit(N, "Title", "path.png", "Source")` | Chart with caption | Visual data |
| `#callout[...]` | Blue-bordered insight box | Key takeaways |
| `#kpi-grid(kpi-card(...), ...)` | KPI dashboard | Executive summary stats |
| `#highlight-stat("Value", "Label", "Trend")` | Single stat callout | Emphasis numbers |

### Step 3: Follow the Report Structure

Every report should follow this 12-section structure:

```
01. Historical Context     — How did we get here?
02. Market Definition      — What exactly are we analyzing?
03. Market Sizing          — TAM, SAM, SOM with triangulated estimates
04. Competitive Landscape  — Who are the key players?
05. Value Chain Analysis   — How does value flow?
06. Consumer/User Analysis — What do users want?
07. Investment Landscape   — Where is capital flowing?
08. Risk Assessment        — What could go wrong?
09. Data Science Modeling  — What do the models say?
10. Scenario Analysis      — Bear, base, bull cases
11. Strategic Recommendations — What should stakeholders do?
12. Appendix               — Methodology, glossary, sources
```

### Step 4: Generate Charts

Update `generate_charts.py` with your data. Follow the existing pattern:

```python
# Use the style system
from generate_charts import apply_style, BRAND_PRIMARY, ACCENT, PALETTE
apply_style()

# Create chart
fig, ax = plt.subplots(figsize=(7, 3.2))
# ... your chart code ...
save(fig, 'your_chart.png')
```

### Step 5: Compile

```bash
typst compile report.typ output.pdf
```

## Design System

### Color Palette (McKinsey Blue)
| Token | Hex | Usage |
|-------|-----|-------|
| `mckinsey-blue` | `#005EB8` | Primary accent, headers |
| `dark-blue` | `#003A70` | Deep headings |
| `navy` | `#16213E` | Cover, dividers, table headers |
| `steel` | `#5E6B7A` | Captions, secondary text |
| `silver` | `#A2AAAD` | Borders, axes |

### Typography
- **Headlines**: Georgia (serif), 16-38pt
- **Body**: Helvetica Neue (sans-serif), 10.5pt
- **Captions**: 8pt, steel color

### Layout Rules
1. Every H2 heading gets `pagebreak(weak: true)`
2. Section dividers are full-page navy backgrounds
3. All exhibits use `breakable: false` (atomic blocks)
4. Tables use alternating row fills (`#F7F8FA` / white)
5. Fill page gaps with analytical prose before section breaks

## File Structure

```
consulting-report-framework/
├── README.md
├── reports/
│   ├── template.typ          # Reusable template (DO NOT MODIFY)
│   ├── report.typ            # Current report content
│   ├── generate_charts.py    # Chart generation script
│   ├── images/
│   │   ├── cover-bg.png      # Cover page background
│   │   └── section-bg.png    # Section divider background
│   └── charts/               # Generated chart PNGs
└── assets/                   # Shared assets and backups
```

## Writing Guidelines

### Pyramid Principle
- Lead with the answer, then support with data
- Every section starts with a bold, italicized thesis statement
- Use SCR (Situation-Complication-Resolution) for executive summaries

### Data Discipline
- Every claim needs a source citation
- Use triangulated estimates (3+ sources minimum)
- Present ranges, not point estimates
- Include confidence levels for projections

### Anti-Patterns (Avoid These)
- ❌ Vague language ("significant growth", "many companies")
- ❌ Unsourced claims
- ❌ Point estimates without ranges
- ❌ Generic recommendations ("companies should innovate")
- ❌ Empty pages or large whitespace gaps

## Dependencies

- [Typst](https://typst.app) (latest)
- Python 3.10+ with: `matplotlib`, `seaborn`, `numpy`, `scipy`
- Fonts: Georgia, Helvetica Neue (system fonts on macOS)

## License

Private repository. All rights reserved.
