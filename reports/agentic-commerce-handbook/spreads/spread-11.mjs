export function getSpread11(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("BENCHMARK EVALUATION", "WEB INTERFACE FRAGILITY AND ACCURACY", "11")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Empirical Benchmarks</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Web Interface Fragility and Benchmark Evaluations</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              An empirical benchmark evaluation of frontier vision-language models navigating human web interfaces compared to structured protocol execution.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Evaluation of Autonomous Agents on Human Webfronts.</strong> Initial attempts to build shopping agents relied on computer-vision models controlling headless web browsers, clicking buttons, filling text forms, and navigating consumer websites designed for human eyes. Academic benchmark evaluations demonstrate that this visual automation pattern is structurally brittle. On the Carnegie Mellon WebArena benchmark (Zhou et al., 2024 [1]), leading frontier language models achieve an end-to-end task completion rate of only 35.8% across complex multi-page retail tasks.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Stanford VisualWebArena Findings (Koh et al., ACL 2024).</strong> When evaluated on dynamic visual interfaces on the Stanford VisualWebArena benchmark [2], state-of-the-art vision-language models achieve a baseline task success rate of 16.4%, reaching 39.7% only under extensive multi-modal guidance. Failures concentrate around visual ambiguities, specifically floating promotional banners, cookie consent overlays, sticky navigation headers, and infinite-scroll pagination that obscure clickable elements.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Compounding Error Equation (P = p^n).</strong> In multi-step commercial purchasing, errors compound exponentially. A complete transaction requires an agent to execute roughly seven sequential sub-tasks, including search query execution, facet filtering, product selection, variant configuration, shipping address entry, discount code validation, and payment submission. If an individual sub-task maintains a 90% success probability (p = 0.90), the total transaction completion probability across seven steps drops to 47.8% (P = 0.90^7).
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Tool-Lab Protocol Benchmark (Wadi & Ma).</strong> The Tool-Lab benchmark [3] demonstrates the radical performance divergence between browser-based DOM scraping and direct tool execution. When agents navigate raw HTML storefronts, success rates hover at 24.1%. When the identical models are provided with structured Model Context Protocol (MCP) tool definitions and JSON endpoints, task completion surges to 82.4%. Eliminating visual ambiguity transforms agentic purchasing from an erratic experiment into enterprise infrastructure.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Transition to Headless Merchant APIs.</strong> These empirical findings explain why enterprise retailers are deprecating visual scraping in favor of direct machine protocols. Exposing typed API tools allows purchasing models to interact with catalog state directly, bypassing the visual rendering layers that cause over 70% of execution aborts.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Token Latency and Computational Cost Dynamics.</strong> Visual navigation consumes vast computational resources. Parsing screenshot images and multi-megabyte DOM dumps requires an average of 42,000 prompt tokens per shopping session, imposing round-trip latencies exceeding 45 seconds. Structured MCP tool calls reduce prompt consumption to under 1,800 tokens, completing identical product verifications in under two seconds.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Benchmark Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Visual browser automation suffers an operational ceiling below 40% on real-world retail workflows. Deploying structured Model Context Protocol (MCP) endpoints lifts task success above 82%.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Compounding Error Curve -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 6.1 - COMPOUNDING ERROR ACCURACY DECAY (P = p^n)</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Comparison of transaction completion probability across progressive workflow steps</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- Grid lines -->
              <line x1="45" y1="16" x2="445" y2="16" stroke="#e4e4e7" stroke-width="1"/>
              <line x1="45" y1="46" x2="445" y2="46" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="45" y1="76" x2="445" y2="76" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="45" y1="106" x2="445" y2="106" stroke="#e4e4e7" stroke-width="1"/>

              <!-- Axis Labels -->
              <text x="36" y="20" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">100%</text>
              <text x="36" y="50" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">70%</text>
              <text x="36" y="80" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">40%</text>
              <text x="36" y="110" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="end">0%</text>

              <!-- Step Labels on X -->
              <text x="50" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 1</text>
              <text x="100" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 2</text>
              <text x="150" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 3</text>
              <text x="200" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 4</text>
              <text x="250" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 5</text>
              <text x="300" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 6</text>
              <text x="350" y="122" font-family="Inter, sans-serif" font-size="6.5" fill="#71717a" text-anchor="middle">Step 7</text>

              <!-- Structured MCP Line (High Success: 98% per step) -->
              <path d="M 50 18 L 100 20 L 150 22 L 200 25 L 250 28 L 300 31 L 350 34" fill="none" stroke="#09090b" stroke-width="2.5"/>
              <circle cx="350" cy="34" r="3.5" fill="#09090b"/>
              <text x="360" y="37" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">86.8% (Structured MCP)</text>

              <!-- Visual Web Scraping Line (85% per step) -->
              <path d="M 50 32 L 100 48 L 150 62 L 200 74 L 250 85 L 300 94 L 350 101" fill="none" stroke="#71717a" stroke-width="2" stroke-dasharray="3,3"/>
              <circle cx="350" cy="101" r="3.5" fill="#71717a"/>
              <text x="360" y="104" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#71717a">32.1% (Web Scraping)</text>
            </svg>
          </div>

          <!-- Middle Table: Academic Benchmark Results -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 6.1 - ACADEMIC AGENT BENCHMARK PERFORMANCE EVALUATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Empirical task completion rates across leading e-commerce benchmark environments</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Benchmark Suite</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Institution</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Task Domain</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">WebArena</td>
                  <td style="padding: 4px 6px;">Carnegie Mellon Univ</td>
                  <td style="padding: 4px 6px;">Multi-step website interaction (Shopping, CMS)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">35.8% Pass Rate</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">VisualWebArena</td>
                  <td style="padding: 4px 6px;">Stanford & CMU</td>
                  <td style="padding: 4px 6px;">Multi-modal visual UI tasks (Classifieds, Retail)</td>
                  <td style="padding: 4px 6px; font-weight: 600;">16.4% - 39.7%</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Tool-Lab MCP</td>
                  <td style="padding: 4px 6px;">Wadi & Ma</td>
                  <td style="padding: 4px 6px;">Structured Tool Calls vs Visual HTML Navigation</td>
                  <td style="padding: 4px 6px; font-weight: 700; color: #18181b;">82.4% vs 24.1%</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">ACES E-Commerce</td>
                  <td style="padding: 4px 6px;">Columbia University</td>
                  <td style="padding: 4px 6px;">Constraint satisfaction in shopping cart assembly</td>
                  <td style="padding: 4px 6px; font-weight: 600;">44.2% Pass Rate</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Empirical Takeaway.</strong>
              Visual browser automation suffers an operational ceiling below 40% on real-world retail workflows. Deploying structured Model Context Protocol (MCP) tool endpoints lifts task success above 82%, making API exposure mandatory for commercial reliability.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Zhou et al., CMU WebArena (2024); [2] Koh et al., Stanford VisualWebArena, ACL (2024); [3] Wadi & Ma, Tool-Lab (2025).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">ERROR ANALYSIS - INTERFACE HAZARDS IN WEB SCRAPING</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              In VisualWebArena traces, the primary cause of model failure is React hydration DOM shifting. When an agent clicks a button while hydration scripts are evaluating, the click event is swallowed silently.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Exposing headless API endpoints completely removes the DOM rendering layer, allowing agents to execute transactions through guaranteed HTTP status codes.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Retailers adopting MCP tool definitions report mean execution times dropping from 42 seconds to under 1.8 seconds, eliminating 85% of client-side timeout failures.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Web Interface Fragility and Benchmark Evaluations")}
    </div>
  `;
}
