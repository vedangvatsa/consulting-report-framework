# McKinsey BVOD Digital Consulting Report Design System

A publication-grade executive digital report framework modeled directly on McKinsey & Company's landmark report **[The Business Value of Design (BVOD)](https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20design/our%20insights/the%20business%20value%20of%20design/mckinsey-bvod-art-digital-rgb.pdf)**.

Designed for high-converting executive briefings, board-level strategy decks, and empirical technology reports that demand high information density, literary authority, and zero AI slop.

---

## 1. Core Design Philosophy

Traditional slide decks often suffer from extreme emptiness: a single headline, a tiny icon, and three bullet points floating in vast blank space. Conversely, generic AI design generators produce "AI slop": gratuitous gradient borders, rainbow cards, meaningless floating badges, and centered fluff.

The BVOD design system solves both extremes by enforcing **structured information density**:

1. **A4 Landscape Reading Geometry**: Standard `297mm × 210mm` digital landscape orientation optimized for iPad/laptop screens and high-resolution print PDF.
2. **Two-Tier Layout Architecture**: Every analytical spread is split into an upper empirical tier and a lower operational framework tier, completely eliminating empty lower-half voids.
3. **High-Contrast Two-Tone Palette**: Grounded in Charcoal Ink (`#111827`), Warm Paper (`#fafaf9`), and a single focused McKinsey Cobalt Blue (`#0038FF`).
4. **Editorial Typography**: Literary Serif (`Newsreader`) for headlines, pull quotes, and 58px numerals; Grotesque Sans (`Inter`) for body copy, data tables, and operational consoles.
5. **No AI Slop (`no-slop-ui`)**: No unnecessary wrapper cards, no rainbow gradients, no uppercase letter-spacing overuse, and zero synthetic AI-generated images. All illustrations are crisp, monochrome SVG line drawings with a single cobalt accent.

---

## 2. The Two-Tier Layout Architecture

Every analytical spread (Pages 3 through 10) follows this vertical proportion:

```
┌────────────────────────────────────────────────────────────────────────┐
│ SECTION TAG                                           DOCUMENT TOPIC   │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 1: EMPIRICAL EVIDENCE & NARRATIVE (~48% Height)                   │
│                                                                        │
│ ┌───────────────────────────────┐ ┌──────────────────────────────────┐ │
│ │ Headline (Newsreader Serif)   │ │ Primary Empirical Exhibit        │ │
│ │ Executive narrative paragraph │ │ (Data Table or Bar Chart)        │ │
│ └───────────────────────────────┘ └──────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ TIER 2: OPERATIONAL FRAMEWORKS & DIAGNOSTICS (~42% Height)             │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 3-Card, 4-Card, 5-Card, or 2x4 Pipeline Grid                       │ │
│ │ (Actionable principles, failure modes, or parameter consoles)      │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Full-Width Strategic Bottom Strip (.bottom-strip)                  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Footer Title                                               Page N of M │
└────────────────────────────────────────────────────────────────────────┘
```

### Why This Architecture Works
- **Top Tier (Empirical)**: Establishes the governing thought and provides hard evidence (e.g., benchmark pass rates, unit economics, census statistics).
- **Bottom Tier (Operational)**: Answers the executive "So What?" with concrete frameworks, operational parameters, or diagnostic checklists.
- **Bottom Strip**: Anchors the page immediately above the footer rule, ensuring the lower canvas feels intentional and complete.

---

## 3. The 10-Spread Executive Structure

Every McKinsey BVOD report follows a standardized 10-spread narrative progression:

