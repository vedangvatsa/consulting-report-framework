export function getSpread19(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("LEGAL GOVERNANCE", "ELECTRONIC AGENCY AND CONTRACT FORMATION", "19")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Legal Frameworks</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Electronic Agency, Contract Enforceability, and Liability Allocation</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Electronic Agency and Mutual Assent (Christoph Busch Analysis).</strong> Autonomous agent purchasing challenges foundational legal principles of offer, acceptance, and mutual assent. In his landmark treatise Consumer Law for AI Agents (German Law Journal / Oxford, 2025-2026 [1]), Professor Christoph Busch establishes that autonomous agents act as electronic agents of the consumer. Under modern commercial jurisprudence, transactions executed by electronic agents are legally binding upon the human principal, provided the principal authorized the agent to act within defined operational parameters.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Statutory Enforceability under US UETA Section 14.</strong> In the United States, the legal foundation for machine-formed contracts rests upon Section 14 of the Uniform Electronic Transactions Act (UETA) and the federal E-SIGN Act. These statutes explicitly establish that a contract may be formed by the interaction of electronic agents of the parties, even if no individual was aware of or reviewed the electronic agents' actions. If an agent confirms checkout, the principal is legally bound to the resulting contract.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Algorithmic Liability Allocation and Error Resolution.</strong> Legal liability becomes contentious when an agent executes a purchase based on model hallucination, corrupted dimensions, or algorithmic price discrepancies. If an agent purchases five units instead of one, or accepts an incorrect delivery window, who bears the economic loss? Busch establishes that between consumer and merchant, the principal bears the primary risk of an authorized agent's mistake, unless the merchant's interface contributed to the error through inaccurate product metadata.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>EU AI Act and Transparency Mandates.</strong> In the European Union, the EU AI Act and the Digital Services Act (DSA) impose strict transparency and auditability mandates on commercial AI systems. Providers deploying autonomous shopping agents must maintain cryptographically verifiable audit trails documenting the user's initial prompt, the agent's reasoning chain, the retrieved catalog metadata, and the exact authorization timestamp. In addition, consumers retain statutory rights of withdrawal for machine-initiated orders.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Click-Less Terms of Service Enforceability.</strong> Traditional online commerce binds consumers through clickwrap agreements ("I accept the Terms and Conditions"). Autonomous agents cannot visually click a checkbox. Enterprise legal frameworks require merchants to structure click-less terms of service that bind agents programmatically via API request headers, embedding terms within cryptographic mandate envelopes during the initial handshake.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Legal Mandate & Dispute Flow -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 10.1 - LEGAL MANDATE ENFORCEABILITY AND DISPUTE LIFECYCLE</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Contract formation, electronic agency attestation, and algorithmic dispute resolution flow</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 4 Step Flow -->
              <rect x="0" y="8" width="102" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="8" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">1. Principal Mandate</text>
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Delegation under UETA 14</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Establishes spend limit</text>
              <rect x="8" y="52" width="86" height="16" rx="2" fill="#f4f4f5"/>
              <text x="51" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">Mutual Assent Ground</text>

              <!-- Arrow 1 -->
              <path d="M 103 49 L 115 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="116" y="8" width="102" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="124" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">2. Machine Contract</text>
              <text x="124" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Click-less API handshake</text>
              <text x="124" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Merchant ToS accepted</text>
              <rect x="124" y="52" width="86" height="16" rx="2" fill="#27272a"/>
              <text x="167" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Enforceable Debt Formed</text>

              <!-- Arrow 2 -->
              <path d="M 219 49 L 231 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="232" y="8" width="102" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="240" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">3. Cryptographic Audit</text>
              <text x="240" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">EU AI Act compliance log</text>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Prompt + SKU timestamp</text>
              <rect x="240" y="52" width="86" height="16" rx="2" fill="#f4f4f5"/>
              <text x="283" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">Immutable Evidence Trail</text>

              <!-- Arrow 3 -->
              <path d="M 335 49 L 347 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="348" y="8" width="108" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="356" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">4. Dispute Adjudication</text>
              <text x="356" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">14-day statutory return</text>
              <text x="356" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Chargeback liability reassigned</text>
              <rect x="356" y="52" width="92" height="16" rx="2" fill="#09090b"/>
              <text x="402" y="62.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#ffffff" text-anchor="middle">Settlement Resolved</text>
            </svg>
          </div>

          <!-- Middle Table: Legal Checklist -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 10.1 - ENTERPRISE LEGAL AND COMPLIANCE CHECKLIST</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Statutory and regulatory requirements governing machine commercial transactions</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Legal Dimension</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Statutory Authority</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Compliance Obligation</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Electronic Agency</td>
                  <td style="padding: 2.5px 5px;">US UETA Section 14 / E-SIGN</td>
                  <td style="padding: 2.5px 5px;">Principal bound by machine contracts</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Cryptographic mandate proof</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">AI Transparency</td>
                  <td style="padding: 2.5px 5px;">EU AI Act Article 52</td>
                  <td style="padding: 2.5px 5px;">Inform merchants of automated agent status</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Declare agent User-Agent string</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Right of Withdrawal</td>
                  <td style="padding: 2.5px 5px;">EU Consumer Rights Directive</td>
                  <td style="padding: 2.5px 5px;">14-day cancellation window without cause</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Automated return API endpoint</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Audit Trail Retention</td>
                  <td style="padding: 2.5px 5px;">General Commercial Law</td>
                  <td style="padding: 2.5px 5px;">Preserve non-repudiable transaction logs</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Immutable JSON-LD receipt storage</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Legal Takeaway.</strong>
              Under US UETA Section 14, purchases made by autonomous software agents are legally binding upon the user. However, merchants must provide machine-readable return policies to comply with international consumer protection directives.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Christoph Busch, German Law Journal (2025-2026); [2] Uniform Electronic Transactions Act (UETA); [3] European Union AI Act (2024-2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">LEGAL COUNSEL GUIDANCE - STRUCTURING CLICK-LESS TERMS</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Legal departments must update public API terms to include an explicit electronic agency clause. The clause specifies that any automated call dispatching a valid network token constitutes express consent to the merchant's standard terms of sale, including return conditions, arbitration clauses, and warranty limits.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Electronic Agency and Contract Formation")}
    </div>
  `;
}
