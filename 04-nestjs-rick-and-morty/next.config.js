/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['rickandmortyapi.com'],
  },
  compiler: {
    // I'm assuming you intended to enable styled-components support
    styledComponents: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
