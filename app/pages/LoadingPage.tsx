"use client";
import { useContext, useEffect } from "react";
import { LoadingContext } from "../context";

const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, [setLoading]);

  return null;
};

export default LoadingPage;
