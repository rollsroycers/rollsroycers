// Lightweight performance optimizations for the website

// Optimize CSS delivery for non-critical stylesheets
const optimizeCSSDelivery = () => {
  const nonCriticalStyles = document.querySelectorAll('link[data-async]');
  nonCriticalStyles.forEach(link => {
    const linkElement = link as HTMLLinkElement;
    linkElement.media = 'print';
    linkElement.onload = function() {
      (this as HTMLLinkElement).media = 'all';
    };
  });
};

// Reserve space for dynamic content to reduce CLS
const reduceLayoutShifts = () => {
  const dynamicContainers = document.querySelectorAll('[data-dynamic-height]');
  dynamicContainers.forEach(container => {
    const element = container as HTMLElement;
    const minHeight = element.dataset.dynamicHeight;
    if (minHeight) {
      element.style.minHeight = minHeight;
    }
  });
};

// NOTE: a custom `prefetchVisibleLinks` used to live here. It injected
// <link rel="prefetch" href="..."> for EVERY in-viewport internal link, pointing at
// the FULL HTML page. Because the footer links to every page on the site, scrolling it
// into view fired 30+ concurrent full-document GETs at once — a thundering herd that
// hammered cold Cloudflare Worker renders (especially /ar/* and /ru/* right after a
// deploy) and produced cascades of 503s. It was also redundant: Next.js <Link> already
// prefetches navigations (data JSON only, throttled, queued). Removed deliberately —
// do not reintroduce blanket rel=prefetch of full pages. Rely on Next <Link> prefetch.

// Main initialization function
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Run lightweight optimizations
  optimizeCSSDelivery();
  reduceLayoutShifts();
};

// Export for use in _app.tsx
export default initializePerformanceOptimizations;