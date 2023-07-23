<template>
  <Header />
  <UContainer class="max-w-2xl">
    <div class="text-center">
      <UIcon
        class="mt-6 w-14 h-14 sm:w-20 sm:h-20"
        name="i-twemoji-artist-palette"
      />
      <h1 class="text-4xl font-semibold sm:text-5xl">Pick the right UI Library</h1>
      <p class="sm:text-lg">for your Vue or Nuxt Project</p>
    </div>

    <div class="mt-6 flex gap-4 flex-grow justify-center">
      <!-- filters -->
      <div class="w-64 -mt-2 p-3 hidden md:block">
        <Filters />
      </div>

      <LibraryCards />
    </div>
  </UContainer>
</template>

<script setup lang="ts"></script>
