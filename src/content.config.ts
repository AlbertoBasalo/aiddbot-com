// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

/**
 * Base schema for markdown collections (docs, legal)
 */
const baseSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().min(1),
  slug: z.string().min(1),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: baseSchema,
});

const docsSchema = baseSchema.extend({
  order: z.number().optional(),
  toc: z
    .array(
      z.object({
        label: z.string().min(1),
        anchor: z.string().min(1),
      }),
    )
    .optional(),
});

const docsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: docsSchema,
});

/**
 * Content collections (markdown via Astro loaders).
 * Page/section copy also lives in typed TS modules under src/content/*.content.ts
 */
export const collections = {
  docs: docsCollection,
  legal: legalCollection,
};
