import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },
}

export default nextConfig
