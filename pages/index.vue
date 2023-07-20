<template>
  <Header />
  <UContainer class="max-w-2xl">
    <div class="text-center">
      <UIcon
        class="mt-6 w-16 h-16 sm:w-28 sm:h-28"
        name="i-twemoji-artist-palette"
      />
      <h1 class="text-2xl sm:text-4xl">Pick the right UI Library</h1>
      <p class="sm:text-lg">for your Vue or Nuxt Project</p>
    </div>

    <div class="mt-6 flex gap-4 flex-grow justify-center">
      <!-- filters -->
      <div class="w-64 -mt-2 p-3 hidden md:block">
        <Filters />
      </div>

      <!-- libraries -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 flex-grow">
        <LibraryCard
          v-for="library in libraries"
          :library="library"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import libraries from "@/utils/libraries";
</script>
