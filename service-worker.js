/* Planta Suite — Service Worker
 *
 * Estrategia:
 *   - Navegaciones (HTML): network-first con fallback a caché.
 *   - JSON: network-first con fallback a caché.
 *   - Resto (CSS, JS, íconos): cache-first con relleno desde la red.
 *
 * Para forzar una actualización tras cambios, sube el número
 * "v" en CACHE_NAME y vuelve a publicar.
 */

const CACHE_NAME = 'planta-suite-v3';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/styles.css',
  './assets/app.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './data/silos-formulas.json',
  './data/silos-tables.json',
  './data/tanks.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  // Activar inmediatamente la versión nueva sin esperar cierre de pestañas.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

// Permite a la página pedir al SW que se active de inmediato.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function networkFirst(request, fallbackKey) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const clone = response.clone();
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(fallbackKey || request, clone);
      });
    }
    return response;
  } catch (_err) {
    const cached = await caches.match(fallbackKey || request);
    if (cached) return cached;
    return new Response(
      JSON.stringify({ error: 'offline', message: 'Sin conexión y sin copia en caché.' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const clone = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
    }
    return response;
  } catch (_err) {
    return Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Solo manejamos peticiones del mismo origen.
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request, './index.html'));
    return;
  }

  if (url.pathname.endsWith('.json')) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request));
});
