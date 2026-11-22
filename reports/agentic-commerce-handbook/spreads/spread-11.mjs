export function getSpread11(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("BENCHMARK EVALUATION", "WEB INTERFACE FRAGILITY AND ACCURACY", "11")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Empirical Benchmarks</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Web Interface Fragility and Benchmark Evaluations</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Evaluation of Autonomous Agents on Human Webfronts.</strong> Initial attempts to build shopping agents relied on computer-vision models controlling headless web browsers, clicking buttons, filling text forms, and navigating consumer websites designed for human eyes. Academic benchmark evaluations demonstrate that this visual automation pattern is structurally brittle. On the Carnegie Mellon WebArena benchmark (Zhou et al., 2024 [1]), leading frontier language models achieve an end-to-end task completion rate of only 35.8% across complex multi-page retail tasks.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Stanford VisualWebArena Findings (Koh et al., ACL 2024).</strong> When evaluated on dynamic visual interfaces on the Stanford VisualWebArena benchmark [2], state-of-the-art vision-language models achieve a baseline task success rate of 16.4%, reaching 39.7% only under extensive multi-modal guidance. Failures concentrate around visual ambiguities, specifically floating promotional banners, cookie consent overlays, sticky navigation headers, and infinite-scroll pagination that obscure clickable elements.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Compounding Error Equation (P = p^n).</strong> In multi-step commercial purchasing, errors compound exponentially. A complete transaction requires an agent to execute roughly seven sequential sub-tasks, including search query execution, facet filtering, product selection, variant configuration, shipping address entry, discount code validation, and payment submission. If an individual sub-task maintains a 90% success probability (p = 0.90), the total transaction completion probability across seven steps drops to 47.8% (P = 0.90^7).
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Tool-Lab Protocol Benchmark (Wadi & Ma).</strong> The Tool-Lab benchmark [3] demonstrates the radical performance divergence between browser-based DOM scraping and direct tool execution. When agents navigate raw HTML storefronts, success rates hover at 24.1%. When the identical models are provided with structured Model Context Protocol (MCP) tool definitions and JSON endpoints, task completion surges to 82.4%. Eliminating visual ambiguity transforms agentic purchasing from an erratic experiment into enterprise infrastructure.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Transition to Headless Merchant APIs.</strong> These empirical findings explain why enterprise retailers are deprecating visual scraping in favor of direct machine protocols. Exposing typed API tools allows purchasing models to interact with catalog state directly, bypassing the visual rendering layers that cause over 70% of execution aborts.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Compounding Error Curve -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 6.1 - COMPOUNDING ERROR ACCURACY DECAY (P = p^n)</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Comparison of transaction completion probability across progressive workflow steps</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- Grid lines -->
              <line x1="40" y1="12" x2="440" y2="12" stroke="#e4e4e7" stroke-width="1"/>
              <line x1="40" y1="36" x2="440" y2="36" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="40" y1="60" x2="440" y2="60" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <line x1="40" y1="84" x2="440" y2="84" stroke="#e4e4e7" stroke-width="1"/>

              <!-- Axis Labels -->
              <text x="32" y="15" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="end">100%</text>
              <text x="32" y="39" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="end">70%</text>
              <text x="32" y="63" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="end">40%</text>
              <text x="32" y="87" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="end">0%</text>

              <!-- Step Labels on X -->
              <text x="50" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 1</text>
              <text x="110" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 2</text>
              <text x="170" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 3</text>
              <text x="230" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 4</text>
              <text x="290" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 5</text>
              <text x="350" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 6</text>
              <text x="410" y="94" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a" text-anchor="middle">Step 7</text>

              <!-- Structured MCP Line (High Success: 98% per step) -->
              <path d="M 50 14 L 110 15 L 170 17 L 230 19 L 290 21 L 350 23 L 410 25" fill="none" stroke="#09090b" stroke-width="2"/>
              <circle cx="410" cy="25" r="3" fill="#09090b"/>
              <text x="420" y="27" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#09090b">86.8% (Structured MCP)</text>

              <!-- Visual Web Scraping Line (85% per step) -->
              <path d="M 50 24 L 110 38 L 170 49 L 230 58 L 290 67 L 350 74 L 410 79" fill="none" stroke="#71717a" stroke-width="1.8" stroke-dasharray="3,3"/>
              <circle cx="410" cy="79" r="3" fill="#71717a"/>
              <text x="420" y="81" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">32.1% (Web Scraping)</text>
            </svg>
          </div>

          <!-- Middle Table: Academic Benchmark Results -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 6.1 - ACADEMIC AGENT BENCHMARK PERFORMANCE EVALUATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Empirical task completion rates across leading e-commerce benchmark environments</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Benchmark Suite</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Institution</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Task Domain</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Success Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">WebArena</td>
                  <td style="padding: 2.5px 5px;">Carnegie Mellon Univ</td>
                  <td style="padding: 2.5px 5px;">Multi-step website interaction (Shopping, CMS)</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">35.8% Pass Rate</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">VisualWebArena</td>
                  <td style="padding: 2.5px 5px;">Stanford & CMU</td>
                  <td style="padding: 2.5px 5px;">Multi-modal visual UI tasks (Classifieds, Retail)</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">16.4% - 39.7%</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Tool-Lab MCP</td>
                  <td style="padding: 2.5px 5px;">Wadi & Ma</td>
                  <td style="padding: 2.5px 5px;">Structured Tool Calls vs Visual HTML Navigation</td>
                  <td style="padding: 2.5px 5px; font-weight: 700; color: #18181b;">82.4% vs 24.1%</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">ACES E-Commerce</td>
                  <td style="padding: 2.5px 5px;">Columbia University</td>
                  <td style="padding: 2.5px 5px;">Constraint satisfaction in shopping cart assembly</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">44.2% Pass Rate</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Empirical Takeaway.</strong>
              Visual browser automation suffers an operational ceiling below 40% on real-world retail workflows. Deploying structured Model Context Protocol (MCP) tool endpoints lifts task success above 82%, making API exposure mandatory for commercial reliability.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Zhou et al., CMU WebArena (2024); [2] Koh et al., Stanford VisualWebArena, ACL (2024); [3] Wadi & Ma, Tool-Lab (2025).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">ERROR ANALYSIS - INTERFACE HAZARDS IN WEB SCRAPING</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              In VisualWebArena traces, the primary cause of model failure is React hydration DOM shifting. When an agent clicks a button while hydration scripts are evaluating, the click event is swallowed silently. Exposing headless API endpoints completely removes the DOM rendering layer, allowing agents to execute transactions through guaranteed HTTP status codes.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Web Interface Fragility and Benchmark Evaluations")}
    </div>
  `;
}
