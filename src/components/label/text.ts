/* Small text helpers for the Label direction. No copy lives here. */

/* A collection body is plain markdown paragraphs; join each paragraph's
 * hard-wrapped lines so it can be set as one typed paragraph. */
export function paragraphs(body: string | undefined): string[] {
  return (body ?? '')
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

/* Break a line into two roughly equal halves at a word boundary, the way an
 * addressee is typed onto two staggered lines of a parcel label. */
export function staggerLines(line: string, count = 2): string[] {
  const words = line.split(/\s+/);
  const per = Math.ceil(words.length / count);
  const out: string[] = [];
  for (let i = 0; i < words.length; i += per) out.push(words.slice(i, i + per).join(' '));
  return out;
}
