# Agentic Commerce: Market Sizing, Competitive Dynamics, and Strategic Implications

<div class="cover-page">

**Agentic Commerce: The Next Frontier of Digital Trade**

Market Analysis, Competitive Landscape, and Five-Year Strategic Outlook

**Prepared by:** Vedang Vatsa
**Date:** April 2026

*This document has been prepared for the exclusive use of internal strategy teams. It contains proprietary and confidential information. No part of this report may be reproduced, distributed, or communicated to any third party without express prior written consent. The findings are based on information available at the time of preparation. The author accepts no liability for decisions made in reliance on this report.*

</div>

---

<div class="toc">

## Table of Contents

- Executive Summary
- 1. Market Definition and Context
  - 1.1 What Is Agentic Commerce
  - 1.2 Market Context (SCR)
  - 1.3 Key Terminology
- 2. Market Sizing
  - 2.1 Total Addressable Market (TAM)
  - 2.2 Serviceable Addressable Market (SAM)
  - 2.3 Serviceable Obtainable Market (SOM)
  - 2.4 Sizing Methodology
- 3. Competitive Landscape
  - 3.1 Platform Giants Are Building the Agent Layer
  - 3.2 Infrastructure and Protocol Providers
  - 3.3 Competitive Positioning Map
- 4. Technology Stack and Protocol Architecture
  - 4.1 The Four-Layer Agentic Commerce Stack
  - 4.2 Payment Infrastructure Is the Critical Bottleneck
- 5. Value Chain Analysis
  - 5.1 Value Is Migrating from Merchants to Agent Providers
  - 5.2 The Merchant Commoditization Risk
- 6. Growth Drivers
  - 6.1 LLM Reasoning Capabilities
  - 6.2 Protocol Standardization
  - 6.3 B2B Procurement Automation
  - 6.4 Consumer Convenience Demand
- 7. Risks and Headwinds
  - 7.1 Consumer Trust Deficit
  - 7.2 Regulatory Fragmentation
  - 7.3 Security and Fraud Vectors
- 8. Five-Year Outlook and Scenario Analysis
  - 8.1 Base Case
  - 8.2 Bull Case
  - 8.3 Bear Case
- 9. Strategic Recommendations
- 10. Appendix

</div>

---

## Executive Summary

**Autonomous AI agents are poised to intermediate $1.5-5 trillion in global commerce by 2030, creating the largest structural shift in digital trade since the invention of the shopping cart.**

**Situation.** Global e-commerce reached $6.4 trillion in 2025, growing steadily at 8-10% annually. AI has been used in commerce for years, primarily for product recommendations and search ranking. The underlying transaction model, where a human browses, selects, and checks out, has remained unchanged for two decades.

**Complication.** A new category of AI, agentic systems capable of autonomous reasoning, planning, and execution, is now capable of completing end-to-end purchase journeys without human intervention at each step. OpenAI, Google, Amazon, and Perplexity have all launched agent-driven shopping experiences in 2025-2026. New commerce protocols (ACP, UCP, A2A, AP2) are being ratified to enable machine-to-machine transactions. The entire commerce value chain, from discovery to checkout to fulfillment, faces restructuring.

**Resolution.** Companies must act within the next 12-24 months to position for this shift. Merchants must invest in machine-readable product data and API-first architectures. Platform providers must adopt open commerce protocols. Investors should target the infrastructure layer, where durable competitive advantages are forming around payment orchestration, identity verification, and agent interoperability standards.

**Key Findings:**
- McKinsey projects agentic commerce could mediate $3-5 trillion in global consumer commerce by 2030. Juniper Research estimates $1.5 trillion in total transaction value by 2030, up from ~$8 billion in 2026.
- Gartner forecasts that by 2028, 90% of B2B buying will be intermediated by AI agents, channeling more than $15 trillion in global B2B spending through automated exchanges.
- The agentic AI technology solutions market (platforms, middleware, protocols) is projected to reach ~$65 billion by 2033, growing at 35.7% CAGR from 2026 (Grand View Research, 2026).
- Consumer trust remains the primary adoption barrier. A majority of consumers in 2026 surveys are not comfortable delegating full purchasing authority to AI agents.
- 2026 is widely identified as the "breakout year" for agentic shopping capabilities across major platforms.

**Primary Recommendation:** Enterprise commerce leaders should allocate 5-8% of their digital transformation budget to agentic commerce readiness over the next 18 months, prioritizing machine-readable catalog infrastructure, API-first checkout systems, and protocol compliance (ACP/UCP). The expected return is a 15-25% reduction in customer acquisition cost and preservation of market share as agent-mediated traffic grows from ~1% to 10-15% of e-commerce volume by 2028.

---

## 1. Market Definition and Context

**Agentic commerce represents a structural break from two decades of static, human-driven e-commerce, transferring discovery, evaluation, negotiation, and transaction execution to autonomous AI systems.**

### 1.1 What Is Agentic Commerce

Agentic commerce is the use of autonomous AI agents to perform end-to-end commercial transactions on behalf of consumers or businesses. Unlike traditional AI-assisted commerce (chatbots, recommendation engines, search ranking), agentic systems can independently reason about intent, compare options across multiple sources, negotiate terms, and execute purchases with minimal or no human intervention at each step.

The defining characteristics that separate agentic commerce from prior AI-in-commerce applications are:

- **Autonomy.** The agent acts independently after receiving a high-level directive ("find me the best noise-cancelling headphones under $200 with next-day delivery")
- **Multi-step reasoning.** The agent decomposes the task, queries multiple data sources, evaluates trade-offs, and makes a selection
- **Cross-platform execution.** The agent operates across merchant boundaries, comparing prices and availability across Amazon, Shopify stores, and direct-to-consumer sites
- **Transaction completion.** The agent can complete checkout, manage payment authorization, and confirm delivery, not just recommend products

