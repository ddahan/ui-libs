<template>
  <div
    v-if="display"
    class="rounded-lg p-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-700 w-auto min-h-[180px]"
  >
    <div class="flex items-start justify-between px-4 py-2 gap-8">
      <NuxtLink
        :to="library.url"
        target="_blank"
        class="shrink-0"
      >
        <img
          :src="`/img/${getLogo(library)}`"
          class="h-10 w-10 drop-shadow-lg"
        />
        <p class="mt-4 font-medium tracking-wide">{{ library.name }}</p>
        <p
          v-if="library.subName"
          class="-mt-1 text-xs"
        >
          ({{ library.subName }})
        </p>
      </NuxtLink>

      <div class="flex gap-2 flex-wrap place-content-end">
        <template
          v-for="(isSelected, filterID) in library.filterMatchings"
          :key="filterID"
        >
          <LibraryCardBadge
            v-if="isSelected"
            :filterID="filterID"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  library: Library;
}>();

const colorMode = useColorMode();

const getLogo = (library: Library): string =>
  colorMode.value == "dark" && library.logoDark ? library.logoDark : library.logo;

const { selectedFilterIDs } = useFilterStore();

const display = computed((): boolean => {
  for (let filterID of selectedFilterIDs()) {
    if (props.library.filterMatchings[filterID] === false) {
      return false;
    }
  }
  return true;
});
</script>
