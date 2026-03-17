import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isProd ? "/persistent-cache-demo" : "",
  assetPrefix: isProd ? "/persistent-cache-demo/" : "",
  images: {
    unoptimized: true, // required for static export with next/image
  },
};

export default nextConfig;