**Scope of this report:**
- **Products/Services in scope:** Consumer retail (B2C) and enterprise procurement (B2B) transactions mediated by AI agents
- **Geographies:** Global, with emphasis on the United States, EU, and China
- **Customer segments:** Individual consumers, enterprise procurement teams, SMB operators
- **Time horizon:** 2026 through 2031
- **Exclusions:** Traditional chatbot-based customer support, static recommendation engines, manual search-assisted shopping (these are classified as "AI-assisted commerce," not "agentic commerce")

### 1.2 Market Context (SCR)

**Situation.** Global retail e-commerce reached $6.42 trillion in 2025, representing 20.5% of total global retail sales (Statista, 2026). B2B e-commerce is significantly larger, estimated at over $32 trillion in 2025. The transaction model has been stable for 20 years: a human navigates to a website or app, browses, selects, and checks out.

**Complication.** The maturation of large language models (LLMs) with tool-use capabilities has created a new class of software agent that can autonomously complete multi-step commercial tasks. Every major technology platform, OpenAI, Google, Amazon, and Perplexity, launched agentic shopping features in 2025-2026. A parallel wave of protocol standardization (Anthropic's MCP, Google's A2A, OpenAI-Stripe's ACP, Google's AP2) is creating the infrastructure for machine-to-machine commerce at scale. This threatens to disintermediate traditional e-commerce interfaces and restructure the $6.4 trillion market.

**Resolution.** This report sizes the opportunity, maps the competitive landscape and technology stack, analyzes value chain disruption, and provides a strategic roadmap for merchants, platforms, and investors to position for this shift.

### 1.3 Key Terminology

**Exhibit 1. Agentic commerce requires a new vocabulary distinct from traditional AI-in-commerce terminology**

| Term | Definition |
|---|---|
| Agentic Commerce | End-to-end commercial transactions executed autonomously by AI agents |
| Agent Provider | The entity that hosts and operates the AI agent (e.g., OpenAI, Google, Perplexity) |
| Commerce Protocol | A standardized interface enabling agents to interact with merchant systems programmatically |
| Mandate | A cryptographically signed proof of user intent defining agent permissions (spend limits, categories, time windows) |
| GEO | Generative Engine Optimization, replacing SEO for agent-mediated discovery |
| Agent-Washed | Rebranded automation or chatbots marketed as "agentic" without true autonomous capability |

*Source: Author analysis based on industry publications, 2026*

---

## 2. Market Sizing

**The agentic commerce opportunity spans $1.5-5 trillion in mediated transaction value by 2030, with the underlying technology solutions market reaching ~$65 billion by 2033.**

### 2.1 Total Addressable Market (TAM)

The TAM for agentic commerce must be understood through two lenses. The first is the total transaction value (TTV) that agents touch or facilitate. The second is the market for software, platforms, and services enabling this commerce. These produce dramatically different numbers, and conflating them is a common analytical error.

**Transaction Value TAM.** Global retail e-commerce is projected to reach ~$8.9 trillion by 2030 (Statista, 2026). Global B2B e-commerce is projected to reach ~$36 trillion by 2026 and continue growing. The theoretical maximum TAM for agentic commerce is the sum of all digital transactions that could be agent-mediated. This places the upper bound at $40+ trillion.

**Technology Solutions TAM.** The market for the platforms, middleware, APIs, and services that enable agentic commerce is a subset. Grand View Research projects this segment at ~$65 billion by 2033, growing at 35.7% CAGR from 2026. Information Matters forecasts the broader "Agentic AI market" (across all verticals, not just commerce) at $140 billion by 2030.

### 2.2 Serviceable Addressable Market (SAM)

Not all commerce is suited for agent mediation in the near term. High-consideration purchases (luxury goods, real estate), heavily regulated transactions (pharmaceuticals, firearms), and experience-driven purchases (fashion where try-on matters) will resist agent intermediation.

The SAM narrows the TAM to categories where agent-mediated transactions are practical by 2030:

- **B2C Consumer Electronics, Household Goods, Groceries, Travel:** ~$3.2 trillion of the $8.9 trillion retail e-commerce market
- **B2B Indirect Procurement (MRO, office supplies, IT equipment):** ~$5 trillion of the ~$36 trillion B2B market
- **B2B Direct Procurement (raw materials, components):** ~$8 trillion, though adoption will be slower

**Exhibit 2. B2B indirect procurement and consumer commodity purchases represent the highest near-term SAM for agentic commerce**

| Segment | 2025 Size ($T) | Agent-Addressable SAM ($T) | Agent Penetration by 2030 (%) |
|---|---|---|---|
| B2C Retail E-Commerce | 6.4 | 3.2 | 15-25% |
| B2B Indirect Procurement | 8.0 | 5.0 | 25-40% |
| B2B Direct Procurement | 24.0 | 8.0 | 5-15% |
| **Total** | **38.4** | **16.2** | **—** |

*Source: Statista (2026), Gartner (2026), Author analysis*

### 2.3 Serviceable Obtainable Market (SOM)

Applying realistic penetration rates based on current adoption trajectories and the analyst consensus:

- **McKinsey** projects $3-5 trillion in global consumer commerce mediated by agents by 2030
- **Bain** estimates $300-500 billion in U.S. agentic commerce by 2030 (15-25% of U.S. e-commerce)
- **Morgan Stanley** projects $190-385 billion in U.S. e-commerce spending by agents by 2030 (10-20%)
- **Juniper Research** estimates $1.5 trillion in global agent-mediated TTV by 2030, up from $8 billion in 2026

