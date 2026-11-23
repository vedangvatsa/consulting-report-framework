export function getSpread05(renderHeader, renderFooter) {
  return `
    <div class="spread">
      ${renderHeader("SYSTEM ARCHITECTURE", "THE 7 LAYERS OF AGENTIC COMMERCE", "05")}

      <div class="report-content" style="display: flex; gap: 28px; flex: 1;">
        <!-- Left Column: Narrative (48%) -->
        <div style="flex: 1.15; display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px;">
            <div class="section-kicker" style="font-size: 8px; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 2px;">Stack Specification</div>
            <h2 style="font-size: 17px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em; margin-bottom: 4px;">The 7 Layers of Autonomous Commerce Architecture</h2>
            <div style="font-size: 9.8px; line-height: 1.45; font-weight: 500; color: var(--ink); margin-bottom: 4px;">
              A full technical specification of the seven-layer architecture decoupling probabilistic language generation from deterministic financial settlement state machines.
            </div>
          </div>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Seven Core Architectural Layers (Jas Shah Model).</strong> As established by fintech analyst Jas Shah in Fintech Under the Hood (2025 [1]), complete agentic purchasing requires seven integrated layers. These progress from L1 (Consumer AI Frontends) through L2 (Reasoning and Orchestration Engines), L3 (Tool Execution and Context Protocols), L4 (Catalog and Context Synchronization), L5 (Checkout Session State Machines), L6 (Payment Rails and Token Vaults), to L7 (Post-Purchase Fulfillment and Returns). Each tier enforces specific boundaries between probabilistic language generation and deterministic transaction settlement.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The Six-Stage Transaction Pipeline (Visa Consulting & Analytics).</strong> In its framework analyzing the rise of machine-initiated spending, Visa Consulting & Analytics (2026 [2]) maps transactions across six technical gates, specifically intent capture, cart construction, agent identity validation, credential access, authentication, and liability routing. Visa notes that while 56% of consumers readily delegate product search and comparison, fewer than 40% permit automated credential access without explicit approval gates.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Separating Probabilistic Intent from Deterministic Settlement.</strong> A primary architectural failure mode occurs when LLM orchestration attempts to manipulate final checkout APIs directly without intermediate schema validation. Language models produce non-deterministic outputs that can hallucinate product stock, corrupt currency decimals, or omit tax calculations. To prevent financial corruption, Layer 3 context protocols enforce typed JSON schemas, converting conversational prompts into validated RPC payloads before reaching Layer 5 state machines.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>The 5-Tier Commercial Market Structure.</strong> Across the emerging software ecosystem, over forty enterprise platforms occupy distinct functional niches. Tier 1 encompasses conversational frontends (ChatGPT Search, Claude, Perplexity, Gemini Shopping). Tier 2 includes orchestration frameworks (CrewAI, LangGraph, AutoGen). Tier 3 contains specialized protocol libraries (Anthropic MCP, Google UCP, Stripe ACP, Coinbase AP2). Tier 4 comprises payment networks and card vaults (Visa TAP, Mastercard SPT, Lithic, Highnote, Marqeta). Tier 5 represents merchant commerce backends (Shopify, commercetools, BigCommerce).
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 6.5px;">
            <strong>Hardware-Attested Delegation Enclaves.</strong> Enterprise implementations require non-repudiable delegation. Modern architectures anchor agent execution within hardware enclaves (such as Apple Secure Enclave or Android StrongBox) and utilize WebAuthn and FIDO2 cryptographic credentials. Anchoring authorization in hardware ensures that an agent cannot forge transaction parameters, providing merchants and card issuers with cryptographic certainty regarding principal consent.
          </p>

          <p class="report-p" style="font-size: 9.6px; line-height: 1.5; margin-bottom: 7px;">
            <strong>Cryptographic Replay Resistance and State Synchronization.</strong> Every transaction payload moving between Layer 5 checkout engines and Layer 6 payment token vaults must contain cryptographic nonces, sub-millisecond timestamps, and merchant-specific public keys. These parameters prevent malicious intermediaries from intercepting and replaying authorization tokens against secondary merchant endpoints.
          </p>

          <div style="margin-top: auto; padding: 9px 12px; background: var(--paper-subtle); border-left: 3px solid var(--ink-heading); border-radius: 2px;">
            <div style="font-size: 7.8px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--ink-heading); margin-bottom: 2px;">Architectural Invariant</div>
            <div style="font-size: 8px; line-height: 1.4; color: var(--ink);">
              Probabilistic language models must never interface directly with financial settlement gateways. Layers 4 through 7 enforce deterministic schema validation and cryptographic authorization.
            </div>
          </div>
        </div>

        <!-- Right Column: Exhibits & Analytical Prose (52%) -->
        <div style="flex: 1.25; display: flex; flex-direction: column; gap: 9px;">
          <!-- Top SVG: 7-Layer Diagram -->
          <div class="exhibit-card" style="padding: 10px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">FIGURE 3.1 - THE 7-LAYER STACK AND EXECUTION DATA FLOW</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Seven-layer reference architecture bridging probabilistic models to deterministic settlement</div>
            </div>

            <svg viewBox="0 0 460 135" width="100%" height="135" style="display: block;">
              <!-- Left: 7 Layers Stack -->
              <g transform="translate(4, 2)">
                <rect x="0" y="0" width="202" height="15.5" rx="2" fill="#09090b"/>
                <text x="8" y="11" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L1. Consumer AI Front-End</text>
                <text x="194" y="11" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="end">ChatGPT, Claude, Gemini</text>

                <rect x="0" y="18" width="202" height="15.5" rx="2" fill="#18181b"/>
                <text x="8" y="29" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L2. Agent Orchestration</text>
                <text x="194" y="29" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="end">LangGraph, CrewAI, AutoGen</text>

                <rect x="0" y="36" width="202" height="15.5" rx="2" fill="#27272a"/>
                <text x="8" y="47" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L3. Context & Tool Protocol</text>
                <text x="194" y="47" font-family="Inter, sans-serif" font-size="5.8" fill="#a1a1aa" text-anchor="end">Model Context Protocol</text>

                <rect x="0" y="54" width="202" height="15.5" rx="2" fill="#3f3f46"/>
                <text x="8" y="65" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L4. Catalog Synchronization</text>
                <text x="194" y="65" font-family="Inter, sans-serif" font-size="5.8" fill="#d4d4d8" text-anchor="end">Schema.org JSON-LD Feeds</text>

                <rect x="0" y="72" width="202" height="15.5" rx="2" fill="#52525b"/>
                <text x="8" y="83" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L5. Checkout State Machine</text>
                <text x="194" y="83" font-family="Inter, sans-serif" font-size="5.8" fill="#d4d4d8" text-anchor="end">Stripe ACP, Google UCP</text>

                <rect x="0" y="90" width="202" height="15.5" rx="2" fill="#71717a"/>
                <text x="8" y="101" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#ffffff">L6. Token Rails & Settlement</text>
                <text x="194" y="101" font-family="Inter, sans-serif" font-size="5.8" fill="#ffffff" text-anchor="end">Visa TAP, AP2, x402</text>

                <rect x="0" y="108" width="202" height="15.5" rx="2" fill="#a1a1aa"/>
                <text x="8" y="119" font-family="Inter, sans-serif" font-size="6.5" font-weight="700" fill="#09090b">L7. Fulfillment & Identity</text>
                <text x="194" y="119" font-family="Inter, sans-serif" font-size="5.8" fill="#18181b" text-anchor="end">Okta CIAM, Shop Pay</text>
              </g>

              <!-- Right: Execution Flow Box -->
              <rect x="220" y="4" width="236" height="123" rx="3" fill="#ffffff" stroke="#e4e4e7" stroke-width="1"/>
              <text x="232" y="20" font-family="Inter, sans-serif" font-size="7.2" font-weight="700" fill="#09090b">END-TO-END EXECUTION FLOW</text>
              
              <circle cx="240" cy="39" r="6" fill="#f4f4f5" stroke="#27272a" stroke-width="1"/>
              <text x="240" y="42" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b" text-anchor="middle">1</text>
              <text x="252" y="37" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#27272a">Intent Ingestion (L1-L2)</text>
              <text x="252" y="47" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">User expresses shopping goal via conversational model</text>

              <circle cx="240" cy="69" r="6" fill="#f4f4f5" stroke="#27272a" stroke-width="1"/>
              <text x="240" y="72" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b" text-anchor="middle">2</text>
              <text x="252" y="67" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#27272a">Discovery & Protocol Context (L3-L4)</text>
              <text x="252" y="77" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">Agent queries MCP tools for live inventory and pricing</text>

              <circle cx="240" cy="99" r="6" fill="#f4f4f5" stroke="#27272a" stroke-width="1"/>
              <text x="240" y="102" font-family="Inter, sans-serif" font-size="6.2" font-weight="700" fill="#09090b" text-anchor="middle">3</text>
              <text x="252" y="97" font-family="Inter, sans-serif" font-size="6.8" font-weight="700" fill="#27272a">Settlement & Attestation (L5-L7)</text>
              <text x="252" y="107" font-family="Inter, sans-serif" font-size="5.8" fill="#71717a">Non-human identity verified; single-use token settles</text>
            </svg>
          </div>

          <!-- Middle: 5-Tier Market Map -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 5px;">
              <div class="exhibit-title" style="font-size: 9px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">EXHIBIT 3.1 - THE 5-TIER AGENTIC COMMERCE MARKET MAP</div>
              <div class="exhibit-subtitle" style="font-size: 7.6px; color: var(--ink-secondary);">Directory of live infrastructure, protocols, payment rails, and enterprise vendors</div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 4.5px; font-size: 7.3px;">
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIER 1 - CONSUMER AI FRONTENDS & DEMAND AGGREGATION</span><br/>
                <span style="color: var(--ink-secondary);">ChatGPT Search, Claude Artifacts, Gemini Shopping, Perplexity Buy with Pro, Sierra AI, Rufus</span>
              </div>
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIER 2 - AGENT PROTOCOLS & ORCHESTRATION FRAMEWORKS</span><br/>
                <span style="color: var(--ink-secondary);">Anthropic MCP, Google UCP, Stripe ACP, Coinbase AP2, LangGraph, CrewAI, AutoGen</span>
              </div>
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIER 3 - PAYMENT RAILS, TOKEN VAULTS & VIRTUAL CARDS</span><br/>
                <span style="color: var(--ink-secondary);">Visa TAP, Mastercard SPT, Lithic, Highnote, Marqeta, Adyen, Stripe Issuing, Skyfire, Payman</span>
              </div>
              <div style="background: #ffffff; border: 1px solid var(--border); border-radius: 3px; padding: 4px 7px;">
                <span style="font-weight: 700; color: var(--ink-heading);">TIERS 4 & 5 - MERCHANT ENGINES & CRYPTOGRAPHIC ENCLAVES</span><br/>
                <span style="color: var(--ink-secondary);">Shopify Shop Pay, commercetools, BigCommerce, Okta AI CIAM, Apple Secure Enclave, WebAuthn</span>
              </div>
            </div>

            <div class="exhibit-source-note" style="margin-top: 4px;">
              Reference Sources Jas Shah (2025); Visa Consulting & Analytics (2026); Okta Customer Identity Trends (2026).
            </div>
          </div>

          <!-- Bottom: Analytical Card -->
          <div class="exhibit-card" style="padding: 9px 12px; background: var(--paper-card); border: 1px solid var(--border); border-radius: 4px;">
            <div class="exhibit-header" style="margin-bottom: 4px;">
              <div class="exhibit-title" style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); text-transform: uppercase; letter-spacing: 0.04em;">TECHNICAL COMMENTARY - SEPARATION OF INTENT AND EXECUTION</div>
            </div>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Language models operate probabilistically, predicting token distributions rather than enforcing binary invariants. In contrast, financial settlement requires absolute determinism. The 7-layer architecture achieves stability by strictly confining LLM reasoning to Layers 1 through 3.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 4px;">
              Layers 4 through 7 operate as deterministic, state-verifying state machines where transactions cannot execute without valid digital signatures, cryptographic hashes, and verified inventory locks.
            </p>
            <p style="font-size: 7.8px; line-height: 1.44; color: var(--ink); margin-bottom: 0;">
              By decoupling conversational frontends from ledger execution, merchants isolate their financial systems from prompt injections, hallucinations, and non-deterministic agent behavior.
            </p>
          </div>
        </div>
      </div>

      ${renderFooter("The 7 Layers of Autonomous Commerce Architecture")}
    </div>
  `;
}
