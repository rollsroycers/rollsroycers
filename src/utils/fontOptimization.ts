// Font optimization utilities
export const preloadFonts = () => {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fonts = [
    {
      family: 'Inter',
      weight: '400',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2'
    },
    {
      family: 'Inter',
      weight: '700',
      style: 'normal', 
      url: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hjp-Ek-_EeA.woff2'
    }
  ];

  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = font.url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    // Also create font-face declaration
    const style = document.createElement('style');
    style.innerHTML = `
      @font-face {
        font-family: '${font.family}';
        font-style: ${font.style};
        font-weight: ${font.weight};
        font-display: swap;
        src: url('${font.url}') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
    `;
    document.head.appendChild(style);
  });
};

// Optimize font loading with Font Face Observer
export const optimizeFontLoading = async () => {
  if (typeof window === 'undefined') return;

  // Check if fonts are already loaded
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
    document.documentElement.classList.add('fonts-loaded');
  } else {
    // Fallback for browsers that don't support Font Loading API
    setTimeout(() => {
      document.documentElement.classList.add('fonts-loaded');
    }, 3000);
  }
};

// Font subsetting for Arabic support
export const loadArabicFonts = () => {
  if (typeof window === 'undefined') return;
  
  const currentLang = document.documentElement.lang;
  
  if (currentLang === 'ar') {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;700&display=swap';
    document.head.appendChild(link);
  }
};

// Resource hints for font optimization
export const addResourceHints = () => {
  if (typeof window === 'undefined') return;

  const hints = [
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Initialize all font optimizations
export const initFontOptimization = () => {
  if (typeof window === 'undefined') return;

  // Run optimizations
  preloadFonts();
  loadArabicFonts();
  addResourceHints();
  optimizeFontLoading();
};