export function getSpread17(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("ECONOMIC THEORY", "SEARCH THEORY AND INFORMATION ECONOMICS", "17")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Information Economics</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Search Cost Asymmetry, Ursu Position Bias, and Margin Migration</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              An economic analysis of search cost compression, Bakos attribute evaluation, Ursu position bias, and the collapse of traditional CPC advertising.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Bakos Search Theory in Machine Commerce.</strong> Classical information economics formulated by J. Yannis Bakos (Management Science, 1997 [1]) distinguishes between the cost of discovering prices and the cost of evaluating product attributes. When consumers face high attribute search costs, direct price competition softens because finding differentiated products is tedious. In an agentic economy, software agents compress attribute search costs to near-zero. An agent instantly evaluates thousands of candidate SKUs across complex multi-attribute matrices.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Ursu Position Bias Field Evidence (Chicago Booth).</strong> In human digital search, the top-ranked link captures over 30% of user clicks, while position 10 captures less than 2%. However, econometric field research on randomized search results by R. M. Ursu (University of Chicago Booth School of Business, 2016 [2]) demonstrated that while search position influences initial consumer consideration, it exhibits zero statistically detectable effect on final purchase conversion once an item enters the evaluation set.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Algorithmic Consideration Sets Overrule Visual Ranking.</strong> For autonomous agents, visual screen position is completely irrelevant. Agents do not browse pages sequentially; they evaluate candidate sets programmatically. An agent filters thousands of candidate SKUs down to an optimal Pareto frontier based strictly on deterministic attributes (price, quality score, delivery certainty, return ease). Merchants relying on paid search placement without superior underlying product attributes face immediate disintermediation.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Disintermediation of Cost-Per-Click (CPC) Advertising.</strong> As machine agents replace human browsing, the traditional digital advertising model based on cost-per-click faces structural margin compression. Machines do not click on banner ads, watch promotional videos, or experience impulse buying triggers. Value migrates away from front-end impression auctions toward programmatic transaction routing fees and certified API access fees.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Emergence of Transaction Commissions and Premium API Tiers.</strong> Retailers and aggregators are establishing new monetization frameworks. Instead of charging brands to appear at the top of search pages, platforms charge a percentage transaction fee upon verified order settlement. In addition, merchants are launching authenticated membership APIs that offer preferential inventory allocation, faster shipping SLAs, and exclusive SKU access to subscribed agent networks.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Pareto Efficiency and Product Differentiation Pressures.</strong> When machine evaluators filter catalogs without emotional bias, mid-tier commodity brands with average pricing and standard shipping are eliminated. Retailers must either compete on ultra-lean cost leadership or invest in patented, highly differentiated physical goods that hold unique utility curves.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Information Economics Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              When attribute search costs drop to zero, price premiums must be supported by verifiable physical differentiation or logistics speeds. Marketing fluff cannot persuade a mathematical evaluator.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Margin Migration -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 9.1 - VALUE MIGRATION ACROSS DIGITAL COMMERCE MODELS</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Structural transition from visual human attention to deterministic machine execution</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 2 Comparison Panels -->
              <rect x="0" y="4" width="220" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="220" height="22" rx="3" fill="#f4f4f5"/>
              <text x="12" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Traditional E-Commerce (1995-2025)</text>
              <text x="12" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Core Currency: Human visual attention</text>
              <text x="12" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Monetization: Cost-Per-Click (CPC) ads</text>
              <text x="12" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Discovery: Google Search, Instagram, SEO</text>
              <rect x="12" y="92" width="196" height="24" rx="2" fill="#f4f4f5"/>
              <text x="110" y="107" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#71717a" text-anchor="middle">Dominant Moat: Ad Spend & Brand Equity</text>

              <rect x="240" y="4" width="220" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="240" y="4" width="220" height="22" rx="3" fill="#09090b"/>
              <text x="252" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">Agentic Commerce (2026+)</text>
              <text x="252" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Core Currency: Machine-readable data feeds</text>
              <text x="252" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Monetization: Transaction routing fees</text>
              <text x="252" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Discovery: Structured MCP, JSON-LD, ACO</text>
              <rect x="252" y="92" width="196" height="24" rx="2" fill="#09090b"/>
              <text x="350" y="107" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#ffffff" text-anchor="middle">Dominant Moat: Logistics & API Verification</text>
            </svg>
          </div>

          <!-- Middle Table: Information Economics -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 9.1 - INFORMATION ECONOMICS DYNAMICS MATRIX</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Economic comparison between human visual search and autonomous agent evaluation</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Economic Dimension</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Human Search Behavior</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Autonomous Agent Behavior</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Market Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Attribute Search Cost</td>
                  <td style="padding: 4px 6px;">High (Reading reviews, tabs)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Near-Zero (Parallel JSON parsing)</td>
                  <td style="padding: 4px 6px;">Commoditization of non-differentiated goods</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Position Bias Impact</td>
                  <td style="padding: 4px 6px;">Extreme (Top 3 capture 60% clicks)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Zero (Ursu 2016 Pareto Frontier)</td>
                  <td style="padding: 4px 6px;">Paid search placement loses pricing power</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Brand Loyalty Inertia</td>
                  <td style="padding: 4px 6px;">High (Emotional attachment)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Low (90% open to switch, Accenture)</td>
                  <td style="padding: 4px 6px;">Margin compression for middle-tier brands</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Impulse Buying Rate</td>
                  <td style="padding: 4px 6px;">35% - 45% of Cart Items</td>
                  <td style="padding: 4px 6px; font-weight: 600;">0% (Strict programmatic rules)</td>
                  <td style="padding: 4px 6px;">Decline of checkout cross-sell merchandising</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Economic Invariant.</strong>
              When attribute search costs drop to zero, price premiums must be supported by verifiable physical differentiation or proprietary logistics speeds. Marketing fluff cannot convince a mathematical evaluator.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] J. Y. Bakos, Management Science (1997); [2] R. M. Ursu, Chicago Booth (2016); [3] Accenture Strategy (FY26).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">STRATEGIC COMMENTARY - MONETIZATION AND ROUTING FEES</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              As technology analyst Benedict Evans observes, search engines monetized intentions by charging merchants to distract users.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              When agents fulfill intentions directly, advertising yields to transaction routing fees. Platforms that control user intent capture 1% to 3% referral commissions on verified settlement.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Publishers and affiliate sites dependent on display ad impressions face immediate revenue collapse unless they transition to certified merchant data curation.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Search Theory and Information Economics")}
    </div>
  `;
}
