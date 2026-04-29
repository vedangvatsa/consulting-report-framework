# Consulting Report Framework

A reusable framework for generating high-quality, McKinsey-style market analysis and consulting reports. Produces boardroom-ready PDF deliverables from Markdown source files.

## Features
*   **Strict Quality Enforcement:** Prevents AI jargon, em-dashes, emojis, and vague recommendations. Every output reads as a professionally written consulting deliverable.
*   **Structured Templates:** Includes templates for Market Analysis, Strategic Assessment, Due Diligence, and Industry Outlook reports.
*   **Pyramid Principle:** All arguments are structured answer-first with MECE frameworks and SCR framing.
*   **Data Integrity:** Encourages exhibits (not tables) with mandatory source lines, verifiable data, and Python-generated charts.
*   **Automated PDF Generation:** Converts Markdown to a polished, client-ready PDF using Pandoc and Headless Chrome.

## Setup

1.  **Prerequisites:** You need `pandoc` and `Google Chrome` installed to generate PDFs.
    *   Mac: `brew install pandoc`
2.  **Make script executable:**
    ```bash
    chmod +x scripts/generate_pdf.sh
    ```

## Usage Workflow

1.  **Start a new report:**
    *   Ask the AI: "I want to write a new report. Read the `AI_INSTRUCTIONS.md` file first."
    *   Choose a template from the `templates/` directory and copy it to a new file in the `reports/` directory.
2.  **Drafting:**
    *   The AI will assist in drafting the report based strictly on the rules in `AI_INSTRUCTIONS.md`.
    *   Charts are generated via Python scripts stored alongside the report.
3.  **Generating the PDF:**
    *   Run the script from the root of this repo:
    ```bash
    ./scripts/generate_pdf.sh reports/my_report.md reports/my_report.pdf
    ```
    *   For IEEE-style two-column layout:
    ```bash
    ./scripts/generate_pdf.sh reports/my_report.md reports/my_report.pdf ieee
    ```

## Directory Structure

*   `AI_INSTRUCTIONS.md`: **Crucial.** Contains the prompt/rules the AI must follow. Point the AI here at the start of any session.
*   `templates/`: Markdown templates for different report types (Market Analysis, Strategic Assessment, Due Diligence, Industry Outlook).
*   `scripts/`: Automation scripts (PDF generation, chart generation helpers).
*   `reports/`: Your actual consulting reports go here.
*   `assets/`: Shared chart color palettes and style utilities for Python chart generation.
*   `pdf-style.css`: CSS rules that format the single-column consulting-style PDF.
*   `pdf-style-ieee.css`: CSS rules for two-column IEEE-style PDF layout.

## Report Types

| Template | Use Case |
|---|---|
| `market_analysis.md` | TAM/SAM/SOM sizing, competitive analysis, market entry |
| `strategic_assessment.md` | Growth diagnostics, transformation roadmaps, strategy evaluations |
| `due_diligence.md` | Investment thesis, commercial DD, M&A target evaluation |
| `industry_outlook.md` | Sector trends, disruption mapping, 5-year outlook |
