export function getSpread10(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("SETTLEMENT MECHANICS", "THE EXECUTION GAP AND SPLIT-CAPTURE SETTLEMENT", "10")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">The 63% Execution Gap and Complex Multi-Capture Settlement</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              An empirical diagnosis of enterprise checkout failure rates, split-shipment logistics, and multi-capture parent token architectures.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Execution Gap (Thoughtworks & Stripe Benchmark).</strong> A profound quantitative divide characterizes enterprise agent readiness. In empirical benchmarking across 2,400 retail organizations by Thoughtworks and Stripe (2026 [1]), 63% of enterprise technology leaders express high confidence in their conversational search capabilities. However, only 11% possess operational infrastructure capable of executing autonomous programmatic settlement. Over 89% of deployments stall at the payment handoff stage.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Split-Shipment CVV Edge Cases (Scott Wessman Analysis).</strong> As documented by payments engineer Scott Wessman [2], retail order settlement frequently diverges from simple single-charge models. In modern fulfillment networks, a single retail order containing multiple items is routinely split across regional warehouses. If a consumer orders three items, the retailer places an initial pre-authorization hold, followed by separate capture charges as individual packages ship.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Virtual Card and Ephemeral Token Failure in Multi-Capture.</strong> When an autonomous agent attempts to settle a split shipment using a standard single-use virtual card or single-use ephemeral token, the first warehouse capture succeeds, but subsequent capture requests are declined by the card issuer. The issuer fraud engine detects that the security code (CVV) or single-use token was consumed, causing remaining items to be cancelled.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Merchant Category Code and Descriptor Mismatches.</strong> A secondary settlement failure mode stems from billing descriptor discrepancies. When an AI shopping assistant initiates a transaction through an aggregator, the bank statement descriptor may display the aggregator name rather than the retail brand. Cardholders reviewing monthly statements fail to recognize the transaction, generating friendly-fraud chargebacks that exceed 4.2% in unoptimized deployments.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Architectural Remediation (Visa TAP and Multi-Capture Binding).</strong> Solving the execution gap requires merchant checkout gateways to support recurring authorization frameworks. Implementing Visa TAP and Mastercard SPT specifications enables multi-capture authorization binding. The initial pre-authorization token carries a parent mandate identifier that permits downstream child captures across warehouses without exposing the primary account number.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Post-Authorization Reversal and Partial Fulfillment Reconciliation.</strong> In multi-item orders where individual stock items prove unavailable post-authorization, merchant systems must execute partial reversals rather than full transaction cancellations. Modern agent payment state machines emit granular webhooks to the agent runtime, updating order records and releasing held funds within 500 milliseconds.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Execution Gap Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Over 40% of checkout declines in programmatic commerce stem from multi-warehouse split shipments burning single-use tokens. Gateways must configure parent mandate binding to enable child captures.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Split Shipment Architecture -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 5.2 - MULTI-WAREHOUSE SPLIT CAPTURE SETTLEMENT FLOW</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Handling multi-package fulfillment holds without triggering virtual card decline errors</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- Left: Order Hold Box -->
              <rect x="0" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="138" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Parent Order Pre-Auth</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Agent authorizes $120 total</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Parent Mandate Token</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Multi-capture enabled</text>
              <rect x="8" y="92" width="122" height="24" rx="2" fill="#27272a"/>
              <text x="69" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Pre-Auth Hold ($120.00)</text>

              <!-- Splits to two warehouses -->
              <path d="M 139 48 L 158 48" stroke="#71717a" stroke-width="1.5"/>
              <path d="M 139 88 L 158 88" stroke="#71717a" stroke-width="1.5"/>

              <!-- Warehouse 1 -->
              <rect x="159" y="16" width="144" height="48" rx="2.5" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="167" y="32" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Warehouse A (East Coast)</text>
              <text x="167" y="44" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Ships Item 1 ($45.00) Day 1</text>
              <rect x="167" y="49" width="128" height="12" rx="1.5" fill="#f4f4f5"/>
              <text x="231" y="58" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#09090b" text-anchor="middle">Child Capture 1 ($45) OK</text>

              <!-- Warehouse 2 -->
              <rect x="159" y="72" width="144" height="48" rx="2.5" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="167" y="88" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Warehouse B (West Coast)</text>
              <text x="167" y="100" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Ships Item 2 ($75.00) Day 3</text>
              <rect x="167" y="105" width="128" height="12" rx="1.5" fill="#f4f4f5"/>
              <text x="231" y="114" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#09090b" text-anchor="middle">Child Capture 2 ($75) OK</text>

              <!-- Result Gateway -->
              <path d="M 304 67 L 321 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="322" y="4" width="138" height="22" rx="3" fill="#09090b"/>
              <text x="330" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">3. Reconciled Ledger</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Parent hold resolved</text>
              <text x="330" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Two captures settled</text>
              <text x="330" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Zero CVV burnouts</text>
              <rect x="330" y="92" width="122" height="24" rx="2" fill="#09090b"/>
              <text x="391" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">100% Completion Rate</text>
            </svg>
          </div>

          <!-- Middle Table: Settlement Failure Classification -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 5.2 - AGENTIC SETTLEMENT FAILURE MODE CLASSIFICATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Primary technical causes of checkout abandonment in machine-initiated transactions</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Failure Category</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Occurrence Rate</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Technical Root Cause</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Architectural Solution</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Single-Use Token Expiry</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">41.2% of Declines</td>
                  <td style="padding: 4px 6px;">Split shipment captures second warehouse after token burned</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Multi-capture parent token</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Dynamic Tax Miscalculation</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">26.8% of Declines</td>
                  <td style="padding: 4px 6px;">Municipal tax updates at checkout, exceeding strict mandate cap</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Estimated tax buffer tolerance</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Step-Up 3DS Friction</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">18.4% of Declines</td>
                  <td style="padding: 4px 6px;">Issuing bank requests SMS OTP on headless browser thread</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Visa TAP signed delegation</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Descriptor Confusion</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">13.6% of Declines</td>
                  <td style="padding: 4px 6px;">Aggregator name on statement triggers friendly chargebacks</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Dynamic merchant descriptors</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Settlement Invariant.</strong>
              Over 40% of checkout failures in programmatic retail stem from split-shipment logistics. Gateways must configure multi-capture binding rather than rigid single-use virtual card numbers.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Thoughtworks & Stripe (2026); S. Wessman Payments Engineering (2025); EMVCo Architecture Specifications.
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SETTLEMENT MECHANICS - ZERO-AMOUNT PRE-AUTHORIZATIONS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              To prevent authorization dropouts during complex split fulfillment, enterprise gateways execute an initial zero-dollar or one-dollar account verification check.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              This check verifies active card validity and captures the network token ID without locking consumer credit limits, enabling subsequent incremental captures as physical shipments depart warehouses.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              By decoupling authorization validation from final fund capture, retailers eliminate CVV burnout failures while maintaining strict fraud prevention standards.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("The Execution Gap and Split-Capture Settlement")}
    </div>
  `;
}
