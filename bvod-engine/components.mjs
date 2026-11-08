/**
 * McKinsey BVOD & Notion/No-Slop Component Library
 * Provides modular generators for A4 landscape publication-grade consulting spreads.
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
  superHeader = 'EMPIRICAL RESEARCH REPORT | OPEN-ACCESS BRIEFING',
  title = 'The Business Value of Design',
  subtitle = 'Rigorous analytical findings and strategic framework for executive decision makers.',
  metadataBoxes = [],
  author = 'Consulting Research Team',
  authorTitle = 'Lead Analyst',
  reportType = 'Open-Access Empirical Report',
  doi = '10.5281/zenodo.0000000',
  license = 'Creative Commons Attribution 4.0 International (CC BY 4.0)',
  svgHero = null,
}) {
  const metaHtml = metadataBoxes.map(box => `
    <div style="border-left: 2px solid ${box.highlight ? 'var(--blue)' : 'var(--charcoal)'}; padding-left: 8px;">
      <div style="font-size: 11px; font-weight: 700; color: ${box.highlight ? 'var(--blue)' : 'var(--charcoal)'};">${escapeHtml(box.value)}</div>
      <div style="font-size: 8.5px; color: var(--steel);">${escapeHtml(box.label)}</div>
    </div>
  `).join('');

  const heroIllustration = svgHero || svgWorkstationConsole();

  return `
    <div class="spread" style="justify-content: space-between;">
      <div>
        <div style="font-size: 9px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue); margin-bottom: 30px;">
          ${escapeHtml(superHeader)}
        </div>
        
        <div style="display: flex; gap: 40px; align-items: flex-start;">
          <div style="flex: 1.2;">
            <h1 style="font-family: var(--font-serif); font-size: 42px; line-height: 1.15; font-weight: 400; color: var(--charcoal); letter-spacing: -0.02em; margin-bottom: 20px;">
              ${title}
            </h1>
            <p style="font-size: 13px; line-height: 1.6; color: #4b5563; max-width: 500px; margin-bottom: 28px;">
              ${escapeHtml(subtitle)}
            </p>
            
            <div style="display: flex; gap: 24px; margin-top: 10px;">
              ${metaHtml}
            </div>
          </div>
          
          <div style="flex: 0.8; display: flex; justify-content: flex-end; align-items: center; padding-top: 10px;">
            ${heroIllustration}
          </div>
        </div>
      </div>
      
      <div style="border-top: 1px solid var(--rule); padding-top: 14px; display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <div style="font-size: 10px; font-weight: 700; color: var(--charcoal);">${escapeHtml(author)}</div>
          <div style="font-size: 8.5px; color: var(--steel);">${escapeHtml(authorTitle)}</div>
        </div>
        <div style="text-align: right; font-size: 8px; color: var(--steel); line-height: 1.4;">
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
  quote = '“The most extensive and rigorous research undertaken anywhere to study the actions that leaders can make to unlock business value.”',
  findingsIntro = 'Our research yielded several striking findings:',
  findings = [],
  stats = [],
  bottomCallout = null,
  footerTitle = 'Consulting Report',
  pageNum = 2,
  totalPages = 10,
}) {
  const findingsHtml = findings.map((f, i) => `
    <div style="flex: 1;">
      <div style="font-size: 9.5px; font-weight: 700; color: var(--charcoal); margin-bottom: 4px;">${i + 1}. ${escapeHtml(f.title)}</div>
      <p style="font-size: 8.5px; line-height: 1.45; color: #4b5563;">${escapeHtml(f.text)}</p>
    </div>
  `).join('');

  const statsHtml = stats.map(s => `
    <div class="stat-stack">
      <div class="stat-num">${escapeHtml(s.num)}</div>
      <div class="stat-caption">${escapeHtml(s.caption)}</div>
    </div>
  `).join('');

  const bottomCalloutHtml = bottomCallout ? `
    <div class="callout-box" style="margin-top: auto;">
      <strong>${escapeHtml(bottomCallout.title)}</strong>
      ${escapeHtml(bottomCallout.text)}
    </div>
  ` : '';

  return `
    <div class="spread">
      ${renderHeader(sectionTag, docTopic)}
      
      <div class="spread-body">
        <div style="display: flex; gap: 36px; height: 100%;">
          <!-- Left Column -->
          <div style="flex: 1.25; display: flex; flex-direction: column;">
            <div class="quote-title" style="margin-bottom: 22px;">
              ${quote}
            </div>
            
            <div class="quote-intro" style="margin-bottom: 14px;">
              ${escapeHtml(findingsIntro)}
            </div>
            
            <div style="display: flex; gap: 14px; border-top: 1px solid var(--rule); padding-top: 12px; margin-bottom: 12px;">
              ${findingsHtml}
            </div>
            
            ${bottomCalloutHtml}
          </div>
          
          <!-- Right Column -->
          <div style="flex: 0.75; display: flex; flex-direction: column; justify-content: space-between; border-left: 1px solid var(--rule); padding-left: 30px;">
            <div style="display: flex; flex-direction: column; gap: 14px;">
              ${statsHtml}
            </div>
            
            <div style="display: flex; justify-content: flex-end; align-items: flex-end;">
              ${svgBusinessWomanWithTablet()}
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
  headline = 'Headline capturing the single governing thought of this spread.',
  narrative = 'Executive narrative explaining the empirical findings and why this matters for boardroom decision makers.',
  exhibitLeft = null,
  exhibitRight = null,
  tierBottom = null,
  bottomTakeaway = null,
  footerTitle = 'Consulting Report',
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
      <table class="exhibit-table">
        <thead><tr>${headerHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
      ${footer ? `<div style="font-size: 8px; color: var(--steel); margin-top: 6px;">${escapeHtml(footer)}</div>` : ''}
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
      ${footer ? `<div style="font-size: 8px; color: var(--steel); margin-top: 6px;">${escapeHtml(footer)}</div>` : ''}
    </div>
  `;
}

export function renderFrameworkCards(cards = [], columns = 3) {
  const gridClass = `grid-${columns}`;
  const cardsHtml = cards.map(c => `
    <div class="framework-card ${c.secondary ? 'secondary' : ''}">
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
      <div style="font-size: 9.5px; font-weight: 700; color: var(--charcoal);">${escapeHtml(title)}</div>
      <p style="font-size: 8.5px; color: var(--steel); margin-bottom: 2px;">${escapeHtml(subtitle)}</p>
      <div style="display: grid; grid-template-columns: repeat(${parameters.length}, 1fr); gap: 6px;">
        ${paramsHtml}
      </div>
    </div>
  `;
}

export function renderRoadmapPhases(phases = []) {
  const phasesHtml = phases.map(p => `
    <div class="framework-card ${p.secondary ? 'secondary' : ''}">
      <div class="card-title">${escapeHtml(p.phase)}</div>
      <div class="card-desc">${escapeHtml(p.desc)}</div>
    </div>
  `).join('');

  return `<div class="grid-${phases.length}">${phasesHtml}</div>`;
}

/* SVG Vector Illustrations (Notion/Line style, zero AI slop) */

