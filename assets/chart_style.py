"""
McKinsey Blue Chart Style Configuration
Import this in generate_charts.py for consistent styling.

Usage:
    from chart_style import apply_style, BRAND_PRIMARY, ACCENT, PALETTE, ...
"""
import matplotlib.pyplot as plt
import seaborn as sns

# ============================================================
# McKinsey Blue Palette
# ============================================================
BRAND_PRIMARY = "#005EB8"     # McKinsey Blue (primary highlight)
ACCENT = "#0091DA"            # Highlight blue (secondary)
DARK_BLUE = "#003A70"         # Headings, axis labels
NEUTRAL_GRAY = "#A2AAAD"      # Silver gray (non-highlighted data)
LIGHT_GRAY = "#D9D9D9"        # Background/context series
POSITIVE_GREEN = "#1A936F"    # Positive data only
NEGATIVE_RED = "#D63B2F"      # Negative/risk data only
TEXT_COLOR = "#2D2D2D"        # Body text
HEADING_COLOR = "#003A70"     # Chart annotations
BG_WHITE = "#FFFFFF"

# Ordered palette for multi-series charts (max 6 colors)
PALETTE = [BRAND_PRIMARY, ACCENT, DARK_BLUE, "#5E6B7A", NEUTRAL_GRAY, LIGHT_GRAY]

# ============================================================
# Apply global style
# ============================================================
def apply_style():
    """Apply McKinsey-style chart defaults globally."""
    sns.set_theme(style="white", font="sans-serif")
    plt.rcParams.update({
        'axes.spines.top': False,
        'axes.spines.right': False,
        'axes.spines.left': True,
        'axes.spines.bottom': True,
        'axes.edgecolor': LIGHT_GRAY,
        'axes.linewidth': 0.8,
        'axes.titlesize': 12,
        'axes.titleweight': 'bold',
        'axes.titlecolor': HEADING_COLOR,
        'axes.labelsize': 9,
        'axes.labelcolor': '#555',
        'xtick.labelsize': 8,
        'ytick.labelsize': 8,
        'xtick.color': '#777',
        'ytick.color': '#777',
        'figure.facecolor': BG_WHITE,
        'axes.facecolor': BG_WHITE,
        'font.family': 'sans-serif',
        'grid.alpha': 0.3,
        'grid.color': '#DDD',
    })

# ============================================================
# Standard save function
# ============================================================
def save(fig, filename, output_dir="charts"):
    """Save chart with consulting-standard settings."""
    import os
    os.makedirs(output_dir, exist_ok=True)
    fig.savefig(
        os.path.join(output_dir, filename),
        dpi=200,
        bbox_inches='tight',
        pad_inches=0.15,
        facecolor='white',
        edgecolor='none'
    )
    plt.close(fig)
    print(f"  ✓ {filename}")
