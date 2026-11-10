/**
 * The State of Agentic Commerce (Notion Style Edition)
 * 
 * Publication-Grade Global Industry Research Report:
 * - Pure Inter Google Fonts typography (bold 700 headings, deep ink #09090b)
 * - Ultra-minimalist Monochrome Palette: Pure White, Black, and Grayscale (matching hashtagweb3.com & web3-jobs)
 * - Zero blue color anywhere in layout, badges, charts, or borders
 * - Multi-column editorial report format with comprehensive research prose
 * - Visual publication exhibits: Grayscale SVG column charts, 7-layer architecture stack,
 *   protocol matrices, horizontal bar ranking charts, threat charts,
 *   tripartite liability matrices, Gartner maturity chevrons, and roadmap timeline
 * - Zero presentation carditis, zero empty space, zero line collisions.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderReportToPdf } from '../../bvod-engine/engine.mjs';
import * as notion from '../../styles/notion/notion-components.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateReport() {
  const TOTAL_PAGES = 10;
  const FOOTER_TITLE = "The State of Agentic Commerce";
  const spreads = [];

  const coverIllustrationPath = path.resolve(__dirname, '../../assets/illustrations/agentic-commerce-cover.jpg');
  const coverIllustrationBase64 = fs.existsSync(coverIllustrationPath)
    ? fs.readFileSync(coverIllustrationPath).toString('base64')
    : '';

  const techArchIllustrationPath = path.resolve(__dirname, '../../assets/illustrations/agentic-tech-architecture.jpg');
  const techArchIllustrationBase64 = fs.existsSync(techArchIllustrationPath)
    ? fs.readFileSync(techArchIllustrationPath).toString('base64')
    : '';

  // ==========================================
  // SPREAD 1: COVER PAGE
  // ==========================================
  spreads.push(`
    <div class="spread cover-spread" style="padding: 24mm 24mm 16mm 24mm; justify-content: space-between;">
      <div style="display: flex; gap: 40px; align-items: center; margin: auto 0;">
        <div style="flex: 1.25;">
          <h1 style="font-size: 46px; line-height: 1.12; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.03em; margin-bottom: 16px;">
            The State of<br>Agentic Commerce
          </h1>
          <p style="font-size: 15px; line-height: 1.55; color: var(--ink-secondary); max-width: 580px; margin-bottom: 32px;">
            How AI agents buy online: market projections, technical architecture, and the roadmap for brands.
          </p>
          
          <div style="display: flex; gap: 24px; margin-top: 10px;">
            <div style="border-left: 3px solid var(--ink-heading); padding-left: 14px;">
              <div style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: var(--ink-heading);">$1.5T BY 2030</div>
              <div style="font-size: 9.5px; color: var(--ink-secondary); margin-top: 3px;">Online purchases made by AI</div>
            </div>
            <div style="border-left: 3px solid var(--ink-heading); padding-left: 14px;">
              <div style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: var(--ink-heading);">7-LAYER STACK</div>
              <div style="font-size: 9.5px; color: var(--ink-secondary); margin-top: 3px;">From chatbot search to checkout</div>
            </div>
            <div style="border-left: 3px solid var(--ink-heading); padding-left: 14px;">
              <div style="font-size: 13px; font-weight: 800; text-transform: uppercase; color: var(--ink-heading);">57.2% PASS RATE</div>
              <div style="font-size: 9.5px; color: var(--ink-secondary); margin-top: 3px;">Shopping accuracy of top AI models</div>
            </div>
          </div>
        </div>
        
        <div style="flex: 0.95; display: flex; justify-content: flex-end; align-items: center;">
          <img src="data:image/jpeg;base64,${coverIllustrationBase64}" style="max-width: 440px; width: 100%; height: auto; object-fit: contain; mix-blend-mode: multiply;" alt="Agentic Commerce Architecture" />
        </div>
      </div>

      <div style="border-top: 1px solid var(--border); padding-top: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 12px; font-weight: 700; color: var(--ink-heading);">Vedang Ratan Vatsa</div>
          <div style="font-size: 9.5px; color: var(--ink-secondary); margin-top: 2px;">Founder, Hashtag Web3 &nbsp;|&nbsp; Lead Researcher, veda.ng</div>
        </div>
      </div>
    </div>
  `);

  // ==========================================
  // SPREAD 2: EXECUTIVE SUMMARY & MACRO PROJECTIONS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("EXECUTIVE SUMMARY", "HOW FAST WILL AI SHOPPING GROW?")}
      
      <div class="report-content-wrapper" style="justify-content: flex-start; gap: 12px;">
        <div class="report-tier-top">
          <div class="report-main-col">
            <h2 class="report-headline">How AI Changes Online Shopping</h2>
            <div class="report-lead-prose">
              AI is moving from chatting to buying things. Soon, software agents won't just answer questions; they will find products, compare prices, and complete checkouts on their own. This is the biggest shift in online shopping since the web browser.
            </div>

            <p class="report-p">
              <strong>The End of Clicking on Ads:</strong> For thirty years, online shopping relied on human attention. Brands spent billions designing websites, bidding on search keywords, and tweaking checkout buttons to catch shoppers' eyes. When people let AI agents handle shopping, humans stop browsing stores. In an agent economy, payments become the new ads: when computers choose what to buy, traditional search and display ads stop working. Instead, brands must make their products easy for AI bots to find, evaluate, and purchase automatically.
            </p>

            <p class="report-p">
              <strong>The 2028 Tipping Point:</strong> Forecasts from Morgan Stanley, Bain & Company, and Gartner show agent shopping growing fast. Starting from around $12 billion in 2025, purchases made by AI agents are expected to reach $1.45 trillion by 2030 (about 15% of all global online sales). Growth will start steadily as tools are built, then take off around 2028 once common communication rules and virtual cards become widespread.
            </p>

            <p class="report-p">
              <strong>What Still Holds AI Back:</strong> AI shopping bots still make mistakes. Visa Research tested 22 leading AI models on real shopping tasks and found they succeeded only 57.2% of the time. While AI is great at searching product lists, it often misses basic details like room measurements, product compatibility, or delivery windows. At the same time, over half of shoppers do not trust AI with their credit cards yet without strict spending limits and clear refund rules.
            </p>

            <div class="exhibit-analysis-box" style="margin-top: 4px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
              <strong>Key Takeaway for Retailers:</strong>
              Retailers who treat AI agents like just another mobile app will lose customers. Brands must connect their product catalogs directly to AI search tools and APIs, or machine shoppers simply will not find them.
            </div>
          </div>

          <div class="report-exhibit-col">
            <div class="exhibit-container">
              <div class="exhibit-tag">Exhibit 1.1: Market Forecast</div>
              <div class="exhibit-title">Total Online Purchases Made by AI (2025-2030)</div>
              <div class="exhibit-subtitle">Expected growth in global spending by AI bots over the next five years.</div>

              <!-- Monochrome SVG Column Growth Chart (Zero Overlap in 2028E) -->
              <div class="chart-container" style="padding: 8px 12px 6px 12px; margin: 4px 0;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                  <span style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-heading);">Total AI Purchases ($ Billions)</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #18181b; background: #e4e4e7; padding: 1.5px 5px; border-radius: 2px;">2028: Fast Growth Begins</span>
                </div>
                
                <svg viewBox="0 0 460 135" style="width: 100%; height: auto; display: block;">
                  <!-- Dotted Grid lines -->
                  <line x1="38" y1="16" x2="450" y2="16" stroke="#e4e4e7" stroke-dasharray="2 2" stroke-width="1" />
                  <text x="32" y="19" font-size="7.2" fill="#a1a1aa" text-anchor="end" font-family="Inter, sans-serif">$1,500B</text>

                  <line x1="38" y1="48" x2="450" y2="48" stroke="#e4e4e7" stroke-dasharray="2 2" stroke-width="1" />
                  <text x="32" y="51" font-size="7.2" fill="#a1a1aa" text-anchor="end" font-family="Inter, sans-serif">$1,000B</text>

                  <line x1="38" y1="80" x2="450" y2="80" stroke="#e4e4e7" stroke-dasharray="2 2" stroke-width="1" />
                  <text x="32" y="83" font-size="7.2" fill="#a1a1aa" text-anchor="end" font-family="Inter, sans-serif">$500B</text>

                  <line x1="38" y1="110" x2="450" y2="110" stroke="#d4d4d8" stroke-width="1" />
                  <text x="32" y="113" font-size="7.2" fill="#a1a1aa" text-anchor="end" font-family="Inter, sans-serif">$0</text>

                  <!-- Grayscale Bars -->
                  <rect x="54" y="108" width="38" height="2" rx="1" fill="#d4d4d8" />
                  <text x="73" y="103" font-size="7.2" font-weight="700" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">$12B</text>
                  <text x="73" y="122" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle" font-family="Inter, sans-serif">2025</text>
                  <text x="73" y="130" font-size="6.3" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">0.2% E-Com</text>

                  <rect x="122" y="106" width="38" height="4" rx="1" fill="#a1a1aa" />
                  <text x="141" y="101" font-size="7.2" font-weight="700" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">$41B</text>
                  <text x="141" y="122" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle" font-family="Inter, sans-serif">2026E</text>
                  <text x="141" y="130" font-size="6.3" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">0.7% E-Com</text>

                  <rect x="190" y="96" width="38" height="14" rx="1" fill="#71717a" />
                  <text x="209" y="90" font-size="7.2" font-weight="700" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">$165B</text>
                  <text x="209" y="122" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle" font-family="Inter, sans-serif">2027E</text>
                  <text x="209" y="130" font-size="6.3" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">2.4% E-Com</text>

                  <!-- 2028E Inflection Bar (Clean label, zero overlap) -->
                  <rect x="258" y="70" width="38" height="40" rx="2" fill="#3f3f46" />
                  <text x="277" y="63" font-size="7.5" font-weight="800" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">$480B</text>
                  <text x="277" y="122" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle" font-family="Inter, sans-serif">2028E</text>
                  <text x="277" y="130" font-size="6.3" font-weight="700" fill="#18181b" text-anchor="middle" font-family="Inter, sans-serif">6.1% E-Com</text>

                  <rect x="326" y="38" width="38" height="72" rx="2" fill="#27272a" />
                  <text x="345" y="31" font-size="7.5" font-weight="800" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">$920B</text>
                  <text x="345" y="122" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle" font-family="Inter, sans-serif">2029E</text>
                  <text x="345" y="130" font-size="6.3" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">10.3% E-Com</text>

                  <rect x="394" y="10" width="38" height="100" rx="2" fill="#09090b" />
                  <text x="413" y="4" font-size="8" font-weight="800" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">$1,450B</text>
                  <text x="413" y="122" font-size="7.2" font-weight="800" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">2030E</text>
                  <text x="413" y="130" font-size="6.3" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">14.8% E-Com</text>
                </svg>
              </div>

              <!-- Spending Category Strip -->
              <div style="background: var(--paper-subtle); border: 1px solid var(--border); border-radius: 3px; padding: 4px 8px; margin-top: 4px;">
                <div style="display: flex; justify-content: space-between; font-size: 7.2px; color: var(--ink);">
                  <span><strong>Supplies:</strong> $480B (33%)</span>
                  <span><strong>Software & Cloud:</strong> $390B (27%)</span>
                  <span><strong>Travel & Flights:</strong> $320B (22%)</span>
                  <span><strong>Retail:</strong> $260B (18%)</span>
                </div>
              </div>

              <div class="exhibit-source-note" style="margin-top: 4px;">
                Source: Synthesized from Morgan Stanley, Bain & Company, and Gartner Research (2025-2026).
              </div>
            </div>
          </div>
        </div>

        <!-- Lower Tier: Market Value Shifts -->
        <div class="report-tier-bottom">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
            <div>
              <span class="exhibit-tag">Exhibit 1.2: Market Reallocation</span>
              <span class="exhibit-title" style="font-size: 12px; margin-left: 8px;">Where Value Shifts: The 3 Winners and 3 Losers of the Agent Economy</span>
            </div>
            <div style="font-size: 7.5px; color: var(--ink-secondary);">$1.45T Global Commerce Redistribution by 2030</div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
            <!-- Category 1: Traditional Ads Displaced -->
            <div style="background: var(--paper-card); border: 1px solid var(--border); border-top: 3px solid #71717a; border-radius: 4px; padding: 8px 10px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 7px; font-weight: 800; background: #f4f4f5; color: #52525b; border: 1px solid #e4e4e7; padding: 1.5px 5px; border-radius: 2px;">VULNERABLE SECTOR</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #09090b;">-$120B Ad Spend Shift</span>
                </div>
                <div style="font-size: 9.2px; font-weight: 700; color: var(--ink-heading); margin-bottom: 3px;">Search Engines & Human Ad Clicks</div>
                <div style="font-size: 7.5px; color: var(--ink-secondary); line-height: 1.4;">
                  When AI handles shopping, humans stop clicking sponsored links. Traditional pay-per-click search ad auctions face structural declines as buyers bypass search results entirely.
                </div>
              </div>
              <div style="margin-top: 8px; font-size: 7px; color: var(--ink); border-top: 1px solid var(--border-subtle); padding-top: 4px; display: flex; justify-content: space-between;">
                <span>Displaced: <strong>Keyword Bidding & Banners</strong></span>
                <span>Margin Pressure: <strong>High</strong></span>
              </div>
            </div>

            <!-- Category 2: Agent Protocols & Gatekeepers -->
            <div style="background: var(--paper-card); border: 1px solid var(--border); border-top: 3px solid #09090b; border-radius: 4px; padding: 8px 10px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 7px; font-weight: 800; background: #09090b; color: white; padding: 1.5px 5px; border-radius: 2px;">PRIMARY WINNER</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #18181b;">+$85B Routing Fees</span>
                </div>
                <div style="font-size: 9.2px; font-weight: 700; color: var(--ink-heading); margin-bottom: 3px;">AI Decision Apps & Protocols</div>
                <div style="font-size: 7.5px; color: var(--ink-secondary); line-height: 1.4;">
                  AI assistants (ChatGPT, Gemini, Claude) become the new commercial gatekeepers. They earn high-margin referral and protocol routing fees on every autonomous order placed.
                </div>
              </div>
              <div style="margin-top: 8px; font-size: 7px; color: var(--ink); border-top: 1px solid var(--border-subtle); padding-top: 4px; display: flex; justify-content: space-between;">
                <span>Value Driver: <strong>Owning Customer Intent</strong></span>
                <span>Pricing Power: <strong>Dominant</strong></span>
              </div>
            </div>

            <!-- Category 3: Tokenized Payment Vaults -->
            <div style="background: var(--paper-card); border: 1px solid var(--border); border-top: 3px solid #27272a; border-radius: 4px; padding: 8px 10px; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                  <span style="font-size: 7px; font-weight: 800; background: #27272a; color: white; padding: 1.5px 5px; border-radius: 2px;">SECURE RAILS</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #18181b;">+$95B Token Volume</span>
                </div>
                <div style="font-size: 9.2px; font-weight: 700; color: var(--ink-heading); margin-bottom: 3px;">Tokenized Payment Vaults & APIs</div>
                <div style="font-size: 7.5px; color: var(--ink-secondary); line-height: 1.4;">
                  Banks and card networks (Visa, Mastercard, Stripe) transition from 16-digit plastic cards to cryptographically bound tokens with biometric passkeys, capturing premium settlement volume.
                </div>
              </div>
              <div style="margin-top: 8px; font-size: 7px; color: var(--ink); border-top: 1px solid var(--border-subtle); padding-top: 4px; display: flex; justify-content: space-between;">
                <span>Value Driver: <strong>Zero-Liability Fraud Proof</strong></span>
                <span>Moat: <strong>Global Banking Scale</strong></span>
              </div>
            </div>
          </div>

          <!-- Bottom takeaway bar -->
          <div style="background: var(--paper-subtle); border: 1px solid var(--border); border-radius: 3px; padding: 5px 10px; margin-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 7.5px;">
            <span><strong>Market Reallocation:</strong> Value shifts away from websites that monetize human browsing toward platforms that handle customer intent and payment settlement.</span>
            <span style="font-weight: 700; color: var(--ink-heading);">Imperative: Connect catalogs directly to AI intent channels</span>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 2, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 3: MARKET MAP & THE 7-LAYER STACK
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("TECH ARCHITECTURE", "HOW AI SHOPPING WORKS IN 7 STEPS")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">The 7 Parts of the AI Shopping Stack</h2>
          <div class="report-lead-prose">
            Buying things with AI requires a complete stack of tools, from the chatbot you talk with to the bank that approves the payment.
          </div>

          <p class="report-p">
            <strong>From Chatbots to Common Rules:</strong> At the top is Layer 1, the AI apps where people ask for things (like ChatGPT, Google Gemini, Claude, and Perplexity). When you tell a chatbot to buy running shoes, it cannot purchase them alone. It relies on Layer 2 and Layer 3, common communication rules (like Anthropic MCP, Google UCP, and Stripe ACP). These protocols translate your natural words into structured computer instructions so the AI can look up products and check real-time store stock.
          </p>

          <p class="report-p">
            <strong>Virtual Cards and Automated Checkout:</strong> Most online stores today cannot accept AI orders directly. That is why Layer 4 (card issuers like Lithic, Stripe, and Marqeta) create temporary virtual credit cards for each purchase. At the same time, checkout tools (Layer 5) act like automated hands, filling out web forms, selecting shipping options, and clicking purchase buttons without tripping security alarms.
          </p>

          <p class="report-p">
            <strong>Store Catalogs and Live Stock:</strong> At the base of the stack is Layer 6, the store inventory systems. Platforms like Shopify, commercetools, and Salesforce must share real-time prices, available sizes, and delivery promises in clean machine data. If a store shows outdated inventory, the AI tries to buy an item that is already sold out, crashing the entire checkout session.
          </p>

          <!-- Editorial Architecture Illustration -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 8px; background: #ffffff;">
            <img src="data:image/jpeg;base64,${techArchIllustrationBase64}" style="width: 100%; height: auto; max-height: 185px; display: block; object-fit: contain; mix-blend-mode: multiply;" alt="Technical Architecture Diagram" />
            <div style="padding: 4px 8px; border-top: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span><strong>Figure 2.1: The Autonomous Shopping Protocol Loop</strong> &mdash; From prompt to settlement</span>
              <span>Stripe Press / Notion Schematic</span>
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for Developers:</strong>
            Simulating human web browsers with headless bots fails over 20% of the time due to changing buttons and popup ads. Retailers must build clean, direct APIs so AI agents can read prices and check out with sub-second reliability.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 2.1: Tech Architecture</div>
            <div class="exhibit-title">The 7-Layer Shopping Stack & Key Companies</div>
            <div class="exhibit-subtitle">From the chatbot you ask to the bank that approves payment.</div>

            <!-- Monochrome 7-Layer Stack Architecture Component -->
            <div class="stack-list" style="margin: 2px 0;">
              <div class="stack-layer-card" style="border-left: 3px solid #09090b; padding: 5px 8px;">
                <span class="stack-layer-badge">L1</span>
                <span class="stack-layer-title">Chatbots & Shopping Apps</span>
                <span class="stack-layer-latency">500-2500ms</span>
                <span class="stack-layer-players">OpenAI, Google Gemini, Claude, Perplexity</span>
              </div>
              <div class="stack-layer-card" style="border-left: 3px solid #18181b; padding: 5px 8px;">
                <span class="stack-layer-badge">L2</span>
                <span class="stack-layer-title">AI Planning & Decision Engines</span>
                <span class="stack-layer-latency">200-800ms</span>
                <span class="stack-layer-players">LangGraph, CrewAI, AutoGPT, LlamaIndex</span>
              </div>
              <div class="stack-layer-card" style="border-left: 3px solid #27272a; padding: 5px 8px;">
                <span class="stack-layer-badge">L3</span>
                <span class="stack-layer-title">Common Shopping Protocols</span>
                <span class="stack-layer-latency">50-200ms</span>
                <span class="stack-layer-players">Google UCP, Stripe ACP, Visa TAP, MCP</span>
              </div>
              <div class="stack-layer-card" style="border-left: 3px solid #3f3f46; padding: 5px 8px;">
                <span class="stack-layer-badge">L4</span>
                <span class="stack-layer-title">Store Catalogs & Live Inventory</span>
                <span class="stack-layer-latency">20-100ms</span>
                <span class="stack-layer-players">Shopify, commercetools, Salesforce</span>
              </div>
              <div class="stack-layer-card" style="border-left: 3px solid #52525b; padding: 5px 8px;">
                <span class="stack-layer-badge" style="background: #3f3f46;">L5</span>
                <span class="stack-layer-title">Automated Checkout & Cart Tools</span>
                <span class="stack-layer-latency">1000-4000ms</span>
                <span class="stack-layer-players">Rye, Induced AI, CartAI, AutoCheckout</span>
              </div>
              <div class="stack-layer-card" style="border-left: 3px solid #71717a; padding: 5px 8px;">
                <span class="stack-layer-badge" style="background: #27272a;">L6</span>
                <span class="stack-layer-title">Card Issuers & Payment Networks</span>
                <span class="stack-layer-latency">100-400ms</span>
                <span class="stack-layer-players">Visa, Mastercard, Stripe, Lithic</span>
              </div>
              <div class="stack-layer-card" style="border-left: 3px solid #a1a1aa; padding: 5px 8px;">
                <span class="stack-layer-badge" style="background: #18181b;">L7</span>
                <span class="stack-layer-title">Passkeys, Fingerprint & Fraud Defense</span>
                <span class="stack-layer-latency">10-50ms</span>
                <span class="stack-layer-players">Apple Secure Enclave, FIDO2, WebAuthn</span>
              </div>
            </div>

            <!-- Value Capture Breakdown Box -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Who Makes the Money in AI Shopping:</strong>
              <div style="margin-top: 4px; font-size: 8px; line-height: 1.44; color: var(--ink);">
                - <strong>Layer 1 (Chatbots & Apps):</strong> They own customer intent and take 5% to 15% referral commissions on purchases.<br>
                - <strong>Layers 2 & 3 (Rules & Networks):</strong> Earn high-margin infrastructure fees on every completed transaction.<br>
                - <strong>Layers 4 & 5 (Cart Tools):</strong> Temporary bridges that face declining margins once stores build direct APIs.<br>
                - <strong>Layers 6 & 7 (Store Catalogs & Security):</strong> Mission-critical infrastructure with sticky enterprise SaaS revenue.
              </div>
            </div>

            <!-- Failure Breakdown Box -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Where Orders Fail Today (The 21% Bottleneck):</strong>
              <div style="margin-top: 4px; font-size: 8px; line-height: 1.44; color: var(--ink);">
                - <strong>Web Bot Blocks (14.2%):</strong> Store firewalls mistake shopping bots for malicious crawlers and block the checkout.<br>
                - <strong>DOM Layout Shifts (4.8%):</strong> Redesigned checkout buttons or popup discount banners cause bots to click the wrong element.<br>
                - <strong>Virtual Card Declines (2.4%):</strong> Conservative anti-fraud filters reject single-use virtual credit cards.
              </div>
            </div>

            <!-- Strategic Rule for Brands Box -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Three Strategic Rules for Retailers:</strong>
              <div style="margin-top: 4px; font-size: 8px; line-height: 1.44; color: var(--ink);">
                - <strong>Direct Catalog APIs:</strong> Connect inventory directly to AI search tools via MCP to prevent out-of-stock orders.<br>
                - <strong>Biometric Passkeys:</strong> Support phone fingerprint and FaceID tokens to cut checkout failures from 21% down to under 1%.<br>
                - <strong>Protocol Neutrality:</strong> Deploy both Google UCP and Stripe ACP so any AI bot can discover and purchase products.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Ecosystem analysis based on documentation and disclosures from OpenAI, Anthropic, Google, Stripe, Visa, and Shopify (2025-2026).
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
      ${notion.renderHeader("SHOPPING PROTOCOLS", "COMPARING THE 5 MAIN PROTOCOLS: UCP, ACP, AP2, TAP, MCP")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How AI Agents Talk to Online Stores</h2>
          <div class="report-lead-prose">
            Tech companies and payment giants are competing to create the standard format that lets AI bots search store shelves and buy items safely.
          </div>

          <p class="report-p">
            <strong>Competing Ways for AI to Buy:</strong> Right now, different tech giants use different rules. Google and Shopify built the Universal Commerce Protocol (UCP), an open system that lets any store list its products for AI. Meanwhile, OpenAI and Stripe built the Agentic Commerce Protocol (ACP), a fast checkout system designed specifically for ChatGPT. In crypto, Coinbase created AP2 for micro-payments using digital currency.
          </p>

          <p class="report-p">
            <strong>How Visa and Mastercard Protect Payments:</strong> Visa and Mastercard want to keep payments safe. Instead of letting AI hold your credit card number, Visa's Trusted Agent Protocol (TAP) creates secure digital tokens with strict spending rules, like "spend up to $50 only at this specific store today."
          </p>

          <p class="report-p">
            <strong>Anthropic's MCP Connects the Data:</strong> While other rules handle checkout, Anthropic's Model Context Protocol (MCP) helps AI read store databases. It gives AI a clean way to ask: "Is this shoe in stock in size 10, and can it arrive by Thursday?"
          </p>

          <!-- SVG Protocol Architecture Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              Protocol Handshake Flow Architecture
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- Node 1: Chatbot Intent -->
              <rect x="2" y="8" width="98" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="51" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">1. Intent Query</text>
              <text x="51" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">ChatGPT / Claude</text>
              <text x="51" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Natural Language</text>

              <!-- Arrow 1 -> 2 -->
              <line x1="102" y1="38" x2="118" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="118,35 124,38 118,41" fill="#71717a" />

              <!-- Node 2: Live Stock (MCP) -->
              <rect x="126" y="8" width="98" height="60" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2" />
              <text x="175" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">2. Live Catalog</text>
              <text x="175" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Anthropic MCP</text>
              <text x="175" y="52" font-size="6" font-weight="600" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">Sub-50ms JSON Feed</text>

              <!-- Arrow 2 -> 3 -->
              <line x1="226" y1="38" x2="242" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="242,35 248,38 242,41" fill="#71717a" />

              <!-- Node 3: Signed Cart (UCP) -->
              <rect x="250" y="8" width="98" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="299" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">3. Cart & Tax</text>
              <text x="299" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Google / Shopify UCP</text>
              <text x="299" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">15-Min Price Lock</text>

              <!-- Arrow 3 -> 4 -->
              <line x1="350" y1="38" x2="366" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="366,35 372,38 366,41" fill="#71717a" />

              <!-- Node 4: Bound Token (Visa TAP) -->
              <rect x="374" y="8" width="84" height="60" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1" />
              <text x="416" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">4. Settlement</text>
              <text x="416" y="38" font-size="6.5" fill="#a1a1aa" text-anchor="middle" font-family="Inter, sans-serif">Visa TAP Token</text>
              <text x="416" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">FaceID / $0 Fraud</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 3.1: The 4-Step Standard Protocol Handshake &mdash; From natural query to cryptographic bank settlement
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Recommendation for Engineering Leaders:</strong>
            Don't rely on just one AI platform. Build open interfaces using tools like MCP for searching stock, and use standard digital tokens with clear spending limits for payments.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 3.1: Protocol Comparison</div>
            <div class="exhibit-title">Comparing the 5 Main AI Shopping Protocols</div>
            <div class="exhibit-subtitle">How top tech companies let AI search store shelves and checkout.</div>

            <table class="notion-table" style="table-layout: fixed; margin: 4px 0;">
              <thead>
                <tr>
                  <th style="width: 16%;">Protocol</th>
                  <th style="width: 22%;">Primary Backer</th>
                  <th style="width: 30%;">What It Does</th>
                  <th style="width: 18%;">Payment Approval</th>
                  <th style="width: 14%;">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>UCP</strong></td>
                  <td>Google, Shopify</td>
                  <td>Open search and cart checkout across stores.</td>
                  <td>Phone Passkey</td>
                  <td><span style="font-size: 7px; background: #f4f4f5; color: #18181b; border: 1px solid #e4e4e7; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">Open</span></td>
                </tr>
                <tr>
                  <td><strong>ACP</strong></td>
                  <td>OpenAI, Stripe</td>
                  <td>Instant one-click checkout inside ChatGPT.</td>
                  <td>Saved Card Token</td>
                  <td><span style="font-size: 7px; background: #f4f4f5; color: #52525b; border: 1px solid #e4e4e7; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">Closed</span></td>
                </tr>
                <tr>
                  <td><strong>AP2</strong></td>
                  <td>Coinbase, Base</td>
                  <td>Instant micro-payments in digital dollars.</td>
                  <td>Crypto Wallet Key</td>
                  <td><span style="font-size: 7px; background: #ffffff; color: #71717a; border: 1px solid #e4e4e7; padding: 1.5px 5px; border-radius: 2px; font-weight: 600;">Testing</span></td>
                </tr>
                <tr>
                  <td><strong>Visa TAP</strong></td>
                  <td>Visa, Banks</td>
                  <td>Sets strict spending limits on bank tokens.</td>
                  <td>Digital Passkey</td>
                  <td><span style="font-size: 7px; background: #18181b; color: #ffffff; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">Active</span></td>
                </tr>
                <tr>
                  <td><strong>MCP</strong></td>
                  <td>Anthropic, OSS</td>
                  <td>Lets AI read live stock and store prices.</td>
                  <td>Direct Secure API</td>
                  <td><span style="font-size: 7px; background: #18181b; color: #ffffff; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">Active</span></td>
                </tr>
              </tbody>
            </table>

            <!-- Exhibit Box 1: Open vs Closed -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Open Standards vs. Closed App Platforms:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - <strong>Open Standards (UCP + MCP):</strong> Stores keep direct customer relationships, control pricing, and avoid high platform referral taxes.<br>
                - <strong>Closed Platforms (ACP):</strong> AI chatbots manage the entire checkout, turning stores into backend suppliers.
              </div>
            </div>

            <!-- Exhibit Box 2: Handshake Mechanics -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">The 3-Step Handshake: From Query to Bank Receipt:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - <strong>Step 1 (Catalog Discovery):</strong> Sub-50ms structured JSON query verifies size, color, and delivery promises.<br>
                - <strong>Step 2 (Cart Assembly):</strong> Merchant issues a cryptographically signed transaction intent with a 15-minute price lock.<br>
                - <strong>Step 3 (Settlement):</strong> Single-use token cryptographically restricted to merchant domain is transmitted to bank.
              </div>
            </div>

            <!-- Exhibit Box 3: Strategic Recommendation -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Engineering Strategy for Retail Brands:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Deploy Anthropic MCP on your product catalog now to ensure all AI models can search live stock.<br>
                - Connect to Visa TAP for payments so shoppers can approve orders with phone FaceID without typing card numbers.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Technical specifications from Google (UCP), Stripe (ACP), Coinbase (AP2), Visa (TAP), and Anthropic (MCP) (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 4, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 5: FINANCIAL INFRASTRUCTURE & PAYMENT RAILS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("PAYMENTS", "HOW AI BOTS PAY AND WHY OLD CREDIT CARDS FAIL")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How AI Agents Will Pay for Things</h2>
          <div class="report-lead-prose">
            Virtual credit cards work as a temporary bridge today, but digital bank tokens and instant stablecoins will become the permanent rails for machine shopping.
          </div>

          <p class="report-p">
            <strong>Why Virtual Cards Are Only a Temporary Fix:</strong> Today, services like Stripe and Lithic give AI bots temporary virtual credit cards to buy products. While this works on existing store websites, it causes headaches: fraud filters often flag virtual cards as suspicious, and nearly 1 in 7 transactions get declined because machine purchases look identical to card fraud.
          </p>

          <p class="report-p">
            <strong>The Rise of Safe Agent Tokens:</strong> Payment networks are creating dedicated digital tokens for AI shoppers. Instead of sharing a 16-digit credit card number, your bank gives the AI a one-time digital pass with strict limits: for example, "approved to spend up to $75 at Nike within the next 20 minutes." If the bot makes a mistake, the buyer is fully protected.
          </p>

          <p class="report-p">
            <strong>Credit Cards vs Instant Digital Dollars:</strong> Traditional credit card processing fees (around 3%) and multi-day bank transfers are too expensive and slow for AI bots that make dozens of small purchases per day. Startups are testing digital dollar stablecoins (like USDC) that let bots pay fractions of a cent instantly with near-zero fees.
          </p>

          <!-- SVG Tokenized Payment Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              The Delegated Token Payment Handshake
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- User Biometric -->
              <rect x="2" y="8" width="98" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="51" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">1. User Approval</text>
              <text x="51" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">FaceID / TouchID</text>
              <text x="51" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Sets $75 Spend Cap</text>

              <!-- Arrow 1 -> 2 -->
              <line x1="102" y1="38" x2="118" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="118,35 124,38 118,41" fill="#71717a" />

              <!-- Hardware Enclave -->
              <rect x="126" y="8" width="98" height="60" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2" />
              <text x="175" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">2. Secure Vault</text>
              <text x="175" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Apple Secure Enclave</text>
              <text x="175" y="52" font-size="6" font-weight="600" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">Cryptographic Key</text>

              <!-- Arrow 2 -> 3 -->
              <line x1="226" y1="38" x2="242" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="242,35 248,38 242,41" fill="#71717a" />

              <!-- Bound Token -->
              <rect x="250" y="8" width="98" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="299" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">3. Bound Token</text>
              <text x="299" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Visa TAP / Mastercard</text>
              <text x="299" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Merchant-Locked</text>

              <!-- Arrow 3 -> 4 -->
              <line x1="350" y1="38" x2="366" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="366,35 372,38 366,41" fill="#71717a" />

              <!-- Merchant Bank -->
              <rect x="374" y="8" width="84" height="60" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1" />
              <text x="416" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">4. Bank Vault</text>
              <text x="416" y="38" font-size="6.5" fill="#a1a1aa" text-anchor="middle" font-family="Inter, sans-serif">Acquiring Bank</text>
              <text x="416" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Instant Settle</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 4.1: The Delegated Token Payment Handshake &mdash; Biometric authorization to cryptographic settlement
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Takeaway for Banks and Payment Companies:</strong>
            Virtual credit cards are a temporary bridge for the next 2 to 3 years. Banks and payment providers should test native token systems (like Visa TAP) now so they are ready when virtual cards become obsolete.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 4.1: Payment Methods</div>
            <div class="exhibit-title">Why Regular Cards Fail and What Replaces Them</div>
            <div class="exhibit-subtitle">Comparing order failure rates across 5 different ways AI pays online.</div>

            <!-- Grayscale Bar Chart: Decline Rates -->
            <div class="chart-container" style="padding: 6px 10px; margin: 3px 0;">
              <div style="font-size: 7.8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-heading); margin-bottom: 4px;">
                Order Failure Rates Across Payment Methods
              </div>

              <div class="bar-chart-list">
                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>1. Automated Web Clicks (Bot fills form)</span>
                    <span style="color: #09090b; font-weight: 700;">28.6% Failed</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 95%; background: #09090b;">28.6% (Blocked by firewalls & CAPTCHAs)</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>2. Saved Credit Card on File</span>
                    <span style="color: #27272a; font-weight: 700;">14.2% Failed</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 47%; background: #3f3f46;">14.2% (Store fraud filters)</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>3. One-Time Virtual Credit Card</span>
                    <span style="color: #3f3f46; font-weight: 700;">4.1% Failed</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 14%; background: #52525b;">4.1%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>4. Bank Digital Passkey (Visa TAP)</span>
                    <span style="color: #52525b; font-weight: 700;">1.8% Failed</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 6%; background: #71717a;">1.8%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>5. Instant Digital Dollars (USDC)</span>
                    <span style="color: #18181b; font-weight: 700;">0.3% Failed</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 2.5%; min-width: 26px; background: #a1a1aa; color: #18181b; font-size: 6.8px; padding: 0;">0.3%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Exhibit Box 1: Rails Comparison -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Comparing Emerging Autonomous Payment Rails:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - <strong>Virtual Cards (Stripe/Lithic):</strong> 95.9% pass rate; standard 2.9% swipe fees; works on all websites today.<br>
                - <strong>Bank Passkeys (Visa TAP):</strong> 98.2% pass rate; biometric thumbprint authorization; eliminates chargeback risk.<br>
                - <strong>Stablecoins (USDC/Base):</strong> 99.7% pass rate; sub-cent fees; instant settlement for high-frequency bots.
              </div>
            </div>

            <!-- Exhibit Box 2: 3D Secure Friction -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Why 3D Secure Fails Autonomous Shoppers:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - SMS codes and popup verification boxes cause 42% of machine checkouts to fail.<br>
                - Pre-authorized biometric passkeys allow the shopper to grant permission beforehand, eliminating checkout drop-offs.
              </div>
            </div>

            <!-- Exhibit Box 3: Treasury Impact -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Treasury & Revenue Impact for Retailers:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Lowering checkout declines from 14% to 1.8% recovers $32M in lost annual sales per $1B in online volume.<br>
                - Direct token settlement cuts credit card interchange costs by 120 basis points.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Visa Research ("Autonomous Payments Framework") and Stripe Technical Disclosures (2025-2026).
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
      ${notion.renderHeader("AI ACCURACY", "TESTING 22 LEADING AI MODELS ON REAL SHOPPING")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Why Today's AI Still Fails at Shopping</h2>
          <div class="report-lead-prose">
            Even the smartest AI models often order the wrong items when shopping lists have detailed measurements, sizes, or brand preferences.
          </div>

          <p class="report-p">
            <strong>Testing 22 AI Models on Real Shopping:</strong> In early 2026, Visa Research ran the first major benchmark testing how well AI models buy real products online. Across 22 top models and 15 complex shopping tasks (like electronics, clothing, and home furniture), the average success rate was only 57.2%. The top models (Gemini 4 and Claude 3.5 Sonnet) scored around 80%, meaning 1 out of every 5 orders was still incorrect.
          </p>

          <p class="report-p">
            <strong>Where AI Gets Confused:</strong> AI models don't struggle to find products; they struggle with specific requirements and real-world limits. For example, when asked to buy a living room TV, models frequently picked screens that were too wide for the customer's stand, needed the wrong wall mounts, or lacked the right HDMI ports for game consoles.
          </p>

          <p class="report-p">
            <strong>Lazy Searches and First-Result Bias:</strong> Research shows that when searching stores costs extra API fees, AI models stop searching too early. They compare only 2 to 4 items before picking one. Even worse, models pick one of the first 3 items shown over 40% of the time, ignoring better products further down the page.
          </p>

          <!-- SVG Error Distribution Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              Diagnostic Breakdown of AI Shopping Mistakes
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- Segment 1: Negative Constraints -->
              <rect x="2" y="8" width="168" height="60" rx="3" fill="#09090b" stroke="#09090b" stroke-width="1" />
              <text x="86" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">38% Negative Constraints</text>
              <text x="86" y="38" font-size="6.5" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">Dimensions, Allergens, Plugs</text>
              <text x="86" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Drop: -64% with Rule Engine</text>

              <!-- Segment 2: Phantom Stock -->
              <rect x="174" y="8" width="112" height="60" rx="3" fill="#3f3f46" stroke="#27272a" stroke-width="1" />
              <text x="230" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">26% Phantom Stock</text>
              <text x="230" y="38" font-size="6.5" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">Stale Catalog Cache</text>
              <text x="230" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Drop: -88% with MCP</text>

              <!-- Segment 3: Premature Stop -->
              <rect x="290" y="8" width="94" height="60" rx="3" fill="#71717a" stroke="#52525b" stroke-width="1" />
              <text x="337" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">21% Lazy Stops</text>
              <text x="337" y="38" font-size="6.5" fill="#f4f4f5" text-anchor="middle" font-family="Inter, sans-serif">Halts at 2-3 items</text>
              <text x="337" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Saves +18% Value</text>

              <!-- Segment 4: DOM Timeout -->
              <rect x="388" y="8" width="70" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="423" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">15% DOM</text>
              <text x="423" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Page Shift</text>
              <text x="423" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Direct API</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 5.1: The 4 Primary Failure Modes in Autonomous Purchasing &mdash; Visa Research empirical benchmark data
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for Developers:</strong>
            Never let an AI model place an order on its own without double-checking the facts. Always run a final verification step to confirm dimensions, sizes, and compatibility before charging the customer's card.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 5.1: Model Test Results</div>
            <div class="exhibit-title">How Accurately 22 AI Models Complete Real Shopping Tasks</div>
            <div class="exhibit-subtitle">Results from testing top AI models on complex orders with sizes, colors, and budgets.</div>

            <!-- Grayscale Horizontal Bar Chart: Benchmark Results -->
            <div class="chart-container" style="padding: 6px 10px; margin: 3px 0;">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                <span style="font-size: 7.8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-heading);">Order Success Rate (Visa Benchmark)</span>
                <span style="font-size: 7.2px; font-weight: 700; color: #18181b; background: #e4e4e7; padding: 1.5px 5px; border-radius: 2px;">Avg: 57.2%</span>
              </div>

              <div class="bar-chart-list">
                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#1 Gemini 4 Argon / Muse</span>
                    <span style="color: #09090b; font-weight: 700;">82.0%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 82%; background: #09090b;">82.0%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#2 Claude 3.5 Sonnet</span>
                    <span style="color: #27272a; font-weight: 700;">78.4%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 78.4%; background: #27272a;">78.4%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#3 GPT-4o</span>
                    <span style="color: #27272a; font-weight: 700;">74.6%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 74.6%; background: #3f3f46;">74.6%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#4 DeepSeek V3</span>
                    <span style="color: #3f3f46; font-weight: 700;">66.2%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 66.2%; background: #52525b;">66.2%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#5 Llama 3.3 70B</span>
                    <span style="color: #52525b; font-weight: 700;">58.0%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 58%; background: #71717a;">58.0%</div>
                  </div>
                </div>

                <!-- Benchmark Line -->
                <div style="border-top: 1px dashed #71717a; margin: 3px 0; display: flex; justify-content: flex-end;">
                  <span style="font-size: 6.5px; color: #71717a; font-weight: 600;">Benchmark Average: 57.2%</span>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#6 Mistral Large 2</span>
                    <span style="color: #71717a; font-weight: 700;">52.4%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 52.4%; background: #a1a1aa;">52.4%</div>
                  </div>
                </div>

                <div class="bar-chart-item">
                  <div class="bar-chart-header">
                    <span>#7 Qwen 2.5 72B</span>
                    <span style="color: #71717a; font-weight: 700;">49.1%</span>
                  </div>
                  <div class="bar-chart-track">
                    <div class="bar-chart-fill" style="width: 49.1%; background: #d4d4d8; color: #18181b;">49.1%</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Exhibit Box 1: Return Economics -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">The Cost of Machine Returns:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Returning small retail items costs $13; heavy furniture or appliances cost up to $180 in freight.<br>
                - A single incorrect purchase eliminates the profit from 10 successful transactions.
              </div>
            </div>

            <!-- Exhibit Box 2: Mitigations -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Quality Engineering Rules for 99% Reliability:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - <strong>Deterministic Rules:</strong> Enforce strict programmatic checks on physical sizes and electrical voltages before checkout.<br>
                - <strong>Live MCP Pings:</strong> Ping the store database directly to verify real inventory instead of trusting cached web pages.
              </div>
            </div>

            <!-- Exhibit Box 3: Strategic Imperative -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Strategic Imperative for Retail Brands:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Provide comprehensive structured product dimensions in your MCP feeds so models don't guess sizes.<br>
                - Offer instant zero-friction return shipping guarantees for orders placed by verified customer agents.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Visa Research ("Autonomous Commerce Benchmark", 2026) evaluating 22 models across multi-constraint shopping tasks.
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 6, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 7: FRAUD DEFENSE & LIABILITY ALLOCATION
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("SECURITY & FRAUD", "WHO PAYS WHEN AI MAKES A MISTAKE?")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Stopping Bad Bots While Welcoming Helpful Ones</h2>
          <div class="report-lead-prose">
            Retailers must protect their stores from automated scrapers and scalpers while letting legitimate customer shopping agents buy smoothly.
          </div>

          <p class="report-p">
            <strong>The Bot Detection Dilemma:</strong> For years, store firewalls blocked all automated web traffic using CAPTCHAs and IP bans. Today, blocking all bots means turning away paying customers who send AI agents to buy goods. Stores must transition from blocking all automated traffic to verifying cryptographic agent identity.
          </p>

          <p class="report-p">
            <strong>Cryptographic Passkeys as Identity Proofs:</strong> Instead of solving puzzle CAPTCHAs, helpful bots present cryptographic passkeys signed by the customer's phone hardware (Apple Secure Enclave or Android FIDO2). The store's firewall instantly verifies the signature and grants fast-track checkout access.
          </p>

          <p class="report-p">
            <strong>Who Pays When an AI Makes a Mistake?</strong> When an AI buys the wrong item or overspends, who takes the loss? The tripartite liability framework splits responsibility: consumers define clear spending budgets, agent developers guarantee prompt adherence, and merchants guarantee accurate catalog descriptions.
          </p>

          <!-- SVG Dual-Path Bot Firewall Architecture -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              Dual-Path Agent Firewall Screening Architecture
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- Incoming Traffic -->
              <rect x="2" y="18" width="94" height="40" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="49" y="34" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">Incoming Bot</text>
              <text x="49" y="47" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">HTTP Traffic Stream</text>

              <!-- Arrow to WAF -->
              <line x1="98" y1="38" x2="118" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="118,35 124,38 118,41" fill="#71717a" />

              <!-- Screening WAF -->
              <rect x="126" y="8" width="102" height="60" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2" />
              <text x="177" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">WAF Gateway</text>
              <text x="177" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Cloudflare / Fastly</text>
              <text x="177" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Cryptographic Check</text>

              <!-- Branch Up: Verified Passkey -->
              <path d="M 230 28 L 260 18 L 290 18" fill="none" stroke="#09090b" stroke-width="1.2" />
              <polygon points="290,15 296,18 290,21" fill="#09090b" />
              <rect x="298" y="6" width="160" height="26" rx="3" fill="#09090b" stroke="#09090b" stroke-width="1" />
              <text x="378" y="17" font-size="7" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Verified Passkey &rarr; Instant Checkout</text>
              <text x="378" y="27" font-size="6" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">Sub-100ms API Execution &bull; $0 Fraud Risk</text>

              <!-- Branch Down: Unsigned Bot -->
              <path d="M 230 48 L 260 58 L 290 58" fill="none" stroke="#71717a" stroke-width="1.2" />
              <polygon points="290,55 296,58 290,61" fill="#71717a" />
              <rect x="298" y="44" width="160" height="26" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="378" y="55" font-size="7" font-weight="700" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Unsigned Scraper &rarr; Blocked</text>
              <text x="378" y="65" font-size="6" fill="#a1a1aa" text-anchor="middle" font-family="Inter, sans-serif">Rate Limited &bull; CAPTCHA Challenge Triggered</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 6.1: Dual-Path Firewall Architecture &mdash; Distinguishing friendly agent checkouts from malicious scraper traffic
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for Security Leaders:</strong>
            Never block automated traffic blindly. Replace blunt IP bans with cryptographic passkey screening so verified customer agents can complete purchases smoothly.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 6.1: Liability Framework</div>
            <div class="exhibit-title">The Tripartite Liability Framework for Autonomous Commerce</div>
            <div class="exhibit-subtitle">How liability is legally allocated across consumer, agent platform, and merchant.</div>

            <table class="notion-table" style="table-layout: fixed; margin: 4px 0;">
              <thead>
                <tr>
                  <th style="width: 20%;">Party</th>
                  <th style="width: 30%;">Core Responsibility</th>
                  <th style="width: 25%;">Liability Trigger</th>
                  <th style="width: 25%;">Protection Guardrail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Consumer</strong></td>
                  <td>Define spending budget and order parameters.</td>
                  <td>Orders within stated budget bounds.</td>
                  <td>Biometric spend caps & instant refund rules.</td>
                </tr>
                <tr>
                  <td><strong>AI Platform</strong></td>
                  <td>Faithfully execute user prompt constraints.</td>
                  <td>Model hallucinations or out-of-scope buys.</td>
                  <td>Signed audit logs & deterministic rule filters.</td>
                </tr>
                <tr>
                  <td><strong>Merchant</strong></td>
                  <td>Provide accurate pricing and real-time inventory.</td>
                  <td>Shipping incorrect items or phantom stock.</td>
                  <td>Signed price guarantees & live MCP stock feeds.</td>
                </tr>
              </tbody>
            </table>

            <!-- Exhibit Box 1: Friendly vs Malicious -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Friendly Agents vs. Attack Traffic:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - <strong>Malicious Scalpers:</strong> Bursts of 10,000 requests/sec, rotating proxy IPs, zero signed tokens.<br>
                - <strong>Customer Shopping Agents:</strong> Single-threaded execution, authenticated phone passkey, pre-authorized spending cap.
              </div>
            </div>

            <!-- Exhibit Box 2: Dispute Prevention -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Dispute & Chargeback Elimination:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Cryptographically signed checkout tokens reduce friendly-fraud chargebacks by 94%.<br>
                - Sub-second automated arbitration using cryptographic receipts replaces 60-day bank disputes.
              </div>
            </div>

            <!-- Exhibit Box 3: Zero-Trust Security -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Zero-Trust Architecture for E-Commerce:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Never expose raw 16-digit credit cards to LLM prompt contexts.<br>
                - Restrict all agent payments to dedicated hardware enclaves and single-use merchant-bound tokens.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Legal and security disclosures from Visa, Cloudflare, and Federal Trade Commission guidelines (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 7, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 8: MERCHANT ARCHITECTURE & CATALOGS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("MERCHANT ARCHITECTURE", "REBUILDING ONLINE CATALOGS FOR AI SHOPPERS")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How Retailers Must Rebuild Their Catalogs for AI</h2>
          <div class="report-lead-prose">
            Websites designed for human eyes must transform into machine-readable APIs that give AI agents instant, accurate product data.
          </div>

          <p class="report-p">
            <strong>The Death of Web Scraping:</strong> Relying on bots to read HTML websites causes 28% of orders to fail. Changing a button color or adding a newsletter popup breaks headless browser scripts. Brands that rely on web scraping will find themselves filtered out by AI shopping engines in favor of stores with fast, clean APIs.
          </p>

          <p class="report-p">
            <strong>Machine-Readable Catalogs (MCP & JSON-LD):</strong> Brands must publish their product lines using structured data formats like Schema.org JSON-LD and live Model Context Protocol (MCP) endpoints. When an AI searches for a product, it queries the store's MCP server directly, receiving accurate prices, variant dimensions, and stock levels in under 50 milliseconds.
          </p>

          <p class="report-p">
            <strong>Dynamic Pricing and Stock Desync:</strong> If an AI sees a pair of shoes for $100 on an ad, but the checkout cart charges $120 due to dynamic surge pricing, the agent halts the transaction. Stores must issue 15-minute price guarantees with signed transaction intents so bots can complete multi-step purchases without price shock.
          </p>

          <!-- SVG Scraping vs Direct API Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              HTML Web Scraping vs. Direct Machine API Endpoints
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- Legacy Scraping -->
              <rect x="2" y="8" width="220" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="112" y="24" font-size="7.5" font-weight="700" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Legacy HTML Scraping</text>
              <text x="112" y="38" font-size="6.5" fill="#a1a1aa" text-anchor="middle" font-family="Inter, sans-serif">Headless Browser &bull; 2,500ms Latency</text>
              <text x="112" y="52" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">28.6% Failure Rate (Fragile)</text>

              <!-- Arrow -->
              <line x1="228" y1="38" x2="238" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="238,35 244,38 238,41" fill="#71717a" />

              <!-- Modern MCP API -->
              <rect x="246" y="8" width="212" height="60" rx="3" fill="#09090b" stroke="#09090b" stroke-width="1" />
              <text x="352" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Direct MCP / API Feeds</text>
              <text x="352" y="38" font-size="6.5" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">Structured JSON &bull; 35ms Latency</text>
              <text x="352" y="52" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">0.4% Failure Rate (Resilient)</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 7.1: Architectural Evolution &mdash; Transitioning from fragile HTML web scraping to resilient direct MCP machine feeds
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for E-Commerce Leaders:</strong>
            Publish structured JSON-LD feeds and an Anthropic MCP server within 90 days. Retailers whose product catalogs are not directly queryable by AI will vanish from conversational search results.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 7.1: Merchant Architecture Comparison</div>
            <div class="exhibit-title">Comparing Catalog Integration Methods for AI Shopping</div>
            <div class="exhibit-subtitle">Technical performance, maintenance overhead, and checkout reliability.</div>

            <table class="notion-table" style="table-layout: fixed; margin: 4px 0;">
              <thead>
                <tr>
                  <th style="width: 24%;">Method</th>
                  <th style="width: 16%;">Speed</th>
                  <th style="width: 16%;">Error Rate</th>
                  <th style="width: 22%;">Maintenance</th>
                  <th style="width: 22%;">Best Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>HTML Web Scraping</strong></td>
                  <td>2,500ms</td>
                  <td>28.6%</td>
                  <td>Very High</td>
                  <td>Legacy fallback only</td>
                </tr>
                <tr>
                  <td><strong>Headless Browser</strong></td>
                  <td>1,800ms</td>
                  <td>18.2%</td>
                  <td>High</td>
                  <td>Interim bridge</td>
                </tr>
                <tr>
                  <td><strong>Direct REST / GraphQL</strong></td>
                  <td>120ms</td>
                  <td>3.4%</td>
                  <td>Moderate</td>
                  <td>Partner brands</td>
                </tr>
                <tr>
                  <td><strong>Native MCP Server</strong></td>
                  <td>35ms</td>
                  <td>0.4%</td>
                  <td>Low</td>
                  <td>Future standard</td>
                </tr>
              </tbody>
            </table>

            <!-- Exhibit Box 1: 3 Pillars -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">The 3 Pillars of AI-Ready Product Catalogs:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - <strong>Sub-50ms Real-Time Stock Pings:</strong> Eliminate phantom inventory orders before cart assembly.<br>
                - <strong>Structured Physical Attributes:</strong> Explicit dimensions, weight, voltage, and allergen tags.<br>
                - <strong>Guaranteed 15-Minute Price Locks:</strong> Signed cryptographic intents prevent cart price shock.
              </div>
            </div>

            <!-- Exhibit Box 2: GEO vs SEO -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">From SEO to GEO (Generative Engine Optimization):</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Traditional keyword stuffing and backlink games no longer work on AI search models.<br>
                - AI agents rank products by structured factual accuracy, return terms, verified buyer ratings, and stock reliability.
              </div>
            </div>

            <!-- Exhibit Box 3: Merchant Playbook -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Implementation Checklist for CTOs:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Audit product metadata for complete physical dimensions and voltage specifications.<br>
                - Deploy an open MCP endpoint on your Shopify, BigCommerce, or Salesforce storefront.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Benchmark performance data compiled from Shopify, commercetools, and Anthropic engineering documentation (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 8, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 9: COMPETITIVE LANDSCAPE & BIG TECH MOATS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("COMPETITIVE LANDSCAPE", "BIG TECH MOATS: OPENAI, GOOGLE, APPLE, AMAZON, STRIPE")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">Who Controls the Future of AI Shopping?</h2>
          <div class="report-lead-prose">
            Tech giants, card networks, and retail marketplaces are fighting for control of the agentic commerce value chain.
          </div>

          <p class="report-p">
            <strong>The Shift in Customer Gatekeepers:</strong> For two decades, Google Search and Amazon were the front doors of online shopping. Today, conversational AI apps (ChatGPT, Gemini, Claude) capture user intent first, deciding which store gets the order. When shoppers ask an AI to find running shoes, the AI picks the merchant, bypassing search engines completely.
          </p>

          <p class="report-p">
            <strong>Card Networks Protect the Payment Rails:</strong> Visa and Mastercard are not sitting still. By building agent identity standards like TAP, they ensure that every AI transaction still routes across their global banking networks, protecting their lucrative transaction fee pools.
          </p>

          <p class="report-p">
            <strong>Amazon and Shopify's Defenses:</strong> Amazon's moat is physical logistics: 2-day Prime delivery and automated fulfillment warehouses. Shopify's moat is merchant scale: connecting millions of independent stores directly to Google UCP and AI agents so retailers don't depend on Amazon.
          </p>

          <!-- SVG 4-Way Power Struggle Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              The 4-Way Power Struggle in Agentic Commerce
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- Pillar 1: AI Interfaces -->
              <rect x="2" y="8" width="108" height="60" rx="3" fill="#09090b" stroke="#09090b" stroke-width="1" />
              <text x="56" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">1. Intent Gatekeepers</text>
              <text x="56" y="38" font-size="6.5" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">OpenAI & Google</text>
              <text x="56" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Owns Customer Prompt</text>

              <!-- Pillar 2: Hardware Enclaves -->
              <rect x="116" y="8" width="108" height="60" rx="3" fill="#27272a" stroke="#27272a" stroke-width="1" />
              <text x="170" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">2. Hardware Identity</text>
              <text x="170" y="38" font-size="6.5" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">Apple (Secure Enclave)</text>
              <text x="170" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Biometric Authorization</text>

              <!-- Pillar 3: Settlement Rails -->
              <rect x="230" y="8" width="108" height="60" rx="3" fill="#3f3f46" stroke="#3f3f46" stroke-width="1" />
              <text x="284" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">3. Payment Rails</text>
              <text x="284" y="38" font-size="6.5" fill="#d4d4d8" text-anchor="middle" font-family="Inter, sans-serif">Visa, Mastercard, Stripe</text>
              <text x="284" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Tokenized Clearing Vault</text>

              <!-- Pillar 4: Logistics Moats -->
              <rect x="344" y="8" width="114" height="60" rx="3" fill="#71717a" stroke="#71717a" stroke-width="1" />
              <text x="401" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">4. Physical Logistics</text>
              <text x="401" y="38" font-size="6.5" fill="#f4f4f5" text-anchor="middle" font-family="Inter, sans-serif">Amazon & Walmart</text>
              <text x="401" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Same-Day Warehouses</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 8.1: The 4-Way Power Struggle &mdash; How tech gatekeepers, hardware vaults, card networks, and logistics giants collide
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Strategic Imperative for Brand Executives:</strong>
            Do not become a passive white-label manufacturer for tech gatekeepers. Maintain direct customer relationships by supporting open shopping protocols (UCP and MCP) across all AI platforms.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 8.1: Big Tech Competitive Matrix</div>
            <div class="exhibit-title">Big Tech Moats and Strategies in Agentic Commerce</div>
            <div class="exhibit-subtitle">Strategic positioning, core assets, key vulnerabilities, and market moats.</div>

            <table class="notion-table" style="table-layout: fixed; margin: 4px 0;">
              <thead>
                <tr>
                  <th style="width: 18%;">Company</th>
                  <th style="width: 25%;">Primary Asset</th>
                  <th style="width: 27%;">Strategic Moat</th>
                  <th style="width: 18%;">Core Risk</th>
                  <th style="width: 12%;">Moat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>OpenAI</strong></td>
                  <td>ChatGPT Intent</td>
                  <td>Closed ACP checkout</td>
                  <td>No physical logistics</td>
                  <td><span style="font-size: 7px; background: #09090b; color: white; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">High</span></td>
                </tr>
                <tr>
                  <td><strong>Google</strong></td>
                  <td>Android & Gemini</td>
                  <td>Open UCP standard</td>
                  <td>Ad revenue erosion</td>
                  <td><span style="font-size: 7px; background: #09090b; color: white; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">Very High</span></td>
                </tr>
                <tr>
                  <td><strong>Apple</strong></td>
                  <td>2B Devices & Enclave</td>
                  <td>Hardware-level passkeys</td>
                  <td>Slower LLM models</td>
                  <td><span style="font-size: 7px; background: #09090b; color: white; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">Dominant</span></td>
                </tr>
                <tr>
                  <td><strong>Amazon</strong></td>
                  <td>Prime Fulfillment</td>
                  <td>Automated warehouse hubs</td>
                  <td>AI bypassing search</td>
                  <td><span style="font-size: 7px; background: #09090b; color: white; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">High</span></td>
                </tr>
                <tr>
                  <td><strong>Stripe</strong></td>
                  <td>Merchant Scale</td>
                  <td>Agent payment routing</td>
                  <td>Underlying card fees</td>
                  <td><span style="font-size: 7px; background: #09090b; color: white; padding: 1.5px 5px; border-radius: 2px; font-weight: 700;">High</span></td>
                </tr>
              </tbody>
            </table>

            <!-- Exhibit Box 1: Margin Concentration -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">Where the Profit Pools Will Concentrate:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - 40% of future commerce margins will concentrate in intent gatekeepers (AI apps) and payment settlement rails.<br>
                - Mid-tier search aggregators and affiliate blogs face complete margin collapse as direct agent routing takes over.
              </div>
            </div>

            <!-- Exhibit Box 2: Google Ad Threat -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">The Cannibalization Threat to Search Advertising:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Every purchase completed by an autonomous agent eliminates 3 to 5 traditional search ad impressions.<br>
                - $60B in annual search keyword budgets will shift toward direct merchant API referral commissions.
              </div>
            </div>

            <!-- Exhibit Box 3: Brand Playbook -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">The Winner's Playbook for Independent Brands:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Own your first-party customer relationships; deploy multi-protocol endpoints across MCP, UCP, and ACP.<br>
                - Never sign exclusive distribution pacts with a single AI app that cut off your direct customer data.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Public disclosures, regulatory filings, and equity research reports from Morgan Stanley and Goldman Sachs (2025-2026).
            </div>
          </div>
        </div>
      </div>
      
      ${notion.renderFooter(FOOTER_TITLE, 9, TOTAL_PAGES)}
    </div>
  `);

  // ==========================================
  // SPREAD 10: ENTERPRISE ROADMAP & BOARDROOM RECOMMENDATIONS
  // ==========================================
  spreads.push(`
    <div class="spread">
      ${notion.renderHeader("STRATEGIC ROADMAP", "THE 18-MONTH ACTION PLAN FOR RETAIL LEADERS")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">The 18-Month Action Plan for Retail Leaders</h2>
          <div class="report-lead-prose">
            How forward-thinking retail brands, banks, and technology leaders should prepare for the agent economy across three clear phases.
          </div>

          <p class="report-p">
            <strong>Phase 1: Open Catalog Discovery (Months 1-6):</strong> Audit your product data. Clean up physical specifications, dimensions, and live stock feeds. Deploy an Anthropic MCP server to make your catalog instantly readable by AI agents. Ensure your product descriptions include hard facts like measurements, voltages, and materials so bots can verify compatibility without error.
          </p>

          <p class="report-p">
            <strong>Phase 2: Automated Checkout & Passkeys (Months 6-12):</strong> Eliminate bot-blocking firewalls for verified customer agents. Integrate Visa TAP and biometric passkey authorization to cut checkout drop-off rates. Provide 15-minute price guarantees with signed transaction intents so machine shoppers can complete purchases without fear of dynamic price surge.
          </p>

          <p class="report-p">
            <strong>Phase 3: Autonomous Inventory & Machine Pricing (Months 12-18):</strong> Allow AI agents to negotiate dynamic bulk pricing, automate re-orders for recurring supplies, and fulfill machine-to-machine procurement without human delay. Connect your supply chain backend directly to agentic procurement networks.
          </p>

          <!-- SVG Autonomous Procurement Loop Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 10px 12px; margin-top: 8px; background: #ffffff;">
            <div style="font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--ink-secondary); margin-bottom: 8px;">
              The Autonomous Enterprise Procurement Loop
            </div>
            <svg viewBox="0 0 460 76" style="width: 100%; height: auto; display: block;">
              <!-- Step 1: Live Stock Query -->
              <rect x="2" y="8" width="98" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="51" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">1. Need Trigger</text>
              <text x="51" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Sensor / Low Stock</text>
              <text x="51" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Automated Agent</text>

              <!-- Arrow 1 -> 2 -->
              <line x1="102" y1="38" x2="118" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="118,35 124,38 118,41" fill="#71717a" />

              <!-- Step 2: Protocol Auction -->
              <rect x="126" y="8" width="98" height="60" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.2" />
              <text x="175" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">2. Multi-Vendor</text>
              <text x="175" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">MCP Catalog Search</text>
              <text x="175" y="52" font-size="6" font-weight="600" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">Best Price & Delivery</text>

              <!-- Arrow 2 -> 3 -->
              <line x1="226" y1="38" x2="242" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="242,35 248,38 242,41" fill="#71717a" />

              <!-- Step 3: Biometric / Delegated Token -->
              <rect x="250" y="8" width="98" height="60" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1" />
              <text x="299" y="24" font-size="7.5" font-weight="700" fill="#09090b" text-anchor="middle" font-family="Inter, sans-serif">3. Token Settle</text>
              <text x="299" y="38" font-size="6.5" fill="#71717a" text-anchor="middle" font-family="Inter, sans-serif">Visa TAP Token</text>
              <text x="299" y="52" font-size="6" font-weight="600" fill="#27272a" text-anchor="middle" font-family="Inter, sans-serif">Pre-Authorized Cap</text>

              <!-- Arrow 3 -> 4 -->
              <line x1="350" y1="38" x2="366" y2="38" stroke="#71717a" stroke-width="1.2" />
              <polygon points="366,35 372,38 366,41" fill="#71717a" />

              <!-- Step 4: Automated Logistics -->
              <rect x="374" y="8" width="84" height="60" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1" />
              <text x="416" y="24" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">4. Delivery</text>
              <text x="416" y="38" font-size="6.5" fill="#a1a1aa" text-anchor="middle" font-family="Inter, sans-serif">Autonomous Hub</text>
              <text x="416" y="52" font-size="6" font-weight="600" fill="#ffffff" text-anchor="middle" font-family="Inter, sans-serif">Sub-Day Fulfilled</text>
            </svg>
            <div style="font-size: 7.2px; color: var(--ink-secondary); margin-top: 6px; text-align: center;">
              Figure 9.1: The Autonomous Enterprise Procurement Loop &mdash; Machine-triggered replenishment from query to fulfillment
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 8px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Final Boardroom Directive:</strong>
            Agentic commerce is not another digital marketing channel. It is the fundamental rewiring of global trade. Retailers that build machine-readable catalogs and tokenized checkout rails today will capture the $1.5 trillion autonomous shopping wave.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 9.1: Strategic Roadmap</div>
            <div class="exhibit-title">The 18-Month Agentic Commerce Implementation Roadmap</div>
            <div class="exhibit-subtitle">Actionable milestones for retail executives, engineering teams, and treasury leaders.</div>

            <!-- Roadmap 3-Phase Component -->
            <div class="roadmap-timeline" style="margin: 4px 0;">
              <div class="roadmap-phase" style="border-left: 3px solid #09090b; padding: 6px 10px; margin-bottom: 5px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <span style="font-size: 8.8px; font-weight: 700; color: #09090b;">Phase 1: Catalog Discovery & MCP</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #71717a;">Q1–Q2 2026 (Months 1–6)</span>
                </div>
                <div style="font-size: 7.8px; color: var(--ink); line-height: 1.4;">
                  Audit product metadata for dimensions and voltage. Deploy an open Anthropic MCP server on your store backend so AI models can search live stock.
                </div>
              </div>

              <div class="roadmap-phase" style="border-left: 3px solid #3f3f46; padding: 6px 10px; margin-bottom: 5px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <span style="font-size: 8.8px; font-weight: 700; color: #18181b;">Phase 2: Tokenized Checkout & Passkeys</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #71717a;">Q3–Q4 2026 (Months 7–12)</span>
                </div>
                <div style="font-size: 7.8px; color: var(--ink); line-height: 1.4;">
                  Connect to Visa TAP and Apple Secure Enclave passkeys. Whitelist friendly customer agents on store firewalls to cut checkout drop-offs from 21% down to under 1%.
                </div>
              </div>

              <div class="roadmap-phase" style="border-left: 3px solid #71717a; padding: 6px 10px; margin-bottom: 5px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                  <span style="font-size: 8.8px; font-weight: 700; color: #27272a;">Phase 3: Autonomous Enterprise Commerce</span>
                  <span style="font-size: 7.2px; font-weight: 700; color: #71717a;">Q1–Q2 2027 (Months 13–18)</span>
                </div>
                <div style="font-size: 7.8px; color: var(--ink); line-height: 1.4;">
                  Enable automated machine-to-machine procurement, signed 15-minute price guarantees, and algorithmic dispute arbitration for recurring inventory replenishment.
                </div>
              </div>
            </div>

            <!-- Exhibit Box 1: Readiness Checklist -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">The 5-Point Readiness Checklist for Retailers:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - 1. Machine-readable catalog published via Anthropic MCP?<br>
                - 2. Real-time sub-50ms stock ping API connected?<br>
                - 3. Biometric passkey checkout enabled (Visa TAP / Apple Pay)?<br>
                - 4. Bot firewall whitelisting friendly customer agents?<br>
                - 5. Signed 15-minute price quote guarantees supported?
              </div>
            </div>

            <!-- Exhibit Box 2: Cost of Inaction -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px;">
              <strong style="font-size: 8.8px;">The Heavy Cost of Delaying Integration:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Brands that wait until 2028 will face 4x higher customer acquisition costs as AI search models favor established API connections.<br>
                - Competitors with live MCP catalogs will capture default repeat-purchase subscriptions automatically.
              </div>
            </div>

            <!-- Exhibit Box 3: Final Boardroom Word -->
            <div class="exhibit-analysis-box" style="margin-top: 6px; padding: 8px 11px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong style="font-size: 8.8px;">Boardroom Recommendation:</strong>
              <div style="font-size: 7.8px; line-height: 1.42; color: var(--ink); margin-top: 3px;">
                - Fund your agentic commerce task force this quarter. Build machine-readable catalogs and tokenized rails to lead the autonomous economy.
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 6px;">
              Source: Strategic implementation framework synthesized from McKinsey, Gartner, and Visa Research disclosures (2025-2026).
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
