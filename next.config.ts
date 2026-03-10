import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages / GitHub Pages hosting
  output: 'export',
  // Required for static export with next/image
  images: {
    unoptimized: true,
  },
  // Trailing slash for cleaner Cloudflare Pages routing
  trailingSlash: true,
};

export default nextConfig;
