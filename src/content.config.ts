import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    year: z.number().int().min(2000).max(2099),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    summary: z.string(),
    category: z.enum(['Client work', 'Agency tools & tech', 'Side projects']).default('Client work'),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    draft: z.boolean().default(false),
    protected: z.boolean().default(false),
  }),
});

export const collections = { work };