| Page | Spread Name | Content & Structure |
|:---:|:---|:---|
| **1** | **Cover Page** | Report title, scope subtitle, 3 metadata badges, author & DOI colophon, Notion-style workstation SVG hero. |
| **2** | **Executive Summary (McKinsey Page 4)** | Large 28px blue serif pull-quote, 3 numbered key findings, 4 stacked 58px blue numerals, and the standing businesswoman SVG figure. |
| **3** | **Section 01: Core Problem & Authority Tiers** | The Delegation Paradox; Authority levels table (Advice, Staging, Autonomous); Unit economics table; Failure case study + Pre-Transaction parameter console. |
| **4** | **Section 02: Architectural Taxonomy** | The 4 Foundational Pillars (Readiness Index); 10,000-domain web census audit table; 4-card operational framework grid. |
| **5** | **Section 03: Empirical Benchmarks** | Multi-turn task accuracy cliffs; EComAgentBench bar chart; Inspection ceiling search economics table; 3 failure diagnosis cards (Position Bias, Ad Distortion, Prompt Injection). |
| **6** | **Section 04: Consumer Trust & Behavioral Limits** | Survey findings ($N=7,400$); Delegation acceptance bar chart; Liability allocation matrix; 3 behavioral trust cards (Algorithmic Aversion, 5% Control Threshold, Asymmetric Recovery). |
| **7** | **Section 05: Payment Rails & Threat Models** | Emerging protocol comparison (ACP, UCP, AP2, x402); Security threat models table; 3 core protocol principles (Token Siloing, Hardware Intent, Settlement Locks). |
| **8** | **Section 06: Purchase Integrity Pipeline** | Statutory consumer law & electronic agency; Regulatory landscape table; 2×4 grid of 8 operational verification checkpoints. |
| **9** | **Section 07: Executive Diagnostic** | Readiness scoring methodology; Performance tiers table (Native, Partial, Blocked); 5 Board-Level Diagnostic Checklist cards. |
| **10** | **Section 08: Strategic Roadmap & Moats** | Outlier moat performance table; 3-Phase Execution Roadmap (M1–3 Discovery, M4–8 Checkout, M9–12 Post-Settle); Formal DOI open-access colophon. |

---

## 4. Component Library Reference

All components are available in `bvod-engine/components.mjs`:

### 4.1 Cover Page
```javascript
import * as bvod from '../../bvod-engine/components.mjs';

bvod.renderCoverPage({
  superHeader: "EMPIRICAL RESEARCH REPORT | STRATEGIC BRIEFING",
  title: "The Business Value of Autonomous Systems",
  subtitle: "Taxonomy, empirical benchmarks, and operational readiness architecture for enterprise leadership.",
  metadataBoxes: [
    { value: "10,000+ AUDITED", label: "Full-scale census", highlight: true },
    { value: "15 BENCHMARKS", label: "Multi-turn evaluations" },
  ],
  author: "Research Team",
  authorTitle: "Lead Strategy Analyst",
  doi: "10.5281/zenodo.0000000",
});
```

### 4.2 Stats Hero Spread (McKinsey Page 4)
```javascript
bvod.renderStatsHeroSpread({
  sectionTag: "EXECUTIVE SUMMARY",
  docTopic: "EMPIRICAL SCOPE & FINDINGS",
  quote: "“The most extensive and rigorous research undertaken anywhere...”",
  findings: [
    { title: "The Delegation Trap", text: "Automated task completion does not equal satisfaction..." },
    { title: "The Capability Gap", text: "Models degrade under multi-turn constraints..." },
    { title: "The Trust Deficit", text: "Users embrace advice but reject unverified checkout..." }
  ],
  stats: [
    { num: "100,000", caption: "commercial endpoints audited for machine-readable readiness." },
    { num: "57.1%", caption: "task accuracy ceiling on frontier benchmarks." },
    { num: "55.0%", caption: "consumers uncomfortable granting autonomous spending authority." },
    { num: "50.8%", caption: "buyers assigning direct financial liability to the AI platform." }
  ],
  bottomCallout: {
    title: "The Strategic Mandate",
    text: "Shift from friction to verifiable intent."
  },
  pageNum: 2,
  totalPages: 10,
});
```

