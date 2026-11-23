export function getSpread08(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("PROTOCOL MECHANICS", "IDEMPOTENCY, STATE MACHINES AND MANDATES", "08")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Implementation Engineering</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Idempotency Requirements and Mandate Cryptography</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              An architectural investigation into RFC 7231 idempotency semantics, gateway deduplication caches, and cryptographic mandate parameters.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Double-Billing Risk in Machine Transactions.</strong> When human shoppers experience network timeouts, they typically pause, review transaction history, or reload the page. In contrast, autonomous software agents operating automated retry loops re-dispatch API requests within milliseconds of a connection reset. Without rigorous server-side deduplication, transient network drops cause duplicate authorizations, draining consumer funds and triggering chargeback disputes.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>RFC 7231 Idempotency-Key Header Standard.</strong> To neutralize retry hazards, agent checkout protocols implement strict idempotency semantics defined under RFC 7231. The purchasing agent generates a unique, client-side UUID v4 before dispatching any payment request, attaching it via the Idempotency-Key HTTP header. Merchant gateways hash the key alongside the cart payload and persist it in low-latency stores with a mandatory 24-hour expiration window.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Deterministic State Machine Processing.</strong> When a merchant receives a settlement request, the state machine checks the idempotency cache. If the key exists and the transaction succeeded, the server returns the cached response immediately without re-authorizing payment. If a request with an identical key arrives while a transaction is actively in-flight, the server returns an HTTP 409 Conflict status code, instructing the agent to back off rather than spawning duplicate authorizations.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Coinbase AP2 Mandate Typology (Open vs Closed).</strong> On programmatic rails, Coinbase Agent Payment Protocol (AP2) formalizes delegation through two distinct mandate structures. Open Mandates grant agents permissive authority to negotiate discovery and assemble prospective carts within broad parameters. In contrast, Closed Mandates establish cryptographically signed contracts that bind the agent to a specific merchant identifier, an immutable cart hash, and a hard currency ceiling.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Cryptographic Revocation and Timeout Recovery.</strong> Mandates carry explicit cryptographic lifetimes. If an agent fails to complete settlement within the mandated expiration window (typically 300 to 600 seconds), the mandate self-invalidates within merchant vaults. In addition, the human principal retains unilateral revocation authority, allowing instant cancellation via hardware-attested push notifications if an agent behaves erratically.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Replay Attack Vectors and Dynamic Nonce Verification.</strong> Malicious actors intercepting unencrypted API payloads can attempt to resubmit valid transaction payloads. Modern agent checkout gateways enforce cryptographic nonces combined with server-side sequence counters, rejecting any payload whose nonce has been observed previously or whose timestamp deviates by more than 120 seconds.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Idempotency Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Every state-mutating checkout request must carry a client-generated RFC 7231 Idempotency-Key. Gateways must cache authorization hashes for 24 hours to prevent duplicate billing during network timeouts.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Idempotency Lifecycle -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 4.2 - IDEMPOTENCY KEY STATE MACHINE AND RETRY LOGIC</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Handling machine retries, network blips, and duplicate prevention via RFC 7231</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 3 Column Processing -->
              <rect x="0" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="138" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Agent Request</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Generates UUID v4 key</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Attaches Idempotency-Key</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">HTTP header injection</text>
              <rect x="8" y="92" width="122" height="24" rx="2" fill="#f4f4f5"/>
              <text x="69" y="107" font-family="monospace" font-size="6.0" font-weight="700" fill="#09090b" text-anchor="middle">POST /v1/checkout/pay</text>

              <!-- Arrow 1 -->
              <path d="M 139 67 L 151 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="152" y="4" width="156" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="152" y="4" width="156" height="22" rx="3" fill="#f4f4f5"/>
              <text x="160" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Gateway Hash Check</text>
              <text x="160" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">SHA-256 (Key + Payload)</text>
              <text x="160" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Query 24h Redis cache</text>
              <text x="160" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Match existing payload</text>
              <rect x="160" y="92" width="140" height="24" rx="2" fill="#27272a"/>
              <text x="230" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Hit = Return Cached Payload</text>

              <!-- Arrow 2 -->
              <path d="M 309 67 L 321 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="322" y="4" width="138" height="22" rx="3" fill="#09090b"/>
              <text x="330" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">3. Deterministic Ledger</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Miss = Authorize payment</text>
              <text x="330" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Persist state atomically</text>
              <text x="330" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Prevent race conditions</text>
              <rect x="330" y="92" width="122" height="24" rx="2" fill="#09090b"/>
              <text x="391" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Commit Order State (200 OK)</text>
            </svg>
          </div>

          <!-- Middle Table: Mandate Envelope Parameters -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 4.2 - CRYPTOGRAPHIC MANDATE PARAMETERS (COINBASE AP2)</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Specification fields required for deterministic, non-repudiable transaction execution</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Mandate Field</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Type</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Enforcement Rule</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Security Function</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-family: monospace;">mandate_id</td>
                  <td style="padding: 4px 6px;">String (UUID)</td>
                  <td style="padding: 4px 6px;">Unique per purchasing session</td>
                  <td style="padding: 4px 6px;">Replay prevention across gateways</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-family: monospace;">spend_limit_max</td>
                  <td style="padding: 4px 6px;">Integer (Cents)</td>
                  <td style="padding: 4px 6px;">Hard mathematical upper bound</td>
                  <td style="padding: 4px 6px;">Prevents catastrophic model error</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-family: monospace;">merchant_id_hash</td>
                  <td style="padding: 4px 6px;">Bytes32</td>
                  <td style="padding: 4px 6px;">Cryptographically bound recipient</td>
                  <td style="padding: 4px 6px;">Neutralizes man-in-the-middle rerouting</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-family: monospace;">expires_at</td>
                  <td style="padding: 4px 6px;">Unix Timestamp</td>
                  <td style="padding: 4px 6px;">Strict TTL (typically &lt; 600s)</td>
                  <td style="padding: 4px 6px;">Eliminates persistent standing mandates</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Engineering Takeaway.</strong>
              Combining client-generated idempotency keys with cryptographically bounded Closed Mandates eliminates both network retry duplicates and algorithmic price overruns, establishing an ironclad transaction boundary.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources IETF RFC 7231 (HTTP/1.1 Semantics); Stripe Developer Documentation (2025-2026); Coinbase AP2 Specification (2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">PROTOCOL ENGINEERING - TIMEOUT HANDLING AND ORPHAN SESSIONS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              In edge cases where an HTTP connection drops after payment settlement but prior to response delivery, the purchasing agent re-executes the request with the identical idempotency key.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              The gateway detects the existing authorization record and returns the confirmed receipt payload immediately, avoiding duplicate card network settlement.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              High-volume merchants running distributed Redis clusters maintain multi-region synchronization for idempotency keys, guaranteeing consistency even when agent retries hit alternative geographic points of presence.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Idempotency, State Machines and Mandates")}
    </div>
  `;
}
