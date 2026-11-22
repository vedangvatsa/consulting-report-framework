export function getSpread18(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("ECOSYSTEM DYNAMICS", "THE TWO-POLES MOAT AND DISINTERMEDIATION RISKS", "18")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Strategic Moats</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">Concentration at the Poles and Middle-Tier Reseller Squeeze</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Two-Poles Moat Dynamics (Morgan Stanley & Goldman Sachs).</strong> In strategic equity analysis by Morgan Stanley and Goldman Sachs [1], economic profit in agentic commerce concentrates at two distinct poles of the digital value chain. Pole 1 consists of Front-End Intent Aggregators (OpenAI, Google, Apple, Anthropic) who control conversational context, user identity, and personal preference history. Pole 2 consists of Physical Fulfillment Networks (Amazon, Walmart) who control physical inventory, automated robotics warehouses, and same-day last-mile logistics.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Structural Squeeze on Middle-Tier Resellers.</strong> Entities situated in the middle of the value chain (such as search affiliate blogs, coupon aggregators, dropshippers, and undifferentiated multi-brand retail distributors) face severe disintermediation. Because autonomous agents bypass human web navigation, consumers never visit intermediate comparison portals. If a business adds neither unique physical merchandise nor proprietary contextual intelligence, agents route transactions directly from the front-end LLM to primary manufacturers.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Payment Infrastructure Defensibility (Stripe, Adyen).</strong> While conversational models control user prompts, payment infrastructure providers maintain durable competitive moats. Gateways like Stripe and Adyen manage complex banking relationships, acquirer licenses, localized payment rails, automated sales tax calculation across 14,000 jurisdictions, and chargeback dispute resolution. Software aggregators cannot easily replicate this regulatory and operational infrastructure, compelling front-end AI labs to partner with established processors.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Merchant Strategies to Defend Brand Equity.</strong> To avoid total commoditization into white-label suppliers for conversational bots, independent brands must implement three defensive maneuvers. First, expose structured, authoritative API endpoints that require authentication, preventing anonymous scrapers from hijacking product feeds. Second, offer exclusive member-only bundles, personalized loyalty pricing, and unique SKUs that agents cannot discover through generic public indexes. Third, deploy first-party conversational assistants on brand-owned domains.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Re-emergence of Direct-to-Consumer (D2C) via APIs.</strong> Paradoxically, agentic protocols offer independent D2C brands a mechanism to bypass Google Search and Amazon marketplace fees. By publishing standardized Google UCP and Model Context Protocol endpoints, an independent brand can be discovered and purchased by ChatGPT or Claude users globally without paying for expensive search engine ads.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: Two Poles Moat Dynamics -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 9.2 - THE TWO-POLES VALUE CONCENTRATION MODEL</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Value migration toward user intent aggregators and physical fulfillment networks</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- Left Pole: Intent -->
              <rect x="0" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="8" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">POLE 1: INTENT AGGREGATION</text>
              <text x="8" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">OpenAI, Google, Apple</text>
              <text x="8" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Holds user identity & context</text>
              <rect x="8" y="52" width="122" height="16" rx="2" fill="#09090b"/>
              <text x="69" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Moat: High Switching Costs</text>

              <!-- Middle: Squeezed Tier -->
              <rect x="152" y="16" width="156" height="66" rx="2" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1" stroke-dasharray="2,2"/>
              <text x="160" y="28" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#71717a">MIDDLE TIER (DISINTERMEDIATED)</text>
              <text x="160" y="38" font-family="Inter, sans-serif" font-size="5.2" fill="#71717a">Affiliate blogs, SEO aggregators, dropshippers</text>
              <text x="160" y="48" font-family="Inter, sans-serif" font-size="5.2" fill="#71717a">Zero proprietary inventory or user context</text>
              <text x="160" y="60" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#27272a">Severe Margin Squeeze (-45%)</text>

              <!-- Right Pole: Fulfillment -->
              <rect x="322" y="8" width="138" height="82" rx="3" fill="#ffffff" stroke="#09090b" stroke-width="1.5"/>
              <text x="330" y="20" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">POLE 2: PHYSICAL LOGISTICS</text>
              <text x="330" y="32" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Amazon, Walmart, Target</text>
              <text x="330" y="42" font-family="Inter, sans-serif" font-size="5.8" fill="#52525b">Robotics warehouses & delivery</text>
              <rect x="330" y="52" width="122" height="16" rx="2" fill="#09090b"/>
              <text x="391" y="62.5" font-family="Inter, sans-serif" font-size="5.2" font-weight="700" fill="#ffffff" text-anchor="middle">Moat: Physical Infrastructure</text>
            </svg>
          </div>

          <!-- Middle Table: Platform Defensibility Moats -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 9.2 - COMMERCE STAKEHOLDER DEFENSIBILITY EVALUATION</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Strategic positioning, core defensible moats, and structural market risks</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.3px; margin-bottom: 4px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Stakeholder Class</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Core Defensible Moat</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Primary Vulnerability</th>
                  <th style="padding: 2.5px 5px; text-align: left; font-weight: 700; color: var(--ink-heading);">Strategic Imperative</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Front-End AI Assistants</td>
                  <td style="padding: 2.5px 5px;">User Context & Prompts</td>
                  <td style="padding: 2.5px 5px;">Lack merchant trust & settlement rails</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Partner with Stripe & Adyen</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Payment Processors</td>
                  <td style="padding: 2.5px 5px;">Acquiring Rails & Tax Nexus</td>
                  <td style="padding: 2.5px 5px;">Front-end commoditization pressure</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Standardize ACP & network tokens</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 2.5px 5px; font-weight: 700;">Logistics Giants</td>
                  <td style="padding: 2.5px 5px;">Physical Warehouses & Vans</td>
                  <td style="padding: 2.5px 5px;">Loss of consumer search traffic</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Expose programmatic fulfillment APIs</td>
                </tr>
                <tr>
                  <td style="padding: 2.5px 5px; font-weight: 700;">Independent Brands</td>
                  <td style="padding: 2.5px 5px;">Proprietary Product IP</td>
                  <td style="padding: 2.5px 5px;">Price commoditization by scrapers</td>
                  <td style="padding: 2.5px 5px; font-weight: 600;">Deploy authenticated MCP feeds</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 3px; padding: 6px 9px;">
              <strong>Strategic Takeaway.</strong>
              Value migrates toward the two ends of the transaction stack, specifically front-end intent aggregators holding user context, and physical logistics networks fulfilling verified deliveries. Middle-tier resellers face severe margin compression.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Morgan Stanley Equity Research (2025); Goldman Sachs Global Payments Analysis (2025); BCG (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">STRATEGIC DIRECTIVE - BUILDING PROPRIETARY CONTEXT MOATS</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Brands that treat agentic commerce as another visual storefront risk immediate price destruction. Defensible margin requires owning first-party consumer context, specifically purchase history, fit preferences, and direct loyalty incentives that an external third-party scraper cannot extract from a public webpage.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("The Two-Poles Moat and Disintermediation Risks")}
    </div>
  `;
}
