#import "template.typ": *

#show: report.with(
  title: "Agentic Commerce",
  subtitle: "Market Sizing, Competitive Dynamics, and Strategic Implications",
  author: "Vedang Vatsa",
  date: "April 2026",
)

// ============================================================
// EXECUTIVE SUMMARY
// ============================================================
= Executive Summary

*Autonomous AI agents are poised to intermediate \$1.5--5 trillion in global commerce by 2030, creating the largest structural shift in digital trade since the shopping cart.*

#kpi-grid(
  kpi-card("\$6.4T", "Global E-Commerce 2025", "+8.2% YoY"),
  kpi-card("\$1.5T", "Agent-Mediated TTV 2030", "Juniper Research"),
  kpi-card("35.7%", "Tech Solutions CAGR", "2026–2033"),
  kpi-card("90%", "B2B via Agents by 2028", "Gartner forecast"),
)

#v(0.5em)

*Situation.* Global e-commerce reached \$6.4 trillion in 2025. The transaction model where a human browses, selects, and checks out has remained unchanged for two decades.

*Complication.* Agentic systems capable of autonomous reasoning can now complete end-to-end purchase journeys. OpenAI, Google, Amazon, and Perplexity all launched agent-driven shopping in 2025–2026. New protocols (ACP, UCP, A2A, AP2) enable machine-to-machine transactions.

*Resolution.* Companies must act within 12–24 months. Merchants need machine-readable catalogs and API-first architectures. Platforms must adopt open commerce protocols. Investors should target the infrastructure layer.

#callout[
  *Key Insight:* 2026 is the breakout year for agentic shopping. Consumer trust remains the primary barrier, with most consumers uncomfortable delegating full purchasing authority to AI agents.
]

// ============================================================
// SECTION 1: MARKET DEFINITION
// ============================================================
#section-divider("01", "Market Definition", "Defining agentic commerce and establishing the analytical framework")

*Agentic commerce represents a structural break from two decades of static e-commerce, transferring discovery, evaluation, negotiation, and transaction execution to autonomous AI systems.*

#v(0.5em)

#grid(columns: (1fr, 1fr, 1fr), column-gutter: 10pt, row-gutter: 10pt,
  rect(radius: 4pt, fill: light-bg, inset: 12pt)[
    #align(center)[
      #text(size: 20pt)[🤖] #v(0.2em)
      #text(size: 9pt, weight: "bold", fill: navy)[Autonomy] #v(0.1em)
      #text(size: 8pt, fill: steel)[Acts independently after high-level directive]
    ]
  ],
  rect(radius: 4pt, fill: light-bg, inset: 12pt)[
    #align(center)[
      #text(size: 20pt)[🧠] #v(0.2em)
      #text(size: 9pt, weight: "bold", fill: navy)[Multi-Step Reasoning] #v(0.1em)
      #text(size: 8pt, fill: steel)[Decomposes tasks, evaluates trade-offs]
    ]
  ],
  rect(radius: 4pt, fill: light-bg, inset: 12pt)[
    #align(center)[
      #text(size: 20pt)[🌐] #v(0.2em)
      #text(size: 9pt, weight: "bold", fill: navy)[Cross-Platform] #v(0.1em)
      #text(size: 8pt, fill: steel)[Operates across merchant boundaries]
    ]
  ],
  rect(radius: 4pt, fill: light-bg, inset: 12pt)[
    #align(center)[
      #text(size: 20pt)[💳] #v(0.2em)
      #text(size: 9pt, weight: "bold", fill: navy)[Transaction Completion] #v(0.1em)
      #text(size: 8pt, fill: steel)[Checkout, payment, delivery confirmation]
    ]
  ],
  rect(radius: 4pt, fill: light-bg, inset: 12pt)[
    #align(center)[
      #text(size: 20pt)[🔗] #v(0.2em)
      #text(size: 9pt, weight: "bold", fill: navy)[Protocol-Native] #v(0.1em)
      #text(size: 8pt, fill: steel)[MCP, ACP, UCP for M2M commerce]
    ]
  ],
  rect(radius: 4pt, fill: light-bg, inset: 12pt)[
    #align(center)[
      #text(size: 20pt)[📊] #v(0.2em)
      #text(size: 9pt, weight: "bold", fill: navy)[Data-Driven] #v(0.1em)
      #text(size: 8pt, fill: steel)[Optimizes on price, speed, reviews]
    ]
  ],
)

#v(0.5em)

=== Scope
- *Products:* Consumer retail (B2C) and enterprise procurement (B2B) mediated by AI agents
- *Geographies:* Global, emphasis on United States, EU, and China
- *Time horizon:* 2026 through 2031
- *Exclusions:* Traditional chatbots, static recommendation engines, manual search

// ============================================================
// SECTION 2: MARKET SIZING
// ============================================================
#section-divider("02", "Market Sizing", "TAM, SAM, SOM analysis with triangulated estimates from tier-1 analysts")

*The agentic commerce opportunity spans \$1.5–5 trillion in mediated transaction value by 2030, with the technology solutions market reaching ~\$65 billion by 2033.*

#exhibit(1, "Agent-mediated commerce could reach \$6.3T in combined TTV by 2030")
#image("charts/market_growth_area.png", width: 100%)
#source("Author analysis triangulating McKinsey (2025), Juniper Research (2026), Gartner (2026)")

#exhibit(2, "Analyst estimates vary by 3x depending on metric measured")
#table(
  columns: (2fr, 2.5fr, 1.5fr, 1fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Source],
    text(fill: white, weight: "bold")[Metric],
    text(fill: white, weight: "bold")[2030 Estimate],
    text(fill: white, weight: "bold")[Geo],
  ),
  [McKinsey], [Consumer TTV mediated], [\$3–5 trillion], [Global],
  [Juniper Research], [Total TTV handled], [\$1.5 trillion], [Global],
  [Bain], [E-commerce TTV], [\$300–500B], [U.S.],
  [Morgan Stanley], [E-commerce spending], [\$190–385B], [U.S.],
  [Grand View Research], [Technology solutions], [~\$65B (2033)], [Global],
)
#source("McKinsey (2025), Juniper Research (2026), Bain (2025), Morgan Stanley (2026), Grand View Research (2026)")

#exhibit(3, "B2B indirect procurement represents the highest near-term SAM")
#table(
  columns: (2.5fr, 1fr, 1.5fr, 1.2fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Segment],
    text(fill: white, weight: "bold")[2025 (\$T)],
    text(fill: white, weight: "bold")[SAM (\$T)],
    text(fill: white, weight: "bold")[Penetration],
  ),
  [B2C Retail E-Commerce], [6.4], [3.2], [15–25%],
  [B2B Indirect Procurement], [8.0], [5.0], [25–40%],
  [B2B Direct Procurement], [24.0], [8.0], [5–15%],
  table.cell(fill: rgb("#E8ECF0"))[*Total*], table.cell(fill: rgb("#E8ECF0"))[*38.4*], table.cell(fill: rgb("#E8ECF0"))[*16.2*], table.cell(fill: rgb("#E8ECF0"))[],
)
#source("Statista (2026), Gartner (2026), Author analysis")
// ============================================================
// SECTION 3: COMPETITIVE LANDSCAPE
// ============================================================
#section-divider("03", "Competitive Landscape", "Platform positioning, protocol competition, and strategic differentiation")

*Four platform giants are racing to own the agentic shopping interface, while a parallel infrastructure battle over protocols will determine the industry standard.*

#exhibit(4, "Google leads in agentic commerce readiness driven by protocol breadth")
#image("charts/competitive_readiness.png", width: 100%)
#source("Author analysis based on publicly announced capabilities, April 2026")

#exhibit(5, "Platform capability comparison across the agentic commerce lifecycle")
#table(
  columns: (1.3fr, 1.5fr, 1.2fr, 2fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Platform],
    text(fill: white, weight: "bold")[Strength],
    text(fill: white, weight: "bold")[Checkout],
    text(fill: white, weight: "bold")[Unique Capability],
  ),
  [Google (Gemini)], [Protocol integration], [Native via UCP], [Universal Commerce Protocol, Direct Offers],
  [OpenAI (ChatGPT)], [Conversational discovery], [Merchant-integrated], [Side-by-side comparison, image upload],
  [Amazon (Rufus)], [Retail data depth], [Native Amazon], ["Join the chat" audio summaries],
  [Perplexity], [Research-led, unbiased], [Buy with Pro], [Ad-free, transparent sourcing],
)
#source("Company announcements, Digital Commerce 360 (2026)")

#exhibit(6, "Google occupies the strongest position with broad capabilities and open protocols")
#image("charts/competitive_matrix.png", width: 100%)
#source("Author analysis, April 2026")

