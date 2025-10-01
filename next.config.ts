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
  // Optimize static assets
  staticPageGenerationTimeout: 600,
  // Handle large file uploads for Vercel
  webpack: (config) => {
    // Increase size limit for videos
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    
    // Handle video files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|flv)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos',
            outputPath: 'static/videos',
            name: '[name].[hash:7].[ext]',
          },
        },
      ],
    });
    
    return config;
  },
};

export default nextConfig;