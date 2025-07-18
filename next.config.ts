import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  images: {
    domains: ["github.com", "images.unsplash.com", "lh3.googleusercontent.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
