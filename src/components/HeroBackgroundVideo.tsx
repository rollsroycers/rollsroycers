import { useEffect, useRef } from 'react'

interface HeroBackgroundVideoProps {
  /** MP4 source path under /public */
  src: string
  /** Poster image (the instant LCP element). ~70KB thumbnail, already in /public. */
  poster: string
  className?: string
}

/**
 * Full-bleed hero background video, optimized for speed AND bandwidth on Cloudflare
 * Workers (where media is served as raw bytes — no on-the-fly optimization).
 *
 * Why this exists: the previous markup was `<video autoPlay preload=auto>` with NO poster,
 * so the browser downloaded the entire 0.8–1.5MB MP4 before first paint and the hero was
 * the LCP element — multi-second LCP on mobile/4G and 1.5MB burned on every visit.
 *
 * Strategy:
 *  - The `poster` paints instantly and IS the LCP (a ~70KB JPG) — fast LCP everywhere.
 *  - `preload="none"` + no `autoPlay` attribute means the video is NOT fetched during the
 *    critical render. We start playback from an effect AFTER mount.
 *  - We only load+play the video on larger screens and when the user is not on a
 *    data-saver / slow connection. On phones and Save-Data, ONLY the poster loads — the
 *    multi-hundred-KB video is never downloaded.
 *
 * SSR-safe: server and first client render emit identical markup (poster, no autoplay);
 * the effect runs post-hydration, so there is no hydration mismatch.
 */
export default function HeroBackgroundVideo({ src, poster, className = '' }: HeroBackgroundVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const conn = (navigator as any).connection
    const saveData = conn?.saveData === true
    const slow = typeof conn?.effectiveType === 'string' && /(^|-)2g$/.test(conn.effectiveType)
    const bigScreen = window.matchMedia('(min-width: 768px)').matches
    // Honor reduced-motion: don't autoplay decorative motion for users who opt out.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Poster-only on phones, Save-Data, slow connections, or reduced-motion → no video bytes.
    if (saveData || slow || !bigScreen || reducedMotion) return

    video.preload = 'auto'
    // Load the source now (it has preload="none" so nothing fetched until we ask).
    video.load()
    const play = () => video.play().catch(() => {})
    if (video.readyState >= 2) play()
    else video.addEventListener('canplay', play, { once: true })

    return () => video.removeEventListener('canplay', play)
  }, [])

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
