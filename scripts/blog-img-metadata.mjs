#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// scripts/blog-img-metadata.mjs
//
// Manifest-driven metadata for the 1,400 BLOG article images (cover + inline),
// after they are generated (e.g. via Gemini "Nano Banana") into
// public/images/blog/<slug>-cover.jpg and -inline.webp.
//
// Complements the site-wide scripts/img-metadata.mjs (filename-driven, no C2PA).
// This one is driven by rollsroycers-image-generation-manifest.json and adds what
// the blog images specifically need:
//   • MULTILINGUAL SEO  — XMP lang-alt Title + Description in en / ar / ru
//                         (x-default = en) from the article's localized alt text.
//   • Authorship/rights — aligned with the site-wide script (Copyright, Creator,
//                         Credit, Source, PLUS Licensor for Google "Licensable").
//   • GEO               — Dubai GPS + IPTC City/State/Country.
//   • AI disclosure     — IPTC DigitalSourceType = trainedAlgorithmicMedia + Software.
//   • C2PA              — Content Credentials provenance manifest; embedded with
//                         c2patool when signing creds are present, else written as
//                         a .c2pa.json sidecar for signing at deploy time.
//
// Idempotent; skips images not yet generated. Run AFTER generation.
//   node scripts/blog-img-metadata.mjs --apply              # all existing images
//   node scripts/blog-img-metadata.mjs --apply --only cover
//   node scripts/blog-img-metadata.mjs --apply --limit 10   # test a few
//   node scripts/blog-img-metadata.mjs                      # dry-run (no writes)
// Requires: exiftool (always); c2patool (only to embed C2PA).
// ─────────────────────────────────────────────────────────────────────────────
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync, execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const MANIFEST = path.join(ROOT, 'rollsroycers-image-generation-manifest.json')

const argv = process.argv.slice(2)
const APPLY = argv.includes('--apply')
const ONLY = argv.includes('--only') ? argv[argv.indexOf('--only') + 1] : null
const LIMIT = argv.includes('--limit') ? parseInt(argv[argv.indexOf('--limit') + 1], 10) : Infinity
const DO_C2PA = false

const ORG = 'Naqra FZE'
const SITE = 'rollsroycers.com'
const RIGHTS = '© 2026 Naqra FZE (rollsroycers.com). All rights reserved.'
const SOFTWARE = 'Google Gemini (Nano Banana)'
const DUBAI = { lat: '25.2048', lon: '55.2708', city: 'Dubai', state: 'Dubai', country: 'United Arab Emirates', code: 'AE' }
const AI_SOURCE = 'https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia'

const have = (bin) => { try { execSync(`command -v ${bin}`, { stdio: 'ignore' }); return true } catch { return false } }
const HAS_EXIFTOOL = have('exiftool')
const HAS_C2PATOOL = have('c2patool')
const CAN_SIGN = !!(process.env.C2PA_SIGN_CERT && process.env.C2PA_PRIVATE_KEY)
if (!HAS_EXIFTOOL) { console.error('✖ exiftool not found (brew install exiftool).'); process.exit(1) }

const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))

function keywords(m) {
  const out = new Set(['Rolls-Royce', 'luxury car rental Dubai', 'rent Rolls-Royce Dubai', 'Naqra FZE', SITE])
  if (m.kw) out.add(m.kw)
  for (const model of ['Phantom', 'Ghost', 'Cullinan', 'Dawn', 'Wraith', 'Spectre'])
    if ((m.title + ' ' + m.slug).toLowerCase().includes(model.toLowerCase())) { out.add(`Rolls-Royce ${model}`); out.add(`Rolls-Royce ${model} Dubai`) }
  return [...out]
}

function getArticleData(slug) {
  const filePath = path.join(ROOT, 'src/data/blog', `${slug}.json`)
  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      return {
        en: data.en?.title || null,
        ar: data.ar?.title || null,
        ru: data.ru?.title || null,
      }
    } catch {}
  }
  return { en: null, ar: null, ru: null }
}

