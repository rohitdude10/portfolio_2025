/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Required for static site generation
  images: {
    unoptimized: true,  // Required for static export
    domains: ['localhost'],
  },
  basePath: '/portfolio',  // Replace with your repository name
  assetPrefix: '/portfolio/',  // Replace with your repository name
};

module.exports = nextConfig; 