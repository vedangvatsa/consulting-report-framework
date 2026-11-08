#!/usr/bin/env node
/**
 * McKinsey BVOD Digital Report CLI
 * Generate, scaffold, and compile publication-grade landscape executive reports.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { renderReportToPdf } from './engine.mjs';
import * as components from './components.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
  case 'render':
    handleRender(args.slice(1));
    break;
  case 'new':
    handleNew(args.slice(1));
    break;
  case 'preview':
    handlePreview(args.slice(1));
    break;
  case 'test':
    handleTest();
    break;
  default:
    printHelp();
    break;
}

async function handleRender(subArgs) {
  if (subArgs.length === 0) {
    console.error('Error: Please specify the report script or config to render.');
    console.log('Usage: node bvod-engine/cli.mjs render <path/to/report.mjs> [--output out.pdf] [--preview]');
    process.exit(1);
  }

  const scriptPath = path.resolve(subArgs[0]);
  if (!fs.existsSync(scriptPath)) {
    console.error(`Error: File not found at ${scriptPath}`);
    process.exit(1);
  }

  const outIndex = subArgs.indexOf('--output');
  const outPath = outIndex !== -1 && subArgs[outIndex + 1] ? path.resolve(subArgs[outIndex + 1]) : null;
  const wantPreview = subArgs.includes('--preview');

  console.log(`\nCompiling McKinsey BVOD Report from: ${scriptPath}`);
  
  // Set environment variable if custom output path provided
  if (outPath) {
    process.env.BVOD_OUTPUT_PATH = outPath;
  }
  if (wantPreview) {
    process.env.BVOD_GENERATE_PREVIEWS = 'true';
  }

  try {
    // Dynamically import and execute report script
    const mod = await import(`file://${scriptPath}?t=${Date.now()}`);
    if (typeof mod.generateReport === 'function') {
      await mod.generateReport();
    } else if (typeof mod.main === 'function') {
      await mod.main();
    } else if (typeof mod.default === 'function') {
      await mod.default();
    }
    console.log(`Compilation complete.\n`);
  } catch (err) {
    console.error('Rendering failed:', err);
    process.exit(1);
  }
}

function handleNew(subArgs) {
  const topicName = subArgs[0];
  if (!topicName) {
    console.error('Error: Please provide a topic name.');
    console.log('Usage: npm run new:bvod "Quantum Computing in Finance"');
    process.exit(1);
  }

  const slug = topicName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const targetDir = path.join(REPO_ROOT, 'reports', slug);

  if (fs.existsSync(targetDir)) {
    console.error(`Error: Directory already exists at ${targetDir}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const templatePath = path.join(REPO_ROOT, 'templates', 'bvod', 'executive-briefing-template.mjs');
  let content = fs.readFileSync(templatePath, 'utf8');

  // Replace topic placeholders
  content = content.replace(/{{TOPIC_TITLE}}/g, topicName);
  content = content.replace(/{{TOPIC_SLUG}}/g, slug);

  const targetReportPath = path.join(targetDir, 'report.mjs');
  fs.writeFileSync(targetReportPath, content, 'utf8');

  // Create starter data.json
  const initialData = {
    title: topicName,
    created: new Date().toISOString(),
    metrics: {
      auditedDomains: "10,000+",
      accuracyCeiling: "62.4%",
      marketSize: "$12.8B",
    }
  };
  fs.writeFileSync(path.join(targetDir, 'data.json'), JSON.stringify(initialData, null, 2), 'utf8');

  console.log(`\n Created new McKinsey BVOD report project for: "${topicName}"`);
  console.log(` Directory: reports/${slug}/`);
  console.log(` Entry point: reports/${slug}/report.mjs`);
  console.log(`\nTo render this report:`);
  console.log(` node bvod-engine/cli.mjs render reports/${slug}/report.mjs --preview\n`);
}

function handlePreview(subArgs) {
  const pdfPath = subArgs[0] || path.join(REPO_ROOT, 'reports', 'agentic-commerce-bvod', 'The_Business_Value_of_Agentic_Commerce.pdf');
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF not found at ${pdfPath}`);
    process.exit(1);
  }
  const cmd = process.platform === 'darwin' ? `open "${pdfPath}"` : `xdg-open "${pdfPath}"`;
  execSync(cmd);
}

async function handleTest() {
  console.log('Running test render to verify BVOD engine...');
  const testCover = components.renderCoverPage({
    superHeader: 'TEST EMPIRICAL BRIEFING | VERIFICATION RUN',
    title: 'The Business Value of Autonomous Systems',
    subtitle: 'Automated test spread confirming typography, flexbox grid, and Playwright PDF pipeline.',
    metadataBoxes: [
      { value: '100% PASS', label: 'Playwright engine verified', highlight: true },
      { value: '297 x 210 mm', label: 'Landscape A4 geometry' },
    ],
  });

  const testSpread = components.renderTwoTierSpread({
    sectionTag: 'VERIFICATION',
    docTopic: 'ENGINE INTEGRITY AUDIT',
    headline: 'High-density information architecture satisfies boardroom standards without empty space.',
    narrative: 'Testing the Two-Tier layout: upper empirical tier houses benchmark exhibits, lower tier houses structured framework cards.',
    exhibitLeft: components.renderTableExhibit({
      title: 'Engine Benchmark Pass Rates',
      headers: ['Engine Component', 'Status', 'Latency'],
      rows: [
        ['Newsreader Web Font', 'Loaded', '42ms'],
        ['Inter Body Typeface', 'Loaded', '38ms'],
        ['CSS Two-Tier Layout', 'Verified', '12ms'],
      ]
    }),
    exhibitRight: components.renderBarChartExhibit({
      title: 'Exhibit 1: Rendering Accuracy by Resolution',
      items: [
        { label: '300 DPI Print Target', pct: 98, value: '98.5%' },
        { label: 'Screen Display (150 DPI)', pct: 100, value: '100.0%' },
      ]
    }),
    tierBottom: components.renderFrameworkCards([
      { title: '1. Strict Two-Tier Proportions', desc: 'Top tier 48% height, bottom tier 42% height.' },
      { title: '2. No-Slop Typography', desc: 'Newsreader serif headlines, Inter grotesque body.' },
      { title: '3. Strategic Bottom Strip', desc: 'Full-width takeaway anchors the page above footer.' },
    ], 3),
    bottomTakeaway: {
      title: 'Engine Check',
      text: 'Playwright engine compiles printBackground and preferCSSPageSize seamlessly with zero drift.',
    },
    pageNum: 2,
    totalPages: 2,
  });

  const testOut = path.join(REPO_ROOT, 'tmp_test_output.pdf');
  const res = await renderReportToPdf({
    htmlSpreads: [testCover, testSpread],
    outputPath: testOut,
  });

  console.log(`\nTest render succeeded!`);
  console.log(`Generated: ${res.outputPath} (${res.sizeBytes} bytes)`);
  if (fs.existsSync(testOut)) {
    fs.unlinkSync(testOut);
  }
}

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║       McKinsey BVOD Digital Consulting Report Framework (v2.0)           ║
║       Publication-grade landscape PDF reports for executive briefings     ║
╚═══════════════════════════════════════════════════════════════════════════╝

Commands:
  render <file.mjs> [--output out.pdf] [--preview]   Render a report to landscape PDF
  new "<Topic Name>"                                 Create a new report scaffolding
  preview [file.pdf]                                 Open report in system viewer
  test                                               Run engine verification test

Examples:
  node bvod-engine/cli.mjs render reports/agentic-commerce-bvod/report.mjs --preview
  node bvod-engine/cli.mjs new "Autonomous Supply Chain Operations"
  node bvod-engine/cli.mjs test
`);
}
