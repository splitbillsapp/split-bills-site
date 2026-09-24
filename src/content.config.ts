import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Verbatim copies of docs/legal/*.md from the app repo, kept in step by
 * scripts/legal-sync.mjs. They carry no frontmatter, so there is no schema.
 */
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
});

export const collections = { legal };
