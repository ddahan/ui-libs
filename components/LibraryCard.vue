<template>
  <NuxtLink
    v-if="display"
    class="rounded-lg p-3 h-40 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-700 hover:border-pink-500 dark:hover:border-pink-500"
    :to="library.url"
    target="_blank"
  >
    <div class="mx-2 mt-2">
      <img
        :src="`/img/${getLogo(library)}`"
        class="h-10 w-10 drop-shadow-lg"
      />
      <p class="mt-4 font-medium tracking-wide">{{ library.name }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  library: Library;
}>();

const colorMode = useColorMode();

const getLogo = (library: Library): string =>
  colorMode.value == "dark" && library.logoDark ? library.logoDark : library.logo;

const { selectedFilters } = useFilterStore();

const display = computed((): boolean => {
  for (let filter of selectedFilters()) {
    // TODO: handle typing issue
    if (props.library.filters[filter[0]] == false) {
      return false;
    }
  }
  return true;
});
</script>