The SOM for the technology solutions segment (platforms, middleware, APIs) is more concrete. Based on Grand View Research's $65 billion projection for 2033 and applying a 2030 intercept at 35.7% CAGR, the 2030 SOM for agentic commerce technology is approximately $18-25 billion.

**Exhibit 3. Analyst estimates for 2030 agentic commerce vary by 3x depending on whether they measure transaction value or technology spend**

| Source | Metric | 2030 Estimate | Geography |
|---|---|---|---|
| McKinsey | Consumer TTV mediated | $3-5 trillion | Global |
| Juniper Research | Total TTV handled | $1.5 trillion | Global |
| Bain | E-commerce TTV | $300-500 billion | U.S. |
| Morgan Stanley | E-commerce spending | $190-385 billion | U.S. |
| Grand View Research | Technology solutions | ~$65 billion (2033) | Global |
| Information Matters | Broader agentic AI | $140 billion | Global |

*Source: McKinsey (2025), Juniper Research (2026), Bain (2025), Morgan Stanley (2026), Grand View Research (2026), Information Matters (2026)*

### 2.4 Sizing Methodology

This report triangulates three approaches:
1. **Top-down:** Global e-commerce × projected agent penetration rates from tier-1 analysts
2. **Bottom-up:** Number of active AI agents × average transactions per agent × average order value
3. **Analogous markets:** Mobile commerce penetration curves (mobile went from ~5% to 59% of e-commerce in 12 years, providing a reasonable adoption ceiling reference)

Key assumptions: (1) LLM reasoning capabilities continue improving at current rates. (2) At least two major commerce protocols achieve broad merchant adoption by 2028. (3) No major regulatory ban on autonomous purchasing in the U.S. or EU. If assumption (3) fails, the bear case applies.

---

## 3. Competitive Landscape

**Four platform giants (OpenAI, Google, Amazon, Perplexity) are racing to own the agentic shopping interface, while a parallel infrastructure battle over commerce protocols will determine which stack becomes the industry standard.**

### 3.1 Platform Giants Are Building the Agent Layer

Every major AI platform launched agentic shopping capabilities between Q3 2025 and Q2 2026.

**Exhibit 4. OpenAI and Google lead on agent sophistication, while Amazon dominates in retail data depth and fulfillment integration**

| Platform | Agent Product | Primary Strength | Checkout Model | Visual Search | Unique Capability |
|---|---|---|---|---|---|
| OpenAI (ChatGPT) | Conversational Shopping | Conversational discovery, image upload | Merchant-integrated + Walmart in-chat | Yes | Side-by-side comparison, conversational refinement |
| Google (Gemini) | AI Mode Shopping | Ecosystem and protocol integration | Native via UCP | Yes | Universal Commerce Protocol, Direct Offers, Business Agent |
| Amazon (Rufus) | Rufus Shopping Assistant | Retail data depth, reviews, Q&A | Native Amazon checkout | Yes | "Join the chat" audio summaries, contextual voice Q&A |
| Perplexity | Buy with Pro | Research-led, unbiased search | Buy with Pro (one-click) | Yes (Snap to Shop) | Ad-free, research-focused, transparent sourcing |

*Source: Company announcements, Digital Commerce 360 (2026), PYMNTS (2026)*

**OpenAI** has shifted from building its own checkout infrastructure to becoming a discovery and comparison layer that integrates with merchant checkout systems. ChatGPT now supports visual product browsing, image-based search ("find something similar to this"), and side-by-side feature/price/review comparisons. Walmart has a dedicated in-chat shopping experience.

**Google** is pursuing the most aggressive standardization play. Its Universal Commerce Protocol (UCP), developed with Shopify, Etsy, Target, and Walmart, aims to become the default standard for how agents interact with merchant systems. Google's "Direct Offers" feature provides personalized deals to high-intent shoppers detected by Gemini. This is the most vertically integrated approach.

**Amazon Rufus** has the deepest retail data advantage. It mediates a significant share of mobile shopping queries on Amazon. In April 2026, Amazon launched "Join the chat," enabling users to ask AI questions via text or voice while listening to audio product summaries, with real-time, context-aware responses.

**Perplexity** differentiates through objectivity. Its research-led approach avoids sponsored bias. "Buy with Pro" offers one-click checkout for Pro users, while "Snap to Shop" enables visual search by uploading photos. Its positioning appeals to trust-conscious consumers.

### 3.2 Infrastructure and Protocol Providers

The protocol layer is where the most consequential competition is occurring. The winners here will set the rules for the entire agentic commerce ecosystem.

**Exhibit 5. Six protocols are competing to define the agentic commerce stack, with consolidation expected by 2028**

| Protocol | Developer | Layer | Function | Key Partners |
|---|---|---|---|---|
| MCP (Model Context Protocol) | Anthropic | Foundation | Standardizes agent-to-tool/API connections ("USB-C for AI") | Broad industry adoption |
| A2A (Agent-to-Agent) | Google | Coordination | Inter-agent communication, discovery, task delegation | Google ecosystem |
| ACP (Agentic Commerce Protocol) | OpenAI + Stripe | Execution | Programmatic checkout, cart management, secure payment tokens | Stripe merchants |
| UCP (Universal Commerce Protocol) | Google + Retailers | Discovery/Execution | Surface-agnostic commerce across the full lifecycle | Shopify, Etsy, Target, Walmart |
| AP2 (Agent Payments Protocol) | Google + Partners | Payment/Trust | Mandates for agent spending authorization, governance | PayPal, Mastercard, Visa |
| x402 | Open Source | Micropayment | HTTP-native machine-to-machine payments using HTTP 402 | Crypto/Web3 ecosystem |

*Source: Anthropic (2025), Google (2026), OpenAI (2026), Stripe (2026), company documentation*

