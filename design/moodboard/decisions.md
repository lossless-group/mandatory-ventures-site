# Mood board decisions

Running record of Michael's reactions to `index.html`, world by world. When every
world has a verdict, this becomes the brief for `/brand-kit` and the first
draft of `DESIGN.md`.

## 2026-11-12: first look

- **Overall:** "That looks great."
- **Flying Circus:** keep. Likes "the more Monty Python like illustrations, and
  the less detailed sketches." Lean toward Gilliam-style cut-outs and lighter
  line work over dense, heavily cross-hatched engravings.
- **The Annual Report:** keep. The covers are great, but he wanted more
  interior pages and spreads. Added 16 spreads (Utah Construction 1963,
  Central Airlines 1958 and 1966, Bell Telephone of Canada 1960, Northwest
  Airlines 1960) and a new steal: a full-bleed photo facing one narrow text
  column, with statistics drawn as one-ink bar charts and route maps.
- **The Memo:** no reaction yet.
- **Websites:** new section of inspiration-site cards (lossless-toolkit card
  shape). First pick: gem.com.

## 2026-11-12: illustration system

- **Default illustration style:** the Central Airlines 1966 silhouette spread
  (`refs/central-airlines-1966-silhouette-spread.jpg`). In Michael's words, it
  "feels like the default illustration/visual style when it's not a monty
  python cartoon collage."
- So the brand has **two illustration registers**:
  1. **Default:** a flat, single-ink silhouette of the subject (a plane, a
     building, a machine) on toned paper. No outline or interior detail; the
     shape and its edges carry the drawing. A small caption in condensed caps
     sits low on the page, with lots of empty ground around it.
  2. **Punchline:** Gilliam-style cut-out collage (Flying Circus), used
     sparingly when the copy is making a joke.
- Brief for the brand kit: draw default illustrations in that silhouette
  manner, one or two inks from the palette, and keep the collage for moments.

## 2026-11-12: tables

- **Table style:** the Northwest Airlines 1960 five-year summary and route
  map spread (`refs/northwest-airlines-1960-five-year-summary-spread.jpg`,
  pp. 13–14). In Michael's words: "This one feels right for tables."
- What that page does:
  - A wide, spaced, all-caps heading over a small centered subtitle
    ("NORTHWEST AIRLINES, INC. and SUBSIDIARY", "Five years ended…").
  - The data is set in a small, plain text face on the paper itself,
    with no cell borders or zebra striping. Right-aligned figures in columns,
    and a little more space between groups of rows.
  - The facing "Progress for the latest 10 years" table goes in a hairline box
    printed in one accent ink (red): a ruled header row, then thin rules
    between the columns.
  - The table sits beside a one-ink map or chart, so the numbers come with a
    picture.
- Brief for the brand kit: the table component takes two variants, a quiet
  ledger (borderless, set on the page) and a ruled box in one accent ink for
  the headline numbers.

## 2026-11-12: charts

- **Chart style:** the Central Airlines 1958 "Five Years Growth and Progress"
  spread (`refs/central-airlines-1958-five-years-growth-spread.jpg`). In
  Michael's words, it "feels right for charts."
- What we take from it: one ink (a flat blue) on paper, simple bars and a
  rising line, plain small labels on the axes, a big letterspaced caps title
  that runs across the gutter, and pictograms (little figures) standing in
  for some of the bars.
- **Our twist, from Mandatory's own past materials:** the chart's frame is set
  like a typewriter (axes, gridlines, labels, title, source and other
  metadata), and the data itself is drawn over it as **felt-tip marker
  lines**: a hand-drawn line or bar with a slightly uneven edge, in one
  accent ink.
- Brief for the brand kit: charts are two layers.
  1. **Typewriter layer:** the frame, axes, tick labels, title and notes, in
     a monospaced typewriter face in ink black.
  2. **Marker layer:** the data series as rough felt-tip strokes in one
     accent color, sitting on top.
