export function getSpread08(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("PROTOCOL MECHANICS", "IDEMPOTENCY, STATE MACHINES AND MANDATES", "08")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Implementation Engineering</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Idempotency Requirements and Mandate Cryptography</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Double-Billing Risk in Machine Transactions.</strong> When human shoppers experience network timeouts, they typically pause, review transaction history, or reload the page. In contrast, autonomous software agents operating automated retry loops re-dispatch API requests within milliseconds of a connection reset. Without rigorous server-side deduplication, transient network drops cause duplicate authorizations, draining consumer funds and triggering chargeback disputes.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>RFC 7231 Idempotency-Key Header Standard.</strong> To neutralize retry hazards, agent checkout protocols implement strict idempotency semantics defined under RFC 7231. The purchasing agent generates a unique, client-side UUID v4 before dispatching any payment request, attaching it via the Idempotency-Key HTTP header. Merchant gateways hash the key alongside the cart payload and persist it in low-latency stores with a mandatory 24-hour expiration window.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Deterministic State Machine Processing.</strong> When a merchant receives a settlement request, the state machine checks the idempotency cache. If the key exists and the transaction succeeded, the server returns the cached response immediately without re-authorizing payment. If a request with an identical key arrives while a transaction is actively in-flight, the server returns an HTTP 409 Conflict status code, instructing the agent to back off rather than spawning duplicate authorizations.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Coinbase AP2 Mandate Typology (Open vs Closed).</strong> On programmatic rails, Coinbase Agent Payment Protocol (AP2) formalizes delegation through two distinct mandate structures. Open Mandates grant agents permissive authority to negotiate discovery and assemble prospective carts within broad parameters. In contrast, Closed Mandates establish cryptographically signed contracts that bind the agent to a specific merchant identifier, an immutable cart hash, and a hard currency ceiling.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Cryptographic Revocation and Timeout Recovery.</strong> Mandates carry explicit cryptographic lifetimes. If an agent fails to complete settlement within the mandated expiration window (typically 300 to 600 seconds), the mandate self-invalidates within merchant vaults. In addition, the human principal retains unilateral revocation authority, allowing instant cancellation via hardware-attested push notifications if an agent behaves erratically.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Idempotency Lifecycle -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 4.2 - IDEMPOTENCY KEY STATE MACHINE AND RETRY LOGIC</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Handling machine retries, network blips, and duplicate prevention via RFC 7231</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 3 Column Processing -->
              <rect x="0" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="8" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">1. Agent Request</text>
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Generates UUID v4 key</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Attaches Idempotency-Key</text>
              <rect x="8" y="52" width="122" height="16" rx="2" fill="#f4f4f5"/>
              <text x="69" y="62.5" font-family="monospace" font-size="5.2" font-weight="700" fill="#09090b" text-anchor="middle">POST /v1/checkout/pay</text>

              <!-- Arrow 1 -->
              <path d="M 139 49 L 151 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="152" y="8" width="156" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="160" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">2. Gateway Hash Check</text>
              <text x="160" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">SHA-256 (Key + Payload)</text>
              <text x="160" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Query 24h Redis cache</text>
              <rect x="160" y="52" width="140" height="16" rx="2" fill="#27272a"/>
              <text x="230" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Hit = Return Cached Payload</text>

              <!-- Arrow 2 -->
              <path d="M 309 49 L 321 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="330" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">3. Deterministic Ledger</text>
              <text x="330" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Miss = Authorize payment</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Persist state atomically</text>
              <rect x="330" y="52" width="122" height="16" rx="2" fill="#09090b"/>
              <text x="391" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Commit Order State (200 OK)</text>
            </svg>
          </div>

          <!-- Middle Table: Mandate Envelope Parameters -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 4.2 - CRYPTOGRAPHIC MANDATE PARAMETERS (COINBASE AP2)</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Specification fields required for deterministic, non-repudiable transaction execution</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Mandate Field</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Type</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Enforcement Rule</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Security Function</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-family: monospace;">mandate_id</td>
                  <td style="padding: 2.5px 5px;">String (UUID)</td>
                  <td style="padding: 2.5px 5px;">Unique per purchasing session</td>
                  <td style="padding: 2.5px 5px;">Replay prevention across gateways</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-family: monospace;">spend_limit_max</td>
                  <td style="padding: 2.5px 5px;">Integer (Cents)</td>
                  <td style="padding: 2.5px 5px;">Hard mathematical upper bound</td>
                  <td style="padding: 2.5px 5px;">Prevents catastrophic model hallucination</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-family: monospace;">merchant_id_hash</td>
                  <td style="padding: 2.5px 5px;">Bytes32</td>
                  <td style="padding: 2.5px 5px;">Cryptographically bound recipient</td>
                  <td style="padding: 2.5px 5px;">Neutralizes man-in-the-middle rerouting</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-family: monospace;">expires_at</td>
                  <td style="padding: 2.5px 5px;">Unix Timestamp</td>
                  <td style="padding: 2.5px 5px;">Strict TTL (typically &lt; 600s)</td>
                  <td style="padding: 2.5px 5px;">Eliminates persistent standing mandates</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Engineering Takeaway.</strong>
              Combining client-generated idempotency keys with cryptographically bounded Closed Mandates eliminates both network retry duplicates and algorithmic price overruns, establishing an ironclad transaction boundary.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources IETF RFC 7231 (HTTP/1.1 Semantics); Stripe Developer Documentation (2025-2026); Coinbase AP2 Specification (2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">PROTOCOL ENGINEERING - TIMEOUT HANDLING AND ORPHAN SESSIONS</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              In edge cases where an HTTP connection drops after payment settlement but prior to response delivery, the purchasing agent re-executes the request with the identical idempotency key. The gateway detects the existing authorization record and returns the confirmed receipt payload immediately, avoiding duplicate card network settlement.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Idempotency, State Machines and Mandates")}
    </div>
  `;
}
