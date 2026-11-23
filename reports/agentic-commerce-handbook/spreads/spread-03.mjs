export function getSpread03(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("MACRO ECONOMICS", "MARKET SIZING AND VALUE PROJECTIONS", "03")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Autonomous Transaction Sizing and Value Migration</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A quantitative synthesis of published market projections, conversion benchmarks, and addressable transaction boundaries across retail and enterprise sectors.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Divergence in Macro Forecasts ($385B to $30 Trillion).</strong> Quantitative projections from global advisory institutions diverge based on boundary criteria separating consumer retail assistance from autonomous enterprise procurement. Morgan Stanley equity research models between $190 billion and $385 billion in US consumer retail transactions influenced by autonomous agents by 2030, representing roughly 8% of digital commerce. Bain & Company projects $500 billion globally across consumer merchandise. Conversely, Gartner models over $15 trillion to $30 trillion in machine-directed commerce when evaluating B2B supply chains, where algorithmic systems automatically replenish industrial components, wholesale goods, and cloud infrastructure.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Consumer Conversion Premium (Okta & Adobe Data).</strong> Machine agents execute rigorous comparative analysis before initiating transactions. As documented in the 2026 Customer Identity Trends Report by Okta and Auth0 [2], autonomous shopping agents convert at three to five times the rate of human storefront visitors. Human digital shoppers display high abandonment rates driven by checkout friction, cognitive fatigue, and form entry. In contrast, verified agents ingest real-time catalog feeds via structured protocols, verify inventory and shipping terms prior to checkout, and complete settlement within seconds of mandate authorization.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Holiday 2025 Benchmarks and Agent Referral Growth.</strong> Empirical holiday performance metrics validate this transaction reallocation. During the 2025 holiday shopping period, Salesforce recorded $262 billion in global retail sales influenced by generative AI agents [3]. Adobe Analytics observed an 8.2% conversion rate on AI-directed shopping visits compared to a 2.1% baseline across standard human web traffic. Visa Consulting and Analytics recorded a 1,200% year-over-year surge in generative AI storefront referrals throughout 2025 [4], demonstrating that consumer search habits are transitioning toward algorithmic intermediaries.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Impacted Spend Spectrum (Boston Consulting Group).</strong> Boston Consulting Group (BCG, 2026 [5]) establishes a critical distinction between agent-influenced transactions and fully autonomous purchases. BCG models $1.3 trillion in retail spending influenced by conversational agents by 2028, with approximately $400 billion executing autonomously without manual checkout confirmation. Consumer readiness outpaces retail technical infrastructure, with 81% of surveyed consumers expressing comfort using agents for routine shopping, while only 41% of consumer packaged goods brands maintain machine-readable catalog endpoints.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Channel Cannibalization and Margin Redistribution.</strong> Value migration does not represent net-new retail consumption. Instead, autonomous purchasing reallocates transaction volume from traditional search engine ad clicks and merchant homepages toward intermediary reasoning agents. Retailers unable to serve structured JSON feeds risk disappearing from agent recommendation sets, compressing gross margins as intermediaries capture attribute comparison fees.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Capital Expenditure and Infrastructure Commitments.</strong> Global cloud providers and financial networks committed over $45 billion in dedicated compute and API routing infrastructure throughout 2025. This capital foundation supports high-frequency machine negotiations, sub-second product verification, and cryptographic credential validation across distributed commerce endpoints.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Macro Forecast Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Discrepancies among macroeconomic sizing estimates stem entirely from accounting perimeters. Retail models focus on consumer goods ($385B to $1.3T), whereas enterprise forecasts include programmatic supply chain settlement ($15T to $30T).
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Sizing Bar Chart -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 2.1 - GLOBAL MARKET SIZING ESTIMATES ACROSS SECTORS (2028-2030)</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Comparison of consumer retail vs enterprise machine procurement estimates in trillions USD</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- Grid lines -->
              <line x1="125" y1="14" x2="125" y2="114" stroke="#e4e4e7" stroke-width="1"/>
              <line x1="205" y1="14" x2="205" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="285" y1="14" x2="285" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="365" y1="14" x2="365" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="445" y1="14" x2="445" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>

              <!-- Axis Labels -->
              <text x="125" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">$0T</text>
              <text x="205" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">$5T</text>
              <text x="285" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">$10T</text>
              <text x="365" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">$20T</text>
              <text x="445" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">$30T</text>

              <!-- Bars -->
              <!-- Bar 1: Morgan Stanley US Retail -->
              <text x="117" y="27" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">Morgan Stanley (US)</text>
              <rect x="125" y="17" width="8" height="14" rx="2" fill="#71717a"/>
              <text x="139" y="28" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">$0.39T</text>

              <!-- Bar 2: Bain Global Retail -->
              <text x="117" y="49" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">Bain & Co (Global)</text>
              <rect x="125" y="39" width="10.5" height="14" rx="2" fill="#71717a"/>
              <text x="142" y="50" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">$0.50T</text>

              <!-- Bar 3: BCG Influenced -->
              <text x="117" y="71" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">BCG (Influenced)</text>
              <rect x="125" y="61" width="27" height="14" rx="2" fill="#27272a"/>
              <text x="158" y="72" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">$1.30T</text>

              <!-- Bar 4: McKinsey Consumer -->
              <text x="117" y="93" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">McKinsey (Consumer)</text>
              <rect x="125" y="83" width="84" height="14" rx="2" fill="#18181b"/>
              <text x="215" y="94" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">$4.00T</text>

              <!-- Bar 5: Gartner Machine Total -->
              <text x="117" y="112" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">Gartner (B2B + B2C)</text>
              <rect x="125" y="102" width="315" height="10" rx="2" fill="#09090b"/>
            </svg>
          </div>

          <!-- Middle Table: Advisory Consensus -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 2.1 - MARKET FORECAST CONSENSUS MATRIX</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Synthesis of published estimates, addressable boundaries, and methodology</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Advisory Entity</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Volume Metric</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Target Year</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Scope Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Morgan Stanley</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">$190B - $385B</td>
                  <td style="padding: 4px 6px;">2030</td>
                  <td style="padding: 4px 6px;">US retail e-commerce transactions mediated by AI</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Bain & Company</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">$500 Billion</td>
                  <td style="padding: 4px 6px;">2030</td>
                  <td style="padding: 4px 6px;">Global retail spend directed by shopping assistants</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Boston Consulting Group</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">$1.3 Trillion</td>
                  <td style="padding: 4px 6px;">2028</td>
                  <td style="padding: 4px 6px;">Influenced retail spending ($400B fully automated)</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">McKinsey QuantumBlack</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">$3T - $5 Trillion</td>
                  <td style="padding: 4px 6px;">2030</td>
                  <td style="padding: 4px 6px;">Global consumer commerce across 6 automation levels</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Gartner Research</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">$15T - $30 Trillion</td>
                  <td style="padding: 4px 6px;">2030</td>
                  <td style="padding: 4px 6px;">Machine customer economy (B2B wholesale + B2C)</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Strategic Sizing Distinction.</strong>
              Consumer retail models concentrate between $385 billion and $1.3 trillion. Trillion-dollar figures above $15 trillion incorporate automated enterprise procurement contracts, wholesale supply replenishment, and machine-to-machine cloud compute settlement.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Morgan Stanley Equity Research (2025); Bain & Company (2025); BCG (2026); McKinsey QuantumBlack (2025-2026); Gartner (2025).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">CASE EVIDENCE - CONVERSION VELOCITY IN EARLY DEPLOYMENTS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Production data from retail brands utilizing direct API shopping integrations indicates that machine-referred visitors complete orders at 8.2% compared to the 2.1% desktop average. Because pre-filtering occurs inside the agent reasoning loop, visitors reaching merchant payment endpoints arrive with verified inventory matching, calculated shipping terms, and active intent to settle.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Payment gateways observe that machine transactions experience fewer chargeback disputes related to buyer remorse or unnoticed recurring subscriptions when spending parameters are enforced by smart contracts or cryptographic card tokens.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Enterprise procurement teams deploying automated purchase order reconciliation report processing cycle reductions from seven days to under four minutes, demonstrating the speed premium achievable when human approval bottlenecks are eliminated.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Market Sizing and Value Projections")}
    </div>
  `;
}
