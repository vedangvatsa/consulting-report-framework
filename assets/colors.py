# Consulting Chart Color Palette
# Use these colors consistently across all Python-generated charts.

# Primary Colors
DEEP_NAVY = "#003B5C"
CONSULTING_BLUE = "#0077B6"
ACCENT_CYAN = "#00B4D8"
LIGHT_BLUE = "#90E0EF"

# Secondary Colors
FOREST_GREEN = "#2D6A4F"
SUCCESS_GREEN = "#52B788"
ALERT_RED = "#E63946"
WARM_ORANGE = "#F4A261"

# Grays
DARK_GRAY = "#2B2D42"
MID_GRAY = "#8D99AE"
LIGHT_GRAY = "#EDF2F4"

# Ordered palette for sequential data series
PALETTE = [
    DEEP_NAVY,
    CONSULTING_BLUE,
    ACCENT_CYAN,
    FOREST_GREEN,
    WARM_ORANGE,
    ALERT_RED,
    LIGHT_BLUE,
    SUCCESS_GREEN,
]

# Diverging palette (negative to positive)
DIVERGING = [ALERT_RED, WARM_ORANGE, LIGHT_GRAY, ACCENT_CYAN, CONSULTING_BLUE]

# Usage with matplotlib:
# import matplotlib.pyplot as plt
# from assets.colors import PALETTE, DEEP_NAVY
# plt.bar(x, y, color=PALETTE[:len(x)])
# plt.title("Title", color=DEEP_NAVY, fontweight='bold')
