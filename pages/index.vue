<template>
  <Header />
  <UContainer class="max-w-2xl">
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
          Vue
        </NuxtLink>
        or
        <NuxtLink
          to="https://nuxt.com/"
          target="_blank"
          class="primary-text font-semibold"
          >Nuxt</NuxtLink
        >
        Project.
      </p>
    </div>

    <div class="mt-6 sm:mt-8 flex gap-4 flex-grow justify-center">
      <!-- filters -->
      <div class="w-64 -mt-2 p-3 hidden md:block">
        <Filters />
      </div>

      <LibraryCards />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const title = ref("UI Lib Picker");

useHead({
  title,
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  ],
});
</script>
