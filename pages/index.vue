<template>
  <Header />
  <UContainer class="max-w-2xl pb-6">
    <div class="text-center mt-6 sm:my-12">
      <p class="text-3xl sm:text-4xl font-semibold tracking-tight">
        Pick the right UI Library
      </p>
      <p class="text-lg sm:text-xl">
        for your
        <NuxtLink
          to="https://vuejs.org/"
          target="_blank"
          class="primary-text font-semibold"
        >
          Vue 3
        </NuxtLink>
        or
        <NuxtLink
          to="https://nuxt.com/"
          target="_blank"
          class="primary-text font-semibold"
          >Nuxt 3</NuxtLink
        >
        Project.
      </p>
    </div>

    <div class="mt-6 sm:mt-8 flex gap-4 flex-grow justify-center">
      <!-- filters -->
      <div class="w-72 -mt-2 p-3 hidden md:block shrink-0">
        <Filters />
      </div>

      <LibraryCards />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const title = ref("UI Lib Picker");

const runtimeConfig = useRuntimeConfig();
const loadPlausible = runtimeConfig.public.loadPlausible == "yes";

useHead({
  // dynamic title
  title,

  // helps for accessibility - remove if using i18n
  htmlAttrs: { lang: "en" },

  // favicon
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon/palette.svg",
    },
  ],

  // plausible
  ...(loadPlausible
    ? {
        script: [
          {
            "src": "/stats/js/script.js",
            "data-api": "/stats/api/event",
            "data-domain": "ui-libs.vercel.app",
            "defer": true,
          },
        ],
      }
    : {}),
});

// Meta tags, OG, Twitter
const description = "🎨 Pick the Right UI Library for your Vue 3 or Nuxt 3 Project";
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: "https://ui-libs.vercel.app/",
  ogImage: "https://ui-libs.vercel.app/img/social_pres.webp",
  ogImageWidth: "2626",
  ogImageHeight: "1714",
});
</script>
