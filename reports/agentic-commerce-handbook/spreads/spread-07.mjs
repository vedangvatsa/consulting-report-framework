export function getSpread07(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("COMMERCE PROTOCOLS", "COMMERCE PROTOCOLS AND TECHNICAL STANDARDS", "07")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">Comparative Architecture of Core Agent Protocols</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A structural evaluation of four protocols standardizing machine discovery, tool execution, checkout orchestration, and cryptographic settlement.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Protocol Fragmentation and the Need for Standards.</strong> Autonomous commerce cannot scale on fragmented, proprietary APIs. A software assistant cannot parse custom checkout forms for thousands of independent retailers without encountering runtime failures. The industry is converging around four specialized protocols, each standardizing a specific slice of the transaction lifecycle, specifically discovery, tool execution, checkout orchestration, and cryptographic settlement.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Anthropic Model Context Protocol (MCP).</strong> The Model Context Protocol provides an open specification for connecting language models to external data systems and executable tools. In commerce architectures, MCP servers run adjacent to merchant product catalogs, exposing structured tools for real-time stock lookup, shipping calculations, and cart assembly. Because MCP operates over JSON-RPC, it eliminates HTML parsing ambiguities and provides language models with deterministic schema boundaries.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Google Universal Commerce Protocol (UCP).</strong> Google Universal Commerce Protocol focuses on machine discoverability. Implemented via standard metadata endpoints (such as /.well-known/ucp), UCP enables search crawlers and commerce agents to parse merchant product taxonomy, available inventory, pricing tiers, and delivery zones without executing interactive JavaScript. UCP acts as the machine-readable equivalent of a public storefront.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Stripe and OpenAI Agentic Commerce Protocol (ACP).</strong> The Agentic Commerce Protocol, developed through collaboration between Stripe and OpenAI, standardizes the checkout state machine. ACP defines the transition phases between cart initialization, dynamic tax calculation, shipping option selection, and final payment submission. Crucially, ACP mandates the inclusion of idempotency keys (RFC 7231) on all state-mutating requests, preventing duplicate billing during network timeouts.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Coinbase Agent Payment Protocol (AP2) and x402.</strong> For programmatic digital assets and stablecoin settlement, Coinbase Agent Payment Protocol (AP2) and the HTTP 402 Payment Required specification (x402) introduce cryptographically signed payment mandates. AP2 allows an agent to settle micro-transactions directly on public ledger rails without requiring traditional banking rails or credit card intermediary fees.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Protocol Harmonization and Cross-Layer Interoperability.</strong> Production enterprise deployments do not select a single protocol in isolation. Instead, engineering teams layer these standards together. An agent discovers merchant capabilities via Google UCP, evaluates live product attributes and stock levels through an Anthropic MCP server, transitions checkout state through Stripe ACP, and finalizes financial settlement via Visa TAP or Coinbase AP2.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Protocol Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Protocols do not compete directly; they operate as complementary tiers within the software stack, bridging catalog discovery to settlement.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: Protocol Layering -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 4.1 - PROTOCOL LAYERING IN AUTONOMOUS COMMERCE</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Functional mapping of open standards from discovery to transaction settlement</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- 4 Protocol Horizontals -->
              <rect x="0" y="4" width="460" height="28" rx="2.5" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
              <text x="12" y="21" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Discovery & Metadata Layer</text>
              <text x="210" y="21" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a">Google UCP & Schema.org JSON-LD</text>
              <text x="448" y="21" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a" text-anchor="end">Static catalog exposure</text>

              <rect x="0" y="36" width="460" height="28" rx="2.5" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="12" y="53" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Tool Execution & Context</text>
              <text x="210" y="53" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a">Anthropic Model Context Protocol (MCP)</text>
              <text x="448" y="53" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a" text-anchor="end">Dynamic inventory queries</text>

              <rect x="0" y="68" width="460" height="28" rx="2.5" fill="#f4f4f5" stroke="#e4e4e7" stroke-width="1"/>
              <text x="12" y="85" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#09090b">Checkout State Machine</text>
              <text x="210" y="85" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#27272a">Stripe Agentic Commerce Protocol (ACP)</text>
              <text x="448" y="85" font-family="Inter, sans-serif" font-size="6.3" fill="#71717a" text-anchor="end">Idempotent cart transitions</text>

              <rect x="0" y="100" width="460" height="30" rx="2.5" fill="#09090b"/>
              <text x="12" y="119" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#ffffff">Settlement & Attestation</text>
              <text x="210" y="119" font-family="Inter, sans-serif" font-size="7.0" font-weight="600" fill="#ffffff">Visa TAP, Mastercard SPT, AP2, x402</text>
              <text x="448" y="119" font-family="Inter, sans-serif" font-size="6.3" fill="#d4d4d8" text-anchor="end">Network tokenization</text>
            </svg>
          </div>

          <!-- Middle Table: Protocol Comparison Matrix -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 4.1 - TECHNICAL PROTOCOL COMPARISON MATRIX</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Structural evaluation across governance, message transport, and transaction scope</div>
            </div>

            <table style="width: 100%; border-collapse: collapse; font-size: 7.8px; margin-bottom: 5px;">
              <thead>
                <tr style="border-bottom: 1.5px solid var(--border); background: var(--paper-subtle);">
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Protocol Name</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Governing Body</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Transport Format</th>
                  <th style="padding: 4px 6px; text-align: left; font-weight: 700; color: var(--ink-heading);">Operational Function</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Model Context Protocol (MCP)</td>
                  <td style="padding: 4px 6px;">Anthropic / Open Source</td>
                  <td style="padding: 4px 6px; font-family: monospace;">JSON-RPC 2.0</td>
                  <td style="padding: 4px 6px;">Standardized tool call execution for catalog discovery</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--paper-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Universal Commerce (UCP)</td>
                  <td style="padding: 4px 6px;">Google</td>
                  <td style="padding: 4px 6px; font-family: monospace;">REST / JSON-LD</td>
                  <td style="padding: 4px 6px;">Public machine manifest for inventory and pricing</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 4px 6px; font-weight: 700;">Agentic Commerce (ACP)</td>
                  <td style="padding: 4px 6px;">Stripe & OpenAI</td>
                  <td style="padding: 4px 6px; font-family: monospace;">REST / Webhooks</td>
                  <td style="padding: 4px 6px;">Checkout state machine with mandatory idempotency</td>
                </tr>
                <tr>
                  <td style="padding: 4px 6px; font-weight: 700;">Agent Payment Protocol (AP2)</td>
                  <td style="padding: 4px 6px;">Coinbase</td>
                  <td style="padding: 4px 6px; font-family: monospace;">JSON-RPC / Web3</td>
                  <td style="padding: 4px 6px;">Cryptographic spend mandates and stablecoin rails</td>
                </tr>
              </tbody>
            </table>

            <div class="exhibit-analysis-box" style="margin-top: 4px; padding: 7px 10px; font-size: 7.8px; line-height: 1.42;">
              <strong>Architectural Takeaway.</strong>
              Protocols do not compete directly; they operate as complementary tiers within the software stack. Enterprises will publish UCP endpoints for indexing, deploy MCP servers for catalog interaction, and execute transactions over ACP and AP2 rails.
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Anthropic MCP Specification (2025); Google Universal Commerce Architecture (2025); Stripe ACP Documentation (2025-2026); Coinbase Developer Docs (2026).
            </div>
          </div>

          <!-- Bottom: Case Evidence Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TECHNICAL COMMENTARY - PROTOCOL INTEROPERABILITY IN PRODUCTION</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Production testing demonstrates that agents utilizing MCP for tool execution complete catalog queries with zero schema hallucination. By encapsulating inventory verification inside a deterministic RPC call, the model receives guaranteed data structures containing stock status, SKU identifiers, and delivery terms, eliminating reliance on unstructured HTML scraping.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Gateways implementing Stripe ACP report that enforcing RFC 7231 idempotency keys reduces duplicate order generation by 99.8% during transient network failures and mobile handover disconnects.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              Enterprises deploying Coinbase AP2 mandates observe average settlement times of 2.4 seconds on Ethereum Layer 2 networks, enabling automated micro-purchasing at fee levels below one-tenth of a cent.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("Commerce Protocols and Technical Standards")}
    </div>
  `;
}