- To do (charts): find the old Mandatory decks' charts (`Documents/Current
  Projects/Mandatory Ventures/`, 2020–2025) and pin a few to the board as the
  source of truth for the marker style.

## 2026-11-12: pattern and primitive color

- **Pattern and color source:** Erik Nitsche, *Exploring the Universe: Nuclear
  Fusion*, General Dynamics, c. 1958 (Galerie 1 2 3). In Michael's words: "I
  like this pattern and primative color."
- **The pattern:** full-bleed horizontal bands, each a slightly different
  muted tone, separated by thin dark lines like ruled paper or a spectrum.
  They shift slowly from dark slate at the top through grey-mauve to sage and
  teal at the bottom. One simple geometric figure sits on top (a cream
  rectangle with a red bar and two thin arrows), with a red glow running down
  through the bands. Lowercase wide sans for the small labels, and the name
  in widely spaced caps along the bottom edge.
- **The primitive color:** a single pure, saturated red against a field of
  greyed greens and slates, with cream for the one light shape. The red is
  the only fully saturated color on the page.
- Colors sampled from the image (a web reproduction, so approximate; check
  against a better scan before locking tokens):

  | Role | Sampled | Candidate named token |
  |---|---|---|
  | Primitive red (the one saturated accent) | `#D0040F` | `--color__fusion-red` |
  | Cream (the light shape, paper) | `#F8EACF` | `--color__atomic-cream` |
  | Dark slate (top bands, ink) | `#202024` | `--color__deep-slate` |
  | Grey-mauve (middle bands) | `#8D9793` | `--color__mauve-grey` |
  | Sage green (lower bands) | `#5C8978` | `--color__sage-band` |
  | Teal green (bottom bands) | `#4A7F6F` | `--color__teal-band` |
  | Lettering (dark green-grey) | `#3C534C` | `--color__band-ink` |

- Brief for the brand kit: the banded field is a candidate background pattern
  (hero, section dividers, OG images), and the color rule is "muted field, one
  primitive red". This red is a candidate for the "red-pen red" already named
  in the Annual Report world's steals.

## 2026-11-12: more primitive color (Nitsche)

- **Also liked:** Erik Nitsche's *Convair 880* (General Dynamics, c. 1960,
  Poster Group) and *Atoms for Peace*, Russian edition (General Dynamics,
  1955, MoMA). In Michael's words: "These look cool too. primative use of
  colors."
- What the three Nitsche pieces share, and so what the "primitive color" rule
  means:
  - **Flat, unmixed inks.** Each color is a solid printed ink: a full-strength
    red, a deep green, a mustard yellow, a slate blue. No gradients except
    where two transparent inks overlap.
  - **Overprint transparency.** Shapes are see-through where they cross: the
    Convair's colored stripes pass over and under a translucent grey globe;
    in the Atoms poster, ochre, lavender and slate discs overlap and darken
    where they meet. The color mixing is done by overlapping inks, not by
    choosing in-between tones.
  - **Simple geometry as the image.** Circles, orbits, stripes, a globe
    grid, a target. A small silhouetted jet is the only literal object, and
    it is drawn in the default silhouette style (see "illustration system"
    above).
  - **Quiet ground, few accents.** A cream or pale grey-green paper ground
    takes most of the page, and the saturated color sits in a few shapes. The
    red is used as the smallest, most important mark (the target's bullseye,
    the fusion core).
  - **The same lockup every time:** the company name in wide, widely spaced
    geometric caps along the bottom edge, small lowercase labels in the field.
- Grounds sampled (reliable, large flat areas):
  - Convair cream: `#F7E8D1`. This matches the fusion poster's cream
    (`#F8EACF`) closely, so one cream token covers both.
  - Atoms pale grey-green: `#A8B5A3`, a candidate second ground,
    `--color__atomic-sage`.
- The saturated stripe and disc colors are too thin in these web copies to
  sample reliably. Take them from a high-resolution scan before locking
  tokens.
- Brief for the brand kit: overprint transparency (`mix-blend-mode:
  multiply` over a paper ground) is a candidate signature technique for
  diagrams, charts and section art.

## 2026-11-12: gradients

- **Rule:** in Michael's words, "Any gradient use should be very soft, and
  kind of feel faded and grainy."
