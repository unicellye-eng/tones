// updated 1770606304
// updated 1770606093
// updated 1770605034
// updated 1770604234
// updated 1770603835
// updated 1770603443
// updated 1770603276
// updated 1770602972
// updated 1770602849
// updated 1770602724
// updated 1770602629
// updated 1770602415
// updated 1770602206
// updated 1770602035
// updated 1770601921
// updated 1770601720
// Service Worker: Hybrid caching (fast media + always-fresh app shell)
//
// - App shell (index/app/data/css): Network-first with cache fallback (avoids stale issues).
// - Media (images/audio): Cache-first (instant repeat opens/plays) + background refresh.
// - Range requests (common for audio streaming): pass-through to network.

const VERSION = "v3"; // غيّر الرقم عند كل رفع جديد
const STATIC_CACHE = `static-${VERSION}`;
const MEDIA_CACHE  = `media-${VERSION}`;

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-192-maskable.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(PRECACHE_URLS)).catch(() => {})
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => {
      if (k !== STATIC_CACHE && k !== MEDIA_CACHE) return caches.delete(k);
    }));
    await self.clients.claim();
  })());
});

function isAppShell(pathname) {
  return (
    pathname.endsWith("/") ||
    pathname.endsWith("/index.html") ||
    pathname.endsWith("/app.js") ||
    pathname.endsWith("/data.js") ||
    pathname.endsWith("/styles.css") ||
    pathname.endsWith("/manifest.json")
  );
}

async function networkFirst(req) {
  try {
    const fresh = await fetch(req, { cache: "no-store" });
    const cache = await caches.open(STATIC_CACHE);
    cache.put(req, fresh.clone()).catch(() => {});
    return fresh;
  } catch (e) {
    const cached = await caches.match(req);
    if (cached) return cached;
    throw e;
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(MEDIA_CACHE);
  const cached = await cache.match(req);
  if (cached) {
    // Background refresh (stale-while-revalidate)
    fetch(req).then((fresh) => {
      if (fresh && fresh.ok) cache.put(req, fresh.clone()).catch(() => {});
    }).catch(() => {});
    return cached;
  }
  const fresh = await fetch(req);
  if (fresh && fresh.ok) cache.put(req, fresh.clone()).catch(() => {});
  return fresh;
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Do not attempt to cache range requests (audio streaming)
  if (req.headers.get("range")) {
    event.respondWith(fetch(req));
    return;
  }

  // Media: images + audio (and video if any)
  const dest = req.destination;
  if (dest === "image" || dest === "audio" || dest === "video") {
    event.respondWith(cacheFirst(req));
    return;
  }

  // App shell: always prefer latest, but keep fallback cached
  if (isAppShell(url.pathname)) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Default: try cache first then network
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
