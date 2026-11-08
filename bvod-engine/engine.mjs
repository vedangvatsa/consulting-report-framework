/**
 * McKinsey BVOD Landscape PDF Rendering Engine
 * Compiles modular HTML/CSS spreads into publication-grade A4 landscape digital PDFs via Playwright.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function renderReportToPdf({
  htmlSpreads = [],
  fullHtml = null,
  outputPath = 'output.pdf',
  cssPath = null,
  generatePreviews = false,
  previewDir = null,
}) {
  const finalCssPath = cssPath || path.join(__dirname, 'design-system.css');
  const cssContent = fs.readFileSync(finalCssPath, 'utf8');

  let completeHtml = '';
  if (fullHtml) {
    completeHtml = fullHtml;
  } else {
    completeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          ${cssContent}
        </style>
      </head>
      <body>
        ${htmlSpreads.join('\n')}
      </body>
      </html>
    `;
  }

  // Ensure output directory exists
  const resolvedOut = path.resolve(outputPath);
  const outDir = path.dirname(resolvedOut);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Load Playwright dynamically with fallback paths
  let playwright;
  try {
    playwright = await import('playwright');
  } catch (err) {
    // Fallback lookup in parent or neighboring node_modules
    const altPaths = [
      path.join(__dirname, '../node_modules/playwright/index.js'),
      path.join(__dirname, '../../research-paper-framework/node_modules/playwright/index.js'),
    ];
    let loaded = false;
    for (const p of altPaths) {
      if (fs.existsSync(p)) {
        playwright = await import(p);
        loaded = true;
        break;
      }
    }
    if (!loaded) throw new Error('Playwright is required to render BVOD reports. Run npm install playwright.');
  }

  const chromium = playwright.default?.chromium || playwright.chromium;
  
  // Resilient browser executable detection
  const launchOptions = { headless: true };
  let defaultExecPath = null;
  try {
    defaultExecPath = chromium.executablePath();
  } catch (e) {}

  if (!defaultExecPath || !fs.existsSync(defaultExecPath)) {
    // Check cached playwright binaries or system Chrome
    const searchDirs = [
      path.join(process.env.HOME || '', 'Library/Caches/ms-playwright'),
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ];
    
    let foundExec = null;
    if (fs.existsSync(searchDirs[1])) {
      foundExec = searchDirs[1];
    } else if (fs.existsSync(searchDirs[0])) {
      const entries = fs.readdirSync(searchDirs[0]);
      for (const entry of entries) {
        if (entry.startsWith('chromium_headless_shell-') || entry.startsWith('chromium-')) {
          const sub1 = path.join(searchDirs[0], entry, 'chrome-headless-shell-mac-arm64', 'chrome-headless-shell');
          const sub2 = path.join(searchDirs[0], entry, 'chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium');
          if (fs.existsSync(sub1)) { foundExec = sub1; break; }
          if (fs.existsSync(sub2)) { foundExec = sub2; break; }
        }
      }
    }
    if (foundExec) {
      launchOptions.executablePath = foundExec;
    }
  }

  const browser = await chromium.launch(launchOptions);
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1131 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.setContent(completeHtml, { waitUntil: 'networkidle' });

  // Ensure web fonts are completely loaded before printing
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  // Short delay to ensure layout settling and font rendering
  await page.waitForTimeout(600);

  // Print exact A4 landscape PDF
  await page.pdf({
    path: resolvedOut,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  // Generate PNG previews if requested
  if (generatePreviews) {
    const targetPreviewDir = previewDir || path.join(outDir, 'previews');
    if (!fs.existsSync(targetPreviewDir)) {
      fs.mkdirSync(targetPreviewDir, { recursive: true });
    }
    try {
      execSync(`pdftoppm -png -r 150 "${resolvedOut}" "${path.join(targetPreviewDir, 'page')}"`);
    } catch (err) {
      console.warn('pdftoppm preview generation failed or not installed. PDF was generated successfully.');
    }
  }

  return {
    outputPath: resolvedOut,
    sizeBytes: fs.statSync(resolvedOut).size,
  };
}
