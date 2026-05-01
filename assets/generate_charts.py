"""
Agentic Commerce Report — Chart Generation
Generates all charts for the consulting report using matplotlib + seaborn.
"""
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import seaborn as sns
import numpy as np
import os

# ============================================================
# STYLE CONFIG — McKinsey Blue Palette
# ============================================================
BRAND_PRIMARY = "#005EB8"     # McKinsey Blue
ACCENT = "#0091DA"            # Highlight blue
NEUTRAL_GRAY = "#A2AAAD"      # Silver gray
LIGHT_GRAY = "#D9D9D9"
POSITIVE_GREEN = "#1A936F"
NEGATIVE_RED = "#D63B2F"
TEXT_COLOR = "#2D2D2D"
HEADING_COLOR = "#003A70"     # Dark blue
BG_WHITE = "#FFFFFF"

PALETTE = [BRAND_PRIMARY, ACCENT, "#003A70", "#5E6B7A", "#A2AAAD", "#D9D9D9"]

def apply_style():
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

apply_style()
OUT = "/Users/vedang/Documents/agentic-commerce/charts"

def save(fig, name):
    fig.savefig(os.path.join(OUT, name), dpi=200, bbox_inches='tight',
                transparent=False, facecolor='white', pad_inches=0.15)
    plt.close(fig)
    print(f"  ✓ {name}")

# ============================================================
# CHART 1: Market Sizing — Agent-Mediated TTV Growth (Area Chart)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
years = [2025, 2026, 2027, 2028, 2029, 2030]
b2c = [12, 105, 295, 590, 925, 1290]
b2b = [20, 180, 520, 1100, 2200, 5000]

ax.fill_between(years, 0, b2c, alpha=0.7, color=BRAND_PRIMARY, label='B2C Retail')
ax.fill_between(years, b2c, [b+c for b,c in zip(b2c, b2b)], alpha=0.5, color=ACCENT, label='B2B Procurement')

# Title handled by Typst exhibit component
ax.set_ylabel('Transaction Value ($B)')
ax.set_xlabel('')
ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f'${x/1000:.1f}T' if x >= 1000 else f'${x:.0f}B'))
ax.legend(loc='upper left', frameon=False, fontsize=8)

# Annotate key point
ax.annotate('$6.3T\n(Base Case)', xy=(2030, 6290), fontsize=10, fontweight='bold',
            color=HEADING_COLOR, ha='right', va='top')

ax.set_xlim(2025, 2030)
ax.set_ylim(0, 7000)
save(fig, 'market_growth_area.png')

# ============================================================
# CHART 2: Competitive Landscape — Platform Comparison (Horizontal Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 2.8))
platforms = ['Google\n(Gemini + UCP)', 'OpenAI\n(ChatGPT)', 'Amazon\n(Rufus)', 'Perplexity\n(Buy with Pro)']
scores = [92, 85, 78, 65]
colors = [BRAND_PRIMARY, NEUTRAL_GRAY, NEUTRAL_GRAY, NEUTRAL_GRAY]

bars = ax.barh(platforms, scores, color=colors, height=0.55)
# Title handled by Typst
ax.set_xlabel('Agentic Commerce Readiness Score (0-100)')
ax.set_xlim(0, 110)
ax.invert_yaxis()

for bar, score in zip(bars, scores):
    ax.text(bar.get_width() + 2, bar.get_y() + bar.get_height()/2, f'{score}',
            va='center', fontsize=9, fontweight='bold', color=TEXT_COLOR)

save(fig, 'competitive_readiness.png')

# ============================================================
# CHART 3: Market Share of Commerce Protocols (Horizontal Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 2.8))
protocols = ['MCP (Anthropic)', 'UCP (Google)', 'ACP (OpenAI+Stripe)', 'A2A (Google)', 'AP2 (Google)', 'x402 (Open Source)']
adoption = [78, 52, 45, 38, 25, 12]
p_colors = [BRAND_PRIMARY if a == max(adoption) else NEUTRAL_GRAY for a in adoption]

