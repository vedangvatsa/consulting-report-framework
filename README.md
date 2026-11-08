# Consulting Report Framework

A production-grade consulting report generation system for boardrooms and executive leadership. Produces publication-grade, decision-ready deliverables on **any given topic** in two distinct, anti-AI-slop design aesthetics:

1. **McKinsey BVOD Executive Briefing**: 10-spread A4 landscape digital report modeled directly on McKinsey & Company's landmark report **[The Business Value of Design (BVOD)](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20design/our%20insights/the%20business%20value%20of%20design/mckinsey-bvod-art-digital-rgb.pdf)**. Features high-contrast editorial typography (Newsreader Serif + Inter Sans), McKinsey Cobalt `#0038FF` accents, Two-Tier analytical density, and custom vector figures.
2. **Notion Aesthetic Consulting Report**: 10-spread A4 landscape report featuring clean, unpretentious **Inter typography throughout**, warm ink (`#191919` / `#2f3437`), soft ivory fills (`#fbfbfa`), and handcrafted Notion-style minimalist vector line-art illustrations (analyst with clipboard, workstation console, package dilemma). Built strictly as a genuine consulting deliverable—**not** literal UI widgets or fake browser breadcrumbs.
3. **McKinsey In-Depth Consulting Dossier**: 30–50 page vertical comprehensive strategy study built on [Typst](https://typst.app) with structured exhibits and Python-generated analytical charts.

---

## Aesthetic & Architecture Comparison

| Dimension | Style 1: McKinsey BVOD (`styles/mckinsey`) | Style 2: Notion Aesthetic (`styles/notion`) | Style 3: Typst Dossier |
|:---|:---|:---|:---|
| **Target Audience** | Board of Directors, CEOs, Exec Committees | Executive teams, Tech Leaders, Product Councils | Deep-dive strategy & due diligence |
| **Geometry** | A4 Landscape (`297mm × 210mm`) | A4 Landscape (`297mm × 210mm`) | A4 Portrait (`210mm × 297mm`) |
| **Typography** | Newsreader Serif (Headings) + Inter (Body) | Pure Inter 700 / 600 / 400 throughout | Georgia + Helvetica Neue |
| **Color Palette** | McKinsey Cobalt (`#0038FF`) + Charcoal (`#111827`) | Warm Ink (`#191919`) + Soft White (`#fbfbfa`) + Blue (`#2383e2`) | Navy (`#002060`) + Cool Gray |
| **Illustrations** | Handcrafted editorial vector silhouettes | Handcrafted Notion-style minimalist line art | Matplotlib & Typst diagrams |
| **Layout Density** | Two-Tier (Zero empty lower canvas) | Two-Tier (Zero empty lower canvas) | Running prose + embedded figures |
| **Build Command** | `npm run build:mckinsey` | `npm run build:notion` | `npm run build:typst` |
| **Scaffold New** | `npm run new:mckinsey "Topic"` | `npm run new:notion "Topic"` | `./scripts/build.sh` |

---

## Quick Start

### 1. Build the Flagship Deliverables
Both styles include complete, 10-spread, high-density reports on **The Business Value of Agentic Commerce**:

```bash
# Install dependencies (Playwright headless Chromium)
npm install

# 1. Compile McKinsey BVOD Report (10 spreads, A4 Landscape)
npm run build:mckinsey
# Output: reports/agentic-commerce-bvod/The_Business_Value_of_Agentic_Commerce.pdf

# 2. Compile Notion Aesthetic Report (10 spreads, A4 Landscape)
npm run build:notion
# Output: reports/agentic-commerce-notion/The_Business_Value_of_Agentic_Commerce_Notion.pdf

# Run full test suite across both engines
npm test
```

### 2. Scaffold a New Report on Any Topic
You can instantly scaffold a complete 10-spread consulting report on any topic in either style:

```bash
# Create a new McKinsey BVOD report:
npm run new:mckinsey "Decentralized Physical Infrastructure Networks"
# Scaffolds into: reports/decentralized-physical-infrastructure-networks/

# Create a new Notion style report:
npm run new:notion "AI Agents in Enterprise Procurement"
# Scaffolds into: reports/ai-agents-in-enterprise-procurement-notion/
```

To compile your newly created report:
```bash
# Render McKinsey report
node bvod-engine/cli.mjs render reports/decentralized-physical-infrastructure-networks/report.mjs --preview

# Render Notion report
node styles/notion/notion-cli.mjs render reports/ai-agents-in-enterprise-procurement-notion/report.mjs --preview
```

---

## Elimination of Empty Canvas & Anti-AI-Slop Architecture

Earlier automated design tools often left the lower 40–50% of landscape slides completely empty, resulting in unbalanced, lightweight-looking pages. This framework solves this systematically via a strict **Two-Tier Architecture**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ TOP TIER: EMPIRICAL EVIDENCE & NARRATIVE (320px)                       │
│ ┌──────────────────────────────────┐ ┌───────────────────────────────┐ │
│ │ Bold Governing Serif/Sans Header │ │ Primary Data Exhibit /        │ │
│ │ Substantive Analytical Prose (x2)│ │ Empirical Benchmark Table     │ │
│ └──────────────────────────────────┘ └───────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ BOTTOM TIER: OPERATIONAL FRAMEWORKS & ACTIONABLE DETAIL (280px)        │
│ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌──────────────┐ │
│ │ Pillar Card 1 │ │ Pillar Card 2 │ │ Pillar Card 3 │ │ Pillar Card 4│ │
│ └───────────────┘ └───────────────┘ └───────────────┘ └──────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Secondary Industry Breakdown / Jurisdictional Matrix / Sprint Plan │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Bottom Takeaway Strip (Bold Takeaway + Executive Action)           │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Strict Anti-AI-Slop Standards
Adheres to `no-slop-ui` standards to guarantee publication quality:
- ❌ **No Floating Glow Cards or Rainbow Pills**: Flat 1px borders (`#e5e7eb` / `#dfdfde`) with subtle 3px solid top accents.
- ❌ **No Empty Lower Half**: Two-tier composition guarantees that every spread is balanced and fully utilized from header rule to footer.
- ❌ **No AI Slop Badges**: High-signal monospace parameter chips with verified values only.
- ❌ **No Fake UI Chrome**: In Notion style, we capture the font hierarchy and line-art illustration warmth without putting fake browser tabs, fake toggle arrows, or fake breadcrumbs.
- ❌ **No Fabricated Data**: Grounded in real empirical datasets (100,000 domain web census, 15 benchmarks, 7,400 survey respondents).

---

## Repository Structure

```
consulting-report-framework/
├── package.json                          # Node.js scripts & Playwright dependency
│
├── styles/                               # Report Style Engines
│   ├── mckinsey/                         # McKinsey BVOD Style
│   │   ├── cli.mjs                       # CLI runner
│   │   ├── engine.mjs                    # Playwright A4 Landscape engine
│   │   ├── components.mjs                # Two-tier spread & exhibit generators
│   │   ├── design-system.css             # Newsreader + Inter, Cobalt accents
│   │   └── README.md
│   │
│   └── notion/                           # Notion Aesthetic Style
│       ├── notion-cli.mjs                # CLI runner
│       ├── notion-engine.mjs             # Playwright A4 Landscape engine
│       ├── notion-components.mjs         # Handcrafted Notion line-art & components
│       ├── notion-design-system.css      # Pure Inter typography, warm minimal
│       └── README.md
│
├── bvod-engine/                          # Core BVOD engine implementation
│   ├── cli.mjs
│   ├── engine.mjs
│   ├── components.mjs
│   └── design-system.css
│
├── templates/                            # Topic Scaffolding Starters
│   ├── bvod/
│   │   └── executive-briefing-template.mjs # 10-spread McKinsey starter
│   └── notion/
│       └── executive-presentation-template.mjs # 10-spread Notion starter
│
├── reports/                              # Completed Deliverables & Dossiers
│   ├── agentic-commerce-bvod/            # Flagship McKinsey BVOD 10-Spread Deliverable
│   │   ├── report.mjs
│   │   ├── The_Business_Value_of_Agentic_Commerce.pdf (1.09 MB)
│   │   └── previews/                     # Verified 150 DPI PNG page proofs (1-10)
│   │
│   ├── agentic-commerce-notion/          # Flagship Notion Style 10-Spread Deliverable
│   │   ├── report.mjs
│   │   ├── The_Business_Value_of_Agentic_Commerce_Notion.pdf (1.05 MB)
│   │   └── previews/                     # Verified 150 DPI PNG page proofs (1-10)
│   │
│   ├── agentic-commerce-report.typ       # In-Depth 50-Page Typst Dossier
│   └── generate_charts.py
│
└── docs/
    └── BVOD_DESIGN_SYSTEM.md             # In-depth architectural documentation
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
