/**
 * Font Optimization Utilities
 * Handles font loading strategies to improve performance
 */

// Font face observer for critical fonts
class FontFaceObserver {
  constructor(family, weight = 'normal') {
    this.family = family;
    this.weight = weight;
  }

  load(timeout = 3000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();
      
      const check = () => {
        const now = Date.now();
        
        if (now - start >= timeout) {
          reject(new Error(`Font loading timeout: ${this.family}`));
          return;
        }
        
        if (document.fonts && document.fonts.check) {
          if (document.fonts.check(`${this.weight} 1em ${this.family}`)) {
            resolve();
          } else {
            setTimeout(check, 50);
          }
        } else {
          // Fallback for browsers without Font Loading API
          const testString = 'giItT1WQy@!-/#';
          const sans = 'sans-serif';
          const serif = 'serif';
          
          const sansWidth = this.getTextWidth(testString, `${this.weight} 100px ${sans}`);
          const serifWidth = this.getTextWidth(testString, `${this.weight} 100px ${serif}`);
          const fontWidth = this.getTextWidth(testString, `${this.weight} 100px ${this.family}, ${sans}`);
          
          if (fontWidth !== sansWidth || fontWidth !== serifWidth) {
            resolve();
          } else {
            setTimeout(check, 50);
          }
        }
      };
      
      check();
    });
  }
  
  getTextWidth(text, font) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
  }
}

// Critical font loading with FOUT prevention
export function loadCriticalFonts() {
  if (typeof window === 'undefined') return Promise.resolve();

  const criticalFonts = [
    { family: 'Inter', weight: '400' },
    { family: 'Inter', weight: '500' },
    { family: 'Inter', weight: '600' },
    { family: 'Inter', weight: '700' },
  ];

  const fontPromises = criticalFonts.map(font => {
    const observer = new FontFaceObserver(font.family, font.weight);
    return observer.load().catch(err => {
      console.warn(`Failed to load font: ${font.family} ${font.weight}`, err);
    });
  });

  return Promise.all(fontPromises).then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}

// Optimize font loading with font-display
export function optimizeFontDisplay() {
  if (typeof window === 'undefined') return;

  // Add CSS for font-display swap
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/inter-v12-latin-regular.woff2') format('woff2'),
           url('/fonts/inter-v12-latin-regular.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('/fonts/inter-v12-latin-500.woff2') format('woff2'),
           url('/fonts/inter-v12-latin-500.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('/fonts/inter-v12-latin-600.woff2') format('woff2'),
           url('/fonts/inter-v12-latin-600.woff') format('woff');
    }
    
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/fonts/inter-v12-latin-700.woff2') format('woff2'),
           url('/fonts/inter-v12-latin-700.woff') format('woff');
    }
    
    /* Fallback font stack */
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                   'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
    }
    
    /* Optimize font rendering */
    body {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
    
    /* Prevent FOUT */
    .fonts-loading {
      opacity: 0;
    }
    
    .fonts-loaded {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  `;
  
  document.head.appendChild(style);
}

// Preload font files
export function preloadFontFiles() {
  if (typeof window === 'undefined') return;

  const fontFiles = [
    '/fonts/inter-v12-latin-regular.woff2',
    '/fonts/inter-v12-latin-500.woff2',
    '/fonts/inter-v12-latin-600.woff2',
    '/fonts/inter-v12-latin-700.woff2',
  ];

  fontFiles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

// Variable font optimization
export function setupVariableFont() {
  if (typeof window === 'undefined') return;

  // Check if browser supports variable fonts
  const supportsVariableFonts = CSS.supports('font-variation-settings', '"wght" 400');
  
  if (supportsVariableFonts) {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter Variable';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('/fonts/Inter-Variable.woff2') format('woff2-variations'),
             url('/fonts/Inter-Variable.woff2') format('woff2');
      }
      
      body {
        font-family: 'Inter Variable', 'Inter', -apple-system, BlinkMacSystemFont, 
                     'Segoe UI', Roboto, sans-serif;
      }
      
      /* Weight utilities for variable font */
      .font-thin { font-variation-settings: "wght" 100; }
      .font-extralight { font-variation-settings: "wght" 200; }
      .font-light { font-variation-settings: "wght" 300; }
      .font-normal { font-variation-settings: "wght" 400; }
      .font-medium { font-variation-settings: "wght" 500; }
      .font-semibold { font-variation-settings: "wght" 600; }
      .font-bold { font-variation-settings: "wght" 700; }
      .font-extrabold { font-variation-settings: "wght" 800; }
      .font-black { font-variation-settings: "wght" 900; }
    `;
    
    document.head.appendChild(style);
    document.documentElement.classList.add('variable-fonts-supported');
  }
}

