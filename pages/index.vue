<template>
  <Header />
  <UContainer class="pb-6">
    <div class="mt-6 text-center sm:my-12">
      <p class="text-3xl font-semibold tracking-tight sm:text-4xl">
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

    <div class="mt-6 flex flex-grow justify-center gap-4 sm:mt-8">
      <!-- filters -->
      <div class="-mt-2 hidden w-72 shrink-0 p-3 md:block">
        <Filters />
      </div>

      <LibraryCards />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const title = ref("UI Lib Picker")

const runtimeConfig = useRuntimeConfig()
const loadPlausible = runtimeConfig.public.loadPlausible == "yes"

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
})

// Meta tags, OG, Twitter
const description = "🎨 Pick the Right UI Library for your Vue 3 or Nuxt 3 Project"
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: "https://ui-libs.vercel.app/",
  ogImage: "https://ui-libs.vercel.app/img/social_small.png",
  ogImageWidth: "1142",
  ogImageHeight: "760",
})
</script>
