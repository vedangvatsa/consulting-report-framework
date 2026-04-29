"""
Consulting Chart Style Configuration
=====================================
Professional chart styling for matplotlib/seaborn that produces
consulting-grade data visualizations.

Design principles (from McKinsey chart standards research):
  1. Remove all clutter: no gridlines, no borders, no 3D, no background fills
  2. Direct labeling over legends
  3. Strategic color: neutral for context, bold for the key insight
  4. Start bar/column charts at zero
  5. Label only what matters: start, end, key inflections
  6. Build in grayscale first — if unclear in grayscale, structure is wrong
  7. 300 DPI minimum, transparent background for PDF embedding

Usage:
    from assets.chart_style import apply_style, PALETTE, save_chart
    import matplotlib.pyplot as plt

    apply_style()
    fig, ax = plt.subplots(figsize=(8, 4.5))
    ax.bar(categories, values, color=PALETTE[:len(categories)])
    ax.set_title("North America accounts for 62% of global revenue", fontweight='bold')
    save_chart(fig, "reports/my_report_exhibit_1.png")
"""

import matplotlib.pyplot as plt
import matplotlib as mpl

# ============================================================
# COLOR PALETTE
# A professional palette that avoids McKinsey's blue to create
# a distinct brand identity while maintaining consulting rigor.
# ============================================================

# Primary (used for the key insight / highlighted data series)
BRAND_PRIMARY = "#0F3460"    # Deep indigo-navy
BRAND_SECONDARY = "#1A936F"  # Muted teal-green
BRAND_ACCENT = "#E76F51"     # Warm terracotta

# Neutral (used for context / background data)
NEUTRAL_DARK = "#333333"     # Near-black
NEUTRAL_MID = "#888888"      # Mid-gray
NEUTRAL_GRAY = "#BBBBBB"     # Light gray for background bars
NEUTRAL_LIGHT = "#E8E8E8"    # Very light gray for fills
NEUTRAL_BG = "#F7F7F7"       # Off-white background

# Semantic (used for directional changes)
POSITIVE_GREEN = "#2D6A4F"   # Growth, positive delta
NEGATIVE_RED = "#C1292E"     # Decline, risk, negative delta
CAUTION_AMBER = "#E9C46A"    # Warning, moderate risk

# Text
TEXT_PRIMARY = "#1A1A2E"     # Body text
TEXT_SECONDARY = "#555555"   # Labels, annotations
TEXT_MUTED = "#999999"       # Source lines, footnotes

# Ordered palette for sequential data series (max 6 recommended)
PALETTE = [
    BRAND_PRIMARY,    # #0F3460 — Deep indigo
    BRAND_SECONDARY,  # #1A936F — Teal green
    BRAND_ACCENT,     # #E76F51 — Terracotta
    "#264653",        # Dark teal
    "#E9C46A",        # Warm amber
    "#6A4C93",        # Muted purple
]

# Diverging palette (negative → neutral → positive)
DIVERGING = [
    NEGATIVE_RED,
    CAUTION_AMBER,
    NEUTRAL_LIGHT,
    BRAND_SECONDARY,
    POSITIVE_GREEN,
]

# Highlight palette: gray everything, highlight one
HIGHLIGHT_BASE = NEUTRAL_GRAY
HIGHLIGHT_ACCENT = BRAND_PRIMARY

# Waterfall chart colors
WATERFALL_INCREASE = POSITIVE_GREEN
WATERFALL_DECREASE = NEGATIVE_RED
WATERFALL_TOTAL = BRAND_PRIMARY


# ============================================================
# MATPLOTLIB STYLE APPLICATION
# ============================================================

def apply_style():
    """
    Apply consulting-grade matplotlib style globally.
    Call this once at the top of any chart-generation script.
    """
    mpl.rcParams.update({
        # Typography
        "font.family": "sans-serif",
        "font.sans-serif": ["Arial", "Helvetica Neue", "Helvetica", "DejaVu Sans"],
        "font.size": 10,

        # Axes
        "axes.spines.top": False,
        "axes.spines.right": False,
        "axes.spines.left": True,
        "axes.spines.bottom": True,
        "axes.linewidth": 0.6,
        "axes.edgecolor": "#CCCCCC",
        "axes.labelsize": 10,
        "axes.labelcolor": TEXT_SECONDARY,
        "axes.titlesize": 12,
        "axes.titleweight": "bold",
        "axes.titlecolor": TEXT_PRIMARY,
        "axes.titlepad": 16,
        "axes.grid": False,
        "axes.facecolor": "white",

        # Ticks
        "xtick.labelsize": 9,
        "ytick.labelsize": 9,
        "xtick.color": TEXT_SECONDARY,
        "ytick.color": TEXT_SECONDARY,
        "xtick.major.size": 0,
        "ytick.major.size": 0,

        # Legend (discouraged — use direct labeling)
        "legend.frameon": False,
        "legend.fontsize": 9,

        # Figure
        "figure.facecolor": "white",
        "figure.dpi": 150,
        "savefig.dpi": 300,
        "savefig.bbox": "tight",
        "savefig.pad_inches": 0.2,
        "savefig.transparent": True,

        # Grid (off by default, faint if enabled)
        "grid.color": "#EEEEEE",
        "grid.linewidth": 0.4,
        "grid.alpha": 0.5,
    })


def save_chart(fig, filepath, dpi=300):
    """
    Save a chart to disk with consulting-standard quality settings.

    Args:
        fig: matplotlib Figure object
        filepath: Output path (e.g., "reports/exhibit_1.png")
        dpi: Resolution (default 300 for print quality)
    """
    fig.savefig(
        filepath,
        dpi=dpi,
        bbox_inches="tight",
        pad_inches=0.2,
        transparent=True,
        facecolor="white",
        edgecolor="none",
    )
    plt.close(fig)
    print(f"Chart saved: {filepath}")


def highlight_bar(values, highlight_index, base_color=NEUTRAL_GRAY, accent_color=BRAND_PRIMARY):
    """
    Generate a color list for a bar chart where one bar is highlighted
    and the rest are neutral gray. This is the core consulting pattern:
    gray everything, highlight the insight.

    Args:
        values: List of data values (used to determine count)
        highlight_index: Index of the bar to highlight
        base_color: Color for non-highlighted bars
        accent_color: Color for the highlighted bar

    Returns:
        List of color strings
    """
    colors = [base_color] * len(values)
    colors[highlight_index] = accent_color
    return colors


def add_source(ax, source_text, y_offset=-0.15):
    """
    Add a source citation below a chart axis.

    Args:
        ax: matplotlib Axes object
        source_text: Source citation string
        y_offset: Vertical offset from bottom of axes (negative = below)
    """
    ax.text(
        0, y_offset,
        f"Source: {source_text}",
        transform=ax.transAxes,
        fontsize=7.5,
        fontstyle="italic",
        color=TEXT_MUTED,
        ha="left",
        va="top",
    )


def add_annotation(ax, x, y, text, color=TEXT_PRIMARY):
    """
    Add a callout annotation to a specific data point on a chart.

    Args:
        ax: matplotlib Axes object
        x, y: Coordinates of the data point
        text: Annotation text
        color: Text color
    """
    ax.annotate(
        text,
        xy=(x, y),
        xytext=(10, 10),
        textcoords="offset points",
        fontsize=9,
        fontweight="bold",
        color=color,
        arrowprops=dict(arrowstyle="->", color=color, lw=0.8),
    )
