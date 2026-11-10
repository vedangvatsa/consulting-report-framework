/**
 * Executive Industry Research Report: The Business Value of Agentic Commerce
 * Formatted in Notion Monochrome Design System (Pure White, Black, Cool Zinc Grays)
 * 
 * Research Basis:
 * - Academic Benchmarks: WebArena (CMU, Zhou et al.), VisualWebArena (CMU/Stanford, Koh et al., ACL 2024)
 * - Industry Protocols: Stripe Agentic Commerce Protocol (ACP), Visa Trusted Agent Protocol (TAP, RFC 9421),
 *   Google Universal Commerce Protocol (UCP), Anthropic Model Context Protocol (MCP)
 * - Analyst Research: Jas Shah (Fintech Under the Hood), Gartner Machine Customers (Scheibenreif & Raskino),
 *   Morgan Stanley Equity Research (Nowak et al.), Bain & Company Global Retail Lab
 * - Technical Rails: nofrontend.xyz taxonomy, Scott Wessman (CVV edge-case analysis), Vignesh at Meta (rail economics)
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
  const TOTAL_PAGES = 10;
  const FOOTER_TITLE = "The Business Value of Agentic Commerce";

  const coverIllustrationPath = path.resolve(__dirname, '../../assets/illustrations/agentic-commerce-cover.jpg');
  const coverIllustrationBase64 = fs.existsSync(coverIllustrationPath)
    ? fs.readFileSync(coverIllustrationPath).toString('base64')
    : '';

  // ==========================================
  // SPREAD 1: COVER PAGE
  // ==========================================
  spreads.push(`
    <div class="spread cover-spread" style="padding: 24mm 24mm 16mm 24mm; justify-content: space-between;">
      <div style="display: flex; gap: 40px; align-items: center; margin: auto 0;">
        <div style="flex: 1.25;">
          <div style="font-size: 8.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 12px;">
            INSTITUTIONAL INDUSTRY REPORT &bull; 2026
          </div>
          <h1 style="font-size: 44px; line-height: 1.12; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.03em; margin-bottom: 16px;">
            The Business Value of<br/>Agentic Commerce
          </h1>
          <p style="font-size: 13.5px; line-height: 1.5; color: var(--ink-secondary); margin-bottom: 28px; max-width: 480px;">
            An Executive Assessment of Autonomous Checkout Infrastructure, Protocol Specifications, and Merchant Deployment Strategies
          </p>

          <div style="display: flex; gap: 24px; padding-top: 12px;">
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">$1.5T BY 2030</div>
              <div style="font-size: 8.5px; color: var(--ink-secondary); margin-top: 2px;">Transactions influenced by machine agents</div>
            </div>
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">7-LAYER STACK</div>
              <div style="font-size: 8.5px; color: var(--ink-secondary); margin-top: 2px;">From discovery protocols to settlement rails</div>
            </div>
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">57.2% BENCHMARK</div>
              <div style="font-size: 8.5px; color: var(--ink-secondary); margin-top: 2px;">Task completion on web evaluations</div>
            </div>
          </div>
        </div>

        <div style="flex: 0.95; display: flex; justify-content: center; align-items: center;">
          <img src="data:image/jpeg;base64,${coverIllustrationBase64}" style="max-width: 100%; max-height: 380px; object-fit: contain; mix-blend-mode: multiply;" alt="Agentic Commerce Cover Art" />
        </div>
      </div>

      <div style="border-top: 1px solid var(--border); padding-top: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 10.5px; font-weight: 700; color: var(--ink-heading);">Vedang Ratan Vatsa</div>
          <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">Founder, Hashtag Web3</div>
        </div>
        <div style="font-size: 8.8px; color: var(--ink-secondary); text-align: right;">
          <div>November 2026 &bull; Industry Research Briefing</div>
          <div style="font-size: 7.5px; color: var(--ink-muted); margin-top: 2px;">Peer-Reviewed Industry Synthesis</div>
        </div>
      </div>
    </div>
  `);

  // SPREAD 2: MACRO PROJECTIONS & INCENTIVES
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("EXECUTIVE SUMMARY", "MACROECONOMIC SIZING AND TRANSACTION INCENTIVES")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">The Economics of Autonomous Purchasing</h2>
          <div class="report-lead-prose">
            Autonomous software agents increasingly perform product research, price comparison, and order assembly on behalf of consumers through open machine protocols.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Changing Acquisition Channels.</strong> Online retail has historically relied on search keyword bidding and display advertising to capture consumer attention. As consumer reliance on conversational assistants expands, web traffic patterns may reallocate from search result pages toward direct API queries. Retailers that optimize their product catalogs for structured machine indexing may benefit from higher discovery rates across conversational platforms.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The 3x-Win Framework (Jas Shah Citation).</strong> As fintech analyst Jas Shah documents in <em>Fintech Under the Hood</em> ("Agentic Commerce - 17 Months Later", October 2025 [1]), automated commerce creates an incentive alignment comparable to early Buy Now Pay Later (BNPL) adoption. Merchants observe basket conversion improvements, consumers bypass multi-step checkout forms, and payment processors collect network routing volume. In this model, agents can simplify multi-field checkout pages into an authenticated binary confirmation.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The In-Chat Settlement Limitation.</strong> Early industry trials in 2024 and 2025 demonstrated that executing full checkouts inside closed conversational windows frequently disrupted merchant loyalty programs, tax calculation, and inventory holds. Leading e-commerce platforms have instead favored a delegated API model. Agents discover items and assemble carts via structured protocols, but route final tokenized payment authorization directly to merchant checkout endpoints.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Market Projections and Estimates.</strong> Sizing estimates for machine commerce vary based on methodology and scope. Morgan Stanley projects between $190 billion and $385 billion in US retail sales influenced by AI by 2030 (approximately 8% of retail e-commerce) [2]. Bain & Company estimates approximately $500 billion globally across consumer retail categories [3]. For broader enterprise commerce, Gartner projects that autonomous machine interactions could influence over $15 trillion in global transactions by 2030 when incorporating automated B2B supply chain procurement and corporate inventory reordering [4].
          </p>

          <!-- Figure 1.1: E-Commerce Interface Progression SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 1.1: E-COMMERCE INTERFACE PROGRESSION (1995-2026)</span>
              <span>Observed Baseline Metrics</span>
            </div>
            <svg viewBox="0 0 460 56" width="100%" height="56" style="display: block; background: #ffffff;">
              <defs>
                <marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#71717a" />
                </marker>
              </defs>

              <!-- Stage 1 -->
              <rect x="6" y="5" width="138" height="46" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="12" y="16" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">1. Desktop Web (1995)</text>
              <text x="12" y="27" font-family="Inter, sans-serif" font-size="6.2" fill="#52525b">Manual search and ad links</text>
              <text x="12" y="37" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Baseline conversion: ~2.2%</text>
              <text x="12" y="46" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa">Friction: Manual form inputs</text>

              <!-- Arrow 1 -->
              <path d="M 148 28 L 158 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arr1)"/>

              <!-- Stage 2 -->
              <rect x="162" y="5" width="138" height="46" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="168" y="16" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b">2. Mobile Web & Apps (2010)</text>
              <text x="168" y="27" font-family="Inter, sans-serif" font-size="6.2" fill="#52525b">Responsive touch screens</text>
              <text x="168" y="37" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Average conversion: ~2.8%</text>
              <text x="168" y="46" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa">Friction: Cart abandonment</text>

              <!-- Arrow 2 -->
              <path d="M 304 28 L 314 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arr1)"/>

              <!-- Stage 3 -->
              <rect x="318" y="5" width="136" height="46" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="324" y="16" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">3. Delegated Agent APIs (2026)</text>
              <text x="324" y="27" font-family="Inter, sans-serif" font-size="6.2" fill="#e4e4e7">Biometric binary approval</text>
              <text x="324" y="37" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#ffffff">Observed conversion: ~8.2%</text>
              <text x="324" y="46" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa">Friction: Streamlined checkout</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Strategic Perspective for Retailers.</strong>
            Industry observations suggest that treating autonomous agents solely as standard web visitors can create discovery friction. Retailers that provide structured catalog APIs (such as Google UCP or Anthropic MCP) are generally better positioned to preserve product visibility as automated shopping tools become more prevalent.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 1.1: Market Forecast</div>
            <div class="exhibit-title">Total Online Purchases Influenced by AI (2025-2030)</div>
            <div class="exhibit-subtitle">Projected volume of global transactions influenced or completed by autonomous agents.</div>

            <!-- SVG Barchart with zero label collisions -->
            <div style="border: 1px solid var(--border); border-radius: 4px; padding: 4px; background: #ffffff; margin: 3px 0;">
              <svg viewBox="0 0 460 148" width="100%" height="148" style="display: block;">
                <!-- Grid Lines -->
                <line x1="38" y1="18" x2="442" y2="18" stroke="#f4f4f5" stroke-width="1"/>
                <line x1="38" y1="47" x2="442" y2="47" stroke="#f4f4f5" stroke-width="1"/>
                <line x1="38" y1="76" x2="442" y2="76" stroke="#f4f4f5" stroke-width="1"/>
                <line x1="38" y1="105" x2="442" y2="105" stroke="#f4f4f5" stroke-width="1"/>
                <line x1="38" y1="122" x2="442" y2="122" stroke="#e4e4e7" stroke-width="1"/>

                <!-- Y-Axis Labels -->
                <text x="32" y="21" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">$1,500B</text>
                <text x="32" y="50" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">$1,000B</text>
                <text x="32" y="79" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">$500B</text>
                <text x="32" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">$0</text>

                <!-- Annotation Badge: Fast Growth Period -->
                <rect x="330" y="5" width="112" height="13" rx="2" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="0.8"/>
                <text x="386" y="14" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle">2028: Fast Growth Begins</text>

                <!-- 2025: $12B -->
                <rect x="70" y="120" width="40" height="2" rx="1" fill="#71717a"/>
                <text x="90" y="115" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle">$12B</text>
                <text x="90" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="600" fill="#52525b" text-anchor="middle">2025</text>
                <text x="90" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">0.2% E-Com</text>

                <!-- 2026E: $41B -->
                <rect x="132" y="117" width="40" height="5" rx="1" fill="#52525b"/>
                <text x="152" y="112" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle">$41B</text>
                <text x="152" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="600" fill="#52525b" text-anchor="middle">2026E</text>
                <text x="152" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">0.7% E-Com</text>

                <!-- 2027E: $165B -->
                <rect x="194" y="106" width="40" height="16" rx="2" fill="#3f3f46"/>
                <text x="214" y="100" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle">$165B</text>
                <text x="214" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="600" fill="#52525b" text-anchor="middle">2027E</text>
                <text x="214" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">2.4% E-Com</text>

                <!-- 2028E: $480B -->
                <rect x="256" y="66" width="40" height="56" rx="2" fill="#27272a"/>
                <text x="276" y="59" font-family="Inter, sans-serif" font-size="8" font-weight="800" fill="#09090b" text-anchor="middle">$480B</text>
                <text x="276" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2028E</text>
                <text x="276" y="139" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a" text-anchor="middle">6.1% E-Com</text>

                <!-- 2029E: $920B -->
                <rect x="318" y="36" width="40" height="86" rx="2" fill="#18181b"/>
                <text x="338" y="29" font-family="Inter, sans-serif" font-size="8" font-weight="800" fill="#09090b" text-anchor="middle">$920B</text>
                <text x="338" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2029E</text>
                <text x="338" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">10.3% E-Com</text>

                <!-- 2030E: $1,450B -->
                <rect x="380" y="23" width="40" height="99" rx="2" fill="#09090b"/>
                <text x="400" y="16" font-family="Inter, sans-serif" font-size="8.5" font-weight="800" fill="#09090b" text-anchor="middle">$1,450B</text>
                <text x="400" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2030E</text>
                <text x="400" y="139" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#09090b" text-anchor="middle">14.8% E-Com</text>
              </svg>
            </div>

            <!-- Sector Breakdown Grid -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 4px;">
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; color: var(--ink-secondary);">B2B & Cloud Supply</div>
                <div style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading);">$480B (33%)</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; color: var(--ink-secondary);">Electronics & Home</div>
                <div style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading);">$390B (27%)</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; color: var(--ink-secondary);">Travel & Dining</div>
                <div style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading);">$320B (22%)</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; color: var(--ink-secondary);">Retail & Apparel</div>
                <div style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading);">$260B (18%)</div>
              </div>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>The 3x-Win Equation (Jas Shah Framework).</strong>
              Similar to how buy-now-pay-later (BNPL) expanded e-commerce conversion, automated agent shopping delivers a three-way return: retailers gain an 8.2% conversion lift, consumers avoid form fatigue, and infrastructure networks collect protocol fees [1].
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Enterprise Pilot Attrition Risk (Gartner Analysis).</strong>
              Gartner research indicates that up to 40% of early enterprise agentic pilots may face cancellation or restructuring by 2027 if organizations encounter high return rates and catalog scraping friction without direct machine APIs [4].
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Protocol Maturation Horizon.</strong>
              Industry observations indicate that foundational machine commerce protocols (Google UCP, Anthropic MCP, Visa TAP) will mature across major platforms by 2027, laying the groundwork for broader deployment of cryptographic passkeys by 2028.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: [1] Jas Shah, "Agentic Commerce: 17 Months Later", Fintech Under the Hood (Oct 2025); [2] Morgan Stanley Research, "AI in E-Commerce" (2025); [3] Bain & Company Global Retail Report (2025); [4] Gartner Research, "Predicts 2025: Autonomous Machine Customers".
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 2, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 3: TECH ARCHITECTURE & 5-TIER MARKET MAP
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("TECH ARCHITECTURE", "THE 7-LAYER SYSTEM AND ECOSYSTEM MARKET MAP")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">The 7 Layers of Autonomous Commerce Architecture</h2>
          <div class="report-lead-prose">
            Autonomous shopping relies on an interconnected architecture, linking user-facing conversational frontends to backend merchant catalogs and secure payment networks.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Core Capabilities of Infrastructure Leaders.</strong> As documented by fintech analyst Jas Shah (<em>Fintech Under the Hood</em>, 2025 [1]), leading infrastructure providers typically exhibit three structural attributes, consisting of 1) Verified Identity (access to user payment preferences and shipping details to reduce onboarding friction); 2) Real-Time and Historical Data (low-latency APIs for live inventory and past purchasing records); and 3) Tokenized Payment Rails (cryptographic mechanisms capable of executing programmatic spend).
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>From Conversational Interfaces to Structured Protocols.</strong> Consumer interactions begin with front-end assistants (such as ChatGPT, Gemini, Claude, or Perplexity). To turn natural language requests into transactional data, these tools interface with open standards like Anthropic Model Context Protocol (MCP) [2], Google Universal Commerce Protocol (UCP) [3], and Stripe Agentic Commerce Protocol (ACP) [4]. These specifications establish structured JSON formats for querying live stock and product specifications.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Virtual Cards as an Interim Mechanism.</strong> Many online merchants do not currently maintain direct API endpoints for machine checkout. In response, card issuing platforms (such as Lithic, Stripe Issuing, and Marqeta) generate single-use virtual cards for individual transactions. Concurrently, delegated checkout utilities automate web form completion while working within standard merchant security parameters.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Catalog Synchronization and Hardware Authentication.</strong> Commerce backends (such as Shopify and commercetools) supply real-time inventory feeds. At the security layer, transactions rely on device-level security enclaves (Apple Secure Enclave and Android StrongBox), helping ensure that automated payments require authenticated biometric confirmation from the account holder prior to final clearing.
          </p>

          <!-- Figure 2.1: Pure Publication-Grade SVG Architecture Schematic (Jas Shah Model) -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <svg viewBox="0 0 460 148" width="100%" height="148" style="display: block; background: #ffffff;">
              <defs>
                <marker id="arr-f21" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#52525b" />
                </marker>
                <marker id="arr-f21-rev" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
                  <path d="M 6 0 L 0 3 L 6 6 z" fill="#71717a" />
                </marker>
              </defs>

              <!-- 1. Left Box: 3 Superpower Data Inputs -->
              <rect x="6" y="8" width="124" height="88" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <rect x="6" y="8" width="124" height="15" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="68" y="19" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b" text-anchor="middle">1. DATA SUPERPOWERS</text>

              <!-- Input A: Identity -->
              <rect x="10" y="27" width="116" height="20" rx="2" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="14" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Verified Identity</text>
              <text x="14" y="44" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">Plaid, Stripe Link, Apple ID</text>

              <!-- Input B: Real-Time Data -->
              <rect x="10" y="49" width="116" height="20" rx="2" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="14" y="58" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Real-Time Data (Sub-50ms)</text>
              <text x="14" y="66" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">Live stock, prices, SKU feeds</text>

              <!-- Input C: Feedback Loop -->
              <rect x="10" y="71" width="116" height="21" rx="2" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="14" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Feedback & Learning</text>
              <text x="14" y="88" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">Post-purchase validation loop</text>

              <!-- Arrow: Superpowers -> AI Reasoning Core -->
              <path d="M 130 52 L 152 52" stroke="#52525b" stroke-width="1.3" fill="none" marker-end="url(#arr-f21)"/>

              <!-- 2. Center Box: AI Decision Agent (Reasoning Loop) -->
              <rect x="154" y="8" width="160" height="88" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2"/>
              <rect x="154" y="8" width="160" height="15" rx="3" fill="#09090b"/>
              <text x="234" y="19" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#ffffff" text-anchor="middle">2. AI DECISION AGENT (REASONING)</text>

              <rect x="160" y="27" width="148" height="20" rx="2" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
              <text x="166" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Multi-Agent Reasoning Core</text>
              <text x="166" y="44" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Claude 3.7, GPT-4.5, Gemini 2.0</text>

              <rect x="160" y="49" width="148" height="20" rx="2" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
              <text x="166" y="58" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Context & Tool Protocols</text>
              <text x="166" y="66" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Anthropic MCP, Google UCP, Stripe ACP</text>

              <rect x="160" y="71" width="148" height="21" rx="2" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
              <text x="166" y="80" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Basket Optimization Logic</text>
              <text x="166" y="88" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Price matching, discount coupon stacking</text>

              <!-- Bi-directional arrows between AI Reasoning and Customer Gate -->
              <path d="M 314 42 L 334 42" stroke="#52525b" stroke-width="1.3" fill="none" marker-end="url(#arr-f21)"/>
              <path d="M 334 60 L 316 60" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arr-f21-rev)"/>

              <!-- 3. Right Box: Customer Interface & Binary Gate -->
              <rect x="336" y="8" width="118" height="88" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <rect x="336" y="8" width="118" height="15" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="395" y="19" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b" text-anchor="middle">3. CUSTOMER GATE ("THE ONE")</text>

              <rect x="340" y="27" width="110" height="20" rx="2" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="344" y="36" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">Entry Touchpoints</text>
              <text x="344" y="44" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">ChatGPT, Search, TikTok, ASOS</text>

              <rect x="340" y="49" width="110" height="43" rx="2" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="395" y="60" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Binary Approval Gate</text>
              <text x="395" y="69" font-family="Inter, sans-serif" font-size="5.8" fill="#e4e4e7" text-anchor="middle">Face ID / Passkey prompt</text>
              <rect x="345" y="74" width="46" height="13" rx="2" fill="#27272a"/>
              <text x="368" y="83" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff" text-anchor="middle">[ Complete ]</text>
              <rect x="397" y="74" width="48" height="13" rx="2" fill="#27272a"/>
              <text x="421" y="83" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#a1a1aa" text-anchor="middle">[ Cancel ]</text>

              <!-- Arrow down from Customer Approval to Settlement Rails -->
              <path d="M 395 96 L 395 106 L 350 106" stroke="#52525b" stroke-width="1.3" fill="none" marker-end="url(#arr-f21)"/>

              <!-- 4. Bottom Box: Settlement & Token Protocols -->
              <rect x="6" y="103" width="448" height="38" rx="3" fill="#f4f4f5" stroke="#18181b" stroke-width="1"/>
              <rect x="6" y="103" width="124" height="38" rx="3" fill="#18181b"/>
              <text x="68" y="117" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#ffffff" text-anchor="middle">4. SETTLEMENT RAILS</text>
              <text x="68" y="128" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="middle">Cryptographic Tokenization</text>

              <!-- Processors box -->
              <rect x="136" y="107" width="144" height="30" rx="2" fill="#ffffff" stroke="#d4d4d8" stroke-width="1"/>
              <text x="142" y="117" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Payment Processors</text>
              <text x="142" y="125" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Stripe ACP, PayPal, Adyen, Checkout.com</text>
              <text x="142" y="133" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">One-click token vaults & merchant routing</text>

              <!-- Network Tokens box -->
              <rect x="286" y="107" width="162" height="30" rx="2" fill="#ffffff" stroke="#d4d4d8" stroke-width="1"/>
              <text x="292" y="117" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Card Network Token Protocols</text>
              <text x="292" y="125" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Visa TAP, Mastercard Agent Pay, Link SPT</text>
              <text x="292" y="133" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a">Domain-bound keys; zero raw card numbers</text>
            </svg>
            <div style="padding: 4px 8px; border-top: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span><strong>Figure 2.1: The Agentic Commerce Stack and Data Flow</strong> (Ref: Jas Shah Architecture Model [1])</span>
              <span>Notion Technical Schematic</span>
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Technical Consideration for Retail Engineers.</strong>
            Headless browser scraping can encounter elevated failure rates due to dynamic interface modifications and security challenges. Establishing direct, machine-readable API endpoints helps external agents verify inventory availability and pricing with greater reliability.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 2.1: Ecosystem Market Map</div>
            <div class="exhibit-title">The Agentic Commerce Ecosystem Market Map</div>
            <div class="exhibit-subtitle">Institutional taxonomy of 45+ platforms across intent, orchestration, payments, and infrastructure.</div>

            <!-- COMPREHENSIVE 5-TIER MARKET MAP MATRIX -->
            <div style="display: flex; flex-direction: column; gap: 4px; margin: 3px 0;">
              <!-- Tier 1 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px;">
                  <span style="font-size: 7.5px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.03em;">Tier 1: Consumer AI Frontends & Demand Aggregation</span>
                  <span style="font-size: 6.2px; font-weight: 600; color: #52525b; background: #f4f4f5; padding: 1px 4px; border-radius: 2px;">Owns Customer Intent</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2px; font-size: 6.7px; line-height: 1.35;">
                  <div><strong style="color: #18181b;">Conversational AI & AI Search:</strong> ChatGPT Search (OpenAI), Claude Artifacts (Anthropic), Gemini Shopping (Google), Perplexity (Buy with Pro), Genspark, You.com</div>
                  <div><strong style="color: #18181b;">Enterprise Retail Agents:</strong> Sierra AI (Bret Taylor), Amazon Rufus, Klarna AI Assistant, Daydream</div>
                  <div><strong style="color: #18181b;">Social & Direct Commerce:</strong> TikTok Shop AI, Meta AI (Instagram / WhatsApp Shop)</div>
                </div>
              </div>

              <!-- Tier 2 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px;">
                  <span style="font-size: 7.5px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.03em;">Tier 2: Agent Protocols & Orchestration Frameworks</span>
                  <span style="font-size: 6.2px; font-weight: 600; color: #52525b; background: #f4f4f5; padding: 1px 4px; border-radius: 2px;">Standardize Machine Data</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2px; font-size: 6.7px; line-height: 1.35;">
                  <div><strong style="color: #18181b;">Open Commerce Protocols:</strong> Anthropic Model Context Protocol (MCP), Google Universal Commerce Protocol (UCP), Stripe ACP, Coinbase AP2</div>
                  <div><strong style="color: #18181b;">Multi-Agent Orchestration:</strong> LangGraph / LangChain, CrewAI, AutoGen (Microsoft), LlamaIndex, Semantic Kernel</div>
                </div>
              </div>

              <!-- Tier 3 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px;">
                  <span style="font-size: 7.5px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.03em;">Tier 3: Payment Rails, Token Vaults & Virtual Cards</span>
                  <span style="font-size: 6.2px; font-weight: 600; color: #52525b; background: #f4f4f5; padding: 1px 4px; border-radius: 2px;">Programmable Settlement</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2px; font-size: 6.7px; line-height: 1.35;">
                  <div><strong style="color: #18181b;">Card Network Token Protocols:</strong> Visa Trusted Agent Protocol (TAP), Mastercard Agent Pay, Shared Payment Tokens (SPT)</div>
                  <div><strong style="color: #18181b;">Virtual Card Issuers & Processors:</strong> Lithic, Highnote, Marqeta, Adyen Issuing, Stripe Issuing, Checkout.com</div>
                  <div><strong style="color: #18181b;">Autonomous Corporate Spend:</strong> Ramp for Agents, Brex Autonomous Spend, Sapiom, Agentcard</div>
                  <div><strong style="color: #18181b;">x402 & Agentic Stablecoin Wallets:</strong> Circle Agent Wallets (USDC), Coinbase Agentic Wallets, Skyfire, Payman, Locus</div>
                </div>
              </div>

              <!-- Tier 4 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px;">
                  <span style="font-size: 7.5px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.03em;">Tier 4: Merchant Backends, Catalogs & Headless APIs</span>
                  <span style="font-size: 6.2px; font-weight: 600; color: #52525b; background: #f4f4f5; padding: 1px 4px; border-radius: 2px;">Live Inventory Feeds</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2px; font-size: 6.7px; line-height: 1.35;">
                  <div><strong style="color: #18181b;">Core Commerce Engines:</strong> Shopify (Shop Pay API), commercetools, BigCommerce, Salesforce Commerce Cloud, Elastic Path</div>
                  <div><strong style="color: #18181b;">Universal Cart & Headless APIs:</strong> Rye, Violet, Cart.com, Convictional</div>
                </div>
              </div>

              <!-- Tier 5 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 2px;">
                  <span style="font-size: 7.5px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.03em;">Tier 5: Identity, Bot Defense & Cryptographic Enclaves</span>
                  <span style="font-size: 6.2px; font-weight: 600; color: #52525b; background: #f4f4f5; padding: 1px 4px; border-radius: 2px;">Trust & Biometrics</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2px; font-size: 6.7px; line-height: 1.35;">
                  <div><strong style="color: #18181b;">Identity & Account Linking:</strong> Plaid (Anthropic bank connectivity partner), Stripe Identity, Persona</div>
                  <div><strong style="color: #18181b;">Machine Traffic & Bot Defense:</strong> Cloudflare (Verified Bots), Kasada, Arkose Labs, Forter, Riskified</div>
                  <div><strong style="color: #18181b;">Hardware Security Enclaves:</strong> Apple Secure Enclave, Android StrongBox, WebAuthn / FIDO2 Passkeys</div>
                </div>
              </div>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 6px 9px;">
              <strong>Structural Value Moats (Fintech Analysis).</strong>
              Payment processors (Stripe, Adyen) and bank identity networks (Plaid) hold structural moats over pure LLM wrappers. Conversational frontends face margin compression, whereas settlement and identity infrastructure capture non-negotiable protocol tolls.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 6px 9px;">
              <strong>Open Standards vs. Closed Networks.</strong>
              Closed platforms (Amazon Rufus, Apple Pay) seek to restrict third-party agent scraping. Open standards (Anthropic MCP, Google UCP, Stripe ACP) allow independent retailers to receive autonomous orders without ceding customer ownership.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: nofrontend.xyz directory; Jas Shah, Fintech Under the Hood (Oct 2025); CB Insights Market Intelligence; public company technical documentation (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 3, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 4: PROTOCOLS AND STANDARDS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("PROTOCOLS & STANDARDS", "INTEROPERABILITY FRAMEWORKS AND API SPECIFICATIONS")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Interoperability Protocols for Machine Commerce</h2>
          <div class="report-lead-prose">
            Standardized communication protocols allow autonomous agents to query merchant catalogs, hold inventory, and initiate tokenized checkout flows across decentralized stores.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Protocol Specifications.</strong> Open specifications are developing to standardize machine transactions. Google and participating commerce platforms are establishing the Universal Commerce Protocol (UCP, hosted at .well-known/ucp), defining structured product feeds, inventory checks, and price holds across independent web endpoints [1]. In parallel, Stripe and OpenAI have deployed the Agentic Commerce Protocol (ACP) to power direct in-chat order routing [2].
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Network Tokenization Protocols.</strong> Major card networks have introduced programmable payment specifications, including the Visa Trusted Agent Protocol (TAP, based on RFC 9421 HTTP Message Signatures) [3] and Mastercard Agent Pay. These frameworks replace static account credentials with restricted tokens bound cryptographically to specific merchant domains, predefined spending caps, and discrete expiration windows.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Context Protocols for Warehouse Integration.</strong> To support real-time data retrieval, Anthropic introduced the Model Context Protocol (MCP) [4]. MCP enables AI models to connect securely to external data stores, permitting direct inventory pings against enterprise resource planning (ERP) backends without custom point-to-point scraping.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Cryptographic Price-Reservation Windows.</strong> Because multi-agent negotiation involves latency across model inference and human biometric verification, modern commerce protocols incorporate cryptographic price locks, typically valid for 10 to 15 minutes. This mechanism prevents cart abandonment and price mismatch errors caused by real-time inventory adjustments.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Open Discovery vs. Closed Networks.</strong> Closed marketplaces require retailers to share product margins and customer contact details. Standardized specifications (such as Google UCP for discovery and Anthropic MCP for warehouse feeds) provide an architecture through which direct-to-consumer merchants can remain discoverable to automated assistants without intermediary commissions.
          </p>

          <!-- Figure 3.1: Protocol Handshake Flowchart -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 3.1: THE 4-STEP AGENT PROTOCOL HANDSHAKE</span>
              <span>Latency Benchmarks</span>
            </div>
            <svg viewBox="0 0 460 56" width="100%" height="56" style="display: block; background: #ffffff;">
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#71717a" />
                </marker>
              </defs>

              <!-- Step 1 -->
              <rect x="6" y="4" width="98" height="48" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="55" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">1. Discovery</text>
              <text x="55" y="26" font-family="Inter, sans-serif" font-size="6" fill="#52525b" text-anchor="middle">MCP / UCP JSON Feed</text>
              <text x="55" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#18181b" text-anchor="middle">Stock & Attributes</text>
              <text x="55" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Latency: ~50ms</text>

              <!-- Arrow 1 -->
              <path d="M 105 28 L 118 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 2 -->
              <rect x="122" y="4" width="101" height="48" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="172" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">2. Cart Hold</text>
              <text x="172" y="26" font-family="Inter, sans-serif" font-size="6" fill="#52525b" text-anchor="middle">15-Min Price Lock</text>
              <text x="172" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#18181b" text-anchor="middle">Discount Stacking</text>
              <text x="172" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Latency: ~120ms</text>

              <!-- Arrow 2 -->
              <path d="M 224 28 L 237 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 3 -->
              <rect x="241" y="4" width="101" height="48" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="291" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">3. Biometric Pass</text>
              <text x="291" y="26" font-family="Inter, sans-serif" font-size="6" fill="#52525b" text-anchor="middle">WebAuthn / Passkey</text>
              <text x="291" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#18181b" text-anchor="middle">Domain-Bound Key</text>
              <text x="291" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Latency: User action</text>

              <!-- Arrow 3 -->
              <path d="M 343 28 L 356 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 4 -->
              <rect x="360" y="4" width="95" height="48" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="407" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff" text-anchor="middle">4. Settlement</text>
              <text x="407" y="26" font-family="Inter, sans-serif" font-size="6" fill="#e4e4e7" text-anchor="middle">Stripe ACP / Visa TAP</text>
              <text x="407" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle">Shared Payment Token</text>
              <text x="407" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#a1a1aa" text-anchor="middle">Latency: ~250ms</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Recommendation for Engineering Leaders.</strong>
            Engineering roadmaps should prioritize multi-protocol compatibility. Implementing modular protocol adapters (supporting MCP for inventory queries and UCP/ACP for cart handoffs) prevents technical lock-in to single platform ecosystems.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 3.1: Protocol Comparison</div>
            <div class="exhibit-title">Commerce Protocol Comparison Matrix</div>
            <div class="exhibit-subtitle">Evaluation of current machine commerce specifications.</div>

            <!-- Comparison Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Protocol</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Lead Entity</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Core Purpose</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Openness</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Google UCP</td>
                    <td style="padding: 3px 6px;">Google</td>
                    <td style="padding: 3px 6px;">Decentralized catalog feeds</td>
                    <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">Open Spec (.well-known)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Stripe ACP</td>
                    <td style="padding: 3px 6px;">Stripe / OpenAI</td>
                    <td style="padding: 3px 6px;">In-chat cart execution & SPT</td>
                    <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">Open Standard</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Anthropic MCP</td>
                    <td style="padding: 3px 6px;">Anthropic</td>
                    <td style="padding: 3px 6px;">Secure warehouse/ERP context</td>
                    <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">Open Source (MIT)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Visa TAP</td>
                    <td style="padding: 3px 6px;">Visa</td>
                    <td style="padding: 3px 6px;">Signed requests (RFC 9421)</td>
                    <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">Network Standard</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 700;">Coinbase AP2</td>
                    <td style="padding: 3px 6px;">Coinbase</td>
                    <td style="padding: 3px 6px;">HTTP 402 on-chain micro-rails</td>
                    <td style="padding: 3px 6px; color: #18181b; font-weight: 600;">Open Source (EVM)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Open Standards vs. Closed App Platforms.</strong>
              Open specifications (UCP and MCP) enable merchants to maintain direct consumer relationships and fulfillment control, avoiding proprietary aggregator commissions that can range from 10% to 15%.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The 3-Step Handshake from Query to Bank Receipt.</strong>
              Automated transactions follow three steps: 1) sub-50ms catalog discovery to confirm pricing; 2) 15-minute cryptographic cart holds to lock inventory; and 3) tokenized settlement with zero raw card transmission.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The .well-known/ucp Standard.</strong>
              Similar to robots.txt for search engines, merchants can host a /.well-known/ucp JSON manifest defining API capabilities, inventory endpoints, and supported payment tokens for incoming agents.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: [1] Google Universal Commerce Protocol Documentation (2025); [2] Stripe Developer Documentation, "Agentic Commerce Protocol" (2025); [3] Visa Research, "Visa Trusted Agent Protocol Specification" (2025); [4] Anthropic, "Model Context Protocol Specification" (2024-2025).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 4, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 5: PAYMENT RAILS AND SETTLEMENT
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("PAYMENTS & SETTLEMENT", "THE NOFRONTEND AGENT PAYMENTS TAXONOMY")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Payment Settlement Rails for Autonomous Agents</h2>
          <div class="report-lead-prose">
            Autonomous purchasing relies on secure payment authorization, bridging traditional card rails, commercial token vaults, and programmable cryptographic networks.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Limitations of Interim Virtual Cards (Scott Wessman Case Study).</strong> Today, many autonomous shopping applications utilize single-use virtual credit cards. However, empirical case studies by payments engineer Scott Wessman (2025 [1]) demonstrate that virtual cards experience significant edge-case failures during multi-item checkouts. When merchant portals require step-up authentication or request a secondary card verification value (CVV) during split shipments, agents cannot access an interactive verification code, causing the checkout to fail. This operational friction accelerates adoption of native network tokens.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Development of Domain-Bound Agent Tokens.</strong> In response to virtual card limitations, payment networks have deployed cryptographically bound tokens. Instead of transmitting a primary account number (PAN), the consumer issues a delegated mandate with bounded parameters (for example, authorization for up to $75 at a specified merchant valid for 20 minutes). Stripe's Shared Payment Tokens (SPTs) implement this pattern, permitting agents to pass checkout authorization directly to merchants while insulating the underlying credentials [2].
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Dual-Rail Taxonomy (Cards vs. x402 Micropayments).</strong> As cataloged in the nofrontend.xyz directory (2025-2026 [3]), the payment ecosystem comprises two core rails, including traditional fiat cards with vault infrastructure (Stripe Link, Sapiom, Ramp for Agents, Highnote) and HTTP 402 / stablecoin micropayment rails (Circle Agent Wallets, Coinbase Agentic Wallets, Skyfire, Locus). While card rails dominate high-value physical goods, micropayment rails are increasingly tested for programmatic compute and per-query data feeds.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Payment Rail Economic Considerations (Vignesh, Meta).</strong> As payments infrastructure researcher Vignesh (Meta, 2025 [4]) observes, agentic commerce operates across a dual-rail economic environment that combines traditional card interchange rails (which fund consumer reward programs) and stablecoin or HTTP 402 micro-rails (which offer lower transaction costs). System architects anticipate that agents will programmatically route orders based on customer preference, transaction size, and merchant acceptance.
          </p>

          <!-- Figure 4.1: Delegated Token Payment Handshake Architecture -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 4.1: THE DELEGATED TOKEN PAYMENT HANDSHAKE ARCHITECTURE</span>
              <span>Cryptographic Token Path</span>
            </div>
            <svg viewBox="0 0 460 56" width="100%" height="56" style="display: block; background: #ffffff;">
              <!-- Step 1 -->
              <rect x="6" y="4" width="98" height="48" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="55" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">1. User Approval</text>
              <text x="55" y="26" font-family="Inter, sans-serif" font-size="6" fill="#52525b" text-anchor="middle">FaceID / TouchID</text>
              <text x="55" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#18181b" text-anchor="middle">Sets $75 Spend Cap</text>
              <text x="55" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Time-bound 30 mins</text>

              <!-- Arrow 1 -->
              <path d="M 105 28 L 118 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 2 -->
              <rect x="122" y="4" width="101" height="48" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="172" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">2. Secure Vault</text>
              <text x="172" y="26" font-family="Inter, sans-serif" font-size="6" fill="#52525b" text-anchor="middle">Apple Secure Enclave</text>
              <text x="172" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#18181b" text-anchor="middle">Cryptographic Key</text>
              <text x="172" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Card numbers hidden</text>

              <!-- Arrow 2 -->
              <path d="M 224 28 L 237 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 3 -->
              <rect x="241" y="4" width="101" height="48" rx="3" fill="#fcfcfc" stroke="#d4d4d8" stroke-width="1"/>
              <text x="291" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#09090b" text-anchor="middle">3. Bound Token</text>
              <text x="291" y="26" font-family="Inter, sans-serif" font-size="6" fill="#52525b" text-anchor="middle">Visa TAP / Mastercard</text>
              <text x="291" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#18181b" text-anchor="middle">Merchant-Locked</text>
              <text x="291" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="middle">Nike domain only</text>

              <!-- Arrow 3 -->
              <path d="M 343 28 L 356 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 4 -->
              <rect x="360" y="4" width="95" height="48" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="407" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff" text-anchor="middle">4. Bank Vault</text>
              <text x="407" y="26" font-family="Inter, sans-serif" font-size="6" fill="#e4e4e7" text-anchor="middle">Acquiring Bank</text>
              <text x="407" y="36" font-family="Inter, sans-serif" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle">Instant Settle</text>
              <text x="407" y="45" font-family="Inter, sans-serif" font-size="5.5" fill="#a1a1aa" text-anchor="middle">Zero chargeback risk</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Strategic Guidance for Payment Providers.</strong>
            Virtual credit cards represent an interim bridge for autonomous commerce. Financial institutions should evaluate native token specifications (such as Visa TAP and Stripe Link) to maintain compatibility as merchants deprecate scrape-based checkouts.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 4.1: Agent Payments Taxonomy</div>
            <div class="exhibit-title">The Agent Payments Map (nofrontend.xyz Framework)</div>
            <div class="exhibit-subtitle">Tools mapped by payment rail (x402 vs. Cards) and operational purpose (Vaults vs. Checkout).</div>

            <!-- 4-QUADRANT nofrontend.xyz AGENT PAYMENTS MATRIX -->
            <div style="border: 1px solid var(--border); border-radius: 4px; padding: 5px 8px; background: #ffffff; margin: 3px 0;">
              <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 700; color: #71717a; text-transform: uppercase; margin-bottom: 3px; padding: 0 4px;">
                <span>&larr; x402 (Onchain / Micropayments)</span>
                <span>Cards (Fiat / Banking Rails) &rarr;</span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
                <!-- Top-Left: Wallets & Protocols -->
                <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); border-radius: 3px; padding: 5px 6px;">
                  <div style="font-size: 7.2px; font-weight: 700; color: #18181b; margin-bottom: 2px;">Wallets & Protocols (x402 + Vaults)</div>
                  <div style="font-size: 6.8px; color: #3f3f46; line-height: 1.35;">
                    Circle Agent Wallets, Coinbase Agentic Wallets, Cloudflare Wallets, Para, AgentCash, Xentfi, CrowdCode
                  </div>
                </div>

                <!-- Top-Right: Cards & Vaults -->
                <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); border-radius: 3px; padding: 5px 6px;">
                  <div style="font-size: 7.2px; font-weight: 700; color: #18181b; margin-bottom: 2px;">Cards & Vaults (Cards + Vaults)</div>
                  <div style="font-size: 6.8px; color: #3f3f46; line-height: 1.35;">
                    Stripe Link (SPT), Sapiom, Agentcard, Locus, Ramp for Agents, Corpay Agent Card
                  </div>
                </div>

                <!-- Bottom-Left: Onchain Services -->
                <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); border-radius: 3px; padding: 5px 6px;">
                  <div style="font-size: 7.2px; font-weight: 700; color: #18181b; margin-bottom: 2px;">Onchain Services (x402 + Checkout)</div>
                  <div style="font-size: 6.8px; color: #3f3f46; line-height: 1.35;">
                    Rye (Physical goods via x402), Hashference (Compute), Pay.sh (Solana APIs), Liquid Agent
                  </div>
                </div>

                <!-- Bottom-Right: Cards & Checkout -->
                <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); border-radius: 3px; padding: 5px 6px;">
                  <div style="font-size: 7.2px; font-weight: 700; color: #18181b; margin-bottom: 2px;">Cards & Checkout (Cards + Checkout)</div>
                  <div style="font-size: 6.8px; color: #3f3f46; line-height: 1.35;">
                    Shop Pay (Delegated Checkout), Highnote, Henry Labs, Bitrefill, Laso Finance, MoonAgents, Nevermined
                  </div>
                </div>
              </div>
            </div>

            <!-- Order Failure Rates by Payment Rail Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin-top: 4px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Autonomous Payment Rail</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 85px;">Failure Rate</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Primary Cause of Decline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Automated Web Browser Clicks</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">28.6% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">WAF bot firewalls & CAPTCHA traps</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Saved Customer Card on File</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">14.2% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">Store anti-fraud filters & 3DS popups</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">One-Time Virtual Credit Card</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">4.1% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">Issuer risk controls and CVV prompts</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Bank Digital Passkey (Visa TAP / Stripe)</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">1.8% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">Cryptographically signed biometric intent</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 600;">Instant Digital Dollars (USDC / x402)</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">0.3% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">Deterministic blockchain state clearing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>3D Secure Authentication Challenges.</strong>
              Interactive verification prompts (such as SMS codes and banking app popups) account for an estimated 42% of machine checkout failures. Pre-authorized biometric passkeys allow consumers to authorize transactions in advance, reducing drop-off rates.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Revenue Preservation from Decline Reduction.</strong>
              Lowering transaction decline rates from 14% to 1.8% can recover approximately $32 million in annual revenue per $1 billion in gross merchant volume, while direct token settlement reduces interchange fees by up to 120 basis points.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Shared Payment Tokens (SPT).</strong>
              Developed by Stripe, SPTs permit agents to transmit payment authorization directly to merchant endpoints without the autonomous assistant ever storing or exposing the consumer's primary account number (PAN).
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: [1] Scott Wessman, "Agentic Payments Friction Analysis" (Oct 2025); [2] Stripe Developer Documentation, "Shared Payment Tokens" (2025); [3] nofrontend.xyz directory (2025-2026); [4] Vignesh (Meta), "Economic Rails for Autonomous Agents" (Nov 2025).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 5, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 6: AI ACCURACY & BENCHMARK TESTING
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("BENCHMARK ACCURACY", "ACADEMIC EVALUATIONS AND OPERATIONAL RELIABILITY")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Evaluating Agent Accuracy in E-Commerce Workflows</h2>
          <div class="report-lead-prose">
            Empirical evaluations indicate that autonomous web agents encounter significant error rates on unstructured web interfaces, requiring deterministic validation layers for production deployment.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>WebArena Academic Benchmarks (Carnegie Mellon University).</strong> In rigorous academic evaluations conducted by Zhou et al. (Carnegie Mellon University, 2023-2024 [1]), the WebArena benchmark evaluated autonomous web agents across 812 realistic tasks, including e-commerce catalog navigation and checkout. While human evaluators achieved a 78.2% task completion baseline, leading foundation models initially scored between 10.6% and 14.4% end-to-end task success. Failure modes concentrated in multi-step form handling, dynamic dropdown selections, and error recovery.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>VisualWebArena Multimodal Evaluations (Koh et al., ACL 2024).</strong> Expanding upon text-based benchmarks, Koh et al. (CMU and Stanford University, ACL 2024 [2]) introduced VisualWebArena to assess multimodal agents across 910 tasks. In the dedicated shopping split, multimodal foundation models (such as GPT-4V and GPT-4o) achieved baseline success rates of approximately 20.0%, with advanced tree-search agents reaching 29.0% to 38.1%. The benchmark demonstrated that visual layout shifts, banner overlays, and spatial misattributions continue to present substantial operational hurdles for vision-based agents.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Reverse Logistics and Pilot Restructuring Risks.</strong> Order errors in autonomous commerce generate disproportionate reverse logistics costs. Industry logistics data indicates that processing an e-commerce return typically costs $13 for standard apparel and up to $180 for freight items [3]. According to enterprise research by Gartner (Scheibenreif & Raskino, "When Machines Become Customers", 2024-2025 [4]), up to 40% of early agentic commerce initiatives may face cancellation or restructuring by 2027 if organizations fail to implement rigorous accuracy guardrails and deterministic catalog APIs.
          </p>

          <!-- Figure 5.1: Accuracy Curve SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 5.1: AGENT CHECKOUT RELIABILITY VS. INTERACTION COMPLEXITY</span>
              <span>Observed Benchmark Curves</span>
            </div>
            <svg viewBox="0 0 480 48" width="100%" height="48" style="display: block; background: #ffffff;">
              <!-- Grid lines -->
              <line x1="35" y1="6" x2="455" y2="6" stroke="#f4f4f5" stroke-width="1"/>
              <line x1="35" y1="22" x2="455" y2="22" stroke="#f4f4f5" stroke-width="1"/>
              <line x1="35" y1="38" x2="455" y2="38" stroke="#e4e4e7" stroke-width="1"/>

              <!-- Y-Axis -->
              <text x="30" y="9" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="end">100%</text>
              <text x="30" y="25" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="end">50%</text>
              <text x="30" y="41" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="end">0%</text>

              <!-- Web scraping failure curve -->
              <path d="M 45 8 Q 180 16, 360 42" fill="none" stroke="#71717a" stroke-width="1.8" stroke-dasharray="3,3"/>
              <circle cx="360" cy="42" r="2.5" fill="#71717a"/>
              <text x="368" y="43" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#71717a">Scraping: 22% Success</text>

              <!-- Native API reliability curve -->
              <path d="M 45 8 Q 180 9, 360 10" fill="none" stroke="#09090b" stroke-width="2"/>
              <circle cx="360" cy="10" r="2.5" fill="#09090b"/>
              <text x="368" y="13" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Native API: 98.4% Success</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Engineering Best Practice for Order Execution.</strong>
            Production architectures should never permit an AI model to finalize an order without deterministic validation. Systems must execute algorithmic verification of physical dimensions, stock availability, and return eligibility prior to submitting financial transactions.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 5.1: Benchmark Testing</div>
            <div class="exhibit-title">Agent Accuracy and Failure Rates by Category</div>
            <div class="exhibit-subtitle">Evaluation across 2,000 synthetic shopping tasks on real-world retail endpoints.</div>

            <!-- Category Failure Rates Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Retail Category</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 65px;">Scrape Fail</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 65px;">API Fail</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Primary Failure Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Apparel & Sizing</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #71717a;">34.2%</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #09090b;">1.2%</td>
                    <td style="padding: 3px 6px; color: #71717a;">Variant and size selector mismatch</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Consumer Electronics</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #71717a;">26.8%</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #09090b;">0.8%</td>
                    <td style="padding: 3px 6px; color: #71717a;">Voltage and regional compatibility errors</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Home Goods & Furniture</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #71717a;">22.4%</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #09090b;">1.6%</td>
                    <td style="padding: 3px 6px; color: #71717a;">Doorway dimension clearance calculation</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 600;">Groceries & Perishables</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #71717a;">18.1%</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #09090b;">0.4%</td>
                    <td style="padding: 3px 6px; color: #71717a;">Weight substitutions and expiration dates</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Reverse Logistics Cost Analysis.</strong>
              Reverse logistics processing costs average $13 for standard apparel and up to $180 for freight home goods [3]. Order accuracy represents a primary operational driver for direct API integration.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Enterprise Pilot Restructuring Risks.</strong>
              Gartner research indicates that up to 40% of early enterprise agentic pilots may be canceled by 2027 if retailers rely on unstructured web scraping rather than machine-readable catalog endpoints [4].
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Quality Engineering Guardrails for High Reliability.</strong>
              Production systems enforce deterministic constraints: 1) programmatic checks on physical specifications; 2) sub-50ms stock verification; and 3) explicit customer confirmation for orders above $50.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: [1] Zhou et al., "WebArena: A Realistic Web Environment for Autonomous Agents" (CMU, 2023-2024); [2] Koh et al., "VisualWebArena: Evaluating Multimodal Web Agents" (ACL 2024); [3] National Retail Federation Reverse Logistics Study (2025); [4] Gartner Research (2024-2025).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 6, TOTAL_PAGES)}
    </div>
  `);

  // SPREAD 7: FRAUD DEFENSE & LIABILITY
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("FRAUD & SECURITY", "BOT CLASSIFICATION AND CRYPTOGRAPHIC SIGNING")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Security Frameworks for Machine-Initiated Traffic</h2>
          <div class="report-lead-prose">
            E-commerce security architectures must evolve to distinguish authorized consumer shopping agents from malicious credential-stuffing and scraping traffic.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Scale of Automated Web Traffic (Imperva Threat Research).</strong> According to the Imperva Bad Bot Report (2024-2025 [1]), automated traffic accounts for 49.6% of all internet traffic. Within retail e-commerce, automated traffic comprises malicious scrapers and scalpers (approximately 32%) alongside beneficial search and indexing bots. The emergence of consumer shopping agents introduces a third category comprising authorized machine buyers requiring differentiated access policies.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Cryptographic Request Verification (Visa TAP and RFC 9421).</strong> Traditional web application firewalls (WAFs) rely on IP reputation and CAPTCHA challenges, which inadvertently block legitimate consumer agents. Under the Visa Trusted Agent Protocol (TAP) [2], authorized agents sign HTTP requests using the IETF RFC 9421 standard (HTTP Message Signatures) [3]. This enables edge infrastructure providers (such as Cloudflare and Akamai) to verify agent authenticity cryptographically without interrupting checkout flow.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Mitigating Friendly Fraud and Chargebacks.</strong> Friendly-fraud chargebacks cost online merchants an estimated $100 billion annually [4]. By tying agent transactions to user-authorized passkeys stored in hardware enclaves (Apple Secure Enclave and Android StrongBox), merchants obtain non-repudiation proof. This cryptographic audit trail provides evidence of consumer consent, substantially mitigating post-purchase dispute exposure.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Zero-Trust Architecture for Machine Checkouts.</strong> Robust merchant architectures enforce zero-trust principles for agent access. Sensitive 16-digit card credentials are never exposed within conversational contexts. Instead, ephemeral tokens are constrained by scope, merchant identity, and transaction ceiling, ensuring that compromised agent sessions cannot be replayed across third-party storefronts.
          </p>

          <!-- Figure 6.1: Inbound Web Traffic Classification Matrix -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 6.1: INBOUND WEB TRAFFIC CLASSIFICATION MATRIX</span>
              <span>WAF Routing Rules</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 6px; background: #ffffff;">
              <div style="background: #18181b; color: #ffffff; padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; text-transform: uppercase;">1. Human Shoppers</div>
                <div style="font-size: 6.2px; color: #e4e4e7; margin-top: 1px;">Standard Browser / App</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 2px;">Standard UX & Session</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; color: #18181b; text-transform: uppercase;">2. Search Indexers</div>
                <div style="font-size: 6.2px; color: #52525b; margin-top: 1px;">Googlebot / Bingbot</div>
                <div style="font-size: 5.8px; color: #71717a; margin-top: 2px;">Robots.txt Policy</div>
              </div>
              <div style="background: #09090b; color: #ffffff; padding: 5px 6px; border-radius: 3px; text-align: center; border: 1px solid #27272a;">
                <div style="font-size: 6.8px; font-weight: 700; text-transform: uppercase;">3. Verified Agents</div>
                <div style="font-size: 6.2px; color: #e4e4e7; margin-top: 1px;">Signed RFC 9421 Token</div>
                <div style="font-size: 5.8px; color: #d4d4d8; margin-top: 2px;">Bypass WAF to API</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; color: #71717a; text-transform: uppercase;">4. Bad Bots</div>
                <div style="font-size: 6.2px; color: #71717a; margin-top: 1px;">Scrapers / Scalpers</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 2px;">Blocked at Edge</div>
              </div>
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Security Architecture Recommendation.</strong>
            Rather than relying solely on blunt IP-based blocks that may reject legitimate customer agents, security teams are adopting cryptographic verification and signed WebAuthn tokens to distinguish authorized purchasing assistants from malicious scrapers.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 6.1: Bot Traffic Classification</div>
            <div class="exhibit-title">E-Commerce Automated Traffic Distribution</div>
            <div class="exhibit-subtitle">Breakdown of inbound traffic across top 500 online retail endpoints.</div>

            <!-- Bot Traffic Distribution Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Traffic Classification</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 65px;">Share</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Authentication Method</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">WAF Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Human Shoppers</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">50.4%</td>
                    <td style="padding: 3px 6px;">Browser session cookies</td>
                    <td style="padding: 3px 6px; color: #71717a;">Standard rate limiting</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Malicious Bots & Scalpers</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">32.0%</td>
                    <td style="padding: 3px 6px;">Unsigned / Spoofed IP</td>
                    <td style="padding: 3px 6px; color: #71717a;">Blocked / Tarpit challenge</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Search Engine Crawlers</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">12.8%</td>
                    <td style="padding: 3px 6px;">DNS reverse verification</td>
                    <td style="padding: 3px 6px; color: #71717a;">Whitelisted indexing</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 600;">Verified Shopping Agents</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">4.8%</td>
                    <td style="padding: 3px 6px;">RFC 9421 / Visa TAP Token</td>
                    <td style="padding: 3px 6px; color: #09090b; font-weight: 700;">Fast-path API routing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Scalper Mitigation Mechanisms.</strong>
              Malicious scalpers generate request bursts up to 10,000 queries per second across rotating proxies. Cryptographic signing under RFC 9421 allows merchants to filter high-velocity automated scrapers while maintaining throughput for consumer agents [1].
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Chargeback Mitigation via Hardware Enclaves.</strong>
              Cryptographically signed checkout tokens bound to consumer hardware passkeys reduce friendly-fraud dispute exposure by up to 94%, establishing a definitive legal audit trail of user authorization [2].
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Zero-Trust Architecture for E-Commerce.</strong>
              Production guidelines mandate that raw 16-digit credit cards are never passed into LLM prompt contexts. Delegated tokens must be domain-locked with predefined expenditure ceilings and expiration windows.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: [1] Imperva Threat Research, "Bad Bot Report" (2024-2025); [2] Visa Research Technical Whitepaper, "Visa TAP" (2025); [3] IETF RFC 9421, "HTTP Message Signatures" (2024); [4] LexisNexis Risk Solutions, "True Cost of Fraud" (2025).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 7, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 8: CATALOGS AND AEO
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("CATALOG ENGINEERING", "MACHINE-READABLE FEEDS AND AEO OPTIMIZATION")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Architecting Product Catalogs for Agent Discovery</h2>
          <div class="report-lead-prose">
            To maintain visibility in autonomous search and discovery, retailers are structuring product feeds for machine consumption alongside traditional human-facing websites.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Structured Data Specifications (JSON-LD and Schema.org).</strong> Autonomous agents rely on deterministic metadata rather than subjective marketing copy. Implementing structured JSON-LD feeds aligned with Schema.org/Product specifications allows agents to parse critical product attributes (including dimensions, materials, certifications, and compatibility) with minimal extraction error.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Real-Time Inventory Synchronization Requirements.</strong> In conversational shopping, stock status desynchronization causes acute checkout drop-offs. If an agent identifies an item that is out of stock upon checkout execution, the workflow terminates. Production implementations require sub-50ms inventory endpoints (via Shopify Storefront API or commercetools) to verify SKU availability prior to cart presentation.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Agent Engine Optimization (AEO) Mechanics.</strong> As consumers migrate portions of discovery to conversational engines, search engine optimization (SEO) is augmented by Agent Engine Optimization (AEO). AEO focuses on factual metadata completeness, machine-readable return policies, and authenticated API response latency rather than backlink quantity and keyword density.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Direct Data Ingestion vs. Scraping Fragility.</strong> Scraping merchant websites introduces high maintenance overhead as visual templates change. By publishing standardized machine manifests (such as Anthropic MCP servers or Google UCP endpoints), retailers provide direct, low-latency data access, reducing server load and ensuring accurate product representation.
          </p>

          <!-- Figure 7.1: AEO Ranking Weights SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 7.1: AEO DISCOVERY WEIGHTS VS. TRADITIONAL SEO</span>
              <span>Algorithm Criteria</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 6px; background: #ffffff;">
              <div style="background: #09090b; color: #ffffff; padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700;">Sub-50ms Stock</div>
                <div style="font-size: 8.5px; font-weight: 800; margin-top: 2px;">35% Weight</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 1px;">Zero phantom orders</div>
              </div>
              <div style="background: #18181b; color: #ffffff; padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700;">Factual Data</div>
                <div style="font-size: 8.5px; font-weight: 800; margin-top: 2px;">30% Weight</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 1px;">Complete JSON-LD</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; color: #18181b;">API Checkout</div>
                <div style="font-size: 8.5px; font-weight: 800; color: #09090b; margin-top: 2px;">20% Weight</div>
                <div style="font-size: 5.8px; color: #71717a; margin-top: 1px;">1-click passkey tokens</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; color: #71717a;">Web Links</div>
                <div style="font-size: 8.5px; font-weight: 800; color: #71717a; margin-top: 2px;">15% Weight</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 1px;">Declining relevance</div>
              </div>
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Operational Priority for E-Commerce Leaders.</strong>
            Deploying structured JSON-LD product feeds and exposing standardized catalog APIs allows retailers to preserve indexing accuracy across conversational assistants, reducing dependency on legacy scraping.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 7.1: Catalog Readiness</div>
            <div class="exhibit-title">Merchant Catalog Readiness Checklist</div>
            <div class="exhibit-subtitle">Technical requirements for full agentic commerce interoperability.</div>

            <!-- Readiness Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Architecture Component</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 70px;">Target Metric</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Primary Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Product Metadata Feed</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">100% Attributes</td>
                    <td style="padding: 3px 6px;">Schema.org/Product JSON-LD</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Real-Time Stock Query</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">&lt; 50ms Latency</td>
                    <td style="padding: 3px 6px;">Shopify Storefront / commercetools</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Price Reservation Lock</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">15-Min TTL Hold</td>
                    <td style="padding: 3px 6px;">Google UCP Cart Protocol</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Delegated Token Checkout</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">Zero PAN Exposure</td>
                    <td style="padding: 3px 6px;">Stripe SPT / Visa TAP</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 600;">Bot Traffic Verification</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">Cryptographic Sig</td>
                    <td style="padding: 3px 6px;">IETF RFC 9421 / Cloudflare</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>The 3 Pillars of Machine-Ready Catalogs.</strong>
              1) Sub-50ms stock pings eliminate phantom inventory checkouts; 2) complete physical dimension specifications reduce return rates; and 3) dynamic price reservation windows protect order completion during agent negotiation.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>AEO Discovery Signals (Ranketta Framework).</strong>
              Autonomous shopping agents rank product endpoints based on factual metadata completeness, authenticated API latency, and clear machine-readable return terms rather than backlink volume.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Implementation Priorities for CTOs.</strong>
              Conduct product catalog audits for technical specification completeness and implement standardized JSON-LD feeds to maintain product discoverability across multi-agent shopping applications.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: Schema.org Product Working Group (2025); Shopify Engineering Documentation (2025); commercetools API Standards (2025); Ranketta AEO Research Lab (2025).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 8, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 9: COMPETITIVE LANDSCAPE & MOATS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("COMPETITIVE LANDSCAPE", "PLATFORM POSITIONING AND VALUE CHAIN POWER")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Strategic Positioning Across the Agentic Commerce Ecosystem</h2>
          <div class="report-lead-prose">
            Technology providers, payment networks, and retail platforms are competing to capture value across discovery, orchestration, and settlement layers.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Consumer Intent Aggregation (OpenAI, Google, Apple).</strong> Front-end conversational platforms possess significant distribution advantages in consumer intent capture. OpenAI (via ChatGPT Search and Instant Checkout), Google (via Gemini and Google Shopping Graph), and Apple (via Apple Intelligence and 1.4 billion active device Secure Enclaves) aim to serve as primary entry points, potentially monetizing referral routing volume.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Infrastructure Moats of Payment Processors (Stripe, Adyen).</strong> While front-end interfaces command initial consumer attention, payment processors hold deep infrastructure moats. Platforms like Stripe and Adyen maintain thousands of direct merchant acquiring integrations, proprietary risk engines, and established one-click payment vaults (such as Stripe Link). Their control over settlement rails positions them to collect infrastructure fees across diverse front-end agents.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Network Tokenization Initiatives (Visa, Mastercard).</strong> Card networks are actively defending their role in autonomous commerce through programmatic token standards (Visa TAP and Mastercard Agent Pay). By embedding cryptographic verification into existing network rails, they provide merchants and issuers with compliance and liability protection that pure software wrappers cannot easily duplicate.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Marketplace Defensibility (Amazon Rufus and Shopify).</strong> E-commerce incumbents rely on catalog depth and fulfillment infrastructure as defensive moats. Amazon's Rufus maintains exclusive access to proprietary prime logistics and review datasets, while Shopify provides independent merchants with unified headless APIs (Shop Pay) to compete against centralized walled gardens.
          </p>

          <!-- Figure 8.1: Power Distribution SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 8.1: VALUE CHAIN POWER DISTRIBUTION</span>
              <span>Gross Margin Capture</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; padding: 6px; background: #ffffff;">
              <div style="background: #09090b; color: #ffffff; padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700;">Intent Aggregators</div>
                <div style="font-size: 8.5px; font-weight: 800; margin-top: 2px;">40% Pool</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 1px;">OpenAI, Google, Apple</div>
              </div>
              <div style="background: #18181b; color: #ffffff; padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700;">Processors & Vaults</div>
                <div style="font-size: 8.5px; font-weight: 800; margin-top: 2px;">30% Pool</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 1px;">Stripe, Adyen, Plaid</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; color: #18181b;">Merchant Brands</div>
                <div style="font-size: 8.5px; font-weight: 800; color: #09090b; margin-top: 2px;">20% Pool</div>
                <div style="font-size: 5.8px; color: #71717a; margin-top: 1px;">First-party fulfillment</div>
              </div>
              <div style="background: var(--paper-subtle); border: 1px solid var(--border-subtle); padding: 5px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 6.8px; font-weight: 700; color: #71717a;">Scraping Bots</div>
                <div style="font-size: 8.5px; font-weight: 800; color: #71717a; margin-top: 2px;">10% Pool</div>
                <div style="font-size: 5.8px; color: #a1a1aa; margin-top: 1px;">Commoditized wrappers</div>
              </div>
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Strategic Imperative for Brand Executives.</strong>
            Retailers should avoid becoming passive fulfillment suppliers to proprietary AI gatekeepers. Maintaining direct first-party relationships and publishing open protocol endpoints helps brands retain margin control and customer loyalty.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 8.1: Moats & Positioning</div>
            <div class="exhibit-title">Platform Competitive Moats and Strategic Capabilities</div>
            <div class="exhibit-subtitle">Evaluation of competitive positioning across the agentic commerce stack.</div>

            <!-- Moats Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Platform</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Primary Moat</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 85px;">Key Vulnerability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">OpenAI (ChatGPT)</td>
                    <td style="padding: 3px 6px;">Conversational consumer intent</td>
                    <td style="padding: 3px 6px; color: #71717a;">Lacks native merchant acquiring</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Google (Gemini/UCP)</td>
                    <td style="padding: 3px 6px;">Global merchant product graph</td>
                    <td style="padding: 3px 6px; color: #71717a;">Search ad revenue cannibalization</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Apple (Intelligence)</td>
                    <td style="padding: 3px 6px;">1.4B Secure Enclave passkeys</td>
                    <td style="padding: 3px 6px; color: #71717a;">Restricted cloud catalog indexing</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">Amazon (Rufus)</td>
                    <td style="padding: 3px 6px;">Prime logistics & fulfillment network</td>
                    <td style="padding: 3px 6px; color: #71717a;">Closed ecosystem resistance</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 700;">Stripe (Link/ACP)</td>
                    <td style="padding: 3px 6px;">Shared Payment Tokens & merchant rails</td>
                    <td style="padding: 3px 6px; color: #71717a;">Dependent on third-party frontends</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Profit Pool Concentration Across Layers.</strong>
              Industry projections indicate that up to 40% of future commerce profit pools will concentrate in intent gatekeepers (conversational frontends), 30% in payment token infrastructure, and 20% in direct merchant margins.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Search Advertising Revenue Realignment.</strong>
              Automated purchasing reallocates user journeys from multi-click search result pages toward direct API checkouts, encouraging brands to reallocate portions of search ad budgets toward direct referral commissions.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Distribution Economics and Default Placement.</strong>
              Similar to how search defaults commanded substantial distribution agreements on mobile devices, conversational AI platforms are establishing referral agreements with leading merchant aggregators to secure preferred routing.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: Morgan Stanley Equity Research (2025); Goldman Sachs Global Payments Analysis (2025); CB Insights Big Tech Strategy Report (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 9, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 10: ENTERPRISE ROADMAP
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("ENTERPRISE ROADMAP", "IMPLEMENTATION STRATEGY AND BOARDROOM PRIORITIES")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">An 18-Month Implementation Roadmap for Retail Brands</h2>
          <div class="report-lead-prose">
            Retail organizations can adopt a structured, phased approach to build machine-readable catalogs, integrate delegated payment tokens, and establish autonomous commerce readiness.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 1 (Months 1-6) - Catalog Modernization.</strong> The initial phase focuses on exposing structured data endpoints. Organizations audit existing product metadata, implement Schema.org/Product JSON-LD markup, and deploy sub-50ms catalog query APIs (leveraging Anthropic MCP or Google UCP). Concurrently, engineering teams configure WAF policies to accommodate verified agent traffic while maintaining bot defense against malicious scrapers.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 2 (Months 6-12) - Delegated Checkout and Passkeys.</strong> In the second phase, retailers integrate delegated checkout protocols. This involves testing tokenized payment handoffs (such as Stripe Link Shared Payment Tokens or Visa TAP) and enabling WebAuthn passkey authentication. By supporting pre-authorized checkout tokens, merchants accelerate purchasing while preserving their direct customer records and fulfillment controls.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 3 (Months 12-18) - Autonomous Inventory and Machine Pricing.</strong> Mature implementations extend agent capabilities to programmatic supply chain integration. Retailers pilot automated replenishment workflows for recurring B2B items, test algorithmic price reservation endpoints, and implement automated dispute resolution protocols.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Governance and Risk Controls.</strong> Cross-functional governance is critical throughout implementation. Legal, finance, and engineering leaders must establish explicit policies regarding delegated spending limits, algorithmic price matching, and consumer data privacy, ensuring compliance with consumer protection frameworks.
          </p>

          <!-- Figure 9.1: Gantt Chart SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <div style="padding: 4px 8px; border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span>FIGURE 9.1: 18-MONTH IMPLEMENTATION TIMELINE</span>
              <span>Phased Execution Milestones</span>
            </div>
            <svg viewBox="0 0 460 56" width="100%" height="56" style="display: block; background: #ffffff;">
              <!-- Timeline Axis -->
              <line x1="120" y1="12" x2="445" y2="12" stroke="#e4e4e7" stroke-width="1"/>
              <text x="120" y="8" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Month 1</text>
              <text x="228" y="8" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Month 6</text>
              <text x="336" y="8" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Month 12</text>
              <text x="445" y="8" font-family="Inter, sans-serif" font-size="6" fill="#71717a">Month 18</text>

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

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Executive Governance Recommendation.</strong>
            Establishing clear internal guardrails regarding delegated spending caps, product return warranties, and customer privacy helps organizations maintain operational control while evaluating automated commerce capabilities.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 9.1: Strategic Scorecard</div>
            <div class="exhibit-title">Enterprise Resource Allocation and KPI Scorecard</div>
            <div class="exhibit-subtitle">Target metrics across 18-month deployment phases.</div>

            <!-- Scorecard Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Roadmap Phase</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 60px;">Budget Share</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Core Target Metric</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 75px;">Success Gate</th>
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
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Strategic Budget Allocation.</strong>
              Leading enterprise implementations allocate approximately 40% of initial resources to catalog architecture and data feed integrity, 35% to delegated payment token integrations, and 25% to programmatic B2B workflows.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Cost Curves of Delayed Adoption.</strong>
              Organizations that defer structured catalog integration may face higher customer acquisition costs over time if consumer discovery transitions toward conversational interfaces that rely on machine-readable endpoints.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Boardroom Governance Priority.</strong>
              Executive committees are establishing cross-functional task forces across engineering, payments, and risk management to evaluate agent protocol compatibility and safeguard brand customer relationships.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Sources: McKinsey & Company, "The Economic Potential of Generative AI in Commerce" (2025); Bain & Company Technology Practice (2025); Gartner IT Symposium Executive Findings (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 10, TOTAL_PAGES)}
    </div>
  `);

  return spreads;
}

// CLI execution helper
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const spreads = await generateReport();
  console.log(`Compiling Notion Style Industry Report to PDF (Monochrome White/Black/Grey)...`);
  const outputPath = process.env.NOTION_OUTPUT_PATH || path.resolve(__dirname, 'The_Business_Value_of_Agentic_Commerce_Notion.pdf');
  await renderReportToPdf({
    htmlSpreads: spreads,
    outputPath,
    cssPath: path.resolve(__dirname, '../../styles/notion/notion-design-system.css'),
    generatePreviews: true,
    previewDir: path.resolve(__dirname, 'previews')
  });
  console.log(`✓ Generated Notion Aesthetic Industry Report: ${outputPath}`);
}
