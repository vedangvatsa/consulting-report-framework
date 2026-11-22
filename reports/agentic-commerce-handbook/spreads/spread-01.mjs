import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getSpread01() {
  const coverIllustrationPath = path.resolve(__dirname, '../../../assets/illustrations/agentic-commerce-cover.jpg');
  const coverIllustrationBase64 = fs.existsSync(coverIllustrationPath)
    ? fs.readFileSync(coverIllustrationPath).toString('base64')
    : '';

  return `
    <div class="spread cover-spread" style="padding: 24mm 24mm 16mm 24mm; justify-content: space-between;">
      <div style="display: flex; gap: 40px; align-items: center; margin: auto 0;">
        <div style="flex: 1.25;">
          <div style="font-size: 9px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 12px;">
            Comprehensive Industry Handbook
          </div>
          <h1 style="font-size: 44px; line-height: 1.12; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.03em; margin-bottom: 16px;">
            The Business Value of<br/>Agentic Commerce
          </h1>
          <p style="font-size: 14px; line-height: 1.5; color: var(--ink-secondary); font-weight: 400; max-width: 520px; margin-bottom: 24px;">
            A Comprehensive Technical Assessment of Autonomous Checkout Infrastructure, Protocol Specifications, and Merchant Deployment Strategies
          </p>

          <div style="display: flex; gap: 24px; padding-top: 12px;">
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">$1.5T BY 2030</div>
              <div style="font-size: 8.5px; color: var(--ink-secondary); margin-top: 2px;">Transactions influenced by machine agents</div>
            </div>
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">7-LAYER STACK</div>
              <div style="font-size: 8.5px; color: var(--ink-secondary); margin-top: 2px;">From discovery protocols to settlement rails</div>
            </div>
            <div style="border-left: 2px solid var(--ink-heading); padding-left: 12px;">
              <div style="font-size: 15px; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.02em;">57.2% BENCHMARK</div>
              <div style="font-size: 8.5px; color: var(--ink-secondary); margin-top: 2px;">Task completion on web evaluations</div>
            </div>
          </div>
        </div>

        <div style="flex: 0.95; display: flex; justify-content: center; align-items: center;">
          <img src="data:image/jpeg;base64,${coverIllustrationBase64}" style="max-width: 100%; max-height: 380px; object-fit: contain; mix-blend-mode: multiply;" alt="Agentic Commerce Cover Art" />
        </div>
      </div>

      <div style="border-top: 1px solid var(--border); padding-top: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 10.5px; font-weight: 700; color: var(--ink-heading);">Vedang Ratan Vatsa</div>
          <div style="font-size: 8.8px; color: var(--ink-secondary); margin-top: 2px;">Founder, Hashtag Web3</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 8.8px; font-weight: 600; color: var(--ink-heading);">20-Page Comprehensive Edition</div>
          <div style="font-size: 8px; color: var(--ink-secondary); margin-top: 2px;">Research and Technical Specifications</div>
        </div>
      </div>
    </div>
  `;
}
