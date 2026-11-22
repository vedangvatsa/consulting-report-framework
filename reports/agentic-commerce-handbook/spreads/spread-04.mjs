export function getSpread04(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("CONSUMER BEHAVIOR", "THE AUTOMATION CURVE AND DELEGATION SPECTRUM", "04")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Behavioral Foundations</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Consumer Delegation Thresholds and Regret Risk Dynamics</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The 6-Level Automation Spectrum (McKinsey QuantumBlack).</strong> Delegation in commercial transactions does not progress uniformly across categories. Research by McKinsey QuantumBlack (2025-2026 [1]) establishes a formal six-level maturity ladder. Level 0 represents manual human navigation. Level 1 introduces conversational recommendations. Level 2 adds automated cart compilation. Level 3 enables single-tap checkout approval. Level 4 permits conditional buying based on programmatic rules. Level 5 achieves full autonomous buying without human confirmation.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Regret-Risk Boundary in Delegation.</strong> The primary determinant of whether a consumer permits an agent to buy is regret risk, defined as the perceived economic and emotional cost of an erroneous purchase. Routine pantry items, cleaning supplies, and recurring replenishment exhibit high delegation willingness, reaching 68% in low-regret categories. In contrast, high-variance categories like luxury apparel, fine jewelry, and complex consumer electronics plateau below 14% delegation willingness, where consumers insist on manual review.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Demographic Transition and Algorithmic Trust (Bundl Research).</strong> Field research by Bundl and Greenbook (2026 [2]) highlights a pronounced generational divide in automation comfort. Over 81% of Gen Alpha consumers actively use AI tools during purchasing journeys, compared to 52% of Gen Z shoppers. Crucially, 74% of surveyed young shoppers state they trust an AI agent more than a human friend to recommend products, while 56% permit an agent to select brands for their consideration set.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Brand Fragility and Search Cost Asymmetry (Accenture & Bakos).</strong> Economic search theory by J. Yannis Bakos (1997 [3]) demonstrates that reducing attribute search costs enables buyers to identify optimal product matches. Survey findings by Accenture Strategy (FY26 [4]) reveal that 90% of frequent AI shopping users are open to abandoning a preferred brand if an agent identifies an alternative with superior specifications, faster shipping, or better unit economics. Bundl data confirms this vulnerability, finding that 37% of brand-loyal shoppers permit their agents to swap brands automatically.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Delegation Funnel Drop-off.</strong> While 85% of consumers willingly delegate product search and 74% accept single-tap cart approvals, unconstrained background buying drops to 9%. Overcoming this resistance requires deterministic trust mechanisms, including spending caps, instant cancellation windows, and automated return processing.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: 4-Stage Delegation Funnel -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 2.2 - THE 4-STAGE DELEGATION FUNNEL AND MATURITY SPECTRUM</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Consumer willingness to delegate authority across progressive shopping phases</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 4 Step Boxes -->
              <rect x="0" y="4" width="108" height="90" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="108" height="17" rx="3" fill="#f4f4f5"/>
              <text x="8" y="15" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#09090b">1. Ask (85% Ready)</text>
              <text x="8" y="33" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a">Levels 0-1 Search</text>
              <text x="8" y="44" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Conversational discovery</text>
              <text x="8" y="55" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Human clicks and buys</text>
              <line x1="8" y1="62" x2="100" y2="62" stroke="#f4f4f5" stroke-width="1"/>
              <text x="8" y="73" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b">Shortlist Filter</text>
              <text x="8" y="84" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">56% let AI pick brands</text>

              <rect x="116" y="4" width="108" height="90" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="116" y="4" width="108" height="17" rx="3" fill="#f4f4f5"/>
              <text x="124" y="15" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#09090b">2. Approve (74%)</text>
              <text x="124" y="33" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a">Levels 2-3 Checkout</text>
              <text x="124" y="44" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Agent prepares cart</text>
              <text x="124" y="55" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Single tap confirmation</text>
              <line x1="124" y1="62" x2="216" y2="62" stroke="#f4f4f5" stroke-width="1"/>
              <text x="124" y="73" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b">Guided Payment</text>
              <text x="124" y="84" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">Human reviews total</text>

              <rect x="232" y="4" width="108" height="90" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="232" y="4" width="108" height="17" rx="3" fill="#f4f4f5"/>
              <text x="240" y="15" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#09090b">3. Delegate (32%)</text>
              <text x="240" y="33" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a">Level 4 Conditional</text>
              <text x="240" y="44" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Buys on price drops</text>
              <text x="240" y="55" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a">Bounded mandate caps</text>
              <line x1="240" y1="62" x2="332" y2="62" stroke="#f4f4f5" stroke-width="1"/>
              <text x="240" y="73" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b">Rule Execution</text>
              <text x="240" y="84" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">11% US adults active</text>

              <rect x="348" y="4" width="112" height="90" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="348" y="4" width="112" height="17" rx="3" fill="#09090b"/>
              <text x="356" y="15" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#ffffff">4. Forget (9%)</text>
              <text x="356" y="33" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#09090b">Level 5 Autonomous</text>
              <text x="356" y="44" font-family="Inter, sans-serif" font-size="6.0" fill="#52525b">Automatic pantry restock</text>
              <text x="356" y="55" font-family="Inter, sans-serif" font-size="6.0" fill="#52525b">Zero-click replenishment</text>
              <line x1="356" y1="62" x2="452" y2="62" stroke="#e4e4e7" stroke-width="1"/>
              <text x="356" y="73" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b">Machine Commerce</text>
              <text x="356" y="84" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Low-regret goods only</text>
            </svg>
          </div>

          <!-- Middle Table: Category Delegation -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 2.2 - MERCHANDISE CATEGORY DELEGATION WILLINGNESS</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Adoption rates correlated with perceived regret risk and purchase frequency</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Product Category</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Willingness Rate</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Dominant Level</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Regret Risk Drivers</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Household Consumables</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">68% Delegation</td>
                  <td style="padding: 2.5px 5px;">Level 4 - 5 Autonomous</td>
                  <td style="padding: 2.5px 5px;">Low price variance, standardized commodities</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Packaged Grocery Goods</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">54% Delegation</td>
                  <td style="padding: 2.5px 5px;">Level 3 - 4 Conditional</td>
                  <td style="padding: 2.5px 5px;">Dietary rules, delivery window precision</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Consumer Electronics</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">28% Delegation</td>
                  <td style="padding: 2.5px 5px;">Level 2 - 3 Guided</td>
                  <td style="padding: 2.5px 5px;">Compatibility, warranty, high financial loss</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Apparel & Footwear</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">19% Delegation</td>
                  <td style="padding: 2.5px 5px;">Level 1 - 2 Advisory</td>
                  <td style="padding: 2.5px 5px;">Sizing ambiguity, tactile and aesthetic fit</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Luxury & Fine Jewelry</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">11% Delegation</td>
                  <td style="padding: 2.5px 5px;">Level 0 - 1 Search</td>
                  <td style="padding: 2.5px 5px;">Extreme emotional value, provenance verification</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Consumer Adoption Pattern.</strong>
              Delegation advances along a predictable regret curve. Retailers operating in routine replenishment categories must implement Level 4 conditional buying rules immediately, while high-consideration brands should focus on Level 2 structured cart preparation.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] McKinsey QuantumBlack (2025-2026); [2] Bundl & Greenbook (2026); [3] J. Y. Bakos (1997); [4] Accenture Strategy (FY26).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EMPIRICAL CASE EVIDENCE - THE CONSUMER DELEGATION SPECTRUM</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Autonomous replenishment engine Instinct reports processing over one billion dollars in annualized run rate across routine consumer goods. Dutch supermarket leader Albert Heijn launched Steijn to orchestrate weekly grocery baskets, while startup Pine deployed zero-click pantry reordering with preset price caps. Across each deployment, consumers readily delegate repeat procurement while maintaining manual checkpoints for novel items.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("The Automation Curve and Delegation Spectrum")}
    </div>
  `;
}
