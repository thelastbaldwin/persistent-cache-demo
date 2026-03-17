import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { get, set, del, createStore } from "idb-keyval";

// Optional: create a custom idb-keyval store for this specific use case
const customStore = createStore("tanstack-query-db", "query-store");

// Create the persister using idb-keyval methods
const asyncStoragePersister = createAsyncStoragePersister({
  storage: {
    getItem: async (key) => await get(key, customStore),
    setItem: async (key, value) => await set(key, value, customStore),
    removeItem: async (key) => await del(key, customStore),
  },
  // Optional: customize throttle time, defaults to 1000ms
  throttleTime: 1000,
});

export default asyncStoragePersister;
