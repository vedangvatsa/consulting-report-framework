/**
 * Notion Aesthetic Consulting Report Components
 * Features:
 * - Pure Inter Google Fonts typography (bold 700 headings, 400 body, warm ink)
 * - 10 authentic Notion-style handcrafted vector line-art illustrations
 * - Full-density Two-Tier consulting presentation spreads (no empty lower halves)
 * - Zero AI slop, no fake software UI chrome, 100% publication-grade executive design
 */

export function renderHeader(sectionTag, docTopic) {
  return `
    <div class="spread-header">
      <span class="section-tag">${escapeHtml(sectionTag)}</span>
      <span class="doc-topic">${escapeHtml(docTopic)}</span>
    </div>
  `;
}

export function renderFooter(footerTitle, pageNum, totalPages) {
  return `
    <div class="spread-footer">
      <span class="footer-title">${escapeHtml(footerTitle)}</span>
      <span class="page-number">Page ${pageNum} of ${totalPages}</span>
    </div>
  `;
}

export function renderCoverPage({
  superHeader = 'EMPIRICAL RESEARCH REPORT | STRATEGIC BRIEFING',
  title = 'The Business Value of Agentic Commerce',
  subtitle = 'Taxonomy, empirical verification architecture, and market readiness across 100,000 domains.',
  metadataBoxes = [],
  author = 'Vedang Ratan Vatsa',
  authorTitle = 'Founder, Hashtag Web3 | Lead Researcher, veda.ng',
  reportType = 'Open-Access Empirical Research Report',
  doi = '10.5281/zenodo.23661069',
  license = 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
  svgIllustration = null,
}) {
  const metaHtml = metadataBoxes.map(box => `
    <div style="border-left: 2.5px solid ${box.highlight ? 'var(--ink-heading)' : 'var(--border)'}; padding-left: 10px;">
      <div style="font-size: 11px; font-weight: 700; color: var(--ink-heading);">${escapeHtml(box.value)}</div>
      <div style="font-size: 8.5px; color: var(--ink-secondary);">${escapeHtml(box.label)}</div>
    </div>
  `).join('');

  const heroIllustration = svgIllustration || svgNotionDeskWorker();

  return `
    <div class="spread" style="justify-content: space-between;">
      <div>
        <div style="font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-secondary); margin-bottom: 30px;">
          ${escapeHtml(superHeader)}
        </div>
        
        <div style="display: flex; gap: 40px; align-items: flex-start;">
          <div style="flex: 1.25;">
            <h1 style="font-size: 40px; line-height: 1.18; font-weight: 800; color: var(--ink-heading); letter-spacing: -0.025em; margin-bottom: 20px;">
              ${title}
            </h1>
            <p style="font-size: 13.5px; line-height: 1.6; color: var(--ink); max-width: 520px; margin-bottom: 28px;">
              ${escapeHtml(subtitle)}
            </p>
            
            <div style="display: flex; gap: 24px; margin-top: 10px;">
              ${metaHtml}
            </div>
          </div>
          
          <div style="flex: 0.75; display: flex; justify-content: flex-end; align-items: center; padding-top: 5px;">
            ${heroIllustration}
          </div>
        </div>
      </div>
      
      <div style="border-top: 1px solid var(--border); padding-top: 14px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 10.5px; font-weight: 700; color: var(--ink-heading);">${escapeHtml(author)}</div>
          <div style="font-size: 8.5px; color: var(--ink-secondary);">${escapeHtml(authorTitle)}</div>
        </div>
        <div style="text-align: right; font-size: 8px; color: var(--ink-secondary); line-height: 1.45;">
          ${escapeHtml(reportType)} | DOI: ${escapeHtml(doi)}<br>
          Published under ${escapeHtml(license)}
        </div>
      </div>
    </div>
  `;
}

