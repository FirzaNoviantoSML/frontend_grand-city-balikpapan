import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    domains: ["www.klaskaresidence.com",
              "127.0.0.1",
              "localhost:1337",
              "localhost"
            ],
  },
};

export default nextConfig;
