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

# ============================================================
# CHART 9: Commerce Evolution Timeline (Horizontal Timeline)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.5))
events = {
    1995: ('Amazon\nlaunches', 0),
    1999: ('1-Click\nordering', 12),
    2005: ('Shopify\nfounded', 0),
    2007: ('iPhone\nlaunches', 12),
    2014: ('Apple Pay\nlaunches', 0),
    2018: ('Social\ncommerce', 12),
    2023: ('ChatGPT\nshopping', 0),
    2025: ('MCP/UCP\nprotocols', 12),
    2026: ('Agentic\ncommerce', 0),
}
market_size = {1995: 0.5, 1999: 5, 2005: 100, 2007: 250, 2014: 1500, 2018: 2800, 2023: 5800, 2025: 6400, 2026: 6700}

ax2 = ax.twinx()
ax2.fill_between(list(market_size.keys()), list(market_size.values()), alpha=0.15, color=BRAND_PRIMARY)
ax2.plot(list(market_size.keys()), list(market_size.values()), color=BRAND_PRIMARY, linewidth=1.5, alpha=0.4)
ax2.set_ylabel('Global E-Commerce ($B)', fontsize=8, color=NEUTRAL_GRAY)
ax2.set_ylim(0, 8000)
ax2.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f'${x/1000:.0f}T' if x >= 1000 else f'${x:.0f}B'))

for year, (label, offset) in events.items():
    color = BRAND_PRIMARY if year >= 2023 else NEUTRAL_GRAY
    ax.plot(year, 0, 'o', color=color, markersize=8, zorder=5)
    ax.annotate(label, xy=(year, 0), xytext=(0, 15 + offset), textcoords='offset points',
                ha='center', fontsize=6.5, color=TEXT_COLOR, fontweight='bold')

ax.axhline(y=0, color=LIGHT_GRAY, linewidth=2)
ax.set_xlim(1993, 2028)
ax.set_yticks([])
ax.spines['left'].set_visible(False)
ax.spines['bottom'].set_visible(False)
save(fig, 'commerce_evolution_timeline.png')

# ============================================================
# CHART 10: Adoption Curves — Mobile vs Social vs Agent (Line)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
years_norm = list(range(0, 11))  # Years from launch
mobile = [0.5, 1.2, 3, 5.5, 9, 14, 20, 28, 37, 47, 59]
social = [0.1, 0.3, 0.8, 2, 4.5, 7.5, 10, 13, 15, 16, 17]
agent_proj = [0.2, 0.5, 1.5, 4, 7.5, 11, 14.5, 18, 22, 27, 32]

ax.plot(years_norm, mobile, color='#5E6B7A', linewidth=2, label='Mobile Commerce (2010-2020)', marker='s', markersize=4)
ax.plot(years_norm, social, color=NEUTRAL_GRAY, linewidth=2, label='Social Commerce (2018-2028)', marker='^', markersize=4)
ax.plot(years_norm[:6], agent_proj[:6], color=BRAND_PRIMARY, linewidth=2.5, label='Agentic Commerce (2025-2030)', marker='o', markersize=5)
ax.plot(years_norm[5:], agent_proj[5:], color=BRAND_PRIMARY, linewidth=2.5, linestyle='--', alpha=0.5, marker='o', markersize=4)

ax.set_xlabel('Years from Mainstream Launch')
ax.set_ylabel('Share of Total E-Commerce (%)')
ax.set_ylim(0, 65)
ax.legend(loc='upper left', frameon=False, fontsize=7)
ax.axvspan(5, 10, alpha=0.05, color=BRAND_PRIMARY)
ax.text(7.5, 60, 'Projected', fontsize=8, ha='center', color=BRAND_PRIMARY, style='italic')
save(fig, 'adoption_curves_comparison.png')

# ============================================================
# CHART 11: Regional TAM Breakdown (Pie/Donut)
# ============================================================
fig, ax = plt.subplots(figsize=(5, 3.5))
regions = ['United States\n$2.1T', 'China\n$1.8T', 'EU\n$1.2T', 'Rest of\nWorld $1.2T']
sizes = [33, 29, 19, 19]
colors_r = [BRAND_PRIMARY, ACCENT, '#5E6B7A', LIGHT_GRAY]

wedges, texts = ax.pie(sizes, labels=regions, colors=colors_r, startangle=90,
                        pctdistance=0.75, labeldistance=1.15,
                        wedgeprops=dict(width=0.4, edgecolor='white', linewidth=2))
for t in texts:
    t.set_fontsize(8)
    t.set_fontweight('bold')

ax.text(0, 0, '$6.3T\nTotal', ha='center', va='center', fontsize=14, fontweight='bold', color=HEADING_COLOR)
save(fig, 'regional_market_breakdown.png')