export function renderStatsHeroSpread({
  sectionTag = 'EXECUTIVE SUMMARY',
  docTopic = 'EMPIRICAL SCOPE & FINDINGS',
  quote = '“The most extensive and rigorous research undertaken anywhere to study whether autonomous shopping agents can act within consumer permission.”',
  quoteAttribution = null,
  findingsIntro = 'Our research yielded several striking findings across 100,000 domains:',
  findings = [],
  stats = [],
  bottomCallout = null,
  footerTitle = 'The Business Value of Agentic Commerce',
  pageNum = 2,
  totalPages = 10,
  illustrationSvg = null,
}) {
  const findingsHtml = findings.map((f, i) => `
    <div style="flex: 1;">
      <div style="font-size: 9.5px; font-weight: 700; color: var(--ink-heading); margin-bottom: 4px;">${i + 1}. ${escapeHtml(f.title)}</div>
      <p style="font-size: 8.5px; line-height: 1.45; color: var(--ink-secondary);">${escapeHtml(f.text)}</p>
    </div>
  `).join('');

  const statsHtml = stats.map(s => `
    <div class="stat-stack">
      <div class="stat-num">${escapeHtml(s.num)}</div>
      <div class="stat-caption">${escapeHtml(s.caption)}</div>
    </div>
  `).join('');

  const illustration = illustrationSvg || svgNotionStandingAnalyst();

  return `
    <div class="spread">
      ${renderHeader(sectionTag, docTopic)}
      
      <div class="spread-body">
        <div style="display: flex; gap: 36px; height: 100%;">
          <!-- Left Column -->
          <div style="flex: 1.25; display: flex; flex-direction: column;">
            <div class="hero-quote" style="margin-bottom: 18px;">
              ${quote}
            </div>
            ${quoteAttribution ? `<div class="quote-attribution" style="margin-top: -12px; margin-bottom: 16px;">${escapeHtml(quoteAttribution)}</div>` : ''}
            
            <div style="font-size: 11px; font-weight: 600; color: var(--ink-heading); margin-bottom: 12px;">
              ${escapeHtml(findingsIntro)}
            </div>
            
            <div style="display: flex; gap: 14px; border-top: 1px solid var(--border); padding-top: 12px; margin-bottom: 12px;">
              ${findingsHtml}
            </div>
            
            ${bottomCallout ? `
              <div class="notion-callout" style="margin-top: auto;">
                <div>
                  <strong>${escapeHtml(bottomCallout.title)}</strong><br>
                  ${escapeHtml(bottomCallout.text)}
                </div>
              </div>
            ` : ''}
          </div>
          
          <!-- Right Column -->
          <div style="flex: 0.75; display: flex; flex-direction: column; justify-content: space-between; border-left: 1px solid var(--border); padding-left: 28px;">
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${statsHtml}
            </div>
            
            <div style="display: flex; justify-content: flex-end; align-items: flex-end;">
              ${illustration}
            </div>
          </div>
        </div>
      </div>
      
      ${renderFooter(footerTitle, pageNum, totalPages)}
    </div>
  `;
}

export function renderTwoTierSpread({
  sectionTag = 'SECTION',
  docTopic = 'STRATEGIC FRAMEWORK',
  headline = 'Headline capturing the governing thought of this spread.',
  narrative = '',
  exhibitLeft = null,
  exhibitRight = null,
  tierBottom = null,
  bottomTakeaway = null,
  footerTitle = 'The Business Value of Agentic Commerce',
  pageNum = 3,
  totalPages = 10,
}) {
  return `
    <div class="spread">
      ${renderHeader(sectionTag, docTopic)}
      
      <div class="spread-body">
        <!-- Tier Top: Empirical Data & Narrative -->
        <div class="tier-top">
          <div class="col-left">
            <h2 class="spread-title">${headline}</h2>
            <div class="spread-narrative">${narrative}</div>
            ${exhibitLeft || ''}
          </div>
          
          <div class="col-right">
            ${exhibitRight || ''}
          </div>
        </div>
        
        <!-- Tier Bottom: Operational Frameworks & Takeaway -->
        <div class="tier-bottom">
          ${tierBottom || ''}
          ${bottomTakeaway ? `
            <div class="bottom-strip">
              <strong>${escapeHtml(bottomTakeaway.title)}:</strong> ${escapeHtml(bottomTakeaway.text)}
            </div>
          ` : ''}
        </div>
      </div>
      
      ${renderFooter(footerTitle, pageNum, totalPages)}
    </div>
  `;
}

export function renderTableExhibit({
  title = 'Data Exhibit',
  subtitle = null,
  headers = [],
  rows = [],
  footer = null,
}) {
  const headerHtml = headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
  const rowsHtml = rows.map(r => `
    <tr>
      ${r.map(c => `<td>${c}</td>`).join('')}
    </tr>
  `).join('');

  return `
    <div class="exhibit-card">
      <div class="exhibit-header">${escapeHtml(title)}</div>
      ${subtitle ? `<div class="exhibit-sub">${escapeHtml(subtitle)}</div>` : ''}
      <table class="notion-table">
        <thead><tr>${headerHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      ${footer ? `<div style="font-size: 8px; color: var(--ink-secondary); margin-top: 6px;">${escapeHtml(footer)}</div>` : ''}
    </div>
  `;
}

export function renderBarChartExhibit({
  title = 'Exhibit: Empirical Benchmark',
  subtitle = null,
  items = [],
  footer = null,
}) {
  const barsHtml = items.map(item => `
    <div class="bar-row">
      <div class="bar-label">${escapeHtml(item.label)}</div>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${item.pct}%; ${item.color ? `background: ${item.color};` : ''}"></div>
      </div>
      <div class="bar-val">${escapeHtml(item.value)}</div>
    </div>
  `).join('');

  return `
    <div class="exhibit-card">
      <div class="exhibit-header">${escapeHtml(title)}</div>
      ${subtitle ? `<div class="exhibit-sub">${escapeHtml(subtitle)}</div>` : ''}
      <div class="bar-chart-container">
        ${barsHtml}
      </div>
      ${footer ? `<div style="font-size: 8px; color: var(--ink-secondary); margin-top: 6px;">${escapeHtml(footer)}</div>` : ''}
    </div>
  `;
}

export function renderFrameworkCards(cards = [], columns = 3) {
  const gridClass = `grid-${columns}`;
  const cardsHtml = cards.map(c => `
    <div class="framework-card ${c.highlight ? 'highlight' : ''}">
      <div class="card-title">${escapeHtml(c.title)}</div>
      <div class="card-desc">${c.desc}</div>
    </div>
  `).join('');

  return `<div class="${gridClass}">${cardsHtml}</div>`;
}

export function renderParameterConsole({
  title = 'Delegation Boundary Specification (Pre-Transaction Console)',
  subtitle = 'Cryptographic parameters enforced before transaction execution:',
  parameters = [],
}) {
  const paramsHtml = parameters.map(p => `
    <div class="console-chip">
      <div class="chip-label">${escapeHtml(p.label)}</div>
      <div class="chip-value">${escapeHtml(p.value)}</div>
      <div class="chip-sub">${escapeHtml(p.sub)}</div>
    </div>
  `).join('');

  return `
    <div class="exhibit-card" style="display: flex; flex-direction: column; gap: 6px;">
      <div style="font-size: 9.5px; font-weight: 700; color: var(--ink-heading);">${escapeHtml(title)}</div>
      <p style="font-size: 8.5px; color: var(--ink-secondary); margin-bottom: 2px;">${escapeHtml(subtitle)}</p>
      <div style="display: grid; grid-template-columns: repeat(${parameters.length}, 1fr); gap: 6px;">
        ${paramsHtml}
      </div>
    </div>
  `;
}

export function renderRoadmapPhases(phases = []) {
  const phasesHtml = phases.map(p => `
    <div class="framework-card ${p.highlight ? 'highlight' : ''}">
      <div class="card-title" style="color: var(--ink-heading);">${escapeHtml(p.phase)}</div>
      <div class="card-desc">${escapeHtml(p.desc)}</div>
    </div>
  `).join('');

  return `<div class="grid-${phases.length}">${phasesHtml}</div>`;
}

