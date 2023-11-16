/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        pathname: "/data/**",
      },
    ],
  },
};

module.exports = nextConfig;
