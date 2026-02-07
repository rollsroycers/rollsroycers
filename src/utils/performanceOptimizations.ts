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

// Prefetch visible links for faster navigation
const prefetchVisibleLinks = () => {
  const links = document.querySelectorAll('a[href^="/"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = entry.target as HTMLAnchorElement;
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link.href;
        document.head.appendChild(prefetchLink);
        observer.unobserve(link);
      }
    });
  }, {
    rootMargin: '0px 0px 200px 0px'
  });

  links.forEach(link => observer.observe(link));
};

// Main initialization function
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Run lightweight optimizations
  optimizeCSSDelivery();
  reduceLayoutShifts();

  // Defer link prefetching to idle time
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetchVisibleLinks, { timeout: 5000 });
  } else {
    setTimeout(prefetchVisibleLinks, 3000);
  }
};

// Export for use in _app.tsx
export default initializePerformanceOptimizations;