export function svgBusinessWomanWithTablet() {
  return `
    <svg width="220" height="295" viewBox="0 0 220 295" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Hair -->
      <path d="M125 50 C110 30, 75 40, 80 75 C70 85, 70 100, 85 105 C85 120, 100 135, 115 130 C125 125, 130 95, 125 50 Z" fill="#1f2937"/>
      <!-- Neck & Face Profile -->
      <path d="M78 80 Q88 95 95 92 Q98 105 102 110" stroke="#111827" stroke-width="1.8" fill="#f9fafb"/>
      <!-- Blazer / Jacket -->
      <path d="M85 105 L65 145 L45 220 L75 220 L95 160 L102 220 L125 220 L115 140 L102 110 Z" fill="#e5e7eb" stroke="#111827" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M85 105 L95 145 L102 110" stroke="#111827" stroke-width="1.5" fill="#ffffff"/>
      <!-- Trousers / Legs -->
      <path d="M73 220 L70 285 L85 285 L90 220 Z" fill="#d1d5db" stroke="#111827" stroke-width="1.8"/>
      <path d="M96 220 L97 285 L112 285 L108 220 Z" fill="#d1d5db" stroke="#111827" stroke-width="1.8"/>
      <!-- Shoes -->
      <path d="M68 285 L87 285 L87 289 L66 289 Z" fill="#111827"/>
      <path d="M96 285 L114 285 L114 289 L94 289 Z" fill="#111827"/>
      <!-- Left Arm holding Tablet -->
      <path d="M65 145 L62 185 L85 200" stroke="#111827" stroke-width="1.8" fill="none"/>
      <!-- Right Arm holding Tablet -->
      <path d="M110 142 L100 175 L82 195" stroke="#111827" stroke-width="1.8" fill="none"/>
      <!-- Tablet (Cobalt Blue Focus) -->
      <g transform="rotate(-15 85 185)">
        <rect x="75" y="160" width="38" height="52" rx="4" fill="#0038FF" stroke="#111827" stroke-width="1.8"/>
        <circle cx="94" cy="205" r="3" fill="#ffffff"/>
        <rect x="80" y="168" width="28" height="30" rx="2" fill="#eff6ff" opacity="0.9"/>
      </g>
    </svg>
  `;
}

export function svgWorkstationConsole() {
  return `
    <svg width="250" height="180" viewBox="0 0 250 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Monitor Frame -->
      <rect x="20" y="15" width="210" height="125" rx="5" fill="#ffffff" stroke="#111827" stroke-width="2"/>
      <line x1="20" y1="36" x2="230" y2="36" stroke="#e5e7eb" stroke-width="1.5"/>
      <circle cx="32" cy="25" r="3" fill="#0038FF"/>
      <circle cx="42" cy="25" r="3" fill="#9ca3af"/>
      <circle cx="52" cy="25" r="3" fill="#e5e7eb"/>
      
      <!-- Content Elements -->
      <rect x="35" y="48" width="60" height="8" rx="2" fill="#111827"/>
      <rect x="35" y="62" width="110" height="5" rx="1.5" fill="#d1d5db"/>
      <rect x="35" y="72" width="95" height="5" rx="1.5" fill="#e5e7eb"/>
      <rect x="35" y="82" width="75" height="5" rx="1.5" fill="#e5e7eb"/>
      
      <!-- Interactive Focus Card -->
      <rect x="160" y="48" width="55" height="58" rx="4" fill="#eff6ff" stroke="#0038FF" stroke-width="1.5"/>
      <path d="M172 75 L182 85 L202 65" stroke="#0038FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="168" y1="96" x2="207" y2="96" stroke="#93c5fd" stroke-width="2" stroke-linecap="round"/>
      
      <!-- Notion Character Peeking -->
      <path d="M12 145 C15 110, 45 105, 52 145 Z" fill="#e5e7eb" stroke="#111827" stroke-width="1.8"/>
      <circle cx="32" cy="105" r="14" fill="#ffffff" stroke="#111827" stroke-width="1.8"/>
      <!-- Cap -->
      <path d="M22 98 C25 90, 42 90, 45 98 Z" fill="#111827"/>
      <!-- Arm pointing to screen -->
      <path d="M40 120 L58 108 L72 118" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
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
