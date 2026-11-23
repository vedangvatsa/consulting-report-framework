export function getSpread15(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("EMPIRICAL RESEARCH", "PUBLIC WEB READINESS ACROSS 100,000 DOMAINS", "15")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">The 100,000 Domain Web Measurement Dataset (Zenodo 24121071)</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A technical audit of 100,000 domains sampled from the Tranco ranking evaluating server rendering, Schema.org entities, llms.txt, and MCP endpoints.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Methodological Design and Corpus Scale (Vatsa Study, Zenodo).</strong> To determine the actual operational readiness of public web infrastructure for autonomous agents, an empirical study evaluated 100,000 domains sampled from the global Tranco ranking (Vatsa, 2026 [1], Zenodo record 24121071). Unlike survey-based opinion polls, the crawler performed nineteen direct technical verification checks against live production endpoints, evaluating HTML renderability, XML sitemaps, structured Schema.org metadata, agent guidance manifests (llms.txt), declared OpenAPI specifications, and Model Context Protocol (MCP) handshakes.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Server-Side HTML Parsing vs Client-Side JavaScript (48.44%).</strong> The measurement scan established that only 48,442 domains (48.44%) return complete server-rendered HTML payloads capable of being parsed by standard HTTP request clients. Over 51.5% of evaluated websites rely heavily on client-side single-page application (SPA) hydration frameworks (React, Angular, Vue) that render blank loading states or placeholder shells unless evaluated by costly headless browser compute.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Structured Metadata and Schema.org Adoption (23.44%).</strong> While search engines have promoted structured data for over a decade, valid Schema.org JSON-LD metadata structures were identified on only 23,436 domains (23.44%). Crucially, among domains that include product schemas, over 64% omit return policy definitions (MerchantReturnPolicy), and 48% fail to expose detailed regional shipping terms (ShippingDetails). Because autonomous agents require complete landed-cost calculations before purchase execution, missing return and shipping schemas directly cause automated filtering dropouts.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Dedicated Machine Guidance Manifests (llms.txt at 7.16%).</strong> Standardized agent guidance manifests (matching the proposed llms.txt standard) appeared on 7,156 domains (7.16%). These manifests guide language models to authoritative markdown summaries, API endpoints, and direct product catalogs, bypassing human marketing copy. While adoption is growing rapidly among developer tools and SaaS providers, mainstream consumer e-commerce lags below 3.2%.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Machine-Readable API Void (0.23% OpenAPI, 0.045% MCP).</strong> The most severe infrastructural gap occurs in programmatic discovery. Publicly declared OpenAPI schemas were identified on only 225 domains (0.23%), and live Model Context Protocol (MCP) initialization handshakes succeeded on only 45 domains (0.045%). This empirical finding confirms that public digital commerce remains almost entirely optimized for human eyes, creating a massive first-mover advantage for brands that deploy structured machine endpoints.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Protocol Verification Methodology and Error Taxonomy.</strong> Automated test suites captured HTTP response headers, content types, and TLS configuration flags across all 100,000 targets. Probes recorded that over 38% of crawler connection resets stemmed from overly broad Cloudflare or CloudFront WAF rules that misclassified benign research user-agents as malicious scraping bots.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Empirical Research Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Fewer than 1 in 4 public domains provide structured Schema.org definitions, and fewer than 1 in 2,000 expose live MCP endpoints. The barrier to autonomous commerce is catalog exposure, not model intelligence.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Adoption Distribution Across 100k Domains -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 8.1 - MACHINE READINESS ACROSS 100,000 DOMAINS (ZENODO DATA)</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Adoption percentages sampled from Tranco top 1M ranking (Vatsa, 2026)</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- Grid lines -->
              <line x1="125" y1="14" x2="125" y2="114" stroke="#e4e4e7" stroke-width="1"/>
              <line x1="205" y1="14" x2="205" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="285" y1="14" x2="285" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="365" y1="14" x2="365" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="445" y1="14" x2="445" y2="114" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>

              <!-- Axis Labels -->
              <text x="125" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">0%</text>
              <text x="205" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">25%</text>
              <text x="285" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">50%</text>
              <text x="365" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">75%</text>
              <text x="445" y="127" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">100%</text>

              <!-- Bars -->
              <text x="117" y="27" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">Complete HTML</text>
              <rect x="125" y="17" width="155" height="14" rx="2" fill="#27272a"/>
              <text x="290" y="28" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">48.44% (48,442)</text>

              <text x="117" y="49" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">XML Sitemaps</text>
              <rect x="125" y="39" width="107" height="14" rx="2" fill="#52525b"/>
              <text x="242" y="50" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">33.39% (33,392)</text>

              <text x="117" y="71" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">Schema.org JSON-LD</text>
              <rect x="125" y="61" width="75" height="14" rx="2" fill="#71717a"/>
              <text x="210" y="72" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">23.44% (23,436)</text>

              <text x="117" y="93" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">llms.txt Guidance</text>
              <rect x="125" y="83" width="23" height="14" rx="2" fill="#a1a1aa"/>
              <text x="158" y="94" font-family="Inter, sans-serif" font-size="7.0" font-weight="700" fill="#09090b">7.16% (7,156)</text>

              <text x="117" y="112" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a" text-anchor="end">Public MCP Endpoints</text>
              <rect x="125" y="102" width="4" height="10" rx="1.5" fill="#09090b"/>
              <text x="139" y="111" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">0.045% (45)</text>
            </svg>
          </div>

          <!-- Middle Table: 100k Domain Audit Data -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 8.1 - 100,000 DOMAIN EMPIRICAL AUDIT RESULTS</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Verification pass rates across nineteen machine interface tests (Zenodo 24121071)</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Technical Verification Check</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Specification Standard</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">100k Web Study</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Complete HTML Parsed</td>
                  <td style="padding: 4px 6px;">Server-Rendered Markup</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">48.44% (48,442)</td>
                  <td style="padding: 4px 6px;">Basic Baseline</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">XML Sitemap Structure</td>
                  <td style="padding: 4px 6px;">Sitemaps Protocol XML</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">33.39% (33,392)</td>
                  <td style="padding: 4px 6px;">Content Discovery</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Structured Metadata</td>
                  <td style="padding: 4px 6px;">Schema.org JSON-LD</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">23.44% (23,436)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">High Impact for ACO</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Dedicated Agent Guidance</td>
                  <td style="padding: 4px 6px;">llms.txt Heading Profile</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">7.16% (7,156)</td>
                  <td style="padding: 4px 6px;">Developing Standard</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Model Context Protocol</td>
                  <td style="padding: 4px 6px;">MCP Initialize Handshake</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">0.045% (45)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">Early Developer Pilot</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Empirical Invariant.</strong>
              Fewer than 1 in 4 public domains provide structured Schema.org definitions, and fewer than 1 in 2,000 expose live MCP endpoints. The barrier to agentic commerce is not model intelligence, but merchant catalog exposure.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources V. R. Vatsa, Zenodo record 24121071 (2026); Tranco Global Top 1M Research List (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TRANCO RANK CORRELATION - TRAFFIC RANK VS MACHINE READINESS</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Cross-referencing Tranco ranking tiers reveals that structured Schema.org adoption correlates strongly with traffic volume, reaching 61.2% among the top 1,000 domains.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              However, for domains ranked between 10,000 and 100,000 (representing the vast majority of mid-market independent retailers), structured JSON-LD adoption plummets to 18.7%, rendering them invisible to automated AI discovery pipelines.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Publishing complete Schema.org payloads with shipping and return policies provides mid-market merchants with immediate discovery parity against top-tier retail conglomerates.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Public Web Readiness Across 100,000 Domains")}
    </div>
  `;
}