- What that means in practice:
  - **Soft:** small steps between nearby, muted tones (like the fusion
    poster's red glow fading down through the bands), never a jump between
    two saturated colors. No bright "tech" gradients.
  - **Faded:** the colors look like ink that has sat on a shelf for sixty
    years. Low contrast, slightly warm, lifted blacks, consistent with the
    off-white, foxed paper the Annual Report world asks for.
  - **Grainy:** a fine noise or paper-grain texture over the gradient so it
    reads as print, not as a smooth screen blend. The grain also hides
    banding.
- Brief for the brand kit: one gradient recipe, a low-contrast blend between
  two neighboring palette tones with a grain overlay (an SVG `feTurbulence`
  noise layer at low opacity, blended with `multiply` or `soft-light`).
  Saturated solid inks (the primitive red) stay flat and never get a
  gradient.

## 2026-11-12: lines

- **Rule:** in Michael's words, "Lines should have a little texture like
  typwriter or felt pen, ball-point pens."
- No perfectly crisp vector strokes. Every line (rules, borders, chart axes,
  underlines, arrows, dividers) carries a little texture from one of three
  tools:
  - **Typewriter:** slightly uneven ink density and soft edges, like a
    struck ribbon. For type-adjacent lines: table rules, underlines, form
    fields, the chart frame (the typewriter layer in "charts" above).
  - **Felt-tip marker:** wider, slightly wobbly, with darker overlaps where
    strokes cross. For data lines and emphasis (the marker layer in
    "charts", circling or striking through things).
  - **Ballpoint pen:** thin, a little skippy, light pressure variation. For
    annotations, arrows, margin notes, signatures.
- "A little" is the operative word: the texture should be noticed on a
  second look, not read as a gimmick. Layout stays on a strict grid; only
  the line quality is hand-made.
- Brief for the brand kit: three line styles as tokens or components
  (`typewriter`, `marker`, `ballpoint`), built with an SVG displacement or
  roughen filter (`feTurbulence` + `feDisplacementMap` at a low scale) and a
  matching grain, so the same texture applies to borders, rules and chart
  strokes. Fits the grain already asked for in "gradients".

## 2026-11-12: ink colors and what each one means

- **Rule:** in Michael's words, "Primary content should be black and blue
  (like pen black and pen blue, typwriter black, marker blue. Red used for
  emphasis or humor in corrections or author comments/editor notes."
- The inks are the tools on a desk, and each has a job:

  | Ink | Looks like | Used for |
  |---|---|---|
  | **Typewriter black** | Ribbon black, slightly soft and uneven, never pure `#000` | Body copy, headings, tables, chart frames: the primary content |
  | **Pen black** | Ballpoint/felt black | Hand-drawn primary lines, signatures, simple diagrams |
  | **Pen blue** | Ballpoint blue | Primary annotations, links, form fill-ins: content in the author's own hand |
  | **Marker blue** | Felt-tip blue, broader and a little brighter | Chart data (the marker layer), highlights of primary content |
  | **Red** (the primitive red) | Red pen, the editor's pen | Emphasis, and the humor channel: corrections, strike-throughs, author comments, editor's notes, margin asides |

- So the page reads as a typed document that has been written on. Black and
  blue carry what Mandatory is saying; red is someone (the author, an editor)
  reacting to it, and that's where the jokes live. Red is scarce: if
  everything is corrected, nothing is.
- This settles where the earlier color decisions go:
  - The primitive red (`#D0040F`-ish, from the fusion poster) is the
    editor's red pen.
  - The Nitsche greens, slates and mauves (bands, overprints) are for
    illustration, pattern and grounds, not for text.
  - Charts: the typewriter-black frame with marker-blue data, and red only to
    call out the one number that matters (or to mock one).
- Blues still to find: a ballpoint blue and a marker blue. Sample them from
  real pen and marker ink on paper (photos or scans of the old Mandatory
  decks) rather than picking them on screen.

## 2026-11-12: north star for copy and layout

- **The closest single reference:** Goldsholl & Associates' parcel label for
  Paul Theobald and Company (`refs/goldsholl-paul-theobald-parcel-label.jpg`,
  from Michael's 2021 folder). In Michael's words: "This is actually closest
  to what I want the primary copy and design to look like."
- When other decisions pull in different directions, this label wins for
  primary copy and page design. What it does:
  - **Three voices of type, each with one job:**
    1. *Lowercase italic serif* for the name and the one-line promise
       ("paul theobald and company", "books on the fine arts"). Quiet,
       literate, a little wry. No capitals.
    2. *Small, widely letterspaced caps in a geometric sans* for the hard
       facts (address, city, phone), set on one line.
    3. *Typewriter caps*, slightly faded and uneven, for the variable,
       personal content (the addressee), indented in a loose stagger as if
       typed by hand on the form.
  - **One small mark doing the illustration:** a book drawn in fine
    hatching, a red scribbled flower, and a solid black pen nib. Line
    drawing, one solid black shape, one red gesture. Witty, not decorative.
  - **One red hairline rule** across the full width, splitting the printed
    letterhead from the typed part. Red as structure and accent, used once.
  - **Black and red on warm off-white paper.** No blue on this piece; black
    carries everything, and red appears exactly twice (the scribble, the
    rule).
  - **Official, deadpan small print:** a solid black arrow, then
    "POSTMASTER:" in small caps with a plain instruction after it. Bureaucratic
    language used straight, which is where the humor comes from.
  - **Real-world marks left on:** the postal rubber stamp, slightly crooked
    and cropped at the top edge. Imperfection as proof it's a real object.
  - **Lots of empty paper.** Everything is small; the space does the work.
- How it maps onto the rules already logged:
  - Typewriter black for the typed content, and the line texture rule for the
    hatching and scribble, as above.
  - Red = the editor's pen, here used for a single rule and a single scribble.
  - Primary copy should sound like this label: lowercase, plain, factual,
    with one wry phrase, and official boilerplate played straight.
- Brief for the brand kit: the type system is these three voices (italic
  serif, spaced geometric caps, typewriter). The page template is the label:
  a printed letterhead zone, a single red rule, then typed content. Find
  Google Fonts candidates for each voice and compare them against this
  image.

## 2026-11-12: flair has to look printed

- **Rule:** in Michael's words, "We can have visuals and design elements that
  get more flare involved, but almost like it had to be set specifically for
  print in order to show up. Like we are struggling with the limitations of
  print and graphic design."
- The quiet label (north star above) is the default. Bigger moments are
  allowed, but every one of them should look like it was **made with print
  technology and paid for in effort**, with the constraints showing:
  - **Limited inks:** a flourish gets one or two spot colors, never
    full-color. If it needs more color, it overprints (see "primitive
    color").
  - **Misregistration:** color layers slightly off from the black plate, a
    hairline of paper showing between them, or overlapping where they
    shouldn't.
  - **Halftone and screens:** tones made of dots or line screens, not smooth
    fills. Photos as coarse one-color halftones or duotones.
  - **Ink behavior:** slight spread and fill-in on small type, uneven
    coverage on big solids, a little grain (consistent with "gradients" and
    "lines").
  - **Hand-set evidence:** letterspacing that looks fitted by hand,
    headlines that are cut-and-pasted (paste-up), Letraset-style display
    type, a crop mark or registration mark left in.
  - **Paper limits:** content that seems to run into the trim, a spread that
    meets at a gutter, a fold, a perforation.
- The humor is the struggle: an ambitious visual idea visibly fighting a
  two-color press and a paste-up board. A screen can do anything, so doing
  something that looks hard is the point.
- The brand kit should **avoid** anything that only a screen can do and that
  shows: glossy 3D, glassmorphism, neon glows, bright full-spectrum
  gradients, drop shadows that aren't paper on paper, smooth vector
  perfection.
- Brief for the brand kit: a small "print effects" set to wrap any flourish:
  `misregister` (offset color layer), `halftone` (dot-screen fill),
  `overprint` (multiply), `ink-spread` (subtle blur and threshold on
  edges), and `registration-mark` / `crop-mark` ornaments. Each one is
  optional, and the default label style uses none of them.
