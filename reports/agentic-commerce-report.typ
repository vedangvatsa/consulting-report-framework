#import "template.typ": *

#show: report.with(
  title: "Agentic Commerce",
  subtitle: "Market Sizing, Competitive Dynamics, and Strategic Implications",
  author: "Vedang Vatsa",
  date: "April 2026",
)

= Executive Summary

*Autonomous AI agents are poised to intermediate \$1.5--5 trillion in global commerce by 2030, creating the largest structural shift in digital trade since the shopping cart.*

#kpi-grid(
  kpi-card("$6.4T", "E-Commerce 2025", "+8.2% YoY"),
  kpi-card("$1.5T", "Agent TTV 2030", "Juniper Research"),
  kpi-card("35.7%", "Tech CAGR", "2026-2033"),
  kpi-card("90%", "B2B Agents 2028", "Gartner"),
)

#v(0.8em)

*Situation.* Global e-commerce reached \$6.4 trillion in 2025, growing 8.2% year-over-year. Yet the fundamental transaction model, where a human browses, selects, and checks out, has remained structurally unchanged since Amazon launched 1-Click ordering in 1999. Every subsequent innovation (mobile payments, social commerce, buy-now-pay-later) optimized the existing flow rather than replacing it.

*Complication.* Agentic AI systems capable of autonomous, multi-step reasoning can now complete end-to-end purchase journeys without human intervention. In the past 12 months, OpenAI launched shopping within ChatGPT, Google integrated agent commerce through Gemini and the Universal Commerce Protocol, Amazon deployed Rufus with audio summaries, and Perplexity introduced "Buy with Pro." Simultaneously, a parallel infrastructure race produced six interoperability protocols (MCP, ACP, UCP, A2A, AP2, x402) designed to enable machine-to-machine transactions at scale.

*Resolution.* The window for strategic positioning is 12-24 months. Merchants must invest in machine-readable catalogs and API-first checkout architectures or risk becoming invisible to agent-mediated discovery. Platforms must adopt open commerce protocols to avoid fragmentation. Investors should target the infrastructure layer, specifically payment orchestration, identity verification, and agent middleware, where risk-adjusted returns are highest before protocol winners are established by 2028.

#callout[
  *Key Insight:* 2026 is the breakout year for agentic shopping. Consumer trust remains the primary barrier, with 78% of consumers uncomfortable delegating full purchasing authority to AI agents. However, B2B procurement, where trust thresholds are lower and efficiency gains are immediate, will lead adoption with Gartner projecting 90% of B2B buying will be agent-intermediated by 2028.
]

#section-divider("01", "Market Definition", "Defining agentic commerce and establishing the analytical framework")

#block(breakable: false, above: 0.8em, below: 0.8em)[
  #image("images/ai-commerce.jpg", width: 100%)
  #v(0.1em)
  #text(size: 7pt, style: "italic", fill: steel)[Photo: Unsplash. AI agents are beginning to handle end-to-end purchase journeys on behalf of consumers.]
]

*Agentic commerce represents a structural break from two decades of static e-commerce, transferring discovery, evaluation, negotiation, and transaction execution to autonomous AI systems.*

The defining characteristic of agentic commerce is autonomy. Unlike traditional recommendation engines or chatbots that assist human decision-making, agentic systems act independently once given a high-level directive. A consumer might instruct an agent to "find the best noise-canceling headphones under \$300 with next-day delivery," and the agent handles every subsequent step: querying multiple merchants, comparing specifications, evaluating reviews, negotiating pricing where possible, completing checkout, and confirming delivery.

This capability emerged from the convergence of three technical breakthroughs in 2025-2026: foundation models that reason reliably over structured data, standardized protocols that enable machine-to-machine commerce, and payment infrastructure that allows delegated authorization.

