import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',


      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
         ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }

    }
    return config
  }
};

export default nextConfig;
