// sw.js — минимальный, стабильный Service Worker
const CACHE_NAME = 'memory-pwa-v1';

self.addEventListener('install', (event) => {
  console.log('SW installed');
  self.skipWaiting(); // активирует SW сразу
});

self.addEventListener('activate', (event) => {
  console.log('SW activated');
  event.waitUntil(self.clients.claim()); // захватывает все вкладки
});

// Необязательно: перехватывать fetch
// self.addEventListener('fetch', (event) => {
//   event.respondWith(fetch(event.request));
// });
