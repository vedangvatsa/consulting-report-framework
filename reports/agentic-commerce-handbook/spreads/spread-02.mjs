export function getSpread02(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("RESEARCH METHODOLOGY", "INVESTIGATION SCOPE AND EVIDENCE BASE", "02")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Empirical Corpus and Methodological Design</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A multi-source empirical investigation combining large-scale public web measurements, payment protocol architectures, and advisory consensus data.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Scope of the Investigation and Technical Perimeter.</strong> Autonomous commerce represents the execution of commercial transactions by software agents operating without direct human intervention at checkout. This handbook analyzes the architectural layers, network protocols, financial rails, and economic models governing machine exchange. To establish empirical grounding, the investigation evaluates findings from public crawler datasets, institutional advisory research, payment network specifications, and academic agent benchmark suites.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The 100,000 Domain Web Measurement Dataset (Zenodo 24121071).</strong> A core quantitative pillar of this report is an empirical scan of 100,000 domains sampled from the Tranco global ranking (Vatsa, 2026 [1], Zenodo record 24121071). The crawler evaluated web properties across nineteen machine interface criteria, analyzing HTML renderability, XML sitemap coverage, Schema.org JSON-LD definitions, machine-readable agent guidance manifests (llms.txt), declared OpenAPI specifications, and Model Context Protocol (MCP) server endpoints.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Consulting and Financial Institution Synthesis.</strong> Primary qualitative and quantitative market projections were collected from nine institutional publications released between 2024 and 2026. These sources include McKinsey QuantumBlack, Boston Consulting Group, Accenture Strategy, Bundl and Greenbook Research, Okta and Auth0, SAP Emarsys, Thoughtworks and Stripe, Visa Consulting and Analytics, and Semrush Research. Each source was audited to reconcile differing market boundary definitions.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Academic Benchmark Frameworks.</strong> Task completion accuracy and operational stability were cross-referenced against five benchmark suites, specifically CMU WebArena, Stanford VisualWebArena, Columbia University ACES, Shopee Research EComAgentBench, and Tool-Lab MCP. This enables direct comparison between visual browser scraping and structured protocol execution across diverse online shopping environments.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Delegation Gap Thesis.</strong> Across all analyzed datasets, an empirical tension exists between consumer willingness to utilize conversational search and consumer willingness to permit unconstrained payment execution. Resolving this delegation gap requires moving away from fragile visual web scraping toward cryptographically bound, deterministic protocol architectures that enforce hard spend caps and zero standing privilege.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Data Verification Standards and Reproducibility.</strong> To maintain institutional research integrity, crawler probes were conducted without private authenticated bypasses, capturing the web as an untrusted third-party shopping assistant experiences it. All statistical distributions were cross-validated against independent HTTP archive dumps and card network authorization logs.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Methodological Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              All empirical crawler metrics reflect direct HTTP verification against live root and /.well-known endpoints sampled from the Tranco ranking, ensuring full reproducibility without reliance on survey self-reporting.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Triangulation Pipeline -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 1.0 - RESEARCH TRIANGULATION AND EVIDENCE ARCHITECTURE</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Methodological synthesis of crawler data, advisory studies, protocol specs, and benchmarks</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 4 Ingestion Pillars -->
              <rect x="0" y="4" width="108" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="0" y="4" width="108" height="22" rx="3" fill="#f4f4f5"/>
              <text x="8" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">1. Web Crawl Data</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a">100,000 Domains</text>
              <text x="8" y="56" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Zenodo Record 24121071</text>
              <text x="8" y="70" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Tranco top 1M sample</text>
              <line x1="8" y1="82" x2="100" y2="82" stroke="#f4f4f5" stroke-width="1"/>
              <text x="8" y="98" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">19 Verification Tests</text>
              <text x="8" y="114" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">JSON-LD, MCP, llms.txt</text>

              <rect x="116" y="4" width="108" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="116" y="4" width="108" height="22" rx="3" fill="#f4f4f5"/>
              <text x="124" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">2. Advisory Reports</text>
              <text x="124" y="42" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a">9 Global Consultancies</text>
              <text x="124" y="56" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">McKinsey, BCG, Bundl</text>
              <text x="124" y="70" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Accenture, Okta, Visa</text>
              <line x1="124" y1="82" x2="216" y2="82" stroke="#f4f4f5" stroke-width="1"/>
              <text x="124" y="98" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Macro Projections</text>
              <text x="124" y="114" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">$1.3T to $15T forecasts</text>

              <rect x="232" y="4" width="108" height="127" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <rect x="232" y="4" width="108" height="22" rx="3" fill="#f4f4f5"/>
              <text x="240" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">3. Technical Specs</text>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a">4 Core Protocols</text>
              <text x="240" y="56" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Stripe ACP, Google UCP</text>
              <text x="240" y="70" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Coinbase AP2, MCP</text>
              <line x1="240" y1="82" x2="332" y2="82" stroke="#f4f4f5" stroke-width="1"/>
              <text x="240" y="98" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Financial Rails</text>
              <text x="240" y="114" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a">Visa TAP, Mastercard SPT</text>

              <rect x="348" y="4" width="112" height="127" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <rect x="348" y="4" width="112" height="22" rx="3" fill="#09090b"/>
              <text x="356" y="18" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">4. Academic Bench</text>
              <text x="356" y="42" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#09090b">5 Evaluation Suites</text>
              <text x="356" y="56" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">WebArena, VisualWebArena</text>
              <text x="356" y="70" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">ACES, Tool-Lab MCP</text>
              <line x1="356" y1="82" x2="452" y2="82" stroke="#e4e4e7" stroke-width="1"/>
              <text x="356" y="98" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#09090b">Empirical Accuracy</text>
              <text x="356" y="114" font-family="Inter, sans-serif" font-size="6.3" fill="#52525b">Compounding error models</text>
            </svg>
          </div>

          <!-- Middle Table: Corpus Statistics -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 1.0 - EVIDENCE BASE AND CORPUS SUMMARY</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Primary data sources evaluated across the twenty-page investigation</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Investigation Pillar</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Source Reference</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Sample Size or Scope</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Core Focus Area</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Web Readiness Crawl</td>
                  <td style="padding: 4px 6px;">Vatsa Study, Zenodo (2026 [1])</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">100,000 Domains</td>
                  <td style="padding: 4px 6px;">Public HTML, Schema.org, APIs, MCP endpoints</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Consumer Adoption</td>
                  <td style="padding: 4px 6px;">Bundl & Greenbook (2026 [2])</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Gen Alpha & Gen Z</td>
                  <td style="padding: 4px 6px;">Delegation thresholds, brand trust, AI reliance</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Enterprise Identity</td>
                  <td style="padding: 4px 6px;">Okta & Auth0 Trends (2026 [3])</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">5,200 Consumers, 900 Leaders</td>
                  <td style="padding: 4px 6px;">CIAM bottlenecks, non-human tokens, delays</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Automation Maturity</td>
                  <td style="padding: 4px 6px;">McKinsey QuantumBlack [4]</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">6 Automation Levels</td>
                  <td style="padding: 4px 6px;">Regret risk modeling, category delegation curve</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Execution Benchmarks</td>
                  <td style="padding: 4px 6px;">VisualWebArena, Tool-Lab [5]</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">Multi-Modal Web Tasks</td>
                  <td style="padding: 4px 6px;">Visual scraping vs structured MCP execution</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Methodological Takeaway.</strong>
              Evaluating 100,000 public websites against enterprise identity surveys reveals that the obstacle to autonomous commerce is not consumer conversational interest, but interface and credential infrastructure.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] V. R. Vatsa, Zenodo record 24121071 (2026); [2] Bundl & Greenbook (2026); [3] Okta & Auth0 (2026); [4] McKinsey QuantumBlack (2025-2026); [5] Koh et al., ACL (2024).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">METHODOLOGICAL NOTES - REPRODUCIBILITY AND CRAWL GOVERNANCE</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              The 100,000 domain crawler executed asynchronous HTTP probes adhering to robots.txt guidelines and rate limits. The scan evaluated root paths, sitemap declarations, OpenAPI schemas, and well-known MCP configuration manifests across global hosting infrastructure.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Academic benchmark data from VisualWebArena evaluates frontier vision-language models on sandboxed retail webfronts, measuring deterministic task success against ground-truth state changes rather than intermediate text responses.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Statistical triangulation combines direct empirical crawler observations with published financial disclosures and econometric pricing studies to eliminate single-source bias.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Investigation Scope and Evidence Base")}
    </div>
  `;
}
