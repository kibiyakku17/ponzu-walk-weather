const CACHE = "ponzu-todo-v1";
const ASSETS = ["./index.html","./icon-180.png","./icon-512.png","./favicon-32.png","./manifest.webmanifest"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
