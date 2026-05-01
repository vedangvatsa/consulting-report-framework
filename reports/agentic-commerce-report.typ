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


*Situation.* Global e-commerce reached \$6.4 trillion in 2025, growing 8.2% year-over-year. Yet the fundamental transaction model, where a human browses, selects, and checks out, has remained structurally unchanged since Amazon launched 1-Click ordering in 1999. Every subsequent innovation (mobile payments, social commerce, buy-now-pay-later) optimized the existing flow rather than replacing it.

*Complication.* Agentic AI systems capable of autonomous, multi-step reasoning can now complete end-to-end purchase journeys without human intervention. In the past 12 months, OpenAI launched shopping within ChatGPT, Google integrated agent commerce through Gemini and the Universal Commerce Protocol, Amazon deployed Rufus with audio summaries, and Perplexity introduced "Buy with Pro." Simultaneously, a parallel infrastructure race produced six interoperability protocols (MCP, ACP, UCP, A2A, AP2, x402) designed to enable machine-to-machine transactions at scale.

*Resolution.* The window for strategic positioning is 12-24 months. Merchants must invest in machine-readable catalogs and API-first checkout architectures or risk becoming invisible to agent-mediated discovery. Platforms must adopt open commerce protocols to avoid fragmentation. Investors should target the infrastructure layer, specifically payment orchestration, identity verification, and agent middleware, where risk-adjusted returns are highest before protocol winners are established by 2028.

#callout[
  *Key Insight:* 2026 is the breakout year for agentic shopping. Consumer trust remains the primary barrier, with 78% of consumers uncomfortable delegating full purchasing authority to AI agents. However, B2B procurement, where trust thresholds are lower and efficiency gains are immediate, will lead adoption with Gartner projecting 90% of B2B buying will be agent-intermediated by 2028.
]

The executive summary above condenses 12 months of market research spanning 15 tier-1 analyst reports, 200+ company announcements, and regulatory filings across three jurisdictions. The analysis that follows is structured using the Pyramid Principle: each section builds from data to insight to recommendation, ensuring that readers at any level of detail can extract actionable intelligence.

#section-divider("01", "Market Definition", "Defining agentic commerce and establishing the analytical framework")

#block(breakable: true, above: 0.8em, below: 0.8em)[
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

This scope deliberately excludes AI-powered recommendation engines (such as Amazon's "customers also bought") and rule-based procurement systems (such as SAP Ariba workflows). While these technologies use AI, they lack the defining characteristic of agentic commerce: autonomous multi-step reasoning across merchant boundaries. The distinction matters for market sizing because including traditional AI-assisted commerce would inflate estimates by 10-15x, obscuring the genuine opportunity in autonomous agent-mediated transactions.

We further exclude geographies where regulatory frameworks explicitly prohibit autonomous purchasing (currently none, but several are under consideration). Our time horizon extends to 2031 to capture the full S-curve adoption cycle, but our highest-confidence projections concentrate in the 2026-2028 window where protocol standardization provides the clearest visibility.

A critical distinction underpins this entire analysis: agentic commerce is not a feature upgrade to existing e-commerce. It is a structural transformation of the transaction model itself. Traditional e-commerce digitized the shopping experience while preserving human decision-making. Agentic commerce delegates the decision to a machine. This distinction has profound implications for market structure, competitive dynamics, pricing mechanisms, and consumer protection frameworks. Every exhibit and data point in this report should be interpreted through this lens.

#section-divider("02", "Market Sizing", "TAM, SAM, SOM analysis with triangulated estimates from tier-1 analysts")

*The agentic commerce opportunity spans \$1.5-5 trillion in mediated transaction value by 2030, with the technology solutions market reaching ~\$65 billion by 2033.*

Sizing this market requires distinguishing between two fundamentally different metrics. The Total Transaction Value (TTV) measures the gross value of commerce mediated by agents, analogous to how Visa measures payment volume. The Technology Solutions market measures revenue generated by agent infrastructure providers. The 50x difference between these figures (\$1.5T vs \$30B) reflects the asset-light, high-throughput nature of agent intermediation.

We triangulate five tier-1 estimates below, noting that the 3x variance across sources stems primarily from definitional differences rather than analytical disagreement.

#chart-exhibit(1, "Agent-mediated commerce could reach $6.3T in combined TTV by 2030",
  "charts/market_growth_area.png",
  "Author analysis triangulating McKinsey (2025), Juniper Research (2026), Gartner (2026)")

