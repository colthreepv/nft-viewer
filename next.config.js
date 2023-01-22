/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.avascan.info/private/v2/network/:path*',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgproxy-mainnet.avascan.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
