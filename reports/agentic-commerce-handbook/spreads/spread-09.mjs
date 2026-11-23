export function getSpread09(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("PAYMENTS AND RAILS", "PAYMENT SETTLEMENT RAILS AND NETWORK TOKENIZATION", "09")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Network Tokenization, Card Vaults, and Machine Rails</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A technical evaluation of payment settlement rails, EMVCo network tokenization, Visa TAP signatures, and stablecoin micro-rails.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Failure of Primary Account Numbers (PANs).</strong> Passing static sixteen-digit credit card numbers to software agents creates severe security vulnerabilities. Once exposed in plain text within LLM reasoning memory, card credentials risk exposure through prompt injection, accidental log persistence, or model jailbreaks. In addition, issuing banks classify raw card data entered by automated headless browsers as high-risk card-not-present transactions, leading to decline rates exceeding 35%.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Network Tokenization and Consumer Confidence (Thoughtworks & Stripe).</strong> In their joint benchmark report From Confidence to Execution (2026 [1]), Thoughtworks and Stripe find that replacing static card details with cryptographically generated network tokens lifts consumer delegation willingness by 30 percentage points. Network tokens (EMVCo standard) substitute the original PAN with a domain-restricted, cryptographically bound mathematical surrogate that can only be processed by the designated merchant.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Visa Trusted Agent Protocol (TAP, RFC 9421).</strong> To institutionalize machine payments on traditional debit and credit rails, Visa introduced the Trusted Agent Protocol (TAP). Leveraging RFC 9421 HTTP Message Signatures, Visa TAP requires the purchasing agent to attach an asymmetric cryptographic signature to every API settlement payload. The signature certifies that the agent is an authorized software delegate operating within user-defined parameters, allocating fraud liability away from the merchant toward the verifying identity platform.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Mastercard Shared Payment Tokens (SPTs).</strong> Similarly, Mastercard deployed Shared Payment Tokens (SPTs) to enable multi-party delegation. When a consumer authorizes an AI shopping assistant, the issuing bank mints an SPT that is bound both to the consumer wallet and to the specific AI intermediary. Even if an attacker intercepts the token payload, it is mathematically unusable outside the verified agent-merchant channel.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Virtual Cards vs Dedicated Agentic Rails.</strong> While fintech virtual card issuers (such as Lithic, Highnote, and Marqeta) provide programmatic cards with custom spend limits, they remain constrained by legacy interchange economics (1.5% to 3.0%). Emerging specialized machine rails (Skyfire, Payman, and stablecoin micro-rails) eliminate interchange overhead by settling directly in USD Coin (USDC), enabling sub-cent machine transactions for high-frequency automated replenishment.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Interchange Fee Economics and Micro-Transaction Feasibility.</strong> Fixed fee floors on credit card transactions (such as $0.30 plus interchange) make sub-dollar transactions economically impossible. For high-frequency autonomous agents purchasing individual data access tokens, dynamic compute slices, or per-item replenishment, stablecoin payment channels operating on Layer 2 blockchains reduce per-transaction fees below $0.005.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Settlement Rail Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Card network tokenization provides universal merchant acceptance and chargeback protection for consumer retail, while stablecoin rails eliminate interchange overhead for high-frequency machine procurement.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Tokenization Architecture -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 5.1 - NETWORK TOKENIZATION AND VISA TAP INFRASTRUCTURE</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Cryptographic binding of consumer cards to agent runtime identities and merchant domains</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 4 Step Boxes -->
              <rect x="0" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Card Vault</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Apple / Google Pay</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Holds raw PAN secure</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Hardware security</text>
              <rect x="8" y="92" width="86" height="24" rx="2" fill="#e4e4e7"/>
              <text x="51" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle">EMVCo Root Key</text>

              <!-- Arrow 1 -->
              <path d="M 103 67 L 115 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="116" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="116" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="124" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Token Service</text>
              <text x="124" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Visa VTS / MC MDES</text>
              <text x="124" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Issues Network Token</text>
              <text x="124" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Domain restricted</text>
              <rect x="124" y="92" width="86" height="24" rx="2" fill="#27272a"/>
              <text x="167" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Network Surrogate</text>

              <!-- Arrow 2 -->
              <path d="M 219 67 L 231 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="232" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="232" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="240" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">3. Agent Signing</text>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">RFC 9421 signature</text>
              <text x="240" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Attaches cryptogram</text>
              <text x="240" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Single transaction</text>
              <rect x="240" y="92" width="86" height="24" rx="2" fill="#f4f4f5"/>
              <text x="283" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle">Visa TAP Payload</text>

              <!-- Arrow 3 -->
              <path d="M 335 67 L 347 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="348" y="4" width="108" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="348" y="4" width="108" height="22" rx="3" fill="#09090b"/>
              <text x="356" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">4. Acquiring Bank</text>
              <text x="356" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Verifies signature</text>
              <text x="356" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Authorizes funds</text>
              <text x="356" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Validates cryptogram</text>
              <rect x="356" y="92" width="92" height="24" rx="2" fill="#09090b"/>
              <text x="402" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Liability Transferred</text>
            </svg>
          </div>

          <!-- Middle Table: Payment Rails Evaluation -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 5.1 - PAYMENT SETTLEMENT RAILS EVALUATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Technical comparison across settlement speed, interchange cost, and fraud protection</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Payment Rail</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Settlement Latency</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Transaction Cost</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Network Tokens (Visa / MC)</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Sub-second (&lt; 800ms)</td>
                  <td style="padding: 4px 6px;">Standard Interchange (1.5% - 2.8%)</td>
                  <td style="padding: 4px 6px;">Universal merchant acceptance and chargeback rights</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Programmatic Virtual Cards</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Sub-second</td>
                  <td style="padding: 4px 6px;">Interchange + Issuer Fees</td>
                  <td style="padding: 4px 6px;">Dynamic spend caps per individual agent session</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Stablecoins (USDC / AP2)</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">2 - 5 Seconds (L2)</td>
                  <td style="padding: 4px 6px;">Fractional cent (&lt; $0.005)</td>
                  <td style="padding: 4px 6px;">Ideal for high-frequency micro-replenishment</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Direct Account-to-Account (ACH)</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">1 - 3 Business Days</td>
                  <td style="padding: 4px 6px;">Flat nominal fee ($0.20)</td>
                  <td style="padding: 4px 6px;">Wholesale B2B recurring subscription procurement</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Strategic Takeaway.</strong>
              Card networks maintain an overwhelming advantage in consumer commerce due to chargeback protections and zero-liability guarantees. Stablecoin rails excel in B2B micro-procurement where interchange fees erode margins.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Thoughtworks & Stripe (2026); Visa Trusted Agent Protocol Specs (2025-2026); Mastercard Developer Zone (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SETTLEMENT ARCHITECTURE - MERCHANT OF RECORD DESIGN</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              In production agent transactions, establishing clear Merchant of Record (MoR) status is vital. Early prototypes where conversational platforms acted as the MoR encountered massive tax nexus liabilities across thousands of municipal jurisdictions.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Enterprise architectures now preserve the retailer as the MoR, passing signed network tokens directly to the merchant gateway to maintain existing tax remittal and dispute processes.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              By delegating token execution without shifting MoR status, retailers preserve direct customer ownership, warranty administration, and loyalty tier accruals.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Payment Settlement Rails and Network Tokenization")}
    </div>
  `;
}
