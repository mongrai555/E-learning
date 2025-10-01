import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Handle static assets
  images: {
    unoptimized: true,
  },
  // Ensure proper trailing slash handling
  trailingSlash: false,
  // Enable experimental features if needed
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;