/* ==========================================================================
   AUTHENTIC NOTION-STYLE VECTOR ILLUSTRATIONS (Iconic Minimalist Line Art)
   Clean 1.8px-2px black line strokes, expressive pose, warm grayscale fills
   ========================================================================== */

export function svgNotionDeskWorker() {
  return `
    <svg width="240" height="190" viewBox="0 0 240 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Desk Surface -->
      <line x1="20" y1="150" x2="225" y2="150" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      <line x1="45" y1="150" x2="45" y2="185" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      <line x1="200" y1="150" x2="200" y2="185" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      
      <!-- Laptop -->
      <rect x="75" y="112" width="58" height="38" rx="2" fill="#ffffff" stroke="#18181b" stroke-width="1.8"/>
      <line x1="68" y1="150" x2="140" y2="150" stroke="#18181b" stroke-width="2"/>
      <line x1="88" y1="126" x2="120" y2="126" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      <line x1="88" y1="134" x2="110" y2="134" stroke="#e4e4e7" stroke-width="1.5" stroke-linecap="round"/>
      
      <!-- Notion Character (Seated) -->
      <circle cx="155" cy="72" r="16" fill="#ffffff" stroke="#18181b" stroke-width="2"/>
      <circle cx="150" cy="73" r="3.5" fill="none" stroke="#18181b" stroke-width="1.5"/>
      <circle cx="160" cy="73" r="3.5" fill="none" stroke="#18181b" stroke-width="1.5"/>
      <line x1="153.5" y1="73" x2="156.5" y2="73" stroke="#18181b" stroke-width="1.5"/>
      <path d="M140 68 C144 54, 168 54, 172 68 Z" fill="#18181b"/>
      <path d="M142 88 L135 150 L175 150 L168 88 Z" fill="#fafaf9" stroke="#18181b" stroke-width="2" stroke-linejoin="round"/>
      <path d="M145 102 L120 128 L105 146" stroke="#18181b" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M180 95 L180 160" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      
      <!-- Coffee Mug -->
      <rect x="180" y="136" width="12" height="14" rx="2" fill="#ffffff" stroke="#18181b" stroke-width="1.5"/>
      <path d="M192 139 C196 139, 196 147, 192 147" stroke="#18181b" stroke-width="1.5" fill="none"/>
      
      <!-- Floating Abstract Document / Chart -->
      <g transform="translate(155, 12)">
        <rect x="0" y="0" width="46" height="36" rx="3" fill="#ffffff" stroke="#18181b" stroke-width="1.5"/>
        <line x1="8" y1="10" x2="28" y2="10" stroke="#18181b" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="8" y1="18" x2="38" y2="18" stroke="#e4e4e7" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="8" y1="26" x2="22" y2="26" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>
  `;
}

export function svgNotionStandingAnalyst() {
  return `
    <svg width="210" height="280" viewBox="0 0 210 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Notion Character Standing with Clipboard -->
      <circle cx="105" cy="52" r="17" fill="#ffffff" stroke="#18181b" stroke-width="2"/>
      <circle cx="99" cy="53" r="3.8" fill="none" stroke="#18181b" stroke-width="1.5"/>
      <circle cx="111" cy="53" r="3.8" fill="none" stroke="#18181b" stroke-width="1.5"/>
      <line x1="102.8" y1="53" x2="107.2" y2="53" stroke="#18181b" stroke-width="1.5"/>
      <path d="M102 62 Q105 65 108 62" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M88 48 C92 32, 120 32, 122 48 C124 54, 120 58, 118 60 C108 62, 94 60, 88 48 Z" fill="#18181b"/>
      
      <!-- Body Coat / Blazer -->
      <path d="M92 69 L70 120 L58 195 L95 195 L105 140 L115 195 L152 195 L140 120 L118 69 Z" fill="#fafaf9" stroke="#18181b" stroke-width="2" stroke-linejoin="round"/>
      <path d="M98 69 L105 92 L112 69" stroke="#18181b" stroke-width="1.8" fill="none"/>
      
      <!-- Legs & Trousers -->
      <path d="M84 195 L80 265 L96 265 L100 195 Z" fill="#e4e4e7" stroke="#18181b" stroke-width="2"/>
      <path d="M110 195 L114 265 L130 265 L126 195 Z" fill="#e4e4e7" stroke="#18181b" stroke-width="2"/>
      <path d="M76 265 L98 265 L98 271 L74 271 Z" fill="#18181b"/>
      <path d="M112 265 L134 265 L134 271 L110 271 Z" fill="#18181b"/>
      
      <!-- Arms holding Tablet -->
      <path d="M128 105 L115 155 L100 150" stroke="#18181b" stroke-width="2" fill="none" stroke-linecap="round"/>
      <path d="M78 105 L82 145 L95 155" stroke="#18181b" stroke-width="2" fill="none" stroke-linecap="round"/>
      
      <!-- Notion Clipboard with Monochrome Styling -->
      <g transform="rotate(-8 95 145)">
        <rect x="85" y="120" width="36" height="48" rx="3" fill="#ffffff" stroke="#18181b" stroke-width="1.8"/>
        <rect x="97" y="117" width="12" height="6" rx="1.5" fill="#18181b"/>
        <line x1="91" y1="130" x2="114" y2="130" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
        <line x1="91" y1="138" x2="110" y2="138" stroke="#e4e4e7" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="91" y1="146" x2="115" y2="146" stroke="#e4e4e7" stroke-width="1.5" stroke-linecap="round"/>
      </g>
    </svg>
  `;
}

