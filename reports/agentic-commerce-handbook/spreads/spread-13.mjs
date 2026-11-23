export function getSpread13(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("FRAUD AND SECURITY", "BOT CLASSIFICATION AND THREAT VECTOR DEFENSE", "13")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Distinguishing Legitimate Buying Agents from Malicious Traffic</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A cybersecurity framework for distinguishing authenticated purchasing assistants from malicious bot traffic, scraping engines, and inventory hoarders.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Web Application Firewall (WAF) Dilemma.</strong> For two decades, e-commerce security teams configured Web Application Firewalls (Cloudflare, Akamai, Imperva) to identify and block automated traffic aggressively. Headless browser user-agents, programmatic request volumes, and rapid navigation patterns were categorized as malicious scraping, credential stuffing, or inventory hoarding. In an agentic economy, this defensive posture backfires, as aggressive bot mitigation blocks high-value purchasing assistants, locking the digital storefront against paying customers.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Restructuring WAF Classification for Non-Human Buyers.</strong> Retailers are reconfiguring WAF telemetry to distinguish between volumetric scraping bots and authenticated purchasing agents. As analyzed by Imperva Threat Research [1], legacy heuristics that challenge non-human requests with visual CAPTCHAs cause 100% abandonment for autonomous agents. Modern security architectures implement specialized verification tiers, evaluating cryptographic client signatures, declared IP ranges from verified AI providers, and mutual TLS certificates rather than relying on browser fingerprinting.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Financial Exposure in Autonomous Wallets.</strong> When agents hold delegated spending authority, the attack surface expands beyond data theft into direct balance depletion. If an autonomous wallet is compromised, an attacker can siphon funds through rapid programmatic orders before fraud detection models intervene. Protecting delegated balances requires implementing velocity-based throttling (such as a maximum of 3 orders per hour) and strict merchant category whitelisting.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Anti-Scraping vs Machine-Readability Balance.</strong> Retailers face an operational conflict because they must protect proprietary pricing models and catalog databases from competitor scraping while concurrently exposing detailed inventory schemas to legitimate shopping assistants. The resolution is authenticated machine access. Public crawlers receive rate-limited, generalized product summaries, while verified shopping agents authenticating via signed tokens receive access to real-time inventory and pricing tiers.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Behavioral Anomaly Detection in Machine Sessions.</strong> Unlike human fraudsters who attempt to mimic natural typing rhythms and mouse movements, compromised agents exhibit anomalous token consumption and abnormal API payload sequences. Security engines monitor agent intent vectors, flagging sessions where an agent suddenly deviates from an authorized shopping goal into administrative endpoints or abnormal SKU categories.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Cryptographic Client Fingerprinting and Verified IP Lists.</strong> Modern edge networks maintain verified ASN registries for frontier model providers (including OpenAI, Anthropic, Google, and Perplexity). Outbound agent traffic originating from these attested cloud IP blocks is routed through low-latency authentication tunnels, bypassing volumetric challenge filters that apply to anonymous proxy networks.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Security Perimeter Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Legacy CAPTCHAs cause 100% abandonment for machine shoppers. E-commerce security perimeters must authenticate agents via mutual TLS, OAuth tokens, and cryptographically verified provider origins.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Bot Classification Pipeline -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 7.1 - THREE-TIER BOT CLASSIFICATION & VERIFICATION PIPELINE</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Distinguishing authenticated consumer buying agents from adversarial volumetric scraping</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 3 Traffic Tiers -->
              <rect x="0" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="138" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Tier 1: Malicious Scrapers</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Spoofed user-agents</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Residential proxy networks</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Volumetric credential abuse</text>
              <rect x="8" y="92" width="122" height="24" rx="2" fill="#f4f4f5"/>
              <text x="69" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b" text-anchor="middle">Drop Connection (TCP RST)</text>

              <!-- Arrow 1 -->
              <path d="M 139 67 L 151 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="152" y="4" width="156" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="152" y="4" width="156" height="22" rx="3" fill="#f4f4f5"/>
              <text x="160" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Tier 2: Public AI Indexers</text>
              <text x="160" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Verified crawler IP ranges</text>
              <text x="160" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Respects llms.txt & robots</text>
              <text x="160" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Public catalog exposure</text>
              <rect x="160" y="92" width="140" height="24" rx="2" fill="#27272a"/>
              <text x="230" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Serve Read-Only JSON-LD</text>

              <!-- Arrow 2 -->
              <path d="M 309 67 L 321 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="322" y="4" width="138" height="22" rx="3" fill="#09090b"/>
              <text x="330" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">Tier 3: Verified Agents</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Carries signed OAuth token</text>
              <text x="330" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Hardware enclave verified</text>
              <text x="330" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Mandated spending bound</text>
              <rect x="330" y="92" width="122" height="24" rx="2" fill="#09090b"/>
              <text x="391" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Grant Real-Time Tools</text>
            </svg>
          </div>

          <!-- Middle Table: Bot Detection Criteria -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 7.1 - BOT DETECTION SIGNALS AND TRAFFIC CLASSIFICATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Technical evaluation criteria deployed by modern retail security perimeters</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Traffic Class</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Verification Method</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Security Signal</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Access Granted</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Consumer Shopping Agent</td>
                  <td style="padding: 4px 6px;">Mutual TLS + RFC 8693 Token</td>
                  <td style="padding: 4px 6px;">Cryptographically signed mandate</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Full catalog & checkout API</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Verified Search Crawler</td>
                  <td style="padding: 4px 6px;">Reverse DNS + BGP AS Check</td>
                  <td style="padding: 4px 6px;">Declared autonomous IP prefix</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Read-only XML / JSON-LD</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Aggressive Price Scraper</td>
                  <td style="padding: 4px 6px;">TLS Fingerprint + Rate Anomaly</td>
                  <td style="padding: 4px 6px;">Abnormal burst query velocity</td>
                  <td style="padding: 4px 6px; color: #71717a;">Throttled / Rate-limited</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Credential Stuffer</td>
                  <td style="padding: 4px 6px;">IP Reputation + Headless Signals</td>
                  <td style="padding: 4px 6px;">Known compromised credential sets</td>
                  <td style="padding: 4px 6px; color: #71717a;">Terminated at Edge</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Security Architecture Invariant.</strong>
              Deploying traditional CAPTCHAs against machine traffic destroys agent conversion. Modern retailers replace interactive human challenges with cryptographic mTLS handshakes and OAuth token validation at the edge.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Imperva Threat Research (2025-2026); Cloudflare Bot Management Documentation; Akamai Secure E-Commerce Whitepaper (2025).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SECURITY CASE NOTE - PREVENTING MACHINE INVENTORY HOARDING</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              High-frequency purchasing agents can distort inventory reserves by reserving carts across hundreds of competing merchant stores at the same time.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              To prevent artificial stock depletion, enterprise checkout systems enforce a 5-minute reservation TTL and require a verified payment mandate before inventory holds are allocated.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Retailers implementing cryptographic reservation keys observe cart abandonment drops from 88% down to 14% on scarce product drops.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Bot Classification and Threat Vector Defense")}
    </div>
  `;
}
