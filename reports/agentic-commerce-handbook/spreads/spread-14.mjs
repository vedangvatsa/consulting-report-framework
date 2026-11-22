export function getSpread14(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("ADVERSARIAL SECURITY", "INDIRECT PROMPT INJECTIONS AND DATA INTEGRITY", "14")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Adversarial Vectors</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Indirect Prompt Injections and Catalog Poisoning Defenses</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Threat of Indirect Prompt Injections (AgentDojo Findings).</strong> When an AI shopping assistant browses third-party websites to extract product information, user reviews, or merchant terms, it ingests untrusted text directly into its reasoning context. On the AgentDojo security benchmark (Debenedetti et al., 2024 [1]), researchers demonstrated that indirect prompt injections hijack frontier language model agents in over 42.6% of unmitigated evaluation scenarios, causing models to violate user constraints.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>E-Commerce Exploitation Vectors and Poisoned Reviews.</strong> In retail environments, malicious actors embed adversarial instructions inside customer reviews, product descriptions, or forum comments. For instance, a rogue vendor can post a review containing hidden text instructing the agent to ignore user criteria and purchase the item immediately. Because language models struggle to separate operational instructions from passive data inputs, the agent risks parsing the text as an authoritative command.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Hidden CSS Zero-Font and Visual Camouflage Traps.</strong> Attackers deploy visual cloaking techniques, embedding prompt injection payloads within HTML elements styled with zero-pixel fonts, transparent text, or positioned off-screen using negative CSS coordinates. While human shoppers see a clean product listing, a headless browser scraping the raw DOM passes the adversarial text directly into the agent's context window.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Cart Poisoning and Price Manipulation.</strong> In addition to review poisoning, malicious sellers manipulate product page metadata, presenting one price to the visual scraper while executing a higher charge during the final checkout call. If an agent lacks strict pre-purchase validation, it will confirm an inflated basket total, resulting in financial loss for the principal.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Architectural Defenses (Schema Sanitization & Context Isolation).</strong> Defending against prompt injection requires eliminating raw HTML ingestion. Retail architectures implement strict content security sanitizers that strip all non-whitelisted HTML tags and pass only validated Schema.org JSON-LD objects to the reasoning engine. In addition, model architectures isolate untrusted descriptions in sandboxed context windows with zero tool-execution permissions.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Prompt Injection Vector Diagram -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 7.2 - ADVERSARIAL INJECTION FILTERING AND ISOLATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Sanitizing untrusted DOM elements and isolating untrusted reviews from payment execution</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 3 Column Processing -->
              <rect x="0" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="8" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">1. Untrusted DOM Webfront</text>
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Hidden CSS zero-font text</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Adversarial product reviews</text>
              <rect x="8" y="52" width="122" height="16" rx="2" fill="#f4f4f5"/>
              <text x="69" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#09090b" text-anchor="middle">Potential Jailbreak Payload</text>

              <!-- Arrow 1 -->
              <path d="M 139 49 L 151 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="152" y="8" width="156" height="82" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="160" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">2. Ingestion Sanitizer</text>
              <text x="160" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Strip CSS / JavaScript tags</text>
              <text x="160" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Extract strict Schema.org only</text>
              <rect x="160" y="52" width="140" height="16" rx="2" fill="#27272a"/>
              <text x="230" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Isolate Untrusted Text Block</text>

              <!-- Arrow 2 -->
              <path d="M 309 49 L 321 49" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="330" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">3. Secure Reasoning Core</text>
              <text x="330" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Enforce system boundary</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Validate prices deterministically</text>
              <rect x="330" y="52" width="122" height="16" rx="2" fill="#09090b"/>
              <text x="391" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Execute Authorized Mandate</text>
            </svg>
          </div>

          <!-- Middle Table: Adversarial Taxonomy -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 7.2 - E-COMMERCE ADVERSARIAL ATTACK SURFACE TAXONOMY</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Classification of prompt injection and DOM manipulation attack vectors</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Attack Vector</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Delivery Medium</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Exploitation Objective</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Mitigation Control</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Review Injections</td>
                  <td style="padding: 2.5px 5px;">Product review text</td>
                  <td style="padding: 2.5px 5px;">Hijack agent instruction prompt</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Text isolation & zero tool access</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Zero-Font Cloaking</td>
                  <td style="padding: 2.5px 5px;">Hidden CSS elements</td>
                  <td style="padding: 2.5px 5px;">Inject commands invisible to humans</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">DOM computed visibility filter</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Price Desynchronization</td>
                  <td style="padding: 2.5px 5px;">HTML vs Checkout API</td>
                  <td style="padding: 2.5px 5px;">Display cheap, bill expensive</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Cryptographic price ceiling checks</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Cart Poisoning</td>
                  <td style="padding: 2.5px 5px;">Cross-site form action</td>
                  <td style="padding: 2.5px 5px;">Substitute unwanted SKUs into cart</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Exact SKU hash verification</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Security Invariant.</strong>
              Language models must never be permitted to execute financial transactions based solely on unverified HTML text. Every product attribute and price must be validated through structured cryptographic feeds prior to settlement.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Debenedetti et al., AgentDojo Benchmark (2024); [2] OWASP Top 10 for LLM Applications; [3] Imperva Threat Research (2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SECURITY DEEP DIVE - COMPUTED VISIBILITY FILTERS</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Production browser agents mitigate CSS camouflage by querying the browser's computed style tree rather than raw HTML source. Any DOM element with display none, visibility hidden, zero opacity, or zero font size is automatically dropped from the agent's accessibility tree before text is serialized into token embeddings.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Indirect Prompt Injections and Data Integrity")}
    </div>
  `;
}