export function svgNotionPackageDilemma() {
  return `
    <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ground line -->
      <line x1="15" y1="160" x2="205" y2="160" stroke="#18181b" stroke-width="2" stroke-linecap="round"/>
      <!-- Huge Package Crate -->
      <rect x="105" y="60" width="90" height="100" rx="4" fill="#fafaf9" stroke="#18181b" stroke-width="2"/>
      <line x1="105" y1="110" x2="195" y2="110" stroke="#e4e4e7" stroke-width="1.5"/>
      <line x1="150" y1="60" x2="150" y2="160" stroke="#e4e4e7" stroke-width="1.5"/>
      <!-- Fragile Tape -->
      <rect x="120" y="80" width="60" height="16" rx="2" fill="#18181b" opacity="0.08"/>
      <text x="150" y="92" font-size="8" font-family="Inter, sans-serif" font-weight="700" fill="#18181b" text-anchor="middle">OVERSIZED</text>
      
      <!-- Character scratching head with measuring tape -->
      <circle cx="55" cy="65" r="15" fill="#ffffff" stroke="#18181b" stroke-width="2"/>
      <circle cx="50" cy="66" r="3" fill="#18181b"/>
      <circle cx="60" cy="66" r="3" fill="#18181b"/>
      <path d="M42 60 C45 48, 65 48, 68 60 Z" fill="#18181b"/>
      <!-- Body -->
      <path d="M42 80 L35 135 L75 135 L68 80 Z" fill="#ffffff" stroke="#18181b" stroke-width="2"/>
      <line x1="45" y1="135" x2="45" y2="160" stroke="#18181b" stroke-width="2"/>
      <line x1="65" y1="135" x2="65" y2="160" stroke="#18181b" stroke-width="2"/>
      <!-- Hand on head -->
      <path d="M68 95 L80 80 L70 65" stroke="#18181b" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Measuring tape in left hand -->
      <path d="M35 95 L22 110 L28 120" stroke="#18181b" stroke-width="2" fill="none" stroke-linecap="round"/>
      <rect x="22" y="118" width="16" height="12" rx="2" fill="#71717a" stroke="#18181b" stroke-width="1.5"/>
      <line x1="38" y1="124" x2="105" y2="124" stroke="#71717a" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>
  `;
}

export const renderTable = renderTableExhibit;
export const renderEditorialBarChart = renderBarChartExhibit;
export function renderCards(cards = [], cols = 3) {
  return renderFrameworkCards(cards, cols);
}
export function renderTakeawayBox(title, text) {
  return `
    <div class="bottom-strip">
      <strong>${escapeHtml(title)}:</strong> ${escapeHtml(text)}
    </div>
  `;
}

export function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
