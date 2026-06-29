// ─────────────────────────────────────────────────────────────────────────────
// src/data/blogFileStore.ts
//
// Build-time loader for file-based blog posts (src/data/blog/<slug>.json). Each
// file is self-contained per locale: { en, ar, ru, publishAt? }. Keeping posts
// as individual JSON files lets the blog scale to hundreds of articles WITHOUT
// inlining their bodies into the page module / Worker bundle.
//
// ── Cloudflare Workers safety ────────────────────────────────────────────────
// These helpers are invoked ONLY from getStaticPaths / getStaticProps in
// src/pages/blog/[slug].tsx. The blog is fully static (fallback:false), so they
// run at BUILD time (Node) and are NEVER called at runtime on the Worker.
// Because the file paths are dynamic, the bundler cannot inline the JSON, so the
// article bodies stay out of the Worker (this is what keeps cold-start
// memory/CPU low and avoids the 128MB/CPU "1102 — exceeded resource limits"
// failures). There is intentionally NO top-level filesystem access here: nothing
// touches `fs` until one of the exported functions is actually called at build.
//
// Scheduled publishing: an article becomes visible only once its `publishAt`
// has passed (or it has none). This mirrors the gating in
// scripts/generate-sitemap.mjs so getStaticPaths and the sitemap never diverge.
// Set PUBLISH_ALL=1 to force every file-based post to build (preview/debug).
// ─────────────────────────────────────────────────────────────────────────────
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const BLOG_DIR = join(process.cwd(), 'src', 'data', 'blog')

export type BlogArticle = {
  title: string
  description: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  content: any[]
  relatedArticles?: string[]
}

type ArticleFile = {
  publishAt?: string
  en?: BlogArticle
  ar?: BlogArticle
  ru?: BlogArticle
}

const isLive = (data: ArticleFile): boolean => {
  if (process.env.PUBLISH_ALL === '1') return true
  if (!data.publishAt) return true
  return new Date(data.publishAt).getTime() <= Date.now()
}

const readFile = (slug: string): ArticleFile | null => {
  try {
    const file = join(BLOG_DIR, `${slug}.json`)
    if (!existsSync(file)) return null
    return JSON.parse(readFileSync(file, 'utf8')) as ArticleFile
  } catch {
    return null
  }
}

/**
 * Slugs of file-based posts that are due to be live (publishAt passed / absent).
 * Used by getStaticPaths so only published posts are pre-rendered.
 */
export function listFileSlugs(): string[] {
  try {
    return readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith('.json'))
      .filter((f) => {
        const data = readFile(f.replace(/\.json$/, ''))
        return data ? isLive(data) : false
      })
      .map((f) => f.replace(/\.json$/, ''))
  } catch {
    return []
  }
}

/**
 * Full article object for a slug in the requested locale, falling back to en.
 * Returns null when the file is missing or not yet live.
 */
export function getFileArticle(slug: string, locale: string): BlogArticle | null {
  const data = readFile(slug)
  if (!data || !isLive(data)) return null
  const article =
    (data as Record<string, any>)[locale] || data.en || data.ar || data.ru || null
  return article || null
}

/**
 * Minimal card metadata for a related-article reference (kept tiny on purpose —
 * only what the "Related Articles" grid renders).
 */
export function getFileArticleMeta(
  slug: string,
  locale = 'en'
): { slug: string; title: string; image: string; category: string; readTime: string } | null {
  const data = readFile(slug)
  if (!data || !isLive(data)) return null
  // Card metadata in the requested locale (fall back to en/ar/ru) so "Related Articles"
  // titles/category/readTime match the current page language.
  const a = (data as Record<string, any>)[locale] || data.en || data.ar || data.ru
  if (!a) return null
  return {
    slug,
    title: a.title,
    image: a.image,
    category: a.category,
    readTime: a.readTime,
  }
}
