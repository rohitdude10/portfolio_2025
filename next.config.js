/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true,  // Required for static export
    domains: ['localhost'],
  },
  basePath: '/portfolio_2025',  // Updated repository name
  assetPrefix: '/portfolio_2025/',  // Updated repository name
};

module.exports = nextConfig; 