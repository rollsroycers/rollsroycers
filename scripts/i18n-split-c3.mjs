#!/usr/bin/env node
// Phase C3: split the last large content files into per-item small files.
//   services.json   -> sp_<svc> (per service) + keep services.json {services, placeholders}
//   fleet-content   -> fc_<model> (per model) + fc_shared (labels, virtualTourSpots, black badges, fleetPage, phantomPage)
//   locations-content -> lc_<loc> (per location) + lc_shared (labels, tiny locs, jumeirahPage, deiraPage)
// Key PATHS preserved; resolution via fallbackNS. Verified by harness + meta-diff + body-diff.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
const ROOT = '/Users/ahmedsalem/Desktop/all my projects/rollsroycers.com'
const L = ['en', 'ar', 'ru']
const rd = (l, f) => JSON.parse(readFileSync(join(ROOT, 'public/locales', l, f), 'utf8'))
const wr = (l, f, o) => { mkdirSync(join(ROOT, 'public/locales', l, join(f, '..')), { recursive: true }); writeFileSync(join(ROOT, 'public/locales', l, f), JSON.stringify(o, null, 2) + '\n') }
const rm = (l, f) => rmSync(join(ROOT, 'public/locales', l, f))

const SERVICES = ['corporate', 'wedding', 'airportTransfer', 'chauffeur', 'events', 'photoshoot', 'tours']
const MODELS = ['phantom', 'ghost', 'cullinan', 'dawn', 'wraith', 'spectre']
const FLEET_SHARED = ['title', 'subtitle', 'aed', 'perDay', 'rentNow', 'from', 'performance', 'convertibleTech', 'luxuryFeatures', 'virtualTourSpots', 'cullinanBlackBadge', 'ghostBlackBadge']
const LOCS = ['downtown', 'dubaiMarina', 'jbr', 'businessBay', 'difc', 'palmJumeirah']

for (const l of L) {
  // --- services ---
  const sj = rd(l, 'services.json')
  const sp = sj.servicesPages || {}
  for (const svc of SERVICES) if (sp[svc] !== undefined) wr(l, `services-pages/${svc}.json`, { servicesPages: { [svc]: sp[svc] } })
  delete sj.servicesPages
  wr(l, 'services.json', sj)

  // --- fleet-content ---
  const fc = rd(l, 'fleet-content.json')
  const fleet = fc.fleet || {}
  for (const m of MODELS) if (fleet[m] !== undefined) wr(l, `fleet/${m}.json`, { fleet: { [m]: fleet[m] } })
  const sharedFleet = {}
  for (const k of FLEET_SHARED) if (fleet[k] !== undefined) sharedFleet[k] = fleet[k]
  wr(l, 'fleet/_shared.json', { fleet: sharedFleet, fleetPage: fc.fleetPage || {}, phantomPage: fc.phantomPage || {} })
  rm(l, 'fleet-content.json')

  // --- locations-content ---
  const lc = rd(l, 'locations-content.json')
  const locs = lc.locations || {}
  for (const loc of LOCS) if (locs[loc] !== undefined) wr(l, `locations/${loc}.json`, { locations: { [loc]: locs[loc] } })
  const sharedLoc = {}
  for (const k of Object.keys(locs)) if (!LOCS.includes(k)) sharedLoc[k] = locs[k]
  wr(l, 'locations/_shared.json', { locations: sharedLoc, jumeirahPage: lc.jumeirahPage || {}, deiraPage: lc.deiraPage || {} })
  rm(l, 'locations-content.json')
}
console.log('C3 split done: sp_*(7), fc_*(6)+fc_shared, lc_*(6)+lc_shared')
