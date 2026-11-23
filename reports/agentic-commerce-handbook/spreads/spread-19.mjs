export function getSpread19(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("LEGAL GOVERNANCE", "ELECTRONIC AGENCY AND CONTRACT FORMATION", "19")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Electronic Agency, Contract Enforceability, and Liability Allocation</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A legal and governance framework analyzing electronic agency under UETA Section 14, algorithmic liability allocation, and EU AI Act transparency mandates.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Electronic Agency and Mutual Assent (Christoph Busch Analysis).</strong> Autonomous agent purchasing challenges foundational legal principles of offer, acceptance, and mutual assent. In his landmark treatise Consumer Law for AI Agents (German Law Journal / Oxford, 2025-2026 [1]), Professor Christoph Busch establishes that autonomous agents act as electronic agents of the consumer. Under modern commercial jurisprudence, transactions executed by electronic agents are legally binding upon the human principal, provided the principal authorized the agent to act within defined operational parameters.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Statutory Enforceability under US UETA Section 14.</strong> In the United States, the legal foundation for machine-formed contracts rests upon Section 14 of the Uniform Electronic Transactions Act (UETA) and the federal E-SIGN Act. These statutes explicitly establish that a contract may be formed by the interaction of electronic agents of the parties, even if no individual was aware of or reviewed the electronic agents actions. If an agent confirms checkout, the principal is legally bound to the resulting contract.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Algorithmic Liability Allocation and Error Resolution.</strong> Legal liability becomes contentious when an agent executes a purchase based on model error, corrupted dimensions, or algorithmic price discrepancies. If an agent purchases five units instead of one, or accepts an incorrect delivery window, who bears the economic loss? Busch establishes that between consumer and merchant, the principal bears the primary risk of an authorized agent mistake, unless the merchant interface contributed to the error through inaccurate product metadata.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>EU AI Act and Transparency Mandates.</strong> In the European Union, the EU AI Act and the Digital Services Act (DSA) impose strict transparency and auditability mandates on commercial AI systems. Providers deploying autonomous shopping agents must maintain cryptographically verifiable audit trails documenting the user initial prompt, the agent reasoning chain, the retrieved catalog metadata, and the exact authorization timestamp. In addition, consumers retain statutory rights of withdrawal for machine-initiated orders.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Click-Less Terms of Service Enforceability.</strong> Traditional online commerce binds consumers through clickwrap agreements ("I accept the Terms and Conditions"). Autonomous agents cannot visually click a checkbox. Enterprise legal frameworks require merchants to structure click-less terms of service that bind agents programmatically via API request headers, embedding terms within cryptographic mandate envelopes during the initial handshake.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Cryptographic Non-Repudiation and Evidentiary Standards.</strong> Resolving commercial disputes requires immutable evidence. Systems anchoring agent authorization in hardware secure enclaves generate signed attestation payloads. When introduced into legal arbitration, these cryptographic signatures provide conclusive evidence of authorized agency, preventing consumers from falsely repudiating legitimate automated purchases.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Legal Governance Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Under US UETA Section 14 and international electronic agency doctrine, purchases executed by software agents within authorized parameters are fully binding on the human principal.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Legal Mandate & Dispute Flow -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 10.1 - LEGAL MANDATE ENFORCEABILITY AND DISPUTE LIFECYCLE</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Contract formation, electronic agency attestation, and algorithmic dispute resolution flow</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 4 Step Flow -->
              <rect x="0" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Principal Mandate</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Delegation under UETA 14</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Establishes spend limit</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Principal intent bound</text>
              <rect x="8" y="92" width="86" height="24" rx="2" fill="#e4e4e7"/>
              <text x="51" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle">Mutual Assent Ground</text>

              <!-- Arrow 1 -->
              <path d="M 103 67 L 115 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="116" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="116" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="124" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Machine Contract</text>
              <text x="124" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Click-less API handshake</text>
              <text x="124" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Merchant ToS accepted</text>
              <text x="124" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Header token validation</text>
              <rect x="124" y="92" width="86" height="24" rx="2" fill="#27272a"/>
              <text x="167" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Enforceable Debt Formed</text>

              <!-- Arrow 2 -->
              <path d="M 219 67 L 231 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="232" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="232" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="240" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">3. Cryptographic Audit</text>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">EU AI Act compliance log</text>
              <text x="240" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Prompt + SKU timestamp</text>
              <text x="240" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Non-repudiable proof</text>
              <rect x="240" y="92" width="86" height="24" rx="2" fill="#f4f4f5"/>
              <text x="283" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle">Immutable Evidence Trail</text>

              <!-- Arrow 3 -->
              <path d="M 335 67 L 347 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="348" y="4" width="108" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="348" y="4" width="108" height="22" rx="3" fill="#09090b"/>
              <text x="356" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">4. Dispute System</text>
              <text x="356" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">14-day statutory return</text>
              <text x="356" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Liability assigned</text>
              <text x="356" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Chargeback settlement</text>
              <rect x="356" y="92" width="92" height="24" rx="2" fill="#09090b"/>
              <text x="402" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Settlement Resolved</text>
            </svg>
          </div>

          <!-- Middle Table: Legal Checklist -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 10.1 - ENTERPRISE LEGAL AND COMPLIANCE CHECKLIST</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Statutory and regulatory requirements governing machine commercial transactions</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Legal Dimension</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Statutory Authority</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Compliance Obligation</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Electronic Agency</td>
                  <td style="padding: 4px 6px;">US UETA Section 14 / E-SIGN</td>
                  <td style="padding: 4px 6px;">Principal bound by machine contracts</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Cryptographic mandate proof</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">AI Transparency</td>
                  <td style="padding: 4px 6px;">EU AI Act Article 52</td>
                  <td style="padding: 4px 6px;">Inform merchants of automated agent status</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Declare agent User-Agent string</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Right of Withdrawal</td>
                  <td style="padding: 4px 6px;">EU Consumer Rights Directive</td>
                  <td style="padding: 4px 6px;">14-day cancellation window without cause</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Automated return API endpoint</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Audit Trail Retention</td>
                  <td style="padding: 4px 6px;">General Commercial Law</td>
                  <td style="padding: 4px 6px;">Preserve non-repudiable transaction logs</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Immutable JSON-LD receipt storage</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Legal Takeaway.</strong>
              Under US UETA Section 14, purchases made by autonomous software agents are legally binding upon the user. However, merchants must provide machine-readable return policies to comply with international consumer protection directives.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Christoph Busch, German Law Journal (2025-2026); [2] Uniform Electronic Transactions Act (UETA); [3] European Union AI Act (2024-2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">LEGAL COUNSEL GUIDANCE - STRUCTURING CLICK-LESS TERMS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Legal departments must update public API terms to include an explicit electronic agency clause.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              The clause specifies that any automated call dispatching a valid network token constitutes express consent to the merchant standard terms of sale, including return conditions, arbitration clauses, and warranty limits.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Embedding terms of service hashes inside the checkout payload creates legally enforceable contracts without requiring human visual interaction.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Electronic Agency and Contract Formation")}
    </div>
  `;
}
