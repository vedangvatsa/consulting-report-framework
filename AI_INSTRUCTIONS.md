# AI Assistant Guidelines for Consulting Report Generation

Whenever you are asked to write or assist in writing a consulting report in this repository, you **MUST** strictly adhere to the following rules. These rules are designed to produce boardroom-ready, McKinsey-quality deliverables that read as if prepared by a top-tier strategy consultancy.

## 1. Stylistic and Vocabulary Constraints
*   **NO AI SLOP WORDS:** Do not use words typical of AI generation. This includes but is not limited to: *delve, tapestry, testament, navigate/navigating, multifaceted, robust, foster, pivotal, catalyst, transformative, revolutionize, unprecedented, realm, seamless, leverage, empower, unlock, synergy, democratize, embark, beacon, underscores, sheds light, cautious optimism, paradigm shift, double-edged sword, not merely X but Y, landscape, furthermore, moreover, simultaneously, noteworthy, notably, consequently, thus, hence, thereby, highlight, emerged, emerging, encompass, streamline, bolster, spearhead, reshape, redefine, reimagine, reconfigure*.
*   **NO EM-DASHES:** Do not use em-dashes (`—`) or en-dashes (`–`) for punctuation in sentences.
*   **NO COLONS IN PROSE:** Do not use colons (`:`) in running prose. Use periods or commas instead. Colons are permitted in exhibit titles, section headers, and source citations.
*   **NO EMOJIS:** The text must be strictly professional.
*   **CRISP, DIRECT LANGUAGE:** Write in short, punchy sentences. McKinsey writing favors clarity over complexity. Every sentence should convey exactly one idea. Avoid subordinate clause chains.
*   **ACTIVE VOICE:** Use active voice and declarative sentences. Lead with the insight, not the context.
*   **ACTION-ORIENTED FRAMING:** Frame findings as decisions, not observations. Say "Companies should invest in X" not "It was found that X is important."
*   **SO-WHAT TEST:** Every paragraph must pass the "so what?" test. If a section does not directly inform a decision or recommendation, cut it.

## 2. Research and Data Integrity
*   **NO HALLUCINATIONS OR DATE BUMPING:** Never invent data, citations, market sizes, or survey results. Never artificially bump publication years to make research seem "newer." All quantitative data and source material must be fiercely fact-checked, factual, and verifiable.
*   **OPEN, PROBABILISTIC LANGUAGE:** When describing future trends, predictions, or market sizing, always use "open" words (e.g., *can, may, could, is likely to, is expected to, appears to, we estimate*) instead of "closed" definitive words (e.g., *will, should, must, shall*). This ensures the analysis remains semantically accurate regardless of how the future unfolds.
*   **USE SYMBOLS FOR DATA:** Always use the `%` symbol instead of writing out "percent." Always use `$` or appropriate currency symbols with numbers.
*   **CHART GENERATION:** Do not use AI image generators to create charts, as they hallucinate text and numbers. You MUST write a Python script (using matplotlib or seaborn) to generate charts based on accurate data, save them as `.png` files in the report directory, and embed them in the markdown.
*   **USE EXHIBITS:** Label all data displays as "Exhibit" (not "Table" or "Figure"). Number them sequentially (Exhibit 1, Exhibit 2, etc.). Every exhibit must have a descriptive title and a source line.
*   **VERIFIABILITY:** Prioritize industry-standard data sources (Gartner, IDC, CB Insights, PitchBook, World Bank, OECD, McKinsey Global Institute, Bain, BCG, Deloitte, Statista) over generalities. Always cite the source and year.

## 3. McKinsey-Specific Structural Rules
*   **PYRAMID PRINCIPLE:** Structure all arguments using the Pyramid Principle (Barbara Minto). Start with the answer/recommendation first, then group supporting arguments, then provide evidence for each argument.
*   **SITUATION-COMPLICATION-RESOLUTION (SCR):** Use SCR framing for executive summaries and section introductions. State the current situation, identify the complication or tension, then present the resolution.
*   **MECE (Mutually Exclusive, Collectively Exhaustive):** All frameworks, categorizations, and breakdowns must be MECE. No overlaps, no gaps.
*   **GOVERNING THOUGHT:** Every section must begin with a bold governing thought (the key takeaway) before elaboration.
*   **EXHIBITS TELL THE STORY:** Exhibits should be self-contained. A reader should understand the key insight from the exhibit title, data, and source alone, without reading surrounding text.
*   **RECOMMENDATIONS MUST BE SPECIFIC:** Recommendations must include who, what, when, and expected impact. "Invest in AI" is not a recommendation. "The CTO should allocate $2M to deploy a customer service AI copilot by Q3 2026, targeting a 30% reduction in average handle time" is.

## 4. Formatting and Output
*   **COVER PAGE:** Every report must begin with a cover page containing the report title, subtitle, author name, date, and a confidentiality notice.
*   **EXECUTIVE SUMMARY:** Always include a 1-page executive summary immediately after the cover page. This is the single most important page of the report.
*   **PAGE NUMBERS:** All pages after the cover page must be numbered.
*   **EXHIBIT NUMBERING:** Exhibits are numbered sequentially across the entire report (Exhibit 1, 2, 3...).
*   **SOURCE LINES:** Every exhibit must have a source line in 8pt italic text below the exhibit.
*   **MARKDOWN FIRST:** Write the report in Markdown (`.md`), following the templates in the `templates/` directory.
*   **PDF CONVERSION:** The final output must be a polished, client-ready PDF. Use the provided CSS and scripts (e.g., `scripts/generate_pdf.sh`) to convert the markdown to PDF. Ensure `--no-pdf-header-footer` is used to prevent browser URLs from appearing on the printout.
*   **COLOR PALETTE:** When generating charts, use a professional consulting palette. Primary colors: `#003B5C` (deep navy), `#0077B6` (consulting blue), `#00B4D8` (accent cyan), `#90E0EF` (light blue). Secondary: `#2D6A4F` (forest green), `#52B788` (success green), `#E63946` (alert red), `#F4A261` (warm orange). Grays: `#2B2D42`, `#8D99AE`, `#EDF2F4`.
*   **NO END MARKERS:** Do not write "*End of report.*" at the end of the document.

## 5. Report Types
Before starting a new report, ask the user what type of report they want to write. You can refer to the templates:
*   `market_analysis.md`: For TAM/SAM/SOM market sizing, competitive analysis, and market entry strategy.
*   `strategic_assessment.md`: For company or industry-level strategic evaluations, growth diagnostics, and transformation roadmaps.
*   `due_diligence.md`: For investment thesis, commercial due diligence, and M&A target evaluations.
*   `industry_outlook.md`: For sector-level trend analysis, disruption mapping, and 5-year outlook reports.

## 6. Quality Checklist
Before finalizing any report, verify:
- [ ] Every section starts with a governing thought in bold
- [ ] Executive summary can stand alone as a 1-page brief
- [ ] All exhibits are numbered, titled, and sourced
- [ ] All data is verifiable with cited sources and publication years
- [ ] Recommendations are specific (who, what, when, impact)
- [ ] All frameworks and categorizations are MECE
- [ ] No AI slop words, em-dashes, or emojis anywhere
- [ ] The pyramid principle is followed (answer first, then evidence)
- [ ] Charts generated via Python scripts, not AI image generators
- [ ] PDF renders cleanly with no browser artifacts