bars = ax.barh(protocols, adoption, color=p_colors, height=0.55)
# Title handled by Typst
ax.set_xlabel('Platform Adoption Rate (%)')
ax.set_xlim(0, 100)
ax.invert_yaxis()

for bar, val in zip(bars, adoption):
    ax.text(bar.get_width() + 2, bar.get_y() + bar.get_height()/2, f'{val}%',
            va='center', fontsize=9, fontweight='bold', color=TEXT_COLOR)

save(fig, 'protocol_adoption.png')

# ============================================================
# CHART 4: Consumer Trust Gradient (Grouped Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3))
categories = ['Product\nResearch', 'Price\nTracking', 'Replenishment', 'First-Time\nPurchase', 'High-Value\n($500+)', 'Full Auto\nBudget']
comfort = [75, 70, 48, 33, 15, 7]
colors = [ACCENT if c >= 50 else (NEUTRAL_GRAY if c >= 20 else NEGATIVE_RED) for c in comfort]

bars = ax.bar(categories, comfort, color=colors, width=0.6)
# Title handled by Typst
ax.set_ylabel('Consumer Comfort Level (%)')
ax.set_ylim(0, 100)

for bar, val in zip(bars, comfort):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 2, f'{val}%',
            ha='center', fontsize=9, fontweight='bold', color=TEXT_COLOR)

# Add threshold line
ax.axhline(y=50, color=BRAND_PRIMARY, linestyle='--', alpha=0.5, linewidth=1)
ax.text(5.5, 52, 'Mainstream\nAdoption\nThreshold', fontsize=7, color=BRAND_PRIMARY, ha='right', va='bottom')

save(fig, 'consumer_trust.png')

# ============================================================
# CHART 5: Scenario Analysis — 2030 TTV Comparison (Grouped Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
segments = ['B2C Retail', 'B2B Procurement', 'Tech Solutions']
bear = [0.3, 2.5, 0.010]
base = [1.3, 5.0, 0.023]
bull = [4.0, 10.0, 0.045]

x = np.arange(len(segments))
w = 0.25

b1 = ax.bar(x - w, bear, w, color=NEGATIVE_RED, alpha=0.7, label='Bear (25%)')
b2 = ax.bar(x, base, w, color=BRAND_PRIMARY, label='Base (55%)')
b3 = ax.bar(x + w, bull, w, color=ACCENT, label='Bull (20%)')

# Title handled by Typst
ax.set_ylabel('2030 TTV ($T)')
ax.set_xticks(x)
ax.set_xticklabels(segments)
ax.legend(loc='upper right', frameon=False, fontsize=8)

for bars in [b1, b2, b3]:
    for bar in bars:
        h = bar.get_height()
        label = f'${h:.1f}T' if h >= 0.1 else f'${h*1000:.0f}B'
        ax.text(bar.get_x() + bar.get_width()/2, h + 0.15, label,
                ha='center', fontsize=7, fontweight='bold', color=TEXT_COLOR)

ax.set_ylim(0, 12)
save(fig, 'scenario_analysis.png')

# ============================================================
# CHART 6: Year-by-Year Agent Penetration (Line Chart)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
years = [2025, 2026, 2027, 2028, 2029, 2030]
penetration = [0.5, 1.5, 4, 7.5, 11, 14.5]

ax.plot(years, penetration, color=BRAND_PRIMARY, linewidth=2.5, marker='o', markersize=6, zorder=5)
ax.fill_between(years, penetration, alpha=0.1, color=BRAND_PRIMARY)

# Title handled by Typst
ax.set_ylabel('Agent-Mediated Share of E-Commerce (%)')
ax.set_ylim(0, 20)
ax.set_xlim(2025, 2030)
ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f'{x:.0f}%'))

# Direct labels
for yr, pct in zip(years, penetration):
    ax.annotate(f'{pct}%', xy=(yr, pct), xytext=(0, 12), textcoords='offset points',
                ha='center', fontsize=8, fontweight='bold', color=HEADING_COLOR)

