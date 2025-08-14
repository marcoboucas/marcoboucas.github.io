/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from a subdirectory, so we need to set the basePath
  // Remove this if using a custom domain
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

module.exports = nextConfig;