#table-exhibit(none, "Core capabilities that define agentic commerce systems", "Author analysis")[
  #table(
    columns: (1.2fr, 3fr),
    stroke: none,
    fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
    table.header(
      text(fill: white, weight: "bold")[Capability],
      text(fill: white, weight: "bold")[Description],
    ),
    [*Autonomy*], [Agent acts independently after receiving a high-level directive from the user],
    [*Multi-step reasoning*], [Decomposes complex purchase tasks, queries multiple sources, evaluates trade-offs],
    [*Cross-platform operation*], [Operates across merchant boundaries, comparing prices and availability in real time],
    [*Transaction completion*], [Completes checkout, manages payment authorization, confirms delivery],
    [*Protocol-native*], [Uses standardized protocols (MCP, ACP, UCP) for machine-to-machine commerce],
    [*Data-driven optimization*], [Optimizes on objective metrics such as price, delivery speed, reviews, and specifications],
  )
]

=== Scope
- *Products:* Consumer retail (B2C) and enterprise procurement (B2B) mediated by AI agents
- *Geographies:* Global, emphasis on United States, EU, and China
- *Time horizon:* 2026 through 2031
- *Exclusions:* Traditional chatbots, static recommendation engines, manual search

#section-divider("02", "Market Sizing", "TAM, SAM, SOM analysis with triangulated estimates from tier-1 analysts")

*The agentic commerce opportunity spans \$1.5-5 trillion in mediated transaction value by 2030, with the technology solutions market reaching ~\$65 billion by 2033.*

Sizing this market requires distinguishing between two fundamentally different metrics. The Total Transaction Value (TTV) measures the gross value of commerce mediated by agents, analogous to how Visa measures payment volume. The Technology Solutions market measures revenue generated by agent infrastructure providers. The 50x difference between these figures (\$1.5T vs \$30B) reflects the asset-light, high-throughput nature of agent intermediation.

We triangulate five tier-1 estimates below, noting that the 3x variance across sources stems primarily from definitional differences rather than analytical disagreement.

#chart-exhibit(1, "Agent-mediated commerce could reach $6.3T in combined TTV by 2030",
  "charts/market_growth_area.png",
  "Author analysis triangulating McKinsey (2025), Juniper Research (2026), Gartner (2026)")

#table-exhibit(2, "Analyst estimates vary by 3x depending on metric measured",
  "McKinsey (2025), Juniper Research (2026), Bain (2025), Morgan Stanley (2026), Grand View Research (2026)")[
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
    [McKinsey], [Consumer TTV mediated], [\$3-5 trillion], [Global],
    [Juniper Research], [Total TTV handled], [\$1.5 trillion], [Global],
    [Bain], [E-commerce TTV], [\$300-500B], [U.S.],
    [Morgan Stanley], [E-commerce spending], [\$190-385B], [U.S.],
    [Grand View Research], [Technology solutions], [~\$65B (2033)], [Global],
  )
]

#table-exhibit(3, "B2B indirect procurement represents the highest near-term SAM",
  "Statista (2026), Gartner (2026), Author analysis")[
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
    [B2C Retail E-Commerce], [6.4], [3.2], [15-25%],
    [B2B Indirect Procurement], [8.0], [5.0], [25-40%],
    [B2B Direct Procurement], [24.0], [8.0], [5-15%],
    table.cell(fill: rgb("#E8ECF0"))[*Total*], table.cell(fill: rgb("#E8ECF0"))[*38.4*], table.cell(fill: rgb("#E8ECF0"))[*16.2*], table.cell(fill: rgb("#E8ECF0"))[],
  )
]

#section-divider("03", "Competitive Landscape", "Platform positioning, protocol competition, and strategic differentiation")

*Four platform giants are racing to own the agentic shopping interface, while a parallel infrastructure battle over protocols will determine the industry standard.*

The competitive landscape splits into two distinct battles. The first is for the consumer interface: which agent will users trust with their purchasing decisions? Google, OpenAI, Amazon, and Perplexity have each launched shopping-capable agents in the past 12 months, each leveraging different strategic assets. Google controls search intent and Android distribution. OpenAI has the largest conversational user base. Amazon owns the fulfillment network. Perplexity differentiates through transparent, research-first discovery.

The second battle is for protocol dominance: which standards will govern machine-to-machine commerce? Six protocols launched between late 2025 and mid-2026. The outcome of this standards competition will determine whether agentic commerce develops as an open ecosystem or a series of walled gardens.

#chart-exhibit(4, "Google leads in agentic commerce readiness driven by protocol breadth",
  "charts/competitive_readiness.png",
  "Author analysis based on publicly announced capabilities, April 2026")

