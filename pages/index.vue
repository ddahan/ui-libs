<template>
  <Header />
  <UContainer class="max-w-2xl">
    <div class="text-center">
      <UIcon
        class="mt-6 w-14 h-14 sm:w-20 sm:h-20 text-pink-500"
        name="i-ic-outline-palette"
      />
      <h1 class="text-4xl font-semibold sm:text-5xl">Pick the right UI Library</h1>
      <p class="mt-0.5 sm:mt-1 sm:text-lg">for your Vue or Nuxt Project</p>
    </div>

    <div class="mt-8 flex gap-4 flex-grow justify-center">
      <!-- filters -->
      <div class="w-64 -mt-2 p-3 hidden md:block">
        <Filters />
      </div>

      <LibraryCards />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const title = ref("UI Picker");

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
