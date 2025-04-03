/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio_2025',
  assetPrefix: '/portfolio_2025/',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST || 'https://your-default-api.com',
  },
};

module.exports = nextConfig;
