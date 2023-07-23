module.exports = {
  content: [
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./components/**/*.{js,vue,ts}",
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
};
