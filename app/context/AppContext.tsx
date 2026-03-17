"use client";
import { ReactNode } from "react";
import { LoadingContextProvider } from "./LoadingContext";
import { ThemeProvider } from "./ThemeContext";
import QueryClientProvider from "./QueryContext/QueryClientProvider";

const AppContextProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <QueryClientProvider>
      <LoadingContextProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </LoadingContextProvider>
    </QueryClientProvider>
  );
};

export default AppContextProvider;
