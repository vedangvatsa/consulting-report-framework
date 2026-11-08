#!/usr/bin/env node
/**
 * Notion Style Presentation CLI
 * Compile, scaffold, and render slides that read like Notion pages.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { renderNotionPresentationToPdf } from './notion-engine.mjs';
import * as components from './notion-components.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '../..');

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

  console.log(`\nCompiling Notion Style Presentation from: ${scriptPath}`);
  
  if (outPath) {
    process.env.NOTION_OUTPUT_PATH = outPath;
  }
  if (wantPreview) {
    process.env.NOTION_GENERATE_PREVIEWS = 'true';
  }

  try {
    const mod = await import(`file://${scriptPath}?t=${Date.now()}`);
    if (typeof mod.generateReport === 'function') {
      await mod.generateReport();
    } else if (typeof mod.generatePresentation === 'function') {
      await mod.generatePresentation();
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
    process.exit(1);
  }

  const slug = topicName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const targetDir = path.join(REPO_ROOT, 'reports', `${slug}-notion`);

  if (fs.existsSync(targetDir)) {
    console.error(`Error: Directory already exists at ${targetDir}`);
    process.exit(1);
  }

  fs.mkdirSync(targetDir, { recursive: true });

  const templatePath = path.join(REPO_ROOT, 'templates', 'notion', 'executive-presentation-template.mjs');
  let content = fs.readFileSync(templatePath, 'utf8');

  content = content.replace(/{{TOPIC_TITLE}}/g, topicName);
  content = content.replace(/{{TOPIC_SLUG}}/g, slug);

  fs.writeFileSync(path.join(targetDir, 'report.mjs'), content, 'utf8');

  console.log(`\n Created new Notion Style presentation for: "${topicName}"`);
  console.log(` Directory: reports/${slug}-notion/`);
  console.log(` Entry point: reports/${slug}-notion/report.mjs`);
  console.log(`\nTo render this presentation:`);
  console.log(` node styles/notion/notion-cli.mjs render reports/${slug}-notion/report.mjs --preview\n`);
}

function handlePreview(subArgs) {
  const pdfPath = subArgs[0] || path.join(REPO_ROOT, 'reports', 'agentic-commerce-notion', 'The_Business_Value_of_Agentic_Commerce_Notion.pdf');
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF not found at ${pdfPath}`);
    process.exit(1);
  }
  const cmd = process.platform === 'darwin' ? `open "${pdfPath}"` : `xdg-open "${pdfPath}"`;
  execSync(cmd);
}

async function handleTest() {
  console.log('Running test render to verify Notion consulting report engine...');
  const coverSpread = components.renderCoverPage({
    superHeader: 'EMPIRICAL RESEARCH REPORT | STRATEGIC BRIEFING',
    title: 'Verification Report: Notion Style Engine',
    subtitle: 'Testing Inter typography, authentic line-art illustrations, and high-density two-tier architecture.',
    metadataBoxes: [
      { value: '10,000+ AUDITED', label: 'Full-scale empirical census', highlight: true },
      { value: '15 BENCHMARKS', label: 'Multi-turn task evaluations' },
      { value: 'BOARDROOM READY', label: 'Decision-grade frameworks' },
    ],
    author: 'Antigravity Verification Suite',
    authorTitle: 'Quality Assurance & Architecture Lead',
  });

  const contentSpread = components.renderTwoTierSpread({
    sectionTag: 'SECTION 01',
    docTopic: 'CORE VERIFICATION & ARCHITECTURE',
    headline: 'High-density consulting reports reading like Notion-crafted executive briefs.',
    narrative: `
      <p>Clean flat tokens, no heavy drop shadows, no gradient covers, and strict Inter typography throughout.</p>
      <p>Full-page analytical density ensures the canvas is utilized with substantive prose, empirical tables, and zero empty lower-half canvas.</p>
    `,
    exhibitRight: components.renderTable({
      title: 'Engine Architecture & Compliance',
      headers: ['Component', 'Status', 'Standard'],
      rows: [
        ['Typography', 'Inter (Google Fonts)', '100% compliant'],
        ['Visual Style', 'Handcrafted Notion Line Art', 'Zero AI Slop'],
        ['Page Geometry', 'A4 Landscape (297x210mm)', 'Boardroom Ready'],
      ],
      footer: 'Continuous integration test verifying layout stability.'
    }),
    tierBottom: components.renderCards([
      {
        title: '1. Typography Integrity',
        tag: 'Fonts',
        tagColor: 'blue',
        bullets: ['Pure Inter font hierarchy', 'No serif mixing in Notion theme', 'Warm ink #191919 contrast']
      },
      {
        title: '2. Zero AI Slop',
        tag: 'Design',
        tagColor: 'gray',
        bullets: ['No gratuitous gradients', 'No rainbow status pills', 'Authentic vector illustrations']
      },
      {
        title: '3. Full-Page Density',
        tag: 'Layout',
        tagColor: 'blue',
        bullets: ['Two-tier structural grid', 'Multi-card operational bottom', 'Zero lower-half empty space']
      }
    ], 3),
    bottomTakeaway: {
      title: 'Verification Result',
      text: 'Notion style engine is fully verified and publication-ready.'
    },
    footerTitle: 'Notion Engine Verification Deck',
    pageNum: 2,
    totalPages: 2
  });

  const testOut = path.join(REPO_ROOT, 'tmp_notion_test_output.pdf');
  const res = await renderNotionPresentationToPdf({
    slidesHtml: [coverSpread, contentSpread],
    outputPath: testOut,
  });

  console.log(`\nNotion test render succeeded!`);
  console.log(`Generated: ${res.outputPath} (${res.sizeBytes} bytes)`);
  if (fs.existsSync(testOut)) {
    fs.unlinkSync(testOut);
  }
}

function printHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║         Notion Style Presentation Framework (v2.0)                        ║
║         Slides that read like authentic Notion pages                      ║
╚═══════════════════════════════════════════════════════════════════════════╝

Commands:
  render <file.mjs> [--output out.pdf] [--preview]   Render presentation to 16:9 PDF
  new "<Topic Name>"                                 Scaffold a new presentation
  preview [file.pdf]                                 Open presentation in system viewer
  test                                               Run engine verification test

Examples:
  node styles/notion/notion-cli.mjs render reports/agentic-commerce-notion/report.mjs --preview
  node styles/notion/notion-cli.mjs new "Autonomous Multi-Agent Systems"
  node styles/notion/notion-cli.mjs test
`);
}