#table-exhibit(5, "Platform capability comparison across the agentic commerce lifecycle",
  "Company announcements, Digital Commerce 360 (2026)")[
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
    [Google (Gemini)], [Protocol integration], [Native via UCP], [Universal Commerce Protocol],
    [OpenAI (ChatGPT)], [Conversational discovery], [Merchant-integrated], [Side-by-side comparison],
    [Amazon (Rufus)], [Retail data depth], [Native Amazon], [Audio summaries],
    [Perplexity], [Research-led, unbiased], [Buy with Pro], [Transparent sourcing],
  )
]

#chart-exhibit(6, "Google occupies the strongest position with broad capabilities and open protocols",
  "charts/competitive_matrix.png",
  "Author analysis, April 2026")

#chart-exhibit(7, "MCP leads protocol adoption with 78% of agent-enabled platforms",
  "charts/protocol_adoption.png",
  "Author analysis based on platform integration announcements, April 2026")

#table-exhibit(8, "Six protocols compete to define the agentic commerce stack",
  "Anthropic (2025), Google (2026), OpenAI (2026), Stripe (2026)")[
  #table(
    columns: (1fr, 1.2fr, 1fr, 2.5fr),
    stroke: none,
    fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
    table.header(
      text(fill: white, weight: "bold")[Protocol],
      text(fill: white, weight: "bold")[Developer],
      text(fill: white, weight: "bold")[Layer],
      text(fill: white, weight: "bold")[Function],
    ),
    [MCP], [Anthropic], [Foundation], [Agent-to-tool/API connections],
    [A2A], [Google], [Coordination], [Inter-agent communication],
    [ACP], [OpenAI + Stripe], [Execution], [Programmatic checkout],
    [UCP], [Google + Retailers], [Discovery], [Surface-agnostic commerce],
    [AP2], [Google + Partners], [Payment], [Mandate-based authorization],
    [x402], [Open Source], [Micropayment], [HTTP-native M2M payments],
  )
]

== Technology Stack

*A four-layer protocol stack is forming, with payment infrastructure as the critical bottleneck for mainstream adoption.*

#highlight-stat("4 Layers", "Foundation  >  Coordination  >  Execution  >  Payment/Trust")

#v(0.8em)

#table-exhibit(9, "The agentic commerce stack operates across four distinct layers",
  "Author analysis based on protocol documentation, 2026")[
  #table(
    columns: (1.2fr, 1.5fr, 1.2fr, 1.5fr),
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
]

#callout[
  *Key Insight:* The payment authorization problem is to agentic commerce what mobile-responsive design was to mobile commerce in 2010. The companies that solve delegated payment trust first will capture outsized value.
]

== Value Chain Analysis

*Value is migrating from merchants toward agent providers, creating a new gatekeeper dynamic that could commoditize brands.*

#chart-exhibit(10, "Agent providers capture 40% of new value, displacing merchants",
  "charts/value_chain_shift.png",
  "McKinsey (2026), IBM (2026), Author analysis")

#table-exhibit(11, "Value capture shifts dramatically in agentic commerce",
  "McKinsey (2026), Author analysis")[
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
]

#callout[
  *Key Insight:* When agents mediate purchases, merchant brand identity becomes invisible. Agents optimize for price, delivery speed, and review scores rather than brand preference.
]

#section-divider("06", "Growth Drivers and Risks", "Forces accelerating adoption and headwinds that could slow the trajectory")

#block(breakable: false, above: 0.8em, below: 0.8em)[
  #image("images/warehouse.jpg", width: 100%)
  #v(0.1em)
  #text(size: 7pt, style: "italic", fill: steel)[Photo: Unsplash. B2B procurement and supply chain operations are early candidates for agent-mediated automation.]
]

*Four forces converge to accelerate adoption: improving LLM reasoning, protocol standardization, B2B procurement demand, and consumer convenience expectations.*

The adoption trajectory for agentic commerce follows a pattern familiar from mobile commerce (2010-2022) and social commerce (2018-2025). Early adopters cluster in categories where the value proposition is unambiguous: replenishment, price-sensitive comparison shopping, and structured B2B procurement. The critical inflection point arrives when consumer trust crosses the threshold for first-time autonomous purchases of unfamiliar products.

