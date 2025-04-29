/// <reference lib="webworker" />

const HOST = import.meta.env.VITE_API_URL as string;

const DB_NAME = 'UserDB';
const STORE_NAME = 'users';
const DB_VERSION = 1;

type User = {
  login: string;
  password: string;
  account_type: number | string;
  marks: string[];
};

// Открытие БД
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'login' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getAllUsers(): Promise<User[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => resolve(request.result as User[]);
    request.onerror = () => reject(request.error);
  });
}

async function saveUser(user: User): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(user);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// Установка и активация
self.addEventListener('install', (event: ExtendableEvent) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  self.clients.claim();
});

// Перехват fetch-запросов
self.addEventListener('fetch', (event: FetchEvent) => {
  const { request } = event;

  if (request.url === `${HOST}/users` && request.method === 'GET') {
    event.respondWith(
      (async () => {
        const users = await getAllUsers();
        return new Response(JSON.stringify(users), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      })()
    );
  }

  if (request.url === `${HOST}/users` && request.method === 'POST') {
    event.respondWith(
      (async () => {
        const body: User = await request.clone().json();
        await saveUser(body);
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      })()
    );
  }
});
