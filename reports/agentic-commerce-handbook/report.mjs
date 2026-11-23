/**
 * The Business Value of Agentic Commerce (Comprehensive 20-Page Industry Handbook)
 * Formatted in Notion Monochrome Design System (Pure White, Black, Cool Zinc Grays)
 * 
 * Complete 20-Page Architecture:
 * - Spread 01: Cover Page (Restored Line-Art Infographic + 3 Executive Metrics)
 * - Spread 02: Research Methodology and Investigation Scope (Zenodo 24121071 & Evidence Base)
 * - Spread 03: Macro Economic Projections & Market Sizing (Morgan Stanley, Bain, BCG, Gartner)
 * - Spread 04: The Automation Curve & Consumer Delegation Spectrum (McKinsey, Bundl Gen Alpha)
 * - Spread 05: The 7-Layer Autonomous Commerce Architecture (Jas Shah Reference Stack)
 * - Spread 06: Non-Human Identity, Ephemeral Credentials & CIAM (Okta 2026, RFC 8693)
 * - Spread 07: Emerging Commerce Protocols (MCP, Google UCP, Stripe ACP, Coinbase AP2)
 * - Spread 08: Protocol Implementation Mechanics (RFC 7231 Idempotency, AP2 Mandates)
 * - Spread 09: Payment Rails, Network Tokenization & Card Settlement (Visa TAP, Mastercard SPT)
 * - Spread 10: Settlement Mechanics & The Execution Gap (Split-Shipment CVV Declines, Wessman)
 * - Spread 11: Web Interface Fragility & Benchmark Analysis (VisualWebArena, Tool-Lab MCP)
 * - Spread 12: Behavioral Decision Science & Human-in-the-Loop Friction (Algorithm Aversion)
 * - Spread 13: Fraud Defense, Bot Classification & Security Vectors (WAF, Bot Telemetry)
 * - Spread 14: Adversarial Prompt Injections & DOM Manipulation (AgentDojo, Zero-Font Traps)
 * - Spread 15: The 100,000 Domain Empirical Web Study (Granular Findings from Zenodo Record)
 * - Spread 16: Agentic Commerce Optimization (ACO) & Catalog Engineering (Semrush, Schema.org)
 * - Spread 17: Search Theory, Information Economics & Margin Migration (Bakos, Ursu Booth)
 * - Spread 18: Ecosystem Dynamics & The Two-Poles Market Moat (Front-End LLMs vs Warehouses)
 * - Spread 19: Legal Governance, Contract Formation & Dispute Resolution (Busch, UETA 14, EU AI Act)
 * - Spread 20: 18-Month Enterprise Implementation Roadmap (Phased Execution & Boardroom Priorities)
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { renderReportToPdf } from '../../bvod-engine/engine.mjs';

import { getSpread01 } from './spreads/spread-01.mjs';
import { getSpread02 } from './spreads/spread-02.mjs';
import { getSpread03 } from './spreads/spread-03.mjs';
import { getSpread04 } from './spreads/spread-04.mjs';
import { getSpread05 } from './spreads/spread-05.mjs';
import { getSpread06 } from './spreads/spread-06.mjs';
import { getSpread07 } from './spreads/spread-07.mjs';
import { getSpread08 } from './spreads/spread-08.mjs';
import { getSpread09 } from './spreads/spread-09.mjs';
import { getSpread10 } from './spreads/spread-10.mjs';
import { getSpread11 } from './spreads/spread-11.mjs';
import { getSpread12 } from './spreads/spread-12.mjs';
import { getSpread13 } from './spreads/spread-13.mjs';
import { getSpread14 } from './spreads/spread-14.mjs';
import { getSpread15 } from './spreads/spread-15.mjs';
import { getSpread16 } from './spreads/spread-16.mjs';
import { getSpread17 } from './spreads/spread-17.mjs';
import { getSpread18 } from './spreads/spread-18.mjs';
import { getSpread19 } from './spreads/spread-19.mjs';
import { getSpread20 } from './spreads/spread-20.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateReport() {
  const spreads = [];

  const renderHeader = (category, title, pageNum) => {
    const pageNumber = pageNum !== undefined ? pageNum : title;
    return `
    <div class="report-header" style="display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1.5px solid var(--ink-heading); padding-bottom: 6px; margin-bottom: 10px;">
      <span style="font-size: 8.5px; font-weight: 800; letter-spacing: 0.1em; color: var(--ink-heading); text-transform: uppercase;">${category}</span>
      <div style="font-size: 8.5px; font-weight: 700; color: var(--ink-heading); font-feature-settings: 'tnum';">
        ${pageNumber} / 20
      </div>
    </div>
  `;
  };

  const renderFooter = (sourceText) => `
    <div class="report-footer" style="margin-top: auto; padding-top: 6px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; font-size: 7.2px; color: var(--ink-secondary);">
      <span>${sourceText}</span>
      <span>Hashtag Web3</span>
    </div>
  `;

  spreads.push(getSpread01());
  spreads.push(getSpread02(renderHeader, renderFooter));
  spreads.push(getSpread03(renderHeader, renderFooter));
  spreads.push(getSpread04(renderHeader, renderFooter));
  spreads.push(getSpread05(renderHeader, renderFooter));
  spreads.push(getSpread06(renderHeader, renderFooter));
  spreads.push(getSpread07(renderHeader, renderFooter));
  spreads.push(getSpread08(renderHeader, renderFooter));
  spreads.push(getSpread09(renderHeader, renderFooter));
  spreads.push(getSpread10(renderHeader, renderFooter));
  spreads.push(getSpread11(renderHeader, renderFooter));
  spreads.push(getSpread12(renderHeader, renderFooter));
  spreads.push(getSpread13(renderHeader, renderFooter));
  spreads.push(getSpread14(renderHeader, renderFooter));
  spreads.push(getSpread15(renderHeader, renderFooter));
  spreads.push(getSpread16(renderHeader, renderFooter));
  spreads.push(getSpread17(renderHeader, renderFooter));
  spreads.push(getSpread18(renderHeader, renderFooter));
  spreads.push(getSpread19(renderHeader, renderFooter));
  spreads.push(getSpread20(renderHeader, renderFooter));

  const outputPath = path.resolve(__dirname, 'The_Business_Value_of_Agentic_Commerce_Handbook.pdf');
  
  await renderReportToPdf({
    htmlSpreads: spreads,
    outputPath: outputPath,
    cssPath: path.resolve(__dirname, '../../styles/notion/notion-design-system.css'),
    generatePreviews: true,
    previewDir: path.resolve(__dirname, 'previews')
  });

  console.log(`✓ Generated 20-Page Comprehensive Industry Handbook: ${outputPath}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log("Compiling 20-Page Notion Style Industry Handbook to PDF...");
  generateReport().catch(console.error);
}