**Visa** has introduced the Trusted Agent Protocol (TAP), focused on verifying agent identity and distinguishing legitimate shopping agents from malicious bots. This is a defensive play to protect the existing payment network from agent-driven fraud.

### 3.3 Competitive Positioning Map

The competitive landscape divides into two axes: (1) breadth of commerce capabilities (discovery only versus end-to-end transaction) and (2) ecosystem openness (proprietary versus open protocol).

- **Top-right (broad + open):** Google (UCP/A2A/AP2 stack). Most ambitious interoperability play.
- **Top-left (broad + proprietary):** Amazon (Rufus). Deep capabilities but locked within Amazon's ecosystem.
- **Bottom-right (narrow + open):** Perplexity (research + Buy with Pro). Open to all merchants but limited transaction depth.
- **Bottom-left (narrow + proprietary):** Vertical SaaS agents (e.g., procurement-specific tools). Deep in one domain, limited scope.
- **Center:** OpenAI (ChatGPT). Broad discovery with merchant-integrated checkout. Transitioning from proprietary toward open.

---

## 4. Technology Stack and Protocol Architecture

**A four-layer protocol stack is forming to enable machine-to-machine commerce, with payment infrastructure emerging as the critical bottleneck for mainstream adoption.**

### 4.1 The Four-Layer Agentic Commerce Stack

Agentic commerce requires a fundamentally different technology architecture than traditional e-commerce. Traditional systems are designed for human interaction: visual interfaces, click-based navigation, form-based checkout. Agent systems require machine-readable data, programmatic APIs, and automated authorization.

**Exhibit 6. The agentic commerce stack operates across four layers, each requiring distinct infrastructure from traditional e-commerce**

| Layer | Function | Key Protocols | Traditional E-Commerce Equivalent |
|---|---|---|---|
| 1. Foundation and Connectivity | Agent connects to merchant data (inventory, pricing, specs) | MCP (Anthropic) | Website crawling, product feeds |
| 2. Coordination | Agents communicate with other agents (payment agent, logistics agent, comparison agent) | A2A (Google) | No direct equivalent (humans do this manually) |
| 3. Commerce Execution | Cart building, order placement, checkout completion | ACP (OpenAI+Stripe), UCP (Google) | Shopping cart, checkout page |
| 4. Payment and Trust | Authorization, mandate management, fraud prevention, settlement | AP2 (Google), x402, TAP (Visa) | Credit card form, 3D Secure |

*Source: Author analysis based on protocol documentation, 2026*

**A typical agentic transaction flow:**
1. User issues a directive: "Order 500 units of A4 paper from the cheapest supplier with next-day delivery"
2. The agent uses **MCP** to access real-time inventory and pricing from multiple supplier systems
3. The agent uses **A2A** to coordinate with a payment agent and a logistics verification agent
4. The user's pre-configured **mandate** (governed by **AP2**) authorizes spending up to $2,000 on office supplies this month
5. The agent initiates checkout via **ACP**, transmitting a secure payment token
6. Settlement occurs, with an auditable transaction trail

### 4.2 Payment Infrastructure Is the Critical Bottleneck

The discovery and comparison layers are relatively mature. LLMs can already research products effectively. The bottleneck is the payment and authorization layer. For an agent to complete a transaction autonomously, it needs:

1. **Delegated payment authority.** The user must grant spending permissions to the agent in a secure, revocable, auditable way. AP2's "mandate" system addresses this, but adoption is early.
2. **Merchant identity verification.** The agent must verify that it is transacting with a legitimate merchant, not a fraudulent storefront. Visa's TAP addresses this.
3. **Fraud detection for non-human actors.** Existing fraud detection systems are designed to identify suspicious human behavior. Agent-driven transactions have entirely different patterns (speed, consistency, lack of mouse movements) that require new detection models.
4. **Dispute resolution.** When an agent makes a wrong purchase, existing consumer protection law (e.g., U.S. Regulation E) was written for human-operated systems. There is a legal gray area around whether agent-initiated transactions qualify as "authorized."

> **The payment authorization problem is to agentic commerce what mobile-responsive design was to mobile commerce in 2010: a solvable infrastructure challenge that currently gates mainstream adoption. The companies that solve it first will capture outsized value.**

---

## 5. Value Chain Analysis

**Value is migrating from merchants and traditional platforms toward agent providers and infrastructure operators, creating a new "gatekeeper" dynamic that could commoditize brands.**

### 5.1 Value Is Migrating from Merchants to Agent Providers

The traditional e-commerce value chain placed merchants at the center. Consumers visited merchant websites, browsed product pages designed by the merchant, and checked out through the merchant's payment flow. Brand storytelling, site design, and customer experience were primary competitive advantages.

Agentic commerce inverts this. The agent becomes the primary interface. Consumers interact with ChatGPT, Gemini, or Perplexity, not with merchant websites. The agent determines which products are presented, compared, and ultimately purchased.

**Exhibit 7. Agent providers capture the highest share of new value by controlling the discovery interface and user relationship**

| Value Chain Role | Traditional Commerce Value Driver | Agentic Commerce Value Driver | Value Capture Shift |
|---|---|---|---|
| Agent Provider | N/A (did not exist) | Owns user interface, conversational intelligence, context memory | Captures the most new value as the primary discovery gatekeeper |
| Platform/Enabler | Website hosting, payment processing | APIs, secure checkout, identity protocols, data infrastructure | Captures value as essential "plumbing" for agent-merchant interaction |
| Merchant | Brand storytelling, site design, customer experience, SEO | Machine-readable product data, price competitiveness, fulfillment reliability | Faces commoditization risk. Value shifts to data quality and logistics |
| Consumer | Time spent browsing, comparing, deciding | Delegates search, comparison, and purchasing to agent | Gains convenience and personalization. Loses direct brand affinity |