# ============================================================
# CHART 12: B2B vs B2C Penetration by Year (Dual Line)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
years = [2025, 2026, 2027, 2028, 2029, 2030]
b2b_pct = [0.3, 2, 8, 18, 30, 42]
b2c_pct = [0.1, 0.5, 2, 5, 9, 14]

ax.plot(years, b2b_pct, color=BRAND_PRIMARY, linewidth=2.5, marker='o', markersize=6, label='B2B Procurement')
ax.plot(years, b2c_pct, color=ACCENT, linewidth=2.5, marker='s', markersize=6, label='B2C Retail')
ax.fill_between(years, b2b_pct, alpha=0.1, color=BRAND_PRIMARY)
ax.fill_between(years, b2c_pct, alpha=0.1, color=ACCENT)

ax.set_ylabel('Agent Penetration Rate (%)')
ax.set_ylim(0, 50)
ax.yaxis.set_major_formatter(mticker.FuncFormatter(lambda x, _: f'{x:.0f}%'))
ax.legend(loc='upper left', frameon=False, fontsize=8)

for yr, b, c in zip(years, b2b_pct, b2c_pct):
    if yr in [2026, 2028, 2030]:
        ax.annotate(f'{b}%', xy=(yr, b), xytext=(0, 10), textcoords='offset points',
                    ha='center', fontsize=8, fontweight='bold', color=HEADING_COLOR)
        ax.annotate(f'{c}%', xy=(yr, c), xytext=(0, -15), textcoords='offset points',
                    ha='center', fontsize=8, fontweight='bold', color=ACCENT)
save(fig, 'segment_penetration.png')

# ============================================================
# CHART 13: VC Funding in Agentic Commerce (Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3))
quarters = ['Q1\n2024', 'Q2\n2024', 'Q3\n2024', 'Q4\n2024', 'Q1\n2025', 'Q2\n2025', 'Q3\n2025', 'Q4\n2025', 'Q1\n2026']
funding = [0.4, 0.6, 0.8, 1.2, 1.8, 2.5, 3.2, 4.1, 5.8]
deals = [12, 15, 18, 24, 32, 41, 55, 68, 89]

bars = ax.bar(quarters, funding, color=[NEUTRAL_GRAY]*4 + [ACCENT]*4 + [BRAND_PRIMARY], width=0.6)
ax.set_ylabel('Funding ($B)')
ax.set_ylim(0, 7.5)

ax2 = ax.twinx()
ax2.plot(quarters, deals, color=HEADING_COLOR, linewidth=2, marker='D', markersize=5, label='Deal Count')
ax2.set_ylabel('Number of Deals', color=HEADING_COLOR)
ax2.set_ylim(0, 100)

for bar, val in zip(bars, funding):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.1, f'${val}B',
            ha='center', fontsize=7, fontweight='bold', color=TEXT_COLOR)

save(fig, 'funding_landscape.png')

# ============================================================
# CHART 14: Company Valuations (Horizontal Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.5))
companies_v = ['Stripe (Payments)', 'Anthropic (MCP)', 'OpenAI (ChatGPT)', 'Adyen (Checkout)',
               'Perplexity (Discovery)', 'Ramp (B2B Payments)', 'Sierra AI (Agents)']
valuations = [95, 61, 300, 48, 9, 8, 4.5]
v_colors = [BRAND_PRIMARY if v > 50 else ACCENT if v > 10 else NEUTRAL_GRAY for v in valuations]

bars = ax.barh(companies_v, valuations, color=v_colors, height=0.55)
ax.set_xlabel('Valuation ($B)')
ax.set_xlim(0, 350)
ax.invert_yaxis()

for bar, val in zip(bars, valuations):
    ax.text(bar.get_width() + 5, bar.get_y() + bar.get_height()/2, f'${val}B',
            va='center', fontsize=8, fontweight='bold', color=TEXT_COLOR)
save(fig, 'company_valuations.png')

# ============================================================
# CHART 15: Consumer Trust by Demographics (Grouped Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
groups = ['Gen Z\n(18-27)', 'Millennials\n(28-43)', 'Gen X\n(44-59)', 'Boomers\n(60+)']
trust_discovery = [82, 75, 58, 35]
trust_purchase = [45, 32, 18, 8]

x = np.arange(len(groups))
w = 0.3
b1 = ax.bar(x - w/2, trust_discovery, w, color=ACCENT, label='Comfortable with Discovery')
b2 = ax.bar(x + w/2, trust_purchase, w, color=BRAND_PRIMARY, label='Comfortable with Auto-Purchase')

