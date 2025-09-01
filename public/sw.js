// Service Worker for Rolls Royce Dubai
// Version: 2.0.0
// Performance-optimized with advanced caching strategies

const CACHE_VERSION = 'v2.0.0';
const CACHE_NAMES = {
  static: `static-cache-${CACHE_VERSION}`,
  dynamic: `dynamic-cache-${CACHE_VERSION}`,
  images: `images-cache-${CACHE_VERSION}`,
  fonts: `fonts-cache-${CACHE_VERSION}`,
  api: `api-cache-${CACHE_VERSION}`
};

// Assets to cache immediately on install
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/offline.html'
];

// Patterns for different caching strategies
const CACHE_STRATEGIES = {
  networkFirst: [
    /^\/api\//,
    /^\/fleet/,
    /^\/booking/,
    /^\/contact/
  ],
  cacheFirst: [
    /\.(css|js)$/,
    /^\/fonts\//,
    /^\/static\//,
    /_next\/static\//
  ],
  staleWhileRevalidate: [
    /^\/images\//,
    /\.(png|jpg|jpeg|svg|gif|webp|avif)$/,
    /^\/$/,
    /^\/[^\/]+$/  // Top-level pages
  ]
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAMES.static).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((error) => {
        console.error('Failed to cache static assets:', error);
      });
    }).then(() => {
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!Object.values(CACHE_NAMES).includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Chrome extensions and non-HTTP(S) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Determine caching strategy
  const strategy = getCachingStrategy(url.pathname);
  
  switch (strategy) {
    case 'network-first':
      event.respondWith(networkFirst(request));
      break;
    case 'cache-first':
      event.respondWith(cacheFirst(request));
      break;
    case 'stale-while-revalidate':
      event.respondWith(staleWhileRevalidate(request));
      break;
    default:
      event.respondWith(networkFirst(request));
  }
});

// Caching strategy selector
function getCachingStrategy(pathname) {
  for (const [strategy, patterns] of Object.entries(CACHE_STRATEGIES)) {
    for (const pattern of patterns) {
      if (pattern.test(pathname)) {
        return strategy.replace(/([A-Z])/g, '-$1').toLowerCase();
      }
    }
  }
  return 'network-first';
}

// Network First strategy - for dynamic content
async function networkFirst(request) {
  const cacheName = getCacheName(request);
  
  try {
    const networkResponse = await fetch(request, { 
      cache: 'no-cache',
      credentials: 'same-origin'
    });
    
    if (networkResponse.ok) {
      // Clone the response before caching
      const responseToCache = networkResponse.clone();
      
      // Cache the response asynchronously
      caches.open(cacheName).then((cache) => {
        cache.put(request, responseToCache);
      }).catch((error) => {
        console.error('Cache put error:', error);
      });
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Network request failed:', error);
    
    // Try to get from cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline.html');
      if (offlineResponse) {
        return offlineResponse;
      }
    }
    
    // Return a basic error response
    return new Response('Network error', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Cache First strategy - for static assets
async function cacheFirst(request) {
  const cacheName = getCacheName(request);
  
  // Check cache first
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    // Update cache in background
    fetchAndCache(request, cacheName);
    return cachedResponse;
  }
  
  // Not in cache, fetch from network
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const responseToCache = networkResponse.clone();
      
      // Cache the response
      const cache = await caches.open(cacheName);
      await cache.put(request, responseToCache);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Fetch failed:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline.html');
      if (offlineResponse) {
        return offlineResponse;
      }
    }
    
    return new Response('Network error', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Stale While Revalidate strategy - serve from cache, update in background
async function staleWhileRevalidate(request) {
  const cacheName = getCacheName(request);
  
  // Check cache first
  const cachedResponse = await caches.match(request);
  
  // Fetch from network in background
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      const responseToCache = networkResponse.clone();
      
      // Update cache asynchronously
      caches.open(cacheName).then((cache) => {
        cache.put(request, responseToCache);
      }).catch((error) => {
        console.error('Cache update error:', error);
      });
    }
    
    return networkResponse;
  }).catch((error) => {
    console.error('Background fetch failed:', error);
    return cachedResponse || new Response('Network error', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  });
  
  // Return cached version immediately if available
  return cachedResponse || fetchPromise;
}

// Helper function to fetch and cache in background
async function fetchAndCache(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      await cache.put(request, networkResponse.clone());
    }
  } catch (error) {
    console.error('Background fetch failed:', error);
  }
}

// Determine appropriate cache name based on request
function getCacheName(request) {
  const url = new URL(request.url);
  
  if (url.pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i)) {
    return CACHE_NAMES.images;
  }
  
  if (url.pathname.includes('/fonts/') || url.pathname.match(/\.(woff|woff2|ttf|otf)$/i)) {
    return CACHE_NAMES.fonts;
  }
  
  if (url.pathname.startsWith('/api/')) {
    return CACHE_NAMES.api;
  }
  
  if (url.pathname.match(/\.(js|css)$/i) || url.pathname.includes('/_next/static/')) {
    return CACHE_NAMES.static;
  }
  
  return CACHE_NAMES.dynamic;
}

// Message event - for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type) {
    switch (event.data.type) {
      case 'SKIP_WAITING':
        self.skipWaiting();
        break;
      case 'CLEAR_CACHE':
        clearAllCaches();
        break;
      case 'CACHE_URLS':
        if (event.data.urls && Array.isArray(event.data.urls)) {
          cacheUrls(event.data.urls);
        }
        break;
    }
  }
});

// Clear all caches
async function clearAllCaches() {
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map(name => caches.delete(name)));
  console.log('All caches cleared');
}

// Cache specific URLs
async function cacheUrls(urls) {
  const cache = await caches.open(CACHE_NAMES.dynamic);
  
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        await cache.put(url, response);
      }
    } catch (error) {
      console.error(`Failed to cache ${url}:`, error);
    }
  }
}

// Periodic cache cleanup (every 24 hours)
setInterval(() => {
  cleanupCaches();
}, 24 * 60 * 60 * 1000);

// Cleanup old cache entries
async function cleanupCaches() {
  const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
  const now = Date.now();
  
  for (const cacheName of Object.values(CACHE_NAMES)) {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();
    
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const responseDate = new Date(dateHeader).getTime();
          if (now - responseDate > maxAge) {
            await cache.delete(request);
            console.log(`Deleted old cache entry: ${request.url}`);
          }
        }
      }
    }
  }
}

console.log('Service Worker loaded - Version:', CACHE_VERSION);