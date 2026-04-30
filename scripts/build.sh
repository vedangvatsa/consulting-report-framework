#!/bin/bash
# ============================================================
# build.sh — Full Report Build Pipeline
# Generates charts, compiles Typst, runs QA checks
#
# Usage: ./scripts/build.sh reports/your-report.typ
# ============================================================
set -e

REPORT_FILE="${1:-reports/agentic-commerce-report.typ}"
REPORT_DIR=$(dirname "$REPORT_FILE")
REPORT_NAME=$(basename "$REPORT_FILE" .typ)
OUTPUT_PDF="${REPORT_DIR}/${REPORT_NAME}.pdf"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

echo ""
echo "  ╔══════════════════════════════════════╗"
echo "  ║   Consulting Report Build Pipeline   ║"
echo "  ╚══════════════════════════════════════╝"
echo ""

# Step 1: Generate charts (if generate_charts.py exists in report dir)
CHARTS_SCRIPT="${REPORT_DIR}/charts/generate_charts.py"
if [ -f "$CHARTS_SCRIPT" ]; then
    echo "  [1/4] Generating charts..."
    python3 "$CHARTS_SCRIPT"
    echo ""
else
    echo "  [1/4] No chart script found, skipping..."
fi

# Step 2: QA Check
echo "  [2/4] Running quality assurance checks..."
python3 "${REPO_DIR}/scripts/qa_check.py" "$REPORT_FILE" || true

# Step 3: Fact-check audit
echo "  [3/4] Running fact-check audit..."
python3 "${REPO_DIR}/scripts/fact_check.py" "$REPORT_FILE" || true

# Step 4: Compile Typst to PDF
echo "  [4/4] Compiling Typst to PDF..."
cd "$REPORT_DIR"
typst compile "$(basename "$REPORT_FILE")" "${REPORT_NAME}.pdf"
echo "  ✓ Output: ${REPORT_DIR}/${REPORT_NAME}.pdf"

echo ""
echo "  Build complete."
echo ""
