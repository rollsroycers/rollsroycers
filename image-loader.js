// Custom next/image loader → Cloudflare Image Resizing (/cdn-cgi/image/).
//
// WHY: the site runs on Cloudflare Workers (OpenNext), where Next.js's built-in
// image optimizer cannot run, so images.unoptimized is normally true and every
// image ships at full size (a 1200×630 cover is loaded even inside a 192px card).
// Cloudflare can resize/recompress/convert (AVIF/WebP) at the edge via
// /cdn-cgi/image/ — this loader routes next/image through it so each <Image>
// gets a correctly-sized, modern-format file.
//
// SAFE BY DEFAULT: only engaged when NEXT_PUBLIC_CF_IMAGES=1 (next.config.js then
// also flips images.unoptimized to false). Requires Cloudflare Image Resizing
// (Pro+ / Images) enabled on the zone — verify before enabling, or images 404.
module.exports = function cloudflareLoader({ src, width, quality }) {
  // Leave non-local / external URLs untouched.
  if (/^https?:\/\//i.test(src) && !src.includes('rollsroycers.com')) return src
  const path = src.startsWith('/') ? src : `/${src}`
  const opts = [`width=${width}`, `quality=${quality || 75}`, 'format=auto', 'fit=cover']
  return `/cdn-cgi/image/${opts.join(',')}${path}`
}
