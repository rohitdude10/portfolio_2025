/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/github-pages',
  // assetPrefix: '/portfolio_2025/',
};

module.exports = nextConfig; 