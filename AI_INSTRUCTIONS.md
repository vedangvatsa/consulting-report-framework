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
*   **CHART GENERATION:** Do not use AI image generators to create charts, as they hallucinate text and numbers. You MUST write a Python script (using matplotlib or seaborn) to generate charts based on accurate data, save them as `.png` files (300 DPI, transparent background) in the report directory, and embed them in the markdown. Use the consulting style configuration from `assets/chart_style.py`.
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
- Generous margins (1in top/bottom, 1.25in left/right for single-column)
- Body text left-aligned or justified (no ragged right in body)
- Exhibits should occupy 50-80% of page width for maximum visual impact
- Minimum 1.5em spacing between sections
- Section dividers (horizontal rules) used consistently between major sections
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

## 7. VISUAL DESIGN STANDARDS (CRITICAL)

This section is the most important in the entire document. A report without rich visual design is a FAILURE. Text-only reports with occasional tables are unacceptable. Every report must be visually rich, with charts, graphs, infographics, colored sections, KPI dashboards, and professional design elements throughout.

### 7.1 The "No Wall of Text" Rule (MANDATORY)

**No page in the report may contain more than 60% text.** Every page must contain at least one of the following visual elements:
- A chart or graph (generated via Python, not AI image tools)
- A table with professional styling
- A KPI dashboard with hero numbers
- A callout box with a key insight
- An icon grid or visual framework (2x2 matrix, process flow, etc.)
- A colored section divider or header block

If a page is all text, you MUST restructure it by adding a visual element, splitting the content, or using layout components (sidebars, callout boxes, colored panels).

### 7.2 Minimum Visual Density Requirements

For a 20-page report, the following minimums apply. Scale proportionally for other lengths.

| Element | Minimum Count | Purpose |
|---|---|---|
| Python-generated charts (bar, line, waterfall, scatter) | 6 | Data visualization |
| Tables with professional styling | 5 | Comparative data |
| KPI hero number panels (`kpi-grid`) | 2 | At-a-glance statistics |
| Callout/insight boxes (blockquotes) | 4 | Key takeaways |
| Colored section divider pages | 3 | Visual rhythm and section breaks |
| 2x2 matrices or positioning maps | 1 | Strategic frameworks |
| Process flow diagrams or timelines | 1 | Implementation sequences |

**Total visual elements for a 20-page report: minimum 22.**

### 7.3 Python Chart Generation (MANDATORY)

Every data-heavy section MUST include at least one Python-generated chart. The workflow is:

1. Write a Python script in the report directory (e.g., `reports/charts/generate_charts.py`)
2. Use matplotlib + seaborn with the style config from `assets/chart_style.py`
3. Export charts as PNG at 300 DPI with transparent background
4. Embed in the markdown using `![Exhibit title](charts/chart_name.png)`

**Chart types to use for each data type:**
- **Market sizing over time:** Area chart or stacked bar chart
- **Market share / competitive comparison:** Horizontal bar chart (sorted by size)
- **Growth rates / YoY comparison:** Grouped column chart
- **Financial bridge / impact decomposition:** Waterfall chart
- **Trend over time:** Line chart with direct labeling
- **Strategic positioning:** Scatter plot or 2x2 quadrant
- **Scenario comparison:** Grouped bar chart with color coding (green/gray/red)
- **Distribution:** Histogram or box plot

**NEVER use pie charts.** They are impossible to compare accurately. Use horizontal bar charts instead.

