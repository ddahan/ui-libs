<template>
  <NuxtLink
    :to="library.url"
    target="_blank"
  >
    <div
      class="rounded-lg p-3 h-40 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-700 hover:bg-pink-50 dark:hover:bg-slate-600"
    >
      <div class="mx-2 mt-2">
        <img
          :src="`/img/${library.logo}`"
          class="hidden h-10 w-10 drop-shadow-lg lg:block"
        />
        <p class="mt-4 font-medium tracking-wide">{{ library.name }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  library: any;
}>();
</script>