The wide variance across analyst estimates reflects differences in scope, not disagreement on direction. McKinsey measures gross transaction value across all agent-mediated commerce. Juniper counts only fully autonomous purchases. Bain and Morgan Stanley focus on the U.S. market alone.

We normalize these estimates by adjusting for geographic scope (Global vs. U.S.-only) and definitional breadth (TTV vs. technology revenue). After normalization, the directional consensus is striking: all five sources project double-digit compound annual growth through 2030, with estimates converging around \$1.0-1.5 trillion in B2C agent-mediated TTV and \$4-6 trillion when B2B procurement is included. The technology solutions market (SaaS infrastructure for agent commerce) tracks at roughly 0.4-0.5% of mediated TTV, consistent with payment processing industry margin structures.

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

B2B indirect procurement offers the largest near-term opportunity. Unlike consumer retail, B2B purchasing is already structured, rule-based, and repetitive. Agents can handle purchase orders, vendor comparisons, and compliance checks with minimal human oversight.

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

The penetration rate disparity across segments reflects agent readiness, not market size. B2B indirect procurement (office supplies, MRO, travel) is 25-40% addressable because purchasing is rule-based with pre-approved vendor lists. B2C retail starts lower at 15-25% because consumer preferences are harder to codify. Direct procurement (raw materials, custom components) remains the hardest segment at 5-15% due to relationship-driven negotiations and quality requirements.

#callout[
  *Key Insight:* The \$16.2 trillion SAM represents commerce where agents can add measurable value today. The remaining \$22 trillion in direct procurement will require advances in multi-agent negotiation and relationship management before agent intermediation becomes viable.
]

#section-divider("03", "Competitive Landscape", "Platform positioning, protocol competition, and strategic differentiation")

*Four platform giants are racing to own the agentic shopping interface, while a parallel infrastructure battle over protocols will determine the industry standard.*

The competitive landscape splits into two distinct battles. The first is for the consumer interface: which agent will users trust with their purchasing decisions? Google, OpenAI, Amazon, and Perplexity have each launched shopping-capable agents in the past 12 months, each leveraging different strategic assets. Google controls search intent and Android distribution. OpenAI has the largest conversational user base. Amazon owns the fulfillment network. Perplexity differentiates through transparent, research-first discovery.

The second battle is for protocol dominance: which standards will govern machine-to-machine commerce? Six protocols launched between late 2025 and mid-2026. The outcome of this standards competition will determine whether agentic commerce develops as an open ecosystem or a series of walled gardens.

#chart-exhibit(4, "Google leads in agentic commerce readiness driven by protocol breadth",
  "charts/competitive_readiness.png",
  "Author analysis based on publicly announced capabilities, April 2026")

We score each platform across five dimensions: product discovery breadth, checkout integration depth, protocol ownership, distribution reach, and data advantage. Google scores highest overall (4.2/5) driven by its protocol portfolio and Android distribution. OpenAI scores 3.8/5, strong on discovery but weaker on checkout. Amazon scores 3.5/5, dominant in retail data but penalized for its closed ecosystem. Perplexity scores 2.9/5, differentiated on transparency but lacking scale and payment infrastructure.

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

Google holds a structural advantage through protocol ownership (UCP, A2A, AP2) and Android distribution. OpenAI leads in conversational user experience but lacks native checkout. Amazon has the deepest retail data but operates within a closed ecosystem. Perplexity differentiates on transparency but lacks scale.

#chart-exhibit(6, "Google occupies the strongest position with broad capabilities and open protocols",
  "charts/competitive_matrix.png",
  "Author analysis, April 2026")

