# Notion Style Executive Research Report & Presentation Theme

A publication-grade consulting report framework modeled on Notion's ultra-minimalist design system and Stripe Press editorial elegance (matching the aesthetics of `hashtagweb3.com` and `web3-jobs`).

## Design Architecture

- **Geometry**: A4 Landscape Executive Report (`297mm × 210mm`) & 16:9 Widescreen Slide (`1280px × 720px`)
- **Typography**: `Inter` (Google Fonts) throughout:
  - Cover title: Inter 800 at 46px (line-height 1.12, letter-spacing -0.03em)
  - Section headlines: Inter 700 at 22px to 24px (line-height 1.22, letter-spacing -0.02em)
  - Lead prose: Inter 600 at 10.8px to 11.5px (line-height 1.5)
  - Body paragraphs: Inter 400 at 9.8px to 10.5px (line-height 1.55, left-aligned)
  - Exhibit headings: Inter 700 at 14px; analysis text at 8px to 9px
- **Strict Monochrome Palette (Zero Blue Rule)**:
  - Background: Pure stark white (`#ffffff`)
  - Primary Headings & Ink: `#09090b`
  - Charcoal Darks: `#18181b`, `#27272a`
  - Zinc Midtones: `#3f3f46`, `#52525b`, `#71717a`
  - Border & Dividers: `#e4e4e7`, `#d4d4d8`
  - Paper Subtle Fill: `#f4f4f5`
  - **Zero Blue/Color Rule**: No blue, purple, cyan, or color gradients anywhere in layout, badges, charts, or borders.

## Layout Principles

1. **Zero Empty Space**:
   - Both the left editorial column and right exhibit column run continuously from the top header to an elegant ~18mm margin above the footer rule (~540px vertical baseline).
   - Unified 2-column editorial grid (`.report-body` with `grid-template-columns: 1.04fr 0.96fr; gap: 24px; align-items: stretch;`).
2. **Visual Illustrations & Diagrams Throughout**:
   - Cover features a large-format Stripe Press style editorial illustration (`agentic-commerce-cover.jpg`).
   - Spread 3 features an architectural protocol schematic illustration (`agentic-tech-architecture.jpg`).
   - Every spread features clean, precision SVG architectural diagrams and visual matrices.
3. **Chart Precision & Collision Prevention**:
   - Bar labels placed cleanly above bars with dedicated clearance. Never overlap indicators or lines on data labels.
4. **Simple English**:
   - Clear, high-school reading level. No AI buzzwords or consulting jargon. Real-world brand examples (Amazon, Nike, Walmart, Apple, Stripe, Visa, Shopify).
5. **Left-Aligned Text**:
   - Always use `text-align: left;` to guarantee crisp Chromium PDF glyph rendering.

