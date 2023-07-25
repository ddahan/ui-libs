<template>
  <div
    v-if="display"
    class="rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-700 w-auto min-h-[180px]"
  >
    <div class="h-full flex flex-col justify-between">
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
            v-for="(filterMatching, filterID) in library.filterMatchings"
            :key="filterID"
          >
            <LibraryCardBadge
              v-if="filterMatching.match"
              :filterID="filterID"
              :filterMatching="filterMatching"
            />
          </template>
        </div>
      </div>
      <!-- Card footer -->
      <div class="flex items-center justify-between mt-4">
        <div class="flex ml-1">
          <UButton
            v-if="library.repoUrl && library.nbStars"
            icon="i-mdi-star-outline"
            :label="getDisplayableNumber(library.nbStars)"
            :to="library.repoUrl"
            target="_blank"
            variant="ghost"
            color="gray"
          />
          <UButton
            v-if="library.registryUrl && library.nbDownloads"
            icon="i-material-symbols-download"
            :label="getDisplayableNumber(library.nbDownloads)"
            :to="library.registryUrl"
            target="_blank"
            variant="ghost"
            color="gray"
          />
        </div>
        <div class="mr-2">
          <UButton
            icon="i-ph-users"
            label="30"
            variant="ghost"
            color="gray"
          />
        </div>
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

const getDisplayableNumber = (number: number): string =>
  // round to the first decimal if the number is higher than 1000
  number >= 1000 ? `${Math.round((number / 1000) * 10) / 10}k` : `${number}`;

const { selectedFilterIDs } = useFilterStore();

const display = computed((): boolean => {
  for (let filterID of selectedFilterIDs()) {
    if (props.library.filterMatchings[filterID].match === false) {
      return false;
    }
  }
  return true;
});
</script>