#kpi-grid(
  kpi-card("<5%", "LLM Error Rate", "Q1 2026 benchmarks"),
  kpi-card("$15T+", "B2B via Agents 2028", "Gartner forecast"),
  kpi-card("59%", "Mobile Commerce 2025", "Adoption precedent"),
)

#v(0.8em)

+ *LLM Reasoning.* Foundation models crossed the reliability threshold. Error rates on structured commerce tasks dropped below 5% in Q1 2026.
+ *Protocol Standardization.* MCP, A2A, ACP, UCP, and AP2 launched within 12 months, compressing integration timelines.
+ *B2B Procurement.* Gartner forecasts 90% of B2B buying will be AI-intermediated by 2028. B2B purchasing is inherently structured.
+ *Consumer Convenience.* Mobile commerce grew from ~5% to 59% in 12 years. Agentic commerce offers a similar convenience leap.

== Risks and Headwinds

*Consumer trust, regulatory fragmentation, and novel fraud vectors could slow adoption by 2-4 years relative to current projections.*

#chart-exhibit(12, "Consumer comfort drops sharply from discovery to autonomous purchasing",
  "charts/consumer_trust.png",
  "Author analysis based on PwC (2026), Visa (2026), consumer survey data")

#table-exhibit(13, "Regulatory approaches diverge across the three largest markets",
  "Hogan Lovells (2026), Data Innovation Institute (2026), UK Government (2026)")[
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
    [Timeline], [2027-2028], [2028+], [2027],
  )
]

#section-divider("08", "Five-Year Outlook", "Scenario analysis with probability-weighted projections through 2030")

*The base case projects agent-mediated commerce reaching 10-15% of global e-commerce by 2030, with a wide range across scenarios.*

We model three scenarios weighted by probability of occurrence. The bear case (25% probability) assumes regulatory friction delays mainstream adoption by 2-3 years. The base case (55%) assumes steady protocol maturation with gradual consumer trust building. The bull case (20%) assumes a viral adoption event, possibly triggered by a major platform making agent commerce the default checkout experience.

#chart-exhibit(14, "Agent-mediated share of global e-commerce reaches ~15% by 2030",
  "charts/penetration_timeline.png",
  "Author analysis triangulating Juniper, McKinsey, Morgan Stanley")

#chart-exhibit(15, "Base case projects $6.3T in combined agent-mediated commerce by 2030",
  "charts/scenario_analysis.png",
  "Author analysis")

#table-exhibit(16, "Scenario assumptions and implications",
  "Author analysis triangulating McKinsey, Bain, Morgan Stanley, Juniper, Gartner")[
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
    [2030 B2C Agent TTV], [\$200-400B], [\$1.0-1.5T], [\$3-5T],
    [2030 B2B Agent TTV], [\$2-3T], [\$4-6T], [\$8-12T],
    [Tech Solutions Market], [\$8-12B], [\$20-25B], [\$40-50B],
    [Key Assumption], [Regulatory crackdown], [Steady maturation], [Viral adoption],
    [Primary Beneficiary], [Incumbents], [Infrastructure], [Agent providers],
  )
]

== Strategic Recommendations

#block(breakable: false, above: 0.8em, below: 0.8em)[
  #image("images/boardroom.jpg", width: 100%)
  #v(0.1em)
  #text(size: 7pt, style: "italic", fill: steel)[Photo: Unsplash. Strategic decisions made in the next 12-24 months will determine competitive positioning in the agentic commerce era.]
]

*Companies must act within 12-24 months to build infrastructure and organizational capabilities for agent-mediated commerce.*

The strategic imperative differs by stakeholder. Merchants face the most urgent deadline: without machine-readable product catalogs and API-first checkout infrastructure, they risk becoming invisible to agent-mediated discovery. Platforms must choose between building proprietary agent ecosystems or adopting open protocols. Investors have a narrow window to deploy capital into infrastructure plays before protocol winners are established by 2028.

#timeline-item("Q3 2026", "Merchants: Begin catalog and API audit",
  "Upgrade product data to JSON-LD schema. Build API-first checkout endpoints compatible with ACP/UCP.")
