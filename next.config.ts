import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/sounds/",
            outputPath: "static/sounds/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
  // productionBrowserSourceMaps: true,
};

export default nextConfig;
