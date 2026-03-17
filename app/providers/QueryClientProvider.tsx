"use client";
// PersistQueryClientProvider is client side only
import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import asyncStoragePersister from "./asyncStoragePersister";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime is now gcTime in v5+
      gcTime: 1000 * 60 * 60 * 24, // Optional: configure garbage collection time
    },
  },
});

export default function QueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: asyncStoragePersister,
        // Optional: add a buster to invalidate cache when your app version changes
        buster: "1.0.0",
      }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
