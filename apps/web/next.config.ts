import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@workspace/ui"],
  // More stable config for production builds on Netlify
  experimental: {
    // Explicitly disable all experimental features for Netlify builds
    reactCompiler: false,
    ppr: false,
  },
  // Ensure proper output for Netlify
  output: 'export',
  distDir: 'out',
  // Disable source maps in production to reduce build time
  productionBrowserSourceMaps: false,
  logging: {
    fetches: {},
  },
  images: {
    unoptimized: true,
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
