export function getSpread05(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("SYSTEM ARCHITECTURE", "THE 7 LAYERS OF AGENTIC COMMERCE", "05")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Stack Specification</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">The 7 Layers of Autonomous Commerce Architecture</h2>
          </div>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Seven Core Architectural Layers (Jas Shah Model).</strong> As established by fintech analyst Jas Shah in Fintech Under the Hood (2025 [1]), complete agentic purchasing requires seven integrated layers. These progress from L1 (Consumer AI Frontends) through L2 (Reasoning and Orchestration Engines), L3 (Tool Execution and Context Protocols), L4 (Catalog and Context Synchronization), L5 (Checkout Session State Machines), L6 (Payment Rails and Token Vaults), to L7 (Post-Purchase Fulfillment and Returns). Each tier enforces specific boundaries between probabilistic language generation and deterministic transaction settlement.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The Six-Stage Transaction Pipeline (Visa Consulting & Analytics).</strong> In its framework analyzing the rise of machine-initiated spending, Visa Consulting & Analytics (2026 [2]) maps transactions across six technical gates, specifically intent capture, cart construction, agent identity validation, credential access, authentication, and liability routing. Visa notes that while 56% of consumers readily delegate product search and comparison, fewer than 40% permit automated credential access without explicit approval gates.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Separating Probabilistic Intent from Deterministic Settlement.</strong> A primary architectural failure mode occurs when LLM orchestration attempts to manipulate final checkout APIs directly without intermediate schema validation. Language models produce non-deterministic outputs that can hallucinate product stock, corrupt currency decimals, or omit tax calculations. To prevent financial corruption, Layer 3 context protocols enforce typed JSON schemas, converting conversational prompts into validated RPC payloads before reaching Layer 5 state machines.
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>The 5-Tier Commercial Market Structure.</strong> Across the emerging software ecosystem, over forty enterprise platforms occupy distinct functional niches. Tier 1 encompasses conversational frontends (ChatGPT Search, Claude, Perplexity, Gemini Shopping). Tier 2 includes orchestration frameworks (CrewAI, LangGraph, AutoGen). Tier 3 contains specialized protocol libraries (Anthropic MCP, Google UCP, Stripe ACP, Coinbase AP2). Tier 4 comprises payment networks and card vaults (Visa TAP, Mastercard SPT, Lithic, Highnote, Marqeta). Tier 5 represents merchant commerce backends (Shopify, commercetools, BigCommerce).
          </p>

          <p class="report-p" style="font-size: 9.3px; line-height: 1.46; margin-bottom: 5px;">
            <strong>Hardware-Attested Delegation Enclaves.</strong> Enterprise implementations require non-repudiable delegation. Modern architectures anchor agent execution within hardware enclaves (such as Apple Secure Enclave or Android StrongBox) and utilize WebAuthn and FIDO2 cryptographic credentials. Anchoring authorization in hardware ensures that an agent cannot forge transaction parameters, providing merchants and card issuers with cryptographic certainty regarding principal consent.
          </p>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 7px;">
          <!-- Top SVG: 7-Layer Diagram -->
          <div class="exhibit-card" style="padding: 8px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 3.1 - THE 7-LAYER STACK AND EXECUTION DATA FLOW</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Seven-layer reference architecture bridging probabilistic models to deterministic settlement</div>
            </div>

            <svg viewBox="0 0 460 98" width="100%" height="98" style="display: block;">
              <!-- Left: 7 Layers Compact Stack -->
              <g transform="translate(4, 2)">
                <rect x="0" y="0" width="200" height="11.5" rx="1.5" fill="#09090b"/>
                <text x="8" y="8.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">L1. Consumer AI Front-End</text>
                <text x="192" y="8.5" font-family="Inter, sans-serif" font-size="5.2" fill="#a1a1aa" text-anchor="end">ChatGPT, Claude</text>

                <rect x="0" y="13" width="200" height="11.5" rx="1.5" fill="#18181b"/>
                <text x="8" y="21.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">L2. Agent Orchestration</text>
                <text x="192" y="21.5" font-family="Inter, sans-serif" font-size="5.2" fill="#a1a1aa" text-anchor="end">LangGraph, AutoGen</text>

                <rect x="0" y="26" width="200" height="11.5" rx="1.5" fill="#27272a"/>
                <text x="8" y="34.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">L3. Context & Tool Protocol</text>
                <text x="192" y="34.5" font-family="Inter, sans-serif" font-size="5.2" fill="#a1a1aa" text-anchor="end">Model Context Protocol</text>

                <rect x="0" y="39" width="200" height="11.5" rx="1.5" fill="#3f3f46"/>
                <text x="8" y="47.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">L4. Catalog Synchronization</text>
                <text x="192" y="47.5" font-family="Inter, sans-serif" font-size="5.2" fill="#d4d4d8" text-anchor="end">Schema.org JSON-LD</text>

                <rect x="0" y="52" width="200" height="11.5" rx="1.5" fill="#52525b"/>
                <text x="8" y="60.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">L5. Checkout State Machine</text>
                <text x="192" y="60.5" font-family="Inter, sans-serif" font-size="5.2" fill="#d4d4d8" text-anchor="end">Stripe ACP, Google UCP</text>

                <rect x="0" y="65" width="200" height="11.5" rx="1.5" fill="#71717a"/>
                <text x="8" y="73.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#ffffff">L6. Token Rails & Settlement</text>
                <text x="192" y="73.5" font-family="Inter, sans-serif" font-size="5.2" fill="#ffffff" text-anchor="end">Visa TAP, AP2, x402</text>

                <rect x="0" y="78" width="200" height="11.5" rx="1.5" fill="#a1a1aa"/>
                <text x="8" y="86.5" font-family="Inter, sans-serif" font-size="5.8" font-weight="700" fill="#09090b">L7. Fulfillment & Identity</text>
                <text x="192" y="86.5" font-family="Inter, sans-serif" font-size="5.2" fill="#18181b" text-anchor="end">Okta CIAM, Shop Pay</text>
              </g>

              <!-- Right: Execution Flow Box -->
              <rect x="220" y="6" width="236" height="84" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="232" y="19" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">END-TO-END EXECUTION FLOW</text>
              
              <circle cx="238" cy="33" r="5" fill="#f4f4f5" stroke="#27272a" stroke-width="1"/>
              <text x="238" y="35.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">1</text>
              <text x="248" y="31.5" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#27272a">Intent Ingestion</text>
              <text x="248" y="39" font-family="Inter, sans-serif" font-size="5.2" fill="#71717a">User expresses shopping goal via conversational LLM</text>

              <circle cx="238" cy="51" r="5" fill="#f4f4f5" stroke="#27272a" stroke-width="1"/>
              <text x="238" y="53.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">2</text>
              <text x="248" y="49.5" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#27272a">Discovery & Context</text>
              <text x="248" y="57" font-family="Inter, sans-serif" font-size="5.2" fill="#71717a">Agent calls MCP tools for real-time inventory and pricing</text>

              <circle cx="238" cy="69" r="5" fill="#f4f4f5" stroke="#27272a" stroke-width="1"/>
              <text x="238" y="71.5" font-family="Inter, sans-serif" font-size="5.5" font-weight="700" fill="#09090b" text-anchor="middle">3</text>
              <text x="248" y="67.5" font-family="Inter, sans-serif" font-size="6.0" font-weight="700" fill="#27272a">Settlement & Attestation</text>
              <text x="248" y="75" font-family="Inter, sans-serif" font-size="5.2" fill="#71717a">Non-human identity verified; single-use token dispatched</text>
            </svg>
          </div>

          <!-- Middle: 5-Tier Market Map -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.8px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 3.1 - THE 5-TIER AGENTIC COMMERCE MARKET MAP</div>
              <div class="exhibit-subtitle" style="font-size: 7.5px; color: var(--ink-secondary);">Directory of live infrastructure, protocols, payment rails, and enterprise vendors</div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 3px; font-size: 6.8px;">
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 2.5px 6px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIER 1 - CONSUMER AI FRONTENDS & DEMAND AGGREGATION</span><br/>
                <span style="color: var(--ink-secondary);">ChatGPT Search, Claude Artifacts, Gemini Shopping, Perplexity Buy with Pro, Sierra AI, Rufus</span>
              </div>
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 2.5px 6px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIER 2 - AGENT PROTOCOLS & ORCHESTRATION FRAMEWORKS</span><br/>
                <span style="color: var(--ink-secondary);">Anthropic MCP, Google UCP, Stripe ACP, Coinbase AP2, LangGraph, CrewAI, AutoGen</span>
              </div>
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 2.5px 6px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIER 3 - PAYMENT RAILS, TOKEN VAULTS & VIRTUAL CARDS</span><br/>
                <span style="color: var(--ink-secondary);">Visa TAP, Mastercard SPT, Lithic, Highnote, Marqeta, Adyen, Stripe Issuing, Skyfire, Payman</span>
              </div>
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 2.5px 6px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIERS 4 & 5 - MERCHANT ENGINES & CRYPTOGRAPHIC ENCLAVES</span><br/>
                <span style="color: var(--ink-secondary);">Shopify Shop Pay, commercetools, BigCommerce, Okta AI CIAM, Apple Secure Enclave, WebAuthn</span>
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 3px;">
              Reference Sources Jas Shah (2025); Visa Consulting & Analytics (2026); Okta Customer Identity Trends (2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 7px 10px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 3px;">
              <div class="exhibit-title" style="font-size: 8.3px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TECHNICAL COMMENTARY - SEPARATION OF INTENT AND EXECUTION</div>
            </div>
            <p style="font-size: 7.3px; line-height: 1.4; color: var(--ink); margin-bottom: 0;">
              Language models operate probabilistically, predicting token distributions rather than enforcing binary invariants. In contrast, financial settlement requires absolute determinism. The 7-layer architecture achieves stability by strictly confining LLM reasoning to Layers 1 through 3. Layers 4 through 7 operate as deterministic, state-verifying state machines where transactions cannot execute without valid digital signatures and cryptographically verified inventory.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("The 7 Layers of Autonomous Commerce Architecture")}
    </div>
  `;
}
