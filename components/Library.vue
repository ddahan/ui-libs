<template>
  <NuxtLink
    :to="library.url"
    target="_blank"
  >
    <div
      class="rounded-lg p-3 h-40 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-700 hover:border-pink-500 dark:hover:border-pink-500"
    >
      <div class="mx-2 mt-2">
        <img
          :src="`/img/${getLogo(library)}`"
          class="h-10 w-10 drop-shadow-lg"
        />
        <p class="mt-4 font-medium tracking-wide">{{ library.name }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Library } from "@/types/interfaces";

defineProps<{
  library: Library;
}>();

const colorMode = useColorMode();

const getLogo = (library: Library): string =>
  colorMode.value == "dark" && library.logoDark ? library.logoDark : library.logo;
</script>
