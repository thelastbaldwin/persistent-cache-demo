"use client";
import { ReactNode } from "react";
import { LoadingContextProvider } from "./LoadingContext";

const AppContextProvider = ({ children }: { children?: ReactNode }) => {
  return <LoadingContextProvider>{children}</LoadingContextProvider>;
};

export default AppContextProvider;
