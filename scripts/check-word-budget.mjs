/* Count the words each direction's home page actually ships, from BUILT
 * HTML, and fail if any is over WORD_BUDGET in src/lib/site.ts. Over budget
 * means a direction invented copy instead of taking space in type and layout.
 * Usage: pnpm build && pnpm check:words [distDir] */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const dist = process.argv[2] ?? 'dist';
const site = await readFile('src/lib/site.ts', 'utf8');
const budget = Number(site.match(/WORD_BUDGET\s*=\s*(\d+)/)?.[1]);
const directions = [...site.matchAll(/slug:\s*'([a-z-]+)'/g)].map((m) => m[1]);

function words(html) {
  const body = html
    .replace(/<head[\s\S]*?<\/head>/i, ' ')
    .replace(/<(script|style|svg)[\s\S]*?<\/\1>/gi, (m) =>
      /^<svg/i.test(m) ? m.replace(/<[^>]+>/g, ' ') : ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ');
  return body.split(/\s+/).filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

let failed = false;
for (const d of directions) {
  try {
    const n = words(await readFile(join(dist, d, 'index.html'), 'utf8'));
    const ok = n <= budget;
    failed ||= !ok;
    console.log(`${ok ? 'ok  ' : 'OVER'} ${d.padEnd(10)} ${String(n).padStart(4)} / ${budget}`);
  } catch {
    console.log(`skip ${d.padEnd(10)} (not built)`);
  }
}
process.exit(failed ? 1 : 0);
