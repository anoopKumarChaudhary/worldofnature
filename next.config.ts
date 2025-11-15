import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pureandsure.in",
        port: "",
        pathname: "/cdn/shop/files/**", // This specifically allows images from the path in your error
      },
    ],
  },
};

export default nextConfig;
