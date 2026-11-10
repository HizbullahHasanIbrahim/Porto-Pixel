import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    year: z.number(),
    client: z.string(),
    role: z.enum(['Design', 'Development', 'System Analysis']),
    techStack: z.array(z.string()),
    description: z.string(),
    posterSVG: z.string(),
    featured: z.boolean().default(false),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };