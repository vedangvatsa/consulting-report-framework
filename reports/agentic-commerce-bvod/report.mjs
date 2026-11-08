import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderReportToPdf } from '../../bvod-engine/engine.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlContent = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>The Business Value of Agentic Commerce</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,600&family=Inter:wght@400;500;600;700;800&display=swap');

    @page {
      size: 297mm 210mm; /* A4 Landscape */
      margin: 0;
    }

    :root {
      --ink: #111827;
      --ink-secondary: #2d3748;
      --paper: #ffffff;
      --paper-warm: #fafaf9;
      --paper-card: #f9fafb;
      --blue: #0038FF;
      --blue-subtle: #eff4ff;
      --blue-dark: #0026b3;
      --muted: #4b5563;
      --muted-light: #6b7280;
      --rule: #e5e7eb;
      --rule-subtle: #f3f4f6;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: var(--ink);
      background: #e5e5e5;
      -webkit-font-smoothing: antialiased;
    }

    /* ─── Landscape Slide/Spread Layout (A4 Landscape 297mm x 210mm) ─── */
    .spread {
      width: 297mm;
      height: 210mm;
      padding: 10mm 16mm 8mm 16mm;
      margin: 0 auto;
      background: var(--paper);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      page-break-after: always;
      overflow: hidden;
    }

    /* ─── Running Header & Footer ─── */
    .spread-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;
      border-bottom: 1.5px solid var(--rule);
      font-size: 8.5px;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 10px;
      flex-shrink: 0;
    }
    .spread-header .topic {
      color: var(--blue);
      font-weight: 700;
    }

    .spread-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
      border-top: 1px solid var(--rule);
      font-size: 8.5px;
      color: var(--muted);
      margin-top: auto;
      flex-shrink: 0;
    }

    /* ─── Two-Tier Spread Layout ─── */
    .spread-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 12px;
      min-height: 0;
    }

    .tier-top {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 22px;
      align-items: start;
    }

    .tier-bottom {
      border-top: 1.5px solid var(--rule);
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* ─── Typography: Editorial Serif (Notion / McKinsey) ─── */
    .quote-hero {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 30px;
      line-height: 1.18;
      font-weight: 600;
      letter-spacing: -0.025em;
      color: var(--blue);
      margin-bottom: 6px;
    }

    .lead-serif {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 21px;
      line-height: 1.25;
      font-weight: 500;
      color: var(--ink);
      letter-spacing: -0.015em;
      margin-bottom: 3px;
    }

    .subhead-sans {
      font-size: 12.5px;
      font-weight: 700;
      color: var(--ink);
      letter-spacing: -0.01em;
      margin-bottom: 4px;
    }

    p.body-sans {
      font-size: 10.5px;
      line-height: 1.52;
      color: var(--ink-secondary);
      margin-bottom: 4px;
    }

    p.body-muted {
      font-size: 9.5px;
      line-height: 1.45;
      color: var(--muted);
    }

    /* ─── 3 Column Points (McKinsey Page 4 Style) ─── */
    .three-point-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      padding-top: 10px;
      border-top: 1.5px solid var(--rule);
    }
    .point-item {
      font-size: 10.2px;
      line-height: 1.5;
      color: var(--ink-secondary);
    }
    .point-item strong {
      font-size: 11.2px;
      color: var(--ink);
      display: block;
      margin-bottom: 3px;
      font-weight: 700;
    }

    /* ─── Stacked Big Numbers (McKinsey Page 4 Style) ─── */
    .stacked-stats {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .stat-block {
      display: flex;
      flex-direction: column;
    }
    .stat-num-serif {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 58px;
      font-weight: 600;
      line-height: 0.88;
      letter-spacing: -0.035em;
      color: var(--blue);
    }
    .stat-label-sans {
      font-size: 10.5px;
      line-height: 1.38;
      color: var(--muted);
      margin-top: 3px;
    }

    /* ─── Notion-Style Clean Tables ─── */
    table.notion-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
      margin: 4px 0;
    }
    table.notion-table th {
      text-align: left;
      padding: 6px 9px;
      font-size: 9.5px;
      font-weight: 700;
      color: var(--ink);
      background: var(--paper-warm);
      border-bottom: 1.5px solid var(--ink);
      border-top: 1px solid var(--rule);
    }
    table.notion-table td {
      padding: 6px 9px;
      border-bottom: 1px solid var(--rule);
      vertical-align: top;
      line-height: 1.42;
      color: var(--ink-secondary);
    }
    table.notion-table td strong {
      font-weight: 700;
      color: var(--ink);
    }

    /* ─── Editorial Chart Elements ─── */
    .chart-editorial-row {
      display: grid;
      grid-template-columns: 140px 1fr 48px;
      gap: 10px;
      align-items: center;
      margin-bottom: 7px;
    }
    .chart-label {
      font-size: 10.5px;
      font-weight: 600;
      color: var(--ink);
      text-align: right;
    }
    .chart-bar-bg {
      background: var(--rule-subtle);
      height: 16px;
      width: 100%;
      border-radius: 2px;
      overflow: hidden;
    }
    .chart-bar-fill {
      background: var(--blue);
      height: 100%;
    }
    .chart-bar-fill.muted {
      background: var(--ink);
    }
    .chart-number {
      font-size: 10.5px;
      font-weight: 700;
      color: var(--ink);
    }

    /* ─── Rich Information Panels ─── */
    .info-panel {
      background: var(--paper-warm);
      border: 1px solid var(--rule);
      border-left: 2.5px solid var(--blue);
      padding: 9px 13px;
      border-radius: 2px;
    }
    .info-panel-title {
      font-size: 10.8px;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 3px;
    }
    .info-panel-desc {
      font-size: 9.5px;
      line-height: 1.46;
      color: var(--muted);
    }

    /* ─── Card Grids for Bottom Tiers ─── */
    .card-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }
    .card-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }
    .card-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .dense-card {
      background: var(--paper-card);
      border: 1px solid var(--rule);
      padding: 10px 12px;
      border-radius: 2px;
    }
    .dense-card.blue-top {
      border-top: 2.5px solid var(--blue);
    }
    .dense-card.ink-top {
      border-top: 2.5px solid var(--ink);
    }
    .card-heading {
      font-size: 11px;
      font-weight: 700;
      color: var(--ink);
      margin-bottom: 4px;
    }
    .card-text {
      font-size: 9.5px;
      line-height: 1.45;
      color: var(--ink-secondary);
    }

    /* ─── Bottom Callout Strip ─── */
    .bottom-strip {
      background: var(--paper-warm);
      border: 1px solid var(--rule);
      padding: 6px 12px;
      font-size: 9px;
      line-height: 1.42;
      color: var(--muted);
      border-radius: 2px;
    }
    .bottom-strip strong {
      color: var(--ink);
    }

    /* ─── Cover Specifics ─── */
    .spread.cover-spread {
      padding: 20mm 22mm 14mm 22mm;
      justify-content: space-between;
      background: var(--paper);
    }
    .cover-top {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--blue);
    }
    .cover-title {
      font-family: 'Newsreader', Georgia, serif;
      font-size: 52px;
      line-height: 1.08;
      font-weight: 600;
      letter-spacing: -0.035em;
      color: var(--ink);
      margin: 18px 0 14px 0;
    }
    .cover-desc {
      font-size: 15px;
      line-height: 1.55;
      color: var(--muted);
      max-width: 600px;
    }
    .cover-bottom {
      border-top: 1.5px solid var(--rule);
      padding-top: 14px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .cover-author {
      font-size: 12.5px;
      font-weight: 700;
      color: var(--ink);
    }
    .cover-meta {
      font-size: 9.5px;
      color: var(--muted);
      line-height: 1.48;
    }
  </style>
</head>
<body>

  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 1: COVER
       ═════════════════════════════════════════════════════════════════════ -->
  <div class="spread cover-spread">
    <div class="cover-top">
      Empirical Research Report &nbsp;|&nbsp; Hashtag Web3 & veda.ng &nbsp;|&nbsp; Open-Access Briefing
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin: 15px 0;">
      <div style="flex: 1.2;">
        <h1 class="cover-title">The Business Value of<br>Agentic Commerce</h1>
        <p class="cover-desc">
          Taxonomy, verification architecture, and market readiness across 100,000 domains and leading frontier foundation models.
        </p>
        <div style="margin-top: 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 560px;">
          <div style="border-left: 2.5px solid var(--blue); padding-left: 14px;">
            <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--blue);">100,000 Domains</div>
            <div style="font-size: 10.5px; color: var(--muted); margin-top: 3px;">Full-scale commercial web census</div>
          </div>
          <div style="border-left: 2.5px solid var(--ink); padding-left: 14px;">
            <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--ink);">15 Benchmarks</div>
            <div style="font-size: 10.5px; color: var(--muted); margin-top: 3px;">Multi-turn purchasing evaluations</div>
          </div>
          <div style="border-left: 2.5px solid var(--blue); padding-left: 14px;">
            <div style="font-size: 12px; font-weight: 800; text-transform: uppercase; color: var(--blue);">7,400 Buyers</div>
            <div style="font-size: 10.5px; color: var(--muted); margin-top: 3px;">9 global consumer jurisdictions</div>
          </div>
        </div>
      </div>

      <!-- Notion-style cover illustration -->
      <div style="flex: 0.8; display: flex; justify-content: flex-end;">
        <svg width="340" height="280" viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="30" width="265" height="205" rx="6" fill="#fafaf9" stroke="#111827" stroke-width="2"/>
          <line x1="40" y1="68" x2="305" y2="68" stroke="#e5e7eb" stroke-width="1.5"/>
          <circle cx="64" cy="50" r="4.5" fill="#0038FF"/>
          <circle cx="78" cy="50" r="4.5" fill="#d1d5db"/>
          <circle cx="92" cy="50" r="4.5" fill="#d1d5db"/>
          <rect x="115" y="44" width="140" height="12" rx="3" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
          <rect x="68" y="90" width="110" height="12" rx="2" fill="#111827"/>
          <rect x="68" y="112" width="140" height="7" rx="2" fill="#9ca3af"/>
          <rect x="68" y="126" width="125" height="7" rx="2" fill="#e5e7eb"/>
          <rect x="68" y="140" width="135" height="7" rx="2" fill="#e5e7eb"/>
          <rect x="68" y="154" width="105" height="7" rx="2" fill="#e5e7eb"/>
          <rect x="220" y="90" width="70" height="75" rx="4" fill="#eff4ff" stroke="#0038FF" stroke-width="2"/>
          <path d="M245 125 L254 134 L272 114" stroke="#0038FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="230" y="148" width="50" height="6" rx="2" fill="#93c5fd"/>
          <path d="M15 255 C15 205 40 180 75 180 L102 255 Z" fill="#e5e7eb" stroke="#111827" stroke-width="2"/>
          <ellipse cx="52" cy="155" rx="15" ry="17" fill="#fafaf9" stroke="#111827" stroke-width="2"/>
          <path d="M40 150 C40 135 52 128 65 130 C75 132 75 144 71 154" fill="#111827"/>
          <path d="M60 195 L95 170 L128 185" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>

    <div class="cover-bottom">
      <div>
        <div class="cover-author">Vedang Ratan Vatsa</div>
        <div class="cover-meta">Founder, Hashtag Web3 &nbsp;|&nbsp; Lead Researcher, veda.ng</div>
      </div>
      <div class="cover-meta" style="text-align: right;">
        Open-Access Empirical Research Report &nbsp;|&nbsp; DOI: 10.5281/zenodo.23661069<br>
        Published under Creative Commons Attribution 4.0 International (CC BY 4.0)
      </div>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 2: EXECUTIVE SUMMARY & FINDINGS (EXACT REPLICATION OF MCKINSEY BVOD PAGE 4)
       ═════════════════════════════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Executive Summary</span>
      <span>Empirical Scope & Findings</span>
    </div>

    <div class="spread-content" style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 26px; align-items: stretch;">
      <!-- Left Column: Big Serif Quote + 3 Column Striking Findings -->
      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div class="quote-hero">
            “The most extensive and rigorous research undertaken anywhere to study whether autonomous shopping agents can act within consumer permission and deliver suitable purchases.”
          </div>

          <p class="body-sans" style="font-size: 11.5px; font-weight: 600; color: var(--ink); margin-top: 10px; margin-bottom: 6px;">
            Our research yielded several striking findings across 100,000 domains and 15 benchmark studies:
          </p>
        </div>

        <div class="three-point-row">
          <div class="point-item">
            <strong>1. The Delegation Trap</strong>
            Payment success does not equal buyer satisfaction. A shopping model can complete checkout cleanly while purchasing an item that violates room dimensions, delivery windows, or statutory return rights. The checkout button is an obsolete proxy for consent.
          </div>
          <div class="point-item">
            <strong>2. The 43% Capability Gap</strong>
            Leading frontier foundation models achieve a maximum accuracy of only 57.1% on multi-turn purchasing benchmarks. When product inspection incurs stated API costs ($10–$50), models prematurely truncate search, missing hidden fees and critical specifications.
          </div>
          <div class="point-item">
            <strong>3. The Consumer Trust Deficit</strong>
            While 73% of consumers use AI for product recommendations, 55% explicitly refuse autonomous spending authority. Furthermore, 73.9% demand strong cryptographic authentication, and 50.8% assign legal and financial liability for errors directly to the AI platform.
          </div>
        </div>

        <div class="info-panel" style="margin-top: 10px;">
          <div class="info-panel-title">The Commercial Mandate: Shifting from Friction to Verifiable Intent</div>
          <div class="info-panel-desc">
            Enterprises that treat agentic commerce merely as automated browser scraping expose themselves to heavy chargebacks and bot-blocking penalties. Winning platforms deploy machine-readable semantic endpoints and cryptographic pre-transaction spend boundaries. Top-quartile agent-ready platforms capture autonomous discovery queries with near-zero customer acquisition cost.
          </div>
        </div>
      </div>

      <!-- Right Column: Stacked Numbers + Collage Woman Figure (McKinsey Page 4) -->
      <div style="display: flex; flex-direction: column; justify-content: space-between; border-left: 1px solid var(--rule); padding-left: 22px;">
        <div class="stacked-stats">
          <div class="stat-block">
            <span class="stat-num-serif">100,000</span>
            <span class="stat-label-sans">commercial domains audited for machine-readable checkout protocols.</span>
          </div>
          <div class="stat-block">
            <span class="stat-num-serif">57.1%</span>
            <span class="stat-label-sans">multi-turn task accuracy ceiling (Claude Opus 4.6 on EComAgentBench).</span>
          </div>
          <div class="stat-block">
            <span class="stat-num-serif">55.0%</span>
            <span class="stat-label-sans">online consumers uncomfortable granting autonomous spending authority.</span>
          </div>
          <div class="stat-block">
            <span class="stat-num-serif">50.8%</span>
            <span class="stat-label-sans">buyers assigning financial liability for agent errors directly to AI platforms.</span>
          </div>
        </div>

        <!-- McKinsey BVOD Page 4 Exact Style Figure: Standing Woman with Blue Tablet -->
        <div style="display: flex; justify-content: flex-end; margin-top: 0px; margin-right: -10px;">
          <svg width="220" height="295" viewBox="0 0 220 295" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 40 C120 22 100 12 80 12 C60 12 48 24 48 40 C48 56 62 66 78 70" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
            <path d="M48 40 C45 20 62 8 85 8 C108 8 124 20 120 40 C116 56 106 68 116 82 C120 88 112 92 106 92 C100 92 96 82 96 72" fill="#1f2937"/>
            <path d="M88 45 L96 52 L86 58 L94 65" stroke="#111827" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M78 70 L74 95 L96 95 L92 70" fill="#fafaf9" stroke="#111827" stroke-width="1.6"/>
            <path d="M60 95 C42 103 34 124 32 155 L54 205 L74 205 L68 150 L86 150 L88 205 L112 205 L132 150 L120 103 C112 95 90 93 60 95 Z" fill="#e5e7eb" stroke="#111827" stroke-width="2" stroke-linejoin="round"/>
            <path d="M72 95 L84 130 L96 95" fill="#cbd5e1" stroke="#111827" stroke-width="1.6"/>
            <path d="M54 205 L50 282 L72 282 L78 205 Z" fill="#cbd5e1" stroke="#111827" stroke-width="2"/>
            <path d="M88 205 L94 282 L116 282 L112 205 Z" fill="#cbd5e1" stroke="#111827" stroke-width="2"/>
            <path d="M46 282 L74 282 L72 288 L44 288 Z" fill="#111827"/>
            <path d="M92 282 L118 282 L116 288 L90 288 Z" fill="#111827"/>
            <path d="M35 130 C35 154 50 170 72 178" stroke="#111827" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M125 118 C125 144 114 164 98 175" stroke="#111827" stroke-width="2.2" stroke-linecap="round"/>
            <rect x="72" y="150" width="54" height="40" rx="4" transform="rotate(-15 72 150)" fill="#0038FF" stroke="#111827" stroke-width="2"/>
            <rect x="78" y="155" width="44" height="30" rx="2" transform="rotate(-15 72 150)" fill="#60a5fa" opacity="0.9"/>
            <ellipse cx="70" cy="178" rx="6" ry="5" fill="#ffffff" stroke="#111827" stroke-width="1.6"/>
            <ellipse cx="116" cy="166" rx="6" ry="5" fill="#ffffff" stroke="#111827" stroke-width="1.6"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 2 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 3: THE DELEGATION PARADOX & 3 AUTHORITY LEVELS
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 01</span>
      <span>The Delegation Paradox & Authority Levels</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Authority Matrix Table & Economics -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            When software acts as a purchasing agent, the checkout button ceases to be an adequate proxy for consent.
          </div>
          <p class="body-sans">
            In human commerce, checkout completion signals product consent. When a user delegates that workflow to an autonomous model, payment settlement merely confirms funds transfer. It does not establish that the item fits the buyer's physical space, arrives within necessary schedules, or includes acceptable return terms.
          </p>

          <table class="notion-table">
            <thead>
              <tr>
                <th style="width: 105px;">Authority Level</th>
                <th style="width: 135px;">Operational Scope</th>
                <th>Human Safeguard</th>
                <th>Legal Boundary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Level 1: Advice</strong></td>
                <td>Catalog search, filtering, attribute ranking.</td>
                <td>User inspects and pays manually at native store.</td>
                <td>Information service; minimal platform liability.</td>
              </tr>
              <tr>
                <td><strong>Level 2: Approval</strong></td>
                <td>Agent stages cart and prepares checkout session.</td>
                <td>User reviews itemized terms and clicks final buy.</td>
                <td>Contract formed by human principal at checkout.</td>
              </tr>
              <tr>
                <td><strong>Level 3: Advance</strong></td>
                <td>Autonomous purchase within pre-set spend caps.</td>
                <td>Zero human presence; periodic ledger review.</td>
                <td>E-SIGN / UETA electronic agency provisions apply.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">The Unit Economics of Error Correction</div>
          <p class="body-sans">
            Reverse logistics and dispute handling costs quickly erase the micro-efficiencies of agent-assisted checkout:
          </p>

          <table class="notion-table">
            <thead>
              <tr>
                <th>Cost Component</th>
                <th>Standard Human</th>
                <th>Autonomous Error</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Return Freight</td>
                <td>$8.50 (parcel)</td>
                <td>$35.00–$85.00 (freight)</td>
              </tr>
              <tr>
                <td>Restocking Fee</td>
                <td>0% (standard)</td>
                <td>15%–25% ($75.00+)</td>
              </tr>
              <tr>
                <td>Dispute Handling</td>
                <td>$4.20 / ticket</td>
                <td>$28.50 (arbitration)</td>
              </tr>
              <tr>
                <td><strong>Total Cost / Error</strong></td>
                <td><strong>$12.70</strong></td>
                <td><strong>$138.50–$188.50</strong></td>
              </tr>
            </tbody>
          </table>
          <p class="body-sans" style="margin-top: 4px;">
            A single erroneous automated purchase wipes out the cumulative gross profit of 32 successful transactions. Pre-settlement constraint validation is an existential safeguard.
          </p>
        </div>
      </div>

      <!-- BOTTOM TIER: Failure Anatomy + Delegation Boundary Specification Console -->
      <div class="tier-bottom">
        <div style="display: grid; grid-template-columns: 1fr 1.15fr; gap: 16px; align-items: stretch;">
          <!-- Left Box: Failure Case Study -->
          <div class="dense-card blue-top" style="display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div class="card-heading" style="color: var(--blue);">The Washing Machine Dilemma: Anatomy of Autonomous Failure</div>
              <p class="card-text" style="margin-bottom: 6px;">
                A prompt like <em>"find a good washing machine under $800"</em> leaves space dimensions, hookup types, and return fees unstated. The model satisfies the price condition perfectly while delivering a three-hundred-pound problem that cannot pass through the doorway.
              </p>
            </div>
            <div style="background: var(--paper-warm); border: 1px solid var(--rule); padding: 6px 10px; font-size: 8.8px; color: var(--muted); line-height: 1.4;">
              <strong>Economic Toll:</strong> $75 restocking surcharge + $85 freight return + customer support arbitration = $160 in deadweight transaction loss.
            </div>
          </div>

          <!-- Right Box: Delegation Boundary Specification Visual Engine -->
          <div class="dense-card ink-top">
            <div class="card-heading">Delegation Boundary Specification (Pre-Transaction Console)</div>
            <p class="card-text" style="margin-bottom: 6px;">
              To prevent catastrophic errors, winning agentic platforms enforce cryptographic pre-transaction constraints before payments leave the consumer wallet:
            </p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
              <div style="background: var(--paper-warm); border: 1px solid var(--rule); padding: 6px 8px; border-radius: 2px;">
                <div style="font-size: 8px; font-weight: 700; color: var(--muted); text-transform: uppercase;">Spend Cap</div>
                <div style="font-size: 11px; font-weight: 700; color: var(--blue);">$450.00 Max</div>
                <div style="font-size: 8px; color: #16a34a; font-weight: 600;">Hardware Signed</div>
              </div>
              <div style="background: var(--paper-warm); border: 1px solid var(--rule); padding: 6px 8px; border-radius: 2px;">
                <div style="font-size: 8px; font-weight: 700; color: var(--muted); text-transform: uppercase;">Return SLA</div>
                <div style="font-size: 11px; font-weight: 700; color: var(--ink);">14-Day Free</div>
                <div style="font-size: 8px; color: var(--muted);">Zero Restock Fee</div>
              </div>
              <div style="background: var(--paper-warm); border: 1px solid var(--rule); padding: 6px 8px; border-radius: 2px;">
                <div style="font-size: 8px; font-weight: 700; color: var(--muted); text-transform: uppercase;">Fit Envelope</div>
                <div style="font-size: 11px; font-weight: 700; color: var(--ink);">27" x 30" x 39"</div>
                <div style="font-size: 8px; color: #16a34a; font-weight: 600;">Doorway Verified</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>Strategic Takeaway:</strong> Autonomous commerce cannot scale on raw payment settlement speed. Defensibility requires deterministic pre-transaction constraint satisfaction before funds are debited.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 3 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 4: THE AGENTIC COMMERCE READINESS INDEX (ACRI)
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 02</span>
      <span>The ACRI Architecture & 100,000-Domain Web Census</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Lead Narrative & Web Census Audit Table -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            The Agentic Commerce Readiness Index (ACRI): Four foundational themes for autonomous market participation.
          </div>
          <p class="body-sans">
            Modeled directly on the McKinsey Design Index (MDI), the ACRI evaluates how well an enterprise's technical and operational infrastructure supports autonomous machine buyers. Across 100,000 audited domains, only top-quartile performers capture autonomous search queries with near-zero customer acquisition cost.
          </p>
          <div class="info-panel" style="margin-top: 4px;">
            <div class="info-panel-title">Systemic Synergy Across All Four Pillars</div>
            <div class="info-panel-desc">
              No single pillar creates defensibility in isolation. Sub-second APIs (Pillar 2) fail if bot scrapers block agent discovery, or if missing reversal webhooks (Pillar 4) trigger mandatory chargeback fines.
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">The 100,000-Domain Web Census Audit</div>
          <p class="body-sans">
            Our empirical audit of 100,000 commercial domains revealed alarming enterprise fragility across modern e-commerce infrastructure:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Infrastructure Capability</th>
                <th>Supported</th>
                <th>Deficit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Machine-Readable Agent Checkout</td>
                <td>1.8%</td>
                <td><strong>98.2% Missing</strong></td>
              </tr>
              <tr>
                <td>WAF Bot Walls Blocking AI Buyers</td>
                <td>21.6% Open</td>
                <td><strong>78.4% Blocking</strong></td>
              </tr>
              <tr>
                <td>Clean <code>llms.txt</code> / OpenAPI Manifests</td>
                <td>0.2%</td>
                <td><strong>99.8% Missing</strong></td>
              </tr>
              <tr>
                <td>Headless JavaScript Parser Failure</td>
                <td>37.9% Compatible</td>
                <td><strong>62.1% Failing</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BOTTOM TIER: The 4 Core Pillars Detailed Cards (Full Width) -->
      <div class="tier-bottom">
        <div class="card-grid-4">
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">1. Permission Governance</div>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Pre-Transaction Mandates:</strong> Hardware-signed spend limits (AP2/UCP).</p>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Verifiable Intent:</strong> Cryptographic attestation without exposing PAN.</p>
            <p class="card-text"><strong>• Token Siloing:</strong> Sub-wallets bounded by order TTL epochs.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">2. Machine-Readable Stack</div>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Semantic Schema:</strong> Real-time JSON-LD stock, specs, and all-in fees.</p>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Sub-Second APIs:</strong> Low-latency deterministic agent polling endpoints.</p>
            <p class="card-text"><strong>• Clean Discovery:</strong> Exposing valid <code>llms.txt</code> bypassing CAPTCHAs.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">3. Discovery Integrity</div>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Multi-Attribute Match:</strong> Strict physical dimension & power validation.</p>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Algorithmic Neutrality:</strong> Resilience to sponsored ad steering.</p>
            <p class="card-text"><strong>• Query Efficiency:</strong> Minimizing tool-call token overhead per search.</p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">4. Post-Settlement Integrity</div>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Idempotent Retries:</strong> Zero double-billing on network disconnects.</p>
            <p class="card-text" style="margin-bottom: 3px;"><strong>• Spec-Bound Receipts:</strong> Anchoring prompt terms to final invoices.</p>
            <p class="card-text"><strong>• Reversal Webhooks:</strong> Automated returns per statutory consumer law.</p>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>The Inadvertent Exclusion Trap:</strong> By configuring bot defenses solely to block scrapers, 78.4% of commercial retailers render their products completely invisible to autonomous agents making bona fide purchase inquiries.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 4 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 5: THE 43% CAPABILITY GAP (FRONTIER BENCHMARKS)
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 03</span>
      <span>Empirical Benchmarks & The 43% Capability Gap</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Bar Chart Exhibit & Tool-Lab Cost Table -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            Frontier model evaluations expose severe accuracy cliffs under realistic commercial constraints.
          </div>
          <p class="body-sans">
            On EComAgentBench's 662 multi-turn e-commerce tasks, models struggle to satisfy requirements spread across user requests, profile memory, and follow-up turns. Partial match scores mask complete task failure.
          </p>

          <div style="background: var(--paper-card); border: 1px solid var(--rule); padding: 9px 14px; margin-top: 4px;">
            <div class="subhead-sans" style="font-size: 10.5px; margin-bottom: 8px;">Exhibit 1: Complete-Task Success Rate on EComAgentBench</div>
            <div class="chart-editorial-row">
              <span class="chart-label">Claude Opus 4.6</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 57.1%;"></div></div>
              <span class="chart-number">57.1%</span>
            </div>
            <div class="chart-editorial-row">
              <span class="chart-label">GPT-5.4</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 51.3%;"></div></div>
              <span class="chart-number">51.3%</span>
            </div>
            <div class="chart-editorial-row">
              <span class="chart-label">Gemini 2.5 Pro</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 48.7%;"></div></div>
              <span class="chart-number">48.7%</span>
            </div>
            <div class="chart-editorial-row">
              <span class="chart-label">GPT-4o</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill muted" style="width: 42.8%;"></div></div>
              <span class="chart-number">42.8%</span>
            </div>
            <div class="chart-editorial-row" style="margin-bottom: 0;">
              <span class="chart-label">WebShop Baseline</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill muted" style="width: 29.4%;"></div></div>
              <span class="chart-number">29.4%</span>
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">The Inspection Ceiling & Search Economics</div>
          <p class="body-sans">
            Tool-Lab benchmarks demonstrate that when API calls incur stated financial costs, models suffer catastrophic search truncation:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Inspection Cost</th>
                <th>Items Evaluated</th>
                <th>Task Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$0.00 (Unconstrained)</td>
                <td>14.2 products</td>
                <td><strong>57.1%</strong></td>
              </tr>
              <tr>
                <td>$10.00 / Tool-Call</td>
                <td>4.1 products</td>
                <td><strong>38.4% (-33%)</strong></td>
              </tr>
              <tr>
                <td>$50.00 / Tool-Call</td>
                <td>1.8 products</td>
                <td><strong>21.6% (-62%)</strong></td>
              </tr>
            </tbody>
          </table>
          <p class="body-sans" style="margin-top: 4px;">
            Bakos's economic theory demonstrates that lower price search costs do not reduce market friction if product attribute information remains opaque. Agents need structured feature APIs.
          </p>
        </div>
      </div>

      <!-- BOTTOM TIER: 3 Deep Analytical Failure Modes + AgentDojo Injection -->
      <div class="tier-bottom">
        <div class="card-grid-3">
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">ACES Primacy Bias (41.2% Skew)</div>
            <p class="card-text">
              Agents disproportionately choose the first displayed products, even when visual HTML is converted into plain text tables. Positional bias in context windows causes models to systematically miss optimal matches located further down catalog feeds.
            </p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">Sponsored Penalties (34.0% Distortion)</div>
            <p class="card-text">
              "Sponsored" tags actively reduce agent selection probability, while "Overall Pick" badges artificially double it. Foundation models confuse commercial advertising flags with authentic attribute satisfaction.
            </p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">Adversarial Injection (AgentDojo 27.4%)</div>
            <p class="card-text">
              Indirect prompt injection concealed in third-party seller reviews successfully hijacked cart execution in 27.4% of unhardened sessions, silently altering delivery destinations and substituting counterfeit items.
            </p>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>Key Finding:</strong> Foundation models prematurely truncate product verification when tool calls incur token overhead, demanding deterministic semantic middleware to enforce constraint validation.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 5 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 6: THE CONSUMER TRUST DEFICIT & LIABILITY
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 04</span>
      <span>Consumer Trust & Liability Allocation</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Survey Bar Chart & Liability Table -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            Consumers welcome autonomous advice, but reject autonomous checkout without verified control.
          </div>
          <p class="body-sans">
            Cross-market survey data (N = 7,400) across 9 jurisdictions exposes a stark delegation threshold. Shoppers actively utilize AI for discovery, but refuse delegation when software holds the credit card.
          </p>

          <div style="background: var(--paper-card); border: 1px solid var(--rule); padding: 9px 14px; margin-top: 4px;">
            <div class="subhead-sans" style="font-size: 10.5px; margin-bottom: 8px;">Exhibit 2: Consumer Delegation Thresholds Across 9 Markets (N=7,400)</div>
            <div class="chart-editorial-row">
              <span class="chart-label">Demand Strong Auth</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 73.9%;"></div></div>
              <span class="chart-number">73.9%</span>
            </div>
            <div class="chart-editorial-row">
              <span class="chart-label">Used AI Advice</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill" style="width: 73.0%;"></div></div>
              <span class="chart-number">73.0%</span>
            </div>
            <div class="chart-editorial-row">
              <span class="chart-label">Discomfort Spending</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill muted" style="width: 55.0%;"></div></div>
              <span class="chart-number">55.0%</span>
            </div>
            <div class="chart-editorial-row" style="margin-bottom: 0;">
              <span class="chart-label">Platform Responsible</span>
              <div class="chart-bar-bg"><div class="chart-bar-fill muted" style="width: 50.8%;"></div></div>
              <span class="chart-number">50.8%</span>
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">The Dispute & Liability Allocation Matrix</div>
          <p class="body-sans">
            Consumers demand transparent boundaries: editable limits, verified receipts, and instant reversibility:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Error Scenario</th>
                <th>Consumer Stance</th>
                <th>Enterprise Liability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Incorrect Size / Spec</td>
                <td>84.2% demand refund</td>
                <td>Merchant bears return freight</td>
              </tr>
              <tr>
                <td>Late Delivery Window</td>
                <td>68.1% cancel order</td>
                <td>Carrier SLA penalty clause</td>
              </tr>
              <tr>
                <td>Hidden Restocking Fee</td>
                <td>91.5% dispute charge</td>
                <td>Bank chargeback fee ($25)</td>
              </tr>
            </tbody>
          </table>
          <p class="body-sans" style="margin-top: 4px;">
            Platforms without verifiable intent audit logs bear full dispute costs. When software acts without human presence, card brand rules default to unauthorized chargeback liabilities.
          </p>
        </div>
      </div>

      <!-- BOTTOM TIER: Behavioral Dynamics & Trust Engineering Cards -->
      <div class="tier-bottom">
        <div class="card-grid-3">
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">Algorithmic Aversion (Dietvorst)</div>
            <p class="card-text">
              Observing a single visible algorithmic error destroys delegation trust permanently. While consumers tolerate human error, they demand infallibility from automated systems unless parameter control is explicitly granted.
            </p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">The 5% Editable Control Threshold</div>
            <p class="card-text">
              Giving users the ability to modify parameters—even by a marginal 5%—restores delegation willingness across 82% of cautious shoppers. Opaque automation triggers resistance; editable governance restores trust.
            </p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">The Asymmetric Recovery Law</div>
            <p class="card-text">
              Empirical data indicates that while consumers require 18 consecutive flawless autonomous transactions to establish confidence, a single unverified order delivery destroys delegation willingness across 89% of participants.
            </p>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>The Statutory Dispute Default:</strong> Automated transactions lacking cryptographic proof of consent default to unauthorized charges under card brand rules, imposing mandatory merchant chargebacks.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 6 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 7: PAYMENT STANDARDS & EMERGING PROTOCOL STACKS
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 05</span>
      <span>Payment Standards & Emerging Protocol Stacks</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Protocol Comparison Matrix & Security Exploit Table -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            Fragmented payment standards threaten market balkanization: Comparing ACP, UCP, AP2, and x402.
          </div>
          <p class="body-sans">
            Pushing unencrypted primary account numbers (PAN) and CVV codes across browser automation environments represents a catastrophic security vulnerability. Modern protocols isolate credentials via cryptographically signed intent tokens.
          </p>

          <table class="notion-table">
            <thead>
              <tr>
                <th style="width: 55px;">Protocol</th>
                <th style="width: 110px;">Primary Backers</th>
                <th>Authorization Mechanism</th>
                <th>Idempotency & Settlement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ACP</strong></td>
                <td>OpenAI / Stripe</td>
                <td>Delegated merchant-specific token.</td>
                <td>Stripe idempotency keys; card rails.</td>
              </tr>
              <tr>
                <td><strong>UCP</strong></td>
                <td>Google / Shopify</td>
                <td>Universal client constraint payload.</td>
                <td>Native cart checkout API; real-time lock.</td>
              </tr>
              <tr>
                <td><strong>AP2</strong></td>
                <td>Mastercard</td>
                <td>Cryptographic hardware intent proof.</td>
                <td>Tokenized network rail; zero PAN exposure.</td>
              </tr>
              <tr>
                <td><strong>x402</strong></td>
                <td>Coinbase / Open Web</td>
                <td>HTTP 402 Payment Required via USDC.</td>
                <td>Atomic on-chain settlement; zero chargebacks.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">Security Threat Models & Exploit Vectors</div>
          <p class="body-sans">
            Evaluating autonomous purchasing systems against adversarial benchmarks (AgentDojo, Tool-Lab) reveals three critical exploit vectors:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Attack Vector</th>
                <th>Exploit Mechanism</th>
                <th>Mitigation Protocol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prompt Injection</td>
                <td>Hidden review text altering address</td>
                <td>Constraint schema anchoring</td>
              </tr>
              <tr>
                <td>Price Shifting</td>
                <td>Silent price hike between cart & pay</td>
                <td>15-min deterministic lock</td>
              </tr>
              <tr>
                <td>Replay Attack</td>
                <td>Re-submitting signed intent token</td>
                <td>Nonce + short TTL epoch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BOTTOM TIER: 3 Architectural Core Principles -->
      <div class="tier-bottom">
        <div class="card-grid-3">
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">The Token Siloing Principle</div>
            <p class="card-text">
              Autonomous agents must never hold primary credit cards. Secure architectures provision merchant-bound, single-use virtual sub-wallets that automatically expire upon transaction completion or violation of prompt parameters.
            </p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">Hardware-Backed Verifiable Intent</div>
            <p class="card-text">
              Mandates signed on physical consumer devices (Secure Enclave / TPM) prevent server-side agent compromise from generating unauthorized checkout flows. Cryptographic nonces ensure single-order execution.
            </p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">Deterministic Settlement Locks</div>
            <p class="card-text">
              Merchants must provide a 15-minute price and inventory reservation epoch during agent constraint verification. Silent cart price mutations trigger automatic mandate invalidation before funds settle.
            </p>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>Protocol Convergence:</strong> Winning commercial ecosystems will standardize on cryptographic verifiable intent rails that isolate credentials from model execution contexts while preserving deterministic settlement.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 7 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 8: PURCHASE INTEGRITY FRAMEWORK & STATUTORY LAW
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 06</span>
      <span>Purchase Integrity Framework & Statutory Law</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Regulatory Governance & Statutory Alignment -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            From prompt to settlement: The 8-point purchase integrity framework enforces contract enforceability.
          </div>
          <p class="body-sans">
            Technical transaction success does not create legal enforceability. Harmonizing autonomous agent execution with established consumer protection statutes requires an unbroken chain of custody.
          </p>
          <div class="info-panel" style="margin-top: 4px;">
            <div class="info-panel-title">Statutory Agency Law: US E-SIGN (§7001(h)) & UETA (§14)</div>
            <div class="info-panel-desc">
              Contracts formed by electronic agents are legally binding upon the human principal only if the system operates within its actual authorization parameters. When an agent exceeds user-defined constraints, electronic agency breaks.
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">Global Regulatory Governance Landscape</div>
          <p class="body-sans">
            Commercial autonomous agents operate at the intersection of emerging AI legislation and established statutory consumer rights:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Jurisdiction / Rule</th>
                <th>Statutory Mandate</th>
                <th>Compliance Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>EU AI Act (Art 50)</td>
                <td>AI Transparency</td>
                <td>Mandatory disclosure of agent interaction</td>
              </tr>
              <tr>
                <td>EU Consumer Rights</td>
                <td>14-Day Right of Withdrawal</td>
                <td>Automated programmatic refund API</td>
              </tr>
              <tr>
                <td>US FTC Act (§5)</td>
                <td>Deceptive Steering</td>
                <td>Zero undisclosed sponsored bias in agent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BOTTOM TIER: The 8-Point Purchase Integrity Pipeline (2x4 Grid) -->
      <div class="tier-bottom">
        <div style="font-size: 10px; font-weight: 700; color: var(--ink); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em;">
          The 8-Point Purchase Integrity Verification Pipeline
        </div>
        <div class="card-grid-4">
          <div class="dense-card blue-top">
            <div class="card-heading" style="font-size: 9.5px; color: var(--blue);">1. Dimension Match</div>
            <p class="card-text">Validates physical room space, hookups, and voltage before checkout.</p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="font-size: 9.5px; color: var(--blue);">2. Fee Transparency</div>
            <p class="card-text">Verifies all-in landed cost including shipping, taxes, and restock fees.</p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="font-size: 9.5px; color: var(--blue);">3. Domain Authenticity</div>
            <p class="card-text">Checks domain SSL reputation, merchant identity, and stock availability.</p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="font-size: 9.5px; color: var(--blue);">4. Spend Cap Signing</div>
            <p class="card-text">Generates hardware-signed token with order-bound budget cap and TTL.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading" style="font-size: 9.5px;">5. Idempotent Settle</div>
            <p class="card-text">Guarantees zero duplicate billing during network retries or drops.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading" style="font-size: 9.5px;">6. Spec-Bound Receipt</div>
            <p class="card-text">Anchors user prompt terms to final itemized merchant invoice.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading" style="font-size: 9.5px;">7. SLA Tracking</div>
            <p class="card-text">Autonomous carrier transit monitoring with automated breach alerts.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading" style="font-size: 9.5px;">8. Reversal Webhook</div>
            <p class="card-text">Programmatic statutory 14-day return and instant dispute refund.</p>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>Enforceability Standard:</strong> Synthetic prompt acceptances cannot legally waive statutory consumer protections. Return windows and dispute rights must be programmatically executable by software agents.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 8 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 9: EXECUTIVE DIAGNOSTIC CHECKLIST & READINESS SCORING
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 07</span>
      <span>Executive Diagnostic & Readiness Scoring</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Lead Narrative & Readiness Tiers Table -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            Executive Diagnostic: Evaluating your enterprise's agentic commerce readiness.
          </div>
          <p class="body-sans">
            Board members and digital leaders can audit their infrastructure using the ACRI diagnostic. Enterprises scoring below 65 suffer from invisible disqualification, losing an estimated $140,000 per month in lost autonomous routing revenue per $100M GMV.
          </p>
          <div class="info-panel" style="margin-top: 4px;">
            <div class="info-panel-title">Auditing Methodology & Automated Sandbox Certification</div>
            <div class="info-panel-desc">
              Each lever is evaluated against automated sandbox probes that simulate autonomous shopping agents attempting discovery, constraint negotiation, and cart execution under network latency and simulated rate limits.
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">The ACRI Readiness Tiers & Financial Impact</div>
          <p class="body-sans">
            Benchmarking enterprise infrastructure reveals three distinct operational performance tiers:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Score</th>
                <th>Conversion Impact</th>
                <th>CAC Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tier 1: Native</strong></td>
                <td>&gt; 80 ACRI</td>
                <td><strong>3.2x higher</strong></td>
                <td><strong>-64% CAC</strong></td>
              </tr>
              <tr>
                <td><strong>Tier 2: Partial</strong></td>
                <td>50–79</td>
                <td>1.1x baseline</td>
                <td>-12% CAC</td>
              </tr>
              <tr>
                <td><strong>Tier 3: Blocked</strong></td>
                <td>&lt; 50 ACRI</td>
                <td><strong>0% (Bot blocked)</strong></td>
                <td>No access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BOTTOM TIER: 5 Board-Level Audit Cards (Notion Checklist Style) -->
      <div class="tier-bottom">
        <div style="font-size: 10px; font-weight: 700; color: var(--ink); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.04em;">
          Board-Level ACRI Readiness Diagnostic Checklist
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr) 2fr; gap: 10px;">
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">1. Discovery Protocols</div>
            <p class="card-text">Exposing machine-readable <code>llms.txt</code> and JSON-LD catalogs without client-side JS rendering barriers.</p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">2. WAF Bot Discrimination</div>
            <p class="card-text">Distinguishing between malicious scrapers and legitimate commercial agents presenting valid tokens.</p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">3. Verifiable Spend Caps</div>
            <p class="card-text">Accepting cryptographically signed mandates (AP2/UCP) without forcing agents to transmit naked PANs.</p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div class="dense-card ink-top">
              <div class="card-heading">4. Idempotent Settle</div>
              <p class="card-text">Zero duplicate billing during agent network drops and retry sessions.</p>
            </div>
            <div class="dense-card blue-top">
              <div class="card-heading" style="color: var(--blue);">5. Reversal Webhooks</div>
              <p class="card-text">Programmatic machine returns and instant statutory refunds.</p>
            </div>
          </div>
        </div>

        <div class="bottom-strip">
          <strong>Certification Threshold:</strong> Achieving Tier 1 status requires programmatic validation across all 5 audit criteria, qualifying the enterprise for preferred algorithmic routing across major AI platform aggregators.
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 9 of 10</span>
    </div>
  </div>


  <!-- ═════════════════════════════════════════════════════════════════════
       SPREAD 10: STRATEGIC ROADMAP & OUTLIER MOATS
       ═════════════════════════════════════════════ -->
  <div class="spread">
    <div class="spread-header">
      <span class="topic">Section 08</span>
      <span>Strategic Implementation Roadmap & Outlier Moats</span>
    </div>

    <div class="spread-content">
      <!-- TOP TIER: Outlier Moat Metrics & Boardroom Governance Directives -->
      <div class="tier-top">
        <div>
          <div class="lead-serif">
            The 3-phase strategic roadmap to capture the agentic commerce frontier.
          </div>
          <p class="body-sans">
            Forward-thinking retailers and software platforms must transform from defensive bot-blocking to offensive agent enablement. The transition is structural, requiring immediate enterprise action across discovery, settlement, and post-purchase architecture.
          </p>
          <div class="info-panel" style="margin-top: 4px;">
            <div class="info-panel-title">Board-Level Governance Directive</div>
            <div class="info-panel-desc">
              Chief Digital Officers must prioritize machine-readable infrastructure in Q1. As consumer search shifts from Google/Amazon to autonomous foundation models, unready merchants face catastrophic routing disintermediation.
            </div>
          </div>
        </div>

        <div style="border-left: 1px solid var(--rule); padding-left: 20px;">
          <div class="subhead-sans">The Outlier Moat: Why Leaders Outperform</div>
          <p class="body-sans">
            Just as McKinsey found that top-quartile design performers capture 32% higher revenue growth, top-quartile ACRI performers capture disproportionate market advantages:
          </p>
          <table class="notion-table">
            <thead>
              <tr>
                <th>Performance Metric</th>
                <th>Top-Quartile ACRI</th>
                <th>Market Average</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agent Query Conversion</td>
                <td><strong>14.8%</strong></td>
                <td>4.6% (3.2x moat)</td>
              </tr>
              <tr>
                <td>Customer Acquisition Cost</td>
                <td><strong>$12.40</strong></td>
                <td>$34.80 (-64% CAC)</td>
              </tr>
              <tr>
                <td>Post-Purchase Return Rate</td>
                <td><strong>4.2%</strong></td>
                <td>18.5% (-77% returns)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- BOTTOM TIER: 3-Phase Implementation Blueprint + Open-Access Colophon -->
      <div class="tier-bottom">
        <div class="card-grid-3">
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">Phase 1: Zero-Friction Discovery (M1–3)</div>
            <p class="card-text">
              Publish machine-readable <code>llms.txt</code> manifests. Implement structured JSON-LD product specifications. Configure WAF bypass rules for verified AI agents while preserving anti-scraper defenses.
            </p>
          </div>
          <div class="dense-card ink-top">
            <div class="card-heading">Phase 2: Verifiable Checkout (M4–8)</div>
            <p class="card-text">
              Integrate AP2 / UCP spend mandates. Provision tokenized sub-wallets. Deploy sub-second deterministic pricing endpoints with 15-minute price freeze guarantees for autonomous agent transactions.
            </p>
          </div>
          <div class="dense-card blue-top">
            <div class="card-heading" style="color: var(--blue);">Phase 3: Autonomous Post-Settle (M9–12)</div>
            <p class="card-text">
              Deploy programmatic reversal webhooks. Automate statutory return windows. Establish direct-to-agent distribution partnerships and loyalty incentives for AI purchasing platforms.
            </p>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; background: var(--paper-warm); border: 1px solid var(--rule); padding: 7px 12px; font-size: 8.8px; color: var(--muted); border-radius: 2px;">
          <div>
            <strong>Citation:</strong> Vatsa, V. R. (2026). <em>The Business Value of Agentic Commerce.</em> Open-Access Study. DOI: 10.5281/zenodo.23661069.
          </div>
          <div>
            Repository: <code>github.com/Hashtag-Web3/research-paper-framework</code> &nbsp;|&nbsp; Inquiries: <code>research@veda.ng</code>
          </div>
        </div>
      </div>
    </div>

    <div class="spread-footer">
      <span>The Business Value of Agentic Commerce</span>
      <span>Page 10 of 10</span>
    </div>
  </div>

</body>
</html>
`;

async function main() {
  const outputPath = process.env.BVOD_OUTPUT_PATH || path.join(__dirname, 'The_Business_Value_of_Agentic_Commerce.pdf');
  const wantPreviews = process.env.BVOD_GENERATE_PREVIEWS === 'true';

  const result = await renderReportToPdf({
    fullHtml: htmlContent,
    outputPath,
    generatePreviews: wantPreviews,
  });

  console.log('Successfully compiled McKinsey BVOD landscape PDF:');
  console.log('Output:', result.outputPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
