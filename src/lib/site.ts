/* Wiring and fixed lines, not page copy. Everything here is verbatim from
 * context-v/narratives/Mandatory-Ventures-Site-Narrative.md. */

export const BRAND = {
  name: 'Mandatory Ventures',
  short: 'mandatory',
  domain: 'mandatory.ventures',
  hero: "Coordinating capital into the world's most important companies.",
  subhead: 'Matching mandates to earned access.',
  /* From the 2020–21 decks. */
  sign_off: "Because it's mandatory.",
} as const;

/* "man•da•to•ry: so important it is required." Set as a dictionary entry. */
export const DEFINITION = {
  word: 'man•da•to•ry',
  part: 'adj.',
  sense: 'so important it is required.',
} as const;

/* The curve from the decks, redrawn per direction. Positions are fractions
 * of the curve's run (0 = founding, 1 = everyone knows the name); the shape
 * is a slow start then a steep climb (startup → scaleup). */
export const CURVE = {
  title: 'From startup to scaleup.',
  x_label: 'time',
  y_label: 'how obvious it looks',
  points: [
    { at: 0.14, label: 'We invest here.' },
    { at: 0.62, label: 'So you look smart here.' },
    { at: 0.9, label: 'This is when everyone starts pretending.' },
  ],
} as const;

/* People and trust. Only Michael until others agree to appear.
 * TODO(narrative open question): who else, and with whose permission? */
export const PEOPLE = [
  {
    name: 'Michael Staton',
    role: 'Founder. Venture partner, adviser, and author of the thesis.',
  },
] as const;

/* A destination, not a funnel: no call to action, no form.
 * TODO(narrative open question): Michael's own accounts for now; swap to
 * Mandatory accounts if they exist. */
export const CONNECT = [
  { label: 'X', handle: '@mpstaton', href: 'https://x.com/mpstaton' },
  { label: 'LinkedIn', handle: 'in/mpstaton', href: 'https://www.linkedin.com/in/mpstaton/' },
] as const;

export const DISCLAIMER = 'Not an offer. Mandatory Disclosures available on request.';

/* The home page, counted from built HTML. The narrative's lines are short on
 * purpose; a direction over budget has invented copy. */
export const WORD_BUDGET = 520;

export const DIRECTIONS = [
  { slug: 'label', name: 'Label', mode: 'light' },
  { slug: 'report', name: 'Annual Report', mode: 'light' },
  { slug: 'paste-up', name: 'Paste-Up', mode: 'light' },
  { slug: 'broadsheet', name: 'Broadsheet', mode: 'light' },
] as const;
