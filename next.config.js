/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
      },
    ],
  },
}

module.exports = nextConfig


