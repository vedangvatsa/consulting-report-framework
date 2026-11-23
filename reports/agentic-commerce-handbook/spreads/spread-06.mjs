export function getSpread06(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("IDENTITY AND ACCESS", "NON-HUMAN IDENTITY AND EPHEMERAL CREDENTIALS", "06")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Identity Architecture</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Machine Identity Governance and Least-Privilege CIAM</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A technical investigation into non-human identity governance, OAuth 2.0 token down-scoping, and least-privilege CIAM architectures.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Non-Human Identity Stall (Okta 2026 Findings).</strong> As recorded in the 2026 Customer Identity Trends Report by Okta and Auth0 [1] (surveying 5,200 consumers and 900 technology executives), 80% of enterprise agentic commerce projects are delayed or operating behind schedule. While 59% of business leaders attribute delays to compliance uncertainty, engineering leaders are twice as likely (17.8% compared to 9.0%) to identify that legacy Customer Identity and Access Management (CIAM) cannot support non-human access patterns. Organizations deploying modern machine identity fabrics achieve production deployment rates of 34.4%, compared to 22.3% for those relying on legacy systems.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>OAuth 2.0 Token Exchange for Machine Actors (RFC 8693).</strong> Traditional web commerce relies on long-lived human sessions, browser cookies, and multi-factor authentication SMS prompts. When an autonomous agent acts on behalf of a human user, passing static human credentials to the agent creates severe security risks. Modern architectures implement OAuth 2.0 Token Exchange (RFC 8693). A human principal authorizes an agent to request a down-scoped, subject-token exchange. The authorization server returns an ephemeral machine token valid only for a specific merchant, transaction value, and time window.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Principle of Least Privilege in Agent Delegation.</strong> Unconstrained access permits lateral movement and financial leakage in the event of prompt injection or model failure. Secure implementations enforce zero standing privileges. A shopping agent querying inventory receives a read-only token valid for 300 seconds. If the agent transitions to checkout, it must request an elevated, single-use settlement token that is explicitly bounded by merchant category and maximum spend caps.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Cryptographic Attestation and WebAuthn Binding.</strong> To eliminate credential theft, ephemeral machine tokens are cryptographically bound to hardware security modules or client-side secure enclaves (such as Apple Secure Enclave or TPM chips). When the agent dispatches a settlement request, it includes a cryptographic proof of possession generated via WebAuthn or FIDO2 credentials. The merchant or payment gateway verifies the signature against the registered public key, ensuring that intermediate proxy servers cannot replay the token.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Continuous Behavioral Risk Scoring.</strong> Because non-human agents operate at high query frequencies, identity providers implement continuous behavioral evaluation. Machine sessions are evaluated on IP reputation, token scope consistency, API payload structure, and deviation from historical purchasing baselines. Any anomalous request triggers step-up verification to the human principal via push notification before settlement execution.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Audit Logging and Non-Human Forensic Attribution.</strong> Compliance frameworks mandate that enterprise ledgers distinguish between human-initiated and machine-delegated actions. Machine sessions record cryptographic parentage, documenting the human authorization token, the intermediary model runtime identifier, and the exact tool execution parameters. This granular trail ensures complete attribution during post-transaction dispute resolution.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Identity Governance Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Autonomous shopping agents must never handle persistent static user passwords. Delegated authority requires down-scoped, ephemeral tokens bound to explicit transaction parameters.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Token Exchange Flowchart -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 3.2 - OAUTH 2.0 TOKEN EXCHANGE (RFC 8693) WORKFLOW</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Down-scoping human credentials into short-lived, merchant-bound machine execution tokens</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 4 Step Flow -->
              <rect x="0" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Human User</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Authorizes agent</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Sets spending cap</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Bounded mandate</text>
              <rect x="8" y="92" width="86" height="24" rx="2" fill="#e4e4e7"/>
              <text x="51" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle">Passkey / WebAuthn</text>

              <!-- Arrow 1 -->
              <path d="M 103 67 L 115 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="116" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="116" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="124" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. CIAM Gateway</text>
              <text x="124" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Validates policy</text>
              <text x="124" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">RFC 8693 exchange</text>
              <text x="124" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Subject token swap</text>
              <rect x="124" y="92" width="86" height="24" rx="2" fill="#27272a"/>
              <text x="167" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Issues 300s Ephemeral</text>

              <!-- Arrow 2 -->
              <path d="M 219 67 L 231 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="232" y="4" width="102" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="232" y="4" width="102" height="22" rx="3" fill="#f4f4f5"/>
              <text x="240" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">3. AI Shopping Agent</text>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Zero static secrets</text>
              <text x="240" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Carries scoped JWT</text>
              <text x="240" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Target merchant bound</text>
              <rect x="240" y="92" width="86" height="24" rx="2" fill="#f4f4f5"/>
              <text x="283" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b" text-anchor="middle">Single Merchant Scope</text>

              <!-- Arrow 3 -->
              <path d="M 335 67 L 347 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="348" y="4" width="108" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="348" y="4" width="108" height="22" rx="3" fill="#09090b"/>
              <text x="356" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">4. Merchant API</text>
              <text x="356" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Verifies signature</text>
              <text x="356" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Checks spend scope</text>
              <text x="356" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Executes order state</text>
              <rect x="356" y="92" width="92" height="24" rx="2" fill="#09090b"/>
              <text x="402" y="107" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff" text-anchor="middle">Zero Standing Privilege</text>
            </svg>
          </div>

          <!-- Middle Table: Identity Mechanisms -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 3.2 - MACHINE IDENTITY AUTHENTICATION MECHANISMS</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Comparison of credential formats across security, latency, and agent compatibility</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Mechanism</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Lifespan</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Security Risk Profile</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Agent Readiness</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Ephemeral JWT (RFC 8693)</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">60 - 300 Seconds</td>
                  <td style="padding: 4px 6px;">Minimal; down-scoped to single target merchant</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Recommended Standard</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">WebAuthn / Passkeys</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Per-transaction</td>
                  <td style="padding: 4px 6px;">Hardware-attested; immune to phishing and replay</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Approval Gate (L3)</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Static API Keys</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Indefinite / Months</td>
                  <td style="padding: 4px 6px;">Severe; credential theft permits full account takeover</td>
                  <td style="padding: 4px 6px; color: #71717a;">Deprecated for B2C</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Human Username / Password</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Session-based</td>
                  <td style="padding: 4px 6px;">Extreme; vulnerable to prompt extraction and stuffing</td>
                  <td style="padding: 4px 6px; color: #71717a;">Unacceptable</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Security Invariant.</strong>
              An autonomous agent must never store or transmit static consumer passwords. Eliminating standing credentials and adopting RFC 8693 token exchange neutralizes the attack surface for credential extraction during model jailbreaks.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Okta Customer Identity Trends Report (2026); IETF RFC 8693 (OAuth 2.0 Token Exchange); W3C WebAuthn Level 3.
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TECHNICAL COMMENTARY - ENTERPRISE CIAM INTEGRATION PATTERNS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Enterprises deploying Okta AI CIAM or Auth0 for Machine Actors expose specialized OAuth authorization endpoints that authenticate the host model runtime via mutual TLS (mTLS).
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              When an agent requests checkout access, the gateway verifies the software integrity measurement before issuing a cryptographic token bound to the merchant payment terminal ID.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              By decoupling credential life spans from consumer sessions, security teams can revoke compromised agent tokens within milliseconds without forcing the consumer to change their account password.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Non-Human Identity and Ephemeral Credentials")}
    </div>
  `;
}
