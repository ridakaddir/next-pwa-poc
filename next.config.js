/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
    register: true,
    skipWaiting: true,
  // reactStrictMode: true,
  // swcMinify: true,
});


// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});