#exhibit(7, "MCP leads protocol adoption with 78% of agent-enabled platforms")
#image("charts/protocol_adoption.png", width: 100%)
#source("Author analysis based on platform integration announcements, April 2026")

#exhibit(8, "Six protocols compete to define the agentic commerce stack")
#table(
  columns: (0.8fr, 1.2fr, 1fr, 2.5fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Protocol],
    text(fill: white, weight: "bold")[Developer],
    text(fill: white, weight: "bold")[Layer],
    text(fill: white, weight: "bold")[Function],
  ),
  [MCP], [Anthropic], [Foundation], [Agent-to-tool/API connections ("USB-C for AI")],
  [A2A], [Google], [Coordination], [Inter-agent communication and task delegation],
  [ACP], [OpenAI + Stripe], [Execution], [Programmatic checkout, secure payment tokens],
  [UCP], [Google + Retailers], [Discovery], [Surface-agnostic commerce lifecycle],
  [AP2], [Google + Partners], [Payment], [Mandate-based agent spending authorization],
  [x402], [Open Source], [Micropayment], [HTTP-native machine-to-machine payments],
)
#source("Anthropic (2025), Google (2026), OpenAI (2026), Stripe (2026)")

// ============================================================
// SECTION 4: TECHNOLOGY STACK
// ============================================================
== Technology Stack

*A four-layer protocol stack is forming, with payment infrastructure as the critical bottleneck for mainstream adoption.*

#highlight-stat("4 Layers", "Foundation → Coordination → Execution → Payment/Trust")

#v(0.5em)

#exhibit(9, "The agentic commerce stack operates across four distinct layers")
#table(
  columns: (0.5fr, 1.5fr, 1.2fr, 1.5fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Layer],
    text(fill: white, weight: "bold")[Function],
    text(fill: white, weight: "bold")[Protocol],
    text(fill: white, weight: "bold")[Traditional Equiv.],
  ),
  [1. Foundation], [Agent connects to merchant data], [MCP (Anthropic)], [Website crawling],
  [2. Coordination], [Agents coordinate with each other], [A2A (Google)], [No equivalent],
  [3. Execution], [Cart building, checkout], [ACP / UCP], [Shopping cart],
  [4. Payment], [Authorization, fraud prevention], [AP2, TAP (Visa)], [Credit card form],
)
#source("Author analysis based on protocol documentation, 2026")

#callout[
  *Key Insight:* The payment authorization problem is to agentic commerce what mobile-responsive design was to mobile commerce in 2010. A solvable infrastructure challenge that currently gates mainstream adoption. The companies that solve delegated payment trust first will capture outsized value.
]
// ============================================================
// SECTION 5: VALUE CHAIN
// ============================================================
== Value Chain Analysis

*Value is migrating from merchants toward agent providers, creating a new gatekeeper dynamic that could commoditize brands.*

#exhibit(10, "Agent providers capture 40% of new value, displacing merchants")
#image("charts/value_chain_shift.png", width: 100%)
#source("McKinsey (2026), IBM (2026), Author analysis")

#exhibit(11, "Value capture shifts dramatically in agentic commerce")
#table(
  columns: (1fr, 1.5fr, 1.5fr, 1.3fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Role],
    text(fill: white, weight: "bold")[Traditional Driver],
    text(fill: white, weight: "bold")[Agentic Driver],
    text(fill: white, weight: "bold")[Shift],
  ),
  [Agent Provider], [N/A], [User interface, context memory], [Captures most value],
  [Platform], [Hosting, payments], [APIs, identity protocols], [Essential plumbing],
  [Merchant], [Brand, design, SEO], [Data quality, fulfillment], [Commoditization risk],
  [Consumer], [Time browsing], [Delegates to agent], [Gains convenience],
)
#source("McKinsey (2026), Author analysis")

#callout[
  *Key Insight:* When agents mediate purchases, merchant brand identity becomes invisible. Agents optimize for price, delivery speed, and review scores rather than brand preference. Merchants with proprietary products or superior fulfillment are best positioned to resist commoditization.
]

// ============================================================
// SECTION 6: GROWTH DRIVERS & RISKS
// ============================================================
#section-divider("06", "Growth Drivers and Risks", "Forces accelerating adoption and headwinds that could slow the trajectory")

*Four forces converge to accelerate adoption: improving LLM reasoning, protocol standardization, B2B procurement demand, and consumer convenience expectations.*

