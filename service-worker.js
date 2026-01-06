/* PWA Service Worker (auto-update, cache versioned) */
const CACHE_VERSION = "v3-20260106";
const CORE_CACHE = `core-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

const CORE_ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/styles.css",
  "/app.js",
  "/data.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/icon-512-maskable.png",
  "/logo.png",
  "/service-worker.js",
  "/media/icons/youtube.svg",
  "/media/icons/x.svg",
  "/media/icons/telegram.svg",
  "/media/icons/instagram.svg",
  "/media/icons/facebook.svg",
  "/media/icons/whatsapp.svg",
  "/media/company/you.png",
  "/media/company/yemen.png",
  "/media/company/sabafon.png"
];

self.addEventListener("message", (event) => {
  if (event?.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((k) => k.startsWith("core-") || k.startsWith("runtime-"))
        .filter((k) => ![CORE_CACHE, RUNTIME_CACHE].includes(k))
        .map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

// Cache strategy:
// - Navigation requests: network-first, fallback to cached index/offline
// - Static assets: cache-first
// - Other: stale-while-revalidate
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== self.location.origin) return;

  // Navigation (HTML pages)
  if (req.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const network = await fetch(req);
        // Update cache with the latest HTML
        const cache = await caches.open(CORE_CACHE);
        cache.put("/index.html", network.clone());
        return network;
      } catch (_) {
        const cached = await caches.match(req) || await caches.match("/index.html");
        return cached || await caches.match("/offline.html");
      }
    })());
    return;
  }

  const isCore = CORE_ASSETS.includes(url.pathname);

  if (isCore) {
    event.respondWith((async () => {
      const cached = await caches.match(req);
      if (cached) return cached;
      const network = await fetch(req);
      const cache = await caches.open(CORE_CACHE);
      cache.put(req, network.clone());
      return network;
    })());
    return;
  }

  // Stale-while-revalidate for other same-origin requests
  event.respondWith((async () => {
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(req);
    const fetchPromise = fetch(req).then((res) => {
      cache.put(req, res.clone());
      return res;
    }).catch(() => cached);
    return cached || fetchPromise;
  })());
});
