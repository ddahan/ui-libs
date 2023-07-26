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
            v-if="getRepoUrl(library) && githubApiData"
            icon="i-mdi-star-outline"
            :label="getDisplayableNumber(githubApiData.stargazers_count)"
            :to="getRepoUrl(library)"
            target="_blank"
            variant="ghost"
            color="gray"
          />
          <UButton
            v-if="getRegistryUrl(library) && npmApiData"
            icon="i-material-symbols-download"
            :label="getDisplayableNumber(npmApiData.downloads)"
            :to="getRegistryUrl(library)"
            target="_blank"
            variant="ghost"
            color="gray"
          />
        </div>
        <div class="mr-2">
          <UButton
            icon="i-heroicons-square-3-stack-3d"
            label="42 %"
            variant="ghost"
            color="primary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import getDisplayableNumber from "@/utils/getDisplayableNumber";

const props = defineProps<{
  library: Library;
}>();

const colorMode = useColorMode();

const display = computed((): boolean => {
  /* Return true if this card should be displayed */
  const { selectedFilterIDs } = useFilterStore();
  for (let filterID of selectedFilterIDs()) {
    if (props.library.filterMatchings[filterID].match === false) {
      return false;
    }
  }
  return true;
});

const getLogo = (library: Library): string =>
  colorMode.value == "dark" && library.logoDark ? library.logoDark : library.logo;

// Github related ------------------------------------------------------------------------

const getRepoUrl = (library: Library): string | undefined => {
  if (library.repoName && library.repoOwner) {
    return `https://github.com/${library.repoOwner}/${library.repoName}`;
  }
};

type GithubApiResponse = {
  stargazers_count: number; // known and useful key
  [key: string]: unknown; // unknown and useless keys
};

const { data: githubApiData } = useFetch<GithubApiResponse>(
  `https://api.github.com/repos/${props.library.repoOwner}/${props.library.repoName}`,
  {
    lazy: true,
    server: false, // This call will only be performed on the client
  }
);

// NPM related ---------------------------------------------------------------------------

const getRegistryUrl = (library: Library): string | undefined =>
  library.package ? `https://www.npmjs.com/package/${library.package}` : undefined;

type NpmApiResponse = {
  downloads: number;
  [key: string]: unknown;
};

const { data: npmApiData } = useFetch<NpmApiResponse>(
  `https://api.npmjs.org/downloads/point/last-week/${props.library.package}`,
  {
    lazy: true,
    server: false,
  }
);
</script>
