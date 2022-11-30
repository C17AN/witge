/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `http://211.254.212.182:9090/api/v1/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
