import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/persistent-cache-demo",
  assetPrefix: "/persistent-cache-demo/",
  images: {
    unoptimized: true, // required for static export with next/image
  },
};

export default nextConfig;