#kpi-grid(
  kpi-card("<5%", "LLM Error Rate", "Q1 2026 benchmarks"),
  kpi-card("\$15T+", "B2B via Agents 2028", "Gartner forecast"),
  kpi-card("59%", "Mobile Commerce 2025", "Adoption precedent"),
)

#v(0.5em)

+ *LLM Reasoning.* Foundation models crossed the reliability threshold. Error rates on structured commerce tasks dropped below 5% in Q1 2026.
+ *Protocol Standardization.* MCP, A2A, ACP, UCP, and AP2 launched within 12 months, compressing integration timelines from "possible" to "easy."
+ *B2B Procurement.* Gartner forecasts 90% of B2B buying will be AI-intermediated by 2028. B2B purchasing is inherently structured.
+ *Consumer Convenience.* Mobile commerce grew from ~5% to 59% in 12 years. Agentic commerce offers a similar convenience leap.

== Risks and Headwinds

*Consumer trust, regulatory fragmentation, and novel fraud vectors could slow adoption by 2–4 years relative to current projections.*

#exhibit(12, "Consumer comfort drops sharply from discovery to autonomous purchasing")
#image("charts/consumer_trust.png", width: 100%)
#source("Author analysis based on PwC (2026), Visa (2026), consumer survey data")

#exhibit(13, "Regulatory approaches diverge across the three largest markets")
#table(
  columns: (1.2fr, 1.3fr, 1.3fr, 1.3fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Dimension],
    text(fill: white, weight: "bold")[EU],
    text(fill: white, weight: "bold")[United States],
    text(fill: white, weight: "bold")[United Kingdom],
  ),
  [Approach], [Risk-based, prescriptive], [Innovation-first, sectoral], [Principles-based],
  [Key Regulator], [European AI Office], [CFPB, FTC, NIST], [FCA, CMA, ICO],
  [Agent Status], [Likely "high-risk"], [Legally ambiguous], [Case-by-case],
  [Transparency], [Required], [Voluntary], [Expected],
  [Timeline], [2027–2028], [2028+], [2027],
)
#source("Hogan Lovells (2026), Data Innovation Institute (2026), UK Government (2026)")
// ============================================================
// SECTION 8: FIVE-YEAR OUTLOOK
// ============================================================
#section-divider("08", "Five-Year Outlook", "Scenario analysis with probability-weighted projections through 2030")

*The base case projects agent-mediated commerce reaching 10–15% of global e-commerce by 2030, with a wide range across scenarios.*

#exhibit(14, "Agent-mediated share of global e-commerce reaches ~15% by 2030")
#image("charts/penetration_timeline.png", width: 100%)
#source("Author analysis triangulating Juniper, McKinsey, Morgan Stanley")

#exhibit(15, "Base case projects \$6.3T in combined agent-mediated commerce by 2030")
#image("charts/scenario_analysis.png", width: 100%)
#source("Author analysis")

#exhibit(16, "Scenario assumptions and implications")
#table(
  columns: (1.5fr, 1fr, 1fr, 1fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Metric],
    text(fill: white, weight: "bold")[Bear (25%)],
    text(fill: white, weight: "bold")[Base (55%)],
    text(fill: white, weight: "bold")[Bull (20%)],
  ),
  [2030 B2C Agent TTV], [\$200–400B], [\$1.0–1.5T], [\$3–5T],
  [2030 B2B Agent TTV], [\$2–3T], [\$4–6T], [\$8–12T],
  [Tech Solutions Market], [\$8–12B], [\$20–25B], [\$40–50B],
  [Key Assumption], [Regulatory crackdown], [Steady maturation], [Viral adoption],
  [Primary Beneficiary], [Incumbents], [Infrastructure], [Agent providers],
)
#source("Author analysis triangulating McKinsey, Bain, Morgan Stanley, Juniper, Gartner")

// ============================================================
// SECTION 9: RECOMMENDATIONS
// ============================================================
== Strategic Recommendations

*Companies must act within 12–24 months to build infrastructure and organizational capabilities for agent-mediated commerce.*

#timeline-item("Q3 2026", "Merchants: Begin catalog and API audit",
  "Upgrade product data to JSON-LD schema. Build API-first checkout endpoints compatible with ACP/UCP.")
#timeline-item("Q4 2026", "Platforms: Ship protocol support",
  "Native support for ACP + UCP. Agent-facing APIs alongside human-facing storefronts.")
#timeline-item("Q1 2027", "Enterprise: Launch procurement agent pilots",
  "Deploy specialized agent clusters for indirect procurement. Human-in-the-loop above \$5,000.")
