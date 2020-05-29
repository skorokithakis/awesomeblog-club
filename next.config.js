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
});

module.exports = withOffline(nextConfig);
