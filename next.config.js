const withMDXEnhanced = require("next-mdx-enhanced");
const withOffline = require("next-offline");

const nextConfig = withMDXEnhanced({
  layoutPath: "layouts",
})({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    modern: true,
    reactMode: "concurrent",
    reactStrictMode: true,
  },
  env: {
    CODE_REPO: "https://github.com/searchableguy/awesomeblog-club",
    EMAIL: "me@searchableguy.com",
    TWITTER: "https://twitter.com/searchableguy",
    DISCORD: "https://discord.gg/pYkNGMK",
    DOMAIN: "awesomeblog.club",
    TITLE: "Awesomeblog.club",
    DESCRIPTION: "Discover awesome small and personal blogs.",
  },
  target: "serverless",
  transformManifest: (manifest) => ["/"].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});

module.exports = withOffline(nextConfig);