# Annotate breakout
ax.annotate('2026: "Breakout Year"', xy=(2026, 1.5), xytext=(2027.2, 6),
            fontsize=8, color=BRAND_PRIMARY,
            arrowprops=dict(arrowstyle='->', color=BRAND_PRIMARY, lw=1.2))

save(fig, 'penetration_timeline.png')

# ============================================================
# CHART 7: Value Chain Shift — Before vs After (Stacked Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3))

categories = ['Traditional\nCommerce', 'Agentic\nCommerce\n(2030)']
merchant = [55, 20]
platform = [30, 25]
agent = [0, 40]
consumer = [15, 15]

bars1 = ax.barh(categories, merchant, color='#264653', height=0.5, label='Merchant')
bars2 = ax.barh(categories, platform, left=merchant, color=BRAND_PRIMARY, height=0.5, label='Platform/Enabler')
bars3 = ax.barh(categories, agent, left=[m+p for m,p in zip(merchant, platform)], color=ACCENT, height=0.5, label='Agent Provider')
bars4 = ax.barh(categories, consumer, left=[m+p+a for m,p,a in zip(merchant, platform, agent)], color=LIGHT_GRAY, height=0.5, label='Consumer Surplus')

# Title handled by Typst
ax.set_xlabel('Share of Value Captured (%)')
ax.set_xlim(0, 105)
ax.legend(loc='upper center', bbox_to_anchor=(0.5, -0.15), frameon=False, fontsize=7, ncol=4)
ax.invert_yaxis()

save(fig, 'value_chain_shift.png')

# ============================================================
# CHART 8: 2x2 Competitive Positioning Matrix
# ============================================================
fig, ax = plt.subplots(figsize=(7, 4))

# Axes: X = Ecosystem Openness, Y = Commerce Capability Breadth
companies = {
    'Google\n(Gemini)': (85, 90, BRAND_PRIMARY),
    'OpenAI\n(ChatGPT)': (60, 75, ACCENT),
    'Amazon\n(Rufus)': (25, 85, '#E76F51'),
    'Perplexity': (70, 45, '#F4A261'),
}

# Custom label offsets to prevent overlap with bubbles
label_offsets = {
    'Google\n(Gemini)': (25, 0, 'left'),
    'OpenAI\n(ChatGPT)': (0, -28, 'center'),
    'Amazon\n(Rufus)': (-25, -5, 'right'),
    'Perplexity': (0, -25, 'center'),
}

for name, (x, y, color) in companies.items():
    ax.scatter(x, y, s=800, c=color, alpha=0.85, zorder=5, edgecolors='white', linewidth=2)
    dx, dy, ha = label_offsets[name]
    ax.annotate(name, xy=(x, y), xytext=(dx, dy), textcoords='offset points',
                ha=ha, fontsize=8, fontweight='bold', color=TEXT_COLOR)

ax.set_xlim(0, 100)
ax.set_ylim(0, 100)
ax.set_xlabel('Ecosystem Openness (Proprietary → Open Protocol)', fontsize=9)
ax.set_ylabel('Commerce Capability (Discovery → End-to-End)', fontsize=9)
# Title handled by Typst

# Quadrant lines
ax.axhline(y=50, color=LIGHT_GRAY, linestyle='--', linewidth=0.8)
ax.axvline(x=50, color=LIGHT_GRAY, linestyle='--', linewidth=0.8)

# Quadrant labels
ax.text(25, 95, 'Broad + Proprietary', fontsize=7, color='#999', ha='center', style='italic')
ax.text(75, 95, 'Broad + Open', fontsize=7, color='#999', ha='center', style='italic')
ax.text(25, 5, 'Narrow + Proprietary', fontsize=7, color='#999', ha='center', style='italic')
ax.text(75, 5, 'Narrow + Open', fontsize=7, color='#999', ha='center', style='italic')

save(fig, 'competitive_matrix.png')

print("\n✅ All 8 charts generated successfully.")
