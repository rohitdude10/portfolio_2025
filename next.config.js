/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true,  // Required for static export
  },
};

// Add basePath and assetPrefix only in production
if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/portfolio_2025';
  nextConfig.assetPrefix = '/portfolio_2025/';
}

module.exports = nextConfig; 