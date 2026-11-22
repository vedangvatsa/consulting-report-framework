export function getSpread16(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("CATALOG OPTIMIZATION", "AGENTIC COMMERCE OPTIMIZATION AND CATALOG ENGINEERING", "16")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Catalog Engineering</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">The Three-Layer ACO Framework and Catalog Normalization</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Transition from SEO to Agentic Commerce Optimization (ACO).</strong> For thirty years, search engine optimization (SEO) focused on keyword density, backlink equity, and visual page layout designed to attract human clicks. In an economy where autonomous agents buy on behalf of humans, visual styling is discarded. Agents ingest structured product feeds directly. As formulated by Semrush Research [1], Agentic Commerce Optimization (ACO) is the discipline of structuring commercial catalog data so that algorithmic purchasing engines discover, evaluate, and purchase inventory.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Three-Layer Semrush ACO Architecture.</strong> Semrush outlines a rigorous three-tier optimization framework. Layer 1 guarantees Crawler Accessibility, ensuring that bot protection firewalls permit verified AI assistant IP ranges to access product feeds without triggering CAPTCHA blocks. Layer 2 executes Structured Attribute Normalization, mapping internal merchant database fields to global Schema.org definitions. Layer 3 integrates Protocol Checkout Execution, providing verified endpoints where agents can execute transactions directly.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Shortlist Gatekeeper Risk (SAP Emarsys Findings).</strong> In its analysis of machine purchasing, SAP Emarsys [2] identifies the commercial risk facing unprepared retailers, specifically algorithmic invisibility. In human e-commerce, a consumer browsing a search engine reviews dozens of blue links and visits multiple storefronts. In contrast, an AI shopping agent acts as an algorithmic gatekeeper, curating a tight shortlist of three to five items based on programmatic filters. If a merchant's structured catalog lacks exact dimensions, verified stock counts, or explicit return terms, the brand is excluded before the consumer ever sees it.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Essential Schema.org JSON-LD Entities for Retailers.</strong> Achieving machine readiness requires deploying complete JSON-LD entities. At minimum, each product listing must expose Product, Offer, MerchantReturnPolicy, and ShippingDetails. Crucially, inventory counts must update dynamically via webhooks or low-latency APIs. If an agent detects stale pricing or out-of-stock items during cart verification, the merchant receives an algorithmic penalty, reducing future recommendation frequency.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The First-Mover Advantage (Boston Consulting Group).</strong> Boston Consulting Group (2026 [3]) observes that early enterprise adopters of structured catalog optimization capture immediate revenue lift. Brands optimizing product detail pages for Generative Engine Optimization (GEO) record a 1% to 5% incremental revenue lift, while retailers deploying owned AI shopping assistants integrated with first-party catalog endpoints achieve a 3% to 10% revenue expansion.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: ACO Ranking Factors -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 8.2 - ACO DISCOVERY WEIGHTS VS TRADITIONAL SEO</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Algorithmic ranking factors prioritized by LLM purchasing agents during product selection</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- 4 Horizontal Bar Rows -->
              <text x="112" y="22" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Structured JSON-LD & Schema</text>
              <rect x="120" y="14" width="220" height="12" rx="2" fill="#09090b"/>
              <text x="348" y="23" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">35% Weight</text>

              <text x="112" y="44" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Real-Time Stock Latency (&lt;50ms)</text>
              <rect x="120" y="36" width="160" height="12" rx="2" fill="#27272a"/>
              <text x="288" y="45" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">25% Weight</text>

              <text x="112" y="66" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Verified Review Quality & NLP</text>
              <rect x="120" y="58" width="128" height="12" rx="2" fill="#52525b"/>
              <text x="256" y="67" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">20% Weight</text>

              <text x="112" y="88" font-family="Inter, sans-serif" font-size="6.5" font-weight="600" fill="#27272a" text-anchor="end">Machine-Readable Return Terms</text>
              <rect x="120" y="80" width="96" height="12" rx="2" fill="#71717a"/>
              <text x="224" y="89" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">15% Weight</text>
            </svg>
          </div>

          <!-- Middle Table: Essential Schema Fields -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 8.2 - ESSENTIAL SCHEMA.ORG METADATA ENTITIES</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Technical entity specifications required for unconstrained agentic discovery and filtering</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Schema Entity</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Critical Attributes</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Current Web Pass Rate</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Omission Consequence</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-family: monospace; font-weight: 700;">Product</td>
                  <td style="padding: 2.5px 5px;">name, gtin14, sku, description</td>
                  <td style="padding: 2.5px 5px;">23.44% (Zenodo [1])</td>
                  <td style="padding: 2.5px 5px;">Excluded from initial semantic search</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-family: monospace; font-weight: 700;">Offer</td>
                  <td style="padding: 2.5px 5px;">price, priceCurrency, availability</td>
                  <td style="padding: 2.5px 5px;">19.82% (Zenodo [1])</td>
                  <td style="padding: 2.5px 5px;">Price comparison algorithms reject listing</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-family: monospace; font-weight: 700;">MerchantReturnPolicy</td>
                  <td style="padding: 2.5px 5px;">returnPolicyCategory, returnDays</td>
                  <td style="padding: 2.5px 5px; color: #71717a;">8.42% (Zenodo [1])</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Immediate drop from autonomous shortlist</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-family: monospace; font-weight: 700;">ShippingDetails</td>
                  <td style="padding: 2.5px 5px;">shippingRate, deliveryTime</td>
                  <td style="padding: 2.5px 5px; color: #71717a;">12.18% (Zenodo [1])</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Landed-cost calculation failure</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Catalog Engineering Takeaway.</strong>
              Over 90% of public e-commerce websites omit MerchantReturnPolicy and ShippingDetails from their JSON-LD schemas. Brands that deploy these entities immediately capture algorithmic consideration sets.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources [1] Semrush Research (2026); [2] SAP Emarsys (2026); [3] Boston Consulting Group (2026); [4] V. R. Vatsa, Zenodo record 24121071 (2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TECHNICAL COMMENTARY - THE LANDED-COST CALCULATION GAP</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Autonomous agents cannot complete checkout if final shipping rates or regional taxes remain unknown until step 3 of a human checkout flow. ACO requires merchants to expose programmatic shipping estimation endpoints that return precise landed costs in under 50 milliseconds based on postal code inputs.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Agentic Commerce Optimization and Catalog Engineering")}
    </div>
  `;
}
