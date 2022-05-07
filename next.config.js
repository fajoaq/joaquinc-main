require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["dummyimage.com"],
  },
});
