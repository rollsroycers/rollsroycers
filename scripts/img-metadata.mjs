#!/usr/bin/env node
// Embed TRUTHFUL IPTC/XMP/EXIF metadata into all images for image-SEO + AI attribution:
// copyright, creator, credit, source, Web Statement of Rights + Licensor URL (Google
// "Licensable" badge), descriptive caption + keywords, and depicted/operating location
// (Dubai, UAE). NO fabricated camera/capture EXIF, NO C2PA. Uses exiftool.
// Run: node scripts/img-metadata.mjs [--apply] [--limit N]
import { readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { execFileSync } from 'node:child_process'

const ROOT = '/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com'
const IMG = join(ROOT, 'public/images')
const APPLY = process.argv.includes('--apply')
const limArg = process.argv.indexOf('--limit')
const LIMIT = limArg >= 0 ? parseInt(process.argv[limArg + 1]) : Infinity

const COMMON = {
  Copyright: '© 2026 Naqra FZE (rollsroycers.com). All rights reserved.',
  Artist: 'Rolls-Royce Dubai (Naqra FZE)',
  'XMP-dc:Creator': 'Rolls-Royce Dubai (Naqra FZE)',
  'IPTC:Credit': 'rollsroycers.com',
  'XMP-photoshop:Credit': 'rollsroycers.com',
  'IPTC:Source': 'rollsroycers.com',
  'XMP-xmpRights:WebStatement': 'https://rollsroycers.com',
  'XMP-xmpRights:Marked': 'True',
  'XMP-xmpRights:UsageTerms': 'Used with permission for rollsroycers.com (Rolls-Royce rental Dubai). Contact rollsroycers.com to license.',
  'XMP-plus:LicensorName': 'Naqra FZE',
  'XMP-plus:LicensorURL': 'https://rollsroycers.com',
  'IPTC:City': 'Dubai', 'XMP-photoshop:City': 'Dubai',
  'IPTC:Province-State': 'Dubai', 'XMP-photoshop:State': 'Dubai',
  'IPTC:Country-PrimaryLocationName': 'United Arab Emirates', 'XMP-photoshop:Country': 'United Arab Emirates',
  'IPTC:Country-PrimaryLocationCode': 'AE', 'XMP-iptcCore:CountryCode': 'AE',
  'GPSLatitude': '25.2048', 'GPSLatitudeRef': 'N',
  'GPSLongitude': '55.2708', 'GPSLongitudeRef': 'E',
}

function walk(d, o = []) { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p, o); else o.push(p) } return o }
const humanize = (f) => f.split('/').pop().replace(/\.[a-z0-9]+$/i, '')
  .replace(/[_]+/g, ' ').replace(/-(\d+)$/, ' $1').replace(/\s+/g, ' ').trim()

// exclude reviews/ and blog/ (blog has its own dedicated script rollsroycers-image-generation-manifest.json driven by blog-img-metadata.mjs)
const files = walk(IMG).filter((f) => /\.(jpe?g|png|webp)$/i.test(f) && !f.includes('/reviews/') && !f.includes('/blog/')).slice(0, LIMIT)
let done = 0
for (const f of files) {
  const base = humanize(f)
  const caption = `${base} — luxury Rolls-Royce rental in Dubai by rollsroycers.com`
  const kws = ['Rolls-Royce', 'luxury car rental Dubai', 'chauffeur Dubai', 'rent Rolls-Royce Dubai', 'Naqra FZE', 'rollsroycers.com']
  for (const m of ['Phantom', 'Ghost', 'Cullinan', 'Dawn', 'Wraith', 'Spectre']) if (base.toLowerCase().includes(m.toLowerCase())) kws.push(`Rolls-Royce ${m}`, `Rolls-Royce ${m} Dubai`)
  const args = ['-overwrite_original', '-P', '-m', '-q']
  for (const [k, v] of Object.entries(COMMON)) args.push(`-${k}=${v}`)
  for (const dt of ['IPTC:Caption-Abstract', 'EXIF:ImageDescription', 'XMP-dc:Description', 'XMP-dc:Title', 'IPTC:Headline']) args.push(`-${dt}=${caption}`)
  args.push('-IPTC:Keywords=', '-XMP-dc:Subject=') // clear then add
  for (const k of kws) { args.push(`-IPTC:Keywords+=${k}`, `-XMP-dc:Subject+=${k}`) }
  args.push(f)
  if (APPLY) { try { execFileSync('exiftool', args, { stdio: 'pipe' }); done++ } catch (e) { console.log('ERR', f.split('/').pop(), String(e).slice(0, 80)) } }
  else if (done < 2) { console.log(f.split('/').pop(), '\n  caption:', caption, '\n  keywords:', kws.join(', ')); done++ }
}
console.log(APPLY ? `\napplied metadata to ${done}/${files.length} images` : `\n(dry-run) would process ${files.length} images`)
