/**
 * Performance Optimization Utilities
 * Handles lazy loading, resource hints, and performance improvements
 */

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  ];

  fontLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(link);
  });

  // DNS prefetch for third-party domains
  const dnsPrefetchDomains = [
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
}

// Lazy load images with Intersection Observer
export function setupLazyLoading() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
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

// Defer non-critical scripts
export function deferNonCriticalScripts() {
  if (typeof window === 'undefined') return;

  // List of scripts to defer
  const deferScripts = [
    { src: 'https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID', async: true },
    // Add other third-party scripts here
  ];

  // Load scripts after page load
  const loadDeferredScripts = () => {
    deferScripts.forEach(scriptConfig => {
      const script = document.createElement('script');
      script.src = scriptConfig.src;
      if (scriptConfig.async) script.async = true;
      document.body.appendChild(script);
    });
  };

  // Use requestIdleCallback if available
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadDeferredScripts, { timeout: 2000 });
  } else {
    setTimeout(loadDeferredScripts, 2000);
  }
}

// Progressive enhancement for forms
export function enhanceForms() {
  if (typeof window === 'undefined') return;

  const forms = document.querySelectorAll('form[data-ajax]');
  
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const button = form.querySelector('button[type="submit"]');
      
      if (button) {
        button.disabled = true;
        button.textContent = 'Loading...';
      }
      
      try {
        const response = await fetch(form.action, {
          method: form.method || 'POST',
          body: formData,
        });
        
        if (response.ok) {
          // Handle success
          form.reset();
          if (button) button.textContent = 'Success!';
        } else {
          if (button) button.textContent = 'Error! Try again';
        }
      } catch (error) {
        console.error('Form submission error:', error);
        if (button) button.textContent = 'Error! Try again';
      } finally {
        if (button) {
          setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Submit';
          }, 2000);
        }
      }
    });
  });
}

// Resource hints based on user interaction
export function setupResourceHints() {
  if (typeof window === 'undefined') return;

  // Prefetch resources on hover
  const links = document.querySelectorAll('a[href^="/"]');
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const href = link.getAttribute('href');
      if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = href;
        document.head.appendChild(prefetchLink);
      }
    });
  });
}

// Optimize third-party embeds
export function optimizeEmbeds() {
  if (typeof window === 'undefined') return;

  // Lazy load YouTube embeds
  const youtubeEmbeds = document.querySelectorAll('.youtube-embed');
  
  youtubeEmbeds.forEach(embed => {
    const videoId = embed.dataset.videoId;
    if (!videoId) return;
    
    // Create thumbnail placeholder
    const thumbnail = document.createElement('img');
    thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    thumbnail.alt = 'Video thumbnail';
    thumbnail.loading = 'lazy';
    
    // Create play button
    const playButton = document.createElement('button');
    playButton.className = 'play-button';
    playButton.innerHTML = '▶';
    
    embed.appendChild(thumbnail);
    embed.appendChild(playButton);
    
    // Load iframe on click
    embed.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      
      embed.innerHTML = '';
      embed.appendChild(iframe);
    });
  });
}

// Memory management
export function setupMemoryManagement() {
  if (typeof window === 'undefined') return;

  // Clean up event listeners on page navigation
  const cleanup = () => {
    // Remove any global event listeners
    window.removeEventListener('beforeunload', cleanup);
  };

  window.addEventListener('beforeunload', cleanup);

  // Garbage collection hints for large data
  let largeDataCache = new WeakMap();
  
  return {
    storeLargeData: (key, data) => {
      largeDataCache.set(key, data);
    },
    getLargeData: (key) => {
      return largeDataCache.get(key);
    },
    clearLargeData: () => {
      largeDataCache = new WeakMap();
    }
  };
}

// Network information API for adaptive loading
export function setupAdaptiveLoading() {
  if (typeof window === 'undefined' || !('connection' in navigator)) return;

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  const updateStrategy = () => {
    const effectiveType = connection.effectiveType;
    const saveData = connection.saveData;
    
    // Adjust loading strategy based on connection
    if (saveData || effectiveType === 'slow-2g' || effectiveType === '2g') {
      // Minimal loading
      document.body.classList.add('reduced-data-mode');
      // Disable autoplay videos
      document.querySelectorAll('video[autoplay]').forEach(video => {
        video.removeAttribute('autoplay');
      });
    } else if (effectiveType === '3g') {
      // Moderate loading
      document.body.classList.add('moderate-data-mode');
    } else {
      // Full experience
      document.body.classList.remove('reduced-data-mode', 'moderate-data-mode');
    }
  };

  updateStrategy();
  connection.addEventListener('change', updateStrategy);
}

// Main initialization function
export default function initializePerformanceOptimizations() {
  if (typeof window === 'undefined') return;

  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      setupLazyLoading();
      setupResourceHints();
      optimizeEmbeds();
      setupAdaptiveLoading();
      enhanceForms();
    });
  } else {
    // DOM already loaded
    preloadCriticalResources();
    setupLazyLoading();
    setupResourceHints();
    optimizeEmbeds();
    setupAdaptiveLoading();
    enhanceForms();
  }

  // Defer non-critical scripts
  deferNonCriticalScripts();
  
  // Setup memory management
  const memoryManager = setupMemoryManagement();
  
  // Export for use in other modules
  window.__performanceUtils = {
    memoryManager,
    setupLazyLoading,
    deferNonCriticalScripts,
  };
}

// Export for use in other modules
export { initializePerformanceOptimizations };