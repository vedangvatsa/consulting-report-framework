// ============================================================
// McKinsey-Standard Consulting Report Template
// Based on McKinsey Global Institute design language:
// - Bower (Georgia substitute) for headlines
// - McKinsey Sans (Helvetica Neue substitute) for body
// - Blue-dominant palette with neutral grays
// - Generous whitespace, strict grid, exhibit discipline
// ============================================================

// --- COLOR SYSTEM (McKinsey Blue palette) ---
#let mckinsey-blue = rgb("#005EB8")      // Primary brand blue
#let dark-blue = rgb("#003A70")          // Deep headings
#let navy = rgb("#16213E")               // Darkest (cover, dividers)
#let steel = rgb("#5E6B7A")              // Body-secondary, captions
#let silver = rgb("#A2AAAD")             // Chart axes, light borders
#let light-bg = rgb("#F5F5F5")           // Exhibit backgrounds
#let white = rgb("#FFFFFF")
#let highlight-blue = rgb("#0091DA")     // Accent for key data points
#let red-neg = rgb("#D63B2F")            // Negative/risk only
#let dark-text = rgb("#2D2D2D")          // Body text

// ============================================================
// DOCUMENT WRAPPER
// ============================================================
#let report(title: "", subtitle: "", author: "", date: "", body) = {
  set document(title: title, author: author)
  set page(paper: "us-letter", margin: (x: 1in, y: 0.9in),
    footer: context {
      if counter(page).get().first() > 1 {
        set text(8pt, fill: silver)
        h(1fr) + str(counter(page).get().first()) + h(1fr)
      }
    }
  )

  // --- GLOBAL TYPOGRAPHY ---
  set text(font: "Helvetica Neue", size: 10.5pt, fill: dark-text)
  set par(justify: true, leading: 0.75em, spacing: 0.85em)
  set heading(numbering: none)
  set list(indent: 0.8em, body-indent: 0.5em, spacing: 0.65em)
  set enum(indent: 0.8em, body-indent: 0.5em, spacing: 0.65em)

  // --- HEADING STYLES ---
  show heading.where(level: 1): it => {
    set text(font: "Georgia", size: 22pt, weight: "bold", fill: dark-blue)
    block(sticky: true, above: 1.2em, below: 0.6em, it.body)
  }
  show heading.where(level: 2): it => {
    set text(font: "Helvetica Neue", size: 13pt, weight: "bold", fill: dark-blue)
    block(sticky: true, above: 1.2em, below: 0.5em)[
      #it.body
      #v(0.25em)
      #line(length: 100%, stroke: 0.75pt + silver)
    ]
  }
  show heading.where(level: 3): it => {
    set text(font: "Helvetica Neue", size: 11pt, weight: "bold", fill: dark-blue)
    block(sticky: true, above: 1.2em, below: 0.5em, it.body)
  }

  // --- GLOBAL TABLE STYLING ---
  show table: set text(size: 9pt)
  set table(inset: (x: 10pt, y: 7pt))

  // --- COVER PAGE ---
  page(margin: (x: 0in, y: 0in), footer: none)[
    // Full-bleed blue header bar
    #rect(width: 100%, height: 38%, fill: navy)[
      #pad(x: 1.2in, top: 1.8in)[
        #text(font: "Georgia", size: 36pt, weight: "bold", fill: white)[#title]
        #v(0.6em)
        #text(font: "Helvetica Neue", size: 14pt, fill: rgb("#FFFFFFCC"))[#subtitle]
      ]
    ]
    #pad(x: 1.2in, top: 1.5in)[
      #text(size: 11pt, fill: steel)[#author]
      #v(0.3em)
      #text(size: 11pt, fill: steel)[#date]
      #v(3em)
      #line(length: 40%, stroke: 0.5pt + silver)
      #v(0.8em)
      #text(size: 7.5pt, fill: silver, style: "italic")[
        This document has been prepared for the exclusive use of internal strategy teams.\
        It contains proprietary and confidential information. The author accepts no liability\
        for decisions made in reliance on this report.
      ]
    ]
  ]

  body
}

// ============================================================
// SECTION DIVIDER (full-page blue break)
// ============================================================
#let section-divider(number, title, subtitle) = {
  pagebreak(weak: true)
  page(margin: (x: 0in, y: 0in), footer: none)[
    #rect(width: 100%, height: 100%, fill: navy)[
      #pad(x: 1.5in, y: 2.5in)[
        #text(size: 64pt, weight: "bold", fill: rgb("#FFFFFF10"))[#number]
        #v(-0.5em)
        #text(font: "Georgia", size: 28pt, weight: "bold", fill: white)[#title]
        #v(0.6em)
        #line(length: 60pt, stroke: 2pt + mckinsey-blue)
        #v(0.5em)
        #text(size: 12pt, fill: rgb("#FFFFFFAA"))[#subtitle]
      ]
    ]
  ]
}

