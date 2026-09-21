import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/CodeLearn' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CodeLearn/' : '',
  trailingSlash: true,
  allowedDevOrigins: ['192.168.1.3'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;