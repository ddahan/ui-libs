module.exports = {
  content: [
    // existing paths: https://github.com/nuxt-modules/tailwindcss/blob/main/src/resolvers.ts#L25
    "./data/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      roobert: "Roobert, sans-serif",
    },
  },
  future: {
    // https://github.com/tailwindlabs/tailwindcss/discussions/1739
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