// ============================================================
// KPI CARDS & GRID
// ============================================================
#let kpi-card(value, label, delta) = {
  rect(width: 100%, radius: 0pt,
    stroke: (bottom: 2.5pt + mckinsey-blue, rest: 0.5pt + rgb("#E0E0E0")),
    inset: 16pt, fill: white)[
    #align(center)[
      #text(size: 26pt, weight: "bold", fill: dark-blue)[#value]
      #v(0.25em)
      #text(size: 7.5pt, weight: "bold", fill: steel, tracking: 0.5pt)[#upper(label)]
      #v(0.15em)
      #text(size: 7pt, fill: silver)[#delta]
    ]
  ]
}

#let kpi-grid(..cards) = {
  let items = cards.pos()
  block(breakable: false, above: 0.8em, below: 0.8em)[
    #grid(columns: items.len(), column-gutter: 14pt, ..items)
  ]
}

// ============================================================
// CALLOUT BOX (blue left-border, light bg)
// ============================================================
#let callout(body) = {
  block(breakable: false, above: 0.8em, below: 0.8em)[
    #rect(width: 100%, stroke: (left: 3pt + mckinsey-blue, rest: none),
      radius: 0pt, inset: (left: 18pt, rest: 14pt), fill: light-bg)[
      #set text(size: 9.5pt)
      #body
    ]
  ]
}

// ============================================================
// CHART EXHIBIT
// Blue rule above, title, chart, source below.
// Title comes from Typst, NOT from matplotlib.
// ============================================================
#let chart-exhibit(number, title, path, src, width: 92%) = {
  block(breakable: false, above: 0.8em, below: 0.8em)[
    #line(length: 100%, stroke: 1.5pt + mckinsey-blue)
    #v(0.3em)
    #text(size: 9.5pt, weight: "bold", fill: dark-blue)[Exhibit #number]
    #h(6pt)
    #text(size: 9.5pt, fill: dark-text)[#title]
    #v(0.4em)
    #image(path, width: width)
    #v(0.2em)
    #text(size: 7pt, style: "italic", fill: silver)[Source: #src]
  ]
}

// ============================================================
// TABLE EXHIBIT
// Blue rule above, title, table, source below.
// ============================================================
#let table-exhibit(number, title, src, body) = {
  block(breakable: false, above: 0.8em, below: 0.8em)[
    #line(length: 100%, stroke: 1.5pt + mckinsey-blue)
    #v(0.3em)
    #if number != none {
      text(size: 9.5pt, weight: "bold", fill: dark-blue)[Exhibit #number]
      h(6pt)
      text(size: 9.5pt, fill: dark-text)[#title]
    } else {
      text(size: 9.5pt, weight: "bold", fill: dark-blue)[#title]
    }
    #v(0.4em)
    #body
    #v(0.2em)
    #text(size: 7pt, style: "italic", fill: silver)[Source: #src]
  ]
}

// ============================================================
// HIGHLIGHT STAT (large featured number)
// ============================================================
#let highlight-stat(value, label) = {
  block(breakable: false, above: 0.8em, below: 0.8em)[
    #rect(width: 100%, radius: 0pt, inset: 18pt,
      fill: light-bg, stroke: (left: 3pt + mckinsey-blue, rest: none))[
      #text(size: 28pt, weight: "bold", fill: dark-blue)[#value]
      #v(0.15em)
      #text(size: 9.5pt, fill: steel)[#label]
    ]
  ]
}

// ============================================================
// TIMELINE ITEM (implementation roadmap)
// ============================================================
#let timeline-item(marker, title, desc) = {
  block(breakable: false, above: 0.8em, below: 0.8em)[
    #grid(columns: (80pt, 1fr), column-gutter: 16pt,
      rect(radius: 0pt, fill: mckinsey-blue, inset: (x: 10pt, y: 8pt))[
        #align(center)[#text(size: 9pt, weight: "bold", fill: white)[#marker]]
      ],
      [
        #text(size: 10.5pt, weight: "bold", fill: dark-blue)[#title]
        #v(0.2em)
        #text(size: 9.5pt, fill: steel)[#desc]
      ]
    )
  ]
}

// ============================================================
// BACKWARD-COMPAT: Standalone exhibit/source
// ============================================================
#let exhibit(number, title) = {
  v(0.8em, weak: true)
  line(length: 100%, stroke: 1.5pt + mckinsey-blue)
  v(0.3em, weak: true)
  text(size: 9.5pt, weight: "bold", fill: dark-blue)[Exhibit #number]
  h(6pt)
  text(size: 9.5pt, fill: dark-text)[#title]
  v(0.3em, weak: true)
}

#let source(txt) = {
  v(0.2em, weak: true)
  text(size: 7pt, style: "italic", fill: silver)[Source: #txt]
  v(0.8em, weak: true)
}
