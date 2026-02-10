// ---------------------------------------------------------------------------
// Content collections — Zod schemas for blog, glossary, and whitepaper
// ---------------------------------------------------------------------------

import { defineCollection, z } from "astro:content";

// ---- Blog ----

const blog = defineCollection({
  type: "content",
  schema: z.object({
    /** Post title displayed in listing and detail pages */
    title: z.string(),
    /** Short summary for cards and SEO meta description */
    description: z.string(),
    /** Publication date (ISO 8601) */
    publishedAt: z.coerce.date(),
    /** Last updated date (optional, ISO 8601) */
    updatedAt: z.coerce.date().optional(),
    /** Author display name */
    author: z.string().default("Xhavic Team"),
    /** Hero / OG image path relative to public/ */
    image: z.string().optional(),
    /** Alt text for the hero image */
    imageAlt: z.string().optional(),
    /** Tags for filtering and related posts */
    tags: z.array(z.string()).default([]),
    /** Category for broad grouping */
    category: z
      .enum([
        "engineering",
        "ecosystem",
        "governance",
        "security",
        "community",
        "announcements",
      ])
      .default("announcements"),
    /** Whether the post is featured on the homepage */
    featured: z.boolean().default(false),
    /** Draft posts are excluded from production builds */
    draft: z.boolean().default(false),
    /** Canonical URL if cross-posted */
    canonical: z.string().url().optional(),
    /** Estimated reading time in minutes (auto-calculated, but overridable) */
    readingTime: z.number().optional(),
  }),
});

// ---- Glossary ----

const glossary = defineCollection({
  type: "content",
  schema: z.object({
    /** The term being defined */
    term: z.string(),
    /** Short one-line definition for tooltips and previews */
    shortDefinition: z.string(),
    /** Category grouping for navigation */
    category: z
      .enum([
        "protocol",
        "security",
        "wallet",
        "defi",
        "infrastructure",
        "governance",
        "general",
      ])
      .default("general"),
    /** Related terms (slugs) for cross-linking */
    relatedTerms: z.array(z.string()).default([]),
    /** Sort order within category (lower = first) */
    sortOrder: z.number().default(0),
    /** Draft entries are excluded from production builds */
    draft: z.boolean().default(false),
  }),
});

// ---- Whitepaper ----

const whitepaper = defineCollection({
  type: "content",
  schema: z.object({
    /** Section title (e.g. "Abstract", "Architecture", "Tokenomics") */
    title: z.string(),
    /** Section number for ordering (e.g. 1, 2, 3.1) */
    sectionNumber: z.string(),
    /** Short description for table of contents */
    description: z.string().optional(),
    /** Version of the whitepaper this section belongs to */
    version: z.string().default("1.0"),
    /** Last updated date (ISO 8601) */
    updatedAt: z.coerce.date().optional(),
    /** Sort order for rendering (derived from sectionNumber, but explicit) */
    sortOrder: z.number().default(0),
    /** Draft sections are excluded from production builds */
    draft: z.boolean().default(false),
  }),
});

// ---- Docs ----

const docs = defineCollection({
  type: "content",
  schema: z.object({
    /** Page title displayed in sidebar and page header */
    title: z.string(),
    /** Short description for SEO and page header */
    description: z.string(),
    /** Sidebar section grouping */
    section: z
      .enum([
        "getting-started",
        "dual-wallet",
        "oracle",
        "bridge",
        "protocol",
        "security",
        "nodes",
        "governance",
        "tools",
        "tutorials",
        "reference",
        "migrate",
        "notices",
      ]),
    /** Sort order within section (lower = first) */
    sortOrder: z.number().default(0),
    /** Icon for sidebar section header (emoji) */
    icon: z.string().optional(),
    /** Draft pages are excluded from production builds */
    draft: z.boolean().default(false),
    /** Last updated date */
    lastUpdated: z.coerce.date().optional(),
  }),
});

// ---- Export all collections ----

export const collections = {
  blog,
  glossary,
  whitepaper,
  docs,
};
