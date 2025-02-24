/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
  },
  // Add these for better CSS handling
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
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