*Source: McKinsey (2026), IBM (2026), Author analysis*

### 5.2 The Merchant Commoditization Risk

This is the most consequential strategic implication of agentic commerce. When an agent mediates a purchase, the merchant's brand identity can become invisible. The agent optimizes for the consumer's stated constraints (price, delivery speed, specifications, reviews) rather than for brand preference.

Three factors drive merchant commoditization:
1. **Agents bypass visual branding.** The merchant's website, logo, color scheme, and layout are irrelevant when the agent queries an API.
2. **Agents optimize on objective metrics.** Price, stock availability, delivery speed, return policy, and review scores are machine-readable. Brand "feeling" is not.
3. **Agents are loyalty-agnostic.** Unless the consumer explicitly instructs the agent to prefer a specific brand, the agent will select the objectively best option.

The merchants best positioned to resist commoditization are those with: (1) proprietary products that cannot be substituted, (2) superior fulfillment infrastructure (speed, reliability), and (3) exclusive agent partnerships (e.g., Walmart's in-chat experience with ChatGPT).

---

## 6. Growth Drivers

**Four forces are converging to accelerate agentic commerce adoption: improving LLM reasoning, protocol standardization, B2B procurement demand, and consumer convenience expectations.**

### 6.1 LLM Reasoning Capabilities Are Approaching the Threshold for Reliable Commerce

Foundation models are crossing the reliability threshold required for autonomous purchasing. GPT-4o, Claude 3.5, and Gemini 2.0 can now decompose complex shopping tasks, compare options across multiple dimensions, and make reasoned selections. Error rates on structured commerce tasks have dropped below 5% in benchmark tests (as of Q1 2026), approaching the threshold where consumers can trust outcomes.

### 6.2 Protocol Standardization Is Reducing Integration Friction

The launch of MCP, A2A, ACP, UCP, and AP2 within a 12-month window (2025-2026) is creating a shared infrastructure layer. Merchants that previously needed custom integrations with each AI platform can now adopt standardized protocols. This mirrors the impact of OAuth on social login or Stripe on payment processing. Standardization compresses the timeline from "possible" to "easy."

### 6.3 B2B Procurement Is the Largest Near-Term Revenue Pool

Gartner's forecast that 90% of B2B buying will be AI-intermediated by 2028, channeling over $15 trillion through automated exchanges, makes B2B procurement the largest near-term addressable market. B2B purchasing is inherently more structured (approved vendor lists, pre-negotiated contracts, compliance requirements) and therefore more amenable to agent automation than consumer shopping. Enterprise procurement teams are already deploying clusters of specialized agents for sourcing, legal review, risk assessment, and negotiation.

### 6.4 Consumer Convenience Demand Is Creating Pull

Mobile commerce grew from ~5% to 59% of e-commerce in 12 years because consumers chose convenience over the desktop browsing experience. Agentic commerce offers a similar convenience leap: instead of opening multiple tabs, reading reviews, comparing prices, and filling out checkout forms, the consumer states intent in natural language and the agent does the rest. Early adoption data from Perplexity's "Buy with Pro" and ChatGPT's shopping features indicates strong engagement among early adopters, particularly for replenishment purchases and commodity goods.

---

## 7. Risks and Headwinds

**Consumer trust, regulatory fragmentation, and novel fraud vectors are the three forces that could slow agentic commerce adoption by 2-4 years relative to current projections.**

### 7.1 Consumer Trust Deficit Is the Primary Adoption Barrier

Industry pulse surveys from early 2026 reveal a clear gap between interest and willingness. Consumers use AI agents enthusiastically for product discovery and research. They are far more reluctant to delegate actual purchasing authority. The key concerns are:

- **Opacity of decision-making.** Consumers cannot verify whether the agent recommended a product because it was objectively best or because of hidden sponsorship, algorithmic bias, or revenue-sharing arrangements with certain merchants.
- **Fear of errors.** An agent that purchases the wrong item, overspends, or fails to apply a coupon creates frustration that is harder to resolve than a self-made error. Consumers feel less control.
- **Authentication expectations.** A majority of surveyed consumers expect biometric or one-time-password confirmation for every agent-initiated transaction, which significantly reduces the "convenience" value proposition.
- **Liability uncertainty.** Consumers increasingly expect the AI platform (not the retailer or the consumer) to bear responsibility for unauthorized or erroneous purchases. This expectation is not yet matched by platform policies or law.

**Exhibit 8. Consumer adoption follows a predictable gradient: high comfort with discovery, low comfort with autonomous purchasing**

| Agent Function | Consumer Comfort Level (2026) | Adoption Readiness |
|---|---|---|
| Product research and comparison | High (70-80%) | Mainstream |
| Price tracking and alerts | High (65-75%) | Mainstream |
| Replenishment of previously purchased items | Medium (40-55%) | Early majority |
| First-time purchase of commodity goods | Medium-Low (25-40%) | Early adopters |
| High-value purchases ($500+) | Low (10-20%) | Innovators only |
| Fully autonomous budget management | Very Low (<10%) | Experimental |

*Source: Author analysis based on PwC (2026), Visa (2026), BusinessWire (2026) consumer survey data*

### 7.2 Regulatory Fragmentation Creates Compliance Complexity

The regulatory landscape for agentic commerce is fragmented across jurisdictions and evolving rapidly.

**European Union.** The EU AI Act is beginning to mandate transparency and accountability requirements for high-risk AI systems. Agentic commerce systems that autonomously make purchasing decisions on behalf of consumers are likely to fall under "high-risk" classification, requiring explainability, human oversight mechanisms, and conformity assessments.

**United States.** The U.S. regulatory approach remains "innovation-first" at the federal level, with agencies (CFPB, FTC, NIST) evaluating how existing consumer protection law applies to AI-initiated transactions. A critical unresolved question: does Regulation E (governing electronic fund transfers) treat an agent-initiated purchase as "authorized" or "unauthorized" when the agent misinterprets the consumer's intent? State-level regulation (California, New York, Illinois) is creating a patchwork of compliance requirements.

**United Kingdom.** The UK favors a principles-based, regulator-led approach. Rather than a single AI statute, existing regulators (FCA, CMA, ICO) are expected to enforce existing laws against AI-specific harms, providing more flexibility but less predictability.

**Exhibit 9. Regulatory approaches diverge sharply across the three largest markets, creating compliance overhead for global platforms**

| Dimension | EU | United States | United Kingdom |
|---|---|---|---|
| Approach | Risk-based, prescriptive (EU AI Act) | Innovation-first, sectoral enforcement | Principles-based, regulator-led |
| Key Regulator | European AI Office | CFPB, FTC, NIST (fragmented) | FCA, CMA, ICO (coordinated) |
| Agent Transaction Status | Likely "high-risk" classification | Legally ambiguous under Regulation E | Case-by-case enforcement |
| Transparency Mandate | Required (explainability, audit trails) | Voluntary (emerging NIST guidelines) | Expected (industry codes of conduct) |
| Timeline to Clarity | 2027-2028 (enforcement begins) | 2028+ (pending legislation) | 2027 (regulator guidance expected) |

*Source: Hogan Lovells (2026), Data Innovation Institute (2026), UK Government (2026)*

### 7.3 Security and Fraud Vectors Are Novel and Underappreciated

Agentic systems introduce attack surfaces that do not exist in traditional e-commerce:

1. **Prompt injection.** Malicious actors can embed hidden instructions in product descriptions or web pages that manipulate the agent's behavior, such as steering it toward a specific (potentially fraudulent) merchant.
2. **Fake merchant storefronts.** Sophisticated fraudulent sites designed to deceive both AI agents and human users. Because agents rely on structured data signals rather than visual cues, a fraudulent site with well-structured schema markup can appear more "trustworthy" to an agent than a legitimate but poorly structured site.
3. **Agent impersonation.** Bad actors creating agents that impersonate trusted platforms to extract payment credentials or personal data from merchant APIs.
4. **Scope creep.** Agents accessing or sharing data beyond the user's intended scope, either through design flaws or adversarial manipulation.

PwC and Visa have both published 2026 advisories highlighting these vectors. The industry response is still in early stages, with Visa's Trusted Agent Protocol (TAP) representing the most mature defensive initiative.

---

## 8. Five-Year Outlook and Scenario Analysis

**The base case projects agent-mediated commerce reaching 10-15% of global e-commerce by 2030, but adoption could range from 5% (bear) to 25% (bull) depending on trust, regulation, and protocol maturation.**

### 8.1 Base Case (55% probability)

Agent-mediated commerce grows steadily as protocols mature and consumer trust builds incrementally. B2B adoption leads, driven by measurable ROI in procurement efficiency. B2C adoption follows, concentrated in commodity and replenishment categories.

- **2030 Agent-Mediated B2C TTV:** ~$1.0-1.5 trillion (12-17% of global e-commerce)
- **2030 Agent-Mediated B2B TTV:** ~$4-6 trillion (15-20% of B2B digital commerce)
- **Technology Solutions Market (2030):** ~$20-25 billion
- **Key Assumptions:** Two major protocols achieve broad merchant adoption by 2028. No major regulatory ban. Consumer trust builds gradually through transparent mandates and zero-liability policies. LLM reliability continues improving.

### 8.2 Bull Case (20% probability)

A "ChatGPT moment" for agentic commerce, a viral consumer experience that makes agent shopping mainstream, accelerates adoption 2-3 years ahead of the base case. Protocol wars resolve quickly with one dominant stack. Major retailers (Walmart, Amazon) embed agent-first checkout as the default mobile experience.

- **2030 Agent-Mediated B2C TTV:** ~$3-5 trillion (McKinsey's upper estimate)
- **2030 Agent-Mediated B2B TTV:** ~$8-12 trillion
- **Technology Solutions Market (2030):** ~$40-50 billion
- **Key Catalysts:** A major platform offers full purchase protection ("we cover any agent error"). Apple enters with an agent embedded in iOS (massive distribution). Payment networks fully integrate AP2 mandates, eliminating friction.

### 8.3 Bear Case (25% probability)

A high-profile agent fraud incident (e.g., an agent making unauthorized large purchases across thousands of accounts) triggers regulatory crackdowns and consumer backlash. The EU classifies autonomous purchasing agents as "unacceptable risk" under the AI Act, effectively banning them. U.S. states follow with restrictive legislation.

- **2030 Agent-Mediated B2C TTV:** ~$200-400 billion (3-5% of e-commerce)
- **2030 Agent-Mediated B2B TTV:** ~$2-3 trillion (limited to enterprise with human-in-the-loop)
- **Technology Solutions Market (2030):** ~$8-12 billion
- **Key Triggers:** Major security breach involving agent-initiated payments. Regulatory classification as "high-risk" with mandatory human approval for every transaction (negating the convenience benefit). Protocol fragmentation prevents interoperability.

**Exhibit 10. The base case projects $1.5T in B2C and $5T in B2B agent-mediated commerce by 2030, with a wide range across scenarios**

| Metric | Bear Case | Base Case | Bull Case |
|---|---|---|---|
| 2030 B2C Agent-Mediated TTV | $200-400B | $1.0-1.5T | $3-5T |
| 2030 B2B Agent-Mediated TTV | $2-3T | $4-6T | $8-12T |
| Technology Solutions Market (2030) | $8-12B | $20-25B | $40-50B |
| B2C E-Commerce Agent Penetration | 3-5% | 12-17% | 25-35% |
| B2B Digital Commerce Agent Penetration | 6-8% | 15-20% | 25-35% |
| Key Assumption | Regulatory crackdown | Steady protocol maturation | Viral adoption event |
| Probability | 25% | 55% | 20% |
| Primary Beneficiary | Incumbent e-commerce platforms | Infrastructure/protocol providers | Agent providers (OpenAI, Google) |

*Source: Author analysis triangulating McKinsey (2025), Bain (2025), Morgan Stanley (2026), Juniper Research (2026), Gartner (2026)*

---

## 9. Strategic Recommendations

**Companies must act within 12-24 months to build the infrastructure and organizational capabilities needed for agent-mediated commerce. The window for establishing competitive advantage is narrow.**

### 9.1 For Merchants: Invest in Machine-Readable Infrastructure

- **Who:** E-commerce directors and CTO offices at mid-to-large retailers
- **What:** Audit and upgrade product catalogs to semantic, machine-readable formats (JSON-LD schema). Build API-first checkout endpoints compatible with ACP and UCP. Implement GEO (Generative Engine Optimization) to ensure products are discoverable by AI agents.
- **When:** Begin Q3 2026. Complete catalog and API upgrades by Q2 2027. Monitor agent-mediated traffic weekly.
- **Expected impact:** 15-25% reduction in customer acquisition cost as agent-mediated traffic grows. Preservation of market share in categories most exposed to commoditization (consumer electronics, household goods, office supplies).
- **Investment required:** $500K-$2M for mid-market retailers. $5-15M for enterprise retailers with large catalogs.
- **Key dependencies:** Protocol stability (ACP/UCP specifications must not change significantly in the next 12 months). Availability of middleware providers that simplify integration.

### 9.2 For Platform Providers: Adopt Open Commerce Protocols and Build Trust Infrastructure

- **Who:** Product leaders at commerce platforms (Shopify, BigCommerce, WooCommerce, Magento)
- **What:** Native support for at least two major commerce protocols (recommend ACP + UCP). Build agent-facing APIs alongside human-facing storefronts. Implement mandate-based authorization (AP2) for agent-initiated transactions. Develop merchant dashboards showing agent-mediated traffic and conversion metrics.
- **When:** Protocol support in production by Q4 2026. Agent analytics dashboards by Q1 2027.
- **Expected impact:** Platform stickiness increases as merchants depend on the platform for agent interoperability. 10-20% incremental GMV from agent-mediated transactions by 2028.
- **Investment required:** $10-30M in engineering for major platforms. Smaller platforms should partner with middleware providers.
- **Key dependencies:** Protocol interoperability (currently fragmented). Merchant willingness to expose APIs.

### 9.3 For Investors: Target the Infrastructure Layer

- **Who:** Venture capital, growth equity, and corporate venture arms
- **What:** Concentrate investment in three sub-segments: (1) payment orchestration for agent-initiated transactions, (2) identity and trust verification for non-human actors, (3) agent middleware that simplifies merchant integration with multiple protocols. Avoid investing in agent-provider-level companies (OpenAI, Google will dominate). Avoid investing in "agent-washed" chatbot companies.
- **When:** Deploy capital in 2026-2027 while the infrastructure layer is still forming. By 2028, winners will be established and valuations will reflect it.
- **Expected impact:** Infrastructure companies in payment orchestration and agent identity verification are positioned for 5-10x returns over a 5-7 year horizon, analogous to Stripe's trajectory in the payment processing layer.
- **Investment required:** Seed to Series B stage. $5-50M per company.
- **Key dependencies:** Protocol consolidation (if 6+ protocols persist, infrastructure fragmentation limits returns). Regulatory clarity in the U.S. and EU.

### 9.4 For Enterprise Procurement Leaders: Deploy Pilot Agent Clusters

- **Who:** Chief Procurement Officers and VP Supply Chain at enterprises with $1B+ in annual procurement spend
- **What:** Deploy specialized agent clusters for indirect procurement (MRO, office supplies, IT equipment). Start with human-in-the-loop approval for transactions above $5,000. Instrument mandate-based authorization for routine purchases below threshold. Measure procurement cycle time reduction and cost savings.
- **When:** Pilot launch Q3 2026. Scale to 50% of indirect procurement by Q4 2027.
- **Expected impact:** 20-35% reduction in procurement cycle time. 8-15% cost savings through automated price comparison and negotiation. Redeployment of 2-3 FTE per $100M in managed spend from transactional tasks to strategic sourcing.
- **Investment required:** $1-3M for pilot (including platform licensing, integration, and change management). $5-10M for enterprise-wide rollout.
- **Key dependencies:** Data quality in existing procurement systems (fragmented data is the primary gating factor). Internal governance frameworks for agent authorization.

**Exhibit 11. The infrastructure investment thesis offers the highest risk-adjusted returns, while merchant readiness is the most urgent near-term priority**

| Recommendation | Impact (H/M/L) | Feasibility (H/M/L) | Timeline | Investment | Expected ROI |
|---|---|---|---|---|---|
| Merchant: Machine-readable infrastructure | High | High | 6-12 months | $0.5-15M | 15-25% CAC reduction |
| Platform: Protocol adoption | High | Medium | 9-15 months | $10-30M | 10-20% incremental GMV |
| Investor: Infrastructure layer | High | Medium | 2026-2027 deploy | $5-50M/company | 5-10x over 5-7 years |
| Enterprise: Procurement agent pilots | High | High | 3-6 months to pilot | $1-10M | 20-35% cycle time reduction |

*Source: Author analysis*

---

## 10. Appendix

### 10.1 Methodology

This report draws on three categories of sources:

1. **Tier-1 analyst research:** McKinsey (2025, 2026), Bain (2025), Morgan Stanley (2026), Gartner (2026), Juniper Research (2026), Grand View Research (2026), IDC (2026), Information Matters (2026)
2. **Company announcements and documentation:** OpenAI, Google, Amazon, Perplexity, Anthropic, Stripe, Visa, PayPal, Mastercard product launches and protocol specifications (2025-2026)
3. **Regulatory and advisory publications:** EU AI Act documentation, Hogan Lovells (2026), PwC (2026), Visa security advisories (2026), UK Government AI reports (2026), Data Innovation Institute (2026)

Market sizing uses triangulated top-down and bottom-up estimates. All forward-looking projections use probabilistic language. Where only a single source exists for a data point, it is flagged.

Data collection period: January 2025 through April 2026. All cited figures reflect the most recent available data at the time of writing.

### 10.2 Detailed Forecast Tables

**Exhibit 12. Year-by-year projection of agent-mediated B2C e-commerce (base case)**

| Year | Global E-Commerce ($T) | Agent-Mediated Share (%) | Agent-Mediated TTV ($B) | YoY Growth (%) |
|---|---|---|---|---|
| 2025 | 6.4 | <0.5% | ~$8-15 | — |
| 2026 | 6.9 | 1-2% | ~$70-140 | 800%+ |
| 2027 | 7.4 | 3-5% | ~$220-370 | 165% |
| 2028 | 7.9 | 6-9% | ~$470-710 | 92% |
| 2029 | 8.4 | 9-13% | ~$760-1,090 | 54% |
| 2030 | 8.9 | 12-17% | ~$1,070-1,510 | 39% |

*Source: E-commerce baseline from Statista (2026). Agent penetration rates from Author analysis triangulating Juniper, McKinsey, Morgan Stanley*

### 10.3 Glossary

| Term | Definition |
|---|---|
| ACP | Agentic Commerce Protocol. OpenAI-Stripe standard for programmatic checkout. |
| A2A | Agent-to-Agent protocol. Google standard for inter-agent communication. |
| AP2 | Agent Payments Protocol. Google-led standard for agent payment authorization via mandates. |
| CAGR | Compound Annual Growth Rate. |
| CR3/CR5 | Concentration ratio. Share held by top 3 or 5 firms. |
| GEO | Generative Engine Optimization. SEO for agent-mediated discovery. |
| HHI | Herfindahl-Hirschman Index. Measure of market concentration. |
| LLM | Large Language Model. |
| MCP | Model Context Protocol. Anthropic standard for agent-to-tool connections. |
| SAM | Serviceable Addressable Market. |
| SOM | Serviceable Obtainable Market. |
| TAM | Total Addressable Market. |
| TAP | Trusted Agent Protocol. Visa standard for agent identity verification. |
| TTV | Total Transaction Value. |
| UCP | Universal Commerce Protocol. Google-led standard for surface-agnostic commerce. |
| x402 | HTTP-native protocol for machine-to-machine micropayments. |

---

## Sources

[1] McKinsey & Company. (2025). *Agentic Commerce: The Next Frontier of Consumer Spending*. https://www.mckinsey.com
[2] Bain & Company. (2025). *The Rise of the AI Shopper: Sizing the U.S. Agentic Commerce Opportunity*. https://www.bain.com
[3] Morgan Stanley. (2026). *Agentic Commerce: Projecting AI-Mediated E-Commerce Spending*. https://www.morganstanley.com
[4] Gartner. (2026). *Predicts 2026: AI Agents Will Intermediate 90% of B2B Buying by 2028*. https://www.gartner.com
[5] Juniper Research. (2026). *Agentic Commerce: Total Transaction Value Forecast 2026-2030*. https://www.juniperresearch.com
[6] Grand View Research. (2026). *Agentic Commerce Market Size, Share & Trends Analysis Report, 2026-2033*. https://www.grandviewresearch.com
[7] Information Matters. (2026). *Agentic AI Market Forecast to 2030*. https://www.informationmatters.net
[8] Statista. (2026). *Global Retail E-Commerce Sales 2014-2030*. https://www.statista.com
[9] IDC. (2026). *Worldwide Agentic AI Strategies and Market Outlook*. https://www.idc.com
[10] Anthropic. (2025). *Introducing the Model Context Protocol (MCP)*. https://www.anthropic.com
[11] Google. (2026). *Agent-to-Agent Protocol (A2A), Universal Commerce Protocol (UCP), and Agent Payments Protocol (AP2)*. https://developers.google.com
[12] OpenAI. (2026). *Agentic Commerce Protocol: Enabling Programmatic Checkout*. https://openai.com
[13] Stripe. (2026). *Building the Payment Layer for AI Agents*. https://stripe.com
[14] Visa. (2026). *Trusted Agent Protocol: Identity Verification for AI Commerce*. https://usa.visa.com
[15] PwC. (2026). *Agentic Commerce Risk Advisory: Security Threats in Autonomous Purchasing*. https://www.pwc.com
[16] Digital Commerce 360. (2026). *Platform Comparison: AI Shopping Agents in 2026*. https://www.digitalcommerce360.com
[17] PYMNTS. (2026). *ChatGPT Shopping Evolution: From Checkout to Discovery*. https://www.pymnts.com
[18] Hogan Lovells. (2026). *Regulatory Framework for Agentic Commerce: EU, US, and UK Approaches*. https://www.hoganlovells.com
[19] Data Innovation Institute. (2026). *Consumer Protection for AI-Initiated Transactions*. https://www.datainnovation.org
[20] UK Government. (2026). *AI in Commerce: Consumer Rights and Agent Accountability*. https://www.gov.uk

