// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    public: {
      loadPlausible: "", // overrided by env,
    },
  },
  ui: {
    global: true,
    icons: "all",
  },
  typescript: {
    shim: false,
    tsConfig: {
      compilerOptions: {
        // https://nuxt.com/blog/v3-5#bundler-module-resolution
        moduleResolution: "bundler",
        paths: {
          "@": ["."],
          "@/*": ["./*"],
        },
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
  },
  devtools: { enabled: true },
});
