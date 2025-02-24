/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
}

// Only add these settings when building for production/GitHub Pages
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export'
  nextConfig.images.unoptimized = true
  nextConfig.basePath = '/portfolio-2025'
  nextConfig.assetPrefix = '/portfolio-2025/'
}

module.exports = nextConfig 