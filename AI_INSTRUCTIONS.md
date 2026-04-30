# AI Assistant Guidelines for Consulting Report Generation

Whenever you are asked to write or assist in writing a consulting report in this repository, you **MUST** strictly adhere to the following rules. These rules are designed to produce boardroom-ready deliverables that read as if prepared by a top-tier strategy consultancy. No exceptions.

---

## 1. Stylistic and Vocabulary Constraints

*   **NO AI SLOP WORDS:** Do not use words or phrases typical of AI generation. This includes but is not limited to: *delve, tapestry, testament, navigate/navigating, multifaceted, robust, foster, pivotal, catalyst, transformative, revolutionize, unprecedented, realm, seamless, leverage, empower, unlock, synergy, democratize, embark, beacon, underscores, sheds light, cautious optimism, paradigm shift, double-edged sword, not merely X but Y, landscape, furthermore, moreover, simultaneously, noteworthy, notably, consequently, thus, hence, thereby, highlight, emerged, emerging, encompass, streamline, bolster, spearhead, reshape, redefine, reimagine, reconfigure, significant, striking, fundamental, synthesize, implications, facilitate, foster, realm, shift* (when describing attitudinal/data changes).
*   **NO EM-DASHES:** Do not use em-dashes (`—`) or en-dashes (`–`) for punctuation in sentences. Use commas, periods, or parentheses instead.
*   **NO COLONS IN PROSE:** Do not use colons (`:`) in running prose. Use periods or commas instead. Colons are permitted only in exhibit titles, section headers, source citations, and the cover page.
*   **NO EMOJIS:** The text must be strictly professional. Zero tolerance.
*   **NO SEMICOLONS IN PROSE:** Avoid semicolons in body text. Break into two sentences instead.
*   **CRISP, DIRECT LANGUAGE:** Write in short, punchy sentences. Every sentence conveys exactly one idea. Avoid subordinate clause chains. If a sentence exceeds 25 words, break it. Prefer concrete nouns and active verbs over abstract nominalizations.
*   **ACTIVE VOICE:** Use active voice and declarative sentences. Lead with the insight, not the context. "Revenue grew 14%" not "A growth of 14% in revenue was observed."
*   **ACTION-ORIENTED FRAMING:** Frame findings as decisions, not observations. Say "Companies should invest in X" not "It was found that X is important." Every recommendation must imply a clear next step.
*   **SO-WHAT TEST:** Every paragraph must pass the "so what?" test. If a section does not directly inform a decision or recommendation, cut it. If a data point does not change the reader's understanding, remove it.
*   **THE 60-SECOND RULE:** If a reader cannot grasp the main message of any page within 60 seconds, the page is too complex. Simplify.
*   **NO HEDGING WITHOUT DATA:** Do not hedge conclusions with vague language ("somewhat," "perhaps," "it seems"). Either state the finding with confidence backed by data, or use precise probabilistic language ("we estimate a 60-70% probability").

---

## 2. Research and Data Integrity

