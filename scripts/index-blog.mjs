#!/usr/bin/env node
/**
 * index-blog.mjs — Search Engine Indexing for rollsroycers.com
 *
 * Submits a newly published blog article URL (in all 3 locales) to:
 *   - Google Indexing API (via service account key)
 *   - IndexNow (Bing, Yandex, Seznam, Naver)
 *
 * Usage:
 *   npm run index:blog <slug>
 *   node scripts/index-blog.mjs <slug>
 *
 * Environment:
 *   GOOGLE_SA_KEY_PATH — path to Google service account JSON key (optional)
 *   INDEXNOW_KEY       — IndexNow API key (falls back to reading indexnow-key.txt)
 */

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const SITE = 'https://rollsroycers.com';
const LOCALES = ['', '/ar', '/ru']; // EN has no prefix

// ─── Parse CLI args ─────────────────────────────────────────────────────────
const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node scripts/index-blog.mjs <slug>');
  console.error('Example: node scripts/index-blog.mjs rolls-royce-ghost-rental-dubai');
  process.exit(1);
}

// Build URLs for all 3 locales
const urls = LOCALES.map(prefix => `${SITE}${prefix}/blog/${slug}`);

console.log(`\n🔍 Indexing article: ${slug}`);
console.log(`   URLs to submit:`);
urls.forEach(u => console.log(`     ${u}`));
console.log('');

// ─── Helper: HTTPS request ──────────────────────────────────────────────────
function httpRequest(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('Timeout')); });
    if (body) req.write(body);
    req.end();
  });
}

// ─── IndexNow Submission ────────────────────────────────────────────────────
async function submitIndexNow() {
  // Try to find IndexNow key
  let indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    const keyFile = resolve(ROOT, 'public', 'indexnow-key.txt');
    if (existsSync(keyFile)) {
      indexNowKey = readFileSync(keyFile, 'utf8').trim();
    }
  }
  if (!indexNowKey) {
    // Try .env.local
    const envPath = resolve(ROOT, '.env.local');
    if (existsSync(envPath)) {
      const envContent = readFileSync(envPath, 'utf8');
      const match = envContent.match(/INDEXNOW_KEY=(.+)/);
      if (match) indexNowKey = match[1].trim();
    }
  }

  if (!indexNowKey) {
    console.log('⚠️  IndexNow: No key found (set INDEXNOW_KEY env var or create public/indexnow-key.txt)');
    return { success: false, reason: 'no key' };
  }

  // IndexNow supports batch submission
  const payload = JSON.stringify({
    host: 'rollsroycers.com',
    key: indexNowKey,
    keyLocation: `${SITE}/${indexNowKey}.txt`,
    urlList: urls,
  });

  // Submit to all IndexNow endpoints
  const engines = [
    { name: 'Bing',   host: 'www.bing.com' },
    { name: 'Yandex', host: 'yandex.com' },
    { name: 'Seznam', host: 'search.seznam.cz' },
    { name: 'Naver',  host: 'searchadvisor.naver.com' },
  ];

  const results = [];
  for (const engine of engines) {
    try {
      const res = await httpRequest({
        hostname: engine.host,
        port: 443,
        path: '/indexnow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload),
        },
      }, payload);

      const ok = res.status >= 200 && res.status < 300;
      results.push({ engine: engine.name, status: res.status, ok });
      console.log(`  ${ok ? '✅' : '❌'} ${engine.name}: HTTP ${res.status}`);
    } catch (err) {
      results.push({ engine: engine.name, status: 0, ok: false, error: err.message });
      console.log(`  ❌ ${engine.name}: ${err.message}`);
    }
  }

  return { success: results.some(r => r.ok), results };
}

// ─── Google Indexing API ────────────────────────────────────────────────────
async function submitGoogle() {
  // Check for service account key
  let saKeyPath = process.env.GOOGLE_SA_KEY_PATH;
  if (!saKeyPath) {
    // Try common locations
    const candidates = [
      resolve(ROOT, '.google-sa-key.json'),
      resolve(ROOT, 'google-sa-key.json'),
      resolve(ROOT, 'config', 'google-sa-key.json'),
    ];
    saKeyPath = candidates.find(p => existsSync(p));
  }

  if (!saKeyPath || !existsSync(saKeyPath)) {
    console.log('⚠️  Google: No service account key found (set GOOGLE_SA_KEY_PATH)');
    console.log('   Falling back to Google Search Console manual submission.');
    console.log(`   Submit these URLs in GSC:`);
    urls.forEach(u => console.log(`     ${u}`));
    return { success: false, reason: 'no service account' };
  }

  try {
    // Dynamic import for google-auth-library (may not be installed)
    const { google } = await import('googleapis');
    const auth = new google.auth.GoogleAuth({
      keyFile: saKeyPath,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });
    const client = await auth.getClient();

    const results = [];
    for (const url of urls) {
      try {
        const res = await client.request({
          url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
          method: 'POST',
          data: { url, type: 'URL_UPDATED' },
        });
        results.push({ url, status: res.status, ok: true });
        console.log(`  ✅ Google: ${url} — HTTP ${res.status}`);
      } catch (err) {
        results.push({ url, status: err.response?.status || 0, ok: false });
        console.log(`  ❌ Google: ${url} — ${err.message}`);
      }
    }
    return { success: results.some(r => r.ok), results };
  } catch (err) {
    console.log(`  ⚠️  Google: googleapis not installed or auth error — ${err.message}`);
    console.log(`   Install with: npm install googleapis`);
    return { success: false, reason: err.message };
  }
}

// ─── Sitemap Ping (legacy fallback) ─────────────────────────────────────────
async function pingSitemaps() {
  const sitemapUrl = `${SITE}/sitemap-pages.xml`;
  const pingUrls = [
    `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  ];

  for (const pingUrl of pingUrls) {
    try {
      const url = new URL(pingUrl);
      const res = await httpRequest({
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'GET',
      });
      const engine = url.hostname.includes('google') ? 'Google' : 'Bing';
      console.log(`  ${res.status < 300 ? '✅' : '⚠️ '} Sitemap ping ${engine}: HTTP ${res.status}`);
    } catch {
      // Sitemap pings are best-effort
    }
  }
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('📡 Submitting to IndexNow (Bing, Yandex, Seznam, Naver)...');
  const indexNowResult = await submitIndexNow();

  console.log('\n📡 Submitting to Google Indexing API...');
  const googleResult = await submitGoogle();

  console.log('\n📡 Pinging sitemaps...');
  await pingSitemaps();

  // Summary
  console.log('\n' + '─'.repeat(60));
  console.log('📊 Indexing Summary:');
  console.log(`   IndexNow: ${indexNowResult.success ? '✅' : '⚠️  (check above)'}`);
  console.log(`   Google:   ${googleResult.success ? '✅' : '⚠️  (check above)'}`);
  console.log(`   Article:  ${slug}`);
  console.log(`   Locales:  EN + AR + RU (${urls.length} URLs)`);
  console.log('─'.repeat(60));
}

main().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
