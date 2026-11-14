---
title: "Three Directions for Mandatory Ventures"
lede: "Spike three design directions for mandatory.ventures against one content spine, all inside the brand guidance agreed on the mood board."
date_created: 2026-11-12
date_modified: 2026-11-12
authors:
  - Michael Staton
augmented_with:
  - Claude Code on Claude Opus 5.5
at_semantic_version: 0.0.1.0
status: In-Progress
type: Specs
tags:
  - Mandatory-Ventures
  - Design-Variants
  - Spike
---

# Three Directions for Mandatory Ventures

## Inputs (read these first)

- **Story:** `context-v/narratives/Mandatory-Ventures-Site-Narrative.md`
- **Brand guidance:** `design/moodboard/decisions.md`. Binding for all
  three directions. Summary:
  - North star for copy and layout: Goldsholl's Paul Theobald parcel label
    (`design/moodboard/refs/goldsholl-paul-theobald-parcel-label.jpg`). Three
    type voices: lowercase italic serif, small spaced geometric caps,
    typewriter. One red hairline rule. Lots of paper.
  - Inks: typewriter black and pen black, pen blue and marker blue for
    primary content. Red is the editor's pen, for emphasis and humor
    (corrections, author comments, editor's notes), and it is scarce.
  - Default illustration: flat one-ink silhouette on toned paper (Central
    Airlines 1966). Punchline illustration: Gilliam cut-out collage, rare.
  - Tables: Northwest Airlines 1960 (quiet ledger + one red ruled box).
  - Charts: typewriter-set frame, felt-tip marker data on top.
  - Pattern and color: Nitsche, primitive flat inks, overprint transparency,
    muted field with one saturated red.
  - Gradients: very soft, faded, grainy. Lines: a little typewriter,
    felt-tip or ballpoint texture.
  - Flair is allowed only if it looks like it had to be fought onto paper
    with print technology: limited inks, misregistration, halftones, paste-up.
    Nothing only a screen can do (no glossy 3D, glass, neon, bright gradients).
- **Mood board:** `design/moodboard/index.html` and `design/moodboard/refs/`.

## The spine (fixed; no direction may change it)

- `src/lib/site.ts`: hero, subhead, definition, the curve and its three
  annotations, people, connect links, disclaimer, `WORD_BUDGET`.
- `src/content/sections/`: four sections (scaleup, trust, why, coalition),
  each with eyebrow, title, lead, body and an optional `editor_note` (red pen).
- `src/content/voices/`: the two audiences, large-scale capital first.
- `src/content/reading/`: Mandatory Reading (one seed article).

Home page order (from the narrative): hero + subhead → startup to scaleup with
the curve redrawn → the two voices → people and trust → why this one →
a coalition, not a company → connect (X, LinkedIn) → footer disclaimer.
No call to action, no form. The definition and "Because it's mandatory." may
appear wherever the direction wants.

## Shared layer (do not fork)

- `src/styles/global.css`: Tier 1 tokens, the token contract, `.grain`,
  `.ink-typewriter|marker|ballpoint|spread`, `.overprint`, `.faded-gradient`,
  `.misregister`.
- `src/components/basics/PrintFilters.astro` (mounted by the layout).
- `src/components/markdown/*` (LFM renderer) and `src/lib/reading.ts`.
- `src/layouts/*`, `src/components/ui/ModeToggle.astro`, `src/utils/*`.

## The three directions

| Slug | Name | Stance |
|---|---|---|
| `label` | Label | **Closest to the north star.** The whole site is the parcel label and letterhead: a printed letterhead zone, one red rule, typed content below, deadpan official small print. The quietest direction; almost no flair. |
| `report` | Annual Report | **Reinterprets the source.** A 1960s corporate annual report (General Dynamics, Nitsche): an extended-caps lockup, a Nitsche banded field as the cover, the curve as a chart (typewriter frame, marker data), a Northwest-style table, silhouette illustration, spreads with one photo-like plate facing one narrow column. |
| `paste-up` | Paste-Up | **Furthest from the source; flair-forward.** The design visibly struggling with print: a paste-up board, misregistered two-color headlines, halftone dots, Letraset-style display, crop and registration marks, typed slips pasted on, red-pen corrections and margin notes everywhere they're funny, one Gilliam-style cut-out moment built in SVG/CSS (no raster collage). |

Each direction owns exactly:

- `src/styles/themes/<slug>.css`: Tier 2 tokens for `[data-theme="<slug>"]`
  in `light`, `dark`, `vibrant`. Vibrant is dark-based; set every ground,
  surface, text and border explicitly.
- `src/components/<slug>/`: its components. Never import another
  direction's folder.
- `src/pages/<slug>/index.astro`: its home page.
- `src/pages/<slug>/reading/[slug].astro`: its Mandatory Reading article
  template (uses the shared `src/lib/reading.ts` + `AstroMarkdown`).

## Verify

- `pnpm build` and `pnpm exec astro check` clean.
- All three modes render for every direction.
- No component reads a `--color__*` or `--font__*` token or a hex literal.
- No cross-imports between direction folders.
- Home page word count in built HTML stays under `WORD_BUDGET`.