*   **NO HALLUCINATIONS OR DATE BUMPING:** Never invent data, citations, market sizes, or survey results. Never artificially bump publication years to make research seem "newer." All quantitative data and source material must be fiercely fact-checked, factual, and verifiable.
*   **DATA RECENCY MANDATE:** Always use the most recent available data. When citing market sizes, growth rates, or industry statistics, the data must be from the most recent year available. If you cite a 2022 figure when a 2024 or 2025 figure exists, you have failed. Before using any data point, actively search for the most current version. When the most recent data available is older than 2 years, explicitly note the vintage (e.g., "as of 2023, the most recent available data"). Never present stale data without disclosure.
*   **SOURCE RECENCY HIERARCHY:** Prioritize sources in this order: (1) Latest annual reports and 10-K filings, (2) Current-year industry reports from tier-1 analysts (Gartner, IDC, Statista, CB Insights, PitchBook), (3) Government and multilateral data (World Bank, OECD, BLS, Eurostat), (4) Peer-reviewed research. If a source is more than 3 years old, explicitly justify why no newer source exists.
*   **OPEN, PROBABILISTIC LANGUAGE:** When describing future trends, predictions, or market sizing, always use "open" words (e.g., *can, may, could, is likely to, is expected to, appears to, we estimate*) instead of "closed" definitive words (e.g., *will, should, must, shall*). This ensures the analysis remains semantically accurate regardless of how the future unfolds.
*   **USE SYMBOLS FOR DATA:** Always use the `%` symbol instead of writing out "percent." Always use `$` or appropriate currency symbols with numbers. Use `~` for approximations (e.g., ~$4.2B).
*   **ROUND NUMBERS SENSIBLY:** Executives do not need two decimal places. Round to meaningful precision: $4.2B not $4,217,342,891. Use "~" to signal approximation. Exception: when precision matters for the argument (e.g., margins, growth rates), show one decimal place.
*   **CHART GENERATION:** Do not use AI image generators to create charts, as they hallucinate text and numbers. You MUST write a Python script (using matplotlib or seaborn) to generate charts based on accurate data, save them as `.png` files (200 DPI, white background) in the report directory. Use the consulting style configuration from `assets/chart_style.py`. **Charts must NOT contain their own titles** -- titles are handled by the Typst `chart-exhibit` component.
*   **USE EXHIBITS:** Label all data displays as "Exhibit" (not "Table" or "Figure"). Number them sequentially (Exhibit 1, Exhibit 2, etc.). Every exhibit must have:
    1. An **action title** (a complete sentence stating the insight, not a descriptive label)
    2. Clear axis labels and units
    3. A **source line** in 8pt italic text below the exhibit
*   **EXHIBIT ACTION TITLES:** Exhibit titles must be insight-driven sentences, not descriptions. Write "North America accounts for 62% of global SaaS revenue" NOT "Global SaaS Revenue by Region." If you cover the data and only read the title, the key takeaway must be clear.
*   **VERIFIABILITY:** Prioritize industry-standard data sources: Gartner, IDC, CB Insights, PitchBook, World Bank, OECD, BLS, Eurostat, company 10-K/annual reports, Statista, Bloomberg, S&P Capital IQ. Always cite the source organization, publication title, and year. Generic phrases like "industry reports suggest" are not acceptable.
*   **CROSS-REFERENCE DATA:** When a critical data point drives a recommendation, cross-reference it with at least one independent source. If only one source exists, flag it explicitly: "Note: single-source estimate."

---

## 3. Structural Rules (Pyramid Principle, MECE, SCR)

### 3.1 The Pyramid Principle (Barbara Minto)
Structure all arguments top-down:
1. **State the answer/recommendation first** (the governing thought)
2. **Group supporting arguments** beneath it (3-5 arguments, MECE)
3. **Provide evidence** for each argument (data, exhibits, analysis)

A reader who reads only the governing thoughts of each section should understand the entire report's argument without reading any body text.

### 3.2 Situation-Complication-Resolution (SCR)
Use SCR framing for the executive summary and for each major section introduction:
- **Situation:** One sentence establishing the current state (facts everyone agrees on)
- **Complication:** One sentence identifying the tension, problem, or change that demands action
- **Resolution:** One sentence stating the recommended response

### 3.3 MECE (Mutually Exclusive, Collectively Exhaustive)
All frameworks, categorizations, market segmentations, and analytical breakdowns must be MECE. No overlaps, no gaps. If a categorization is not MECE, restructure it before proceeding.

### 3.4 Governing Thought
Every section (H2 and H3) must begin with a **bold governing thought** — a single sentence that captures the key takeaway of that section. This is not a topic sentence ("This section covers market sizing"). It is an insight sentence ("The global market reached $47B in 2025, growing at 18% CAGR, driven primarily by enterprise AI adoption").

### 3.5 Action Titles
Every section heading should function as an action title wherever possible. Instead of "Revenue Analysis," write "Revenue grew 14% YoY driven by APAC expansion." If you read only the section titles of the report in sequence, they should tell the complete story.

### 3.6 One Message Per Section
Each section must communicate one primary insight. If you find yourself making two distinct points, split into two sections. Complexity is managed through structure, not through density.

### 3.7 Horizontal Logic Test
Read only the governing thoughts and section titles from top to bottom. They must form a coherent, logical narrative that tells the complete story of the report. If the flow breaks, restructure.

---

## 4. Report Structure and Document Design

### 4.1 Mandatory Report Components
Every report must include these components, in this exact order:

1. **Cover Page** (full page, page-break after)
   - Report title (concise, under 10 words)
   - Subtitle (scope clarification)
   - Prepared by: [Author Name]
   - Date: [Month Year]
   - Confidentiality notice (see Section 4.2)

2. **Table of Contents** (for reports exceeding 15 pages)
   - Two levels of headings maximum
   - Right-aligned page numbers

3. **Executive Summary** (maximum 1 page)
   - This is the single most important page. It must stand alone as a complete brief.
   - Structure: SCR framing → 3-5 key findings (each with a specific data point) → primary recommendation (with who/what/when/impact)
   - A partner or CEO should be able to read this page alone and make a preliminary decision

4. **"At a Glance" Key Statistics** (optional but recommended)
   - 3-5 large-format KPI boxes with headline numbers
   - Each box: metric label, large bold number, contextual indicator (e.g., YoY growth)
   - Use the `.kpi-grid` CSS class for layout

5. **Body Sections** (following the Pyramid Principle)
   - Each section: governing thought → analysis → supporting exhibits → implications

6. **Strategic Recommendations**
   - Each recommendation must specify: who, what, when, expected quantified impact, investment required
   - Include a prioritization matrix (Impact vs. Feasibility)

7. **Risks and Mitigations**
   - Top 3-5 risks with likelihood, impact, and specific mitigation actions

8. **Appendix**
   - Methodology description
   - Detailed data tables
   - Glossary of terms (if needed)

9. **Sources**
   - Numbered, left-aligned (not justified) to prevent ugly gaps from long URLs
   - Format: [N] Organization. (Year). *Title*. [URL](URL)

### 4.2 Confidentiality Notice
Every report must include the following notice on the cover page:

> *This document has been prepared for the exclusive use of [Client/Internal]. It contains proprietary and confidential information. No part of this report may be reproduced, distributed, or communicated to any third party without express prior written consent. The findings are based on information available at the time of preparation. The author accepts no liability for decisions made in reliance on this report.*

### 4.3 Page Layout and White Space
- Generous margins (1in top/bottom, 1.2in left/right)
- Body text justified
- Exhibits should occupy 90% of page width for maximum visual impact
- Consistent 0.8em spacing between all components (no ad-hoc spacing values)
- Section dividers used every 3-5 pages for visual rhythm
- No orphan lines (minimum 3 lines before page break)

### 4.4 Typography Hierarchy
The CSS enforces a strict visual hierarchy. In markdown, this maps to:
- **H1:** Report title only (used once)
- **H2:** Major section headers (numbered: 1. Market Overview, 2. Competitive Landscape, etc.)
- **H3:** Subsection headers (numbered: 1.1, 1.2, etc.)
- **Bold text:** Governing thoughts, exhibit titles, key terms
- **Italic text:** Source lines, emphasis, publication titles
- **Body text:** Standard prose

### 4.5 Callout Boxes
Use blockquotes (`>`) for key insight callouts. These should:
- Contain exactly one critical insight or "so what?" takeaway
- Be placed adjacent to the supporting data
- Be used sparingly (maximum 2-3 per report)

### 4.6 Section Numbering
- All body sections must be numbered (1, 2, 3...)
- Subsections numbered hierarchically (1.1, 1.2, 2.1, 2.2...)
- Executive Summary and Appendix are not numbered

---

## 5. Data Visualization Standards

### 5.1 Chart Type Selection (MECE)
Choose the chart type that proves the insight most effectively:
- **Comparison across categories:** Horizontal bar chart (easier to read labels)
- **Change over time:** Line chart (for trends) or column chart (for discrete periods)
- **Parts of a whole:** Stacked bar chart or treemap. Never use pie charts (hard to compare accurately)
- **Cumulative impact / bridge:** Waterfall chart
- **Correlation:** Scatter plot
- **Strategic positioning:** 2×2 matrix
- **Distribution:** Histogram

### 5.2 Chart Design Rules
- **Remove all clutter:** No gridlines (or extremely faint ones), no borders, no 3D effects, no background fills, no decorative elements
- **Start bar/column charts at zero:** Truncating the y-axis is misleading and is never acceptable
- **Direct labeling:** Label data series directly on or next to the lines/bars. Avoid legends when possible (they force the reader to shuttle between legend and data)
- **Strategic color:** Use neutral gray for most data series. Reserve the primary brand color to highlight only the specific element that proves the insight (e.g., "our client," "recommended option," "key segment")
- **Label only what matters:** Label start, end, and key inflection points. Do not label every data point
- **Annotations:** Use callout arrows or text boxes to annotate the "so what?" directly on the chart
- **Consistent sizing:** All charts in a report should be the same width. Height may vary based on data density
- **High resolution:** All charts exported at 300 DPI minimum, transparent background

