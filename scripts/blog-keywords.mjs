#!/usr/bin/env node
/**
 * blog-keywords.mjs — Smart Keyword Extraction Engine for rollsroycers.com
 *
 * Extracts 8-12 semantically relevant keywords for a given blog article slug.
 * Sources:
 *   1. rollsroycers-blog-titles-2026.md — Primary keyword + title words
 *   2. Semantic slug decomposition — meaningful word combinations
 *   3. Cluster-specific keyword families — Dubai luxury rental terms
 *
 * Usage:
 *   npm run kw:blog -- --slug=<slug>
 *   node scripts/blog-keywords.mjs --slug=<slug>
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ─── Parse CLI args ─────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const slugFlag = args.find(a => a.startsWith('--slug='));
if (!slugFlag) {
  console.error('Usage: node scripts/blog-keywords.mjs --slug=<slug>');
  process.exit(1);
}
const slug = slugFlag.split('=')[1].trim();

// ─── Load the titles bank ───────────────────────────────────────────────────
const titlesPath = resolve(ROOT, 'rollsroycers-blog-titles-2026.md');
let titlesContent;
try {
  titlesContent = readFileSync(titlesPath, 'utf8');
} catch {
  console.error(`❌ Cannot read ${titlesPath}`);
  process.exit(1);
}

// ─── Parse titles table ─────────────────────────────────────────────────────
// Format: | # | Title | Primary Keyword | Role | Cluster | Pillar | Money |
const tableLines = titlesContent.split('\n').filter(l => /^\|\s*\d+\s*\|/.test(l));

/** @type {{ n: number, title: string, keyword: string, role: string, cluster: string, pillar: string, money: string }[]} */
const articles = tableLines.map(line => {
  const cols = line.split('|').map(c => c.trim()).filter(Boolean);
  return {
    n:       parseInt(cols[0], 10),
    title:   cols[1] || '',
    keyword: cols[2] || '',
    role:    cols[3] || '',
    cluster: cols[4] || '',
    pillar:  cols[5] || '',
    money:   cols[6] || '',
  };
});

// ─── Find the article ───────────────────────────────────────────────────────
// Try matching by slug (derive slug from title: lowercase, spaces→hyphens, strip non-alphanum)
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

let article = articles.find(a => {
  const derived = titleToSlug(a.title);
  return derived.includes(slug) || slug.includes(derived) || derived === slug;
});

// Fallback: fuzzy match by slug words
if (!article) {
  const slugWords = slug.split('-').filter(w => w.length > 2);
  let bestScore = 0;
  for (const a of articles) {
    const derived = titleToSlug(a.title);
    const score = slugWords.filter(w => derived.includes(w)).length;
    if (score > bestScore) {
      bestScore = score;
      article = a;
    }
  }
}

if (!article) {
  console.error(`❌ No matching article found for slug: ${slug}`);
  console.error('   Check rollsroycers-blog-titles-2026.md for valid titles.');
  process.exit(1);
}

console.log(`\n🔑 Keyword Extraction for Article #${article.n}`);
console.log(`   Title:   ${article.title}`);
console.log(`   Primary: ${article.keyword}`);
console.log(`   Cluster: ${article.cluster}`);
console.log(`   Role:    ${article.role}`);
console.log('');

// ─── Cluster-specific keyword families ──────────────────────────────────────
const clusterFamilies = {
  'RENTAL-COMMERCIAL': [
    'rolls royce rental dubai', 'luxury car hire dubai', 'rent rolls royce',
    'chauffeur service dubai', 'vip car rental', 'wedding car dubai',
    'airport transfer dubai', 'corporate rental dubai', 'rolls royce booking',
    'luxury rental experience', 'dubai car service', 'hourly rental dubai',
    'event car rental', 'photoshoot car dubai', 'rolls royce with driver',
  ],
  'MODEL-INFO': [
    'rolls royce phantom', 'rolls royce ghost', 'rolls royce cullinan',
    'rolls royce dawn', 'rolls royce wraith', 'rolls royce spectre',
    'black badge', 'v12 engine', 'rolls royce interior', 'bespoke luxury',
    'spirit of ecstasy', 'rolls royce performance', 'luxury suv dubai',
    'electric rolls royce', 'rolls royce review',
  ],
  'PRICE-INFO': [
    'rolls royce price dubai', 'rental cost aed', 'daily rental rate',
    'how much rolls royce', 'luxury car price', 'rolls royce deposit',
    'insurance cost', 'weekly rental dubai', 'monthly rental',
    'value for money luxury', 'affordable luxury dubai', 'pricing comparison',
    'rolls royce cost per day', 'budget luxury rental', 'premium car cost',
  ],
  'COMPARISON': [
    'vs bentley', 'vs mercedes maybach', 'vs ferrari', 'phantom vs ghost',
    'cullinan vs bentayga', 'best luxury car', 'which rolls royce',
    'luxury car comparison', 'rolls royce alternative', 'supercar vs luxury',
    'dawn vs ghost', 'wraith vs ghost', 'spectre vs phantom',
    'dubai luxury showdown', 'best rental choice',
  ],
  'BRAND-INFO': [
    'rolls royce history', 'who owns rolls royce', 'rolls royce bmw',
    'goodwood factory', 'spirit of ecstasy meaning', 'rolls royce heritage',
    'charles rolls', 'henry royce', 'rolls royce legacy', 'british luxury',
    'bespoke commission', 'rolls royce craftsmanship', 'luxury brand story',
    'rolls royce ownership', 'most luxurious car',
  ],
};