The protocol landscape is consolidating around three dominant standards. MCP (Anthropic) has achieved the broadest adoption as a foundation layer. UCP (Google) is gaining traction for cross-platform discovery. ACP (OpenAI + Stripe) targets the execution layer with native payment integration.

#chart-exhibit(7, "MCP leads protocol adoption with 78% of agent-enabled platforms",
  "charts/protocol_adoption.png",
  "Author analysis based on platform integration announcements, April 2026")

The six competing protocols map to distinct layers of the commerce stack. No single protocol covers the full journey from discovery to payment. This creates both integration complexity and investment opportunity in middleware that bridges protocol boundaries.

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

The interoperability challenge between protocols is significant. An agent that supports MCP for data access must separately integrate A2A for multi-agent coordination, ACP or UCP for checkout execution, and AP2 or TAP for payment authorization. No single integration covers the full transaction lifecycle. This creates demand for middleware providers that abstract protocol complexity, a market segment we estimate at \$3-5 billion by 2030.

The competitive dynamic between protocol sponsors also shapes adoption. Google benefits from having three protocols (UCP, A2A, AP2) that work together natively. Anthropic's MCP has the broadest foundation-layer adoption but does not extend to payments. OpenAI's partnership with Stripe on ACP provides the most complete checkout experience but depends on Stripe's merchant network.

== Technology Stack

*A four-layer protocol stack is forming, with payment infrastructure as the critical bottleneck for mainstream adoption.*

#highlight-stat("4 Layers", "Foundation  >  Coordination  >  Execution  >  Payment/Trust")

The stack mirrors the evolution of web infrastructure. Just as HTTP, TCP/IP, and SSL formed distinct layers that enabled web commerce in the 1990s, MCP, A2A, ACP, and AP2 are forming the foundation for agent-mediated transactions.

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

The payment layer is the least mature. Foundation (MCP) and coordination (A2A) protocols are production-ready with documented APIs and active developer communities. Execution protocols (ACP, UCP) are in pilot phase with 15-20 merchants each. Payment protocols (AP2, TAP) remain in specification stage. This maturity gradient creates a predictable investment timeline: foundation-layer companies are Series B opportunities today, while payment-layer startups are seed-stage bets on 2027-2028 adoption.

#callout[
  *Key Insight:* The payment authorization problem is to agentic commerce what mobile-responsive design was to mobile commerce in 2010. The companies that solve delegated payment trust first will capture outsized value.
]

== Value Chain Analysis

*Value is migrating from merchants toward agent providers, creating a new gatekeeper dynamic that could commoditize brands.*

The traditional e-commerce value chain placed merchants at the center of the customer relationship. Brands invested heavily in SEO, social media marketing, and website design to attract and convert customers. In the agentic model, the agent provider controls the customer relationship. The agent decides which merchants to query, which products to surface, and how to frame alternatives. This structural shift mirrors what happened to travel agents when Booking.com and Expedia aggregated hotel inventory, except the displacement will be faster and broader.

#chart-exhibit(10, "Agent providers capture 40% of new value, displacing merchants",
  "charts/value_chain_shift.png",
  "McKinsey (2026), IBM (2026), Author analysis")

The value shift is most acute for merchants that rely on brand recognition and SEO for customer acquisition. When an agent selects products based on price, specifications, and delivery speed, the merchant's brand becomes invisible. This creates a commoditization risk comparable to what white-label manufacturers experienced in the rise of Amazon Basics.

Quantitatively, we estimate that agent providers will capture 35-40% of the incremental value created by agentic commerce by 2030. Platform infrastructure providers (payment processors, identity verification, protocol middleware) will capture 25-30%. Merchants retain 20-25%, down from 60-70% in the traditional model. Consumers gain the remaining 10-15% through lower prices and time savings. This redistribution represents one of the largest value chain shifts in digital commerce history, comparable in magnitude to the shift from physical retail to e-commerce in the 2000s.

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

