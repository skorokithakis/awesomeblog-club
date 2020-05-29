const withMDXEnhanced = require("next-mdx-enhanced");

module.exports = withMDXEnhanced({
  layoutPath: "layouts",
})({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    modern: true,
    reactMode: "concurrent",
    reactStrictMode: true,
  },
  env: {
    CODE_REPO: "https://github.com/searchableguy/awesomeblog.club",
    EMAIL: "me@searchableguy.com",
    TWITTER: "https://twitter.com/searchableguy",
    DISCORD: "https://discord.gg/pYkNGMK",
    DOMAIN: "awesomeblog.club",
    DESCRIPTION: "Discover awesome small and personal blogs.",
  },
});
