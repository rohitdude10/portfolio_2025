/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio_2025',
  assetPrefix: '/portfolio_2025/',
};

module.exports = nextConfig; 