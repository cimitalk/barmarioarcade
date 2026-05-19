const CACHE_NAME = 'bar-mario-v1';
// Elenco dei file da salvare nella memoria del telefono
const ASSETS = [
  'index.html',
  'manifest.json',
  'sfondo.png',
  'logo.png',
  'piattaforma.png',
  'birra.png',
  'acqua.png',
  'malto.png',
  'luppolo.png',
  'lievito.png',
  'barista.png',
  'cliente1.png',
  'cliente2.png',
  'cliente3.png',
  'cliente4.png',
  'musica.m4a',
  'crash.m4a',
  'lancio.m4a',
  'colpito.m4a'
];

// Installa il Service Worker e salva i file in cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Gestisce le richieste: se il file è in cache, lo usa anche senza internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});