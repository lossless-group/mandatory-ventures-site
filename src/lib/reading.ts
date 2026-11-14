/* Mandatory Reading: one loader for every direction's article template.
 * Bodies go through @lossless-group/lfm and the copied AstroMarkdown renderer,
 * never render() alone (a glob loader stores no HTML). */
import { getCollection, type CollectionEntry } from 'astro:content';
import { parseMarkdown } from '@lossless-group/lfm';

export type ReadingEntry = CollectionEntry<'reading'>;

export async function getReading(): Promise<ReadingEntry[]> {
  const all = await getCollection('reading', (e) => e.data.publish !== false);
  return all.sort((a, b) => b.data.date_created.valueOf() - a.data.date_created.valueOf());
}

export async function parseReading(entry: ReadingEntry) {
  const tree = await parseMarkdown(entry.body ?? '');
  const citations = (tree as any).data?.citations?.ordered ?? [];
  return { tree, citations };
}

export function readingDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
