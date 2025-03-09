/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rohitdude10.github.io',
      },
    ],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
};

module.exports = nextConfig; 