import { users } from "../src/mock/usersData"

const HOST = 'http://localhost:5170';

self.addEventListener('install', (event) => {
  console.log('Service Worker установлен')
  self.skipWaiting()
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker активирован')
});


self.addEventListener('fetch', event => {
  const { request } = event
  if (request.url.includes(`${HOST}/users`)) {
    event.respondWith(
      new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );
  }
});
