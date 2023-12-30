/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost:5000",
        port: "",
        pathname: "/api/**",
      },
      {
        protocol: "http",
        hostname: "localhost:5000",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
