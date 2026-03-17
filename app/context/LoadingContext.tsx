"use client";
import {
  createContext,
  ReactNode,
  type Dispatch,
  SetStateAction,
  useState,
} from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => null,
});

export const LoadingContextProvider = ({
  loading: initialLoading = false,
  children,
}: {
  loading?: boolean;
  children: ReactNode;
}) => {
  const [loading, setLoading] = useState(initialLoading);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