**Chart styling rules (enforced via `assets/chart_style.py`):**
- White background, no gridlines (or very faint horizontal gray lines only)
- No top or right spines. Only left and bottom spines in light gray.
- Title left-aligned, bold, positioned as the "action title" above the chart
- Source line in 8pt italic below the chart
- Use neutral gray (#B0B0B0) for all data series except the one being highlighted
- Use the brand primary color for the highlighted/key data series
- Direct label values on bars/lines instead of using a legend
- Annotate the "so what" directly on the chart with an arrow or text callout
- Export at exactly the width specified in the CSS (matches page content width)

### 7.4 Colored Section Dividers (MANDATORY)

Major sections (every 3-5 pages) must use a full-width colored section divider. These create visual rhythm and prevent the "wall of text" feeling. Use the `section-divider` CSS class:

```html
<div class="section-divider">
  <span class="section-number">02</span>
  <h2>Market Sizing</h2>
  <p class="section-subtitle">TAM, SAM, SOM, and growth trajectory analysis</p>
</div>
```

This produces a full-width dark-background panel with white text. Use for sections 1, 2, 3, etc. at the start of each major section.

### 7.5 KPI Hero Number Dashboards (MANDATORY)

The Executive Summary and "At a Glance" sections MUST use KPI hero number panels. Use the `kpi-grid` CSS class:

```html
<div class="kpi-grid">
  <div class="kpi-box">
    <span class="kpi-value">$6.4T</span>
    <span class="kpi-label">Global E-Commerce (2025)</span>
    <span class="kpi-delta">+8.2% YoY</span>
  </div>
  <div class="kpi-box">
    <span class="kpi-value">35.7%</span>
    <span class="kpi-label">Agentic Commerce CAGR</span>
    <span class="kpi-delta">2026-2033</span>
  </div>
</div>
```

Rules for KPI panels:
- Use exactly 3-5 KPI boxes per grid (never more than 5)
- Each box contains one headline number (large, bold), one label (small caps), and one contextual delta
- Numbers must be rounded for visual impact ($6.4T not $6,420,000,000,000)
- Use the delta line to show growth rate, time period, or comparison

### 7.6 Callout / Key Insight Boxes

Use blockquotes for key strategic insights. These must be visually distinctive (colored left border, subtle background). Use sparingly (max 4-5 per report) for maximum impact:

```markdown
> **Key Insight:** The payment authorization layer is to agentic commerce what mobile-responsive design was to mobile commerce in 2010. The companies that solve delegated payment trust first will capture outsized value.
```

### 7.7 2x2 Matrices and Strategic Frameworks

Every report with competitive analysis MUST include at least one 2x2 matrix or positioning map. Generate these via Python (not tables). The 2x2 matrix should:
- Use two clearly labeled axes
- Position competitors/options as labeled dots or boxes
- Use color to distinguish categories (e.g., incumbents vs. challengers)
- Include a title that states the insight

### 7.8 Process Flows, Timelines, and Roadmaps

Implementation sections MUST include a visual timeline or process flow. Use HTML with CSS styling:

```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker">Q1-Q2</div>
    <div class="timeline-content">
      <strong>Phase 1: Foundation</strong>
      <p>Deploy API infrastructure and catalog upgrades</p>
    </div>
  </div>
  <!-- more items -->
</div>
```

### 7.9 Icon Grids for Feature/Capability Comparisons

When comparing features across competitors or listing capabilities, use icon grids instead of plain bullet lists:

```html
<div class="icon-grid">
  <div class="icon-item">
    <div class="icon-circle">🔍</div>
    <strong>Discovery</strong>
    <p>AI-powered product search and comparison</p>
  </div>
  <!-- more items -->
</div>
```

Note: While emojis are banned in prose text, they may be used ONLY inside icon-circle elements as visual symbols in infographic layouts.

### 7.10 Table Design Rules

Tables must use the professional CSS styling (dark header row, alternating row colors, no vertical borders). Additional rules:
- Use bold for totals rows
- Right-align numeric columns
- Left-align text columns
- Use consistent number formatting (all $M or all $B, not mixed)
- Tables with more than 7 rows should use alternating row shading
- Include a source line below every table

### 7.11 Cover Page Design

The cover page MUST be visually striking, not just centered text. Include:
- A large, bold report title
- A subtitle describing the scope
- Author and date information
- A colored accent band or border
- The confidentiality notice in small, muted text
- Generous white space (at least 2.5 inches of padding at top)

### 7.12 Page Balance and Visual Rhythm

Follow these rules for visual flow through the report:
- **Alternate density:** Follow a text-heavy page with a chart-heavy page
- **Section breaks:** Use colored dividers between major sections
- **Chart placement:** Place charts immediately after the paragraph that references them, not pages later
- **One exhibit per concept:** Do not combine multiple insights into one overloaded chart. Split into separate, focused exhibits.
- **Breathing room:** Leave generous white space around charts and between sections. Cramped pages are unprofessional.

---

## 8. Quality Checklist

Before finalizing any report, verify every item:

### Structure
- [ ] Cover page includes title, subtitle, author, date, and confidentiality notice
- [ ] Cover page is visually striking with colored accents (not plain text)
- [ ] Executive summary can stand alone as a 1-page brief for a CEO
- [ ] Every H2/H3 section starts with a bold governing thought
- [ ] Reading only the governing thoughts tells the complete story (horizontal logic test)
- [ ] All body sections are numbered (1, 2, 3... and 1.1, 1.2...)
- [ ] The pyramid principle is followed (answer first, then evidence)
- [ ] All frameworks and categorizations are MECE

### Visual Design (CRITICAL)
- [ ] No page contains more than 60% text (the "no wall of text" rule)
- [ ] Minimum visual element counts are met (see Section 7.2)
- [ ] At least 6 Python-generated charts are included
- [ ] At least 2 KPI hero number dashboards are included
- [ ] At least 3 colored section dividers are used
- [ ] At least 1 strategic framework visualization (2x2 matrix, process flow) is included
- [ ] Charts and tables are placed immediately after the referencing paragraph
- [ ] Visual rhythm alternates between text-heavy and chart-heavy pages

### Data and Exhibits
- [ ] All data uses the most recent available figures (no stale data without explicit disclosure)
- [ ] All exhibits are numbered sequentially (Exhibit 1, 2, 3...)
- [ ] Every exhibit has an action title (insight sentence, not a description)
- [ ] Every exhibit has a source line with organization, title, and year
- [ ] All data is verifiable with cited sources
- [ ] Charts generated via Python scripts using `assets/chart_style.py`, not AI image generators
- [ ] Charts start at zero for bar/column types
- [ ] Charts use direct labeling instead of legends where possible

### Recommendations
- [ ] Every recommendation specifies who, what, when, and expected quantified impact
- [ ] Recommendations are prioritized (impact vs. feasibility matrix included)
- [ ] Risks are identified with likelihood, impact, and specific mitigations

### Writing Quality
- [ ] No AI slop words, em-dashes, colons in prose, semicolons, or emojis anywhere
- [ ] Active voice throughout
- [ ] No sentence exceeds 25 words
- [ ] Probabilistic language used for all forward-looking statements
- [ ] Numbers use symbols (%, $) and are rounded sensibly

### Output
- [ ] PDF renders cleanly with no browser artifacts
- [ ] `--no-pdf-header-footer` flag used in Chrome PDF generation
- [ ] Page numbers visible on all pages except the cover page
- [ ] White space is generous and consistent throughout
- [ ] Colors render correctly (print-color-adjust: exact is set)
