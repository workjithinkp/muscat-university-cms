import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'muc.adventzeventz.com',
      },
    ],
  },
}

export default nextConfig
