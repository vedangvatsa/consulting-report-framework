export function getSpread13(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("FRAUD AND SECURITY", "BOT CLASSIFICATION AND THREAT VECTOR DEFENSE", "13")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Threat Surface</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Distinguishing Legitimate Buying Agents from Malicious Traffic</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Web Application Firewall (WAF) Dilemma.</strong> For two decades, e-commerce security teams configured Web Application Firewalls (Cloudflare, Akamai, Imperva) to identify and block automated traffic aggressively. Headless browser user-agents, programmatic request volumes, and rapid navigation patterns were categorized as malicious scraping, credential stuffing, or inventory hoarding. In an agentic economy, this defensive posture backfires, as aggressive bot mitigation blocks high-value purchasing assistants, locking the digital storefront against paying customers.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Restructuring WAF Classification for Non-Human Buyers.</strong> Retailers are reconfiguring WAF telemetry to distinguish between volumetric scraping bots and authenticated purchasing agents. As analyzed by Imperva Threat Research [1], legacy heuristics that challenge non-human requests with visual CAPTCHAs cause 100% abandonment for autonomous agents. Modern security architectures implement specialized verification tiers, evaluating cryptographic client signatures, declared IP ranges from verified AI providers, and mutual TLS certificates rather than relying on browser fingerprinting.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Financial Exposure in Autonomous Wallets.</strong> When agents hold delegated spending authority, the attack surface expands beyond data theft into direct balance depletion. If an autonomous wallet is compromised, an attacker can siphon funds through rapid programmatic orders before fraud detection models intervene. Protecting delegated balances requires implementing velocity-based throttling (e.g., maximum 3 orders per hour) and strict merchant category whitelisting.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Anti-Scraping vs Machine-Readability Balance.</strong> Retailers face an operational conflict because they must protect proprietary pricing models and catalog databases from competitor scraping while concurrently exposing detailed inventory schemas to legitimate shopping assistants. The emerging resolution is authenticated machine access. Public crawlers receive rate-limited, generalized product summaries, while verified shopping agents authenticating via signed tokens receive access to real-time inventory and pricing tiers.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Behavioral Anomaly Detection in Machine Sessions.</strong> Unlike human fraudsters who attempt to mimic natural typing rhythms and mouse movements, compromised agents exhibit anomalous token consumption and abnormal API payload sequences. Security engines monitor agent intent vectors, flagging sessions where an agent suddenly deviates from an authorized shopping goal into administrative endpoints or abnormal SKU categories.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Bot Classification Pipeline -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 7.1 - THREE-TIER BOT CLASSIFICATION & VERIFICATION PIPELINE</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Distinguishing authenticated consumer buying agents from adversarial volumetric scraping</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 3 Traffic Tiers -->
              <rect x="0" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="8" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Tier 1: Malicious Scrapers</text>
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Spoofed user-agents</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Residential proxy networks</text>
              <rect x="8" y="52" width="122" height="16" rx="2" fill="#f4f4f5"/>
              <text x="69" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#09090b" text-anchor="middle">Action: Block / Drop Connection</text>

              <!-- Arrow 1 -->
              <path d="M 139 49 L 151 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="152" y="8" width="156" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="160" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Tier 2: Public AI Indexers</text>
              <text x="160" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Verified search crawler IPs</text>
              <text x="160" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Respects llms.txt / robots</text>
              <rect x="160" y="52" width="140" height="16" rx="2" fill="#27272a"/>
              <text x="230" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Action: Serve Static JSON-LD</text>

              <!-- Arrow 2 -->
              <path d="M 309 49 L 321 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="330" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">Tier 3: Authenticated Agents</text>
              <text x="330" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Carries signed OAuth token</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Validated hardware enclave</text>
              <rect x="330" y="52" width="122" height="16" rx="2" fill="#09090b"/>
              <text x="391" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Action: Grant Real-Time Tools</text>
            </svg>
          </div>

          <!-- Middle Table: Bot Detection Criteria -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 7.1 - BOT DETECTION SIGNALS AND TRAFFIC CLASSIFICATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Technical evaluation criteria deployed by modern retail security perimeters</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Traffic Class</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Verification Method</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Security Signal</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Access Granted</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Consumer Shopping Agent</td>
                  <td style="padding: 2.5px 5px;">Mutual TLS + RFC 8693 Token</td>
                  <td style="padding: 2.5px 5px;">Cryptographically signed mandate</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Full catalog & checkout API</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Verified Search Crawler</td>
                  <td style="padding: 2.5px 5px;">Reverse DNS + BGP AS Check</td>
                  <td style="padding: 2.5px 5px;">Declared autonomous IP prefix</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Read-only XML / JSON-LD</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Aggressive Price Scraper</td>
                  <td style="padding: 2.5px 5px;">TLS Fingerprint + Rate Anomaly</td>
                  <td style="padding: 2.5px 5px;">Abnormal burst query velocity</td>
                  <td style="padding: 2.5px 5px; color: #71717a;">Throttled / Rate-limited</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Credential Stuffer</td>
                  <td style="padding: 2.5px 5px;">IP Reputation + Headless Signals</td>
                  <td style="padding: 2.5px 5px;">Known compromised credential sets</td>
                  <td style="padding: 2.5px 5px; color: #71717a;">Terminated at Edge</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Security Architecture Invariant.</strong>
              Deploying traditional CAPTCHAs against machine traffic destroys agent conversion. Modern retailers replace interactive human challenges with cryptographic mTLS handshakes and OAuth token validation at the edge.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Imperva Threat Research (2025-2026); Cloudflare Bot Management Documentation; Akamai Secure E-Commerce Whitepaper (2025).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SECURITY CASE NOTE - PREVENTING MACHINE INVENTORY HOARDING</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              High-frequency purchasing agents can distort inventory reserves by reserving carts across hundreds of competing merchant stores at the same time. To prevent artificial stock depletion, enterprise checkout systems enforce a 5-minute reservation TTL and require a verified payment mandate before inventory holds are allocated.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Bot Classification and Threat Vector Defense")}
    </div>
  `;
}