ax.set_ylabel('Comfort Level (%)')
ax.set_ylim(0, 100)
ax.set_xticks(x)
ax.set_xticklabels(groups)
ax.legend(loc='upper right', frameon=False, fontsize=7)

for bars in [b1, b2]:
    for bar in bars:
        h = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2, h + 2, f'{h}%',
                ha='center', fontsize=7, fontweight='bold', color=TEXT_COLOR)
save(fig, 'consumer_demographics.png')

# ============================================================
# CHART 16: Risk Heatmap (Bubble Chart)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 4.5))
risks = {
    'Consumer Trust Gap': (78, 85, 600, BRAND_PRIMARY),
    'Agent Fraud & Security': (48, 80, 500, BRAND_PRIMARY),
    'Regulatory Fragmentation': (65, 70, 450, ACCENT),
    'Data Privacy Concerns': (58, 60, 400, ACCENT),
    'Protocol Fragmentation': (52, 48, 380, '#5E6B7A'),
    'Merchant Resistance': (38, 42, 300, NEUTRAL_GRAY),
    'Technical Reliability': (25, 32, 280, NEUTRAL_GRAY),
}

# Custom label offsets: (dx, dy, ha)
label_offsets = {
    'Consumer Trust Gap': (0, 18, 'center'),
    'Agent Fraud & Security': (0, 18, 'center'),
    'Regulatory Fragmentation': (0, 18, 'center'),
    'Data Privacy Concerns': (0, -22, 'center'),
    'Protocol Fragmentation': (0, -22, 'center'),
    'Merchant Resistance': (0, -22, 'center'),
    'Technical Reliability': (0, 18, 'center'),
}

for name, (prob, impact, size, color) in risks.items():
    ax.scatter(prob, impact, s=size, c=color, alpha=0.7, edgecolors='white', linewidth=1.5, zorder=5)
    dx, dy, ha = label_offsets[name]
    ax.annotate(name, xy=(prob, impact), xytext=(dx, dy), textcoords='offset points',
                ha=ha, fontsize=7, fontweight='bold', color=TEXT_COLOR)

ax.set_xlabel('Probability of Materialization (%)')
ax.set_ylabel('Potential Impact on Adoption (%)')
ax.set_xlim(15, 92)
ax.set_ylim(20, 100)
ax.axhline(y=55, color=LIGHT_GRAY, linestyle='--', linewidth=0.8)
ax.axvline(x=50, color=LIGHT_GRAY, linestyle='--', linewidth=0.8)
ax.text(72, 96, 'HIGH PRIORITY', fontsize=8, color=BRAND_PRIMARY, ha='center', fontweight='bold', alpha=0.5)
ax.text(32, 26, 'MONITOR', fontsize=8, color=NEUTRAL_GRAY, ha='center', fontweight='bold', alpha=0.5)
save(fig, 'risk_heatmap.png')

# ============================================================
# CHART 17: S-Curve Adoption Model (Line with Logistic Fit)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.5))
from scipy.special import expit
t = np.linspace(2024, 2035, 200)
# Logistic S-curve: L / (1 + exp(-k*(t-t0)))
L, k, t0 = 45, 0.8, 2029
s_curve = L * expit(k * (t - t0))

ax.plot(t, s_curve, color=BRAND_PRIMARY, linewidth=2.5, label='Logistic Model (Base Case)')

# Confidence bands
upper = L * 1.3 * expit(k * 0.9 * (t - t0 + 0.5))
lower = L * 0.7 * expit(k * 1.1 * (t - t0 - 0.5))
ax.fill_between(t, lower, upper, alpha=0.1, color=BRAND_PRIMARY, label='80% Confidence Interval')

# Actual data points
actual_years = [2025, 2026]
actual_vals = [0.5, 1.5]
ax.scatter(actual_years, actual_vals, color=BRAND_PRIMARY, s=60, zorder=5, label='Observed Data')

ax.set_xlabel('Year')
ax.set_ylabel('Agent-Mediated E-Commerce Share (%)')
ax.set_ylim(0, 55)
ax.set_xlim(2024, 2035)
ax.axvline(x=2026.5, color=LIGHT_GRAY, linestyle=':', linewidth=1)
ax.text(2025.5, 50, 'Observed', fontsize=8, ha='center', color=NEUTRAL_GRAY)
ax.text(2030, 50, 'Projected', fontsize=8, ha='center', color=BRAND_PRIMARY)
ax.legend(loc='upper left', frameon=False, fontsize=7)
save(fig, 'adoption_s_curve.png')

