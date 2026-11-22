export function getSpread20(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("STRATEGIC ROADMAP", "ENTERPRISE ROADMAP AND LEGAL GOVERNANCE", "20")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Action Program</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">18-Month Enterprise Implementation Roadmap</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Phase 1 - Catalog Machine-Readability & Discovery (Months 1-3).</strong> The initial phase establishes basic machine readiness across public web assets. Merchants must audit their digital properties against the 100,000 domain benchmarks [1], deploying structured Schema.org JSON-LD definitions with validated Offer, Product, and MerchantReturnPolicy schemas. Organizations should publish a declared /.well-known/llms.txt manifest to guide search crawlers and calibrate WAF policies to ensure legitimate AI assistant IP ranges are classified without triggering CAPTCHA blocks.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Phase 2 - Protocol Integration & Tokenized Checkout (Months 4-9).</strong> The intermediate phase transitions from passive indexing to active transaction execution. Engineering teams should deploy OpenAPI 3.1 specifications and Model Context Protocol (MCP) tool endpoints for real-time inventory verification and dynamic shipping calculation. Checkout pipelines must adopt the Stripe & OpenAI Agentic Commerce Protocol (ACP) or Google UCP specifications, integrating Shared Payment Tokens (SPTs) to eliminate primary account number exposure and virtual card decline loops.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Phase 3 - Autonomous Replenishment & Multi-Agent Settlement (Months 10-18).</strong> The advanced phase introduces conditional and autonomous purchasing capabilities for low-regret merchandise. Enterprises implement Coinbase AP2 Closed Mandates or Visa TAP token rails, enabling automated replenishment bounded by cryptographically enforced price ceilings. Post-purchase logistics systems must be updated to issue machine-parseable tracking webhooks and automate return label generation for agent-initiated disputes.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Boardroom Governance and Cross-Functional Mandates.</strong> Successful execution requires cross-functional alignment across technology, e-commerce, legal, and risk divisions. Executive steering committees must establish clear liability boundaries, define acceptable algorithmic commission margins, and institute automated compliance audits to safeguard customer relationships in an algorithmic economy.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Cost of Inaction (SAP Emarsys & McKinsey Warning).</strong> Delaying machine readiness creates structural commercial exclusion. As algorithmic shopping agents capture consumer intent across search platforms, merchants lacking structured machine endpoints will be filtered out of consideration sets entirely. Investing in agentic infrastructure is not an experimental feature; it is the prerequisite for remaining visible in digital commerce.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: 18-Month Timeline -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 10.2 - 18-MONTH ENTERPRISE DEPLOYMENT TIMELINE</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Phased implementation program from catalog optimization to autonomous settlement</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- Timeline Axis -->
              <line x1="60" y1="18" x2="440" y2="18" stroke="#e4e4e7" stroke-width="1"/>
              <text x="90" y="12" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">M1-M3</text>
              <text x="180" y="12" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">M4-M6</text>
              <text x="270" y="12" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">M7-M9</text>
              <text x="350" y="12" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">M10-M14</text>
              <text x="420" y="12" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">M15-M18</text>

              <!-- Track 1: Catalog & ACO -->
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="6.0" font-weight="600" fill="#27272a">Catalog & ACO Layer</text>
              <rect x="70" y="24" width="90" height="11" rx="2" fill="#09090b"/>
              <text x="115" y="32" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Schema & JSON-LD</text>

              <!-- Track 2: WAF & Identity -->
              <text x="8" y="47" font-family="Inter, sans-serif" font-size="6.0" font-weight="600" fill="#27272a">WAF & Identity Layer</text>
              <rect x="140" y="39" width="100" height="11" rx="2" fill="#27272a"/>
              <text x="190" y="47" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Non-Human Auth / Tokens</text>

              <!-- Track 3: API & Protocol -->
              <text x="8" y="62" font-family="Inter, sans-serif" font-size="6.0" font-weight="600" fill="#27272a">API & Protocol Layer</text>
              <rect x="220" y="54" width="110" height="11" rx="2" fill="#52525b"/>
              <text x="275" y="62" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">OpenAPI & MCP Tools</text>

              <!-- Track 4: Checkout Settlement -->
              <text x="8" y="77" font-family="Inter, sans-serif" font-size="6.0" font-weight="600" fill="#27272a">Checkout Settlement</text>
              <rect x="310" y="69" width="90" height="11" rx="2" fill="#71717a"/>
              <text x="355" y="77" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Stripe ACP / Visa TAP</text>

              <!-- Track 5: Autonomous Engine -->
              <text x="8" y="92" font-family="Inter, sans-serif" font-size="6.0" font-weight="600" fill="#27272a">Autonomous Engine</text>
              <rect x="380" y="84" width="70" height="10" rx="2" fill="#09090b"/>
              <text x="415" y="91.5" font-family="Inter, sans-serif" font-size="5.0" font-weight="700" fill="#ffffff" text-anchor="middle">AP2 Closed Mandates</text>
            </svg>
          </div>

          <!-- Middle Table: Phased Resource Allocation & KPIs -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 10.2 - PHASED IMPLEMENTATION KPIS AND RESOURCE ALLOCATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Milestone criteria, target metrics, and budget distribution across 18 months</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Program Stage</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Budget Share</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary KPI</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Governance Gate</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Phase 1 - Catalog & ACO</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">40%</td>
                  <td style="padding: 2.5px 5px;">100% Schema.org validation</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">99.5% Accuracy</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Phase 2 - Checkout</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">35%</td>
                  <td style="padding: 2.5px 5px;">&lt; 2% token decline rate</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Zero PAN storage</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Phase 3 - B2B Auto</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">25%</td>
                  <td style="padding: 2.5px 5px;">8.2% conversion lift on agents</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">&lt; 1% return rate</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Roadmap Milestone.</strong>
              Completing Phase 1 within 90 days establishes basic survival against programmatic exclusion. Transitioning to Phase 2 unlocks the 3x-5x conversion premium documented in early agentic checkout trials.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] V. R. Vatsa, Zenodo record 24121071 (2026); [2] Christoph Busch, German Law Journal; [3] McKinsey (2025); [4] Bain (2025); [5] Gartner (2025-2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXECUTIVE DIRECTIVE - BOARDROOM GOVERNANCE MANDATE</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Executive leadership must treat agentic commerce as an enterprise replatforming priority rather than an experimental marketing channel. Establishing a cross-functional agentic steering committee ensures that catalog APIs, tokenization vaults, and electronic agency legal terms are fully synchronized ahead of peak consumer adoption.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Enterprise Roadmap and Legal Governance")}
    </div>
  `;
}
