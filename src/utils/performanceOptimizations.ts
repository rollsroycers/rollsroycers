// Comprehensive performance optimizations for the website

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    // Critical CSS
    { type: 'style', href: '/_next/static/css/app.css' },
    // Critical JavaScript
    { type: 'script', href: '/_next/static/chunks/framework.js' },
    // Critical images for LCP
    { type: 'image', href: '/images/Rolls-Royce-car-icon.jpg' },
  ];

  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.type;
    link.href = resource.href;
    if (resource.type === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Optimize images loading
export const optimizeImageLoading = () => {
  if (typeof window === 'undefined') return;

  // Native lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  
  if ('loading' in HTMLImageElement.prototype) {
    images.forEach(img => {
      const imgElement = img as HTMLImageElement;
      imgElement.src = imgElement.dataset.src || '';
      imgElement.loading = 'lazy';
    });
  } else {
    // Fallback to IntersectionObserver
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }
};

// Reduce JavaScript execution time
export const optimizeJavaScriptExecution = () => {
  if (typeof window === 'undefined') return;

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {
    const scriptElement = script as HTMLScriptElement;
    scriptElement.defer = true;
  });

  // Use requestIdleCallback for non-critical tasks
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      // Load analytics and tracking scripts
      loadAnalytics();
      // Initialize non-critical features
      initializeNonCriticalFeatures();
    }, { timeout: 5000 });
  } else {
    // Fallback to setTimeout
    setTimeout(() => {
      loadAnalytics();
      initializeNonCriticalFeatures();
    }, 2000);
  }
};

// Load analytics scripts
const loadAnalytics = () => {
  // Google Analytics
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  document.body.appendChild(gaScript);

  // StatCounter (configured in _document.tsx - Project: 13143252)
};

// Initialize non-critical features
const initializeNonCriticalFeatures = () => {
  // Social media widgets
  // Chat widgets
  // Other third-party integrations
};

// Optimize CSS delivery
export const optimizeCSSDelivery = () => {
  if (typeof window === 'undefined') return;

  // Load non-critical CSS asynchronously
  const nonCriticalStyles = document.querySelectorAll('link[data-async]');
  nonCriticalStyles.forEach(link => {
    const linkElement = link as HTMLLinkElement;
    linkElement.media = 'print';
    linkElement.onload = function() {
      (this as HTMLLinkElement).media = 'all';
    };
  });
};

// Reduce layout shifts (CLS)
export const reduceLayoutShifts = () => {
  if (typeof window === 'undefined') return;

  // Add dimensions to images and videos
  const media = document.querySelectorAll('img:not([width]), video:not([width])');
  media.forEach(element => {
    if (element instanceof HTMLImageElement) {
      if (element.naturalWidth && element.naturalHeight) {
        element.width = element.naturalWidth;
        element.height = element.naturalHeight;
      }
    } else if (element instanceof HTMLVideoElement) {
      if (element.videoWidth && element.videoHeight) {
        element.width = element.videoWidth;
        element.height = element.videoHeight;
      }
    }
  });

  // Reserve space for dynamic content
  const dynamicContainers = document.querySelectorAll('[data-dynamic-height]');
  dynamicContainers.forEach(container => {
    const element = container as HTMLElement;
    const minHeight = element.dataset.dynamicHeight;
    if (minHeight) {
      element.style.minHeight = minHeight;
    }
  });
};

// Optimize First Input Delay (FID)
export const optimizeFID = () => {
  if (typeof window === 'undefined') return;

  // Break up long tasks
  const breakUpLongTask = (task: () => void) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(task);
    } else {
      setTimeout(task, 0);
    }
  };

  // Debounce input handlers
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    let timeout: NodeJS.Timeout;
    input.addEventListener('input', (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        // Handle input
      }, 300);
    });
  });
};

// Prefetch next page resources
export const prefetchNextPage = () => {
  if (typeof window === 'undefined') return;

  const links = document.querySelectorAll('a[href^="/"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = entry.target as HTMLAnchorElement;
        const href = link.href;
        
        // Create prefetch link
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
        
        observer.unobserve(link);
      }
    });
  }, {
    rootMargin: '0px 0px 200px 0px'
  });

  links.forEach(link => observer.observe(link));
};

// Memory management
export const optimizeMemoryUsage = () => {
  if (typeof window === 'undefined') return;

  // Clean up event listeners on page unload
  window.addEventListener('beforeunload', () => {
    // Remove all event listeners
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      const clone = element.cloneNode(true);
      if (element.parentNode) {
        element.parentNode.replaceChild(clone, element);
      }
    });
  });

  // Clear unused objects from memory
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      // Garbage collection hints
      if ('gc' in window) {
        (window as any).gc();
      }
    });
  }
};

// Main initialization function
export const initializePerformanceOptimizations = () => {
  if (typeof window === 'undefined') return;

  // Run critical optimizations immediately
  preloadCriticalResources();
  optimizeCSSDelivery();
  reduceLayoutShifts();

  // Run other optimizations after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeImageLoading();
      optimizeJavaScriptExecution();
      optimizeFID();
      prefetchNextPage();
      optimizeMemoryUsage();
    });
  } else {
    // DOM is already ready
    optimizeImageLoading();
    optimizeJavaScriptExecution();
    optimizeFID();
    prefetchNextPage();
    optimizeMemoryUsage();
  }
};

// Export for use in _app.tsx
export default initializePerformanceOptimizations;