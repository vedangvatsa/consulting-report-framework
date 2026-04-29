#!/bin/bash

# Converts a Markdown consulting report to a polished, client-ready PDF using Pandoc and Google Chrome headless.
# Supports both single-column consulting style (default) and IEEE two-column style.

if [ "$#" -lt 2 ]; then
    echo "Usage: ./generate_pdf.sh <input_markdown_file> <output_pdf_file> [style]"
    echo ""
    echo "Styles:"
    echo "  (default)  Single-column consulting style (Helvetica, navy headers)"
    echo "  ieee       Two-column IEEE academic style (Times New Roman)"
    echo ""
    echo "Examples:"
    echo "  ./generate_pdf.sh reports/market_report.md reports/market_report.pdf"
    echo "  ./generate_pdf.sh reports/market_report.md reports/market_report.pdf ieee"
    exit 1
fi

INPUT_FILE=$1
OUTPUT_FILE=$2
STYLE=${3:-default}
TEMP_HTML="/tmp/temp_report.html"
SCRIPT_DIR="$(dirname "$0")"

if [ "$STYLE" = "ieee" ]; then
    CSS_FILE="$SCRIPT_DIR/../pdf-style-ieee.css"
    echo "Using IEEE two-column style..."
else
    CSS_FILE="$SCRIPT_DIR/../pdf-style.css"
    echo "Using consulting single-column style..."
fi

if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: Input file '$INPUT_FILE' not found."
    exit 1
fi

echo "Step 1: Converting Markdown to HTML using Pandoc..."
pandoc "$INPUT_FILE" -o "$TEMP_HTML" --standalone --metadata title="" -c "$CSS_FILE" --embed-resources

if [ $? -ne 0 ]; then
    echo "Error: Pandoc conversion failed. Is Pandoc installed? (brew install pandoc)"
    exit 1
fi

echo "Step 2: Converting HTML to PDF using Headless Chrome..."
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --no-sandbox --print-to-pdf="$OUTPUT_FILE" --no-pdf-header-footer --no-margins "$TEMP_HTML"

if [ $? -ne 0 ]; then
    echo "Error: Chrome PDF generation failed."
    exit 1
fi

echo "Success! PDF generated at: $OUTPUT_FILE"
rm "$TEMP_HTML"