// Local font caching with localStorage
export function setupFontCaching() {
  if (typeof window === 'undefined' || !window.localStorage) return;

  const FONT_CACHE_KEY = 'cached-fonts';
  const FONT_CACHE_VERSION = 'v1';
  
  try {
    const cachedFonts = localStorage.getItem(FONT_CACHE_KEY);
    
    if (cachedFonts) {
      const { version, css } = JSON.parse(cachedFonts);
      
      if (version === FONT_CACHE_VERSION) {
        // Apply cached font CSS immediately
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
        document.documentElement.classList.add('fonts-cached');
        return;
      }
    }
    
    // Fetch and cache font CSS
    fetch('/api/font-css')
      .then(response => response.text())
      .then(css => {
        localStorage.setItem(FONT_CACHE_KEY, JSON.stringify({
          version: FONT_CACHE_VERSION,
          css: css,
          timestamp: Date.now()
        }));
      })
      .catch(error => {
        console.error('Failed to cache fonts:', error);
      });
  } catch (error) {
    console.error('Font caching error:', error);
  }
}

// Font subsetting for different languages
export function loadLanguageSpecificFonts(locale) {
  if (typeof window === 'undefined') return;

  const languageFonts = {
    'ar': {
      family: 'Noto Sans Arabic',
      url: '/fonts/NotoSansArabic-Variable.woff2',
      unicodeRange: 'U+0600-06FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FEFF'
    },
    'zh': {
      family: 'Noto Sans SC',
      url: '/fonts/NotoSansSC-Variable.woff2',
      unicodeRange: 'U+4E00-9FFF, U+3400-4DBF, U+20000-2A6DF, U+2A700-2B73F'
    },
    'ru': {
      family: 'Inter',
      url: '/fonts/inter-v12-cyrillic-variable.woff2',
      unicodeRange: 'U+0400-04FF, U+2DE0-2DFF, U+A640-A69F, U+1C80-1C8F'
    },
    'hi': {
      family: 'Noto Sans Devanagari',
      url: '/fonts/NotoSansDevanagari-Variable.woff2',
      unicodeRange: 'U+0900-097F, U+1CD0-1CFF, U+200C-200D, U+20B9'
    }
  };

  const fontConfig = languageFonts[locale];
  
  if (fontConfig) {
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: '${fontConfig.family}';
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('${fontConfig.url}') format('woff2');
        unicode-range: ${fontConfig.unicodeRange};
      }
      
      [lang="${locale}"] {
        font-family: '${fontConfig.family}', 'Inter', sans-serif;
      }
    `;
    
    document.head.appendChild(style);
    
    // Preload the font
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.href = fontConfig.url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
}

// Main initialization
export function initFontOptimization() {
  if (typeof window === 'undefined') return;

  // Start font optimization immediately
  document.documentElement.classList.add('fonts-loading');
  
  // Preload font files
  preloadFontFiles();
  
  // Setup font display optimization
  optimizeFontDisplay();
  
  // Setup variable fonts if supported
  setupVariableFont();
  
  // Setup font caching
  setupFontCaching();
  
  // Load critical fonts
  loadCriticalFonts().then(() => {
    console.log('Critical fonts loaded');
  });
  
  // Load language-specific fonts based on current locale
  const locale = document.documentElement.lang || 'en';
  if (locale !== 'en') {
    loadLanguageSpecificFonts(locale);
  }
}

// Export for use in other modules
export default {
  initFontOptimization,
  loadCriticalFonts,
  loadLanguageSpecificFonts,
  setupVariableFont,
};