// ─── Stopwords ──────────────────────────────────────────────────────────────
const STOP = new Set([
  'a', 'an', 'the', 'in', 'on', 'at', 'to', 'for', 'of', 'and', 'or', 'is',
  'it', 'its', 'by', 'with', 'from', 'as', 'be', 'was', 'were', 'are', 'been',
  'has', 'have', 'had', 'do', 'does', 'did', 'but', 'not', 'no', 'so', 'if',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'whom', 'how',
  'when', 'where', 'why', 'can', 'could', 'will', 'would', 'shall', 'should',
  'may', 'might', 'must', 'than', 'then', 'also', 'just', 'only', 'very',
  'too', 'more', 'most', 'much', 'many', 'some', 'any', 'all', 'each',
  'every', 'both', 'few', 'other', 'own', 'same', 'about', 'up', 'out',
  'into', 'over', 'after', 'before', 'between', 'under', 'again', 'there',
  'here', 'once', 'through', 'during', 'because', 'while', 'until', 'against',
  'your', 'you', 'we', 'our', 'they', 'their', 'my', 'me', 'him', 'her',
  'us', 'them', 'she', 'he',
]);

// ─── Extract keywords ───────────────────────────────────────────────────────

/** @type {Map<string, number>} keyword → relevance score */
const scored = new Map();

function addKw(kw, score) {
  kw = kw.toLowerCase().trim();
  if (kw.length < 3 || STOP.has(kw)) return;
  scored.set(kw, (scored.get(kw) || 0) + score);
}

function addPhrase(phrase, score) {
  phrase = phrase.toLowerCase().trim();
  if (phrase.length < 5) return;
  scored.set(phrase, (scored.get(phrase) || 0) + score);
}

// 1. Primary keyword (highest weight)
addPhrase(article.keyword, 100);

// 2. Title words (high weight)
const titleWords = article.title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, ' ')
  .split(/\s+/)
  .filter(w => w.length > 2 && !STOP.has(w));
for (const w of titleWords) addKw(w, 30);

// 3. Title bigrams (medium-high weight)
for (let i = 0; i < titleWords.length - 1; i++) {
  const bigram = `${titleWords[i]} ${titleWords[i + 1]}`;
  if (!STOP.has(titleWords[i]) && !STOP.has(titleWords[i + 1])) {
    addPhrase(bigram, 25);
  }
}

// 4. Slug decomposition (medium weight)
const slugWords = slug.split('-').filter(w => w.length > 2 && !STOP.has(w));
for (const w of slugWords) addKw(w, 15);

// 5. Cluster family keywords (lower weight — semantic enrichment)
const family = clusterFamilies[article.cluster] || [];
for (const fkw of family) {
  // Score higher if family keyword shares words with title/slug
  const fWords = fkw.split(' ');
  const overlap = fWords.filter(fw => titleWords.includes(fw) || slugWords.includes(fw)).length;
  if (overlap > 0) {
    addPhrase(fkw, 10 + overlap * 8);
  }
}

// 6. Sibling articles from same pillar (low weight — topical context)
if (article.pillar && article.pillar !== '—' && article.pillar !== '— (محور)') {
  const siblings = articles.filter(a =>
    a.pillar === article.pillar || titleToSlug(a.title) === article.pillar
  );
  for (const sib of siblings.slice(0, 5)) {
    const sibWords = sib.keyword.split(' ').filter(w => !STOP.has(w) && w.length > 2);
    for (const w of sibWords) addKw(w, 5);
  }
}

// 7. Always include core brand + location terms
addPhrase('rolls royce', 20);
addPhrase('dubai', 15);

// ─── Rank and select top 8-12 ───────────────────────────────────────────────
const ranked = [...scored.entries()]
  .sort((a, b) => b[1] - a[1])
  .filter(([kw]) => kw.length >= 3);

// Remove duplicates where one keyword is a substring of a higher-ranked one
const selected = [];
for (const [kw, score] of ranked) {
  if (selected.length >= 12) break;
  const isDuplicate = selected.some(([existing]) =>
    existing.includes(kw) || kw.includes(existing)
  );
  if (!isDuplicate) {
    selected.push([kw, score]);
  }
}

// Ensure we have at least 8
if (selected.length < 8) {
  for (const [kw, score] of ranked) {
    if (selected.length >= 8) break;
    if (!selected.some(([existing]) => existing === kw)) {
      selected.push([kw, score]);
    }
  }
}

// ─── Output ─────────────────────────────────────────────────────────────────
console.log('📋 Extracted Keywords (use these in article metadata):');
console.log('─'.repeat(60));

const keywords = selected.map(([kw]) => kw);
console.log(`\nEN keywords: [${keywords.map(k => `"${k}"`).join(', ')}]`);
console.log(`\nAR keywords: Translate the above to formal Arabic (فصحى)`);
console.log(`RU keywords: Translate the above to Russian`);

console.log('\n─'.repeat(60));
console.log(`\nTotal: ${keywords.length} keywords`);
console.log(`Source: blog-keywords.mjs v1.0 (automated — ✅)`);

// Also output as JSON for programmatic use
if (args.includes('--json')) {
  console.log('\n' + JSON.stringify({
    slug,
    articleNumber: article.n,
    title: article.title,
    primaryKeyword: article.keyword,
    cluster: article.cluster,
    role: article.role,
    keywords,
  }, null, 2));
}
