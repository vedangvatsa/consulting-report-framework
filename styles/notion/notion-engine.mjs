/**
 * Notion Style Presentation PDF Rendering Engine
 * Compiles modular Notion-style slides into crisp 16:9 widescreen presentation PDFs via Playwright.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function renderNotionPresentationToPdf({
  slidesHtml = [],
  fullHtml = null,
  outputPath = 'notion_presentation.pdf',
  cssPath = null,
  generatePreviews = false,
  previewDir = null,
}) {
  const finalCssPath = cssPath || path.join(__dirname, 'notion-design-system.css');
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
        <title>Notion Style Presentation</title>
        <style>
          ${cssContent}
        </style>
      </head>
      <body>
        ${slidesHtml.join('\n')}
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
    const altPaths = [
      path.join(__dirname, '../../node_modules/playwright/index.js'),
      path.join(__dirname, '../../../research-paper-framework/node_modules/playwright/index.js'),
    ];
    let loaded = false;
    for (const p of altPaths) {
      if (fs.existsSync(p)) {
        playwright = await import(p);
        loaded = true;
        break;
      }
    }
    if (!loaded) throw new Error('Playwright is required to render presentations.');
  }

  const chromium = playwright.default?.chromium || playwright.chromium;
  
  // Resilient browser executable detection
  const launchOptions = { headless: true };
  let defaultExecPath = null;
  try {
    defaultExecPath = chromium.executablePath();
  } catch (e) {}

  if (!defaultExecPath || !fs.existsSync(defaultExecPath)) {
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
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.setContent(completeHtml, { waitUntil: 'networkidle' });

  // Ensure Google Font 'Inter' is loaded
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  await page.waitForTimeout(500);

  // Print exact 16:9 widescreen presentation PDF
  await page.pdf({
    path: resolvedOut,
    width: '1280px',
    height: '720px',
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
      execSync(`pdftoppm -png -r 150 "${resolvedOut}" "${path.join(targetPreviewDir, 'slide')}"`);
    } catch (err) {
      console.warn('pdftoppm preview generation failed or not installed. PDF generated successfully.');
    }
  }

  return {
    outputPath: resolvedOut,
    sizeBytes: fs.statSync(resolvedOut).size,
  };
}
