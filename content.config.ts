import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      year: z.number().int().min(2000).max(2099),
      tags: z.array(z.string()),
      coverImage: image(),
      summary: z.string(),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { work };
