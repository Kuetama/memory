const CACHE_NAME = 'memory-pwa-v1';
const urlsToCache = [
  '/memory/',
  '/memory/index.html',
  '/memory/manifest.json',
  '/memory/icon-192.png',
  '/memory/icon-512.png',
  // Добавьте сюда другие статичные ресурсы, если они есть (CSS, JS и т.д.)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});