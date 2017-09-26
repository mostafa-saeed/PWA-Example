self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('PWA').then(function(cache) {
            return cache.addAll([
              '/PWA-Example/',
              '/PWA-Example/index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }

        return fetch(event.request);
      }
    )
  );
});