#timeline-item("Q2 2027", "Investors: Deploy infrastructure capital",
  "Target payment orchestration, identity verification, agent middleware at Seed–Series B stage.")
#timeline-item("2028", "Scale and optimize",
  "Measure agent-mediated traffic, conversion, and CAC. Winners established, valuations reflect it.")

#v(0.5em)

#exhibit(17, "Infrastructure investment offers the highest risk-adjusted returns")
#table(
  columns: (1.8fr, 0.6fr, 0.6fr, 0.8fr, 1.2fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Recommendation],
    text(fill: white, weight: "bold")[Impact],
    text(fill: white, weight: "bold")[Feasib.],
    text(fill: white, weight: "bold")[Timeline],
    text(fill: white, weight: "bold")[Expected ROI],
  ),
  [Merchant: Machine-readable infra], [High], [High], [6–12 mo], [15–25% CAC reduction],
  [Platform: Protocol adoption], [High], [Med], [9–15 mo], [10–20% GMV uplift],
  [Investor: Infrastructure layer], [High], [Med], [2026–27], [5–10x / 5–7 years],
  [Enterprise: Procurement pilots], [High], [High], [3–6 mo], [20–35% cycle time cut],
)
#source("Author analysis")

#callout[
  *Key Insight:* The window for establishing competitive advantage in agentic commerce infrastructure is narrow. By 2028, protocol winners will be established and valuations will reflect it. Capital deployed in 2026–2027 captures the highest risk-adjusted returns.
]

// ============================================================
// APPENDIX
// ============================================================
#pagebreak()
== Appendix

=== Methodology
This report draws on three source categories: (1) Tier-1 analyst research from McKinsey, Bain, Morgan Stanley, Gartner, Juniper, Grand View, IDC (2025–2026). (2) Company announcements from OpenAI, Google, Amazon, Perplexity, Anthropic, Stripe, Visa. (3) Regulatory publications from the EU AI Act, Hogan Lovells, PwC, UK Government.

Market sizing uses triangulated top-down and bottom-up estimates. All forward-looking projections use probabilistic language. Data collection: January 2025 through April 2026.

=== Glossary
#table(
  columns: (1fr, 4fr),
  stroke: none,
  fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
  table.header(
    text(fill: white, weight: "bold")[Term],
    text(fill: white, weight: "bold")[Definition],
  ),
  [ACP], [Agentic Commerce Protocol (OpenAI+Stripe)],
  [A2A], [Agent-to-Agent protocol (Google)],
  [AP2], [Agent Payments Protocol (Google+Partners)],
  [GEO], [Generative Engine Optimization],
  [MCP], [Model Context Protocol (Anthropic)],
  [TAP], [Trusted Agent Protocol (Visa)],
  [TTV], [Total Transaction Value],
  [UCP], [Universal Commerce Protocol (Google)],
)

=== Sources
#set text(size: 8pt)
+ McKinsey & Company. (2025). _Agentic Commerce: The Next Frontier._ mckinsey.com
+ Bain & Company. (2025). _Sizing the U.S. Agentic Commerce Opportunity._ bain.com
+ Morgan Stanley. (2026). _AI-Mediated E-Commerce Spending Projections._ morganstanley.com
+ Gartner. (2026). _AI Agents Will Intermediate 90% of B2B Buying by 2028._ gartner.com
+ Juniper Research. (2026). _Agentic Commerce TTV Forecast 2026–2030._ juniperresearch.com
+ Grand View Research. (2026). _Agentic Commerce Market Size 2026–2033._ grandviewresearch.com
+ Statista. (2026). _Global Retail E-Commerce Sales 2014–2030._ statista.com
+ Anthropic. (2025). _Model Context Protocol (MCP)._ anthropic.com
+ Google. (2026). _A2A, UCP, and AP2 Protocol Documentation._ developers.google.com
+ OpenAI. (2026). _Agentic Commerce Protocol._ openai.com
+ Stripe. (2026). _Building the Payment Layer for AI Agents._ stripe.com
+ Visa. (2026). _Trusted Agent Protocol._ usa.visa.com
+ PwC. (2026). _Agentic Commerce Risk Advisory._ pwc.com
+ Hogan Lovells. (2026). _Regulatory Framework for Agentic Commerce._ hoganlovells.com
+ Digital Commerce 360. (2026). _AI Shopping Agents in 2026._ digitalcommerce360.com
