/**
 * Executive Industry Research Report - The Business Value of Agentic Commerce
 * Formatted in Notion Monochrome Design System (Pure White, Black, Cool Zinc Grays)
 * 
 * Deep Academic and Industry Research Basis:
 * - Empirical Web Readiness - V. R. Vatsa (100,000 domain study across Tranco ranking, Zenodo record 24121071)
 * - Agent Micropayments Economics - V. R. Vatsa (finite-state economic model of buyer VOI and settlement)
 * - Management Consultancies:
 *   * McKinsey QuantumBlack ("The Automation Curve in Agentic Commerce" - 6-level delegation, regret-risk model, $3T-$5T projection)
 *   * Boston Consulting Group ("Agentic Commerce" - $1.3T impacted spend, $400B autonomous, 81% consumer readiness, 59% CPG gap)
 *   * Accenture Strategy ("Agentic Commerce - Make Your Brand Unmissable" - 90% brand switching, Demand of One, 45% adoption)
 *   * Thoughtworks & Stripe ("From Confidence to Execution" - 63% vs 11% execution gap, 35% catalog readiness, +30pp token trust)
 *   * Visa Consulting & Analytics ("The Rise of Agentic Commerce" - 6-layer rails, 1,200% GenAI referral uplift, 57.2% benchmark)
 *   * Semrush Research ("Agentic Commerce Optimization" - ACO three-layer catalog framework)
 * - Economic Search Theory - J. Yannis Bakos (Management Science), R. M. Ursu Position Bias (Chicago Booth)
 * - Behavioral Decision Science - Dietvorst et al. (Wharton, Algorithm Aversion), Logg et al. (Harvard, Algorithm Appreciation)
 * - Agent Benchmarks - WebArena (CMU, Zhou et al.), VisualWebArena (CMU/Stanford, Koh et al., ACL 2024),
 *   ACES (Allouah et al., Columbia Univ), EComAgentBench (Du et al., Shopee Research), Tool-Lab (Wadi & Ma)
 * - Security & Adversarial Testing - AgentDojo (Debenedetti et al.), Whispers of Wealth, Imperva Threat Research
 * - Technical Protocols - Stripe & OpenAI ACP (RFC 7231 Idempotency-Key), Google UCP (/.well-known/ucp),
 *   Coinbase AP2 (Open vs Closed Mandates), Visa TAP (RFC 9421 HTTP Signatures), Mastercard Verifiable Intent, x402
 * - Market Analysis - Jas Shah (Fintech Under the Hood), Scott Wessman (CVV failure analysis),
 *   Vignesh at Meta (interchange vs stablecoin economics), Gartner Machine Customers (Scheibenreif & Raskino)
 * - Legal & Regulatory Frameworks - Christoph Busch (Consumer Law for AI Agents, German Law Journal / Oxford), US UETA, EU AI Act
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { renderReportToPdf } from '../../bvod-engine/engine.mjs';
import * as notion from '../../styles/notion/notion-components.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateReport() {
  const spreads = [];

  const renderHeader = (category, title, pageNum) => `
    <div class="report-header" style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1.5px solid var(--ink-heading); padding-bottom: 6px; margin-bottom: 10px;">
      <div style="display: flex; gap: 8px; align-items: baseline;">
        <span style="font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; color: var(--ink-heading); text-transform: uppercase;">${category}</span>
        <span style="font-size: 8.5px; color: var(--border); font-weight: 300;">|</span>
        <span style="font-size: 8.5px; color: var(--ink-secondary); font-weight: 600;">${title}</span>
      </div>
      <div style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); font-feature-settings: 'tnum';">
        ${pageNum} / 10
      </div>
    </div>
  `;

  const renderFooter = (sourceText) => `
    <div class="report-footer" style="margin-top: auto; padding-top: 6px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-size: 7.2px; color: var(--ink-secondary);">
      <span>${sourceText}</span>
      <span>Executive Research Briefing</span>
    </div>
  `;

  // ==========================================
  // SPREAD 1: COVER PAGE
  // ==========================================
  spreads.push(`
    <div class="spread cover-spread" style="padding: 24mm 24mm 16mm 24mm; justify-content: space-between;">
      <div style="display: flex; gap: 40px; align-items: center; margin: auto 0;">
        <div style="flex: 1.25;">
          <h1 style="font-size: 44px; line-height: 1.12; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.03em; margin-bottom: 16px;">
            The Business Value of<br/>Agentic Commerce
          </h1>
          <p style="font-size: 14.5px; line-height: 1.5; color: var(--ink-secondary); font-weight: 400; max-width: 520px; margin-bottom: 24px;">
            An Executive Assessment of Autonomous Checkout Infrastructure, Protocol Specifications, and Merchant Deployment Strategies
          </p>
          <div style="width: 48px; height: 2px; background: var(--ink-heading);"></div>
        </div>

        <div style="flex: 0.95; border: 1px solid var(--border); padding: 22px; background: var(--paper-card); border-radius: 4px;">
          <div style="font-size: 8.5px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-heading); margin-bottom: 12px; border-bottom: 1px solid var(--border); padding-bottom: 6px;">
            Report Structure & Coverage
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px; font-size: 8px; color: var(--ink-secondary);">
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">02</span><span>Economics, Search Theory & The Automation Curve</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">03</span><span>7-Layer Technical Stack & 5-Tier Market Map</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">04</span><span>Commerce Protocols & Standards (ACP, UCP, AP2)</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">05</span><span>Payment Settlement Rails & The Execution Gap</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">06</span><span>Accuracy Benchmarks & Behavioral Decision Science</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">07</span><span>Fraud Defense, Bot Classification & Security</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">08</span><span>Catalog Engineering, ACO & 100,000 Domain Study</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">09</span><span>Strategic Ecosystem Dynamics & Platform Moats</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">10</span><span>18-Month Enterprise Roadmap & Legal Governance</span></div>
          </div>
        </div>
      </div>

      <div style="border-top: 1px solid var(--border); padding-top: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 10.5px; font-weight: 700; color: var(--ink-heading);">Vedang Ratan Vatsa</div>
          <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">Founder, Hashtag Web3</div>
        </div>
      </div>
    </div>
  `);

  // ==========================================
  // SPREAD 2: MACRO PROJECTIONS & INCENTIVES
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("EXECUTIVE SUMMARY", "MACRO PROJECTIONS AND THE AUTOMATION CURVE", "02")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Macro Foundation</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Economics of Autonomous Purchasing and Delegation</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Delegation Paradox and Need Satisfaction.</strong> Artificial intelligence shopping agents can identify merchandise and submit payment credentials, but granting permission to pay does not establish that a selected item satisfies the consumer's physical requirements. In retail transactions, goods must match exact spatial dimensions, fulfill delivery schedules, and satisfy unstated personal preferences. As established in the literature, evaluating consumer studies, benchmarks, and payment specifications reveals instances where an accepted recommendation or valid payment leaves core purchase needs unverified.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Six-Level Automation Curve and Regret Risk (McKinsey QuantumBlack).</strong> Research by McKinsey QuantumBlack (2025-2026 [1]) charts consumer delegation across a six-level maturity spectrum, progressing from manual human search (Level 0) to unconstrained autonomous buying (Level 5). The research indicates that delegation does not advance uniformly across merchandise. It is governed by regret risk, defined as the perceived emotional or financial cost of an erroneous purchase. Routine consumer replenishment and repetitive procurement migrate rapidly up the curve, while considered luxury purchases retain human approval.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Search Cost Asymmetry and Brand Switching (Bakos & Accenture).</strong> Economic search theory by J. Yannis Bakos (Management Science, 1997 [2]) separates the cost of discovering prices from the cost of evaluating product attributes. Lower attribute search costs enable consumers to find tailored items, softening direct price competition. However, survey data from Accenture Strategy (FY26 [3]) indicates that 90% of frequent AI users in North America are open to switching away from a preferred brand if their agent recommends a superior alternative. This introduces acute brand volatility unless merchants expose machine-readable attribute feeds.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Macro Sizing Synthesis and Enterprise Scope Boundaries.</strong> Sizing projections from premier advisory houses indicate rapid transaction reallocation. Boston Consulting Group (BCG, 2026 [4]) estimates that over $1.3 trillion in retail spending will be influenced by agentic commerce, with roughly $400 billion driven mostly autonomously. McKinsey projects $3 trillion to $5 trillion in global consumer transactions mediated by agents by 2030 [1]. Meanwhile, Gartner Research (Scheibenreif & Raskino [5]) models the broader machine customer economy at $30 trillion across enterprise B2B procurement and digital retail.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Exhibit Top: Evolution SVG -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 1.1 - THE 6-LEVEL AUTOMATION SPECTRUM (REF - MCKINSEY QUANTUMBLACK [1])</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Progression of delegation autonomy from human browsing to autonomous multi-agent settlement</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 3 Core Phase Groupings -->
              <!-- Group 1: Levels 0-1 -->
              <rect x="0" y="4" width="144" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="144" height="18" rx="3" fill="#f4f4f5"/>
              <text x="8" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Levels 0-1 - Assisted Search</text>
              <text x="8" y="36" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#27272a">Mode - Human Buys</text>
              <text x="8" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Conversational product discovery</text>
              <text x="8" y="60" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Manual checkout on seller site</text>
              <line x1="8" y1="68" x2="136" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="8" y="80" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">BCG Survey - 96% Discovery [4]</text>
              <text x="8" y="92" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a">Consumer retains total control</text>

              <!-- Group 2: Levels 2-3 -->
              <rect x="158" y="4" width="144" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="158" y="4" width="144" height="18" rx="3" fill="#f4f4f5"/>
              <text x="166" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Levels 2-3 - Guided Checkout</text>
              <text x="166" y="36" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#27272a">Mode - One-Click Approval</text>
              <text x="166" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Agent prepares cart & total</text>
              <text x="166" y="60" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">User confirms payment mandate</text>
              <line x1="166" y1="68" x2="294" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="166" y="80" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">BCG Survey - 42% Willing [4]</text>
              <text x="166" y="92" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a">Friction - Mandate approval</text>

              <!-- Group 3: Levels 4-5 -->
              <rect x="316" y="4" width="144" height="100" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="316" y="4" width="144" height="18" rx="3" fill="#09090b"/>
              <text x="324" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">Levels 4-5 - Full Autonomy</text>
              <text x="324" y="36" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#09090b">Mode - Machine Execution</text>
              <text x="324" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Autonomous replenishment</text>
              <text x="324" y="60" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Token settlement under budget</text>
              <line x1="324" y1="68" x2="452" y2="68" stroke="#e4e4e7" stroke-width="1"/>
              <text x="324" y="80" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Accenture - 9% Full Auto [3]</text>
              <text x="324" y="92" font-family="Inter, sans-serif" font-size="6.2" fill="#52525b">Restricted to low-regret items</text>
            </svg>
          </div>

          <!-- Exhibit Bottom: Data Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 1.1 - Market Forecast Projections Across Global Advisory Houses</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Synthesis of independent equity research, strategy consultancies, and market analysts</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Advisory House</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Projected Scale</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Target Horizon</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Core Thesis & Data Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">McKinsey QuantumBlack</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$3T - $5 Trillion</td>
                  <td style="padding: 3px 6px;">2030 (Global Consumer)</td>
                  <td style="padding: 3px 6px;">6-level automation curve across consumer retail [1]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Boston Consulting Group</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$1.3 Trillion+</td>
                  <td style="padding: 3px 6px;">2028-2030 (Global)</td>
                  <td style="padding: 3px 6px;">$400B autonomous; 81% consumer readiness [4]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Accenture Strategy</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">45% of Shoppers</td>
                  <td style="padding: 3px 6px;">2-Year Horizon</td>
                  <td style="padding: 3px 6px;">Half of purchases mediated by agents; 90% brand switch [3]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Gartner Research</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$30 Trillion</td>
                  <td style="padding: 3px 6px;">2030 (Total Market)</td>
                  <td style="padding: 3px 6px;">Machine customer economy across procurement and retail [5]</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Morgan Stanley</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$150B - $400B</td>
                  <td style="padding: 3px 6px;">2030 (US Retail)</td>
                  <td style="padding: 3px 6px;">10% to 25% of digital commerce mediated by agents</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Delegation scales first in low-regret commodity goods. While 81% of shoppers explore AI assistance, only 9% permit unconstrained transactions, requiring merchants to support structured checkout approval flows [3, 4].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] McKinsey QuantumBlack, "The Automation Curve in Agentic Commerce" (2025-2026); [2] J. Y. Bakos, Management Science (1997); [3] Accenture Strategy, "Agentic Commerce - Make Your Brand Unmissable" (FY26); [4] Boston Consulting Group, "Agentic Commerce" (2026); [5] Gartner Research (2025).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Macro Foundations and The Automation Curve")}
    </div>
  `);

  // ==========================================
  // SPREAD 3: TECH ARCHITECTURE & 5-TIER MARKET MAP
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("SYSTEM ARCHITECTURE", "THE 7 LAYERS OF AGENTIC COMMERCE", "03")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (44%) -->
        <div style="flex: 1.05; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Stack Specification</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">The 7 Layers of Autonomous Commerce Architecture</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Seven Core Architectural Layers (Jas Shah Model).</strong> As established by fintech analyst Jas Shah in Fintech Under the Hood (2025 [1]), complete agentic purchasing requires seven integrated layers. These progress from L1 (Consumer AI Frontends) through L2 (Reasoning and Orchestration Engines), L3 (Tool Execution and Context Protocols), L4 (Catalog and Context Synchronization), L5 (Checkout Session State Machines), L6 (Payment Rails and Token Vaults), to L7 (Post-Purchase Fulfillment and Returns). Each tier enforces specific boundaries between probabilistic language generation and deterministic transaction settlement.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Six-Stage Transaction Pipeline (Visa Consulting & Analytics).</strong> In its framework analyzing the rise of machine-initiated spending, Visa Consulting & Analytics (2026 [2]) maps transactions across six technical gates, specifically intent capture, cart construction, agent identity validation, credential access, authentication, and liability routing. Visa notes that while 56% of consumers readily delegate product search and comparison, fewer than 40% permit automated credential access without explicit approval gates.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Translating Natural Language Intent into Structured Schemas.</strong> Consumer requests begin in conversational interfaces such as ChatGPT Search, Claude Artifacts, or Perplexity. The agent engine decomposes unconstrained prompts into structured JSON parameters. Through the Model Context Protocol (MCP), the agent invokes remote merchant tools (such as checking real-time inventory or computing location-specific shipping fees) without scraping unstructured web layouts. Deterministic JSON schemas prevent hallucinated product attributes from entering checkout pipelines.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Hardware-Attested Identity and Non-Repudiation.</strong> Scalable agent commerce requires non-repudiable delegation. Modern frameworks anchor agent execution within hardware enclaves (such as Apple Secure Enclave or Android StrongBox) and utilize WebAuthn / FIDO2 cryptographic credentials. Anchoring authorization in hardware ensures that an agent cannot forge transaction parameters, providing merchants and card issuers with cryptographic certainty regarding principal consent.
          </p>
        </div>

        <!-- Right Column: Exhibits (56%) -->
        <div style="flex: 1.35; display: flex; flex-direction: column; gap: 8px;">
          <!-- Top SVG: Jas Shah Architecture Diagram -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Figure 2.1 - The Agentic Commerce Stack and Data Flow (Ref - Jas Shah Model [1])</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Seven-layer reference architecture bridging probabilistic models to deterministic settlement</div>
            </div>

            <svg viewBox="0 0 460 112" width="100%" height="112" style="display: block;">
              <!-- Background Grid -->
              <rect x="0" y="0" width="460" height="112" fill="#fafafa" rx="3"/>
              
              <!-- 7 Layer Stack Horizontal Bars -->
              <!-- L1 -->
              <rect x="10" y="6" width="186" height="12" rx="2" fill="#18181b"/>
              <text x="16" y="15" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L1. Consumer AI Front-End</text>
              <text x="190" y="15" font-family="Inter, sans-serif" font-size="5.6" fill="#a1a1aa" text-anchor="end">ChatGPT, Claude</text>

              <!-- L2 -->
              <rect x="10" y="21" width="186" height="12" rx="2" fill="#27272a"/>
              <text x="16" y="30" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L2. Agent Orchestration</text>
              <text x="190" y="30" font-family="Inter, sans-serif" font-size="5.6" fill="#a1a1aa" text-anchor="end">LangGraph, AutoGen</text>

              <!-- L3 -->
              <rect x="10" y="36" width="186" height="12" rx="2" fill="#3f3f46"/>
              <text x="16" y="45" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L3. Context & Tool Protocol</text>
              <text x="190" y="45" font-family="Inter, sans-serif" font-size="5.6" fill="#d4d4d8" text-anchor="end">Model Context Protocol</text>

              <!-- L4 -->
              <rect x="10" y="51" width="186" height="12" rx="2" fill="#52525b"/>
              <text x="16" y="60" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L4. Catalog Synchronization</text>
              <text x="190" y="60" font-family="Inter, sans-serif" font-size="5.6" fill="#e4e4e7" text-anchor="end">Schema.org JSON-LD</text>

              <!-- L5 -->
              <rect x="10" y="66" width="186" height="12" rx="2" fill="#71717a"/>
              <text x="16" y="75" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L5. Checkout State Machine</text>
              <text x="190" y="75" font-family="Inter, sans-serif" font-size="5.6" fill="#ffffff" text-anchor="end">Stripe ACP, Google UCP</text>

              <!-- L6 -->
              <rect x="10" y="81" width="186" height="12" rx="2" fill="#18181b"/>
              <text x="16" y="90" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L6. Token Rails & Settlement</text>
              <text x="190" y="90" font-family="Inter, sans-serif" font-size="5.6" fill="#a1a1aa" text-anchor="end">Visa TAP, AP2, x402</text>

              <!-- L7 -->
              <rect x="10" y="96" width="186" height="12" rx="2" fill="#27272a"/>
              <text x="16" y="105" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L7. Fulfillment & Returns</text>
              <text x="190" y="105" font-family="Inter, sans-serif" font-size="5.6" fill="#a1a1aa" text-anchor="end">Shopify, Commercetools</text>

              <!-- Flow Connection Graphic on Right -->
              <rect x="206" y="6" width="244" height="102" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="216" y="20" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">END-TO-END EXECUTION FLOW</text>
              
              <!-- Flow step 1 -->
              <circle cx="222" cy="38" r="7" fill="#f4f4f5" stroke="#18181b" stroke-width="1"/>
              <text x="222" y="41" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">1</text>
              <text x="236" y="37" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#09090b">Intent Ingestion</text>
              <text x="236" y="46" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">User prompt decomposed to structured parameters</text>

              <!-- Flow step 2 -->
              <circle cx="222" cy="62" r="7" fill="#f4f4f5" stroke="#18181b" stroke-width="1"/>
              <text x="222" y="65" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">2</text>
              <text x="236" y="61" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#09090b">Tool Execution & Verification</text>
              <text x="236" y="70" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">MCP queries live inventory and shipping terms</text>

              <!-- Flow step 3 -->
              <circle cx="222" cy="86" r="7" fill="#18181b"/>
              <text x="222" y="89" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
              <text x="236" y="85" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Cryptographic Settlement</text>
              <text x="236" y="94" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Domain-bound token submitted to acquiring rail</text>

              <!-- Connecting dotted lines -->
              <line x1="222" y1="45" x2="222" y2="55" stroke="#a1a1aa" stroke-width="1" stroke-dasharray="2 2"/>
              <line x1="222" y1="69" x2="222" y2="79" stroke="#a1a1aa" stroke-width="1" stroke-dasharray="2 2"/>
            </svg>
          </div>

          <!-- Bottom: 5-Tier Market Map (45+ platforms) -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 2.1 - The Agentic Commerce Ecosystem Market Map</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Institutional classification across 45+ platforms in the developing autonomous transaction stack</div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 4px; font-size: 7.2px;">
              <!-- Tier 1 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 6px; background: #ffffff;">
                <div style="font-weight: 800; color: var(--ink-heading); text-transform: uppercase; font-size: 7.2px; margin-bottom: 2px;">
                  Tier 1 - Consumer AI Frontends & Demand Aggregation
                </div>
                <div style="color: var(--ink-secondary); line-height: 1.35;">
                  <strong>Conversational AI & Search.</strong> ChatGPT Search (OpenAI), Claude Artifacts (Anthropic), Gemini Shopping (Google), Perplexity (Buy with Pro), Genspark, You.com<br/>
                  <strong>Enterprise Retail Agents.</strong> Sierra AI (Bret Taylor), Amazon Rufus, Klarna AI Assistant, Daydream, Walmart Spark Assistant<br/>
                  <strong>Social & Direct Commerce.</strong> TikTok Shop AI, Meta AI (Instagram / WhatsApp Commerce)
                </div>
              </div>

              <!-- Tier 2 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 6px; background: #ffffff;">
                <div style="font-weight: 800; color: var(--ink-heading); text-transform: uppercase; font-size: 7.2px; margin-bottom: 2px;">
                  Tier 2 - Agent Protocols & Orchestration Frameworks
                </div>
                <div style="color: var(--ink-secondary); line-height: 1.35;">
                  <strong>Open Commerce Protocols.</strong> Anthropic Model Context Protocol (MCP), Google Universal Commerce Protocol (UCP), Stripe ACP, Coinbase AP2<br/>
                  <strong>Multi-Agent Orchestration.</strong> LangGraph / LangChain, CrewAI, AutoGen (Microsoft), LlamaIndex, Semantic Kernel
                </div>
              </div>

              <!-- Tier 3 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 6px; background: #ffffff;">
                <div style="font-weight: 800; color: var(--ink-heading); text-transform: uppercase; font-size: 7.2px; margin-bottom: 2px;">
                  Tier 3 - Payment Rails, Token Vaults & Virtual Cards
                </div>
                <div style="color: var(--ink-secondary); line-height: 1.35;">
                  <strong>Card Network Token Protocols.</strong> Visa Trusted Agent Protocol (TAP), Visa Agentic Ready Program, Mastercard Agent Pay, Shared Payment Tokens (SPT)<br/>
                  <strong>Virtual Card Issuers & Processors.</strong> Lithic, Highnote, Marqeta, Adyen Issuing, Stripe Issuing, Checkout.com<br/>
                  <strong>Autonomous Corporate Spend.</strong> Ramp for Agents, Brex Autonomous Spend, Sapiom, Agentcard<br/>
                  <strong>x402 & Agentic Stablecoin Wallets.</strong> Circle Agent Wallets (USDC), Coinbase Agentic Wallets, Skyfire, Payman, Locus
                </div>
              </div>

              <!-- Tier 4 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 6px; background: #ffffff;">
                <div style="font-weight: 800; color: var(--ink-heading); text-transform: uppercase; font-size: 7.2px; margin-bottom: 2px;">
                  Tier 4 - Merchant Backends, Catalogs & Headless APIs
                </div>
                <div style="color: var(--ink-secondary); line-height: 1.35;">
                  <strong>Core Commerce Engines.</strong> Shopify (Shop Pay API), commercetools, BigCommerce, Salesforce Commerce Cloud, Elastic Path<br/>
                  <strong>Universal Cart & Headless APIs.</strong> Rye, Violet, Cart.com, Convictional
                </div>
              </div>

              <!-- Tier 5 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 6px; background: #ffffff;">
                <div style="font-weight: 800; color: var(--ink-heading); text-transform: uppercase; font-size: 7.2px; margin-bottom: 2px;">
                  Tier 5 - Identity, Bot Defense & Cryptographic Enclaves
                </div>
                <div style="color: var(--ink-secondary); line-height: 1.35;">
                  <strong>Identity & Account Linking.</strong> Plaid (Anthropic bank connectivity partner), Stripe Identity, Persona<br/>
                  <strong>Machine Traffic & Bot Defense.</strong> Cloudflare (Verified Bots), Kasada, Arkose Labs, Forter, Riskified<br/>
                  <strong>Hardware Security Enclaves.</strong> Apple Secure Enclave, Android StrongBox, WebAuthn / FIDO2 Passkeys
                </div>
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources nofrontend.xyz directory; Jas Shah, Fintech Under the Hood (Oct 2025); Visa Consulting & Analytics (2026); CB Insights Market Intelligence; company technical documentation.
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Technical Architecture and 5-Tier Market Map")}
    </div>
  `);

  // ==========================================
  // SPREAD 4: PROTOCOLS AND STANDARDS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("INTEROPERABILITY STANDARDS", "COMMERCE PROTOCOL SPECIFICATIONS", "04")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Standardization Framework</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Interoperability Protocols for Machine Commerce</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Stripe & OpenAI Agentic Commerce Protocol (ACP).</strong> The Agentic Commerce Protocol (ACP [1]) defines standardized RESTful endpoints connecting conversational assistants with merchant e-commerce backends. The specification structures a four-phase checkout state machine covering session creation, cart updates, order completion, and cancellation. ACP mandates RFC 7231 Idempotency-Key headers on all transactional requests, ensuring that intermittent network timeouts or automated retries return existing order states rather than executing duplicate credit card charges or multiple warehouse dispatches.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Google Universal Commerce Protocol (UCP).</strong> Hosted at the merchant domain endpoint /.well-known/ucp, Google Universal Commerce Protocol (UCP [2]) establishes a discovery standard for agent capabilities. When an agent queries a domain, UCP serves a signed JSON manifest declaring supported catalog schemas, cart hold expiration rules, and checkout version compatibility (such as UCP v2026-08-25). This capability negotiation guarantees that both the buyer assistant and merchant server operate on matching operational schemas before checkout execution.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Coinbase Agent Payments Protocol (AP2) Mandates.</strong> The Agent Payments Protocol (AP2 [3]), contributed to the FIDO Alliance by Google and Coinbase (Parikh, 2026), separates purchasing intent from payment execution through cryptographic structures termed mandates. Open Mandates define pre-authorization parameters (such as budget caps, category constraints, and validity windows) before product selection. Closed Mandates cryptographically bind the user's signature to an exact cart hash, merchant identity, and final settlement amount, establishing non-repudiation while preventing price inflation.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Network Tokenization via Visa TAP and Mastercard Verifiable Intent.</strong> Card payment networks provide foundational security for machine transactions. Visa Trusted Agent Protocol (TAP [4]) implements IETF RFC 9421 HTTP Message Signatures, cryptographically signing every HTTP request originating from an authorized agent runtime. Mastercard Verifiable Intent [5] links identity verification to transaction execution while preserving consumer privacy through selective attribute disclosure, preventing unauthorized credential leakage across intermediaries.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>HTTP 402 (x402) Resource Micropayments.</strong> For digital resources and live catalog querying, the x402 open standard operationalizes the native HTTP 402 ("Payment Required") status code [6]. Shopping agents can pay sub-cent fees (such as $0.001 to $0.01 per query) using stablecoins (USDC) on high-throughput networks (Base or Solana). This rail separates search information costs from physical goods settlement, enabling programmatic access to gated inventory feeds.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Sequence Diagram -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 3.1 - THE 4-STEP AGENT PROTOCOL HANDSHAKE</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Cryptographic sequence connecting assistant runtime to merchant acquiring gateway</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Horizontal Phase Cards -->
              <!-- Step 1 -->
              <rect x="0" y="4" width="108" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="108" height="18" rx="3" fill="#f4f4f5"/>
              <text x="8" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Discovery</text>
              <text x="8" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a">Manifest Query</text>
              <text x="8" y="48" font-family="Inter, sans-serif" font-size="6" fill="#71717a">GET /.well-known/ucp</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Capabilities match</text>
              <line x1="8" y1="68" x2="100" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="8" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Latency ~50ms</text>
              <text x="8" y="92" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Cache TTL 1 hour</text>

              <!-- Step 2 -->
              <rect x="117" y="4" width="108" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="117" y="4" width="108" height="18" rx="3" fill="#f4f4f5"/>
              <text x="125" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Cart Binding</text>
              <text x="125" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a">Session Hold</text>
              <text x="125" y="48" font-family="Inter, sans-serif" font-size="6" fill="#71717a">POST /checkout/session</text>
              <text x="125" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Idempotency-Key set</text>
              <line x1="125" y1="68" x2="217" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="125" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Latency ~120ms</text>
              <text x="125" y="92" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Inventory locked 15m</text>

              <!-- Step 3 -->
              <rect x="234" y="4" width="108" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="234" y="4" width="108" height="18" rx="3" fill="#f4f4f5"/>
              <text x="242" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">3. Mandate</text>
              <text x="242" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a">FIDO2 Signature</text>
              <text x="242" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Closed AP2 Mandate</text>
              <text x="242" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Enclave hardware key</text>
              <line x1="242" y1="68" x2="334" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="242" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Latency - User action</text>
              <text x="242" y="92" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Biometric consent</text>

              <!-- Step 4 -->
              <rect x="351" y="4" width="109" height="100" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="351" y="4" width="109" height="18" rx="3" fill="#09090b"/>
              <text x="359" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">4. Settlement</text>
              <text x="359" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#09090b">Token Execution</text>
              <text x="359" y="48" font-family="Inter, sans-serif" font-size="6" fill="#52525b">Visa TAP / SPT rail</text>
              <text x="359" y="58" font-family="Inter, sans-serif" font-size="6" fill="#52525b">RFC 9421 signature</text>
              <line x1="359" y1="68" x2="452" y2="68" stroke="#e4e4e7" stroke-width="1"/>
              <text x="359" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Latency ~250ms</text>
              <text x="359" y="92" font-family="Inter, sans-serif" font-size="6" fill="#52525b">Auth and capture</text>
            </svg>
          </div>

          <!-- Bottom: Protocol Matrix Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 3.1 - Commerce Protocol Comparison Matrix</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Technical specifications across modern autonomous transaction frameworks</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Protocol</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Lead Host</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Architecture</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Security Model</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Core Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Stripe ACP</td>
                  <td style="padding: 3px 5px;">Stripe / OpenAI</td>
                  <td style="padding: 3px 5px;">RESTful State Machine</td>
                  <td style="padding: 3px 5px;">RFC 7231 Idempotency</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Safe network retries [1]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Google UCP</td>
                  <td style="padding: 3px 5px;">Google Pay</td>
                  <td style="padding: 3px 5px;">/.well-known/ucp</td>
                  <td style="padding: 3px 5px;">Signed JSON Manifest</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Capability negotiation [2]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Coinbase AP2</td>
                  <td style="padding: 3px 5px;">FIDO Alliance</td>
                  <td style="padding: 3px 5px;">Cryptographic Mandates</td>
                  <td style="padding: 3px 5px;">Open vs Closed Mandate</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Cart hash binding [3]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Visa TAP</td>
                  <td style="padding: 3px 5px;">Visa Inc.</td>
                  <td style="padding: 3px 5px;">Network Tokenization</td>
                  <td style="padding: 3px 5px;">RFC 9421 HTTP Signatures</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Non-repudiation [4]</td>
                </tr>
                <tr>
                  <td style="padding: 3px 5px; font-weight: 700;">HTTP 402 (x402)</td>
                  <td style="padding: 3px 5px;">Coinbase / IETF</td>
                  <td style="padding: 3px 5px;">Native HTTP Status</td>
                  <td style="padding: 3px 5px;">Stablecoin Micro-payment</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Sub-cent API fees [6]</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Architectural Takeaway.</strong>
              Automated transactions follow three core steps. First, sub-50ms catalog discovery to confirm pricing; second, 15-minute cryptographic cart holds to lock inventory; and third, tokenized settlement with zero raw card transmission.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Stripe Developer Documentation (2025); [2] Google Universal Commerce Protocol Documentation (2025); [3] Coinbase Agent Payments Protocol (2025); [4] Visa Research (2025); [5] Mastercard Verifiable Intent (2025); [6] HTTP 402 Working Group.
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Commerce Protocols and Technical Standards")}
    </div>
  `);

  // ==========================================
  // SPREAD 5: PAYMENT RAILS AND SETTLEMENT
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("PAYMENT INFRASTRUCTURE", "PAYMENT SETTLEMENT AND THE EXECUTION GAP", "05")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Settlement Mechanics</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Payment Settlement Rails and The Execution Gap</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Enterprise Execution Gap (Thoughtworks & Stripe Study).</strong> Empirical joint research by Thoughtworks and Stripe (2025-2026 [1]) reveals an acute execution gap across commercial enterprises. While 63% of surveyed business leaders state their organizations are prepared for agent-driven commerce, only 11% are actively executing live agentic checkout integrations. Additionally, only 35% of businesses maintain structured, machine-readable catalogues capable of supporting programmatic agent evaluation, creating an immediate technical bottleneck for autonomous sales.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Funnel Trust Decay and Token Confidence Lifts.</strong> Consumer willingness to delegate drops sharply across transaction stages. Thoughtworks and Stripe find that 52% of consumers trust AI agents during product research and 41% during item selection, but trust falls to 22% at final checkout due to data privacy concerns [1]. However, deploying single-use Shared Payment Tokens (SPTs) that mask underlying primary account numbers (PANs) increases consumer willingness to complete agent checkouts by 30 percentage points, demonstrating that tokenization directly restores adoption.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Empirical Analysis of Virtual Card Failures (Scott Wessman Study).</strong> Many early shopping agents rely on single-use virtual credit cards (VCCs). Payments engineer Scott Wessman (2025 [2]) demonstrates that virtual cards encounter acute operational failures during multi-item checkouts. When merchants split orders across distribution centers, multiple captures occur against a single authorization token, triggering card declines. Additionally, merchant fraud engines routinely demand dynamic 3D Secure (3DS) SMS verification or CVV re-entry during address recalculation, creating terminal drop-offs for automated workflows.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Payment Rail Economic Asymmetries (Vignesh, Meta Infrastructure Analysis).</strong> As payments researcher Vignesh (Meta, 2025 [3]) observes, traditional interchange rails carry 150 to 350 basis points (1.5% to 3.5%) in transaction processing fees along with 30-to-90-day dispute liability windows. While sustainable for retail goods, this structure is economically non-viable for autonomous machine-to-machine micropayments. Stablecoin rails offer transaction costs below $0.005 with deterministic finality, establishing an optimal settlement mechanism for high-frequency algorithmic queries.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Token Handshake Flow -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 4.1 - DELEGATED TOKEN PAYMENT ARCHITECTURE</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Cryptographic token isolation preventing raw PAN transmission across agent runtimes</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Step Flow Chart -->
              <!-- Block 1: User Enclave -->
              <rect x="4" y="8" width="96" height="92" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="4" y="8" width="96" height="16" rx="3" fill="#f4f4f5"/>
              <text x="10" y="19" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">User Enclave</text>
              <text x="10" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a">Passkey Auth</text>
              <text x="10" y="47" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Sets spend cap</text>
              <text x="10" y="57" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Signs AP2 mandate</text>
              <text x="10" y="67" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Zero card share</text>
              <rect x="10" y="76" width="84" height="16" rx="2" fill="#f4f4f5"/>
              <text x="52" y="87" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">Private Key Safe</text>

              <!-- Arrow 1 -> 2 -->
              <line x1="100" y1="54" x2="118" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="118,51 124,54 118,57" fill="#09090b"/>

              <!-- Block 2: Agent Runtime -->
              <rect x="124" y="8" width="96" height="92" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="124" y="8" width="96" height="16" rx="3" fill="#f4f4f5"/>
              <text x="130" y="19" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">Agent Runtime</text>
              <text x="130" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a">Tool Orchestration</text>
              <text x="130" y="47" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Selects SKU</text>
              <text x="130" y="57" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Verifies price/tax</text>
              <text x="130" y="67" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Requests SPT token</text>
              <rect x="130" y="76" width="84" height="16" rx="2" fill="#f4f4f5"/>
              <text x="172" y="87" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">No Card Storage</text>

              <!-- Arrow 2 -> 3 -->
              <line x1="220" y1="54" x2="238" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="238,51 244,54 238,57" fill="#09090b"/>

              <!-- Block 3: Token Vault / Gateway -->
              <rect x="244" y="8" width="96" height="92" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="244" y="8" width="96" height="16" rx="3" fill="#f4f4f5"/>
              <text x="250" y="19" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">Token Vault / Rail</text>
              <text x="250" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a">Stripe / Visa TAP</text>
              <text x="250" y="47" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Issues domain token</text>
              <text x="250" y="57" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Binds merchant domain</text>
              <text x="250" y="67" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Sets 15m expiration</text>
              <rect x="250" y="76" width="84" height="16" rx="2" fill="#f4f4f5"/>
              <text x="292" y="87" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">Domain-Scoped SPT</text>

              <!-- Arrow 3 -> 4 -->
              <line x1="340" y1="54" x2="358" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="358,51 364,54 358,57" fill="#09090b"/>

              <!-- Block 4: Merchant Acquirer -->
              <rect x="364" y="8" width="92" height="92" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="364" y="8" width="92" height="16" rx="3" fill="#09090b"/>
              <text x="370" y="19" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Merchant Gateway</text>
              <text x="370" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#09090b">Settlement Final</text>
              <text x="370" y="47" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Verifies signature</text>
              <text x="370" y="57" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Executes auth</text>
              <text x="370" y="67" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Dispatches SKU</text>
              <rect x="370" y="76" width="80" height="16" rx="2" fill="#09090b"/>
              <text x="410" y="87" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Order Captured</text>
            </svg>
          </div>

          <!-- Bottom: Rails Taxonomy Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 4.1 - Payment Settlement Rails Comparison</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Taxonomy and unit economics of card networks, virtual cards, and autonomous rails</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Rail Archetype</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Processing Cost</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Settlement Speed</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Dispute Window</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Optimal Transaction Type</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Tokenized Cards (Visa TAP, SPT)</td>
                  <td style="padding: 3px 5px;">1.5% - 2.9% + $0.30</td>
                  <td style="padding: 3px 5px;">T+1 to T+2 Business Days</td>
                  <td style="padding: 3px 5px;">60 - 90 Days</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Consumer Retail ($15 - $2,000)</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Virtual Cards (Lithic, Highnote)</td>
                  <td style="padding: 3px 5px;">1.8% - 3.2% + $0.25</td>
                  <td style="padding: 3px 5px;">T+1 to T+2 Business Days</td>
                  <td style="padding: 3px 5px;">60 - 90 Days</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Interim Legacy Checkout</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Account-to-Account / FedNow</td>
                  <td style="padding: 3px 5px;">0.1% - 0.5% (Capped)</td>
                  <td style="padding: 3px 5px;">Sub-Second Real-Time</td>
                  <td style="padding: 3px 5px;">Strict / Limited</td>
                  <td style="padding: 3px 5px; font-weight: 600;">B2B Wholesale Procurement</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">x402 Stablecoin (USDC Base)</td>
                  <td style="padding: 3px 5px;">&lt; $0.005 Flat Fee</td>
                  <td style="padding: 3px 5px;">Sub-Second Finality</td>
                  <td style="padding: 3px 5px;">Zero / Final</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Sub-Cent API & Data Querying</td>
                </tr>
                <tr>
                  <td style="padding: 3px 5px; font-weight: 700;">Corporate Enclaves (Ramp, Brex)</td>
                  <td style="padding: 3px 5px;">Interchange Sharing</td>
                  <td style="padding: 3px 5px;">T+1 Settlement</td>
                  <td style="padding: 3px 5px;">Internal Admin Rules</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Employee Autonomous Spend</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Settlement Takeaway.</strong>
              While 63% of executives believe their systems are ready, only 11% have live integrations [1]. Shared Payment Tokens (SPTs) eliminate CVV drops and boost consumer checkout confidence by 30 percentage points [1, 2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Thoughtworks & Stripe, "Agentic Commerce - From Confidence to Execution" (2025-2026); [2] Scott Wessman, Payments Friction Analysis (2025); [3] Vignesh (Meta), Economic Rails for Autonomous Agents (2025); [4] nofrontend.xyz directory.
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Payment Rails and The Execution Gap")}
    </div>
  `);

  // ==========================================
  // SPREAD 6: AI ACCURACY & BENCHMARK TESTING
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("BENCHMARK EVALUATIONS", "AGENT ACCURACY AND BEHAVIORAL SCIENCE", "06")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Empirical Evaluations</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Evaluating Agent Accuracy in E-Commerce Workflows</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Visa Agentic Commerce Benchmark Results.</strong> In multi-step automated shopping evaluations conducted under the Visa Agentic Commerce Benchmark (2025-2026 [1]), leading AI models completed 57.2% of standardized retail discovery and checkout runs without human intervention. This left a 42.8% friction and failure rate across real-world web environments. The observed friction concentrated around dynamic DOM modifications, missing price transparency, and checkout form validation failures, confirming that unguided agents struggle on conventional consumer websites.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>CMU WebArena and VisualWebArena Evaluations (ACL 2024).</strong> In rigorous academic testing on live environments, Zhou et al. (CMU WebArena [2]) observed agent completion rates of 10.6% to 14.4%, compared to 78.2% for humans. Koh et al. (CMU and Stanford, ACL 2024 [3]) evaluated multimodal shopping tasks in VisualWebArena, finding baseline success of 20.0%, which improved to 38.1% with visual tree-search planning. Both studies emphasize the necessity of justified refusal, where an agent stops execution rather than hallucinating an erroneous purchase when items are unavailable.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>ACES Benchmark, EComAgentBench, and Tool-Lab Findings.</strong> In the ACES shopping evaluation (Allouah et al., Columbia University, Dec 2025 [4]), agents tested across eight product categories displayed pronounced susceptibility to rank positioning and platform badges. A sponsored label reduced selection probability at a fixed rank, while an "Overall Pick" badge increased it. In EComAgentBench (Du et al., Shopee Research, Sept 2026 [5]), testing 662 long-horizon tasks with distributed hidden needs, Claude Opus 4.6 achieved 57.1% accuracy while GPT-5.4 led in individual requirement satisfaction. In Tool-Lab (Wadi & Ma, Sept 2026 [6]), introducing $10 and $50 simulated tool lookup fees caused agents with vague goals to prematurely truncate search, selecting higher unit-cost items.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Behavioral Decision Science - Algorithm Aversion and Control.</strong> Experimental studies by Dietvorst, Simmons, and Massey (Wharton, 2015 [7]) document severe algorithm aversion, where consumers avoid algorithms after seeing them err, even when the model outperforms human alternatives. However, follow-up research (Dietvorst et al., Management Science, 2018 [8]) demonstrates that allowing users to modify an agent's forecast or decision by even 2% to 5% substantially eliminates algorithm aversion. Logg, Minson, and Moore (Harvard, 2019 [9]) note baseline algorithm appreciation for objective advice, but this declines when consumers possess strong personal preferences.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 8px;">
          <!-- Top SVG: Reliability vs Complexity Chart -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 5.1 - AGENT CHECKOUT RELIABILITY VS. INTERACTION COMPLEXITY</div>
              <div class="exhibit-subtitle" style="font-size: 7.2px; color: var(--ink-secondary);">Scraping brittle HTML interfaces vs. deterministic structured APIs across task steps</div>
            </div>

            <svg viewBox="0 0 460 78" width="100%" height="78" style="display: block;">
              <!-- Axis lines -->
              <line x1="40" y1="64" x2="440" y2="64" stroke="#e4e4e7" stroke-width="1"/>
              <line x1="40" y1="8" x2="40" y2="64" stroke="#e4e4e7" stroke-width="1"/>

              <!-- Axis labels -->
              <text x="35" y="14" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="end">100%</text>
              <text x="35" y="38" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="end">50%</text>
              <text x="35" y="62" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="end">0%</text>

              <text x="70" y="73" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Single SKU</text>
              <text x="170" y="73" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Multi-Filter</text>
              <text x="270" y="73" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Cart Modals</text>
              <text x="370" y="73" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Payment 3DS</text>

              <!-- Line 1: Structured Native API (High Reliability) -->
              <polyline points="70,12 170,14 270,16 370,18" fill="none" stroke="#09090b" stroke-width="2"/>
              <circle cx="70" cy="12" r="2.5" fill="#09090b"/>
              <circle cx="170" cy="14" r="2.5" fill="#09090b"/>
              <circle cx="270" cy="16" r="2.5" fill="#09090b"/>
              <circle cx="370" cy="18" r="2.5" fill="#09090b"/>
              <text x="378" y="19" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b">Native API (98.4%)</text>

              <!-- Line 2: Web Scraping / Vision (Steep Decay) -->
              <polyline points="70,24 170,42 270,54 370,60" fill="none" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 2"/>
              <circle cx="70" cy="24" r="2" fill="#71717a"/>
              <circle cx="170" cy="42" r="2" fill="#71717a"/>
              <circle cx="270" cy="54" r="2" fill="#71717a"/>
              <circle cx="370" cy="60" r="2" fill="#71717a"/>
              <text x="378" y="61" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#71717a">DOM Scraping (14.2%)</text>
            </svg>
          </div>

          <!-- Bottom: Academic Benchmark Matrix -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 5.1 - Benchmark Performance Matrix</div>
              <div class="exhibit-subtitle" style="font-size: 7.2px; color: var(--ink-secondary);">Rigorous empirical evaluations across academic shopping environments and industry tests</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Benchmark</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Institution / Scope</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Observed Metric</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Baseline Comparison</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Core Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">Visa Agentic Benchmark</td>
                  <td style="padding: 2px 4px;">Visa Consulting [1]</td>
                  <td style="padding: 2px 4px;">57.2% Multi-Step Pass</td>
                  <td style="padding: 2px 4px; font-weight: 700;">42.8% Friction Rate</td>
                  <td style="padding: 2px 4px;">DOM changes cause failures</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">WebArena</td>
                  <td style="padding: 2px 4px;">CMU (Zhou et al.) [2]</td>
                  <td style="padding: 2px 4px;">10.6% - 14.4% Success</td>
                  <td style="padding: 2px 4px; font-weight: 700;">78.2% Human</td>
                  <td style="padding: 2px 4px;">Justified refusal is essential</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">VisualWebArena</td>
                  <td style="padding: 2px 4px;">CMU / Stanford (ACL 2024) [3]</td>
                  <td style="padding: 2px 4px;">20.0% - 38.1% Success</td>
                  <td style="padding: 2px 4px; font-weight: 700;">88.7% Human</td>
                  <td style="padding: 2px 4px;">Tree search aids visual parsing</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">ACES Shopping</td>
                  <td style="padding: 2px 4px;">Columbia (Allouah et al.) [4]</td>
                  <td style="padding: 2px 4px;">8 Categories x 8 Items</td>
                  <td style="padding: 2px 4px;">N/A (Synthetic)</td>
                  <td style="padding: 2px 4px;">Rank & badge bias observed</td>
                </tr>
                <tr>
                  <td style="padding: 2px 4px; font-weight: 700;">EComAgentBench</td>
                  <td style="padding: 2px 4px;">Shopee (Du et al.) [5]</td>
                  <td style="padding: 2px 4px;">57.1% (Claude Opus 4.6)</td>
                  <td style="padding: 2px 4px;">N/A (Multi-Turn)</td>
                  <td style="padding: 2px 4px;">Hidden profile needs neglected</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 4px 8px; font-size: 7px;">
              <strong>Engineering Takeaway.</strong>
              Production deployments must enforce deterministic validation, including sub-50ms stock checks, parameter boundaries, and user confirmation thresholds to prevent catastrophic edge-case drift [8].
            </div>

            <div class="exhibit-source-note" style="margin-top: 3px;">
              Reference Sources [1] Visa Consulting & Analytics (2026); [2] Zhou et al., WebArena (CMU); [3] Koh et al., VisualWebArena (ACL 2024); [4] Allouah et al., ACES (Columbia Univ); [5] Du et al., EComAgentBench (Shopee); [6] Tool-Lab; [7] Dietvorst et al. (Wharton, 2015); [8] Dietvorst et al. (Management Science, 2018); [9] Logg et al. (Harvard, 2019).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("AI Accuracy and Empirical Benchmarks")}
    </div>
  `);

  // ==========================================
  // SPREAD 7: FRAUD DEFENSE & LIABILITY
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("SECURITY & FRAUD DEFENSE", "MACHINE TRAFFIC VERIFICATION", "07")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Risk Architecture</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Security Frameworks for Machine-Initiated Traffic</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Surging Machine Referral Traffic (Visa Data).</strong> Analysis by Visa Acceptance Solutions (2025-2026 [1]) records a 1,200% surge in traffic referred directly from generative AI applications to merchant websites. Additionally, 68% of enterprise merchants project that autonomous AI agents will initiate at least 10% of their total transaction volume within three years. This influx introduces operational strain on legacy web application firewalls (WAFs), which are accustomed to evaluating human browser behavior.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Scale of Automated Web Traffic (Imperva Threat Research).</strong> According to the Imperva Bad Bot Report (2024-2025 [2]), automated traffic accounts for 49.6% of total internet traffic. Within this automated volume, 32.0% represents malicious scrapers, inventory hoarding bots, and credential stuffers, while verified AI agents represent approximately 4.8%. Merchants must establish technical mechanisms to distinguish legitimate buyer agents from predatory scrapers without degrading performance or triggering destructive CAPTCHAs that break autonomous flows.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Adversarial Vulnerabilities and Prompt Injection (AgentDojo & Whispers).</strong> Security evaluations in the AgentDojo benchmark (Debenedetti et al. [3]) examine 629 security scenarios across 97 tasks, demonstrating that prompt injections divert agents toward unauthorized tool calls or credential leakage. In the Whispers of Wealth study [4], AP2-style agents (Gemini-2.5-Flash) were tested against indirect prompt injections embedded in merchant product descriptions. In 10 out of 10 repeated trials, an adversarial description successfully redirected the agent to select the attacker's product, illustrating that unverified third-party catalog data presents tangible transaction risks.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Cryptographic Request Verification (Visa TAP and RFC 9421).</strong> Traditional bot defenses relying on IP reputation, browser fingerprinting, and behavioral mouse tracking fail when inspecting headless API traffic. Visa TAP and RFC 9421 solve this limitation through HTTP Message Signatures. By verifying cryptographic signatures generated by secure enclaves, merchants can validate that an incoming request originates from an authorized user runtime and conforms to an approved spending mandate.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Traffic Distribution -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 6.1 - INBOUND WEB TRAFFIC CLASSIFICATION MATRIX</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Decomposition of global e-commerce traffic based on Imperva Threat Intelligence</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Stacked/Comparison Bars -->
              <!-- Human 50.4% -->
              <rect x="10" y="8" width="140" height="24" rx="2" fill="#09090b"/>
              <text x="18" y="23" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Human Shoppers - 50.4%</text>
              <rect x="160" y="8" width="280" height="24" rx="2" fill="#f4f4f5"/>
              <text x="170" y="23" font-family="Inter, sans-serif" font-size="6.5" fill="#27272a">Standard mobile/desktop browsers; biometric and cookie sessions</text>

              <!-- Bad Bots 32.0% -->
              <rect x="10" y="36" width="140" height="24" rx="2" fill="#3f3f46"/>
              <text x="18" y="51" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Malicious Scrapers - 32.0%</text>
              <rect x="160" y="36" width="280" height="24" rx="2" fill="#f4f4f5"/>
              <text x="170" y="51" font-family="Inter, sans-serif" font-size="6.5" fill="#27272a">Price scraping, credential stuffing, card spinning, inventory hoarding</text>

              <!-- Good Bots 12.8% -->
              <rect x="10" y="64" width="140" height="18" rx="2" fill="#71717a"/>
              <text x="18" y="76" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">Search Indexers - 12.8%</text>
              <rect x="160" y="64" width="280" height="18" rx="2" fill="#f4f4f5"/>
              <text x="170" y="76" font-family="Inter, sans-serif" font-size="6.2" fill="#52525b">Googlebot, Bingbot; structured sitemap and feed indexing</text>

              <!-- Verified Agents 4.8% -->
              <rect x="10" y="86" width="140" height="18" rx="2" fill="#18181b"/>
              <text x="18" y="98" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">Verified AI Agents - 4.8%</text>
              <rect x="160" y="86" width="280" height="18" rx="2" fill="#09090b"/>
              <text x="170" y="98" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#ffffff">Cryptographic mandate tokens; sub-50ms catalog checkout requests</text>
            </svg>
          </div>

          <!-- Bottom: Security Strategy Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 6.1 - Bot Defense Strategy & Threat Mitigation Matrix</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Comparison of traditional WAF heuristics versus cryptographic agent authentication</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Threat Vector</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Legacy Defense</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Agentic Vulnerability</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Cryptographic Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Prompt Injection</td>
                  <td style="padding: 3px 5px;">Input sanitization / WAF</td>
                  <td style="padding: 3px 5px;">Catalog descriptions alter goals [3]</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Deterministic JSON schema bounds</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Inventory Hoarding</td>
                  <td style="padding: 3px 5px;">CAPTCHA & IP Rate Limits</td>
                  <td style="padding: 3px 5px;">Blocks valid buyer agents</td>
                  <td style="padding: 3px 5px; font-weight: 600;">15-minute signed cart leases</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Credential Theft</td>
                  <td style="padding: 3px 5px;">Password & SMS 2FA</td>
                  <td style="padding: 3px 5px;">Virtual cards lack 3DS automation</td>
                  <td style="padding: 3px 5px; font-weight: 600;">FIDO2 hardware-backed passkeys</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Card Spinning</td>
                  <td style="padding: 3px 5px;">Velocity rules on PANs</td>
                  <td style="padding: 3px 5px;">Single-use VCCs trigger false fraud</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Visa TAP RFC 9421 signatures</td>
                </tr>
                <tr>
                  <td style="padding: 3px 5px; font-weight: 700;">Price Scraping</td>
                  <td style="padding: 3px 5px;">Cloudflare managed challenge</td>
                  <td style="padding: 3px 5px;">Headless agents cannot solve JS</td>
                  <td style="padding: 3px 5px; font-weight: 600;">x402 pay-per-query API access</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Security Takeaway.</strong>
              Distinguishing legitimate AI buyers from malicious scraping bots requires moving beyond IP reputation toward cryptographic request signing under RFC 9421 and FIDO2 hardware attestation [1, 2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Visa Acceptance Solutions (2025-2026); [2] Imperva Threat Research, Bad Bot Report (2024-2025); [3] Debenedetti et al., AgentDojo; [4] Whispers of Wealth Study; [5] IETF RFC 9421.
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Fraud Defense and Security Verification")}
    </div>
  `);

  // ==========================================
  // SPREAD 8: CATALOGS AND ACO
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("MERCHANT READINESS", "CATALOG ARCHITECTURE AND ACO", "08")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Catalog Optimization</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Agentic Commerce Optimization and Catalog Engineering</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Empirical 100,000 Domain Study on Web Readiness (Vatsa Study, Zenodo).</strong> In an empirical measurement study of 100,000 domains sampled from the Tranco ranking (Vatsa, 2026, Zenodo record 24121071 [1]), public web readiness for autonomous agents was evaluated across nineteen interface checks. Complete HTML was parsed on 48,442 domains (48.44%). XML sitemap structures were observed on 33,392 domains (33.39%), while structured JSON-LD metadata expansion was supported on 23,436 domains (23.44%). Dedicated agent guidance matching the llms.txt heading profile appeared on 7,156 domains (7.16%). In contrast, declared OpenAPI document schemas were identified on only 225 domains (0.23%), and Model Context Protocol (MCP) initialization handshakes succeeded on only 45 domains (0.045%).
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Three-Layer ACO Framework (Semrush & BCG Analysis).</strong> In its analysis of Agentic Commerce Optimization (ACO), Semrush (2026 [2]) outlines a three-layer technical framework. Layer 1 guarantees crawler accessibility by preventing over-aggressive bot firewalls from blocking legitimate assistant IP ranges. Layer 2 standardizes product attribute normalization, ensuring that field names (such as dimensions, weight, and battery life) align with structured feeds. Layer 3 integrates protocol checkout execution. BCG research [3] indicates that 59% of US consumer brands currently lack meaningful agentic capabilities, leaving early adopters an open window to gain algorithmic market share.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Structured Metadata Specifications (Schema.org JSON-LD).</strong> Autonomous agents depend on deterministic metadata rather than subjective advertising copy. Retailers must structure product catalogs using Schema.org JSON-LD, providing explicit fields for price, priceCurrency, availability, itemCondition, hasMerchantReturnPolicy, and shippingDetails. Sites lacking machine-readable schemas force agents to infer specifications through language models, resulting in hallucinated prices and elevated checkout abandonment.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Ursu Position Bias Field Evidence (Chicago Booth).</strong> In econometric field research analyzing consumer search on randomized result rankings, R. M. Ursu (University of Chicago Booth School of Business, 2016 [4]) found that higher search rank strongly drives initial clicks and consideration. However, conditional on an item receiving a click, position rank exhibited no detectable direct effect on eventual booking conversion. For agentic commerce, this indicates that appearing in an agent's consideration set is required for discovery, but final conversion is determined by deterministic product attributes (price, delivery time, return terms).
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: AEO Discovery Weights -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 7.1 - ACO DISCOVERY WEIGHTS VS. TRADITIONAL SEO</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Algorithmic ranking factors prioritized by LLM purchasing agents during product selection</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Ranking Dimension Bars -->
              <!-- Dimension 1: Structured Data -->
              <text x="10" y="20" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Structured JSON-LD & Schema</text>
              <rect x="150" y="11" width="220" height="12" rx="2" fill="#09090b"/>
              <text x="376" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">35% Weight</text>

              <!-- Dimension 2: Real-time Stock Latency -->
              <text x="10" y="44" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Real-Time Stock Latency (&lt;50ms)</text>
              <rect x="150" y="35" width="170" height="12" rx="2" fill="#27272a"/>
              <text x="326" y="44" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#27272a">25% Weight</text>

              <!-- Dimension 3: Verified Review Sentiment -->
              <text x="10" y="68" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Verified Review Quality & NLP</text>
              <rect x="150" y="59" width="135" height="12" rx="2" fill="#52525b"/>
              <text x="291" y="68" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#52525b">20% Weight</text>

              <!-- Dimension 4: Programmatic Policies -->
              <text x="10" y="92" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Machine-Readable Return Terms</text>
              <rect x="150" y="83" width="100" height="12" rx="2" fill="#71717a"/>
              <text x="256" y="92" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#71717a">15% Weight</text>

              <line x1="150" y1="102" x2="430" y2="102" stroke="#e4e4e7" stroke-width="1"/>
            </svg>
          </div>

          <!-- Bottom: Catalog Readiness Checklist (Incorporating 100,000 domain data) -->
          <div class="exhibit-card" style="padding: 8px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 7.1 - Merchant Catalog Readiness Checklist</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Adoption rates observed across 100,000 domains sampled from Tranco ranking (Zenodo record 24121071) [1]</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Technical Requirement</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Specification Standard</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">100k Web Study [1]</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Complete HTML Parsed</td>
                  <td style="padding: 2.5px 5px;">Server-Rendered Markup</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">48.44% (48,442)</td>
                  <td style="padding: 2.5px 5px; color: #18181b; font-weight: 600;">Basic Baseline</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">XML Sitemap Structure</td>
                  <td style="padding: 2.5px 5px;">Sitemaps Protocol XML</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">33.39% (33,392)</td>
                  <td style="padding: 2.5px 5px; color: #18181b; font-weight: 600;">Content Discovery</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Structured Metadata</td>
                  <td style="padding: 2.5px 5px;">Schema.org JSON-LD Expansion</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">23.44% (23,436)</td>
                  <td style="padding: 2.5px 5px; color: #18181b; font-weight: 600;">High Impact for ACO</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Dedicated Agent Guidance</td>
                  <td style="padding: 2.5px 5px;">llms.txt Heading Profile</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">7.16% (7,156)</td>
                  <td style="padding: 2.5px 5px; color: #71717a; font-weight: 600;">Developing Standard</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Public Machine APIs</td>
                  <td style="padding: 2.5px 5px;">OpenAPI Document Schema</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">0.23% (225)</td>
                  <td style="padding: 2.5px 5px; color: #71717a; font-weight: 600;">Major Enterprise Gap</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Model Context Protocol</td>
                  <td style="padding: 2.5px 5px;">MCP Initialize Handshake</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">0.045% (45)</td>
                  <td style="padding: 2.5px 5px; color: #71717a; font-weight: 600;">Early Developer Pilot</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 5px 9px;">
              <strong>Readiness Takeaway.</strong>
              While 48.44% of domains return parseable HTML and 23.44% provide structured JSON-LD, programmatic machine interfaces remain exceptionally scarce, with OpenAPI schemas on 0.23% of domains and MCP server endpoints on 0.045% [1].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] V. R. Vatsa, "Web Access and Agent Interfaces - A 100,000 Domain Study", Tranco Sample, Zenodo record 24121071 (2026); [2] Semrush Research, "Agentic Commerce Optimization" (2026); [3] Boston Consulting Group (2026); [4] R. M. Ursu, Chicago Booth (2016).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Catalog Engineering and 100,000 Domain Audit")}
    </div>
  `);

  // ==========================================
  // SPREAD 9: COMPETITIVE STRATEGY & MOATS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("STRATEGIC DYNAMICS", "PLATFORM POSITIONING AND MOATS", "09")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Market Defensibility</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Strategic Positioning Across the Agentic Commerce Ecosystem</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Reallocation of Search Advertising Budgets.</strong> The transition to autonomous commerce challenges traditional search advertising models. When consumers delegate product discovery to conversational assistants, traditional search result pages and pay-per-click sponsored links ($60B+ annual market) are bypassed in favor of direct synthesis. Retailers must reallocate search acquisition budgets toward structured data endpoints, direct API integration, and agent discovery placement.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Supply Chain Transformation to the Demand of One (Accenture).</strong> In its strategic assessment, Accenture Strategy (FY26 [1]) observes that agent-mediated commerce dismantles conventional aggregate demand forecasting. Autonomous agents trigger purchasing actions based on immediate, unit-level consumption triggers (termed the "Demand of One"). Merchants whose supply chains depend on batch replenishment cycles face inventory stockouts or costly emergency air freight when AI agents coordinate simultaneous reorders.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Revenue Expansion from Owned Agents (BCG Analysis).</strong> While middle-tier resellers face margin pressure, Boston Consulting Group (2026 [2]) finds that enterprise brands establishing early agentic capabilities generate substantial top-line gains. Brands optimizing product detail pages for Generative Engine Optimization (GEO) record a 1% to 5% incremental revenue increase. Organizations deploying owned, first-party AI shopping agents integrated directly with their catalog backends report a 3% to 10% revenue lift.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Infrastructure Defensibility and Logistics Moats (Stripe, Amazon).</strong> As documented by Morgan Stanley and Goldman Sachs [3], value concentrates at two distinct poles. Front-end conversational providers (OpenAI, Google) control consumer intent, while physical fulfillment networks (Amazon, Walmart) control physical inventory and same-day delivery. Payment infrastructure providers (Stripe, Adyen) maintain durable moats through global acquiring licenses, anti-money-laundering (AML) compliance, and tax settlement capabilities that software aggregators cannot easily replicate.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Value Chain Power Distribution -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 8.1 - VALUE CHAIN POWER DISTRIBUTION</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Relative defensibility and margin capture potential across transaction tiers</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Power Tier Slices -->
              <rect x="10" y="8" width="100" height="92" rx="3" fill="#09090b"/>
              <text x="18" y="24" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">LLM Front-Ends</text>
              <text x="18" y="38" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Intent Aggregation</text>
              <text x="18" y="50" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">High switching costs</text>
              <text x="18" y="62" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Ad cannibalization</text>
              <rect x="18" y="74" width="84" height="18" rx="2" fill="#27272a"/>
              <text x="60" y="86" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Power High (Demand)</text>

              <rect x="122" y="8" width="100" height="92" rx="3" fill="#27272a"/>
              <text x="130" y="24" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Payment Rails</text>
              <text x="130" y="38" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Acquiring & Risk</text>
              <text x="130" y="50" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Tokenization vaults</text>
              <text x="130" y="62" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Regulatory moats</text>
              <rect x="130" y="74" width="84" height="18" rx="2" fill="#3f3f46"/>
              <text x="172" y="86" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Power High (Settlement)</text>

              <rect x="234" y="8" width="100" height="92" rx="3" fill="#52525b"/>
              <text x="242" y="24" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Logistics Giants</text>
              <text x="242" y="38" font-family="Inter, sans-serif" font-size="6" fill="#d4d4d8">Fulfillment & Warehouses</text>
              <text x="242" y="50" font-family="Inter, sans-serif" font-size="6" fill="#d4d4d8">Same-day delivery</text>
              <text x="242" y="62" font-family="Inter, sans-serif" font-size="6" fill="#d4d4d8">Physical moats</text>
              <rect x="242" y="74" width="84" height="18" rx="2" fill="#71717a"/>
              <text x="284" y="86" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Power High (Physical)</text>

              <rect x="346" y="8" width="104" height="92" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="354" y="24" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">Pure Resellers</text>
              <text x="354" y="38" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Commodity SKUs</text>
              <text x="354" y="50" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Price comparison risk</text>
              <text x="354" y="62" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Margin compression</text>
              <rect x="354" y="74" width="88" height="18" rx="2" fill="#f4f4f5"/>
              <text x="398" y="86" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">Power Low (Margin Risk)</text>
            </svg>
          </div>

          <!-- Bottom: Moats Matrix Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 8.1 - Platform Competitive Moats and Strategic Capabilities</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Analysis of defensive capabilities and architectural advantage across ecosystem layers</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Stakeholder Group</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Asset Moat</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Vulnerability</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Strategic Imperative</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Front-End AI Assistants</td>
                  <td style="padding: 3px 5px;">User Context & Prompts</td>
                  <td style="padding: 3px 5px;">Lack merchant trust & rails</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Partner with Stripe/Adyen</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Payment Processors</td>
                  <td style="padding: 3px 5px;">Acquiring & KYC Licenses</td>
                  <td style="padding: 3px 5px;">Displaced if x402 bypasses cards</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Deploy Shared Payment Tokens</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Card Networks</td>
                  <td style="padding: 3px 5px;">Global Acceptance & Rules</td>
                  <td style="padding: 3px 5px;">Interchange margin pressure</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Embed Visa TAP / RFC 9421</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Retail Marketplaces</td>
                  <td style="padding: 3px 5px;">Warehouses & Fulfillment</td>
                  <td style="padding: 3px 5px;">Search ad revenue erosion</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Launch proprietary shopping agents</td>
                </tr>
                <tr>
                  <td style="padding: 3px 5px; font-weight: 700;">Independent Brands</td>
                  <td style="padding: 3px 5px;">Proprietary Product IP</td>
                  <td style="padding: 3px 5px;">Price commoditization risk</td>
                  <td style="padding: 3px 5px; font-weight: 600;">Expose structured JSON-LD feeds [2]</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Value migrates toward the two ends of the transaction stack, specifically front-end intent aggregators holding user context, and physical logistics networks fulfilling verified deliveries. Middle-tier resellers face severe margin compression [1, 2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Accenture Strategy (FY26); [2] Boston Consulting Group (2026); [3] Morgan Stanley Equity Research; [4] Goldman Sachs Global Payments Analysis.
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Strategic Dynamics and Platform Moats")}
    </div>
  `);

  // ==========================================
  // SPREAD 10: ENTERPRISE ROADMAP & LEGAL GOVERNANCE
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("STRATEGIC ROADMAP", "ENTERPRISE ROADMAP AND LEGAL GOVERNANCE", "10")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Execution Plan</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">An 18-Month Implementation Roadmap for Retail Brands</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 1 (Months 1 to 6) - Catalog Modernization and Discovery.</strong> The initial phase focuses on exposing structured, machine-readable catalog endpoints. Organizations must implement Schema.org JSON-LD across all SKUs, deploy /.well-known/ucp discovery manifests, and host llms.txt files. Engineering priorities center on optimizing inventory query response times to sub-50ms latencies and establishing automated sitemap feeds for verified search crawlers.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 2 (Months 6 to 12) - Delegated Checkout and Token Integration.</strong> In the second phase, retailers integrate delegated checkout protocols, including Stripe ACP and Google UCP endpoints. Payment systems are upgraded to support Shared Payment Tokens (SPTs) and network tokenization (Visa TAP, Mastercard Verifiable Intent). Checkout endpoints must enforce RFC 7231 Idempotency-Key headers to eliminate duplicate transactions during network disconnections.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 3 (Months 12 to 18) - Autonomous Replenishment and Dynamic Pricing.</strong> Advanced implementations extend agent capabilities to automated replenishment and machine-to-machine procurement. Retailers deploy AP2 closed mandate validation, integrate x402 micro-settlement for automated catalog access, and establish dynamic pricing algorithms calibrated for algorithmic buyers. Systems enforce multi-tier spending caps and explicit human confirmation thresholds.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Legal and Regulatory Compliance (Christoph Busch Analysis).</strong> Legal scholarship by Christoph Busch ("Consumer Law for AI Agents", German Law Journal, 2025-2026 [1]) emphasizes that automated contracts are legally enforceable under US E-SIGN (15 USC 7001(h)) and Washington UETA (RCW 1.80.130), provided an agent's action is legally attributed to the principal. Washington UETA RCW 1.80.090 provides conditional relief for transmission errors only when the consumer has no opportunity to correct the error and provides prompt notice. In the European Union, AI Act Article 50 (effective August 2, 2026) mandates clear disclosure of automated interactions, while consumer protection rules preserve 14-day statutory return rights regardless of agent mediation.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: 18-Month Gantt Chart -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 9.1 - 18-MONTH IMPLEMENTATION TIMELINE</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Phased enterprise execution across catalogs, token checkout, and autonomous restock</div>
            </div>

            <svg viewBox="0 0 460 74" width="100%" height="74" style="display: block;">
              <!-- Timeline Grid -->
              <line x1="120" y1="10" x2="444" y2="10" stroke="#e4e4e7" stroke-width="1"/>
              <text x="120" y="8" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">Month 1</text>
              <text x="228" y="8" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">Month 6</text>
              <text x="336" y="8" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">Month 12</text>
              <text x="444" y="8" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="end">Month 18</text>

              <!-- Phase 1 -->
              <text x="10" y="24" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Phase 1 - Catalogs</text>
              <rect x="120" y="16" width="108" height="10" rx="2" fill="#09090b"/>
              <text x="174" y="24" font-family="Inter, sans-serif" font-size="5.5" font-weight="600" fill="#ffffff" text-anchor="middle">JSON-LD & MCP APIs</text>

              <!-- Phase 2 -->
              <text x="10" y="38" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Phase 2 - Checkout</text>
              <rect x="228" y="30" width="108" height="10" rx="2" fill="#27272a"/>
              <text x="282" y="38" font-family="Inter, sans-serif" font-size="5.5" font-weight="600" fill="#ffffff" text-anchor="middle">Passkeys & Token Rails</text>

              <!-- Phase 3 -->
              <text x="10" y="52" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Phase 3 - B2B Auto</text>
              <rect x="336" y="44" width="108" height="10" rx="2" fill="#52525b"/>
              <text x="390" y="52" font-family="Inter, sans-serif" font-size="5.5" font-weight="600" fill="#ffffff" text-anchor="middle">Machine Pricing & Restock</text>
            </svg>
          </div>

          <!-- Bottom: Implementation Scorecard -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 9.1 - Enterprise Resource Allocation and KPI Scorecard</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Milestones, budget distribution, and performance metrics across deployment phases</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Phase</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Budget Share</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Core Technical Milestone</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Target Success KPI</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Phase 1 - Catalogs</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">40%</td>
                  <td style="padding: 3px 6px;">&lt; 50ms stock query latency</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">99.5% Accuracy</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Phase 2 - Checkout</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">35%</td>
                  <td style="padding: 3px 6px;">&lt; 2% token decline rate</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">Zero PAN storage</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Phase 3 - B2B Auto</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">25%</td>
                  <td style="padding: 3px 6px;">8.2% conversion lift on agents</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">&lt; 1% return rate</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Legal and Regulatory Governance Priorities.</strong>
              Executive committees must review automated agent delegation under US UETA Section 14 and EU AI Act transparency rules to ensure that cryptographic mandates establish legally enforceable contracts [1].
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Reference Sources [1] Christoph Busch, "Consumer Law for AI Agents", German Law Journal (Cambridge / Oxford); [2] McKinsey & Company (2025); [3] Bain & Company Technology Practice (2025); [4] Gartner IT Symposium Executive Findings (2025-2026).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Implementation Roadmap and Legal Compliance")}
    </div>
  `);

  const outputPath = path.resolve(__dirname, 'The_Business_Value_of_Agentic_Commerce_Notion.pdf');
  
  await renderReportToPdf({
    htmlSpreads: spreads,
    outputPath: outputPath,
    cssPath: path.resolve(__dirname, '../../styles/notion/notion-design-system.css'),
    generatePreviews: true,
    previewDir: path.resolve(__dirname, 'previews')
  });

  console.log(`✓ Generated Notion Aesthetic Industry Report: ${outputPath}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log("Compiling Notion Style Industry Report to PDF (Monochrome White/Black/Grey)...");
  generateReport().catch(console.error);
}
