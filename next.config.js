require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net", "dummyimage.com"],
  },
});