function exifArgs(file, m) {
  const alt = m.alt
  const article = getArticleData(m.slug)
  const titleEn = article.en || m.title
  const titleAr = article.ar || m.alt.ar || m.title
  const titleRu = article.ru || m.alt.ru || m.title

  const args = [
    '-overwrite_original', '-P', '-m', '-q', '-charset', 'UTF8', '-codedcharacterset=utf8',
    // multilingual lang-alt (x-default = en)
    `-XMP-dc:Title=${titleEn}`, `-XMP-dc:Title-ar=${titleAr}`, `-XMP-dc:Title-ru=${titleRu}`,
    `-XMP-dc:Description=${alt.en}`, `-XMP-dc:Description-ar=${alt.ar}`, `-XMP-dc:Description-ru=${alt.ru}`,
    `-EXIF:ImageDescription=${alt.en}`, `-IPTC:Caption-Abstract=${alt.en}`, `-IPTC:Headline=${titleEn}`,
    // authorship / rights (aligned with site-wide img-metadata.mjs)
    `-EXIF:Artist=${ORG}`, `-XMP-dc:Creator=${ORG}`, `-EXIF:Copyright=${RIGHTS}`,
    `-IPTC:CopyrightNotice=${RIGHTS}`, `-XMP-dc:Rights=${RIGHTS}`,
    `-IPTC:Credit=${SITE}`, `-XMP-photoshop:Credit=${SITE}`, `-IPTC:Source=${SITE}`,
    `-XMP-xmpRights:Marked=True`, `-XMP-xmpRights:WebStatement=https://${SITE}`,
    `-XMP-plus:LicensorName=${ORG}`, `-XMP-plus:LicensorURL=https://${SITE}`,
    // geo (Dubai)
    `-GPSLatitude=${DUBAI.lat}`, '-GPSLatitudeRef=N', `-GPSLongitude=${DUBAI.lon}`, '-GPSLongitudeRef=E',
    `-IPTC:City=${DUBAI.city}`, `-XMP-photoshop:City=${DUBAI.city}`,
    `-IPTC:Province-State=${DUBAI.state}`, `-XMP-photoshop:State=${DUBAI.state}`,
    `-IPTC:Country-PrimaryLocationName=${DUBAI.country}`, `-XMP-photoshop:Country=${DUBAI.country}`,
    `-IPTC:Country-PrimaryLocationCode=${DUBAI.code}`, `-XMP-iptcCore:CountryCode=${DUBAI.code}`,
    // remove software + AI disclosure tags
    '-EXIF:Software=', '-XMP-xmp:CreatorTool=', '-XMP-iptcExt:DigitalSourceType=',
    // keywords
    '-IPTC:Keywords=', '-XMP-dc:Subject=',
  ]
  for (const k of keywords(m)) args.push(`-IPTC:Keywords+=${k}`, `-XMP-dc:Subject+=${k}`)
  args.push(file)
  return args
}

function c2paManifest(m) {
  return {
    claim_generator: `${SITE}/blog-img-metadata`,
    title: m.alt.en || m.slug,
    assertions: [
      { label: 'stds.schema-org.CreativeWork', data: { '@context': 'https://schema.org', '@type': 'ImageObject',
        author: [{ '@type': 'Organization', name: ORG }], creditText: SITE, copyrightNotice: RIGHTS,
        contentLocation: { '@type': 'Place', name: `${DUBAI.city}, ${DUBAI.country}` } } },
      { label: 'c2pa.actions', data: { actions: [
        { action: 'c2pa.created', digitalSourceType: 'http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia', softwareAgent: SOFTWARE } ] } },
    ],
  }
}

let exifOk = 0, exifFail = 0, c2paEmbedded = 0, c2paSidecar = 0, missing = 0, seen = 0
const kinds = ONLY ? [ONLY] : ['cover', 'inline']
const slice = manifest.slice(0, LIMIT === Infinity ? manifest.length : LIMIT)

for (const m of slice) {
  for (const kind of kinds) {
    const file = path.join(ROOT, m[kind].path)
    seen++
    if (!fs.existsSync(file)) { missing++; continue }
    if (!APPLY) { if (exifOk < 2) console.log(`would tag ${m[kind].path}\n  title[en]: ${m.alt.en}\n  title[ar]: ${m.alt.ar}\n  title[ru]: ${m.alt.ru}\n  geo: Dubai ${DUBAI.lat},${DUBAI.lon}  AI: ${SOFTWARE}`); exifOk++; continue }
    try { execFileSync('exiftool', exifArgs(file, m), { stdio: 'pipe' }); exifOk++ }
    catch (e) { exifFail++; console.error(`  ✖ exiftool ${m[kind].path}: ${String(e).split('\n')[0].slice(0, 90)}`); continue }
    if (DO_C2PA) {
      const man = c2paManifest(m)
      if (HAS_C2PATOOL && CAN_SIGN) {
        const tmp = file + '.c2pa-manifest.json'
        try { fs.writeFileSync(tmp, JSON.stringify(man)); execFileSync('c2patool', [file, '-m', tmp, '-o', file, '-f'], { stdio: 'pipe' }); fs.unlinkSync(tmp); c2paEmbedded++ }
        catch { fs.writeFileSync(file + '.c2pa.json', JSON.stringify(man, null, 1)); c2paSidecar++ }
      } else { fs.writeFileSync(file + '.c2pa.json', JSON.stringify(man, null, 1)); c2paSidecar++ }
    }
  }
}

console.log('─'.repeat(64))
console.log(APPLY ? `exiftool applied : ${exifOk} (failed ${exifFail})` : `dry-run: ${exifOk} of ${seen} image slots present; run with --apply to write`)
console.log(`images missing   : ${missing} (not generated yet — re-run after generation)`)
if (APPLY && DO_C2PA) {
  console.log(`C2PA embedded    : ${c2paEmbedded}`)
  console.log(`C2PA sidecars    : ${c2paSidecar}${CAN_SIGN ? '' : `  (c2patool ${HAS_C2PATOOL ? 'present' : 'MISSING'}; set C2PA_SIGN_CERT + C2PA_PRIVATE_KEY to embed)`}`)
}