# ============================================================
# CHART 18: Regional 2030 Projections (Grouped Bar)
# ============================================================
fig, ax = plt.subplots(figsize=(7, 3.2))
regions = ['United\nStates', 'China', 'EU', 'India', 'Japan/\nKorea', 'Rest of\nWorld']
ttv_2030 = [2.1, 1.8, 1.2, 0.4, 0.3, 0.5]
penetration = [18, 16, 12, 8, 14, 6]

x = np.arange(len(regions))
bars = ax.bar(x, ttv_2030, color=[BRAND_PRIMARY, ACCENT, '#5E6B7A', NEUTRAL_GRAY, NEUTRAL_GRAY, LIGHT_GRAY], width=0.55)
ax.set_ylabel('Agent-Mediated TTV ($T)')
ax.set_xticks(x)
ax.set_xticklabels(regions)
ax.set_ylim(0, 3.0)

ax2 = ax.twinx()
ax2.plot(x, penetration, color=HEADING_COLOR, linewidth=2, marker='D', markersize=6, label='Penetration %')
ax2.set_ylabel('Agent Penetration (%)', color=HEADING_COLOR)
ax2.set_ylim(0, 28)

for bar, val in zip(bars, ttv_2030):
    ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.08, f'${val}T',
            ha='center', fontsize=8, fontweight='bold', color=TEXT_COLOR)
save(fig, 'regional_projections.png')

# ============================================================
# CHART 19: Market Map — Agentic Commerce Ecosystem
# ============================================================
fig, ax = plt.subplots(figsize=(7.5, 5))
ax.set_xlim(0, 100)
ax.set_ylim(0, 100)
ax.axis('off')

# Layer boxes
layers = [
    (2, 78, 96, 18, 'Consumer-Facing Agents', BRAND_PRIMARY),
    (2, 56, 96, 18, 'Agent Infrastructure & Protocols', ACCENT),
    (2, 34, 96, 18, 'Payment & Checkout', '#5E6B7A'),
    (2, 12, 96, 18, 'Merchant Enablement', NEUTRAL_GRAY),
]

for x, y, w, h, label, color in layers:
    rect = plt.Rectangle((x, y), w, h, facecolor=color, alpha=0.12, edgecolor=color, linewidth=1.5, zorder=1)
    ax.add_patch(rect)
    ax.text(x + 2, y + h - 3, label, fontsize=9, fontweight='bold', color=color, va='top', zorder=3)

# Companies in each layer
companies_map = {
    # Consumer Agents layer (y=78-96)
    'Google Gemini': (15, 86, BRAND_PRIMARY),
    'ChatGPT': (35, 86, BRAND_PRIMARY),
    'Amazon Rufus': (55, 86, BRAND_PRIMARY),
    'Perplexity': (75, 86, BRAND_PRIMARY),
    'Sierra AI': (15, 81, BRAND_PRIMARY),
    'Rabbit r1': (35, 81, BRAND_PRIMARY),

    # Infrastructure layer (y=56-74)
    'MCP (Anthropic)': (15, 64, ACCENT),
    'UCP (Google)': (35, 64, ACCENT),
    'ACP (OpenAI)': (55, 64, ACCENT),
    'A2A (Google)': (75, 64, ACCENT),
    'AP2 (Google)': (15, 59, ACCENT),
    'x402 (Open)': (35, 59, ACCENT),
    'LangChain': (55, 59, ACCENT),
    'CrewAI': (75, 59, ACCENT),

    # Payment layer (y=34-52)
    'Stripe': (15, 42, '#5E6B7A'),
    'Adyen': (35, 42, '#5E6B7A'),
    'Visa TAP': (55, 42, '#5E6B7A'),
    'Ramp': (75, 42, '#5E6B7A'),
    'PayPal': (15, 37, '#5E6B7A'),
    'Square': (35, 37, '#5E6B7A'),
    'Stytch': (55, 37, '#5E6B7A'),

    # Merchant layer (y=12-30)
    'Shopify': (15, 20, NEUTRAL_GRAY),
    'BigCommerce': (35, 20, NEUTRAL_GRAY),
    'Salesforce': (55, 20, NEUTRAL_GRAY),
    'Algolia': (75, 20, NEUTRAL_GRAY),
    'Constructor': (15, 15, NEUTRAL_GRAY),
    'Nosto': (35, 15, NEUTRAL_GRAY),
    'Schema App': (55, 15, NEUTRAL_GRAY),
}

for name, (x, y, color) in companies_map.items():
    bbox = dict(boxstyle='round,pad=0.3', facecolor='white', edgecolor=color, linewidth=0.8, alpha=0.95)
    ax.text(x, y, name, fontsize=6.5, fontweight='bold', color=TEXT_COLOR,
            ha='center', va='center', bbox=bbox, zorder=4)

ax.set_title('')
save(fig, 'market_map.png')

print("\n✅ All 18 charts generated successfully.")
