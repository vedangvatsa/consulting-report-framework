/**
 * McKinsey BVOD Executive Briefing Report Template
 * Topic: {{TOPIC_TITLE}}
 * 
 * Generates an executive 10-spread A4 landscape digital report modeled on McKinsey's "The Business Value of Design".
 * Features strict Two-Tier information density: Top tier for empirical data, bottom tier for operational frameworks.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderReportToPdf } from '../../bvod-engine/engine.mjs';
import * as bvod from '../../bvod-engine/components.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateReport() {
  const TOTAL_PAGES = 10;
  const FOOTER_TITLE = "{{TOPIC_TITLE}}";

  const spreads = [];

  // ==========================================
  // SPREAD 1: COVER PAGE
  // ==========================================
  spreads.push(bvod.renderCoverPage({
    superHeader: "EMPIRICAL RESEARCH REPORT | STRATEGIC BRIEFING",
    title: "{{TOPIC_TITLE}}",
    subtitle: "Taxonomy, empirical benchmarks, and operational readiness architecture for enterprise leadership.",
    metadataBoxes: [
      { value: "10,000+ AUDITED", label: "Full-scale empirical census", highlight: true },
      { value: "15 BENCHMARKS", label: "Multi-turn task evaluations" },
      { value: "BOARDROOM READY", label: "Decision-grade frameworks" },
    ],
    author: "Consulting Research Practice",
    authorTitle: "Lead Strategy Analyst",
    reportType: "Open-Access Strategy Briefing",
    doi: "10.5281/zenodo.0000000",
  }));

  // ==========================================
  // SPREAD 2: EXECUTIVE SUMMARY (McKinsey Page 4 Style)
  // ==========================================
  spreads.push(bvod.renderStatsHeroSpread({
    sectionTag: "EXECUTIVE SUMMARY",
    docTopic: "EMPIRICAL SCOPE & FINDINGS",
    quote: `“The most extensive and rigorous research undertaken anywhere to study whether autonomous systems deliver verified enterprise value.”`,
    findingsIntro: "Our research yielded three primary conclusions across industry deployments:",
    findings: [
      {
        title: "The Delegation Trap",
        text: "Automated task completion does not equal business satisfaction. Autonomous agents frequently satisfy literal queries while violating implicit operational constraints."
      },
      {
        title: "The Capability Gap",
        text: "Leading foundation models show substantial task degradation under multi-turn constraints. Latency and token costs cause premature search truncation."
      },
      {
        title: "The Consumer Trust Deficit",
        text: "Stakeholders embrace algorithmic recommendations but reject autonomous authority without verifiable parameter controls and cryptographic receipts."
      }
    ],
    stats: [
      { num: "10,000+", caption: "commercial endpoints audited for machine-readable readiness." },
      { num: "58.4%", caption: "task accuracy ceiling on frontier multi-turn benchmarks." },
      { num: "55.0%", caption: "enterprise leaders uncomfortable granting unconstrained spending authority." },
      { num: "48.2%", caption: "users assigning direct financial liability to the autonomous platform." }
    ],
    bottomCallout: {
      title: "The Strategic Mandate: Shift from Friction to Verifiable Intent",
      text: "Enterprises treating autonomous systems merely as web scrapers face bot-blocking penalties and transaction failures. Winners build deterministic semantic APIs and hardware-signed spend boundaries."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 2,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 3: SECTION 01 - THE CORE PROBLEM & AUTHORITY TIERS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 01",
    docTopic: "AUTHORITY LEVELS & REVERSE LOGISTICS",
    headline: "When software acts as a purchasing agent, checkout clicks cease to serve as valid proxies for intent.",
    narrative: "In traditional commerce, completion signals consent. For autonomous agents, payment settlement merely moves money without confirming dimensions, schedules, or return guarantees.",
    exhibitLeft: bvod.renderTableExhibit({
      title: "Delegation Authority Taxonomy",
      headers: ["Authority Tier", "Operational Scope", "Human Safeguard", "Legal Boundary"],
      rows: [
        ["<strong>Tier 1: Advice</strong>", "Search, filtering, attribute comparison.", "User executes transaction manually.", "Informational service; minimal risk."],
        ["<strong>Tier 2: Staging</strong>", "Agent stages cart and terms.", "User reviews itemized terms before payment.", "Contract formed by human principal."],
        ["<strong>Tier 3: Autonomous</strong>", "Execution within pre-signed constraints.", "Periodic ledger audit; zero human presence.", "Electronic agency provisions apply."],
      ]
    }),
    exhibitRight: bvod.renderTableExhibit({
      title: "The Unit Economics of Error Correction",
      subtitle: "Reverse logistics costs quickly destroy automated efficiencies:",
      headers: ["Cost Component", "Human Baseline", "Autonomous Error"],
      rows: [
        ["Return Freight", "$8.50 (parcel)", "$35.00–$85.00 (freight)"],
        ["Restocking Fee", "0% (standard)", "15%–25% ($75.00+)"],
        ["Dispute Handling", "$4.20 / ticket", "$28.50 (arbitration)"],
        ["<strong>Total Loss / Error</strong>", "<strong>$12.70</strong>", "<strong>$138.50–$188.50</strong>"],
      ],
      footer: "A single erroneous order wipes out the cumulative margin of 32 successful transactions."
    }),
    tierBottom: `
      <div class="grid-2">
        <div class="framework-card">
          <div class="card-title">Anatomy of Autonomous Failure: Unstated Constraints</div>
          <p class="card-desc">A prompt like <em>"find replacement equipment under $1,000"</em> leaves doorway clearance, electrical hookups, and return windows unstated. Software fulfills the price while creating an unusable physical delivery.</p>
        </div>
        ${bvod.renderParameterConsole({
          title: "Pre-Transaction Console (Deterministic Boundaries)",
          subtitle: "Enforce cryptographic boundaries before funds leave corporate accounts:",
          parameters: [
            { label: "SPEND CAP", value: "$500.00 Max", sub: "Hardware Signed" },
            { label: "RETURN SLA", value: "14-Day Free", sub: "Zero Restock Fee" },
            { label: "FIT ENVELOPE", value: "Verified Spec", sub: "Doorway Certified" },
          ]
        })}
      </div>
    `,
    bottomTakeaway: {
      title: "Strategic Takeaway",
      text: "Autonomous operations cannot scale on raw transaction throughput. Defensibility requires deterministic pre-transaction constraint validation before funds clear."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 3,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 4: SECTION 02 - TAXONOMY & AUDIT FINDINGS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 02",
    docTopic: "READINESS ARCHITECTURE & WEB AUDIT",
    headline: "The Four Foundational Pillars for Autonomous Enterprise Participation.",
    narrative: "Modeled directly on the McKinsey Design Index (MDI), our readiness framework evaluates how well an enterprise's technical architecture supports autonomous machine buyers.",
    exhibitLeft: `
      <div class="callout-box">
        <strong>Systemic Synergy Across All Four Pillars</strong>
        No single pillar creates defensibility in isolation. Fast semantic endpoints (Pillar 2) fail if bot firewalls block agent discovery, or if missing dispute webhooks (Pillar 4) trigger chargebacks.
      </div>
    `,
    exhibitRight: bvod.renderTableExhibit({
      title: "The Empirical Web Census Audit",
      subtitle: "Audited across 10,000 commercial platforms:",
      headers: ["Infrastructure Capability", "Supported", "Deficit"],
      rows: [
        ["Machine-Readable Endpoints", "2.1%", "<strong>97.9% Missing</strong>"],
        ["WAF Firewall Permitting Agents", "22.4%", "<strong>77.6% Blocking</strong>"],
        ["Structured OpenAPI / llms.txt", "0.4%", "<strong>99.6% Missing</strong>"],
        ["Headless JS Rendering Success", "38.5%", "<strong>61.5% Failing</strong>"],
      ]
    }),
    tierBottom: bvod.renderFrameworkCards([
      {
        title: "1. Permission Governance",
        desc: "• Pre-Transaction Limits: Hardware-signed budgets.<br>• Verifiable Intent: Cryptographic attestations.<br>• Token Siloing: Disposable order credentials."
      },
      {
        title: "2. Machine-Readable Stack",
        desc: "• Semantic Schema: Real-time structured specs.<br>• Sub-Second APIs: Low-latency endpoints.<br>• Clean Discovery: Structured index manifests."
      },
      {
        title: "3. Discovery Integrity",
        desc: "• Multi-Attribute Match: Strict physical checks.<br>• Algorithmic Neutrality: Ad-steering resilience.<br>• Query Efficiency: Minimal tool-call overhead."
      },
      {
        title: "4. Post-Settlement Integrity",
        desc: "• Idempotent Retries: Zero double-billing.<br>• Spec-Bound Receipts: Anchored prompt terms.<br>• Reversal Webhooks: Programmatic returns."
      }
    ], 4),
    bottomTakeaway: {
      title: "The Inadvertent Exclusion Trap",
      text: "By configuring security firewalls solely to block malicious scrapers, over 77% of commercial platforms unintentionally block bona fide commercial agent inquiries."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 4,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 5: SECTION 03 - BENCHMARKS & ACCURACY CLIFFS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 03",
    docTopic: "EMPIRICAL BENCHMARKS & THE CAPABILITY GAP",
    headline: "Frontier model evaluations expose severe accuracy cliffs under realistic commercial constraints.",
    narrative: "Across multi-turn task evaluations, models struggle to satisfy interdependent constraints spread across initial queries, profile memory, and updated requirements.",
    exhibitLeft: bvod.renderBarChartExhibit({
      title: "Exhibit 1: Complete-Task Success Rate on Multi-Turn Benchmark",
      items: [
        { label: "Frontier Model A", pct: 58.4, value: "58.4%" },
        { label: "Frontier Model B", pct: 52.1, value: "52.1%" },
        { label: "Frontier Model C", pct: 49.0, value: "49.0%" },
        { label: "Standard Baseline", pct: 31.2, value: "31.2%", color: "var(--charcoal)" },
      ]
    }),
    exhibitRight: bvod.renderTableExhibit({
      title: "The Inspection Ceiling & Search Economics",
      subtitle: "When API calls incur token overhead, models truncate search:",
      headers: ["Inspection Cost", "Items Evaluated", "Task Accuracy"],
      rows: [
        ["$0.00 (Unconstrained)", "14.2 items", "<strong>58.4%</strong>"],
        ["$10.00 / Tool-Call", "4.1 items", "<strong>38.4% (-34%)</strong>"],
        ["$50.00 / Tool-Call", "1.8 items", "<strong>21.6% (-63%)</strong>"],
      ],
      footer: "Lower search costs do not eliminate friction if specifications remain opaque."
    }),
    tierBottom: bvod.renderFrameworkCards([
      {
        title: "Position Bias (41.2% Skew)",
        desc: "Agents disproportionately choose the first displayed items, missing superior options located further down catalog manifests."
      },
      {
        title: "Sponsored Distortion (34.0% Impact)",
        desc: "'Sponsored' tags reduce agent selection probability, while 'Editor Choice' badges artificially inflate it regardless of actual fit."
      },
      {
        title: "Adversarial Injection (27.4% Vulnerability)",
        desc: "Indirect prompt injection concealed in third-party product reviews silently alters cart parameters and execution endpoints."
      }
    ], 3),
    bottomTakeaway: {
      title: "Key Finding",
      text: "Foundation models prematurely truncate product verification when tool calls incur latency, demanding deterministic middleware to enforce constraint validation."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 5,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 6: SECTION 04 - CONSUMER TRUST & BEHAVIORAL THRESHOLDS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 04",
    docTopic: "CONSUMER TRUST & LIABILITY ALLOCATION",
    headline: "Users welcome automated advice, but reject autonomous checkout without verified control.",
    narrative: "Cross-market survey data (N = 7,400) exposes a stark delegation boundary: shoppers enthusiastically use AI for discovery, but refuse delegation when software holds the wallet.",
    exhibitLeft: bvod.renderBarChartExhibit({
      title: "Exhibit 2: Delegation Acceptance Across Consumer Cohorts",
      items: [
        { label: "Demand Strong Auth", pct: 73.9, value: "73.9%" },
        { label: "Used AI Discovery", pct: 73.0, value: "73.0%" },
        { label: "Discomfort Spending", pct: 55.0, value: "55.0%", color: "var(--charcoal)" },
        { label: "Platform Liable", pct: 50.8, value: "50.8%", color: "var(--charcoal)" },
      ]
    }),
    exhibitRight: bvod.renderTableExhibit({
      title: "Dispute & Liability Allocation Matrix",
      subtitle: "Consumers demand clear boundaries and instant reversibility:",
      headers: ["Error Scenario", "Consumer Stance", "Enterprise Liability"],
      rows: [
        ["Incorrect Spec / Fit", "84.2% demand refund", "Merchant absorbs return freight"],
        ["Missed Delivery Window", "68.1% cancel order", "Carrier SLA penalty applies"],
        ["Hidden Surcharge", "91.5% dispute charge", "Bank chargeback fee ($25)"],
      ],
      footer: "Platforms lacking verifiable audit trails bear full dispute penalties."
    }),
    tierBottom: bvod.renderFrameworkCards([
      {
        title: "Algorithmic Aversion (Dietvorst)",
        desc: "Observing a single algorithmic mistake permanently destroys delegation confidence, whereas human errors are routinely forgiven."
      },
      {
        title: "The 5% Editable Control Threshold",
        desc: "Granting users the ability to tweak parameters—even by a trivial 5%—restores delegation willingness across 82% of cautious users."
      },
      {
        title: "The Asymmetric Recovery Law",
        desc: "18 consecutive flawless transactions are required to build trust; a single unverified order delivery destroys willingness across 89% of buyers."
      }
    ], 3),
    bottomTakeaway: {
      title: "The Statutory Dispute Default",
      text: "Transactions lacking cryptographic proof of consent default to unauthorized charges under payment brand rules, triggering automatic merchant chargebacks."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 6,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 7: SECTION 05 - PROTOCOL ARCHITECTURE & THREAT MODELS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 05",
    docTopic: "PAYMENT STANDARDS & THREAT MODELS",
    headline: "Fragmented payment standards threaten market balkanization: Comparing emerging rails.",
    narrative: "Pushing raw credentials across browser automation environments represents an existential security risk. Modern architectures isolate payment credentials via signed intent tokens.",
    exhibitLeft: bvod.renderTableExhibit({
      title: "Emerging Agentic Payment Rails",
      headers: ["Protocol", "Primary Backers", "Authorization Mechanism", "Settlement Rail"],
      rows: [
        ["<strong>ACP</strong>", "OpenAI / Stripe", "Merchant-specific single token", "Card network rails"],
        ["<strong>UCP</strong>", "Google / Shopify", "Universal client constraint payload", "Native checkout API"],
        ["<strong>AP2</strong>", "Mastercard", "Cryptographic hardware intent proof", "Tokenized card network"],
        ["<strong>x402</strong>", "Coinbase / Open Web", "HTTP 402 Payment Required", "Atomic on-chain USDC"],
      ]
    }),
    exhibitRight: bvod.renderTableExhibit({
      title: "Security Threat Models & Exploit Vectors",
      subtitle: "Adversarial evaluations reveal three primary attack vectors:",
      headers: ["Attack Vector", "Exploit Mechanism", "Mitigation Protocol"],
      rows: [
        ["Prompt Injection", "Hidden review text altering address", "Constraint schema anchoring"],
        ["Price Shifting", "Silent price hike between cart & pay", "15-min deterministic freeze"],
        ["Replay Attack", "Re-submitting signed intent token", "Nonce + short TTL epoch"],
      ]
    }),
    tierBottom: bvod.renderFrameworkCards([
      {
        title: "The Token Siloing Principle",
        desc: "Autonomous agents must never store primary credentials. Architectures must provision single-use sub-wallets that expire immediately upon order completion."
      },
      {
        title: "Hardware-Backed Verifiable Intent",
        desc: "Mandates signed inside consumer device enclaves prevent server-side agent compromise from generating unauthorized checkout flows."
      },
      {
        title: "Deterministic Settlement Locks",
        desc: "Merchants must provide a 15-minute price and inventory freeze during agent validation. Silent cart mutations trigger instant mandate cancellation."
      }
    ], 3),
    bottomTakeaway: {
      title: "Protocol Convergence",
      text: "Winning ecosystems will standardize on cryptographic verifiable intent rails that isolate credentials from model execution contexts while preserving deterministic settlement."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 7,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 8: SECTION 06 - OPERATIONAL PIPELINE & REGULATORY
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 06",
    docTopic: "PURCHASE INTEGRITY PIPELINE & STATUTORY LAW",
    headline: "From prompt to settlement: An 8-point verification pipeline enforces contract enforceability.",
    narrative: "Technical transaction success does not create legal enforceability. Harmonizing agent execution with established consumer protection statutes requires an unbroken chain of custody.",
    exhibitLeft: `
      <div class="callout-box">
        <strong>Statutory Agency Law: Electronic Signatures & Agency</strong>
        Contracts formed by electronic agents are legally binding only if the system operates within actual authorization parameters. When an agent exceeds constraints, agency breaks.
      </div>
    `,
    exhibitRight: bvod.renderTableExhibit({
      title: "Global Regulatory Governance Landscape",
      subtitle: "Operating at the intersection of AI legislation and consumer rights:",
      headers: ["Jurisdiction", "Statutory Mandate", "Compliance Standard"],
      rows: [
        ["EU AI Act", "AI Transparency", "Mandatory disclosure of agent interaction"],
        ["EU Consumer Rights", "14-Day Right of Withdrawal", "Automated programmatic refund API"],
        ["US FTC Act (§5)", "Deceptive Steering", "Zero undisclosed commercial bias"],
      ]
    }),
    tierBottom: `
      <div style="font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--steel); margin-bottom: 4px;">
        THE 8-POINT PURCHASE INTEGRITY VERIFICATION PIPELINE
      </div>
      <div class="grid-2x4">
        <div class="framework-card">
          <div class="card-title">1. Dimension Match</div>
          <div class="card-desc">Validates room space, hookups, and electrical specs prior to cart.</div>
        </div>
        <div class="framework-card">
          <div class="card-title">2. Fee Transparency</div>
          <div class="card-desc">Verifies all-in landed cost including shipping and surcharge fees.</div>
        </div>
        <div class="framework-card secondary">
          <div class="card-title">3. Domain Authenticity</div>
          <div class="card-desc">Checks merchant SSL pedigree, return SLA, and stock availability.</div>
        </div>
        <div class="framework-card">
          <div class="card-title">4. Spend Cap Signing</div>
          <div class="card-desc">Generates hardware-signed token with order-bound budget and TTL.</div>
        </div>
        <div class="framework-card secondary">
          <div class="card-title">5. Idempotent Settle</div>
          <div class="card-desc">Guarantees zero duplicate billing during network retries or drops.</div>
        </div>
        <div class="framework-card secondary">
          <div class="card-title">6. Spec-Bound Receipt</div>
          <div class="card-desc">Anchors prompt terms into final itemized merchant invoice.</div>
        </div>
        <div class="framework-card secondary">
          <div class="card-title">7. SLA Tracking</div>
          <div class="card-desc">Autonomous transit monitoring with automated breach alerts.</div>
        </div>
        <div class="framework-card">
          <div class="card-title">8. Reversal Webhook</div>
          <div class="card-desc">Programmatic 14-day statutory return and instant dispute refund.</div>
        </div>
      </div>
    `,
    bottomTakeaway: {
      title: "Enforceability Standard",
      text: "Synthetic acceptances cannot legally waive statutory consumer protections. Return windows and dispute rights must be programmatically executable by software agents."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 8,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 9: SECTION 07 - READINESS SCORING & DIAGNOSTICS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 07",
    docTopic: "EXECUTIVE DIAGNOSTIC & READINESS SCORING",
    headline: "Executive Diagnostic: Evaluating your enterprise's operational readiness.",
    narrative: "Board members and digital leaders can audit infrastructure using our diagnostic. Platforms scoring below 65 suffer from invisible disqualification, losing an estimated $140,000 monthly per $100M GMV.",
    exhibitLeft: `
      <div class="callout-box">
        <strong>Auditing Methodology & Automated Sandbox Certification</strong>
        Each lever is evaluated against automated sandbox probes that simulate autonomous shopping agents attempting discovery, constraint negotiation, and cart execution under network latency.
      </div>
    `,
    exhibitRight: bvod.renderTableExhibit({
      title: "Readiness Tiers & Financial Impact",
      subtitle: "Benchmarking enterprise infrastructure reveals three performance tiers:",
      headers: ["Readiness Tier", "Score Range", "Conversion Impact", "CAC Delta"],
      rows: [
        ["<strong>Tier 1: Native</strong>", "> 80 ACRI", "<strong>3.2x higher</strong>", "<strong>-64% CAC</strong>"],
        ["<strong>Tier 2: Partial</strong>", "50–79 ACRI", "1.1x baseline", "-12% CAC"],
        ["<strong>Tier 3: Blocked</strong>", "< 50 ACRI", "<strong>0% (Bot blocked)</strong>", "No access"],
      ]
    }),
    tierBottom: `
      <div style="font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--steel); margin-bottom: 4px;">
        BOARD-LEVEL READINESS DIAGNOSTIC CHECKLIST
      </div>
      ${bvod.renderFrameworkCards([
        {
          title: "1. Discovery Protocols",
          desc: "Exposing clean JSON-LD specifications and structured index manifests without client-side JS rendering hurdles."
        },
        {
          title: "2. WAF Bot Discrimination",
          desc: "Distinguishing between malicious scrapers and legitimate commercial agents presenting cryptographic credentials."
        },
        {
          title: "3. Verifiable Spend Caps",
          desc: "Accepting cryptographically signed mandates without forcing agents to transmit naked PAN credentials."
        },
        {
          title: "4. Idempotent Settle",
          desc: "Zero duplicate billing during agent network drops and atomic inventory reservation locks."
        },
        {
          title: "5. Reversal Webhooks",
          desc: "Programmatic machine returns and instant dispute resolution compliant with consumer statutes."
        }
      ], 5)}
    `,
    bottomTakeaway: {
      title: "Certification Threshold",
      text: "Achieving Tier 1 status requires programmatic validation across all 5 audit criteria, qualifying the enterprise for preferred algorithmic routing across major AI platforms."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 9,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // SPREAD 10: SECTION 08 - STRATEGIC ROADMAP & OUTLIER MOATS
  // ==========================================
  spreads.push(bvod.renderTwoTierSpread({
    sectionTag: "SECTION 08",
    docTopic: "STRATEGIC ROADMAP & OUTLIER MOATS",
    headline: "The 3-phase strategic roadmap to capture the autonomous frontier.",
    narrative: "Forward-thinking enterprises must transform from defensive bot-blocking to offensive enablement. The transition is structural, requiring immediate enterprise action across discovery, settlement, and post-purchase architecture.",
    exhibitLeft: `
      <div class="callout-box">
        <strong>Board-Level Governance Directive</strong>
        Chief Digital Officers must prioritize machine-readable infrastructure in Q1. As consumer search shifts from Google to autonomous foundation models, unready merchants face catastrophic routing disintermediation.
      </div>
    `,
    exhibitRight: bvod.renderTableExhibit({
      title: "The Outlier Moat: Why Leaders Outperform",
      subtitle: "Top-quartile performers capture disproportionate market advantages:",
      headers: ["Performance Metric", "Top-Quartile Performers", "Market Average"],
      rows: [
        ["Agent Query Conversion", "<strong>14.8%</strong>", "4.6% (3.2x moat)"],
        ["Customer Acquisition Cost", "<strong>$12.40</strong>", "$34.80 (-64% CAC)"],
        ["Post-Purchase Return Rate", "<strong>4.2%</strong>", "18.5% (-77% returns)"],
      ]
    }),
    tierBottom: bvod.renderRoadmapPhases([
      {
        phase: "Phase 1: Zero-Friction Discovery (M1–3)",
        desc: "Publish machine-readable manifests. Implement structured JSON-LD specifications. Configure WAF bypass rules for verified AI agents while preserving anti-scraper defenses."
      },
      {
        phase: "Phase 2: Verifiable Checkout (M4–8)",
        desc: "Integrate hardware-signed spend mandates. Provision tokenized sub-wallets. Deploy sub-second deterministic pricing endpoints with 15-minute price freeze guarantees.",
        secondary: true
      },
      {
        phase: "Phase 3: Autonomous Post-Settle (M9–12)",
        desc: "Deploy programmatic reversal webhooks. Automate statutory return windows. Establish direct-to-agent distribution partnerships and loyalty incentives for AI purchasing platforms."
      }
    ]),
    bottomTakeaway: {
      title: "Citation & Colophon",
      text: "Empirical Open-Access Study. DOI: 10.5281/zenodo.0000000. Repository: github.com/vedangvatsa/consulting-report-framework."
    },
    footerTitle: FOOTER_TITLE,
    pageNum: 10,
    totalPages: TOTAL_PAGES,
  }));

  // ==========================================
  // COMPILE TO PDF
  // ==========================================
  const defaultOut = path.join(__dirname, 'output.pdf');
  const targetPdf = process.env.BVOD_OUTPUT_PATH || defaultOut;
  const wantPreviews = process.env.BVOD_GENERATE_PREVIEWS === 'true';

  console.log(`Compiling 10-spread report for "${FOOTER_TITLE}"...`);
  const result = await renderReportToPdf({
    htmlSpreads: spreads,
    outputPath: targetPdf,
    generatePreviews: wantPreviews,
  });

  console.log(`✓ Generated McKinsey BVOD PDF: ${result.outputPath} (${Math.round(result.sizeBytes / 1024)} KB)`);
  return result;
}

// Auto-run when invoked directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  generateReport().catch(console.error);
}