#timeline-item("Q4 2026", "Platforms: Ship protocol support",
  "Native support for ACP + UCP. Agent-facing APIs alongside human-facing storefronts.")
#timeline-item("Q1 2027", "Enterprise: Launch procurement agent pilots",
  "Deploy specialized agent clusters for indirect procurement. Human-in-the-loop above $5,000.")
#timeline-item("Q2 2027", "Investors: Deploy infrastructure capital",
  "Target payment orchestration, identity verification, agent middleware at Seed-Series B stage.")
#timeline-item("2028", "Scale and optimize",
  "Measure agent-mediated traffic, conversion, and CAC. Winners established, valuations reflect it.")

#v(0.8em)

#table-exhibit(17, "Infrastructure investment offers the highest risk-adjusted returns",
  "Author analysis")[
  #table(
    columns: (2fr, 0.7fr, 0.7fr, 0.8fr, 1.5fr),
    stroke: none,
    fill: (_, y) => if y == 0 { navy } else if calc.odd(y) { rgb("#F7F8FA") } else { white },
    table.header(
      text(fill: white, weight: "bold")[Recommendation],
      text(fill: white, weight: "bold")[Impact],
      text(fill: white, weight: "bold")[Feasib.],
      text(fill: white, weight: "bold")[Timeline],
      text(fill: white, weight: "bold")[Expected ROI],
    ),
    [Merchant: Machine-readable infra], [High], [High], [6-12 mo], [15-25% CAC reduction],
    [Platform: Protocol adoption], [High], [Med], [9-15 mo], [10-20% GMV uplift],
    [Investor: Infrastructure layer], [High], [Med], [2026-27], [5-10x / 5-7 years],
    [Enterprise: Procurement pilots], [High], [High], [3-6 mo], [20-35% cycle time cut],
  )
]

#callout[
  *Key Insight:* The window for establishing competitive advantage in agentic commerce infrastructure is narrow. By 2028, protocol winners will be established. Capital deployed in 2026-2027 captures the highest risk-adjusted returns.
]

#pagebreak()
== Appendix

=== Methodology
This report draws on three source categories: (1) Tier-1 analyst research from McKinsey, Bain, Morgan Stanley, Gartner, Juniper, Grand View, IDC (2025-2026). (2) Company announcements from OpenAI, Google, Amazon, Perplexity, Anthropic, Stripe, Visa. (3) Regulatory publications from the EU AI Act, Hogan Lovells, PwC, UK Government.

Market sizing uses triangulated top-down and bottom-up estimates. All forward-looking projections use probabilistic language. Data collection: January 2025 through April 2026.

=== Glossary
#block(breakable: true)[
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
]

=== Sources
#set text(size: 8pt)
+ McKinsey & Company. (2025). _Agentic Commerce: The Next Frontier._ mckinsey.com
+ Bain & Company. (2025). _Sizing the U.S. Agentic Commerce Opportunity._ bain.com
+ Morgan Stanley. (2026). _AI-Mediated E-Commerce Spending Projections._ morganstanley.com
+ Gartner. (2026). _AI Agents Will Intermediate 90% of B2B Buying by 2028._ gartner.com
+ Juniper Research. (2026). _Agentic Commerce TTV Forecast 2026-2030._ juniperresearch.com
+ Grand View Research. (2026). _Agentic Commerce Market Size 2026-2033._ grandviewresearch.com
+ Statista. (2026). _Global Retail E-Commerce Sales 2014-2030._ statista.com
+ Anthropic. (2025). _Model Context Protocol (MCP)._ anthropic.com
+ Google. (2026). _A2A, UCP, and AP2 Protocol Documentation._ developers.google.com
+ OpenAI. (2026). _Agentic Commerce Protocol._ openai.com
+ Stripe. (2026). _Building the Payment Layer for AI Agents._ stripe.com
+ Visa. (2026). _Trusted Agent Protocol._ usa.visa.com
+ PwC. (2026). _Agentic Commerce Risk Advisory._ pwc.com
+ Hogan Lovells. (2026). _Regulatory Framework for Agentic Commerce._ hoganlovells.com
+ Digital Commerce 360. (2026). _AI Shopping Agents in 2026._ digitalcommerce360.com
