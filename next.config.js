const withSass = require('@zeit/next-sass');
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = withSass();
module.exports = nextConfig


