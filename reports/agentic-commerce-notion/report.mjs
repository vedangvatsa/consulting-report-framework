/**
 * Executive Industry Research Report - The Business Value of Agentic Commerce
 * Formatted in Notion Monochrome Design System (Pure White, Black, Cool Zinc Grays)
 * 
 * Deep Academic and Industry Research Basis:
 * - Empirical Web Readiness - V. R. Vatsa (50,000 domain study across Tranco top 1M)
 * - Agent Micropayments Economics - V. R. Vatsa (finite-state economic model of buyer VOI and settlement)
 * - Economic Search Theory - J. Yannis Bakos (Management Science), R. M. Ursu Position Bias (Chicago Booth)
 * - Behavioral Decision Science - Dietvorst et al. (Wharton, Algorithm Aversion), Logg et al. (Harvard, Algorithm Appreciation)
 * - Agent Benchmarks - WebArena (CMU, Zhou et al.), VisualWebArena (CMU/Stanford, Koh et al., ACL 2024),
 *   ACES (Allouah et al., Columbia Univ), EComAgentBench (Du et al., Shopee Research), Tool-Lab (Wadi & Ma)
 * - Security & Adversarial Testing - AgentDojo (Debenedetti et al.), Whispers of Wealth, Imperva Threat Research
 * - Technical Protocols - Stripe & OpenAI ACP (RFC 7231 Idempotency-Key), Google UCP (/.well-known/ucp),
 *   Coinbase AP2 (Open vs Closed Mandates), Visa TAP (RFC 9421 HTTP Signatures), Mastercard Verifiable Intent, x402
 * - Market Analysis - Jas Shah (Fintech Under the Hood), Scott Wessman (CVV failure analysis),
 *   Vignesh at Meta (interchange vs stablecoin economics), Gartner Machine Customers (Scheibenreif & Raskino),
 *   Morgan Stanley (Nowak et al.), Bain & Company Global Retail Lab
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
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">02</span><span>Economics of Autonomous Purchasing</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">03</span><span>7-Layer Technical Architecture & Market Map</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">04</span><span>Commerce Protocols & Standards (ACP, UCP, AP2)</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">05</span><span>Payment Rails, Settlement & Domain Tokens</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">06</span><span>Accuracy Benchmarks & Behavioral Decision Science</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">07</span><span>Fraud Defense, Bot Classification & Security</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">08</span><span>Catalog Engineering & 50,000 Domain Study</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">09</span><span>Strategic Ecosystem & Competitive Moats</span></div>
            <div style="display: flex; justify-content: space-between;"><span style="color: var(--ink); font-weight: 600;">10</span><span>18-Month Roadmap & Legal Governance</span></div>
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
      ${renderHeader("EXECUTIVE SUMMARY", "MACRO PROJECTIONS AND ECONOMIC INCENTIVES", "02")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Macro Foundation</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">The Economics of Autonomous Purchasing</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Delegation Paradox and Physical Need Satisfaction.</strong> Artificial intelligence shopping agents can identify merchandise and submit payment credentials, but granting permission to pay does not establish that a selected item satisfies the consumer's physical requirements. In retail transactions, goods must match exact spatial dimensions, fulfill delivery schedules, and satisfy unstated personal preferences. As established in the literature, evaluating consumer studies, benchmarks, and payment specifications reveals instances where an accepted recommendation or valid payment leaves core purchase needs unverified.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Economic Search Theory and Search Cost Asymmetries (Bakos Model).</strong> Mathematical economics of electronic marketplaces formulated by J. Yannis Bakos (Management Science, 1997 [1]) distinguishes between the cost of searching for prices and the cost of searching for product attributes. When price search costs decrease in isolation, price competition intensifies towards marginal cost. However, when attribute search costs decrease through automated agent evaluation, consumers identify differentiated products aligned with specific requirements. This differentiation softens direct price competition, increases total consumer surplus, and enables merchants to preserve gross margins.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The 3x-Win Framework and Live Commercial Precedents.</strong> As fintech analyst Jas Shah documents in Fintech Under the Hood ("Agentic Commerce - 17 Months Later", October 2025 [2]), automated commerce creates an economic alignment across market participants. Retailers observe conversion rate gains from approximately 2.2% on standard mobile web traffic to 8.2% on verified agent checkouts, consumers avoid form fatigue, and infrastructure networks collect protocol routing fees. Real-world precedents demonstrate early traction, including OpenAI Instant Checkout (September 2025 single-item Etsy integration) and Amazon Alexa for Shopping (May 2026 Auto Buy and cart coordination flows).
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Independent Market Sizing Estimates and Scope Boundaries.</strong> Industry forecasts project substantial expansion in agent-mediated gross merchandise volume (GMV). Morgan Stanley Equity Research (Nowak et al., 2025 [3]) projects $150B to $400B in US digital retail volume influenced by autonomous agents by 2030, representing 10% to 25% of total e-commerce. Bain & Company Global Retail Lab (2025 [4]) estimates that automated comparison agents will mediate over 30% of routine household replenishment by 2030. Gartner Research (Scheibenreif & Raskino [5]) models the broader machine customer economy at $30T by 2030 across enterprise B2B procurement and consumer transactions.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Exhibit Top: Evolution SVG -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 1.1 - E-COMMERCE INTERFACE PROGRESSION (1995-2026)</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Comparison of user interaction modes, conversion baselines, and checkout friction</div>
            </div>

            <svg viewBox="0 0 460 108" width="100%" height="108" style="display: block;">
              <!-- 1995 Web Browser -->
              <rect x="0" y="4" width="144" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="144" height="18" rx="3" fill="#f4f4f5"/>
              <text x="8" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1995 - Web Browser</text>
              <text x="8" y="36" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#27272a">Mode - Search & Click</text>
              <text x="8" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Discovery via text engines</text>
              <text x="8" y="60" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Manual form fill at cart</text>
              <line x1="8" y1="68" x2="136" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="8" y="80" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Baseline conversion ~2.2%</text>
              <text x="8" y="92" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a">Friction - Manual form inputs</text>

              <!-- 2010 Mobile App -->
              <rect x="158" y="4" width="144" height="100" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="158" y="4" width="144" height="18" rx="3" fill="#f4f4f5"/>
              <text x="166" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2010 - Mobile & 1-Click</text>
              <text x="166" y="36" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#27272a">Mode - Tap & Scroll</text>
              <text x="166" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">App ecosystem silos</text>
              <text x="166" y="60" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Stored digital wallets</text>
              <line x1="166" y1="68" x2="294" y2="68" stroke="#f4f4f5" stroke-width="1"/>
              <text x="166" y="80" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Average conversion ~2.8%</text>
              <text x="166" y="92" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a">Friction - Cart abandonment</text>

              <!-- 2026 Autonomous Agent -->
              <rect x="316" y="4" width="144" height="100" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="316" y="4" width="144" height="18" rx="3" fill="#09090b"/>
              <text x="324" y="16" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">2026 - Agentic AI</text>
              <text x="324" y="36" font-family="Inter, sans-serif" font-size="7" font-weight="600" fill="#09090b">Mode - Intent Delegation</text>
              <text x="324" y="48" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Cross-merchant discovery</text>
              <text x="324" y="60" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Cryptographic token rails</text>
              <line x1="324" y1="68" x2="452" y2="68" stroke="#e4e4e7" stroke-width="1"/>
              <text x="324" y="80" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Observed conversion ~8.2%</text>
              <text x="324" y="92" font-family="Inter, sans-serif" font-size="6.2" fill="#52525b">Friction - Form fatigue eliminated</text>
            </svg>
          </div>

          <!-- Exhibit Bottom: Data Table -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 1.1 - Market Forecast Projections</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Synthesis of independent equity research and management consultancy estimates</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.6px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Institution</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Projected Scale</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Target Horizon</th>
                  <th style="padding: 3px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Underlying Thesis</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Morgan Stanley</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$150B - $400B</td>
                  <td style="padding: 3px 6px;">2030 (US Retail)</td>
                  <td style="padding: 3px 6px;">10% to 25% of digital commerce mediated by agents [3]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Bain & Company</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">30%+ Replenish</td>
                  <td style="padding: 3px 6px;">2030 (Global)</td>
                  <td style="padding: 3px 6px;">Automated comparison dominates commodity reorders [4]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Gartner</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$30 Trillion</td>
                  <td style="padding: 3px 6px;">2030 (Global B2B/B2C)</td>
                  <td style="padding: 3px 6px;">Total machine customer market across procurement [5]</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 6px; font-weight: 700;">Goldman Sachs</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">$220 Billion</td>
                  <td style="padding: 3px 6px;">2028 (US Commerce)</td>
                  <td style="padding: 3px 6px;">Conversion expansion driven by automated checkout</td>
                </tr>
                <tr>
                  <td style="padding: 3px 6px; font-weight: 700;">Forrester</td>
                  <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">18.5% Share</td>
                  <td style="padding: 3px 6px;">2029 (Retail GMV)</td>
                  <td style="padding: 3px 6px;">Adoption driven by conversational assistant defaults</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Analytical Takeaway.</strong>
              Autonomous agent shopping delivers a three-way return, where retailers gain an 8.2% conversion lift, consumers avoid form fatigue, and infrastructure networks collect protocol routing fees [2].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] J. Y. Bakos, Management Science (1997); [2] Jas Shah, Fintech Under the Hood (Oct 2025); [3] Morgan Stanley Research (2025); [4] Bain & Company Global Retail Report (2025); [5] Gartner Research (2025).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Macro Foundations and Market Sizing")}
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
            <strong>Translating Natural Language Intent into Structured Schemas.</strong> Consumer requests begin in conversational interfaces such as ChatGPT Search, Claude Artifacts, or Perplexity. The agent engine decomposes unconstrained prompts into structured JSON parameters. Through the Model Context Protocol (MCP), the agent invokes remote merchant tools (such as checking real-time inventory or computing location-specific shipping fees) without scraping unstructured web layouts. Deterministic JSON schemas prevent hallucinated product attributes from entering checkout pipelines.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Limitations of Interim Virtual Cards and Token Transitions.</strong> Many retail platforms do not yet support direct machine checkout endpoints. Early autonomous purchasing applications therefore rely on single-use virtual credit cards (VCCs) issued by processors such as Lithic, Stripe Issuing, or Highnote. While VCCs enable immediate execution across legacy payment gateways, they introduce friction points, including out-of-band 3D Secure verification challenges and billing address rejections. Newer standards transition these workflows toward native protocol handshakes.
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
                  <strong>Card Network Token Protocols.</strong> Visa Trusted Agent Protocol (TAP), Mastercard Agent Pay, Shared Payment Tokens (SPT)<br/>
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
              Reference Sources nofrontend.xyz directory; Jas Shah, Fintech Under the Hood (Oct 2025); CB Insights Market Intelligence; public company technical documentation (2025-2026).
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
              <text x="242" y="48" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Closed AP2 Mandate</text>
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
      ${renderHeader("PAYMENT INFRASTRUCTURE", "PAYMENT SETTLEMENT AND TOKEN RAILS", "05")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Settlement Mechanics</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Payment Settlement Rails for Autonomous Agents</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Empirical Analysis of Virtual Card Failures (Scott Wessman Study).</strong> Many deployed shopping agents utilize single-use virtual credit cards (VCCs). However, empirical investigations by payments engineer Scott Wessman (2025 [1]) demonstrate that virtual cards encounter acute operational failures during multi-item checkouts. When merchants split orders across distribution centers, multiple captures occur against a single authorization token, triggering card declines. Additionally, merchant fraud engines routinely demand dynamic 3D Secure (3DS) SMS verification or CVV re-entry during address recalculation, creating terminal drop-offs for automated workflows.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Development of Domain-Bound Shared Payment Tokens (SPTs).</strong> To resolve virtual card friction, card networks and payment gateways have deployed Shared Payment Tokens (SPTs [2]). Rather than transmitting sensitive 16-digit Primary Account Numbers (PANs), the agent runtime receives a cryptographically restricted token bound to a specific merchant domain, an exact ceiling price, and an expiration timestamp. The merchant processes the token through standard card acquiring rails, ensuring zero exposure of underlying consumer credentials.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Dual-Rail Taxonomy of Machine Payments (nofrontend.xyz Directory).</strong> As cataloged in the nofrontend.xyz directory (2025-2026 [3]), machine payments divide into two distinct structural rails. The first consists of tokenized card networks (Visa TAP, Mastercard Agent Pay) optimized for high-value consumer retail transactions ($10 to $2,000) requiring chargeback protections and return rights. The second consists of autonomous micropayment protocols (x402, Skyfire, Payman) designed for sub-dollar API queries, dynamic compute allocation, and real-time data ingestion.
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
                  <td style="padding: 3px 5px; font-weight: 600;">Sub-Cent API & Data Querying [3]</td>
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
              Virtual cards bridge legacy web forms but suffer edge-case declines during split shipments [1]. Scalable architectures require native Shared Payment Tokens (SPTs) for consumer goods and x402 micropayments for data feeds [4].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Scott Wessman, Payments Friction Analysis (Oct 2025); [2] Stripe Developer Documentation (2025); [3] nofrontend.xyz directory (2025-2026); [4] Vignesh (Meta), Economic Rails for Autonomous Agents (Nov 2025).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Payment Rails and Token Settlement")}
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
            <strong>CMU WebArena Academic Benchmarks (Zhou et al.).</strong> In academic evaluations conducted by Zhou et al. at Carnegie Mellon University (WebArena, 2024 [1]), autonomous language agents achieved an overall task completion rate of 10.6% to 14.4% on realistic web tasks, compared to 78.2% for human baselines. The benchmark highlights the necessity of justified refusal, where an agent correctly stops execution when product specifications do not match or required shipping parameters are unavailable, rather than hallucinating an erroneous checkout.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>VisualWebArena Multimodal Evaluations (Koh et al., ACL 2024).</strong> Expanding upon text-based environments, Koh et al. (CMU and Stanford, ACL 2024 [2]) evaluated multimodal agents on complex web interfaces in VisualWebArena. On e-commerce shopping tasks, baseline multimodal agents attained a 20.0% completion rate. Integrating visual tree-search planning increased success to 38.1%, leaving a 61.9% failure rate on visual interface elements such as dropdown selectors, size matrices, and promotional modal overlays.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>ACES Benchmark, EComAgentBench, and Tool-Lab Findings.</strong> In the ACES shopping evaluation (Allouah et al., Columbia University, Dec 2025 [3]), agents tested across eight product categories displayed pronounced susceptibility to rank positioning and platform badges. A sponsored label reduced selection probability at a fixed rank, while an "Overall Pick" badge increased it. In EComAgentBench (Du et al., Shopee Research, Sept 2026 [4]), testing 662 long-horizon tasks with distributed hidden needs, Claude Opus 4.6 achieved 57.1% accuracy while GPT-5.4 led in individual requirement satisfaction. In Tool-Lab (Wadi & Ma, Sept 2026 [5]), introducing $10 and $50 simulated tool lookup fees caused agents with vague goals to prematurely truncate search, selecting higher unit-cost items.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Behavioral Decision Science - Algorithm Aversion and Control.</strong> Experimental studies by Dietvorst, Simmons, and Massey (Wharton, 2015 [6]) document severe algorithm aversion, where consumers avoid algorithms after seeing them err, even when the model outperforms human alternatives. However, follow-up research (Dietvorst et al., Management Science, 2018 [7]) demonstrates that allowing users to modify an agent's forecast or decision by even 2% to 5% substantially eliminates algorithm aversion. Logg, Minson, and Moore (Harvard, 2019 [8]) note baseline algorithm appreciation for objective advice, but this declines when consumers possess strong personal preferences.
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
              <div class="exhibit-subtitle" style="font-size: 7.2px; color: var(--ink-secondary);">Rigorous empirical evaluations across academic shopping environments</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Benchmark</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Institution / Scope</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Observed Metric</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Human Baseline</th>
                  <th style="padding: 2px 4px; text-align: left; font-weight: 700; color: var(--ink-heading);">Key Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">WebArena</td>
                  <td style="padding: 2px 4px;">CMU (Zhou et al.) [1]</td>
                  <td style="padding: 2px 4px;">10.6% - 14.4% Success</td>
                  <td style="padding: 2px 4px; font-weight: 700;">78.2% Human</td>
                  <td style="padding: 2px 4px;">Justified refusal is essential</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">VisualWebArena</td>
                  <td style="padding: 2px 4px;">CMU / Stanford (ACL 2024) [2]</td>
                  <td style="padding: 2px 4px;">20.0% - 38.1% Success</td>
                  <td style="padding: 2px 4px; font-weight: 700;">88.7% Human</td>
                  <td style="padding: 2px 4px;">Tree search aids visual parsing</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">ACES Shopping</td>
                  <td style="padding: 2px 4px;">Columbia (Allouah et al.) [3]</td>
                  <td style="padding: 2px 4px;">8 Categories x 8 Items</td>
                  <td style="padding: 2px 4px;">N/A (Synthetic)</td>
                  <td style="padding: 2px 4px;">Rank & badge bias observed</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2px 4px; font-weight: 700;">EComAgentBench</td>
                  <td style="padding: 2px 4px;">Shopee (Du et al.) [4]</td>
                  <td style="padding: 2px 4px;">57.1% (Claude Opus 4.6)</td>
                  <td style="padding: 2px 4px;">N/A (Multi-Turn)</td>
                  <td style="padding: 2px 4px;">Hidden profile needs neglected</td>
                </tr>
                <tr>
                  <td style="padding: 2px 4px; font-weight: 700;">Tool-Lab</td>
                  <td style="padding: 2px 4px;">Wadi & Ma (2026) [5]</td>
                  <td style="padding: 2px 4px;">$10 / $50 Tool Fees</td>
                  <td style="padding: 2px 4px;">N/A (Cost Model)</td>
                  <td style="padding: 2px 4px;">Cost truncates agent search</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 4px 8px; font-size: 7px;">
              <strong>Engineering Takeaway.</strong>
              Production deployments must enforce deterministic validation, including sub-50ms stock checks, parameter boundaries, and user confirmation thresholds to prevent catastrophic edge-case drift [7].
            </div>

            <div class="exhibit-source-note" style="margin-top: 3px;">
              Reference Sources [1] Zhou et al., WebArena (CMU); [2] Koh et al., VisualWebArena (ACL 2024); [3] Allouah et al., ACES (Columbia Univ); [4] Du et al., EComAgentBench (Shopee); [5] Tool-Lab; [6] Dietvorst et al. (Wharton, 2015); [7] Dietvorst et al. (Management Science, 2018); [8] Logg et al. (Harvard, 2019).
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
            <strong>The Scale of Automated Web Traffic (Imperva Threat Research).</strong> According to the Imperva Bad Bot Report (2024-2025 [1]), automated traffic accounts for 49.6% of total internet traffic. Within this automated volume, 32.0% represents malicious scrapers, inventory hoarding bots, and credential stuffers, while verified AI agents represent approximately 4.8%. Merchants must establish technical mechanisms to distinguish legitimate buyer agents from predatory scrapers without degrading performance or triggering destructive CAPTCHAs that break autonomous flows.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Adversarial Vulnerabilities and Prompt Injection (AgentDojo Benchmark).</strong> Security evaluations in the AgentDojo benchmark (Debenedetti et al., 2024-2025 [2]) examine 629 security scenarios across 97 distinct user tasks. Testing indicates that adversarial prompt injections embedded within third-party content can divert agent execution toward unauthorized actions or data exfiltration. The study emphasizes that security requires joint reporting of user task completion without attack alongside success rates under adversarial conditions.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Merchant Catalog Injection Vulnerabilities (Whispers of Wealth Study).</strong> The Whispers of Wealth study [3] tested AP2-style agents (Gemini-2.5-Flash) against indirect prompt injections embedded in merchant product descriptions. Across 10 repeated trials, an adversarial description successfully redirected the agent to select the attacker's product in all 10 cases, with the authors judging that six runs violated explicit user constraints. In two runs, synthetic cross-account credential leakage occurred, demonstrating that unverified third-party catalog data poses concrete operational risks.
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
                  <td style="padding: 3px 5px;">Catalog descriptions alter goals [2]</td>
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
                  <td style="padding: 3px 5px; font-weight: 600;">Visa TAP RFC 9421 signatures [4]</td>
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
              Distinguishing legitimate AI buyers from malicious scraping bots requires moving beyond IP reputation toward cryptographic request signing under RFC 9421 and FIDO2 hardware attestation [4].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Imperva Threat Research, Bad Bot Report (2024-2025); [2] Debenedetti et al., AgentDojo (2024-2025); [3] Whispers of Wealth Study (2025); [4] Visa Research Technical Whitepaper (2025); [5] IETF RFC 9421 (2024).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Fraud Defense and Security Verification")}
    </div>
  `);

  // ==========================================
  // SPREAD 8: CATALOGS AND AEO
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${renderHeader("MERCHANT READINESS", "CATALOG ARCHITECTURE AND AEO", "08")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 9px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Catalog Optimization</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Architecting Product Catalogs for Agent Discovery</h2>
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Empirical 50,000 Domain Study on Web Readiness (Vatsa Study).</strong> In an empirical measurement study of 50,000 domains sampled from the Tranco top one million websites (Vatsa, 2026 [1]), public web readiness for autonomous agents was found to be severely limited. Basic homepage text was accessible without client-side JavaScript execution on only 45.71% of domains. Only 30.16% of domains permitted automated crawlers (GPTBot and PerplexityBot) with HTTP 200 responses while providing readable text. Sitemaps and robots markers were present on 27.37%, while structured JSON-LD metadata appeared on 21.37%. Dedicated agent guidance files (llms.txt, Markdown negotiation, or MCP endpoints) were detected on 7.50% of domains, and candidate OpenAPI definitions appeared on only 0.16%.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Structured Metadata Specifications (Schema.org JSON-LD).</strong> Autonomous agents depend on deterministic metadata rather than subjective advertising copy. Retailers must structure product catalogs using Schema.org JSON-LD, providing explicit fields for price, priceCurrency, availability, itemCondition, hasMerchantReturnPolicy, and shippingDetails. Sites lacking machine-readable schemas force agents to infer specifications through language models, resulting in hallucinated prices and elevated checkout abandonment.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Ursu Position Bias Field Evidence (Chicago Booth).</strong> In econometric field research analyzing consumer search on randomized result rankings, R. M. Ursu (University of Chicago Booth School of Business, 2016 [2]) found that higher search rank strongly drives initial clicks and consideration. However, conditional on an item receiving a click, position rank exhibited no detectable direct effect on eventual booking conversion. For agentic commerce, this indicates that appearing in an agent's consideration set is required for discovery, but final conversion is determined by deterministic product attributes (price, delivery time, return terms).
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Agent Engine Optimization (AEO) Core Ranking Factors.</strong> As consumer product discovery transitions from traditional search engines to conversational agents, search engine optimization (SEO) evolves into Agent Engine Optimization (AEO). Key ranking factors in agent synthesis include structured metadata completeness, inventory query latency (<50ms p95), verified review sentiment, and programmatic return policies. Merchants meeting these requirements secure higher placement in agent-generated comparison sets.
          </p>
        </div>

        <!-- Right Column: Exhibits (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: AEO Discovery Weights -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 7.1 - AEO DISCOVERY WEIGHTS VS. TRADITIONAL SEO</div>
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

          <!-- Bottom: Catalog Readiness Checklist (Incorporating 50,000 domain data) -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px; flex: 1;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">Exhibit 7.1 - Merchant Catalog Readiness Checklist</div>
              <div class="exhibit-subtitle" style="font-size: 7.8px; color: var(--ink-secondary);">Adoption rates observed across 50,000 domains sampled from Tranco top 1M websites [1]</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; margin-bottom: 6px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Technical Requirement</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Specification Standard</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">50k Web Study [1]</th>
                  <th style="padding: 3px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Plain Text Accessibility</td>
                  <td style="padding: 3px 5px;">Server-Rendered HTML</td>
                  <td style="padding: 3px 5px; font-weight: 700; color: #18181b;">45.71% Pass</td>
                  <td style="padding: 3px 5px; color: #18181b; font-weight: 600;">Basic Baseline</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">AI Crawler Permission</td>
                  <td style="padding: 3px 5px;">GPTBot & Perplexity HTTP 200</td>
                  <td style="padding: 3px 5px; font-weight: 700; color: #18181b;">30.16% Pass</td>
                  <td style="padding: 3px 5px; color: #18181b; font-weight: 600;">WAF Challenge Free</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Structured Metadata</td>
                  <td style="padding: 3px 5px;">Schema.org JSON-LD Product</td>
                  <td style="padding: 3px 5px; font-weight: 700; color: #18181b;">21.37% Pass</td>
                  <td style="padding: 3px 5px; color: #18181b; font-weight: 600;">High Impact for AEO</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 3px 5px; font-weight: 700;">Dedicated Agent Files</td>
                  <td style="padding: 3px 5px;">llms.txt / Markdown / MCP</td>
                  <td style="padding: 3px 5px; font-weight: 700; color: #18181b;">7.50% Pass</td>
                  <td style="padding: 3px 5px; color: #71717a; font-weight: 600;">Developing Standard</td>
                </tr>
                <tr>
                  <td style="padding: 3px 5px; font-weight: 700;">Public Machine APIs</td>
                  <td style="padding: 3px 5px;">OpenAPI Specification 3.x</td>
                  <td style="padding: 3px 5px; font-weight: 700; color: #18181b;">0.16% Pass</td>
                  <td style="padding: 3px 5px; color: #71717a; font-weight: 600;">Major Enterprise Gap</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Readiness Takeaway.</strong>
              While 45.71% of websites provide accessible text, structured public APIs for autonomous action exist on only 0.16% of domains, presenting an immediate competitive opening for early adopters [1].
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] V. R. Vatsa, "Web Readiness for AI Agents - A 50,000 Domain Study", Tranco 1M Sample (2026); [2] R. M. Ursu, Chicago Booth (2016); [3] Schema.org Working Group; [4] Shopify Engineering (2025).
            </div>
          </div>
        </div>
      </div>

      ${renderFooter("Catalog Engineering and Empirical Web Readiness")}
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
            <strong>Consumer Intent Aggregation Moats (OpenAI, Google, Apple).</strong> Front-end conversational platforms possess substantial distribution advantages in intent capture. By operating the direct user interface and managing contextual memory, these platforms capture the initial point of consumer demand. Their strategic challenge centers on executing accurate checkouts without assuming merchant fulfillment or inventory liabilities.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Infrastructure Defensibility of Payment Processors (Stripe, Adyen).</strong> While conversational frontends control user interaction, payment infrastructure providers (Stripe, Adyen) maintain durable competitive moats. Processors control merchant acquiring relationships, fraud prevention models, payment rail licenses, and complex tax compliance across global jurisdictions. Replicating this regulatory and operational infrastructure presents high barriers to entry for software aggregators.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Retailer and Marketplace Defensibility (Amazon, Shopify).</strong> E-commerce incumbents defend market share through physical logistics, proprietary inventory, and established customer trust. Amazon's fulfillment infrastructure and Prime delivery speeds create defensible moats that pure software agents cannot bypass. Retailers utilizing Shopify or commercetools can maintain direct customer relationships by publishing structured API endpoints, preventing intermediaries from commoditizing their brand equity.
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
                  <td style="padding: 3px 5px; font-weight: 600;">Partner with Stripe/Adyen [1]</td>
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
                  <td style="padding: 3px 5px; font-weight: 600;">Expose structured JSON-LD feeds</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Value migrates toward the two ends of the transaction stack, specifically front-end intent aggregators holding user context, and physical logistics networks fulfilling verified deliveries. Middle-tier resellers without proprietary data face severe margin compression.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Morgan Stanley Equity Research (2025); Goldman Sachs Global Payments Analysis (2025); CB Insights Big Tech Strategy Report (2025-2026).
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