### 5.3 Chart Color Protocol
When generating charts with Python, use the consulting style from `assets/chart_style.py`:
- **Primary emphasis:** Use `BRAND_PRIMARY` for the key data series
- **Context/background data:** Use `NEUTRAL_GRAY` or `LIGHT_GRAY`
- **Positive changes:** Use `POSITIVE_GREEN`
- **Negative changes:** Use `NEGATIVE_RED`
- **Sequential series:** Use the ordered `PALETTE` (max 5-6 colors per chart)
- **Build in grayscale first.** If the chart is not clear in grayscale, the structure is wrong

### 5.4 Exhibit Anatomy
Every exhibit in the report must follow this structure:
```
**Exhibit N. [Action title: a complete sentence stating the insight]**

[Chart or table]

*Source: [Organization], [Publication Title], [Year]. [URL if available]*
```

---

## 6. Report Types

Before starting a new report, ask the user what type of report they want to write. Refer to the templates in `templates/`:

| Template | Use Case | Key Frameworks |
|---|---|---|
| `market_analysis.md` | TAM/SAM/SOM sizing, competitive analysis, market entry | Market sizing, Porter's Five Forces, competitive benchmarking |
| `strategic_assessment.md` | Growth diagnostics, transformation roadmaps, strategy evaluations | SCR, Pyramid, MECE options analysis, implementation roadmap |
| `due_diligence.md` | Investment thesis, commercial DD, M&A target evaluation | Valuation (comps, DCF, precedent), risk matrix, synergy analysis |
| `industry_outlook.md` | Sector trends, disruption mapping, 5-year outlook | Scenario analysis (bull/base/bear), disruption vectors, trend mapping |

---

## 7. TYPST RENDERING PIPELINE (MANDATORY)

Reports are rendered using **Typst** (not HTML/CSS/Pandoc/Chrome). Typst is a modern typesetting engine that produces native, high-fidelity PDFs with proper typography, colors, and page layouts.

### 7.1 Pipeline Overview

```
Python (generate charts) → Typst (compose report) → PDF
```

1. Write chart generation script using matplotlib/seaborn
2. Write report in Typst format (`.typ`) importing `template.typ`
3. Compile with `typst compile report.typ output.pdf`

### 7.2 Template Architecture

Every report imports `template.typ` which provides:

| Component | Function | Key Rule |
|---|---|---|
| `report()` | Document wrapper with cover page | Pass title, subtitle, author, date |
| `section-divider()` | Full-page navy divider | Uses `pagebreak(weak: true)` to avoid blank pages |
| `kpi-grid()` / `kpi-card()` | KPI dashboard | 3-4 cards per grid, white bg, navy bottom border |
| `chart-exhibit()` | Chart with title + source | `breakable: false`, title in Typst not matplotlib |
| `table-exhibit()` | Table with title + source | `breakable: false`, keeps table intact on page |
| `callout()` | Key insight box | Navy left border, gray background, max 4-5 per report |
| `highlight-stat()` | Large featured statistic | Navy left border, gray background |
| `timeline-item()` | Implementation roadmap step | Navy marker box + description |
| `sidebar-layout()` | Main content + side callout | McKinsey-style 70/30 split, narrative + key stat |
| `two-col()` | Two-column comparison layout | Equal columns with 24pt gutter |
| `pull-quote()` | Executive quote or key finding | Georgia italic, centered, optional attribution |

### 7.3 Critical Typst Rules (HARD-LEARNED)

These rules come from production debugging. Violating them produces broken output.

**Dollar Signs:**
- In raw Typst markup text: use `\$` to escape (e.g., `\$6.4 trillion`)
- Inside quoted strings (function arguments): use bare `$` (e.g., `kpi-card("$6.4T", ...)`)
- NEVER double-escape. `\\$` will render a literal backslash.