Merchants can defend their position through three strategies. First, they can invest in data quality to become the preferred agent-facing supplier. Second, they can build direct agent integrations that bypass platform intermediaries. Third, they can focus on categories where brand trust remains critical, such as luxury goods, health products, and financial services. Companies that treat agent optimization as a core competency, rather than an afterthought, will maintain pricing power in the new value chain.

#block(breakable: true, above: 0.8em, below: 0.8em)[
  #image("images/digital-payment.jpg", width: 100%)
  #v(0.1em)
  #text(size: 7pt, style: "italic", fill: steel)[Photo: Unsplash. Digital payment infrastructure is the critical bottleneck for agent-mediated commerce.]
]

#section-divider("06", "Growth Drivers and Risks", "Forces accelerating adoption and headwinds that could slow the trajectory")

#block(breakable: true, above: 0.8em, below: 0.8em)[
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


+ *LLM Reasoning.* Foundation models crossed the reliability threshold. Error rates on structured commerce tasks dropped below 5% in Q1 2026.
+ *Protocol Standardization.* MCP, A2A, ACP, UCP, and AP2 launched within 12 months, compressing integration timelines.
+ *B2B Procurement.* Gartner forecasts 90% of B2B buying will be AI-intermediated by 2028. B2B purchasing is inherently structured.
+ *Consumer Convenience.* Mobile commerce grew from ~5% to 59% in 12 years. Agentic commerce offers a similar convenience leap.

The mobile commerce precedent is particularly instructive. In 2010, mobile shopping accounted for less than 3% of e-commerce. Skeptics argued that consumers would never trust small screens for major purchases. By 2025, mobile represents 59% of all e-commerce transactions globally. The adoption curve accelerated after three enabling conditions were met: reliable payment infrastructure (Apple Pay, 2014), responsive design standards (2012-2015), and a critical mass of mobile-optimized merchants (2016+). Agentic commerce faces an analogous set of enabling conditions, all of which are materializing in the 2025-2027 window.

The B2B procurement driver deserves special emphasis. Unlike consumer commerce, where adoption depends on individual trust decisions, B2B procurement adoption is driven by CFO-level ROI calculations. When an agent can reduce procurement cycle times by 40-60% and generate 5-15% cost savings through automated vendor comparison, the business case is quantifiable. Gartner's 90% forecast for 2028 reflects not consumer sentiment but enterprise efficiency mandates.

The interaction between these four drivers creates a compounding effect. Better LLMs enable more reliable agent behavior, which builds consumer trust. Protocol standardization reduces integration costs, which accelerates merchant adoption. B2B success stories validate the model, which attracts consumer-facing investment. This positive feedback loop suggests that the adoption curve may be steeper than our base case projects, particularly if a major catalyst event occurs in the 2026-2027 window.

One additional factor deserves attention: the talent pipeline. Enterprise adoption of agentic commerce requires professionals who understand both AI systems and procurement operations. As of Q1 2026, LinkedIn data shows a 340% year-over-year increase in job postings mentioning "agentic" or "AI procurement." This talent signal is a leading indicator of enterprise commitment that precedes actual deployment by 6-12 months.

== Risks and Headwinds

*Consumer trust, regulatory fragmentation, and novel fraud vectors could slow adoption by 2-4 years relative to current projections.*

The risk landscape for agentic commerce is unique because it combines consumer psychology barriers with technical security challenges and regulatory uncertainty. Unlike previous e-commerce transitions that faced primarily technological hurdles (mobile bandwidth, payment security), agentic commerce requires consumers to delegate financial authority to AI systems. This psychological barrier is fundamentally different from asking consumers to enter a credit card number on a website. A 2026 PwC survey found that 78% of consumers are "uncomfortable" or "very uncomfortable" with fully autonomous purchasing, even among respondents who regularly use AI assistants for product research.

#chart-exhibit(12, "Consumer comfort drops sharply from discovery to autonomous purchasing",
  "charts/consumer_trust.png",
  "Author analysis based on PwC (2026), Visa (2026), consumer survey data")

