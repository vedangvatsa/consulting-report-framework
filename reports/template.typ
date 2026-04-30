// McKinsey-Style Consulting Report Template
#let navy = rgb("#16213E")
#let accent = rgb("#1A936F")
#let steel = rgb("#4A5568")
#let light-bg = rgb("#F7F8FA")
#let brand = rgb("#0F3460")
#let red-neg = rgb("#C0392B")

#let report(title: "", subtitle: "", author: "", date: "", body) = {
  set document(title: title, author: author)
  set page(paper: "us-letter", margin: (x: 1.2in, y: 1in),
    footer: context {
      if counter(page).get().first() > 1 {
        set text(8pt, fill: steel)
        h(1fr) + str(counter(page).get().first()) + h(1fr)
      }
    }
  )
  set text(font: "Helvetica Neue", size: 10pt, fill: rgb("#333"))
  set par(justify: true, leading: 0.7em, spacing: 0.8em)
  set heading(numbering: none)
  set list(indent: 0.8em, body-indent: 0.5em, spacing: 0.6em)
  set enum(indent: 0.8em, body-indent: 0.5em, spacing: 0.6em)

  // Prevent all blocks, figures, tables from splitting across pages
  set block(breakable: false)

  show heading.where(level: 1): it => {
    set text(font: "Georgia", size: 22pt, weight: "bold", fill: navy)
    block(above: 1em, below: 0.6em, it.body)
  }
  show heading.where(level: 2): it => {
    set text(font: "Helvetica Neue", size: 14pt, weight: "bold", fill: navy)
    block(above: 1.5em, below: 0.6em, it.body)
    line(length: 100%, stroke: 0.5pt + rgb("#DDD"))
  }
  show heading.where(level: 3): it => {
    set text(font: "Helvetica Neue", size: 11pt, weight: "bold", fill: navy)
    block(above: 1em, below: 0.5em, it.body)
  }
  show table: set text(size: 8.5pt)

  // --- COVER PAGE ---
  page(margin: (x: 1.2in, y: 0in), footer: none)[
    #v(0.8in)
    #rect(width: 100%, height: 6pt, fill: brand)
    #v(2in)
    #align(center)[
      #text(font: "Georgia", size: 32pt, weight: "bold", fill: navy)[#title]
      #v(0.5em)
      #text(size: 13pt, fill: steel)[#subtitle]
      #v(2em)
      #text(size: 11pt, fill: steel)[#author #h(1em) | #h(1em) #date]
      #v(3em)
      #rect(width: 60%, height: 0.5pt, fill: rgb("#DDD"))
      #v(1em)
      #text(size: 7.5pt, fill: rgb("#AAA"), style: "italic")[
        This document has been prepared for the exclusive use of internal strategy teams.\
        It contains proprietary and confidential information. The author accepts no liability\
        for decisions made in reliance on this report.
      ]
    ]
  ]

  body
}

// --- COMPONENT: Section Divider ---
#let section-divider(number, title, subtitle) = {
  pagebreak()
  page(margin: (x: 0in, y: 0in), footer: none)[
    #rect(width: 100%, height: 100%, fill: navy)[
      #pad(x: 1.5in, y: 2.5in)[
        #text(size: 48pt, weight: "bold", fill: rgb("#FFFFFF18"))[#number]
        #v(-0.3em)
        #text(font: "Georgia", size: 26pt, weight: "bold", fill: white)[#title]
        #v(0.5em)
        #text(size: 11pt, fill: rgb("#FFFFFFAA"))[#subtitle]
      ]
    ]
  ]
}

// --- COMPONENT: KPI Grid ---
#let kpi-card(value, label, delta) = {
  rect(width: 100%, radius: 0pt, stroke: (bottom: 2pt + brand, rest: 0.5pt + rgb("#E2E8F0")), inset: 14pt, fill: white)[
    #align(center)[
      #text(size: 24pt, weight: "bold", fill: navy)[#value]
      #v(0.2em)
      #text(size: 7.5pt, weight: "bold", fill: steel, tracking: 0.5pt)[#upper(label)]
      #v(0.15em)
      #text(size: 7pt, fill: steel)[#delta]
    ]
  ]
}

#let kpi-grid(..cards) = {
  let items = cards.pos()
  block(breakable: false)[
    #grid(columns: items.len(), column-gutter: 12pt, ..items)
  ]
}

// --- COMPONENT: Callout Box ---
#let callout(body) = {
  block(breakable: false)[
    #rect(width: 100%, stroke: (left: 3pt + navy, rest: none),
      radius: 0pt, inset: (left: 16pt, rest: 12pt), fill: rgb("#F7F8FA"))[
      #set text(size: 9.5pt)
      #body
    ]
  ]
}

// --- COMPONENT: Chart Exhibit (keeps title + chart + source together) ---
#let chart-exhibit(number, title, path, src, width: 85%) = {
  block(breakable: false, above: 1em, below: 1em)[
    #text(size: 9.5pt, weight: "bold", fill: navy)[Exhibit #number. #title]
    #v(0.3em)
    #image(path, width: width)
    #v(0.2em)
    #text(size: 7.5pt, style: "italic", fill: steel)[Source: #src]
  ]
}

// --- COMPONENT: Table Exhibit (keeps title + table + source together) ---
#let table-exhibit(number, title, src, body) = {
  block(breakable: false, above: 1em, below: 1em)[
    #text(size: 9.5pt, weight: "bold", fill: navy)[Exhibit #number. #title]
    #v(0.3em)
    #body
    #v(0.2em)
    #text(size: 7.5pt, style: "italic", fill: steel)[Source: #src]
  ]
}

// --- COMPONENT: Exhibit Title (standalone, for backward compat) ---
#let exhibit(number, title) = {
  v(0.8em)
  text(size: 9.5pt, weight: "bold", fill: navy)[Exhibit #number. #title]
  v(0.3em)
}

// --- COMPONENT: Source Line (standalone, for backward compat) ---
#let source(txt) = {
  v(0.2em)
  text(size: 7.5pt, style: "italic", fill: steel)[Source: #txt]
  v(0.8em)
}

// --- COMPONENT: Highlight Stat ---
#let highlight-stat(value, label) = {
  block(breakable: false)[
    #rect(width: 100%, radius: 0pt, inset: 16pt,
      fill: rgb("#F7F8FA"),
      stroke: (left: 3pt + navy, rest: none))[
      #text(size: 28pt, weight: "bold", fill: navy)[#value]
      #v(0.1em)
      #text(size: 9pt, fill: steel)[#label]
    ]
  ]
}

// --- COMPONENT: Timeline ---
#let timeline-item(marker, title, desc) = {
  block(breakable: false, above: 0.3em, below: 0.3em)[
    #grid(columns: (70pt, 1fr), column-gutter: 12pt,
      rect(radius: 0pt, fill: brand, inset: 8pt)[
        #align(center)[#text(size: 9pt, weight: "bold", fill: white)[#marker]]
      ],
      [
        #text(size: 10pt, weight: "bold", fill: navy)[#title]
        #v(0.15em)
        #text(size: 9pt, fill: steel)[#desc]
      ]
    )
  ]
}
