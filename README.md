# Consulting Report Framework

A production-ready consulting report generation system for boardrooms and executive leadership. Produces two distinct, publication-grade deliverables on any topic:

1. **McKinsey BVOD Executive Digital Briefing**: 10-spread A4 landscape digital report modeled directly on McKinsey & Company's landmark report **[The Business Value of Design (BVOD)](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20design/our%20insights/the%20business%20value%20of%20design/mckinsey-bvod-art-digital-rgb.pdf)**. Enforces strict Two-Tier information density, high-contrast typography (Newsreader Serif + Inter Sans), custom Notion-style vector figures, and zero AI slop.
2. **McKinsey In-Depth Consulting Dossier**: 30–50 page vertical comprehensive strategy study built on [Typst](https://typst.app) with structured exhibits, full-page section dividers, and Python-generated analytical charts.

---

## Deliverable Comparison

| Dimension | Engine 1: McKinsey BVOD Digital Report | Engine 2: McKinsey In-Depth Dossier |
|:---|:---|:---|
| **Primary Audience** | Board of Directors, CEOs, Exec Briefings | Strategy teams, Due Diligence, Technical Review |
| **Geometry** | A4 Landscape (`297mm × 210mm`) | A4 Portrait (`210mm × 297mm`) |
| **Length** | 10–12 Spreads | 30–50 Pages |
| **Engine** | Node.js + Playwright + CSS Grid/Flexbox | Typst + Matplotlib |
| **Typography** | Newsreader Serif (Headlines) + Inter (Body) | Georgia (Headlines) + Helvetica Neue (Body) |
| **Information Density** | Two-Tier (Top Empirical Tier + Bottom Operational Tier) | Standard single-column running prose + exhibits |
| **Visual Style** | Notion / Web3-Jobs line art with cobalt accents | Corporate consulting tables & navy section dividers |

---

## Quick Start

### 1. McKinsey BVOD Digital Landscape Report (Recommended for Briefings)

```bash
# Clone the repository
git clone https://github.com/vedangvatsa/consulting-report-framework.git
cd consulting-report-framework

# Install dependencies
npm install

# Render the flagship report (The Business Value of Agentic Commerce)
npm run build:bvod

# Scaffold a new BVOD report for ANY topic
npm run new:bvod "Autonomous Supply Chain Operations"

# Render your newly created report to landscape PDF
node bvod-engine/cli.mjs render reports/autonomous-supply-chain-operations/report.mjs --preview
```

### 2. McKinsey In-Depth Consulting Dossier (Typst)

```bash
# Generate charts
cd reports && python3 generate_charts.py

# Compile vertical report
typst compile agentic-commerce-report.typ output.pdf
```

---

## Creating a McKinsey BVOD Report on Any Topic

### Step 1: Scaffold with One Command
```bash
npm run new:bvod "Decentralized Physical Infrastructure Networks"
```
This generates a complete project structure in `reports/decentralized-physical-infrastructure-networks/`:
- `report.mjs` — Pre-wired 10-spread report using modular components.
- `data.json` — Structured metrics and metadata file.

### Step 2: Use the Two-Tier Component Library

Every analytical spread uses a Two-Tier architecture to ensure the bottom half of the page is completely filled with structured frameworks:

```javascript
import * as bvod from '../../bvod-engine/components.mjs';

bvod.renderTwoTierSpread({
  sectionTag: "SECTION 01",
  docTopic: "DELEGATION PARADOX",
  headline: "When software acts as an agent, checkout clicks cease to serve as proxies for consent.",
  narrative: "Executive narrative explaining the empirical findings...",
  exhibitLeft: bvod.renderTableExhibit({ ... }),
  exhibitRight: bvod.renderTableExhibit({ ... }),
  tierBottom: bvod.renderFrameworkCards([
    { title: "1. Token Siloing", desc: "Isolate credentials via short-lived virtual cards." },
    { title: "2. Verifiable Intent", desc: "Hardware-signed constraints prevent unauthorized drift." },
    { title: "3. Settlement Locks", desc: "Deterministic price freezes eliminate cart surprise." }
  ], 3),
  bottomTakeaway: {
    title: "Strategic Takeaway",
    text: "Autonomous operations cannot scale on raw transaction throughput."
  },
  pageNum: 3,
  totalPages: 10,
});
```

See the full [BVOD Design System Guide](docs/BVOD_DESIGN_SYSTEM.md) for detailed layout rules, component schemas, and color tokens.

---

## Design System & No-Slop Standards

### Strict No-Slop UI Rules
Adheres to `no-slop-ui` standards to guarantee publication quality:
- ❌ **No Floating Glow Cards**: Flat 1px borders (`#e5e7eb`) with solid top accents (`#0038FF`).
- ❌ **No Empty Lower Canvas**: Top tier houses empirical evidence; bottom tier houses operational frameworks.
- ❌ **No AI Slop Badges**: High-signal monospace parameter chips with verified values only.
- ❌ **No Synthetic Imagery**: Handcrafted SVG vector figures (Notion line art with cobalt blue accents).

### Color Tokens
| Token | Hex | Role |
|:---|:---|:---|
| `--charcoal` | `#111827` | Headings, primary ink |
| `--paper` | `#fafaf9` | Warm paper background |
| `--blue` | `#0038FF` | Primary McKinsey Cobalt accent, stats, key takeaways |
| `--steel` | `#4b5563` | Subtitles, captions, table headers |
| `--rule` | `--e5e7eb` | Structural dividing rules & card borders |

---

## Repository Structure

```
consulting-report-framework/
├── package.json                   # Node.js build scripts & dependencies
├── bvod-engine/                   # McKinsey BVOD Landscape Report Engine
│   ├── cli.mjs                    # CLI dispatcher (render, new, preview, test)
│   ├── engine.mjs                 # Playwright A4 landscape rendering pipeline
│   ├── components.mjs             # Modular spread & exhibit generators
│   └── design-system.css          # Core CSS variables, typography & layout grid
├── docs/
│   └── BVOD_DESIGN_SYSTEM.md      # Comprehensive design system guide
├── templates/
│   ├── bvod/                      # Landscape BVOD starter templates
│   │   └── executive-briefing-template.mjs
│   ├── due_diligence.md           # Vertical Typst report templates
│   ├── industry_outlook.md
│   ├── market_analysis.md
│   └── strategic_assessment.md
├── reports/
│   ├── agentic-commerce-bvod/     # Flagship 10-spread BVOD report
│   │   ├── report.mjs
│   │   ├── data.json
│   │   └── The_Business_Value_of_Agentic_Commerce.pdf
│   ├── agentic-commerce-report.typ # Vertical 50-page Typst report
│   └── template.typ               # Typst template
└── scripts/
    ├── build.sh                   # Typst build pipeline
    ├── qa_check.py                # Report quality assurance
    └── fact_check.py              # Data citation verification
```

---

## Writing Guidelines

### The Pyramid Principle (Barbara Minto)
- Lead with the answer, then support with empirical evidence.
- Every section begins with a single bold governing thought.
- Use SCR (Situation-Complication-Resolution) framing for executive summaries.

### Data Discipline
- Every claim must cite primary audit data or tier-1 empirical benchmarks.
- Use triangulated estimates (3+ independent sources minimum).
- Zero hallucinated metrics or date bumping.

---

## License

Private repository. All rights reserved.
