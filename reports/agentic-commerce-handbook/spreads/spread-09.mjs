export function getSpread09(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("PAYMENTS AND RAILS", "PAYMENT SETTLEMENT RAILS AND NETWORK TOKENIZATION", "09")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Settlement Rails</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Network Tokenization, Card Vaults, and Machine Rails</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Failure of Primary Account Numbers (PANs).</strong> Passing static sixteen-digit credit card numbers to software agents creates catastrophic security vulnerabilities. Once exposed in plain text within LLM reasoning memory, card credentials risk exposure through prompt injection, accidental log persistence, or model jailbreaks. In addition, issuing banks classify raw card data entered by automated headless browsers as high-risk card-not-present transactions, leading to decline rates exceeding 35%.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Network Tokenization and Consumer Confidence (Thoughtworks & Stripe).</strong> In their joint benchmark report From Confidence to Execution (2026 [1]), Thoughtworks and Stripe find that replacing static card details with cryptographically generated network tokens lifts consumer delegation willingness by 30 percentage points. Network tokens (EMVCo standard) substitute the original PAN with a domain-restricted, cryptographically bound mathematical surrogate that can only be processed by the designated merchant.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Visa Trusted Agent Protocol (TAP, RFC 9421).</strong> To institutionalize machine payments on traditional debit and credit rails, Visa introduced the Trusted Agent Protocol (TAP). Leveraging RFC 9421 HTTP Message Signatures, Visa TAP requires the purchasing agent to attach an asymmetric cryptographic signature to every API settlement payload. The signature certifies that the agent is an authorized software delegate operating within user-defined parameters, allocating fraud liability away from the merchant toward the verifying identity platform.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Mastercard Shared Payment Tokens (SPTs).</strong> Similarly, Mastercard deployed Shared Payment Tokens (SPTs) to enable multi-party delegation. When a consumer authorizes an AI shopping assistant, the issuing bank mints an SPT that is bound both to the consumer's wallet and to the specific AI intermediary. Even if an attacker intercepts the token payload, it is mathematically unusable outside the verified agent-merchant channel.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Virtual Cards vs Dedicated Agentic Rails.</strong> While fintech virtual card issuers (such as Lithic, Highnote, and Marqeta) provide programmatic cards with custom spend limits, they remain constrained by legacy interchange economics (1.5% to 3.0%). Emerging specialized machine rails (Skyfire, Payman, and stablecoin micro-rails) eliminate interchange overhead by settling directly in USD Coin (USDC), enabling sub-cent machine transactions for high-frequency automated replenishment.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Tokenization Architecture -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 5.1 - NETWORK TOKENIZATION AND VISA TAP INFRASTRUCTURE</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Cryptographic binding of consumer cards to agent runtime identities and merchant domains</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 4 Step Boxes -->
              <rect x="0" y="8" width="102" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="8" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">1. Card Vault</text>
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Apple Pay / Google Pay</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Holds underlying PAN</text>
              <rect x="8" y="52" width="86" height="16" rx="2" fill="#f4f4f5"/>
              <text x="51" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">EMVCo Root Key</text>

              <!-- Arrow 1 -->
              <path d="M 103 49 L 115 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="116" y="8" width="102" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="124" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">2. Token Service (TSP)</text>
              <text x="124" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Visa VTS / Mastercard MDES</text>
              <text x="124" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Generates Network Token</text>
              <rect x="124" y="52" width="86" height="16" rx="2" fill="#27272a"/>
              <text x="167" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Domain-Restricted Token</text>

              <!-- Arrow 2 -->
              <path d="M 219 49 L 231 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="232" y="8" width="102" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="240" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">3. AI Agent Dispatch</text>
              <text x="240" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Signs payload via RFC 9421</text>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Attaches dynamic cryptogram</text>
              <rect x="240" y="52" width="86" height="16" rx="2" fill="#f4f4f5"/>
              <text x="283" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">Visa TAP Envelope</text>

              <!-- Arrow 3 -->
              <path d="M 335 49 L 347 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="348" y="8" width="108" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="356" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">4. Acquiring Gateway</text>
              <text x="356" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Verifies agent signature</text>
              <text x="356" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Authorizes payment state</text>
              <rect x="356" y="52" width="92" height="16" rx="2" fill="#09090b"/>
              <text x="402" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Liability Transferred</text>
            </svg>
          </div>

          <!-- Middle Table: Payment Rails Evaluation -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 5.1 - PAYMENT SETTLEMENT RAILS EVALUATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Technical comparison across settlement speed, interchange cost, and fraud protection</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Payment Rail</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Settlement Latency</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Transaction Cost</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Network Tokens (Visa / MC)</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">Sub-second (&lt; 800ms)</td>
                  <td style="padding: 2.5px 5px;">Standard Interchange (1.5% - 2.8%)</td>
                  <td style="padding: 2.5px 5px;">Universal merchant acceptance and chargeback rights</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Programmatic Virtual Cards</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">Sub-second</td>
                  <td style="padding: 2.5px 5px;">Interchange + Issuer Fees</td>
                  <td style="padding: 2.5px 5px;">Dynamic spend caps per individual agent session</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Stablecoins (USDC / AP2)</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">2 - 5 Seconds (L2)</td>
                  <td style="padding: 2.5px 5px;">Fractional cent (&lt; $0.005)</td>
                  <td style="padding: 2.5px 5px;">Ideal for high-frequency micro-replenishment</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Direct Account-to-Account (ACH)</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">1 - 3 Business Days</td>
                  <td style="padding: 2.5px 5px;">Flat nominal fee ($0.20)</td>
                  <td style="padding: 2.5px 5px;">Wholesale B2B recurring subscription procurement</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Card networks maintain an overwhelming advantage in consumer commerce due to chargeback protections and zero-liability guarantees. Stablecoin rails excel in B2B micro-procurement where interchange fees erode margins.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Thoughtworks & Stripe (2026); Visa Trusted Agent Protocol Specs (2025-2026); Mastercard Developer Zone (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SETTLEMENT ARCHITECTURE - MERCHANT OF RECORD DESIGN</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              In production agent transactions, establishing clear Merchant of Record (MoR) status is vital. Early prototypes where conversational platforms acted as the MoR encountered massive tax nexus liabilities across thousands of municipal jurisdictions. Enterprise architectures now preserve the retailer as the MoR, passing signed network tokens directly to the merchant's gateway.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Payment Settlement Rails and Network Tokenization")}
    </div>
  `;
}
