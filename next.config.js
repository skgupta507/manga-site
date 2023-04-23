/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [`${process.env.UPLOADS}`],
  },
}

module.exports = nextConfig