### 4.3 Two-Tier Spread
```javascript
bvod.renderTwoTierSpread({
  sectionTag: "SECTION 01",
  docTopic: "AUTHORITY LEVELS & ECONOMICS",
  headline: "When software acts as a purchasing agent, checkout clicks cease to serve as valid proxies for intent.",
  narrative: "Executive narrative explaining the empirical findings...",
  exhibitLeft: bvod.renderTableExhibit({ ... }),
  exhibitRight: bvod.renderTableExhibit({ ... }),
  tierBottom: bvod.renderFrameworkCards([ ... ], 3),
  bottomTakeaway: {
    title: "Strategic Takeaway",
    text: "Autonomous operations cannot scale on raw transaction throughput."
  },
  pageNum: 3,
  totalPages: 10,
});
```

### 4.4 Data Tables and Horizontal Bar Charts
```javascript
// Table Exhibit
bvod.renderTableExhibit({
  title: "Infrastructure Census Audit",
  headers: ["Capability", "Supported", "Deficit"],
  rows: [
    ["Machine-Readable Endpoints", "2.1%", "<strong>97.9% Missing</strong>"],
    ["WAF Blocking AI Agents", "22.4%", "<strong>77.6% Blocking</strong>"],
  ],
  footer: "Audited across 10,000 domains."
});

// Bar Chart Exhibit
bvod.renderBarChartExhibit({
  title: "Exhibit 1: Complete-Task Success Rate",
  items: [
    { label: "Claude Opus 4.6", pct: 57.1, value: "57.1%" },
    { label: "GPT-5.4", pct: 51.3, value: "51.3%" },
    { label: "Baseline", pct: 29.4, value: "29.4%", color: "var(--charcoal)" },
  ]
});
```

### 4.5 Interactive-Style Parameter Consoles
```javascript
bvod.renderParameterConsole({
  title: "Pre-Transaction Console (Deterministic Boundaries)",
  subtitle: "Cryptographic parameters enforced before transaction execution:",
  parameters: [
    { label: "SPEND CAP", value: "$450.00 Max", sub: "Hardware Signed" },
    { label: "RETURN SLA", value: "14-Day Free", sub: "Zero Restock Fee" },
    { label: "FIT ENVELOPE", value: "27\" x 30\" x 39\"", sub: "Doorway Verified" },
  ]
});
```

---

## 5. How to Create a New Report on Any Topic

### Step 1: Scaffold a New Report
From the repository root, run:
```bash
npm run new:bvod "Autonomous Supply Chain Operations"
```
This automatically generates:
- `reports/autonomous-supply-chain-operations/report.mjs`
- `reports/autonomous-supply-chain-operations/data.json`

### Step 2: Populate Data and Customize Spreads
Edit `reports/autonomous-supply-chain-operations/report.mjs`:
- Fill in your industry-specific metrics, benchmarks, and survey data.
- Customize the 10 spreads using the modular components.
- Ensure all claims pass the **Pyramid Principle** and **So-What Test**.

### Step 3: Render and Preview
```bash
# Render to landscape PDF
node bvod-engine/cli.mjs render reports/autonomous-supply-chain-operations/report.mjs --preview

# Or use npm script
npm run build:bvod
```

The compiled PDF will be generated instantly and opened in your system's PDF viewer.

---

## 6. Anti-Patterns Checklist (Strictly Prohibited)

- ❌ **Empty Lower Canvas**: Leaving the bottom 40% of the page blank. Every page must use the Two-Tier architecture with structured framework cards.
- ❌ **AI Slop Cards**: Cards with multi-colored gradient borders, box shadows, or glowing effects. Use flat 1px borders with a solid blue or charcoal top accent.
- ❌ **Gratuitous Badges**: Floating rounded pills that convey no metrics. Use only high-signal parameter chips with values and labels.
- ❌ **Fabricated Numbers**: Every number must be grounded in primary audits, 10-K filings, or benchmark citations.
- ❌ **Sentence Over-Length**: Sentences exceeding 25 words or heavy with passive voice. Use crisp, declarative executive prose.
