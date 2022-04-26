require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  optimizeFonts: false,
  experimental: { images: { layoutRaw: true } },
  images: {
    formats: ["image/avif", "image/webp"],
  },
});
