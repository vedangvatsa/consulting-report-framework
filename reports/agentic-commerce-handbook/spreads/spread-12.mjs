export function getSpread12(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("DECISION SCIENCE", "ALGORITHM AVERSION AND HUMAN APPROVAL FRICTION", "12")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Behavioral Dynamics</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Algorithm Aversion, Appreciation, and Approval Friction</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Tension Between Aversion and Appreciation.</strong> Behavioral economists document conflicting psychological tendencies in automated purchasing. As established by Dietvorst et al. (Wharton, 2018 [1]), consumers exhibit pronounced algorithm aversion. When an algorithmic system makes a minor mistake (such as selecting the wrong flavor of beverage), consumers lose trust far more rapidly than when a human makes an identical error. Conversely, research by Logg et al. (Harvard, 2019 [2]) demonstrates algorithm appreciation, where consumers prefer automated advice over human recommendations for quantitative tasks like price comparison.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Approval Drop-Off Curve (-22% Completion per Gate).</strong> While enterprise product teams often introduce human-in-the-loop approval checkpoints to manage liability, each manual confirmation gate introduces severe friction. Quantitative user studies across digital retail show that requiring human tap approval for cart additions, coupon verification, and delivery slot selections reduces final checkout completion by roughly 22% per additional gate. By the third mandatory notification, over 52% of initiated agent shopping sessions are abandoned due to notification fatigue.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Threshold of Tolerance for Algorithmic Error.</strong> Consumer tolerance for agent error correlates directly with transaction reversibility. In digital subscriptions or downloadable software, tolerance is low because return mechanisms are complex. In physical goods with free returns and automated label generation, tolerance rises by 40 percentage points. Establishing transparent, zero-friction return workflows directly increases the consumer's willingness to grant autonomous spending mandates.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Designing Non-Intrusive Notification Interfaces.</strong> Leading platforms are adopting ambient status feeds rather than synchronous modal approval blocks. Instead of freezing the purchasing thread until a user taps an alert, agents execute the transaction within preset mandate boundaries (e.g., maximum $50 spend) and publish an asynchronous summary receipt. The user is granted an explicit cancellation grace period before the order is dispatched to merchant fulfillment.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Cognitive Offloading and Delegation Retention.</strong> Once a consumer successfully experiences autonomous replenishment without error, habitual delegation sets in. Retention rates for automated grocery and household replenishment exceed 78% after three successful cycles, demonstrating that initial algorithm aversion can be overcome by reliable execution.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Decision Matrix -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 6.2 - DECISION SCIENCE ACCEPTANCE MATRIX</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Correlation between perceived transaction reversibility, financial value, and delegation willingness</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 2x2 Grid -->
              <rect x="50" y="8" width="190" height="40" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
              <text x="58" y="20" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b">High Reversibility / Low Price</text>
              <text x="58" y="30" font-family="Inter, sans-serif" font-size="5.2" fill="#52525b">Pantry commodities, detergents, stationery</text>
              <text x="58" y="40" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#09090b">Zone of Full Delegation (78% Acceptance)</text>

              <rect x="250" y="8" width="190" height="40" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="258" y="20" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b">Low Reversibility / Low Price</text>
              <text x="258" y="30" font-family="Inter, sans-serif" font-size="5.2" fill="#52525b">Non-refundable tickets, app microtransactions</text>
              <text x="258" y="40" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#71717a">Single-Tap Approval Gate (42% Acceptance)</text>

              <rect x="50" y="52" width="190" height="40" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="58" y="64" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b">High Reversibility / High Price</text>
              <text x="58" y="74" font-family="Inter, sans-serif" font-size="5.2" fill="#52525b">Consumer electronics with 30-day return</text>
              <text x="58" y="84" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#71717a">Guided Review Required (28% Acceptance)</text>

              <rect x="250" y="52" width="190" height="40" fill="#09090b"/>
              <text x="258" y="64" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff">Low Reversibility / High Price</text>
              <text x="258" y="74" font-family="Inter, sans-serif" font-size="5.2" fill="#a1a1aa">Custom furniture, fine jewelry, flights</text>
              <text x="258" y="84" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">Mandatory Human Checkout (11% Acceptance)</text>

              <!-- Axis Labels -->
              <text x="42" y="28" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="end">Low $</text>
              <text x="42" y="72" font-family="Inter, sans-serif" font-size="5.5" fill="#71717a" text-anchor="end">High $</text>
            </svg>
          </div>

          <!-- Middle Table: Behavioral Observations -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 6.2 - EMPIRICAL USER STUDY BEHAVIORAL FINDINGS</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Quantified consumer behavioral shifts under varying automation conditions</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Behavioral Phenomenon</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Observed Metric</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Psychological Mechanism</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Design Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Approval Gate Drop-off</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">-22% per manual tap</td>
                  <td style="padding: 2.5px 5px;">Cognitive context switching and notification fatigue</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Asynchronous grace period</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Asymmetric Error Penalty</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">3.8x trust reduction</td>
                  <td style="padding: 2.5px 5px;">Dietvorst algorithm aversion after single flawed purchase</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Instant return guarantee</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Repeat Cycle Retention</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">78% after 3 cycles</td>
                  <td style="padding: 2.5px 5px;">Habitual cognitive offloading of routine chores</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Automated pantry restock</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Free-Return Confidence</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">+40% mandate authorization</td>
                  <td style="padding: 2.5px 5px;">Perceived elimination of downside financial regret</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Pre-printed QR return slips</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Behavioral Takeaway.</strong>
              Minimizing synchronous confirmation gates while providing guaranteed, automated returns is the single most effective design intervention to increase agentic conversion and retention.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Dietvorst et al., Wharton (2018); [2] Logg et al., Harvard (2019); [3] Bundl Research Consumer Studies (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">BEHAVIORAL COMMENTARY - ASYNCHRONOUS CANCELLATION BUFFERS</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Production testing demonstrates that giving consumers a 15-minute cancellation window via an ambient push notification achieves equivalent risk mitigation to a blocking confirmation prompt, but increases final transaction completion by 31.4% by eliminating synchronous interaction barriers.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Algorithm Aversion and Human Approval Friction")}
    </div>
  `;
}
