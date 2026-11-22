export function getSpread15(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("EMPIRICAL RESEARCH", "PUBLIC WEB READINESS ACROSS 100,000 DOMAINS", "15")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Empirical Findings</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">The 100,000 Domain Web Measurement Dataset (Zenodo 24121071)</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Methodological Design and Corpus Scale (Vatsa Study, Zenodo).</strong> To determine the actual operational readiness of public web infrastructure for autonomous agents, an empirical study evaluated 100,000 domains sampled from the global Tranco ranking (Vatsa, 2026 [1], Zenodo record 24121071). Unlike survey-based opinion polls, the crawler performed nineteen direct technical verification checks against live production endpoints, evaluating HTML renderability, XML sitemaps, structured Schema.org metadata, agent guidance manifests (llms.txt), declared OpenAPI specifications, and Model Context Protocol (MCP) handshakes.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Server-Side HTML Parsing vs Client-Side JavaScript (48.44%).</strong> The measurement scan established that only 48,442 domains (48.44%) return complete server-rendered HTML payloads capable of being parsed by standard HTTP request clients. Over 51.5% of evaluated websites rely heavily on client-side single-page application (SPA) hydration frameworks (React, Angular, Vue) that render blank loading states or placeholder shells unless evaluated by costly headless browser compute.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Structured Metadata and Schema.org Adoption (23.44%).</strong> While search engines have promoted structured data for over a decade, valid Schema.org JSON-LD metadata structures were identified on only 23,436 domains (23.44%). Crucially, among domains that include product schemas, over 64% omit return policy definitions (MerchantReturnPolicy), and 48% fail to expose detailed regional shipping terms (ShippingDetails). Because autonomous agents require complete landed-cost calculations before purchase execution, missing return and shipping schemas directly cause automated filtering dropouts.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Dedicated Machine Guidance Manifests (llms.txt at 7.16%).</strong> Standardized agent guidance manifests (matching the proposed llms.txt standard) appeared on 7,156 domains (7.16%). These manifests guide language models to authoritative markdown summaries, API endpoints, and direct product catalogs, bypassing human marketing copy. While adoption is growing rapidly among developer tools and SaaS providers, mainstream consumer e-commerce lags below 3.2%.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Machine-Readable API Void (0.23% OpenAPI, 0.045% MCP).</strong> The most severe infrastructural gap occurs in programmatic discovery. Publicly declared OpenAPI schemas were identified on only 225 domains (0.23%), and live Model Context Protocol (MCP) initialization handshakes succeeded on only 45 domains (0.045%). This empirical finding confirms that public digital commerce remains almost entirely optimized for human eyes, creating a massive first-mover advantage for brands that deploy structured machine endpoints.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Adoption Distribution Across 100k Domains -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 8.1 - MACHINE READINESS ACROSS 100,000 DOMAINS (ZENODO DATA)</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Adoption percentages sampled from Tranco top 1M ranking (Vatsa, 2026)</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- Grid lines -->
              <line x1="120" y1="12" x2="120" y2="82" stroke="#e4e4e7" stroke-width="1"/>
              <line x1="200" y1="12" x2="200" y2="82" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="280" y1="12" x2="280" y2="82" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="360" y1="12" x2="360" y2="82" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="440" y1="12" x2="440" y2="82" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>

              <!-- Axis Labels -->
              <text x="120" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a" text-anchor="middle">0%</text>
              <text x="200" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a" text-anchor="middle">25%</text>
              <text x="280" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a" text-anchor="middle">50%</text>
              <text x="360" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a" text-anchor="middle">75%</text>
              <text x="440" y="92" font-family="Inter, sans-serif" font-size="6.0" fill="#71717a" text-anchor="middle">100%</text>

              <!-- Bars -->
              <text x="112" y="24" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Complete HTML</text>
              <rect x="120" y="16" width="155" height="11" rx="2" fill="#27272a"/>
              <text x="282" y="24" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">48.44% (48,442)</text>

              <text x="112" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">XML Sitemaps</text>
              <rect x="120" y="32" width="107" height="11" rx="2" fill="#52525b"/>
              <text x="234" y="40" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">33.39% (33,392)</text>

              <text x="112" y="56" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Schema.org JSON-LD</text>
              <rect x="120" y="48" width="75" height="11" rx="2" fill="#71717a"/>
              <text x="202" y="56" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">23.44% (23,436)</text>

              <text x="112" y="72" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">llms.txt Guidance</text>
              <rect x="120" y="64" width="23" height="11" rx="2" fill="#a1a1aa"/>
              <text x="150" y="72" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">7.16% (7,156)</text>

              <text x="112" y="88" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Public MCP Endpoints</text>
              <rect x="120" y="80" width="3" height="7" rx="1" fill="#09090b"/>
              <text x="130" y="86.5" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b">0.045% (45)</text>
            </svg>
          </div>

          <!-- Middle Table: 100k Domain Audit Data -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 8.1 - 100,000 DOMAIN EMPIRICAL AUDIT RESULTS</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Verification pass rates across nineteen machine interface tests (Zenodo 24121071)</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Technical Verification Check</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Specification Standard</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">100k Web Study</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Complete HTML Parsed</td>
                  <td style="padding: 2.5px 5px;">Server-Rendered Markup</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">48.44% (48,442)</td>
                  <td style="padding: 2.5px 5px;">Basic Baseline</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">XML Sitemap Structure</td>
                  <td style="padding: 2.5px 5px;">Sitemaps Protocol XML</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">33.39% (33,392)</td>
                  <td style="padding: 2.5px 5px;">Content Discovery</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Structured Metadata</td>
                  <td style="padding: 2.5px 5px;">Schema.org JSON-LD</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">23.44% (23,436)</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">High Impact for ACO</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Dedicated Agent Guidance</td>
                  <td style="padding: 2.5px 5px;">llms.txt Heading Profile</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">7.16% (7,156)</td>
                  <td style="padding: 2.5px 5px;">Developing Standard</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Model Context Protocol</td>
                  <td style="padding: 2.5px 5px;">MCP Initialize Handshake</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">0.045% (45)</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Early Developer Pilot</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Empirical Invariant.</strong>
              Fewer than 1 in 4 public domains provide structured Schema.org definitions, and fewer than 1 in 2,000 expose live MCP endpoints. The barrier to agentic commerce is not model intelligence, but merchant catalog exposure.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources V. R. Vatsa, Zenodo record 24121071 (2026); Tranco Global Top 1M Research List (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TRANCO RANK CORRELATION - TRAFFIC RANK VS MACHINE READINESS</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Cross-referencing Tranco ranking tiers reveals that structured Schema.org adoption correlates strongly with traffic volume, reaching 61.2% among the top 1,000 domains. However, for domains ranked between 10,000 and 100,000 (representing the vast majority of mid-market independent retailers), structured JSON-LD adoption plummets to 18.7%, rendering them invisible to automated AI discovery pipelines.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Public Web Readiness Across 100,000 Domains")}
    </div>
  `;
}
