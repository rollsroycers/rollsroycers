export const meta = {
  name: 'rr-blog-translate-remaining',
  description: 'Translate the final 3 large blog articles (first-time guide, luxury hotels, motor show) into ar+ru',
  phases: [{ title: 'Translate' }],
}

// The 3 large articles that hit the weekly agent limit on the first run.
const SLUGS = ['first-time-dubai-luxury-guide', 'dubai-luxury-hotels-guide', 'dubai-motor-show-2024']

const BLOCK = {
  type: 'object', additionalProperties: false, required: ['type'],
  properties: {
    type: { type: 'string' }, text: { type: 'string' }, src: { type: 'string' },
    alt: { type: 'string' }, caption: { type: 'string' }, ordered: { type: 'boolean' },
    buttonText: { type: 'string' }, buttonLink: { type: 'string' },
    items: { type: 'array', items: { type: 'string' } },
  },
}
const ARTICLE = {
  type: 'object', additionalProperties: false, required: ['title', 'description', 'readTime', 'category', 'content'],
  properties: {
    title: { type: 'string' }, description: { type: 'string' },
    readTime: { type: 'string' }, category: { type: 'string' }, content: { type: 'array', items: BLOCK },
  },
}
const SCHEMA = { type: 'object', additionalProperties: false, required: ['slug', 'ar', 'ru'], properties: { slug: { type: 'string' }, ar: ARTICLE, ru: ARTICLE } }

phase('Translate')
const results = await parallel(SLUGS.map(slug => () =>
  agent(`Professional SEO translator for rollsroycers.com (Rolls-Royce rental, Dubai). Read /tmp/rr_blog_en/${slug}.json and translate the WHOLE article to natural Gulf Arabic (ar) and natural Russian (ru). PRESERVE STRUCTURE EXACTLY: same number/order/type of content blocks; translate only text/caption/alt/items (keep <strong> tags)/buttonText; keep type/src/buttonLink/ordered unchanged. Translate title, description, readTime, category. Truthful (no fabricated reviews/ratings/awards/years); keep prices accurate (Ghost AED 3,800/day, Wraith 5,000, Dawn 5,500, Phantom 5,800, Cullinan 6,500, Spectre 7,500; hourly from 800). Keep model names (Phantom/Ghost/etc.) in Latin within text. Return { slug:"${slug}", ar:{...}, ru:{...} } with ar/ru content block counts EQUAL to source.`,
    { label: `tr:${slug}`, phase: 'Translate', schema: SCHEMA })
))
return results.filter(Boolean)