**Page Breaks:**
- `chart-exhibit()` and `table-exhibit()` are `breakable: false`. This prevents charts/tables from splitting across pages.
- Do NOT set `set block(breakable: false)` globally. This causes huge empty gaps at page bottoms because entire blocks jump to the next page.
- Only specific components should be unbreakable: exhibits, KPI grids, callouts, timeline items.
- Regular paragraphs and lists must remain breakable for natural text flow.
- Use `pagebreak(weak: true)` in section dividers to avoid creating blank pages.

**Sticky Headings:**
- All heading levels use `block(sticky: true)`. This prevents orphaned headings at the bottom of a page.
- If a heading would appear at the very bottom of a page with no following content, Typst automatically moves it to the next page.

**Spacing:**
- Use a consistent spacing unit of `0.8em` for all vertical gaps.
- Set `par(spacing: 0.8em)` globally.
- Set `list(spacing: 0.6em)` and `enum(spacing: 0.6em)` globally.
- Do NOT use ad-hoc `#v()` values scattered through the report. All spacing should come from the template's component definitions.
- Inconsistent spacing (mixing 0.3em, 0.5em, 1em) looks unprofessional.

**Typography:**
- Body: Helvetica Neue, 10pt
- H1 (report title): Georgia, 22pt, bold
- H2 (section headers): Helvetica Neue, 14pt, bold, with underline rule
- H3 (subsections): Helvetica Neue, 11pt, bold
- Tables: 8.5pt
- Source lines: 7.5pt, italic
- All text color: `#333333` (body), `#16213E` (headings)

### 7.4 Design Anti-Patterns (BANNED)

These produce "AI slop" output. Never use them:

| Banned | Use Instead |
|---|---|
| Emojis anywhere in the document | Text labels in tables |
| Rounded corners on cards/boxes | Sharp corners (radius: 0pt) |
| Green-tinted backgrounds (#F0FFF4) | Neutral gray (#F7F8FA) |
| Gradient fills | Flat solid fills |
| Colored accent borders (green, teal) | Navy-only borders |
| Icon grids with emoji circles | Clean two-column tables |
| Multiple accent colors | Navy (#16213E) as the only accent |
| Decorative elements, shadows, glows | Clean lines and white space |

The aesthetic must be austere, restrained, and authoritative. Think McKinsey, not Canva.

---

## 8. CHART GENERATION STANDARDS

### 8.1 Chart Generation Workflow

1. Write a Python script (e.g., `generate_charts.py`) using matplotlib + seaborn
2. Use the style config from `assets/chart_style.py`
3. Export as PNG at **200 DPI**, **white background**, **pad_inches=0.15**
4. Embed in Typst using `chart-exhibit()` component

### 8.2 Critical Chart Rules

**NO TITLES IN CHARTS.** The Typst `chart-exhibit()` component provides the exhibit title. If you also put `ax.set_title()` in matplotlib, the title appears twice. Remove all `ax.set_title()` calls.

**Chart sizing:** Use `figsize=(7, 3)` as the default. Maximum height is 3.5 for most charts, 4 for scatter/matrix plots. Oversized charts cause page-break problems.

**Label overlap prevention:** For scatter plots and 2x2 matrices, use per-item label offsets instead of a single global offset. Example:
```python
label_offsets = {
    'Company A': (25, 0, 'left'),    # label goes right
    'Company B': (0, -28, 'center'), # label goes below
    'Company C': (-25, -5, 'right'), # label goes left
}
```

**Color protocol:**
- Neutral gray (`#B0B0B0`) for all non-highlighted data
- Brand primary (`#0F3460`) for the key insight element
- Accent (`#1A936F`) for secondary highlights
- Red (`#C0392B`) for negative/risk data only
- Never use more than 4 colors in one chart

**Chart types (MECE):**
- Market sizing over time: Area chart
- Competitive comparison: Horizontal bar chart
- Scenario analysis: Grouped bar chart
- Trend over time: Line chart with direct labels
- Strategic positioning: Scatter plot / 2x2 matrix
- Value chain / composition: Stacked horizontal bar
- Consumer behavior: Vertical bar with color coding
- **NEVER use pie charts**

### 8.3 Chart Styling Checklist
- [ ] No chart title (handled by Typst)
- [ ] White background, no gridlines (or very faint)
- [ ] No top or right spines
- [ ] figsize height <= 3.5 (4 max for matrices)
- [ ] Direct labeling on bars/lines (avoid legends when possible)
- [ ] Neutral gray for context data, brand color for insight
- [ ] "So what" annotation directly on chart
- [ ] 200 DPI, pad_inches=0.15

---

## 9. VISUAL DESIGN STANDARDS

### 9.1 The "No Wall of Text" Rule
**No page may contain more than 60% text.** Every page must contain at least one visual element: chart, table, KPI grid, callout, or section divider.

### 9.2 Minimum Visual Density (20-page report)

| Element | Min Count |
|---|---|
| Python-generated charts | 6 |
| Professional tables | 5 |
| KPI hero number panels | 2 |
| Callout/insight boxes | 4 |
| Section divider pages | 3 |
| 2x2 matrix or positioning map | 1 |
| Timeline or process flow | 1 |
| **Total visual elements** | **22** |

### 9.3 Table Design
- Dark navy header row with white text
- Alternating row fill: `#F7F8FA` and white
- No vertical borders, no stroke
- Bold for totals rows
- Consistent number formatting
- Source line below every table

### 9.4 KPI Cards
- White background, sharp corners (0 radius)
- Navy bottom border accent (2pt)
- Light border on other sides (0.5pt `#E2E8F0`)
- Large number in navy, small-caps label in steel gray
- Delta/context in small steel gray text (NOT colored)
- 3-4 cards per grid

### 9.5 Section Dividers
- Full-page navy background
- Ghost section number (48pt, very low opacity `#FFFFFF18`)
- Section title in Georgia, 26pt, white
- Subtitle in 11pt, semi-transparent white
- Forces page break before and after

### 9.6 Callout Boxes
- Navy left border (3pt)
- Neutral gray background (`#F7F8FA`)
- No rounded corners
- No colored backgrounds (no green, no blue tints)
- Maximum 4-5 per report

### 9.7 Cover Page
- Brand color bar at top (6pt height)
- Title in Georgia, 32pt, centered
- Subtitle in 13pt steel gray
- Author and date in 11pt
- Confidentiality notice in 7.5pt muted text
- Generous white space (2+ inches padding top)

---

## 10. Quality Checklist

Before finalizing any report, verify every item:

### Structure
- [ ] Cover page with title, subtitle, author, date, confidentiality notice
- [ ] Executive summary stands alone as a 1-page CEO brief
- [ ] Every section starts with a bold governing thought
- [ ] Horizontal logic test passes (governing thoughts tell the full story)
- [ ] Pyramid principle followed (answer first, then evidence)
- [ ] All frameworks are MECE

### Visual Design
- [ ] No page contains more than 60% text
- [ ] Minimum visual element counts met (Section 9.2)
- [ ] Zero emojis in the entire document
- [ ] Zero rounded corners, gradients, or colored tints
- [ ] Navy is the only accent color used for borders and highlights
- [ ] Consistent 0.8em spacing throughout

### Charts
- [ ] All charts generated via Python (not AI image tools)
- [ ] No chart contains its own title (Typst handles titles)
- [ ] Chart heights <= 3.5 (no oversized charts)
- [ ] No label overlap on scatter/matrix plots
- [ ] Neutral gray for context, brand color for insight
- [ ] Direct labeling, minimal legends

### Exhibits
- [ ] Numbered sequentially (Exhibit 1, 2, 3...)
- [ ] Every exhibit has an action title (insight sentence)
- [ ] Every exhibit has a source line
- [ ] All exhibits wrapped in `chart-exhibit()` or `table-exhibit()`
- [ ] No exhibit splits across pages

### Data
- [ ] Most recent available data used
- [ ] All data verifiable with cited sources
- [ ] Probabilistic language for forward-looking statements
- [ ] Numbers use symbols (%, $) and are rounded sensibly

### Writing
- [ ] No AI slop words
- [ ] No em-dashes, colons in prose, semicolons
- [ ] Active voice throughout
- [ ] No sentence exceeds 25 words

### Typst Output
- [ ] Compiles without errors (`typst compile report.typ`)
- [ ] No `\$` backslashes visible in rendered text
- [ ] No content splitting across pages
- [ ] No excessive empty white space at page bottoms
- [ ] Page numbers on all pages except cover
- [ ] Consistent spacing and typography throughout
