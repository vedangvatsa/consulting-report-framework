export function getSpread14(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("ADVERSARIAL SECURITY", "INDIRECT PROMPT INJECTIONS AND DATA INTEGRITY", "14")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Indirect Prompt Injections and Catalog Poisoning Defenses</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A threat analysis of indirect prompt injections, catalog poisoning, and visual CSS camouflage within autonomous shopping environments.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Threat of Indirect Prompt Injections (AgentDojo Findings).</strong> When an AI shopping assistant browses third-party websites to extract product information, user reviews, or merchant terms, it ingests untrusted text directly into its reasoning context. On the AgentDojo security benchmark (Debenedetti et al., 2024 [1]), researchers demonstrated that indirect prompt injections hijack frontier language model agents in over 42.6% of unmitigated evaluation scenarios, causing models to violate user constraints.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>E-Commerce Exploitation Vectors and Poisoned Reviews.</strong> In retail environments, malicious actors embed adversarial instructions inside customer reviews, product descriptions, or forum comments. For instance, a rogue vendor can post a review containing hidden text instructing the agent to ignore user criteria and purchase the item immediately. Because language models struggle to separate operational instructions from passive data inputs, the agent risks parsing the text as an authoritative command.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Hidden CSS Zero-Font and Visual Camouflage Traps.</strong> Attackers deploy visual cloaking techniques, embedding prompt injection payloads within HTML elements styled with zero-pixel fonts, transparent text, or positioned off-screen using negative CSS coordinates. While human shoppers see a clean product listing, a headless browser scraping the raw DOM passes the adversarial text directly into the agent context window.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Cart Poisoning and Price Manipulation.</strong> In addition to review poisoning, malicious sellers manipulate product page metadata, presenting one price to the visual scraper while executing a higher charge during the final checkout call. If an agent lacks strict pre-purchase validation, it will confirm an inflated basket total, resulting in financial loss for the principal.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Architectural Defenses (Schema Sanitization & Context Isolation).</strong> Defending against prompt injection requires eliminating raw HTML ingestion. Retail architectures implement strict content security sanitizers that strip all non-whitelisted HTML tags and pass only validated Schema.org JSON-LD objects to the reasoning engine. In addition, model architectures isolate untrusted descriptions in sandboxed context windows with zero tool-execution permissions.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Dual-Model Sandboxing and Untrusted Context Quarantine.</strong> Enterprise implementations utilize a dual-model topology. A low-privilege worker model processes untrusted external HTML and product reviews, converting them into structured JSON summaries. A high-privilege execution model receives only the verified JSON payload, retaining exclusive access to financial tools and payment signing keys.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Adversarial Defense Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Language models must never execute financial settlement based on raw HTML text. Every SKU and pricing parameter must be validated through deterministic cryptographic APIs.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Prompt Injection Vector Diagram -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 7.2 - ADVERSARIAL INJECTION FILTERING AND ISOLATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Sanitizing untrusted DOM elements and isolating untrusted reviews from payment execution</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 3 Column Processing -->
              <rect x="0" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="138" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Untrusted Webfront</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Hidden CSS zero-font text</text>
              <text x="8" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Adversarial customer reviews</text>
              <text x="8" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Manipulated price tags</text>
              <rect x="8" y="92" width="122" height="24" rx="2" fill="#f4f4f5"/>
              <text x="69" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b" text-anchor="middle">Potential Jailbreak Payload</text>

              <!-- Arrow 1 -->
              <path d="M 139 67 L 151 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="152" y="4" width="156" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="152" y="4" width="156" height="22" rx="3" fill="#f4f4f5"/>
              <text x="160" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Ingestion Sanitizer</text>
              <text x="160" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Strip CSS / JavaScript tags</text>
              <text x="160" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Extract Schema.org JSON</text>
              <text x="160" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Computed visibility check</text>
              <rect x="160" y="92" width="140" height="24" rx="2" fill="#27272a"/>
              <text x="230" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Quarantine Untrusted Strings</text>

              <!-- Arrow 2 -->
              <path d="M 309 67 L 321 67" stroke="#71717a" stroke-width="1.5"/>

              <rect x="322" y="4" width="138" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="322" y="4" width="138" height="22" rx="3" fill="#09090b"/>
              <text x="330" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">3. Secure Core</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Enforce prompt boundary</text>
              <text x="330" y="58" font-family="Inter, sans-serif" font-size="6.5" fill="#52525b">Deterministic pricing check</text>
              <text x="330" y="74" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Hard spend cap limits</text>
              <rect x="330" y="92" width="122" height="24" rx="2" fill="#09090b"/>
              <text x="391" y="107" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#ffffff" text-anchor="middle">Execute Signed Mandate</text>
            </svg>
          </div>

          <!-- Middle Table: Adversarial Taxonomy -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 7.2 - E-COMMERCE ADVERSARIAL ATTACK SURFACE TAXONOMY</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Classification of prompt injection and DOM manipulation attack vectors</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Attack Vector</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Delivery Medium</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Exploitation Objective</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Mitigation Control</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Review Injections</td>
                  <td style="padding: 4px 6px;">Product review text</td>
                  <td style="padding: 4px 6px;">Hijack agent instruction prompt</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Text isolation & zero tool access</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Zero-Font Cloaking</td>
                  <td style="padding: 4px 6px;">Hidden CSS elements</td>
                  <td style="padding: 4px 6px;">Inject commands invisible to humans</td>
                  <td style="padding: 4px 6px; font-weight: 600;">DOM computed visibility filter</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Price Desynchronization</td>
                  <td style="padding: 4px 6px;">HTML vs Checkout API</td>
                  <td style="padding: 4px 6px;">Display cheap, bill expensive</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Cryptographic price ceiling checks</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Cart Poisoning</td>
                  <td style="padding: 4px 6px;">Cross-site form action</td>
                  <td style="padding: 4px 6px;">Substitute unwanted SKUs into cart</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Exact SKU hash verification</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Security Invariant.</strong>
              Language models must never be permitted to execute financial transactions based solely on unverified HTML text. Every product attribute and price must be validated through structured cryptographic feeds prior to settlement.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Debenedetti et al., AgentDojo Benchmark (2024); [2] OWASP Top 10 for LLM Applications; [3] Imperva Threat Research (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">SECURITY DEEP DIVE - COMPUTED VISIBILITY FILTERS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Production browser agents mitigate CSS camouflage by querying the browser computed style tree rather than raw HTML source.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Any DOM element with display none, visibility hidden, zero opacity, or zero font size is automatically dropped from the agent accessibility tree before text is serialized into token embeddings.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Applying computed visibility filters eliminates over 98% of zero-font injection attempts observed in live retail test environments.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Indirect Prompt Injections and Data Integrity")}
    </div>
  `;
}
