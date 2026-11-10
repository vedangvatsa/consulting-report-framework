/**
 * The State of Agentic Commerce (Notion Style Edition)
 * 
 * Publication-Grade Global Industry Research Report:
 * - Pure Inter Google Fonts typography (bold 700 headings, deep ink #09090b)
 * - Ultra-minimalist Monochrome Palette: Pure White, Black, and Grayscale (matching hashtagweb3.com & web3-jobs)
 * - Zero blue color anywhere in layout, badges, charts, or borders
 * - Multi-column editorial report format with comprehensive research prose
 * - Grounded in 2025-2026 data & thought leadership:
 *     - Jas Shah (Fintech: Under the Hood) "The Klarna Effect" & 3x-Win Triangle
 *     - nofrontend.xyz 4-Quadrant Agent Payments Map (Cards vs x402 x Vaults vs Checkout)
 *     - The 4-Layer Ecosystem Market Map (25+ companies)
 *     - Visa 22-Model Shopping Benchmark & Compounding Failure Math (P = p^n)
 *     - Morgan Stanley ($385B) vs Bain ($500B) vs Gartner ($15T) Market Sizing
 *     - The Spring 2026 In-Chat Checkout Pivot to Direct Merchant APIs
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
            The State of<br/>Agentic Commerce
          </h1>
          <p style="font-size: 14.5px; line-height: 1.5; color: var(--ink-secondary); margin-bottom: 28px; max-width: 480px;">
            How AI agents buy online: market projections, technical architecture, and the roadmap for brands.
          </p>

          <div style="display: flex; gap: 24px; padding-top: 12px;">
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">$1.5T BY 2030</div>
              <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">Online purchases made by AI</div>
            </div>
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">7-LAYER STACK</div>
              <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">From chatbot search to checkout</div>
            </div>
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">57.2% PASS RATE</div>
              <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">Shopping accuracy of top AI models</div>
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
          <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">Founder, Hashtag Web3 &nbsp;|&nbsp; Lead Researcher, veda.ng</div>
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
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How AI Changes Online Shopping</h2>
          <div class="report-lead-prose">
            AI is moving from chatting to buying things. Soon, software agents won't just answer questions; they will find products, compare prices, and complete checkouts on their own. This is the biggest shift in online shopping since the web browser.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The End of Clicking on Ads:</strong> For thirty years, online shopping relied on human attention. Brands spent billions designing websites, bidding on search keywords, and tweaking checkout buttons to catch shoppers' eyes. When people let AI agents handle shopping, humans stop browsing stores. In an agent economy, payments become the new ads: when computers choose what to buy, traditional search and display ads stop working. Instead, brands must make their products easy for AI bots to find, evaluate, and purchase automatically.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The "Klarna Effect" & The 3x-Win Formula:</strong> As fintech strategist Jas Shah (<em>Fintech: Under the Hood</em>) observes, agentic commerce unlocks a structural "3x-Win" dynamic identical to the rise of Buy Now Pay Later (BNPL). Merchants win through tangible basket conversion lifts; consumers win through low-admin, hyper-tailored shopping; and agent platforms win by capturing transaction routing fees. Agents collapse 10 friction-filled checkout steps into a single binary prompt: "Complete or Cancel" via FaceID.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Spring 2026 In-Chat Pivot:</strong> Early experiments in late 2024 and 2025 attempted to force complete transactions inside chatbot windows like ChatGPT. In spring 2026, leading retailers and AI labs pivoted toward a hybrid model: agents search, compare, and assemble carts via APIs, but hand off final tokenized settlement directly to merchant endpoints. This shift allows merchants to preserve their branding, loyalty programs, and direct customer relationships while giving AI assistants a clean, reliable purchase flow.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Sizing Debate ($385B vs. $500B vs. $15 Trillion):</strong> Market forecasts vary depending on whether they measure consumer retail or total enterprise trade. Morgan Stanley projects $190 billion to $385 billion in US retail sales influenced by AI by 2030 (about 8% of retail e-commerce). Bain & Company forecasts $500 billion globally across consumer retail. Meanwhile, Gartner forecasts over $15 trillion in autonomous transactions when factoring in B2B enterprise procurement—where machines automatically reorder factory parts, cloud compute, and wholesale inventory.
          </p>

          <!-- Compact Architectural Figure 1.1 -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 6px 8px; background: #ffffff; margin-top: 4px;">
            <div style="font-size: 7.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px;">
              Figure 1.1: The Three Eras of E-Commerce Interfaces (1995-2026)
            </div>
            <svg viewBox="0 0 460 56" style="width: 100%; height: auto; display: block;">
              <!-- 1995 Search Era -->
              <rect x="5" y="4" width="135" height="48" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="15" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b">1. Web Search Era (1995)</text>
              <text x="15" y="28" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Human clicks ads & links</text>
              <text x="15" y="38" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Conversion rate: 2.2%</text>
              <text x="15" y="47" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a">Friction: Form fatigue</text>

              <!-- Arrow 1 -->
              <path d="M 145 28 L 160 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- 2010 Mobile Apps -->
              <rect x="165" y="4" width="135" height="48" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="175" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b">2. Mobile Apps (2010)</text>
              <text x="175" y="28" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Responsive touch UI</text>
              <text x="175" y="38" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Conversion rate: 2.8%</text>
              <text x="175" y="47" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a">Friction: Cart abandonment</text>

              <!-- Arrow 2 -->
              <path d="M 305 28 L 320 28" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- 2026 Agentic API -->
              <rect x="325" y="4" width="130" height="48" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="335" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">3. Agent API Era (2026)</text>
              <text x="335" y="28" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7">Binary checkout approval</text>
              <text x="335" y="38" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7">Conversion rate: 8.2%</text>
              <text x="335" y="47" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#a1a1aa">Friction: Zero manual input</text>
              
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#71717a" />
                </marker>
              </defs>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Takeaway for Retailers:</strong>
            Retailers who treat AI agents like just another mobile app will lose customers. Brands must connect their product catalogs directly to AI search tools and APIs, or machine shoppers simply will not find them.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 1.1: Market Forecast</div>
            <div class="exhibit-title">Total Online Purchases Made by AI (2025-2030)</div>
            <div class="exhibit-subtitle">Expected growth in global spending by AI bots over the next five years.</div>

            <!-- Grayscale Publication Column Chart (Zero Overlap, Clean Spacing) -->
            <div style="background: var(--paper-subtle); border: 1px solid var(--border); border-radius: 4px; padding: 12px 14px 6px 14px; margin: 3px 0; position: relative;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-size: 7.5px; font-weight: 700; color: var(--ink-secondary); letter-spacing: 0.05em; text-transform: uppercase;">Total AI Purchases ($ Billions)</span>
                <span style="font-size: 7.2px; font-weight: 700; color: #18181b; background: #ffffff; border: 1px solid #d4d4d8; padding: 2px 6px; border-radius: 3px;">2028: Fast Growth Begins</span>
              </div>
              
              <svg viewBox="0 0 440 140" style="width: 100%; height: auto; display: block; overflow: visible;">
                <!-- Grid Lines -->
                <line x1="45" y1="20" x2="430" y2="20" stroke="#e4e4e7" stroke-width="0.8" stroke-dasharray="2,2"/>
                <line x1="45" y1="54" x2="430" y2="54" stroke="#e4e4e7" stroke-width="0.8" stroke-dasharray="2,2"/>
                <line x1="45" y1="88" x2="430" y2="88" stroke="#e4e4e7" stroke-width="0.8" stroke-dasharray="2,2"/>
                <line x1="45" y1="122" x2="430" y2="122" stroke="#d4d4d8" stroke-width="1"/>

                <!-- Y-Axis Labels -->
                <text x="40" y="23" font-family="Inter, sans-serif" font-size="7.5" fill="#71717a" text-anchor="end">$1,500B</text>
                <text x="40" y="57" font-family="Inter, sans-serif" font-size="7.5" fill="#71717a" text-anchor="end">$1,000B</text>
                <text x="40" y="91" font-family="Inter, sans-serif" font-size="7.5" fill="#71717a" text-anchor="end">$500B</text>
                <text x="40" y="125" font-family="Inter, sans-serif" font-size="7.5" fill="#71717a" text-anchor="end">$0</text>

                <!-- 2025: $12B -->
                <rect x="70" y="119" width="40" height="3" rx="2" fill="#71717a"/>
                <text x="90" y="114" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">$12B</text>
                <text x="90" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2025</text>
                <text x="90" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">0.2% E-Com</text>

                <!-- 2026E: $41B -->
                <rect x="132" y="115" width="40" height="7" rx="2" fill="#52525b"/>
                <text x="152" y="110" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">$41B</text>
                <text x="152" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2026E</text>
                <text x="152" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">0.7% E-Com</text>

                <!-- 2027E: $165B -->
                <rect x="194" y="98" width="40" height="24" rx="2" fill="#3f3f46"/>
                <text x="214" y="92" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">$165B</text>
                <text x="214" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2027E</text>
                <text x="214" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">2.4% E-Com</text>

                <!-- 2028E: $480B (No collision, clean label) -->
                <rect x="256" y="66" width="40" height="56" rx="2" fill="#27272a"/>
                <text x="276" y="59" font-family="Inter, sans-serif" font-size="8" font-weight="800" fill="#09090b" text-anchor="middle">$480B</text>
                <text x="276" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2028E</text>
                <text x="276" y="139" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#27272a" text-anchor="middle">6.1% E-Com</text>

                <!-- 2029E: $920B -->
                <rect x="318" y="36" width="40" height="86" rx="2" fill="#18181b"/>
                <text x="338" y="29" font-family="Inter, sans-serif" font-size="8" font-weight="800" fill="#09090b" text-anchor="middle">$920B</text>
                <text x="338" y="132" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#18181b" text-anchor="middle">2029E</text>
                <text x="338" y="139" font-family="Inter, sans-serif" font-size="6.2" fill="#71717a" text-anchor="middle">10.3% E-Com</text>

                <!-- 2030E: $1,450B (Clear headroom from container top) -->
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
              <strong>The 3x-Win Equation (Jas Shah Framework):</strong>
              Just like Klarna and BNPL revolutionized checkout, agentic commerce aligns a 3x-win: merchants gain 8.2% conversion lifts, shoppers eliminate form fatigue, and AI infrastructure players monetize routing tolls.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Gartner 40% Cancellation Warning:</strong>
              Gartner predicts that 40% of early enterprise agentic pilots will be canceled by 2027 due to unexpected integration costs, scraping breakage, and return-rate explosions if retailers do not deploy native machine APIs.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Why 2028 is the Inflection Year:</strong>
              Between 2025 and 2027, the foundational protocols (UCP, MCP, Visa TAP) will mature across major platforms. By 2028, over 65% of smartphones will natively support cryptographic agent passkeys, triggering an explosion in autonomous checkouts.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Source: Synthesized from Jas Shah (Fintech: Under the Hood), Morgan Stanley, Bain & Company, Gartner, and Visa Research (2025-2026).
            </div>
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
      ${notion.renderHeader("TECH ARCHITECTURE", "HOW AI SHOPPING WORKS & THE MARKET MAP")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">The 7 Parts of the AI Shopping Stack</h2>
          <div class="report-lead-prose">
            Buying things with AI requires a complete stack of tools, from the chatbot you talk with to the bank that approves the payment.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The 3 Superpowers of Market Winners:</strong> As Jas Shah highlights, successful platforms in the agentic commerce stack dominate three foundational pillars: <strong>1) Verified Identity</strong> (knowing user limits, preferences, and shipping profiles without cold onboarding); <strong>2) Real-Time & Historical Data</strong> (sub-50ms inventory APIs and past spend habits); and <strong>3) Tokenized Payment Rails</strong> (cryptographic vaults and programmable budget execution).
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>From Chatbots to Common Rules:</strong> At Layer 1 are consumer-facing assistants (ChatGPT, Gemini, Claude, Perplexity). When you ask an AI to buy shoes, it coordinates with Layers 2 and 3: open protocols like Anthropic MCP, Google UCP, and Stripe ACP. These protocols translate fuzzy natural prompts into structured machine commands that ping merchant catalogs and verify live stock.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Virtual Cards and Automated Checkout:</strong> Most online stores today cannot accept AI orders directly. That is why Layer 4 (card issuers like Lithic, Stripe, and Marqeta) create temporary virtual credit cards for each purchase. At the same time, checkout tools (Layer 5) act like automated hands, filling out web forms, selecting shipping options, and clicking purchase buttons without tripping security alarms.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Store Catalogs and Hardware Passkeys:</strong> At Layer 6, store inventory backends (Shopify, commercetools) provide live stock feeds. Finally, Layer 7 secures the transaction in hardware enclaves (Apple Secure Enclave, Android FIDO2), ensuring that no payment completes without explicit human biometric approval.
          </p>

          <!-- Editorial Architecture Illustration -->
          <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin-top: 4px; background: #ffffff;">
            <img src="data:image/jpeg;base64,${techArchIllustrationBase64}" style="width: 100%; height: auto; max-height: 145px; display: block; object-fit: contain; mix-blend-mode: multiply;" alt="Technical Architecture Diagram" />
            <div style="padding: 4px 8px; border-top: 1px solid var(--border-subtle); background: var(--paper-subtle); font-size: 7.2px; color: var(--ink-secondary); display: flex; justify-content: space-between;">
              <span><strong>Figure 2.1: The Autonomous Shopping Protocol Loop</strong> &mdash; From prompt to settlement</span>
              <span>Stripe Press / Notion Schematic</span>
            </div>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for Developers:</strong>
            Simulating human web browsers with headless bots fails over 20% of the time due to changing buttons and popup ads. Retailers must build clean, direct APIs so AI agents can read prices and check out with sub-second reliability.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 2.1: Ecosystem Market Map</div>
            <div class="exhibit-title">The Agentic Commerce Landscape (4 Layers)</div>
            <div class="exhibit-subtitle">Key players and platforms across the autonomous commerce stack.</div>

            <!-- COMPREHENSIVE 4-LAYER MARKET MAP EXHIBIT -->
            <div style="display: flex; flex-direction: column; gap: 4px; margin: 3px 0;">
              <!-- Layer 1 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 8px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.04em;">1. Consumer Agents & Frontends</span>
                  <span style="font-size: 6.8px; color: #71717a;">Own Intent</span>
                </div>
                <div style="font-size: 7.2px; color: #27272a; line-height: 1.4;">
                  <strong>ChatGPT Search</strong> (OpenAI), <strong>Gemini Shopping</strong> (Google), <strong>Claude Artifacts</strong> (Anthropic), <strong>Buy with Pro</strong> (Perplexity), <strong>Sierra AI</strong>, <strong>Rufus</strong> (Amazon)
                </div>
              </div>

              <!-- Layer 2 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 8px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.04em;">2. Protocols & Orchestration</span>
                  <span style="font-size: 6.8px; color: #71717a;">Standardize Data</span>
                </div>
                <div style="font-size: 7.2px; color: #27272a; line-height: 1.4;">
                  <strong>Anthropic MCP</strong>, <strong>Google UCP</strong> (.well-known/ucp), <strong>Stripe ACP</strong>, <strong>Coinbase AP2</strong>, <strong>Meta/Sierra Poppy</strong>, <strong>LangGraph</strong>, <strong>CrewAI</strong>
                </div>
              </div>

              <!-- Layer 3 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 8px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.04em;">3. Payment Rails & Token Vaults</span>
                  <span style="font-size: 6.8px; color: #71717a;">Settle Funds</span>
                </div>
                <div style="font-size: 7.2px; color: #27272a; line-height: 1.4;">
                  <strong>Stripe Link (SPT)</strong>, <strong>Visa TAP</strong>, <strong>Mastercard Agent Pay</strong>, <strong>Lithic</strong>, <strong>Circle (USDC)</strong>, <strong>Ramp for Agents</strong>, <strong>Highnote</strong>
                </div>
              </div>

              <!-- Layer 4 -->
              <div style="border: 1px solid var(--border); border-radius: 3px; padding: 4px 8px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #09090b; text-transform: uppercase; letter-spacing: 0.04em;">4. Merchant Enablement & AEO</span>
                  <span style="font-size: 6.8px; color: #71717a;">Inventory & Fulfillment</span>
                </div>
                <div style="font-size: 7.2px; color: #27272a; line-height: 1.4;">
                  <strong>Shopify (Shop Pay)</strong>, <strong>commercetools</strong>, <strong>BigCommerce</strong>, <strong>Salesforce Commerce</strong>, <strong>Forter</strong>, <strong>Riskified</strong>, <strong>Ranketta (AEO)</strong>
                </div>
              </div>
            </div>

            <!-- The 7-Layer Stack Latency Table -->
            <div style="border: 1px solid var(--border); border-radius: 3px; overflow: hidden; margin-top: 4px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.2px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 22px;">L</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Stack Layer</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading); width: 60px;">Latency</th>
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Key Technologies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">L1</td>
                    <td style="padding: 3px 6px;">Chatbots & Assistive Frontends</td>
                    <td style="padding: 3px 6px; color: #71717a;">500-2500ms</td>
                    <td style="padding: 3px 6px;">OpenAI, Gemini, Claude, Perplexity</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">L2</td>
                    <td style="padding: 3px 6px;">AI Planning & Decision Engines</td>
                    <td style="padding: 3px 6px; color: #71717a;">200-800ms</td>
                    <td style="padding: 3px 6px;">LangGraph, CrewAI, AutoGPT, LlamaIndex</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">L3</td>
                    <td style="padding: 3px 6px;">Agent Communication Protocols</td>
                    <td style="padding: 3px 6px; color: #71717a;">50-200ms</td>
                    <td style="padding: 3px 6px;">Anthropic MCP, Google UCP, Stripe ACP</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">L4</td>
                    <td style="padding: 3px 6px;">Merchant Catalogs & Real-Time Stock</td>
                    <td style="padding: 3px 6px; color: #71717a;">20-100ms</td>
                    <td style="padding: 3px 6px;">Shopify, commercetools, BigCommerce</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">L5</td>
                    <td style="padding: 3px 6px;">Cart Assembly & 15-Min Price Locks</td>
                    <td style="padding: 3px 6px; color: #71717a;">100-300ms</td>
                    <td style="padding: 3px 6px;">Rye, Shop Pay API, CartAI</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 700;">L6</td>
                    <td style="padding: 3px 6px;">Payment Tokens & Card Issuing</td>
                    <td style="padding: 3px 6px; color: #71717a;">100-400ms</td>
                    <td style="padding: 3px 6px;">Visa TAP, Mastercard Agent Pay, Lithic, Stripe</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 700;">L7</td>
                    <td style="padding: 3px 6px;">Hardware Biometrics & Enclave Security</td>
                    <td style="padding: 3px 6px; color: #71717a;">10-50ms</td>
                    <td style="padding: 3px 6px;">Apple Secure Enclave, FIDO2, WebAuthn</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Who Makes the Money in AI Shopping:</strong>
              - <em>Layer 1 (Chatbots & Apps):</em> Own customer intent and capture 5% to 15% referral commissions on completed sales.<br/>
              - <em>Layers 2 & 3 (Protocols & Networks):</em> Earn high-margin infrastructure fees on every completed transaction.<br/>
              - <em>Layers 4 & 5 (Cart & Tokens):</em> Temporary bridges that face margin compression as merchants deploy native APIs.<br/>
              - <em>Layers 6 & 7 (Store Catalogs & Security):</em> Mission-critical enterprise SaaS contracts to prevent fraud and inventory desync.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The Dark Horse Enabler (Plaid & Identity Networks):</strong>
              Identity networks like Plaid and Shop Pay hold an immense structural moat. Because they verify consumer bank accounts and spending histories across millions of merchants, they can preload agent trust vaults with zero onboarding friction.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Source: Ecosystem analysis synthesized from Jas Shah, OpenAI, Anthropic, Google, Stripe, Visa, and nofrontend.xyz directory (2025-2026).
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
      ${notion.renderHeader("SHOPPING PROTOCOLS", "COMPARING THE 6 MAIN PROTOCOLS: UCP, ACP, MCP, TAP, AP2, POPPY")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How AI Agents Talk to Online Stores</h2>
          <div class="report-lead-prose">
            Tech companies and payment giants are competing to create the standard format that lets AI bots search store shelves and buy items safely.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Competing Ways for AI to Buy:</strong> Right now, different tech giants use different rules. Google and Shopify built the Universal Commerce Protocol (UCP), an open system that lets any store list its products for AI via a simple <code>.well-known/ucp</code> file. Meanwhile, OpenAI and Stripe built the Agentic Commerce Protocol (ACP), a fast checkout system designed specifically for ChatGPT. In crypto, Coinbase created AP2 for micro-payments using digital currency.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>How Visa and Mastercard Protect Payments:</strong> Visa and Mastercard want to keep payments safe. Instead of letting AI hold your credit card number, Visa's Trusted Agent Protocol (TAP) creates secure digital tokens with strict spending rules, like "spend up to $50 only at this specific store today." This ensures that even if an AI model hallucinates, the customer's financial account is cryptographically protected.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Anthropic's MCP Connects the Data:</strong> While other rules handle checkout, Anthropic's Model Context Protocol (MCP) helps AI read store databases. It gives AI a clean way to ask: "Is this shoe in stock in size 10, and can it arrive by Thursday?" By standardizing database queries across different vendors, MCP eliminates the need for brittle web scraping.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The 15-Minute Price Lock Guarantee:</strong> In human shopping, prices can change while items sit in a cart. For AI agents, price fluctuations cause instant transaction aborts. Emerging protocols enforce a cryptographically signed "15-minute price lock" from the merchant, giving the agent time to evaluate options and finalize checkout without price shocks.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Decentralized Discovery vs. Walled Gardens:</strong> Closed ecosystems force merchants to share private margins and surrender customer contact information. Open protocol combinations (Google UCP for discovery and Anthropic MCP for warehouse inventory pings) empower independent direct-to-consumer retailers to remain discoverable without paying a 15% toll to AI platform aggregators.
          </p>

          <!-- Publication-Grade Protocol Handshake Flow Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 3.1: The 4-Step Standard Protocol Handshake Architecture
            </div>
            
            <svg viewBox="0 0 460 62" style="width: 100%; height: auto; display: block;">
              <!-- Step 1 -->
              <rect x="5" y="4" width="100" height="52" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="55" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">1. Intent Query</text>
              <text x="55" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">ChatGPT / Claude</text>
              <text x="55" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Natural Language</text>
              <text x="55" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">"Buy size 10 shoes"</text>

              <!-- Arrow 1 -->
              <path d="M 105 30 L 118 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 2 -->
              <rect x="122" y="4" width="102" height="52" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="173" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">2. Live Catalog</text>
              <text x="173" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Anthropic MCP / UCP</text>
              <text x="173" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Sub-50ms JSON Feed</text>
              <text x="173" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Real inventory verified</text>

              <!-- Arrow 2 -->
              <path d="M 224 30 L 237 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 3 -->
              <rect x="241" y="4" width="102" height="52" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="292" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">3. Cart & Tax Lock</text>
              <text x="292" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Google / Shopify UCP</text>
              <text x="292" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">15-Min Price Lock</text>
              <text x="292" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Signed merchant intent</text>

              <!-- Arrow 3 -->
              <path d="M 343 30 L 356 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 4 -->
              <rect x="360" y="4" width="95" height="52" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="407" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">4. Settlement</text>
              <text x="407" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">Visa TAP Token</text>
              <text x="407" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#ffffff" text-anchor="middle">FaceID / $0 Fraud</text>
              <text x="407" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Direct clearing</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Recommendation for Engineering Leaders:</strong>
            Don't rely on just one AI platform. Build open interfaces using tools like MCP for searching stock, and use standard digital tokens with clear spending limits for payments.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 3.1: Protocol Comparison</div>
            <div class="exhibit-title">Comparing the 6 Main AI Shopping Protocols</div>
            <div class="exhibit-subtitle">How top tech companies let AI search store shelves and checkout.</div>

            <!-- Protocol Comparison Table (Monochrome) -->
            <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Protocol</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Primary Backer</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">What It Does</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Payment Approval</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading); text-align: right;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">UCP</td>
                    <td style="padding: 4px 6px;">Google, Shopify</td>
                    <td style="padding: 4px 6px;">Open search and cart checkout across stores.</td>
                    <td style="padding: 4px 6px;">Phone Passkey</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #e4e4e7; color: #18181b; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Open</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">ACP</td>
                    <td style="padding: 4px 6px;">OpenAI, Stripe</td>
                    <td style="padding: 4px 6px;">Instant one-click checkout inside ChatGPT.</td>
                    <td style="padding: 4px 6px;">Saved Card Token</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #e4e4e7; color: #18181b; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Closed</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">AP2</td>
                    <td style="padding: 4px 6px;">Coinbase, Base</td>
                    <td style="padding: 4px 6px;">Instant micro-payments in digital dollars.</td>
                    <td style="padding: 4px 6px;">Crypto Wallet Key</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #e4e4e7; color: #18181b; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Testing</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Visa TAP</td>
                    <td style="padding: 4px 6px;">Visa, Banks</td>
                    <td style="padding: 4px 6px;">Sets strict spending limits on bank tokens.</td>
                    <td style="padding: 4px 6px;">Digital Passkey</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #18181b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Active</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">MCP</td>
                    <td style="padding: 4px 6px;">Anthropic, OSS</td>
                    <td style="padding: 4px 6px;">Lets AI read live stock and store prices.</td>
                    <td style="padding: 4px 6px;">Direct Secure API</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #18181b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Active</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Poppy</td>
                    <td style="padding: 4px 6px;">Meta, Sierra AI</td>
                    <td style="padding: 4px 6px;">Conversational customer service agent handoffs.</td>
                    <td style="padding: 4px 6px;">Session Auth Token</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #e4e4e7; color: #18181b; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Open</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Open Standards vs. Closed App Platforms:</strong><br/>
              - <em>Open Standards (UCP + MCP):</em> Stores keep direct customer relationships, control pricing, and avoid high platform referral taxes.<br/>
              - <em>Closed Platforms (ACP):</em> AI chatbots manage the entire checkout, turning stores into backend suppliers.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The 3-Step Handshake: From Query to Bank Receipt:</strong><br/>
              - <em>Step 1 (Catalog Discovery):</em> Sub-50ms structured JSON query verifies size, color, and delivery promises.<br/>
              - <em>Step 2 (Cart Assembly):</em> Merchant issues a cryptographically signed transaction intent with a 15-minute price lock.<br/>
              - <em>Step 3 (Settlement):</em> Single-use token cryptographically restricted to merchant domain is transmitted to bank.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Engineering Strategy for Retail Brands:</strong><br/>
              - Deploy Anthropic MCP on your product catalog now to ensure all AI models can search live stock.<br/>
              - Connect to Visa TAP for payments so shoppers can approve orders with phone FaceID without typing card numbers.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The .well-known/ucp Standard:</strong><br/>
              Similar to robots.txt for search engines, retailers host a <code>/.well-known/ucp</code> manifest on their domain root. This lets legitimate shopping agents discover supported payment methods, live product endpoints, and return policies in under 20ms without crawling web pages.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Source: Technical specifications from Google (UCP), Stripe (ACP), Coinbase (AP2), Visa (TAP), Meta (Poppy), and Anthropic (MCP) (2025-2026).
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
      ${notion.renderHeader("PAYMENTS & SETTLEMENT", "THE NOFRONTEND AGENT PAYMENTS LANDSCAPE")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How AI Agents Will Pay for Things</h2>
          <div class="report-lead-prose">
            Virtual credit cards work as a temporary bridge today, but digital bank tokens and instant stablecoins will become the permanent rails for machine shopping.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Why Virtual Cards Are Only a Temporary Fix:</strong> Today, services like Stripe and Lithic give AI bots temporary virtual credit cards to buy products. While this works on existing store websites, it causes severe real-world breakdowns. In a widely discussed case study by Scott Wessman, an agent shopping at Best Buy suffered a partial payment failure; the merchant website demanded the virtual card's CVV security code—which neither the consumer nor the autonomous agent could retrieve, stalling the checkout permanently.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Rise of Safe Agent Tokens:</strong> Payment networks are creating dedicated digital tokens for AI shoppers. Instead of sharing a 16-digit credit card number, your bank gives the AI a one-time digital pass with strict limits: for example, "approved to spend up to $75 at Nike within the next 20 minutes." If the bot makes a mistake, the buyer is fully protected.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Two Paradigms: Cards vs. x402 (The nofrontend.xyz Index):</strong> As documented by the <em>nofrontend.xyz</em> Agent Payments Map, the market is splitting into two fundamental rails: traditional <strong>Cards & Vaults</strong> (Stripe Link, Sapiom, Agentcard, Locus, Ramp) and <strong>x402 Micropayments</strong> (Circle Agent Wallets, Coinbase Agentic Wallets, Rye, Pay.sh). Cards allow agents to buy physical retail goods at traditional merchants; x402 allows agents to pay fractions of a cent for APIs, inference, and data feeds.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Hybrid Economic Dilemma (Vignesh / Meta):</strong> As payments researcher Vignesh (Meta) highlights, the market faces a pivotal economic crossroads: will agents optimize payments for consumer reward points (card interchange) or merchant fee savings (stablecoin / x402 rails)? In an autonomous world, agents will programmatically route each order to whichever rail maximizes consumer cash-back while minimizing merchant friction.
          </p>

          <!-- Publication-Grade Delegated Token Payment Handshake SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 4.1: The Delegated Token Payment Handshake Architecture
            </div>
            
            <svg viewBox="0 0 460 62" style="width: 100%; height: auto; display: block;">
              <!-- Box 1 -->
              <rect x="5" y="4" width="100" height="52" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="55" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">1. User Approval</text>
              <text x="55" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">FaceID / TouchID</text>
              <text x="55" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Sets $75 Spend Cap</text>
              <text x="55" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Time-bound 30 mins</text>

              <!-- Arrow 1 -->
              <path d="M 105 30 L 118 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Box 2 -->
              <rect x="122" y="4" width="102" height="52" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="173" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">2. Secure Vault</text>
              <text x="173" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Apple Secure Enclave</text>
              <text x="173" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Cryptographic Key</text>
              <text x="173" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Card numbers hidden</text>

              <!-- Arrow 2 -->
              <path d="M 224 30 L 237 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Box 3 -->
              <rect x="241" y="4" width="102" height="52" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="292" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">3. Bound Token</text>
              <text x="292" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Visa TAP / Mastercard</text>
              <text x="292" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Merchant-Locked</text>
              <text x="292" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Nike domain only</text>

              <!-- Arrow 3 -->
              <path d="M 343 30 L 356 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Box 4 -->
              <rect x="360" y="4" width="95" height="52" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="407" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">4. Bank Vault</text>
              <text x="407" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">Acquiring Bank</text>
              <text x="407" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#ffffff" text-anchor="middle">Instant Settle</text>
              <text x="407" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Zero chargeback risk</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Takeaway for Banks and Payment Companies:</strong>
            Virtual credit cards are a temporary bridge for the next 2 to 3 years. Banks and payment providers should test native token systems (like Visa TAP and Stripe Link) now so they are ready when virtual cards become obsolete.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 4.1: Agent Payments Landscape</div>
            <div class="exhibit-title">The Agent Payments Map (nofrontend.xyz Framework)</div>
            <div class="exhibit-subtitle">Tools mapped by payment method (x402 vs. Cards) and operational purpose (Vaults vs. Checkout).</div>

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
                    <th style="padding: 3px 6px; font-weight: 700; color: var(--ink-heading);">Primary Bottleneck / Cause</th>
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
                    <td style="padding: 3px 6px; color: #71717a;">Card issuer conservative risk controls</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 3px 6px; font-weight: 600;">Bank Digital Passkey (Visa TAP / Stripe)</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">1.8% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">Cryptographically signed biometric intent</td>
                  </tr>
                  <tr>
                    <td style="padding: 3px 6px; font-weight: 600;">Instant Digital Dollars (USDC / x402)</td>
                    <td style="padding: 3px 6px; font-weight: 700; color: #18181b;">0.3% Failed</td>
                    <td style="padding: 3px 6px; color: #71717a;">Deterministic cryptographic blockchain clearing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Why 3D Secure Fails Autonomous Shoppers:</strong>
              SMS codes and popup verification boxes cause 42% of machine checkouts to fail. Pre-authorized biometric passkeys allow the shopper to grant permission beforehand, eliminating checkout drop-offs.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Treasury & Revenue Impact for Retailers:</strong>
              Lowering checkout declines from 14% to 1.8% recovers $32M in lost annual sales per $1B in online volume. Direct token settlement cuts credit card interchange costs by 120 basis points.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Shared Payment Tokens (SPT):</strong>
              Developed by Stripe, SPTs allow agents to pass payment authorization directly to merchant endpoints without the AI agent ever storing or exposing the user's primary account number (PAN).
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Source: Synthesized from Jas Shah, nofrontend.xyz directory, Visa Research, and Stripe Developer disclosures (2025-2026).
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

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Testing 22 AI Models on Real Shopping:</strong> In early 2026, Visa Research ran the first major benchmark testing how well AI models buy real products online. Across 22 top models and 15 complex shopping tasks (like electronics, clothing, and home furniture), the average success rate was only 57.2%. The top models (Gemini 4 Argon and Claude 3.5 Sonnet) scored around 80%, meaning 1 out of every 5 orders was still incorrect.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Where AI Gets Confused:</strong> AI models don't struggle to find products; they struggle with specific requirements and real-world limits. For example, when asked to buy a living room TV, models frequently picked screens that were too wide for the customer's stand, needed the wrong wall mounts, or lacked the right HDMI ports for game consoles.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Compounding Failure Law (P = p^n):</strong> Real shopping is not a single question; it is an 8-step journey: find item, check sizing, verify electrical compatibility, confirm delivery date, apply discounts, select shipping, verify return policy, and authorize payment. If an AI achieves 85% accuracy on each step, its total task success rate collapses to 0.85^8 &approx; 27.2%. Over 70% of autonomous orders fail unless validated by deterministic code.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Lazy Searches and First-Result Bias:</strong> Research shows that when searching stores costs extra API fees, AI models stop searching too early. They compare only 2 to 4 items before picking one. Even worse, models pick one of the first 3 items shown over 40% of the time, ignoring better products further down the page.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phantom Stock & Stale Cache Hallucinations:</strong> In 26% of tested failures, models attempted to purchase items that had been out of stock for hours. The LLM relied on stale Google search index snippets rather than querying live inventory APIs, leading to immediate checkout rejections.
          </p>

          <!-- Compounding Failure Decay Curve SVG (Adjusted Viewbox & Safe Padding) -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 5.1: The Compounding Multi-Step Failure Decay Curve (P = p^n)
            </div>
            
            <svg viewBox="0 0 480 64" style="width: 100%; height: auto; display: block;">
              <!-- Grid lines -->
              <line x1="35" y1="8" x2="360" y2="8" stroke="#e4e4e7" stroke-width="0.8" stroke-dasharray="2,2"/>
              <line x1="35" y1="28" x2="360" y2="28" stroke="#e4e4e7" stroke-width="0.8" stroke-dasharray="2,2"/>
              <line x1="35" y1="48" x2="360" y2="48" stroke="#d4d4d8" stroke-width="1"/>

              <!-- Y Labels -->
              <text x="30" y="11" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">100%</text>
              <text x="30" y="31" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">50%</text>
              <text x="30" y="51" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">0%</text>

              <!-- Curve 1: 95% single step -->
              <path d="M 35 10 Q 200 16 360 21" fill="none" stroke="#18181b" stroke-width="1.8"/>
              <text x="368" y="23" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#18181b">95% Step (66% at 8)</text>

              <!-- Curve 2: 90% single step -->
              <path d="M 35 12 Q 200 24 360 31" fill="none" stroke="#52525b" stroke-width="1.5" stroke-dasharray="3,2"/>
              <text x="368" y="33" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#52525b">90% Step (43% at 8)</text>

              <!-- Curve 3: 85% single step -->
              <path d="M 35 14 Q 200 34 360 40" fill="none" stroke="#a1a1aa" stroke-width="1.5"/>
              <text x="368" y="42" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#71717a">85% Step (27% at 8)</text>

              <!-- X Labels -->
              <text x="35" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="middle">Step 1</text>
              <text x="120" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="middle">Step 3</text>
              <text x="200" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="middle">Step 5</text>
              <text x="280" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="middle">Step 7</text>
              <text x="355" y="58" font-family="Inter, sans-serif" font-size="6" fill="#71717a" text-anchor="middle">Step 8 (Final)</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for Developers:</strong>
            Never let an AI model place an order on its own without double-checking the facts. Always run a final verification step to confirm dimensions, sizes, and compatibility before charging the customer's card.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">EXHIBIT 5.1: MODEL TEST RESULTS</div>
            <div class="exhibit-title">How Accurately 22 AI Models Complete Real Shopping Tasks</div>
            <div class="exhibit-subtitle">Results from testing top AI models on complex orders with sizes, colors, and budgets.</div>

            <!-- Horizontal Bar Ranking Chart (Monochrome) -->
            <div style="background: var(--paper-subtle); border: 1px solid var(--border); border-radius: 4px; padding: 7px 12px; margin: 3px 0;">
              <div style="display: flex; justify-content: space-between; font-size: 7.2px; font-weight: 700; color: var(--ink-secondary); margin-bottom: 5px;">
                <span>ORDER SUCCESS RATE (VISA BENCHMARK)</span>
                <span>Avg: 57.2%</span>
              </div>

              <!-- Gemini 4 -->
              <div style="margin-bottom: 3px;">
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 700; color: var(--ink-heading); margin-bottom: 1px;">
                  <span>#1 Gemini 4 Argon / Muse</span>
                  <span>82.0%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #09090b; width: 82.0%; height: 100%;"></div>
                </div>
              </div>

              <!-- Claude 3.5 Sonnet -->
              <div style="margin-bottom: 3px;">
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 700; color: var(--ink-heading); margin-bottom: 1px;">
                  <span>#2 Claude 3.5 Sonnet</span>
                  <span>78.4%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #18181b; width: 78.4%; height: 100%;"></div>
                </div>
              </div>

              <!-- GPT-4o -->
              <div style="margin-bottom: 3px;">
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 700; color: var(--ink-heading); margin-bottom: 1px;">
                  <span>#3 GPT-4o</span>
                  <span>74.6%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #27272a; width: 74.6%; height: 100%;"></div>
                </div>
              </div>

              <!-- DeepSeek V3 -->
              <div style="margin-bottom: 3px;">
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 700; color: var(--ink-heading); margin-bottom: 1px;">
                  <span>#4 DeepSeek V3</span>
                  <span>66.2%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #3f3f46; width: 66.2%; height: 100%;"></div>
                </div>
              </div>

              <!-- Llama 3.3 70B -->
              <div style="margin-bottom: 3px;">
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 700; color: var(--ink-heading); margin-bottom: 1px;">
                  <span>#5 Llama 3.3 70B</span>
                  <span>58.0%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #52525b; width: 58.0%; height: 100%;"></div>
                </div>
              </div>

              <!-- Benchmark Average Line -->
              <div style="border-top: 1px dashed #a1a1aa; margin: 3px 0; position: relative;">
                <span style="position: absolute; right: 0; top: -5px; font-size: 6px; color: #71717a; background: var(--paper-subtle); padding-left: 4px;">Benchmark Average: 57.2%</span>
              </div>

              <!-- Mistral Large 2 -->
              <div style="margin-bottom: 3px;">
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 600; color: var(--ink-secondary); margin-bottom: 1px;">
                  <span>#6 Mistral Large 2</span>
                  <span>52.4%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #71717a; width: 52.4%; height: 100%;"></div>
                </div>
              </div>

              <!-- Qwen 2.5 72B -->
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 7px; font-weight: 600; color: var(--ink-secondary); margin-bottom: 1px;">
                  <span>#7 Qwen 2.5 72B</span>
                  <span>49.1%</span>
                </div>
                <div style="background: #e4e4e7; height: 6px; border-radius: 2px; overflow: hidden;">
                  <div style="background: #a1a1aa; width: 49.1%; height: 100%;"></div>
                </div>
              </div>
            </div>

            <!-- Diagnostic Breakdown of AI Shopping Mistakes (4 boxes) -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; margin-top: 4px;">
              <div style="background: #18181b; border: 1px solid #09090b; padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 7.8px; font-weight: 800; color: #ffffff;">38%</div>
                <div style="font-size: 6.2px; color: #e4e4e7; margin-top: 1px;">Dimension / Fit Mismatch</div>
              </div>
              <div style="background: #27272a; border: 1px solid #18181b; padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 7.8px; font-weight: 800; color: #ffffff;">26%</div>
                <div style="font-size: 6.2px; color: #e4e4e7; margin-top: 1px;">Phantom Stock / Stale Cache</div>
              </div>
              <div style="background: #3f3f46; border: 1px solid #27272a; padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 7.8px; font-weight: 800; color: #ffffff;">21%</div>
                <div style="font-size: 6.2px; color: #e4e4e7; margin-top: 1px;">Lazy Stops (2-3 Items)</div>
              </div>
              <div style="background: #52525b; border: 1px solid #3f3f46; padding: 4px 6px; border-radius: 3px; text-align: center;">
                <div style="font-size: 7.8px; font-weight: 800; color: #ffffff;">15%</div>
                <div style="font-size: 6.2px; color: #e4e4e7; margin-top: 1px;">DOM Shift / Broken Selectors</div>
              </div>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>The Cost of Machine Returns:</strong>
              - Returning small retail items costs $13; heavy furniture or appliances cost up to $180 in freight.<br/>
              - A single incorrect purchase eliminates the profit from 10 successful transactions.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Gartner 40% Cancellation Warning:</strong>
              Gartner predicts that 40% of early enterprise agentic pilots will be canceled by 2027 due to compounding error rates and customer dissatisfaction if retailers do not implement deterministic rules engines.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Quality Engineering Rules for 99% Reliability:</strong>
              - <em>Deterministic Rules:</em> Enforce strict programmatic checks on physical sizes and electrical voltages before checkout.<br/>
              - <em>Live MCP Pings:</em> Ping the store database directly to verify real inventory instead of trusting cached web pages.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
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

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Bot Detection Dilemma:</strong> For years, store firewalls blocked all automated web traffic using CAPTCHAs and IP bans. Today, blocking all bots means turning away paying customers who send AI agents to buy goods. Stores must transition from blocking all automated traffic to verifying cryptographic agent identity.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Cryptographic Passkeys as Identity Proofs:</strong> Instead of solving puzzle CAPTCHAs, helpful bots present cryptographic passkeys signed by the customer's phone hardware (Apple Secure Enclave or Android FIDO2). The store's firewall instantly verifies the signature and grants fast-track checkout access.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Who Pays When an AI Makes a Mistake?</strong> When an AI buys the wrong item or overspends, who takes the loss? The tripartite liability framework splits responsibility: consumers define clear spending budgets, agent developers guarantee prompt adherence, and merchants guarantee accurate catalog descriptions.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Dispute & Chargeback Elimination:</strong> Friendly fraud (customers claiming they never made a purchase) costs stores billions every year. Cryptographically signed checkout tokens provide mathematical proof of customer permission, reducing friendly-fraud chargebacks by 94% and replacing 60-day disputes with instant automated arbitration.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Scalper Bot Defense vs. Single Shoppers:</strong> Malicious scalpers use headless browsers with rotating residential IPs to hoard limited inventory. In contrast, verified consumer agents authenticate via single-session OAuth tokens tied to a verified phone passkey, allowing merchants to enforce fair one-per-person purchase limits effortlessly.
          </p>

          <!-- Publication-Grade Dual-Path WAF Screening Architecture SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 6.1: Dual-Path Autonomous WAF Screening Gate Architecture
            </div>
            
            <svg viewBox="0 0 460 66" style="width: 100%; height: auto; display: block;">
              <!-- Incoming Traffic -->
              <rect x="5" y="10" width="85" height="46" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="47" y="26" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">Incoming Bot</text>
              <text x="47" y="38" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">HTTP Stream</text>
              <text x="47" y="48" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="middle">40% of Web Traffic</text>

              <!-- Arrow to WAF -->
              <path d="M 90 33 L 108 33" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- WAF Screening Gateway -->
              <rect x="112" y="6" width="105" height="54" rx="3" fill="#f4f4f5" stroke="#18181b" stroke-width="1.2"/>
              <text x="164" y="21" font-family="Inter, sans-serif" font-size="7.5" font-weight="800" fill="#18181b" text-anchor="middle">WAF Gateway</text>
              <text x="164" y="32" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Cloudflare / Fastly</text>
              <text x="164" y="42" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Passkey Check</text>
              <text x="164" y="52" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">&lt;10ms cryptographic check</text>

              <!-- Split Arrows -->
              <path d="M 217 22 L 245 16" stroke="#18181b" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>
              <path d="M 217 44 L 245 50" stroke="#a1a1aa" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Path A: Verified Passkey -->
              <rect x="249" y="4" width="205" height="26" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="257" y="15" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#ffffff">Verified Passkey &rarr; Instant Checkout</text>
              <text x="257" y="24" font-family="Inter, sans-serif" font-size="6.2" fill="#a1a1aa">Sub-100ms API Execution &bull; $0 Fraud Risk</text>

              <!-- Path B: Unsigned Scraper -->
              <rect x="249" y="36" width="205" height="26" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="257" y="47" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#71717a">Unsigned Scraper &rarr; Blocked</text>
              <text x="257" y="56" font-family="Inter, sans-serif" font-size="6.2" fill="#a1a1aa">Rate Limited &bull; CAPTCHA Challenge Triggered</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for Security Leaders:</strong>
            Never block automated traffic blindly. Replace blunt IP bans with cryptographic passkey screening so verified customer agents can complete purchases smoothly.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 6.1: Liability Framework</div>
            <div class="exhibit-title">The Tripartite Liability Framework for Autonomous Commerce</div>
            <div class="exhibit-subtitle">How liability is legally allocated across consumer, agent platform, and merchant.</div>

            <!-- Tripartite Table (Monochrome) -->
            <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading); width: 60px;">Party</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Core Responsibility</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Liability Trigger</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Protection Guardrail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Consumer</td>
                    <td style="padding: 4px 6px;">Define spending budget and order parameters.</td>
                    <td style="padding: 4px 6px;">Orders within stated budget bounds.</td>
                    <td style="padding: 4px 6px;">Biometric spend caps & instant refund rules.</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">AI Platform</td>
                    <td style="padding: 4px 6px;">Faithfully execute user prompt constraints.</td>
                    <td style="padding: 4px 6px;">Model hallucinations or out-of-scope buys.</td>
                    <td style="padding: 4px 6px;">Signed audit logs & deterministic rule filters.</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Merchant</td>
                    <td style="padding: 4px 6px;">Provide accurate pricing and real-time inventory.</td>
                    <td style="padding: 4px 6px;">Shipping incorrect items or phantom stock.</td>
                    <td style="padding: 4px 6px;">Signed price guarantees & live MCP stock feeds.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Friendly Agents vs. Attack Traffic:</strong><br/>
              - <em>Malicious Scalpers:</em> Bursts of 10,000 requests/sec, rotating proxy IPs, zero signed tokens.<br/>
              - <em>Customer Shopping Agents:</em> Single-threaded execution, authenticated phone passkey, pre-authorized spending cap.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Dispute & Chargeback Elimination:</strong><br/>
              - Cryptographically signed checkout tokens reduce friendly-fraud chargebacks by 94%.<br/>
              - Sub-second automated arbitration using cryptographic receipts replaces 60-day bank disputes.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Zero-Trust Architecture for E-Commerce:</strong><br/>
              - Never expose raw 16-digit credit cards to LLM prompt contexts.<br/>
              - Restrict all agent payments to dedicated hardware enclaves and single-use merchant-bound tokens.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The 4 Web Traffic Classes:</strong><br/>
              Modern e-commerce sites classify inbound traffic into 4 streams: 1) Search engine indexers (Googlebot); 2) Malicious scrapers (blocked); 3) Human browser shoppers (traditional UI); and 4) Authenticated AI shopping agents (directed to high-speed JSON APIs).
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
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
      ${notion.renderHeader("MERCHANT ARCHITECTURE", "REBUILDING ONLINE CATALOGS FOR AI SHOPPERS & AEO")}
      
      <div class="report-body">
        <div class="report-main-col">
          <h2 class="report-headline">How Retailers Must Rebuild Their Catalogs for AI & The Rise of AEO</h2>
          <div class="report-lead-prose">
            Websites designed for human eyes must transform into machine-readable APIs that give AI agents instant, accurate product data.
          </div>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Death of Web Scraping:</strong> Relying on bots to read HTML websites causes 28% of orders to fail. Changing a button color or adding a newsletter popup breaks headless browser scripts. Brands that rely on web scraping will find themselves filtered out by AI shopping engines in favor of stores with fast, clean APIs.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Machine-Readable Catalogs (MCP & JSON-LD):</strong> Brands must publish their product lines using structured data formats like Schema.org JSON-LD and live Model Context Protocol (MCP) endpoints. When an AI searches for a product, it queries the store's MCP server directly, receiving accurate prices, variant dimensions, and stock levels in under 50 milliseconds.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Dynamic Pricing and Stock Desync:</strong> If an AI sees a pair of shoes for $100 on an ad, but the checkout cart charges $120 due to dynamic surge pricing, the agent halts the transaction. Stores must issue 15-minute price guarantees with signed transaction intents so bots can complete multi-step purchases without price shock.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The New Discipline of AEO (Agent Engine Optimization):</strong> Just as SEO defined web marketing for two decades, AEO dictates who wins in agentic commerce. AI engines prioritize stores with complete technical specifications, verified return terms, and 99.9% API uptime. Tools like Ranketta help brands monitor their visibility and citation share across ChatGPT, Claude, and Gemini.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Semantic Vector Product Graphs:</strong> Leading retailers are replacing keyword tags with vector embeddings that describe product use cases, compatibility boundaries, and aesthetic styles. This enables reasoning LLMs to match complex semantic requirements (e.g., "silent mechanical keyboard under 15 inches for Mac") with zero keyword guesswork.
          </p>

          <!-- Publication-Grade Catalog Integration SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 7.1: Catalog Architecture: Fragile Scraping vs Direct Machine APIs
            </div>
            
            <svg viewBox="0 0 460 64" style="width: 100%; height: auto; display: block;">
              <!-- Legacy Scraping -->
              <rect x="5" y="6" width="195" height="52" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="15" y="21" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b">Legacy HTML Web Scraping</text>
              <text x="15" y="32" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a">Headless Browser &bull; 2,500ms Latency</text>
              <text x="15" y="42" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#71717a">28.6% Failure Rate (Fragile)</text>
              <text x="15" y="51" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Breaks on DOM shifts & button redesigns</text>

              <!-- Arrow -->
              <path d="M 205 32 L 230 32" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Modern API Feeds -->
              <rect x="235" y="6" width="220" height="52" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="245" y="21" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">Direct MCP / UCP API Feeds</text>
              <text x="245" y="32" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7">Structured JSON &bull; 35ms Latency</text>
              <text x="245" y="42" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">0.4% Failure Rate (Resilient)</text>
              <text x="245" y="51" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa">Direct cryptographic inventory integration</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Key Advice for E-Commerce Leaders:</strong>
            Publish structured JSON-LD feeds and an Anthropic MCP server within 90 days. Retailers whose product catalogs are not directly queryable by AI will vanish from conversational search results.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 7.1: Merchant Architecture Comparison</div>
            <div class="exhibit-title">Comparing Catalog Integration Methods for AI Shopping</div>
            <div class="exhibit-subtitle">Technical performance, maintenance overhead, and checkout reliability.</div>

            <!-- Catalog Methods Table (Monochrome) -->
            <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Method</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Speed</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Error Rate</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Maintenance</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Best Used For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">HTML Web Scraping</td>
                    <td style="padding: 4px 6px;">2,500ms</td>
                    <td style="padding: 4px 6px; color: #18181b; font-weight: 600;">28.6%</td>
                    <td style="padding: 4px 6px; color: #71717a;">Very High</td>
                    <td style="padding: 4px 6px;">Legacy fallback only</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Headless Browser</td>
                    <td style="padding: 4px 6px;">1,800ms</td>
                    <td style="padding: 4px 6px; color: #18181b; font-weight: 600;">18.2%</td>
                    <td style="padding: 4px 6px; color: #71717a;">High</td>
                    <td style="padding: 4px 6px;">Interim bridge</td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Direct REST / GraphQL</td>
                    <td style="padding: 4px 6px;">120ms</td>
                    <td style="padding: 4px 6px; color: #18181b; font-weight: 600;">3.4%</td>
                    <td style="padding: 4px 6px; color: #71717a;">Moderate</td>
                    <td style="padding: 4px 6px;">Partner brands</td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Native MCP Server</td>
                    <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">35ms</td>
                    <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">0.4%</td>
                    <td style="padding: 4px 6px; color: #71717a;">Low</td>
                    <td style="padding: 4px 6px; font-weight: 600;">Future standard</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>The 3 Pillars of AI-Ready Product Catalogs:</strong><br/>
              - <em>Sub-50ms Real-Time Stock Pings:</em> Eliminate phantom inventory orders before cart assembly.<br/>
              - <em>Structured Physical Attributes:</em> Explicit dimensions, weight, voltage, and allergen tags.<br/>
              - <em>Guaranteed 15-Minute Price Locks:</em> Signed cryptographic intents prevent cart price shock.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>From SEO to AEO (Agent Engine Optimization):</strong><br/>
              - Traditional keyword stuffing and backlink games no longer work on AI search models.<br/>
              - AI agents rank products by structured factual accuracy, return terms, verified buyer ratings, and stock reliability monitored via Ranketta.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>Implementation Checklist for CTOs:</strong><br/>
              - Audit product metadata for complete physical dimensions and voltage specifications.<br/>
              - Deploy an open MCP endpoint on your Shopify, BigCommerce, or Salesforce storefront.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>AEO Scoring Signals (Ranketta Framework):</strong><br/>
              Autonomous assistants evaluate product endpoints based on: 1) Factual metadata completeness (35%); 2) Real-time price integrity (30%); 3) Verified low return rate track record (20%); and 4) Sub-50ms query latency (15%).
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
              Source: Benchmark performance data compiled from Shopify, commercetools, Ranketta, and Anthropic engineering documentation (2025-2026).
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

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Shift in Customer Gatekeepers:</strong> For two decades, Google Search and Amazon were the front doors of online shopping. Today, conversational AI apps (ChatGPT, Gemini, Claude) capture user intent first, deciding which store gets the order. When shoppers ask an AI to find running shoes, the AI picks the merchant, bypassing search engines completely.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Apple's Hardware Security Moat:</strong> Apple controls the hardware gateway: 2 billion active iPhones, iPads, and Macs equipped with the Secure Enclave. Even if an AI agent plans a purchase, Apple Pay and biometric passkeys require user thumbprint or FaceID confirmation. This hardware position gives Apple a powerful toll booth over all autonomous retail transactions.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Amazon and Shopify's Defenses:</strong> Amazon's moat is physical logistics: 2-day Prime delivery and automated fulfillment warehouses. Shopify's moat is merchant scale: connecting millions of independent stores directly to Google UCP and AI agents so retailers don't depend on Amazon.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Card Networks Protect the Payment Rails:</strong> Visa and Mastercard are not sitting still. By building agent identity standards like TAP, they ensure that every AI transaction still routes across their global banking networks, protecting their lucrative transaction fee pools.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Antitrust & Default Steering Scrutiny:</strong> Regulatory bodies in the US (FTC) and EU (DMA) are investigating whether AI platforms unfairly steer shoppers toward preferred commercial partners. This regulatory pressure will accelerate open protocols (UCP and MCP) to ensure unbiased algorithmic product discovery.
          </p>

          <!-- Publication-Grade 4-Way Power Struggle Diagram -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 8.1: The 4-Way Power Struggle in Agentic Commerce
            </div>
            
            <svg viewBox="0 0 460 62" style="width: 100%; height: auto; display: block;">
              <!-- Node 1: Intent Gatekeepers -->
              <rect x="5" y="6" width="102" height="50" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="56" y="19" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">1. Intent Gatekeepers</text>
              <text x="56" y="30" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">OpenAI & Google</text>
              <text x="56" y="40" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#ffffff" text-anchor="middle">Owns Customer Prompt</text>
              <text x="56" y="49" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="middle">Takes 5-15% commission</text>

              <!-- Node 2: Hardware Identity -->
              <rect x="120" y="6" width="102" height="50" rx="3" fill="#27272a" stroke="#18181b" stroke-width="1"/>
              <text x="171" y="19" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">2. Hardware Identity</text>
              <text x="171" y="30" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">Apple (Secure Enclave)</text>
              <text x="171" y="40" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#ffffff" text-anchor="middle">Biometric Authorization</text>
              <text x="171" y="49" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="middle">2B devices gateway</text>

              <!-- Node 3: Payment Rails -->
              <rect x="235" y="6" width="102" height="50" rx="3" fill="#3f3f46" stroke="#27272a" stroke-width="1"/>
              <text x="286" y="19" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">3. Payment Rails</text>
              <text x="286" y="30" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">Visa, Mastercard, Stripe</text>
              <text x="286" y="40" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#ffffff" text-anchor="middle">Tokenized Clearing Vault</text>
              <text x="286" y="49" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="middle">Interchange settlement</text>

              <!-- Node 4: Physical Logistics -->
              <rect x="350" y="6" width="105" height="50" rx="3" fill="#52525b" stroke="#3f3f46" stroke-width="1"/>
              <text x="402" y="19" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">4. Physical Logistics</text>
              <text x="402" y="30" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">Amazon & Walmart</text>
              <text x="402" y="40" font-family="Inter, sans-serif" font-size="6.2" font-weight="600" fill="#ffffff" text-anchor="middle">Same-Day Warehouses</text>
              <text x="402" y="49" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="middle">Last-mile fulfillment moat</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Strategic Imperative for Brand Executives:</strong>
            Do not become a passive white-label manufacturer for tech gatekeepers. Maintain direct customer relationships by supporting open shopping protocols (UCP and MCP) across all AI platforms.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 8.1: Big Tech Competitive Matrix</div>
            <div class="exhibit-title">Big Tech Moats and Strategies in Agentic Commerce</div>
            <div class="exhibit-subtitle">Strategic positioning, core assets, key vulnerabilities, and market moats.</div>

            <!-- Big Tech Matrix (Monochrome) -->
            <div style="border: 1px solid var(--border); border-radius: 4px; overflow: hidden; margin: 3px 0;">
              <table style="width: 100%; border-collapse: collapse; font-size: 7.5px; text-align: left;">
                <thead style="background: var(--paper-subtle); border-bottom: 1px solid var(--border);">
                  <tr>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Company</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Primary Asset</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Strategic Moat</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Core Risk</th>
                    <th style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading); text-align: right;">Moat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">OpenAI</td>
                    <td style="padding: 4px 6px;">ChatGPT Intent</td>
                    <td style="padding: 4px 6px;">Closed ACP checkout</td>
                    <td style="padding: 4px 6px; color: #71717a;">No physical logistics</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #18181b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">High</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Google</td>
                    <td style="padding: 4px 6px;">Android & Gemini</td>
                    <td style="padding: 4px 6px;">Open UCP standard</td>
                    <td style="padding: 4px 6px; color: #71717a;">Ad revenue erosion</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #09090b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Very High</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Apple</td>
                    <td style="padding: 4px 6px;">2B Devices & Enclave</td>
                    <td style="padding: 4px 6px;">Hardware-level passkeys</td>
                    <td style="padding: 4px 6px; color: #71717a;">Slower LLM models</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #09090b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">Dominant</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Amazon</td>
                    <td style="padding: 4px 6px;">Prime Fulfillment</td>
                    <td style="padding: 4px 6px;">Automated warehouse hubs</td>
                    <td style="padding: 4px 6px; color: #71717a;">AI bypassing search</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #18181b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">High</span></td>
                  </tr>
                  <tr>
                    <td style="padding: 4px 6px; font-weight: 700; color: var(--ink-heading);">Stripe</td>
                    <td style="padding: 4px 6px;">Merchant Scale</td>
                    <td style="padding: 4px 6px;">Agent payment routing</td>
                    <td style="padding: 4px 6px; color: #71717a;">Underlying card fees</td>
                    <td style="padding: 4px 6px; text-align: right;"><span style="background: #18181b; color: #ffffff; padding: 1px 4px; border-radius: 2px; font-size: 6.8px; font-weight: 700;">High</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>Where the Profit Pools Will Concentrate:</strong><br/>
              - 40% of future commerce margins will concentrate in intent gatekeepers (AI apps) and payment settlement rails.<br/>
              - Mid-tier search aggregators and affiliate blogs face complete margin collapse as direct agent routing takes over.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The Cannibalization Threat to Search Advertising:</strong><br/>
              - Every purchase completed by an autonomous agent eliminates 3 to 5 traditional search ad impressions.<br/>
              - $60B in annual search keyword budgets will shift toward direct merchant API referral commissions.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The Winner's Playbook for Independent Brands:</strong><br/>
              - Own your first-party customer relationships; deploy multi-protocol endpoints across MCP, UCP, and ACP.<br/>
              - Never sign exclusive distribution pacts with a single AI app that cut off your direct customer data.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px;">
              <strong>The $20B Default Distribution Precedent:</strong><br/>
              Just as Google paid Apple $20B annually to be the default search engine on Safari, AI labs will bid billions to be the default shopping agent pre-installed on smartphone operating systems and connected hardware.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
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

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>The Phased Shift to Machine Commerce:</strong> Agentic commerce is not an overnight disruption; it is a three-stage architectural transition. Organizations that delay preparation until 2028 will face 4x higher customer acquisition costs and risk total exclusion from AI recommendation graphs.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 1: Open Catalog Discovery (Months 1-6):</strong> Audit your product data. Clean up physical specifications, dimensions, and live stock feeds. Deploy an Anthropic MCP server to make your catalog instantly readable by AI agents. Ensure your product descriptions include hard facts like measurements, voltages, and materials so bots can verify compatibility without error.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 2: Automated Checkout & Passkeys (Months 6-12):</strong> Eliminate bot-blocking firewalls for verified customer agents. Integrate Visa TAP and biometric passkey authorization to cut checkout drop-off rates. Provide 15-minute price guarantees with signed transaction intents so machine shoppers can complete purchases without fear of dynamic price surge.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Phase 3: Autonomous Inventory & Machine Pricing (Months 12-18):</strong> Allow AI agents to negotiate dynamic bulk pricing, automate re-orders for recurring supplies, and fulfill machine-to-machine procurement without human delay. Connect your supply chain backend directly to agentic procurement networks.
          </p>

          <p class="report-p" style="margin-bottom: 7px;">
            <strong>Corporate Governance & Budget Caps:</strong> Establish strict policy rails within corporate procurement software: hard daily spending ceilings, mandatory multi-signature authorization for capital expenditures exceeding $10,000, and complete immutable audit logging of prompt rationale and receipt hashes.
          </p>

          <!-- Publication-Grade Enterprise Procurement Loop SVG -->
          <div style="border: 1px solid var(--border); border-radius: 4px; padding: 7px 10px; background: #ffffff; margin-top: 5px;">
            <div style="font-size: 7.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 5px;">
              Figure 9.1: The Autonomous Enterprise Procurement Loop Architecture
            </div>
            
            <svg viewBox="0 0 460 62" style="width: 100%; height: auto; display: block;">
              <!-- Step 1 -->
              <rect x="5" y="4" width="95" height="52" rx="3" fill="#fafafa" stroke="#d4d4d8" stroke-width="1"/>
              <text x="52" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">1. Need Trigger</text>
              <text x="52" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Sensor / Low Stock</text>
              <text x="52" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Automated Agent</text>
              <text x="52" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Parts depletion</text>

              <!-- Arrow 1 -->
              <path d="M 100 30 L 115 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 2 -->
              <rect x="119" y="4" width="105" height="52" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="171" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">2. Multi-Vendor</text>
              <text x="171" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">MCP Catalog Search</text>
              <text x="171" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Best Price & Delivery</text>
              <text x="171" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Evaluates 10 suppliers</text>

              <!-- Arrow 2 -->
              <path d="M 224 30 L 239 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 3 -->
              <rect x="243" y="4" width="102" height="52" rx="3" fill="#f4f4f5" stroke="#d4d4d8" stroke-width="1"/>
              <text x="294" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#18181b" text-anchor="middle">3. Token Settle</text>
              <text x="294" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Visa TAP Token</text>
              <text x="294" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="middle">Pre-Authorized Cap</text>
              <text x="294" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Corporate spend limit</text>

              <!-- Arrow 3 -->
              <path d="M 345 30 L 360 30" stroke="#71717a" stroke-width="1.2" fill="none" marker-end="url(#arrowhead)"/>

              <!-- Step 4 -->
              <rect x="364" y="4" width="91" height="52" rx="3" fill="#18181b" stroke="#09090b" stroke-width="1"/>
              <text x="409" y="17" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff" text-anchor="middle">4. Delivery</text>
              <text x="409" y="29" font-family="Inter, sans-serif" font-size="6.5" fill="#e4e4e7" text-anchor="middle">Autonomous Hub</text>
              <text x="409" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#ffffff" text-anchor="middle">Sub-Day Fulfilled</text>
              <text x="409" y="49" font-family="Inter, sans-serif" font-size="6" fill="#a1a1aa" text-anchor="middle">Auto-dispute clearing</text>
            </svg>
          </div>

          <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: var(--paper-subtle);">
            <strong>Final Boardroom Directive:</strong>
            Agentic commerce is not another digital marketing channel. It is the fundamental rewiring of global trade. Retailers that build machine-readable catalogs and tokenized checkout rails today will capture the $1.5 trillion autonomous shopping wave.
          </div>
        </div>

        <div class="report-exhibit-col">
          <div class="exhibit-container">
            <div class="exhibit-tag">Exhibit 9.1: Strategic Roadmap</div>
            <div class="exhibit-title">The 18-Month Agentic Commerce Implementation Roadmap</div>
            <div class="exhibit-subtitle">Actionable milestones for retail executives, engineering teams, and treasury leaders.</div>

            <!-- 3-Phase Roadmap Component -->
            <div style="display: flex; flex-direction: column; gap: 4px; margin: 3px 0;">
              <!-- Phase 1 -->
              <div style="border: 1px solid var(--border); border-left: 3px solid #18181b; padding: 4px 8px; border-radius: 3px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #18181b;">Phase 1: Catalog Discovery & MCP</span>
                  <span style="font-size: 6.8px; color: #71717a;">Q1-Q2 2026 (Months 1-6)</span>
                </div>
                <div style="font-size: 7px; color: #3f3f46; margin-top: 2px;">
                  Audit product metadata for dimensions and voltage. Deploy an open Anthropic MCP server on your store backend so AI models can search live stock.
                </div>
              </div>

              <!-- Phase 2 -->
              <div style="border: 1px solid var(--border); border-left: 3px solid #27272a; padding: 4px 8px; border-radius: 3px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #18181b;">Phase 2: Tokenized Checkout & Passkeys</span>
                  <span style="font-size: 6.8px; color: #71717a;">Q3-Q4 2026 (Months 7-12)</span>
                </div>
                <div style="font-size: 7px; color: #3f3f46; margin-top: 2px;">
                  Connect to Visa TAP and Apple Secure Enclave passkeys. Whitelist friendly customer agents on store firewalls to cut checkout drop-offs from 21% down to under 1%.
                </div>
              </div>

              <!-- Phase 3 -->
              <div style="border: 1px solid var(--border); border-left: 3px solid #09090b; padding: 4px 8px; border-radius: 3px; background: #ffffff;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 7.8px; font-weight: 700; color: #18181b;">Phase 3: Autonomous Enterprise Commerce</span>
                  <span style="font-size: 6.8px; color: #71717a;">Q1-Q2 2027 (Months 13-18)</span>
                </div>
                <div style="font-size: 7px; color: #3f3f46; margin-top: 2px;">
                  Enable automated machine-to-machine procurement, signed 15-minute price guarantees, and algorithmic dispute arbitration for recurring inventory replenishment.
                </div>
              </div>
            </div>

            <!-- The 5-Point Readiness Checklist for Retailers -->
            <div style="border: 1px solid var(--border); border-radius: 3px; padding: 5px 8px; background: var(--paper-subtle); margin-top: 4px;">
              <div style="font-size: 7.5px; font-weight: 700; color: #18181b; margin-bottom: 2px;">The 5-Point Readiness Checklist for Retailers:</div>
              <div style="font-size: 6.8px; color: #27272a; line-height: 1.45;">
                &bull; 1. Machine-readable catalog published via Anthropic MCP?<br/>
                &bull; 2. Real-time sub-50ms stock ping API connected?<br/>
                &bull; 3. Biometric passkey checkout enabled (Visa TAP / Apple Pay)?<br/>
                &bull; 4. Bot firewall whitelisting friendly customer agents?<br/>
                &bull; 5. Signed 15-minute price quote guarantees supported?
              </div>
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 5px; padding: 7px 10px;">
              <strong>The Heavy Cost of Delaying Integration:</strong><br/>
              - Brands that wait until 2028 will face 4x higher customer acquisition costs as AI search models favor established API connections.<br/>
              - Competitors with live MCP catalogs will capture default repeat-purchase subscriptions automatically.
            </div>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; border-left: 3px solid var(--ink-heading); background: #ffffff;">
              <strong>Boardroom Recommendation:</strong><br/>
              Fund your agentic commerce task force this quarter. Build machine-readable catalogs and tokenized rails to lead the autonomous economy.
            </div>

            <div class="exhibit-source-note" style="margin-top: 5px;">
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