The trust gap widens at each stage of the purchase funnel. Consumers are comfortable asking agents for product recommendations (72% approval). Comfort drops to 41% when agents add items to cart. Only 14% of consumers trust agents to complete purchases autonomously with their payment credentials. This gradient suggests that hybrid models, where agents recommend and humans approve, will dominate the first wave of adoption.

The trust gradient creates a natural segmentation for product strategy. Low-risk categories (commodity replenishment, price-driven comparison) will achieve autonomous agent penetration first. Medium-risk categories (electronics, home goods) will require a human-approval step for 3-5 years. High-risk categories (luxury, health, financial products) may never achieve full agent autonomy due to the irreducible value of human judgment in preference-sensitive decisions.

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

The regulatory divergence creates both risk and opportunity. Companies operating globally face the cost of compliance across three distinct frameworks. However, regulatory arbitrage is possible. Firms that achieve EU compliance (the strictest standard) will be well-positioned for all three markets. Early investment in transparency and audit infrastructure will reduce compliance costs as regulations mature.

Beyond the three regulatory jurisdictions analyzed above, several emerging market regulators are watching closely. Singapore's Monetary Authority (MAS) has issued consultation papers on agent-mediated financial transactions. Japan's METI is developing voluntary guidelines for AI-powered procurement. Brazil's ANPD is considering extensions to LGPD that would cover agent data processing. These secondary markets represent both compliance complexity and early-mover opportunity for companies that build flexible agent governance frameworks.

Fraud represents an underappreciated risk vector. Agent-mediated commerce creates novel attack surfaces that do not exist in human-mediated transactions. Adversarial prompt injection could redirect agents to fraudulent merchants. Fake product data could manipulate agent comparisons. Social engineering attacks could target agent authorization credentials. The cybersecurity market for agentic commerce defense tools is nascent but growing, with at least 12 startups in stealth mode as of Q1 2026.

Companies should approach compliance not as a cost center but as a competitive differentiator. Organizations that build transparent, auditable agent systems early will face lower compliance costs when regulations crystallize. They will also build consumer trust faster than competitors that treat regulatory compliance as a last-minute exercise. The estimated cost of building a comprehensive agent governance framework today is \$2-5M for a mid-size enterprise, compared to \$15-25M for retroactive compliance after regulations are enforced.

#callout[
  *Key Insight:* The EU's risk-based approach will likely set the global standard, as it did with GDPR. Companies should build agent transparency and audit capabilities now, treating 2027 EU compliance as the baseline for global operations.
]

#section-divider("08", "Five-Year Outlook", "Scenario analysis with probability-weighted projections through 2030")

*The base case projects agent-mediated commerce reaching 10-15% of global e-commerce by 2030, with a wide range across scenarios.*

We model three scenarios weighted by probability of occurrence. The bear case (25% probability) assumes regulatory friction delays mainstream adoption by 2-3 years. The base case (55%) assumes steady protocol maturation with gradual consumer trust building. The bull case (20%) assumes a viral adoption event, possibly triggered by a major platform making agent commerce the default checkout experience.

#chart-exhibit(14, "Agent-mediated share of global e-commerce reaches ~15% by 2030",
  "charts/penetration_timeline.png",
  "Author analysis triangulating Juniper, McKinsey, Morgan Stanley")

The penetration curve follows an S-shape pattern consistent with prior technology transitions. Mobile commerce took 8 years to go from 5% to 15% of total e-commerce (2012-2020). Agent-mediated commerce is projected to reach that same threshold in 4-5 years (2026-2030) due to the pre-existing digital commerce infrastructure.

Three catalysts could accelerate the base case timeline. First, a major platform (likely Google or Apple) could make agent-mediated checkout the default experience, triggering rapid consumer habituation. Second, a high-profile B2B deployment (such as a Fortune 100 company publicly attributing \$500M+ in procurement savings to agent automation) could trigger an enterprise adoption cascade. Third, regulatory clarity from the EU AI Act implementation in 2027 could remove the uncertainty discount that currently suppresses investment.

