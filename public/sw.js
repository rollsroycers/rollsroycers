// Service Worker — KILL SWITCH (v3, 2026-06)
//
// The previous SW (v2.0.0) used cacheFirst for all JS/CSS + /_next/static and also
// cached HTML navigations. On a site that redeploys, that combination caused
// INTERMITTENT client-side navigation failures: a returning tab could end up with a
// cached page referencing a build whose chunks/data had been purged, so next/link
// transitions silently failed ("sometimes the site doesn't navigate").
//
// A custom SW gives marginal offline value for a marketing/rental site while adding
// real navigation-reliability risk (Cloudflare already caches at the edge). So this
// build ships a no-op SW that UNREGISTERS itself and deletes every cache, cleaning up
// all existing installs. It has NO fetch handler, so it never intercepts requests.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      try {
        await self.clients.claim();
        const names = await caches.keys();
        await Promise.all(names.map((n) => caches.delete(n)));
        await self.registration.unregister();
        // Reload open tabs so they drop SW control and fetch fresh assets directly.
        const clients = await self.clients.matchAll({ type: 'window' });
        for (const client of clients) {
          try { client.navigate(client.url); } catch (_) { /* ignore */ }
        }
      } catch (_) {
        /* best-effort cleanup */
      }
    })()
  );
});

// No 'fetch' listener on purpose — all requests go straight to the network/edge.
