/**
 * Executive Industry Research Report - The Business Value of Agentic Commerce
 * Formatted in Notion Monochrome Design System (Pure White, Black, Cool Zinc Grays)
 * 
 * Deep Academic and Industry Research Basis:
 * - Empirical Web Readiness - V. R. Vatsa (100,000 domain study across Tranco ranking, Zenodo record 24121071)
 * - Agent Micropayments Economics - V. R. Vatsa (finite-state economic model of buyer VOI and settlement)
 * - Management Consultancies & Industry Analysts:
 *   * McKinsey QuantumBlack ("The Automation Curve in Agentic Commerce" - 6-level delegation, regret-risk model, $3T-$5T projection)
 *   * Boston Consulting Group ("Agentic Commerce" - $1.3T impacted spend, $400B autonomous, 81% consumer readiness, 59% CPG gap)
 *   * Accenture Strategy ("Agentic Commerce - Make Your Brand Unmissable" - 90% brand switching, Demand of One, 45% adoption)
 *   * Bundl Research ("The Agentic Consumer - Chapter 1" - 81% Gen Alpha, 74% trust agent over friend, 37% loyal switch, $262B holiday spend)
 *   * Okta & Auth0 ("2026 Customer Identity Trends Report" - 5,200 consumers, 900 leaders, 80% stalled projects, 3x-5x conversion premium)
 *   * SAP Emarsys ("What is Agentic Commerce?" - Permission spectrum, AI shortlist gatekeeping, brand invisibility)
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
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">02</span><span>Economics, Search Theory and The Agentic Consumer</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">03</span><span>7-Layer Technical Stack and 5-Tier Market Map</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">04</span><span>Commerce Protocols and Standards (ACP, UCP, AP2)</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">05</span><span>Payment Settlement Rails and The Execution Gap</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">06</span><span>Accuracy Benchmarks and Behavioral Decision Science</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">07</span><span>Fraud Defense, Bot Classification and Security</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">08</span><span>Catalog Engineering, ACO and 100,000 Domain Study</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">09</span><span>Strategic Ecosystem Dynamics and Platform Moats</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">10</span><span>18-Month Enterprise Roadmap and Legal Governance</span></div>
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

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>The Delegation Paradox and Need Satisfaction.</strong> Artificial intelligence shopping agents can identify merchandise and submit payment credentials, but granting permission to pay does not establish that a selected item satisfies the consumer's physical requirements. In retail transactions, goods must match exact spatial dimensions, fulfill delivery schedules, and satisfy unstated personal preferences. Evaluating empirical user studies, benchmark evaluations, and payment specifications indicates instances where an accepted recommendation or valid payment leaves core purchase needs unverified.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>The Agentic Consumer and Delegation Thresholds (Bundl & Greenbook Research).</strong> Recent demographic field surveys by Bundl and Greenbook (2026 [1]) reveal an accelerating transition toward automated purchasing. Across younger cohorts, 81% of Gen Alpha shoppers actively utilize AI tools during purchasing journeys, compared to 52% of Gen Z consumers. Algorithmic trust is establishing deep roots, with 74% of surveyed young shoppers stating they trust an AI agent more than a human friend to purchase items on their behalf, while 56% permit an agent to define which brands enter their consideration set. However, delegation follows a distinct multi-stage progression, moving from search assistance (85% willingness) and single-tap cart confirmation (74% willingness) to autonomous background execution (9% willingness).
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>The Six-Level Automation Curve and Regret Risk (McKinsey QuantumBlack).</strong> Research by McKinsey QuantumBlack (2025-2026 [2]) charts consumer delegation across a six-level maturity spectrum, progressing from manual human search (Level 0) to unconstrained autonomous buying (Level 5). The research indicates that delegation does not advance uniformly across merchandise. It is governed by regret risk, defined as the perceived emotional or financial cost of an erroneous purchase. Routine consumer replenishment and repetitive procurement migrate rapidly up the curve, reaching 68% delegation willingness in low-risk pantry items. Conversely, considered luxury purchases plateau below 14% willingness, retaining mandatory human approval checkpoints.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>Search Cost Asymmetry and Brand Volatility (Bakos, Accenture, Bundl).</strong> Economic search theory by J. Yannis Bakos (Management Science, 1997 [3]) separates the cost of discovering prices from the cost of evaluating product attributes. Lower attribute search costs enable consumers to find tailored items, softening direct price competition. However, survey data from Accenture Strategy (FY26 [4]) indicates that 90% of frequent AI users in North America are open to switching away from a preferred brand if their agent recommends a superior alternative. Bundl research confirms this brand fragility, finding that 37% of loyal brand shoppers permit an agent to migrate them to competing providers based on price, composition, or delivery schedule.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>Macro Sizing Synthesis and Agent Velocity.</strong> Sizing projections from premier advisory houses indicate rapid transaction reallocation. Boston Consulting Group (BCG, 2026 [5]) models over $1.3 trillion in retail spending influenced by agentic commerce, with roughly $400 billion driven mostly autonomously. McKinsey projects $3 trillion to $5 trillion in global consumer transactions mediated by agents by 2030 [2]. During the 2025 holiday shopping window, Salesforce recorded $262 billion in AI-influenced global retail sales, while Adobe Analytics observed a 60% conversion lift from AI-referred visits [1]. With over 1.7 billion weekly shopping queries recorded on ChatGPT alone and 102 new commerce agents launched over the past twelve months, machine mediation is expanding across global digital commerce.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Exhibit Top: Evolution SVG -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 1.1 - THE CONSUMER DELEGATION LADDER AND 6-LEVEL AUTOMATION SPECTRUM</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Synthesis of McKinsey QuantumBlack automation levels and Bundl-Accenture delegation thresholds</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Core Phase Groupings based on Bundl & McKinsey -->
              <!-- Step 1: Ask (85%) -->
              <rect x="0" y="4" width="108" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="108" height="18" rx="3" fill="#f4f4f5"/>
              <text x="8" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Ask (85% Ready)</text>
              <text x="8" y="36" font-family="Inter, sans-serif" font-size="6.8" font-weight="600" fill="#27272a">Levels 0-1 Search</text>
              <text x="8" y="48" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Conversational discovery</text>
              <text x="8" y="60" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Human clicks and buys</text>
              <line x1="8" y1="68" x2="100" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="8" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Shortlist Filter</text>
              <text x="8" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">56% let AI pick brands</text>

              <!-- Step 2: Approve (74%) -->
              <rect x="116" y="4" width="108" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="116" y="4" width="108" height="18" rx="3" fill="#f4f4f5"/>
              <text x="124" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Approve (74%)</text>
              <text x="124" y="36" font-family="Inter, sans-serif" font-size="6.8" font-weight="600" fill="#27272a">Levels 2-3 Checkout</text>
              <text x="124" y="48" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Agent prepares cart</text>
              <text x="124" y="60" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Single tap confirmation</text>
              <line x1="124" y1="68" x2="216" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="124" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Guided Payment</text>
              <text x="124" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Human reviews total</text>

              <!-- Step 3: Delegate (32%) -->
              <rect x="232" y="4" width="108" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="232" y="4" width="108" height="18" rx="3" fill="#f4f4f5"/>
              <text x="240" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">3. Delegate (32%)</text>
              <text x="240" y="36" font-family="Inter, sans-serif" font-size="6.8" font-weight="600" fill="#27272a">Level 4 Conditional</text>
              <text x="240" y="48" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Buys on price drops</text>
              <text x="240" y="60" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Bounded mandate caps</text>
              <line x1="240" y1="68" x2="332" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="240" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Rule Execution</text>
              <text x="240" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">11% US adults active</text>

              <!-- Step 4: Forget (9%) -->
              <rect x="348" y="4" width="112" height="100" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="348" y="4" width="112" height="18" rx="3" fill="#09090b"/>
              <text x="356" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">4. Forget (9%)</text>
              <text x="356" y="36" font-family="Inter, sans-serif" font-size="6.8" font-weight="600" fill="#09090b">Level 5 Autonomous</text>
              <text x="356" y="48" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Automatic pantry restock</text>
              <text x="356" y="60" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Zero-click replenishment</text>
              <line x1="356" y1="68" x2="452" y2="68" stroke="#e4e4e7" stroke-width="1"/>
              <text x="356" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Machine Commerce</text>
              <text x="356" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#52525b">Low-regret goods only</text>
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
                  <td style="padding: 3px 6px;">6-level automation curve across consumer retail [2]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Boston Consulting Group</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$1.3 Trillion+</td>
                  <td style="padding: 3px 6px;">2028-2030 (Global)</td>
                  <td style="padding: 3px 6px;">$400B autonomous; 81% consumer readiness [5]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Accenture Strategy</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">45% of Shoppers</td>
                  <td style="padding: 3px 6px;">2-Year Horizon</td>
                  <td style="padding: 3px 6px;">Half of purchases mediated by agents; 90% brand switch [4]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Salesforce & Bundl</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$262 Billion</td>
                  <td style="padding: 3px 6px;">2025 Holiday Benchmark</td>
                  <td style="padding: 3px 6px;">+60% AI conversion lift; 1.7B weekly prompts [1]</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Gartner Research</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$30 Trillion</td>
                  <td style="padding: 3px 6px;">2030 (Total Market)</td>
                  <td style="padding: 3px 6px;">Machine customer economy across procurement and retail [6]</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Delegation scales first in low-regret commodity goods. While 81% of shoppers explore AI assistance, only 9% permit unconstrained transactions, requiring merchants to support structured checkout approval flows [1, 2, 5].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Bundl, "The Agentic Consumer - Chapter 1" (Oct 2026), citing Greenbook, Salesforce, Adobe Analytics, and OpenAI; [2] McKinsey QuantumBlack, "The Automation Curve in Agentic Commerce" (2025-2026); [3] J. Y. Bakos, Management Science (1997); [4] Accenture Strategy, "Agentic Commerce - Make Your Brand Unmissable" (FY26); [5] Boston Consulting Group, "Agentic Commerce" (2026); [6] Gartner Research (2025).
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

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>Seven Core Architectural Layers (Jas Shah Model).</strong> As established by fintech analyst Jas Shah in Fintech Under the Hood (2025 [1]), complete agentic purchasing requires seven integrated layers. These progress from L1 (Consumer AI Frontends) through L2 (Reasoning and Orchestration Engines), L3 (Tool Execution and Context Protocols), L4 (Catalog and Context Synchronization), L5 (Checkout Session State Machines), L6 (Payment Rails and Token Vaults), to L7 (Post-Purchase Fulfillment and Returns). Each tier enforces specific boundaries between probabilistic language generation and deterministic transaction settlement.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>The Six-Stage Transaction Pipeline (Visa Consulting & Analytics).</strong> In its framework analyzing the rise of machine-initiated spending, Visa Consulting & Analytics (2026 [2]) maps transactions across six technical gates, specifically intent capture, cart construction, agent identity validation, credential access, authentication, and liability routing. Visa notes that while 56% of consumers readily delegate product search and comparison, fewer than 40% permit automated credential access without explicit approval gates.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>Identity Infrastructure and The Enterprise Stall (Okta 2026 Findings).</strong> Empirical findings from the 2026 Customer Identity Trends Report by Okta and Auth0 (surveying 5,200 consumers and 900 engineering and business leaders [3]) reveal that 80% of enterprise agentic commerce projects are delayed or running behind schedule. A pronounced organizational disconnect explains this friction. While 59% of business executives attribute delays to vague compliance and governance reviews, developers are twice as likely (17.8% compared to 9.0%) to identify that legacy customer identity infrastructure cannot support non-human agent access patterns. Organizations that deploy modern identity platforms with runtime least-privilege scoping achieve production deployment rates of 34.4%, compared to 22.3% for those relying on legacy systems.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>Agent Conversion Premium and Demand Ingestion.</strong> Okta research indicates that up to 40% of traditional search queries are moving toward third-party AI agents [3]. Because autonomous agents conduct exhaustive evaluation before initiating checkout, verified agents convert at three to five times the rate of human storefront visitors. Ingesting this demand requires merchants to replace fragile visual scraping with structured interfaces. Through the Model Context Protocol (MCP), agents query real-time stock levels and shipping calculations directly, preventing hallucinated product attributes from entering checkout pipelines.
          </p>

          <p class="report-p" style="font-size: 9.4px; line-height: 1.48; margin-bottom: 5.5px;">
            <strong>Hardware-Attested Identity and Non-Repudiation.</strong> Scalable agent commerce requires non-repudiable delegation. Modern frameworks anchor agent execution within hardware enclaves (such as Apple Secure Enclave or Android StrongBox) and utilize WebAuthn and FIDO2 cryptographic credentials. Anchoring authorization in hardware ensures that an agent cannot forge transaction parameters, providing merchants and card issuers with cryptographic certainty regarding principal consent.
          </p>
        </div>

        <!-- Right Column: Exhibits (56%) -->
        <div style="flex: 1.35; display: flex; flex-direction: column; gap: 8px;">
          <!-- Top SVG: Jas Shah Architecture Diagram -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Figure 2.1 - The Agentic Commerce Stack and Data Flow (Ref - Jas Shah Model [1] & Okta Identity Fabric [3])</div>
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
              <text x="16" y="105" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L7. Fulfillment & Identity</text>
              <text x="190" y="105" font-family="Inter, sans-serif" font-size="5.6" fill="#a1a1aa" text-anchor="end">Okta CIAM, Shop Pay</text>

              <!-- Flow Connection Graphic on Right -->
              <rect x="206" y="6" width="244" height="102" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="216" y="20" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">END-TO-END EXECUTION FLOW</text>
              
              <!-- Flow step 1 -->
              <circle cx="222" cy="38" r="7" fill="#f4f4f5" stroke="#18181b" stroke-width="1"/>
              <text x="222" y="41" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">1</text>
              <text x="236" y="37" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#09090b">Intent Ingestion</text>
              <text x="236" y="46" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">User expresses shopping goal via conversational LLM</text>

              <!-- Flow step 2 -->
              <circle cx="222" cy="62" r="7" fill="#f4f4f5" stroke="#18181b" stroke-width="1"/>
              <text x="222" y="65" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">2</text>
              <text x="236" y="61" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#09090b">Discovery & Context</text>
              <text x="236" y="70" font-family="Inter, sans-serif" font-size="5.6" fill="#71717a">Agent calls MCP tools for real-time inventory and pricing</text>

              <!-- Flow step 3 -->
              <circle cx="222" cy="86" r="7" fill="#18181b" stroke="#18181b" stroke-width="1"/>
              <text x="222" y="89" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">3</text>
              <text x="236" y="85" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Settlement & Attestation</text>
              <text x="236" y="94" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Non-human identity verified; single-use token dispatched</text>
            </svg>
          </div>

          <!-- Bottom: Comprehensive Market Map -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 2.1 - The 5-Tier Agentic Commerce Market Map</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Directory of live infrastructure, protocols, payment rails, and enterprise vendors</div>
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
                  <strong>Social & Direct Commerce.</strong> TikTok Shop AI, Meta AI (Instagram and WhatsApp Commerce)
                </div>
              </div>

              <!-- Tier 2 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 6px; background: #ffffff;">
                <div style="font-weight: 800; color: var(--ink-heading); text-transform: uppercase; font-size: 7.2px; margin-bottom: 2px;">
                  Tier 2 - Agent Protocols & Orchestration Frameworks
                </div>
                <div style="color: var(--ink-secondary); line-height: 1.35;">
                  <strong>Open Commerce Protocols.</strong> Anthropic Model Context Protocol (MCP), Google Universal Commerce Protocol (UCP), Stripe ACP, Coinbase AP2<br/>
                  <strong>Multi-Agent Orchestration.</strong> LangGraph, LangChain, CrewAI, AutoGen (Microsoft), LlamaIndex, Semantic Kernel
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
                  <strong>Identity & Non-Human Access.</strong> Okta & Auth0 (Agentic AI Security and CIAM for AI Agents), Plaid, Stripe Identity, Persona<br/>
                  <strong>Machine Traffic & Bot Defense.</strong> Cloudflare (Verified Bots), Kasada, Arkose Labs, Forter, Riskified<br/>
                  <strong>Hardware Security Enclaves.</strong> Apple Secure Enclave, Android StrongBox, WebAuthn and FIDO2 Passkeys
                </div>
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources nofrontend.xyz directory; Jas Shah, Fintech Under the Hood (Oct 2025); Visa Consulting & Analytics (2026); Okta Customer Identity Trends Report (2026); CB Insights Market Intelligence; company technical documentation.
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
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Protocol Standards</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Open Protocol Specifications and Agent Handshakes</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Fragmentation of Agent Interoperability.</strong> Early commercial deployments were constrained by proprietary agent-to-merchant integrations. To establish scalable autonomous transactions, industry consortia have introduced open protocols that formalize machine discovery, cart negotiation, and cryptographically verified settlement across distributed networks.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Stripe & OpenAI Agentic Commerce Protocol (ACP).</strong> Developed jointly by Stripe and OpenAI (2025 [1]), ACP establishes a standardized state machine for cart operations. ACP introduces deterministic endpoints for cart creation, item modification, shipping quotation, and payment authorization. A core technical requirement is the enforcement of RFC 7231 Idempotency-Keys on all state-mutating requests, ensuring that intermittent network retries by an automated agent never trigger duplicate charges or parallel order submissions.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Google Universal Commerce Protocol (UCP).</strong> Google's UCP framework introduces standardized discovery via a root-level manifest located at /.well-known/ucp. This manifest advertises an enterprise's supported commerce capabilities, OpenAPI specifications, authentication requirements, and rate limit boundaries. By standardizing discovery, UCP enables autonomous search agents to parse product catalogs and execute multi-item checkouts programmatically without training on custom site layouts.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Coinbase Agent Payments Protocol (AP2) and Mandate Typology.</strong> Built for machine-to-machine financial execution, Coinbase's AP2 protocol formalizes cryptographically signed buyer authorizations. AP2 defines Open Mandates (granting an agent recurring purchasing authority within bounded spending limits over time) and Closed Mandates (binding an authorization to a single SKU, price ceiling, and specific merchant identifier). Closed mandates protect consumers against price drift and unauthorized cart adjustments.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Cryptographic Message Attestation (RFC 9421 & Visa TAP).</strong> The Visa Trusted Agent Protocol (TAP, 2025-2026 [2]) introduces cryptographic signing of transit payloads using RFC 9421 HTTP Message Signatures. By signing the request body, timestamp, and target merchant domain with an asymmetric key pair stored inside a secure enclave, the agent creates an audit trail that guarantees non-repudiation and prevents man-in-the-middle manipulation.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Protocol Sequence Diagram -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 3.1 - PROTOCOL HANDSHAKE SEQUENCE (ACP / UCP)</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Deterministic transaction lifecycle from discovery to settlement</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 4 Participants Columns -->
              <line x1="50" y1="18" x2="50" y2="102" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="170" y1="18" x2="170" y2="102" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="290" y1="18" x2="290" y2="102" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="410" y1="18" x2="410" y2="102" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>

              <!-- Headers -->
              <rect x="15" y="4" width="70" height="13" rx="2" fill="#09090b"/>
              <text x="50" y="13" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Buyer Agent</text>

              <rect x="135" y="4" width="70" height="13" rx="2" fill="#27272a"/>
              <text x="170" y="13" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Merchant UCP</text>

              <rect x="255" y="4" width="70" height="13" rx="2" fill="#52525b"/>
              <text x="290" y="13" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Cart Machine</text>

              <rect x="375" y="4" width="70" height="13" rx="2" fill="#18181b"/>
              <text x="410" y="13" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Payment Rail</text>

              <!-- Sequence 1: Discovery -->
              <line x1="50" y1="28" x2="168" y2="28" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="168,26 172,28 168,30" fill="#09090b"/>
              <text x="110" y="25" font-family="Inter, sans-serif" font-size="5.8" font-weight="600" fill="#09090b" text-anchor="middle">GET /.well-known/ucp</text>

              <!-- Sequence 2: Cart Creation -->
              <line x1="50" y1="46" x2="288" y2="46" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="288,44 292,46 288,48" fill="#09090b"/>
              <text x="170" y="43" font-family="Inter, sans-serif" font-size="5.8" font-weight="600" fill="#09090b" text-anchor="middle">POST /cart (Idempotency-Key)</text>

              <!-- Sequence 3: Mandate Signature -->
              <line x1="50" y1="64" x2="408" y2="64" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="408,62 412,64 408,66" fill="#09090b"/>
              <text x="230" y="61" font-family="Inter, sans-serif" font-size="5.8" font-weight="600" fill="#09090b" text-anchor="middle">Submit Token (RFC 9421 Signed Mandate)</text>

              <!-- Sequence 4: Settlement Confirmation -->
              <line x1="410" y1="82" x2="52" y2="82" stroke="#27272a" stroke-width="1.2" stroke-dasharray="3,2"/>
              <polygon points="54,80 50,82 54,84" fill="#27272a"/>
              <text x="230" y="79" font-family="Inter, sans-serif" font-size="5.8" font-weight="600" fill="#27272a" text-anchor="middle">200 OK - Order Confirmed & Receipt</text>
            </svg>
          </div>

          <!-- Bottom: Protocol Comparison Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 3.1 - Leading Commerce Protocol Specifications Comparison</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Technical attributes, governance bodies, and authentication architectures</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Protocol</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Governance</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Focus</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Authentication Standard</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Stripe & OpenAI ACP</td>
                  <td style="padding: 3px 6px;">Commercial Consortium</td>
                  <td style="padding: 3px 6px;">Checkout State Machine</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">OAuth 2.0 Bearer + Idempotency</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Google UCP</td>
                  <td style="padding: 3px 6px;">Open Specification</td>
                  <td style="padding: 3px 6px;">Discovery & Manifest Parsing</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">OpenAPI 3.1 + WebAuthn</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Coinbase AP2</td>
                  <td style="padding: 3px 6px;">Open Source Protocol</td>
                  <td style="padding: 3px 6px;">Buyer Mandates & Micropayments</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">EIP-712 Typed Cryptographic Signatures</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Visa TAP</td>
                  <td style="padding: 3px 6px;">Card Network Standard</td>
                  <td style="padding: 3px 6px;">Tokenized Card Transit</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">RFC 9421 HTTP Message Signatures</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Anthropic MCP</td>
                  <td style="padding: 3px 6px;">Open Ecosystem</td>
                  <td style="padding: 3px 6px;">Context & Remote Tool Ingestion</td>
                  <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">JSON-RPC 2.0 over Stdio and SSE</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Engineering Takeaway.</strong>
              Protocol convergence is centering around RESTful OpenAPI schemas for discovery and RFC 9421 cryptographic payload signing for delegated authorization, eliminating fragile DOM scraping [1, 2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Stripe & OpenAI Agentic Commerce Protocol Technical Whitepaper (2025); [2] Visa Trusted Agent Protocol (TAP) Architectural Specifications (2025-2026); [3] Coinbase AP2 Repository Documentation.
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
            <strong>Identity Debt and Authentication Friction (Okta 2026 Data).</strong> The execution gap is directly compounded by outdated customer authentication models. Okta research [2] establishes that 74% of consumers abandon a digital storefront when forced to manually create an account before viewing product data or completing transactions. Additionally, 80% of enterprise agentic initiatives remain stalled because legacy identity databases cannot safely manage non-human credentials. When identity systems lack runtime scoping, engineering teams resort to makeshift credential workarounds that expose sensitive consumer data to interception.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Funnel Trust Decay and Token Confidence Lifts.</strong> Consumer willingness to delegate drops sharply across transaction stages. Thoughtworks and Stripe find that 52% of consumers trust AI agents during product research and 41% during item selection, but trust falls to 22% at final checkout due to data privacy concerns [1]. However, deploying single-use Shared Payment Tokens (SPTs) that mask underlying primary account numbers (PANs) increases consumer willingness to complete agent checkouts by 30 percentage points, demonstrating that tokenization directly restores adoption.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Empirical Analysis of Virtual Card Failures (Scott Wessman Study).</strong> Many early shopping agents rely on single-use virtual credit cards (VCCs). Payments engineer Scott Wessman (2025 [3]) demonstrates that virtual cards encounter acute operational failures during multi-item checkouts. When merchants split orders across distribution centers, multiple captures occur against a single authorization token, triggering card declines. Additionally, merchant fraud engines routinely demand dynamic 3D Secure (3DS) SMS verification or CVV re-entry during address recalculation, creating terminal drop-offs for automated workflows.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Payment Rail Economic Asymmetries (Vignesh, Meta Infrastructure Analysis).</strong> As payments researcher Vignesh (Meta, 2025 [4]) observes, traditional interchange rails carry 150 to 350 basis points (1.5% to 3.5%) in transaction processing fees along with 30-to-90-day dispute liability windows. While sustainable for retail goods, this structure is economically non-viable for autonomous machine-to-machine micropayments. Stablecoin rails offer transaction costs below $0.005 with deterministic finality, establishing an optimal settlement mechanism for high-frequency algorithmic queries.
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
              <text x="292" y="87" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">PAN Masked</text>

              <!-- Arrow 3 -> 4 -->
              <line x1="340" y1="54" x2="358" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="358,51 364,54 358,57" fill="#09090b"/>

              <!-- Block 4: Merchant Gateway -->
              <rect x="364" y="8" width="92" height="92" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2"/>
              <rect x="364" y="8" width="92" height="16" rx="3" fill="#09090b"/>
              <text x="370" y="19" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Merchant Acquirer</text>
              <text x="370" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#09090b">Settlement Engine</text>
              <text x="370" y="47" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Decrypts SPT token</text>
              <text x="370" y="57" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Confirms spend limit</text>
              <text x="370" y="67" font-family="Inter, sans-serif" font-size="5.6" fill="#52525b">Captures payment</text>
              <rect x="370" y="76" width="80" height="16" rx="2" fill="#09090b"/>
              <text x="410" y="87" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Order Placed</text>
            </svg>
          </div>

          <!-- Exhibit Bottom: Rails Data Table -->
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
              While 63% of executives believe their systems are ready, only 11% have live integrations [1], and 80% of agentic projects face identity delays [2]. Shared Payment Tokens (SPTs) eliminate CVV drops and boost consumer checkout confidence by 30 percentage points [1, 3].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Thoughtworks & Stripe, "Agentic Commerce - From Confidence to Execution" (2025-2026); [2] Okta, "2026 Customer Identity Trends Report" (Nov 2026); [3] Scott Wessman, Payments Friction Analysis (2025); [4] Vignesh (Meta), Economic Rails for Autonomous Agents (2025); [5] nofrontend.xyz directory.
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
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Agent Accuracy Benchmarks and Decision Science</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Empirical Web Task Success Rates (WebArena & VisualWebArena).</strong> Rigorous academic evaluations demonstrate substantial error rates when autonomous agents interact with unformatted digital storefronts. In WebArena (Carnegie Mellon University, Zhou et al., 2024 [1]), leading LLM agents completed only 14.41% of end-to-end web tasks successfully. In VisualWebArena (CMU and Stanford, Koh et al., ACL 2024 [2]), agents achieved an overall task success rate of 16.4%, with performance on commercial shopping websites reaching 18.7%. Failures were concentrated in dynamic dropdown selections, ambiguous pagination, and silent error states during checkout.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Multi-Step Transaction Resilience (Visa Consulting & Analytics).</strong> In its empirical benchmark analyzing multi-step digital checkout flows, Visa Consulting & Analytics (2026 [3]) found an overall pass rate of 57.2% across standard merchant interfaces. The study noted that failure rates escalate dramatically during step-by-step navigation. While agents successfully add items to carts in 84.1% of trials, form submission and dynamic address calculation drop completion rates to below 60%, with 32.8% of failures caused by unpredictable client-side JavaScript modals and CAPTCHA challenges.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Specialized E-Commerce Benchmarks (EComAgentBench & Tool-Lab).</strong> Research by Du et al. (EComAgentBench, Shopee Research, 2025 [4]) evaluated shopping agents across multi-constraint product selection, recording a success rate of 42.8% when handling conflicting constraints (such as balancing price ceilings against delivery dates). Similarly, Tool-Lab evaluations by Wadi and Ma (2025 [5]) demonstrate that when agents utilize structured API endpoints rather than web scraping, transaction success rates rise from 24.1% to 82.4%, proving that structured merchant interfaces are required for reliable execution.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Behavioral Decision Science and Trust Dynamics (Dietvorst vs. Logg).</strong> Consumer adoption of shopping agents is governed by dual behavioral dynamics. Research on Algorithm Aversion by Berkeley J. Dietvorst et al. (Wharton, 2018 [6]) proves that human decision-makers lose trust in an automated algorithm much faster than in a human after witnessing an identical error. Conversely, research on Algorithm Appreciation by Jennifer M. Logg et al. (Harvard Business School, 2019 [7]) indicates that consumers actively prefer algorithmic advice when tasks are perceived as rule-bound, numerical, or objective (such as price comparison and discount code calculation). Maintaining human-in-the-loop approval gates protects merchants against abrupt trust collapse.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Benchmark Comparison Bar Chart -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 5.1 - AGENT TASK COMPLETION BENCHMARKS</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Empirical task success rates across leading academic and industry evaluations</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 5 Benchmark Bars -->
              <!-- Bar 1: VisualWebArena Shopping -->
              <text x="10" y="19" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">VisualWebArena Commercial [2]</text>
              <rect x="150" y="10" width="75" height="12" rx="2" fill="#71717a"/>
              <text x="232" y="19" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">18.7% Pass</text>

              <!-- Bar 2: WebArena General -->
              <text x="10" y="38" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">WebArena Autonomous Web [1]</text>
              <rect x="150" y="29" width="58" height="12" rx="2" fill="#52525b"/>
              <text x="215" y="38" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">14.4% Pass</text>

              <!-- Bar 3: EComAgentBench Multi-Constraint -->
              <text x="10" y="57" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">EComAgentBench Constraint [4]</text>
              <rect x="150" y="48" width="171" height="12" rx="2" fill="#3f3f46"/>
              <text x="328" y="57" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">42.8% Pass</text>

              <!-- Bar 4: Visa Consulting Flow Benchmark -->
              <text x="10" y="76" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Visa Consulting Checkout Flow [3]</text>
              <rect x="150" y="67" width="229" height="12" rx="2" fill="#27272a"/>
              <text x="386" y="76" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">57.2% Pass</text>

              <!-- Bar 5: Tool-Lab API-Based Execution -->
              <text x="10" y="95" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Tool-Lab Structured API Calls [5]</text>
              <rect x="150" y="86" width="330" height="12" rx="2" fill="#09090b"/>
              <text x="486" y="95" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">82.4% Pass</text>

              <!-- Scale baseline -->
              <line x1="150" y1="102" x2="480" y2="102" stroke="#e4e4e7" stroke-width="1"/>
            </svg>
          </div>

          <!-- Bottom: Benchmark Detail Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 5.1 - Academic Benchmark Specifications and Methodology</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Rigorous multi-environment evaluations of autonomous agent purchasing accuracy</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Benchmark Name</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Institution / Author</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Tested Interface</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Observed Failure Modes</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">VisualWebArena</td>
                  <td style="padding: 3px 6px;">CMU & Stanford (Koh, ACL 2024)</td>
                  <td style="padding: 3px 6px;">Multimodal Visual Web</td>
                  <td style="padding: 3px 6px; color: #18181b;">Visual occlusion, dynamic popups [2]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">WebArena</td>
                  <td style="padding: 3px 6px;">Carnegie Mellon (Zhou et al.)</td>
                  <td style="padding: 3px 6px;">DOM Tree & HTML Parsing</td>
                  <td style="padding: 3px 6px; color: #18181b;">Complex form submission errors [1]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Visa Checkout Flow</td>
                  <td style="padding: 3px 6px;">Visa Consulting & Analytics (2026)</td>
                  <td style="padding: 3px 6px;">Commercial Web Gateways</td>
                  <td style="padding: 3px 6px; color: #18181b;">3DS challenges, CVV recalculations [3]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">EComAgentBench</td>
                  <td style="padding: 3px 6px;">Shopee Research (Du et al., 2025)</td>
                  <td style="padding: 3px 6px;">Multi-Constraint Search</td>
                  <td style="padding: 3px 6px; color: #18181b;">Trade-off hallucination across SKUs [4]</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Tool-Lab</td>
                  <td style="padding: 3px 6px;">Wadi & Ma (2025)</td>
                  <td style="padding: 3px 6px;">Structured OpenAPI Endpoints</td>
                  <td style="padding: 3px 6px; color: #18181b;">Schema mismatch on tax calculations [5]</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Benchmark Takeaway.</strong>
              Headless browser automation fails in over 80% of complex real-world checkout trials. Exposing structured API endpoints increases transaction completion to 82.4%, isolating merchants from frontend fragility [1, 2, 5].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] S. Zhou et al., WebArena (CMU, 2024); [2] J. Y. Koh et al., VisualWebArena (ACL 2024); [3] Visa Consulting & Analytics (2026); [4] Y. Du et al., Shopee Research (2025); [5] Tool-Lab Evaluation Suite (2025); [6] B. J. Dietvorst, Wharton (2018); [7] J. M. Logg, Harvard Business School (2019).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Accuracy Benchmarks and Behavioral Science")}
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
            <strong>The Scale of Automated Web Traffic (Imperva Threat Research).</strong> According to the Imperva Bad Bot Report (2024-2025 [2]), automated traffic accounts for 49.6% of total internet traffic. Within this automated volume, 32.0% represents malicious scrapers, inventory hoarding bots, and credential stuffers, while verified AI agents represent approximately 4.8%. Merchants must establish technical mechanisms to distinguish legitimate buyer agents from predatory scrapers without creating collateral damage for human shoppers.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Distinguishing Buyer Agents from Bad Bots (Okta Findings).</strong> As established in the 2026 Customer Identity Trends Report by Okta and Auth0 [3], treating agentic traffic like traditional bot fraud destroys valuable demand. Because third-party AI agents convert shoppers at three to five times the rate of human storefront visitors, blocking automated traffic with blunt IP rate limits turns away high-intent buyers. Making agentic commerce viable requires runtime, fine-grained access controls and non-human identity governance. Retailers must migrate from IP-based heuristics to cryptographic client authentication, enforcing least-privilege token scoping and zero standing privileges.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Adversarial Vulnerabilities and Prompt Injections (AgentDojo Research).</strong> Automated agents present acute security vulnerabilities when evaluating untrusted third-party content. In security research by Debenedetti et al. (AgentDojo, 2024 [4]), indirect prompt injections hidden within user reviews, product descriptions, or markdown formatting achieved a 34.2% attack success rate. Attackers embed invisible text instructions (such as zero-font CSS styling documented in Whispers of Wealth [5]) that instruct the purchasing agent to alter shipping destinations or substitute premium SKUs for unauthorized items. Hardening merchant endpoints against prompt injections requires strict input sanitization and deterministic schema isolation.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Traffic Classification Architecture -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 6.1 - CRYPTOGRAPHIC MACHINE TRAFFIC CLASSIFICATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Multi-stage WAF routing separating malicious scrapers from authenticated buyer agents</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- Incoming Traffic Funnel -->
              <rect x="4" y="24" width="76" height="60" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="42" y="44" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b" text-anchor="middle">Inbound Web</text>
              <text x="42" y="55" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="middle">49.6% Bots [2]</text>
              <text x="42" y="66" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">50.4% Human</text>

              <!-- Arrow into WAF -->
              <line x1="80" y1="54" x2="108" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="108,51 114,54 108,57" fill="#09090b"/>

              <!-- Central WAF Filter Engine -->
              <rect x="114" y="10" width="114" height="88" rx="3" fill="#f4f4f5" stroke="#09090b" stroke-width="1.2"/>
              <text x="171" y="24" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">WAF Verification</text>
              <line x1="124" y1="30" x2="218" y2="30" stroke="#e4e4e7" stroke-width="1"/>
              <text x="124" y="44" font-family="Inter, sans-serif" font-size="5.8" fill="#27272a">1. TLS Fingerprint Check</text>
              <text x="124" y="56" font-family="Inter, sans-serif" font-size="5.8" fill="#27272a">2. RFC 9421 Signature</text>
              <text x="124" y="68" font-family="Inter, sans-serif" font-size="5.8" fill="#27272a">3. Non-Human Identity Auth</text>
              <text x="124" y="80" font-family="Inter, sans-serif" font-size="5.8" fill="#27272a">4. Agent Token Validation</text>

              <!-- 3 Output Arrows -->
              <!-- Top Arrow: Malicious Bots -->
              <line x1="228" y1="30" x2="268" y2="20" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="266,17 274,18 268,23" fill="#09090b"/>
              <rect x="274" y="8" width="180" height="24" rx="2" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="282" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Malicious Scraper (32.0%) - Blocked</text>
              <text x="282" y="28" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">Inventory hoarders, scrapers terminated at edge</text>

              <!-- Middle Arrow: Verified Buyer Agents -->
              <line x1="228" y1="54" x2="270" y2="54" stroke="#09090b" stroke-width="1.5"/>
              <polygon points="268,51 274,54 268,57" fill="#09090b"/>
              <rect x="274" y="42" width="180" height="26" rx="2" fill="#09090b"/>
              <text x="282" y="54" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">Verified Buyer Agent (4.8%) - 3x-5x Conversion</text>
              <text x="282" y="63" font-family="Inter, sans-serif" font-size="5.5" fill="#d4d4d8">Routed directly to headless ACP checkout endpoints</text>

              <!-- Bottom Arrow: Human Shoppers -->
              <line x1="228" y1="78" x2="268" y2="88" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="268,85 274,90 266,91" fill="#09090b"/>
              <rect x="274" y="76" width="180" height="24" rx="2" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="282" y="88" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Standard Human Browser (50.4%)</text>
              <text x="282" y="96" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">Routed to standard visual React / Next.js storefront</text>
            </svg>
          </div>

          <!-- Bottom: Attack Vectors Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 6.1 - Threat Vectors and Mitigation Controls in Agentic Transactions</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Adversarial vulnerabilities identified in recent empirical evaluations</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Threat Vector</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Mechanism</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Observed Risk</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Enterprise Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Indirect Prompt Injection</td>
                  <td style="padding: 3px 6px;">Malicious review markdown instructions</td>
                  <td style="padding: 3px 6px; color: #18181b;">34.2% attack success [4]</td>
                  <td style="padding: 3px 6px;">Strip raw text; pass pure JSON-LD schemas</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Invisible CSS Overrides</td>
                  <td style="padding: 3px 6px;">Zero-font size text hidden from humans</td>
                  <td style="padding: 3px 6px; color: #18181b;">Whispers of Wealth [5]</td>
                  <td style="padding: 3px 6px;">Server-rendered API feeds; no DOM scraping</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Credential Replay</td>
                  <td style="padding: 3px 6px;">Agent token interception on transit</td>
                  <td style="padding: 3px 6px; color: #18181b;">Carding & account takeover</td>
                  <td style="padding: 3px 6px;">RFC 9421 HTTP Message Signatures</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Cart Desynchronization</td>
                  <td style="padding: 3px 6px;">Unbounded price changes mid-flight</td>
                  <td style="padding: 3px 6px; color: #18181b;">Unauthorized checkout amounts</td>
                  <td style="padding: 3px 6px;">Strict AP2 Closed Mandate spend limits</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Inventory Exhaustion</td>
                  <td style="padding: 3px 6px;">High-frequency cart reservations</td>
                  <td style="padding: 3px 6px; color: #18181b;">Denial of stock to humans</td>
                  <td style="padding: 3px 6px;">Idempotency tokens + 10m cart release limits</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Security Takeaway.</strong>
              With legitimate AI agents converting at 3x to 5x the rate of human shoppers [3], blunt WAF blocking destroys revenue. Cryptographic non-human identity attestation lets legitimate agents in while terminating malicious scrapers at the edge [1, 2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Visa Acceptance Solutions (2025-2026); [2] Imperva Bad Bot Report (2024-2025); [3] Okta Customer Identity Trends Report (2026); [4] E. Debenedetti et al., AgentDojo (2024); [5] Whispers of Wealth Security Analysis (2025).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Machine Traffic Verification and Fraud Defense")}
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
            <strong>The Shortlist Gatekeeper Risk (SAP Emarsys Analysis).</strong> Research by SAP Emarsys (2026 [2]) identifies the gatekeeping role of AI assistants. In agentic commerce, AI models act as algorithmic gatekeepers that curate narrow shortlists based on machine-readable constraints. If a merchant's structured catalog data, inventory levels, or return terms fail to satisfy the agent's programmatic criteria, the brand is excluded from consideration entirely. Under this model, consumers complete transactions without ever visiting or viewing the merchant's physical storefront, creating severe commercial invisibility for unprepared retailers.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Three-Layer ACO Framework (Semrush & BCG Analysis).</strong> In its analysis of Agentic Commerce Optimization (ACO), Semrush (2026 [3]) outlines a three-layer technical framework. Layer 1 guarantees crawler accessibility by preventing over-aggressive bot firewalls from blocking legitimate assistant IP ranges. Layer 2 standardizes product attribute normalization, ensuring that field names (such as dimensions, weight, and battery life) align with structured feeds. Layer 3 integrates protocol checkout execution. BCG research [4] indicates that 59% of US consumer brands currently lack meaningful agentic capabilities, leaving early adopters an open window to gain algorithmic market share.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Position Bias Field Evidence (Ursu, Chicago Booth).</strong> In econometric field research analyzing consumer search on randomized result rankings, R. M. Ursu (University of Chicago Booth School of Business, 2016 [5]) found that higher search rank strongly drives initial clicks and consideration. However, conditional on an item receiving a click, position rank exhibited no detectable direct effect on eventual booking conversion. For agentic commerce, this indicates that appearing in an agent's consideration set is required for discovery, but final conversion is determined by deterministic product attributes (price, delivery time, return terms).
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

          <!-- Bottom: Catalog Readiness Checklist (Incorporating 100,000 domain study) -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 7.1 - Public Web Readiness Across 100,000 Domains</div>
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
              Reference Sources [1] V. R. Vatsa, "Web Access and Agent Interfaces - A 100,000 Domain Study", Tranco Sample, Zenodo record 24121071 (2026); [2] SAP Emarsys, "What is Agentic Commerce?" (2026); [3] Semrush Research, "Agentic Commerce Optimization" (2026); [4] Boston Consulting Group (2026); [5] R. M. Ursu, Chicago Booth (2016).
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
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Ecosystem Context</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Strategic Ecosystem Dynamics and Platform Moats</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Front-End Demand Aggregation vs. Merchant Disintermediation.</strong> Agentic commerce introduces a profound power reallocation between consumer touchpoints and retail merchants. As analyzed in Ben Thompson's Aggregation Theory (Stratechery [1]) and Benedict Evans' retail technology research [2], frontier model providers (such as OpenAI, Anthropic, and Google) control the conversational intent interface. By managing product evaluation and payment delegation directly within the assistant, aggregators turn merchant websites into headless fulfillment backends.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Demand of One Model (Accenture Research).</strong> Research from Accenture Strategy (FY26 [3]) details the arrival of the "Demand of One", where retail commerce transitions from mass segment advertising to individualized programmatic negotiation. Agents do not browse marketing homepages; they query specific inventory databases with strict buyer constraints. Retailers unable to programmatically quote customized pricing, delivery options, and bundle structures in real time are excluded from consideration.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Brand Identity Compression and Visual Neutralization.</strong> In an agent-dominated purchasing journey, traditional brand differentiation assets (such as lifestyle imagery, emotional storytelling, and packaging design) are neutralized into deterministic JSON attribute schemas. When purchasing decisions are made by language models optimizing for price, availability, and return terms, brand premiums compress unless merchants cultivate programmatic trust, authenticated customer accounts, or proprietary product exclusivity.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Sustainable Merchant Defensibility.</strong> To prevent complete margin compression, enterprise merchants must establish defensive architectural moats. These include proprietary SKU catalog ownership, exclusive distributor agreements, authenticated loyalty programs offering algorithmic pricing discounts, direct webhook APIs, and closed mandate partnerships with major agent aggregators.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Platform Value Flow -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 8.1 - VALUE POOL REALLOCATION IN AGENTIC COMMERCE</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Margin and relationship migration across the commerce supply chain</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 3 Supply Chain Tiers -->
              <!-- Tier 1: Front-end Aggregators -->
              <rect x="8" y="10" width="134" height="88" rx="3" fill="#09090b"/>
              <text x="16" y="24" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">AI Aggregators</text>
              <text x="16" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#a1a1aa">OpenAI, Google, Anthropic</text>
              <line x1="16" y1="42" x2="134" y2="42" stroke="#27272a" stroke-width="1"/>
              <text x="16" y="54" font-family="Inter, sans-serif" font-size="6" fill="#e4e4e7">Owns consumer intent</text>
              <text x="16" y="65" font-family="Inter, sans-serif" font-size="6" fill="#e4e4e7">Extracts affiliate/ad toll</text>
              <text x="16" y="76" font-family="Inter, sans-serif" font-size="6" fill="#e4e4e7">High margin retention</text>
              <rect x="16" y="82" width="118" height="12" rx="2" fill="#27272a"/>
              <text x="75" y="91" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Intent Monopoly</text>

              <!-- Arrow 1 -> 2 -->
              <line x1="142" y1="54" x2="160" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="160,51 166,54 160,57" fill="#09090b"/>

              <!-- Tier 2: Payment & Token Rails -->
              <rect x="166" y="10" width="134" height="88" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="174" y="24" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Payment Rails</text>
              <text x="174" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#71717a">Visa, Stripe, Coinbase</text>
              <line x1="174" y1="42" x2="292" y2="42" stroke="#f4f4f5" stroke-width="1"/>
              <text x="174" y="54" font-family="Inter, sans-serif" font-size="6" fill="#27272a">Issues cryptographic tokens</text>
              <text x="174" y="65" font-family="Inter, sans-serif" font-size="6" fill="#27272a">Enforces mandate rules</text>
              <text x="174" y="76" font-family="Inter, sans-serif" font-size="6" fill="#27272a">Defends interchange fee</text>
              <rect x="174" y="82" width="118" height="12" rx="2" fill="#f4f4f5"/>
              <text x="233" y="91" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#09090b" text-anchor="middle">Trust Settlement</text>

              <!-- Arrow 2 -> 3 -->
              <line x1="300" y1="54" x2="318" y2="54" stroke="#09090b" stroke-width="1.2"/>
              <polygon points="318,51 324,54 318,57" fill="#09090b"/>

              <!-- Tier 3: Merchants & Brands -->
              <rect x="324" y="10" width="128" height="88" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2"/>
              <text x="332" y="24" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Merchants & Brands</text>
              <text x="332" y="36" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#71717a">Retailers, CPG Brands</text>
              <line x1="332" y1="42" x2="444" y2="42" stroke="#f4f4f5" stroke-width="1"/>
              <text x="332" y="54" font-family="Inter, sans-serif" font-size="6" fill="#27272a">Manages physical inventory</text>
              <text x="332" y="65" font-family="Inter, sans-serif" font-size="6" fill="#27272a">Fulfills logistics/returns</text>
              <text x="332" y="76" font-family="Inter, sans-serif" font-size="6" fill="#27272a">Risk of commoditization</text>
              <rect x="332" y="82" width="112" height="12" rx="2" fill="#09090b"/>
              <text x="388" y="91" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#ffffff" text-anchor="middle">Execution Layer</text>
            </svg>
          </div>

          <!-- Bottom: Strategic Quadrant Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 8.1 - Merchant Competitive Positioning Matrix</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Strategic trade-offs across distribution control, margin capture, and technical investment</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Strategic Posture</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Archetype</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Competitive Advantage</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Vulnerability</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Proprietary Ecosystem</td>
                  <td style="padding: 3px 6px;">Amazon, Apple, Walmart</td>
                  <td style="padding: 3px 6px;">Closed-loop data and hardware</td>
                  <td style="padding: 3px 6px; color: #18181b;">Regulatory scrutiny under DMA</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Open Protocol Native</td>
                  <td style="padding: 3px 6px;">Shopify, commercetools</td>
                  <td style="padding: 3px 6px;">Rapid integration across all AI agents</td>
                  <td style="padding: 3px 6px; color: #18181b;">Disintermediation of direct visits</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">D2C Category Specialist</td>
                  <td style="padding: 3px 6px;">Luxury, Custom Apparel</td>
                  <td style="padding: 3px 6px;">High-regret brand insulation</td>
                  <td style="padding: 3px 6px; color: #18181b;">Limited scale; high search friction</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Commodity Reseller</td>
                  <td style="padding: 3px 6px;">Wholesale, Office Supplies</td>
                  <td style="padding: 3px 6px;">Low-cost supply chain operations</td>
                  <td style="padding: 3px 6px; color: #18181b;">Terminal margin collapse to zero</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Commodity resellers face intense margin compression as agents optimize for price. Sustainable defensibility requires proprietary SKU access or direct authenticated membership programs [1, 2, 3].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Ben Thompson, Aggregation Theory (Stratechery); [2] Benedict Evans, Independent Tech Analysis; [3] Accenture Strategy, "Agentic Commerce - Make Your Brand Unmissable" (FY26).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Strategic Ecosystem Dynamics and Platform Moats")}
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
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Action Program</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">18-Month Enterprise Implementation Roadmap</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 1 - Catalog Machine-Readability & Discovery (Months 1-3).</strong> The initial phase establishes basic machine readiness across public web assets. Merchants must audit their digital properties against the 100,000 domain benchmarks [1], deploying structured Schema.org JSON-LD definitions with validated Offer, Product, and MerchantReturnPolicy schemas. Organizations should publish a declared /.well-known/llms.txt manifest to guide search crawlers and calibrate WAF policies to ensure legitimate AI assistant IP ranges are classified without triggering CAPTCHA blocks.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 2 - Protocol Integration & Tokenized Checkout (Months 4-9).</strong> The intermediate phase transitions from passive indexing to active transaction execution. Engineering teams should deploy OpenAPI 3.1 specifications and Model Context Protocol (MCP) tool endpoints for real-time inventory verification and dynamic shipping calculation. Checkout pipelines must adopt the Stripe & OpenAI Agentic Commerce Protocol (ACP) or Google UCP specifications, integrating Shared Payment Tokens (SPTs) to eliminate primary account number exposure and virtual card decline loops.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 3 - Autonomous Replenishment & Multi-Agent Settlement (Months 10-18).</strong> The advanced phase introduces conditional and autonomous purchasing capabilities for low-regret merchandise. Enterprises implement Coinbase AP2 Closed Mandates or Visa TAP token rails, enabling automated replenishment bounded by cryptographically enforced price ceilings. Post-purchase logistics systems must be updated to issue machine-parseable tracking webhooks and automate return label generation for agent-initiated disputes.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Legal and Regulatory Governance (Christoph Busch Analysis).</strong> As documented by Christoph Busch in Consumer Law for AI Agents (German Law Journal / Oxford [2]), autonomous agent commerce challenges established contract law. Under US Uniform Electronic Transactions Act (UETA Section 14) and the EU AI Act, transactions executed by electronic agents are legally binding upon the principal if the agent was operated with authorization. However, determining liability for hallucinated orders or algorithmic pricing glitches requires clear mandate terms. Merchants must display unambiguous terms of service defining order confirmation boundaries and cancellation policies.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: 18-Month Roadmap Gantt Chart -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 9.1 - 18-MONTH ENTERPRISE DEPLOYMENT TIMELINE</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Phased implementation program from catalog optimization to autonomous settlement</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- Timeline Grid Axis -->
              <text x="140" y="14" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#71717a">M1-M3</text>
              <text x="210" y="14" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#71717a">M4-M6</text>
              <text x="280" y="14" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#71717a">M7-M9</text>
              <text x="350" y="14" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#71717a">M10-M14</text>
              <text x="420" y="14" font-family="Inter, sans-serif" font-size="6" font-weight="700" fill="#71717a">M15-M18</text>
              <line x1="140" y1="18" x2="450" y2="18" stroke="#e4e4e7" stroke-width="1"/>

              <!-- Track 1: Catalog & ACO -->
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Catalog & ACO Layer</text>
              <rect x="140" y="24" width="80" height="12" rx="2" fill="#09090b"/>
              <text x="180" y="33" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Schema & JSON-LD</text>

              <!-- Track 2: WAF & Agent Auth -->
              <text x="8" y="50" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">WAF & Identity Layer</text>
              <rect x="180" y="42" width="90" height="12" rx="2" fill="#27272a"/>
              <text x="225" y="51" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Non-Human Auth / Tokens</text>

              <!-- Track 3: APIs & Protocols -->
              <text x="8" y="68" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">API & Protocol Layer</text>
              <rect x="230" y="60" width="100" height="12" rx="2" fill="#52525b"/>
              <text x="280" y="69" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">OpenAPI & MCP Tools</text>

              <!-- Track 4: Token Settlement -->
              <text x="8" y="86" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Checkout Settlement</text>
              <rect x="290" y="78" width="100" height="12" rx="2" fill="#71717a"/>
              <text x="340" y="87" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Stripe ACP / Visa TAP</text>

              <!-- Track 5: Autonomous Procurement -->
              <text x="8" y="104" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Autonomous Engine</text>
              <rect x="360" y="96" width="90" height="12" rx="2" fill="#09090b"/>
              <text x="405" y="105" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">AP2 Closed Mandates</text>
            </svg>
          </div>

          <!-- Bottom: Governance & KPIs Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 9.1 - Phased Implementation KPIs and Resource Allocation</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Milestone criteria, target metrics, and budget distribution across 18 months</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Program Stage</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Budget Share</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary KPI</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Governance Gate</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Phase 1 - Catalog & ACO</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">40%</td>
                  <td style="padding: 3px 6px;">100% Schema.org validation</td>
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
              Executive committees must review automated agent delegation under US UETA Section 14 and EU AI Act transparency rules to ensure that cryptographic mandates establish legally enforceable contracts [2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Reference Sources [1] V. R. Vatsa, Zenodo record 24121071 (2026); [2] Christoph Busch, "Consumer Law for AI Agents", German Law Journal (Cambridge / Oxford); [3] McKinsey & Company (2025); [4] Bain & Company Technology Practice (2025); [5] Gartner IT Symposium Executive Findings (2025-2026).
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
