import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@workspace/ui"],
  // More stable config for production builds on Netlify
  experimental: {
    // Disable experimental features for Netlify builds
    // reactCompiler: process.env.NODE_ENV === 'development',
    // ppr: process.env.NODE_ENV === 'development',
  },
  // Ensure proper output for Netlify
  output: 'standalone',
  // Disable source maps in production to reduce build time
  productionBrowserSourceMaps: false,
  logging: {
    fetches: {},
  },
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
