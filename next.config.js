/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com'
      },

      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com/u/'
      },

    ]
  },
}


module.exports = nextConfig
