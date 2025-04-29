import type { User } from "@/stores/types";
import { v4 as uuidv4 } from "uuid"; 

const DB_NAME = 'UserDB';
const STORE_NAME = 'users';
const DB_VERSION = 1;

export default class UserService {

private openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('UsersDB', 1);
        
        request.onupgradeneeded = (event: Event) => {
            const db = request.result;
            if (!db.objectStoreNames.contains('users')) {
                const objectStore = db.createObjectStore('users', { keyPath: 'id' });
                objectStore.createIndex('login', 'login', { unique: true });
            }
        };
        
        request.onerror = (event: Event) => reject((event.target as IDBRequest).error);
        
        request.onsuccess = (event: Event) => resolve((event.target as IDBRequest).result);
    });
};

    public addUser = async (user: User): Promise<void> => {
        const clearUser: User = {
            id: user.id,
            account_type: user.account_type,
            login: user.login,
            password: user.password,
            marks: [...user.marks]
    }
    const db = await this.openDB();
    const transaction = db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');
    const request = store.add(clearUser);

    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (event: Event) => reject((event.target as IDBRequest).error);
    });
};

public deleteUser = async (userId: string): Promise<void> => {
    const db = await this.openDB();
    const transaction = db.transaction('users', 'readwrite');
    const store = transaction.objectStore('users');
    const request = store.delete(userId);

    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (event: Event) => reject((event.target as IDBRequest).error);
    });
};

    public updateUser = async (user: User): Promise<void> => {
    const clearUser : User = {
            id: user.id,
            account_type: user.account_type,
            login: user.login,
            password: user.password,
            marks: [...user.marks]
    }
    const db = await this.openDB();
    const transaction = db.transaction('users', 'readwrite');
        const store = transaction.objectStore('users');
    const request = store.put(clearUser);

    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve();
        request.onerror = (event: Event) => reject((event.target as IDBRequest).error);
    });
};

public getUserById = async (userId: string): Promise<User | undefined> => {
    const db = await this.openDB();
    const transaction = db.transaction('users', 'readonly');
    const store = transaction.objectStore('users');
    const request = store.get(userId);

    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = (event: Event) => reject((event.target as IDBRequest).error);
    });
};

public getAllUsers = async (): Promise<User[]> => {
    const db = await this.openDB();
    const transaction = db.transaction('users', 'readonly');
    const store = transaction.objectStore('users');
    const request = store.getAll();

    return new Promise((resolve, reject) => {
        request.onsuccess = () => resolve(request.result);
        request.onerror = (event: Event) => reject((event.target as IDBRequest).error);
    });
};

}
