/* Broadsheet's headline idiom: a statement, then an italic coda. Splits a
 * title from the spine without changing a word. "A coalition, not a
 * company." -> ["A coalition,", "not a company."]. With no comma, the last
 * two words become the coda. */
export function coda(title: string): [string, string] {
  const comma = title.indexOf(', ');
  if (comma > 0) return [title.slice(0, comma + 1), title.slice(comma + 2)];
  const words = title.split(' ');
  if (words.length < 3) return [title, ''];
  return [words.slice(0, -2).join(' '), words.slice(-2).join(' ')];
}

/* "No. 01" */
export const no = (n: number) => `No. ${String(n).padStart(2, '0')}`;