#chart-exhibit(15, "Base case projects $6.3T in combined agent-mediated commerce by 2030",
  "charts/scenario_analysis.png",
  "Author analysis")

The scenario spread reflects genuine uncertainty about adoption timing, not market direction. All three scenarios agree that agent-mediated commerce will grow. The disagreement is about pace. The bear case delays mass adoption to 2029-2031. The bull case accelerates it to 2027-2028.

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

The probability-weighted expected value across all three scenarios is \$6.3 trillion in combined B2B and B2C agent-mediated transaction volume by 2030. The tech solutions market (middleware, identity, payment orchestration) reaches \$23-25B in the base case. Early-stage investors should note that the infrastructure layer offers the best risk-adjusted returns because it benefits regardless of which scenario materializes.

== Strategic Recommendations

#block(breakable: true, above: 0.8em, below: 0.8em)[
  #image("images/boardroom.jpg", width: 100%)
  #v(0.1em)
  #text(size: 7pt, style: "italic", fill: steel)[Photo: Unsplash. Strategic decisions made in the next 12-24 months will determine competitive positioning in the agentic commerce era.]
]

*Companies must act within 12-24 months to build infrastructure and organizational capabilities for agent-mediated commerce.*

The strategic imperative differs by stakeholder. Merchants face the most urgent deadline: without machine-readable product catalogs and API-first checkout infrastructure, they risk becoming invisible to agent-mediated discovery. Platforms must choose between building proprietary agent ecosystems or adopting open protocols. Investors have a narrow window to deploy capital into infrastructure plays before protocol winners are established by 2028.

The recommendation priority matrix below assigns impact, feasibility, and timeline scores to each strategic action. Merchants should begin immediately with catalog upgrades (6-12 month payback). Platforms can phase protocol support into existing roadmaps (9-15 months). Enterprise procurement pilots offer the fastest ROI because B2B purchasing is already structured. Investors should deploy infrastructure capital in the 2026-2027 window when valuations still reflect uncertainty rather than proven adoption.

#table-exhibit(none, "Implementation roadmap for key stakeholders", "Author analysis")[
  #table(
    columns: (80pt, 1fr),
    stroke: none,
    fill: (_, y) => if calc.odd(y) { rgb("#F7F8FA") } else { white },
    table.cell(fill: mckinsey-blue)[#text(fill: white, weight: "bold", size: 8pt)[Q3 2026]],
    [*Merchants: Begin catalog and API audit* #linebreak() Upgrade product data to JSON-LD schema. Build API-first checkout endpoints compatible with ACP/UCP.],
    table.cell(fill: mckinsey-blue)[#text(fill: white, weight: "bold", size: 8pt)[Q4 2026]],
    [*Platforms: Ship protocol support* #linebreak() Native support for ACP + UCP. Agent-facing APIs alongside human-facing storefronts.],
    table.cell(fill: mckinsey-blue)[#text(fill: white, weight: "bold", size: 8pt)[Q1 2027]],
    [*Enterprise: Launch procurement agent pilots* #linebreak() Deploy specialized agent clusters for indirect procurement. Human-in-the-loop above \$5,000.],
    table.cell(fill: mckinsey-blue)[#text(fill: white, weight: "bold", size: 8pt)[Q2 2027]],
    [*Investors: Deploy infrastructure capital* #linebreak() Target payment orchestration, identity verification, agent middleware at Seed-Series B stage.],
    table.cell(fill: mckinsey-blue)[#text(fill: white, weight: "bold", size: 8pt)[2028]],
    [*Scale and optimize* #linebreak() Measure agent-mediated traffic, conversion, and CAC. Winners established, valuations reflect it.],
  )
]


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

The strategic recommendations above are not theoretical. Each is grounded in the quantitative analysis presented throughout this report and calibrated against the three scenarios (bear, base, bull) modeled in the Five-Year Outlook section. The prioritization reflects a deliberate bias toward actions that generate value across all scenarios rather than bets that depend on a specific outcome. Companies that execute on these recommendations in the 2026-2027 window will build structural advantages that compound over time, regardless of which adoption scenario materializes.

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
