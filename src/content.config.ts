import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* Permissive by house rule: document shape, don't gatekeep.
 *
 * Every word on the home page comes from
 * context-v/narratives/Mandatory-Ventures-Site-Narrative.md (signed off
 * 2026-11-10). All three directions read these collections and nothing else,
 * so they compare FORM, never copy. A direction that needs more surface takes
 * it in type, space and structure, never in words. */

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z
    .object({
      order: z.number(),
      slug_id: z.string(),
      /* Small official label above the title: the "POSTMASTER:" voice. */
      eyebrow: z.string().optional(),
      title: z.string(),
      /* The one line that has to land if the reader reads nothing else. */
      lead: z.string().optional(),
      /* An editor's note in red pen: the humor channel. One per section at
       * most. Corrections, asides, the author reacting to their own copy. */
      editor_note: z.string().optional(),
    })
    .passthrough(),
});

/* The two audiences, in the narrative's order: large-scale capital first. */
const voices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/voices' }),
  schema: z
    .object({
      order: z.number(),
      audience: z.string(),
      /* Who, in a phrase. */
      who: z.string(),
      /* The italic one-liner each voice leaves with. */
      takeaway: z.string(),
    })
    .passthrough(),
});

/* Mandatory Reading. Bodies render through @lossless-group/lfm. This is
 * where the satire can name names; the home page names none. */
const reading = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reading' }),
  schema: z
    .object({
      title: z.string(),
      lede: z.string().optional(),
      date_created: z.coerce.date(),
      authors: z.array(z.string()).default(['Michael Staton']),
      publish: z.boolean().default(true),
      tags: z.array(z.string()).optional(),
    })
    .passthrough(),
});

export const collections = { sections, voices, reading };
