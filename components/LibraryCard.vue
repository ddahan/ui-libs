<template>
  <div
    v-if="display"
    class="rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-700 w-auto min-h-[180px]"
  >
    <div class="h-full flex flex-col justify-between">
      <div class="flex items-start justify-between px-4 py-2 gap-8">
        <div class="shrink-0">
          <UTooltip :text="`Go to ${library.name} website`">
            <UButton
              class="flex flex-col gap-3"
              variant="ghost"
              :padded="false"
              color="black"
              size="xl"
              :to="library.url"
              target="_blank"
            >
              <div class="w-full">
                <img
                  :src="`/img/${logo}`"
                  class="h-12 w-12 drop-shadow-lg"
                />
              </div>
              <p class="font-medium tracking-wide">{{ library.name }}</p>
            </UButton>
          </UTooltip>
          <p
            v-if="library.subName"
            class="-mt-1 text-xs"
          >
            ({{ library.subName }})
          </p>
        </div>

        <div class="flex gap-2 flex-wrap place-content-end">
          <template
            v-for="filterMatching in library.filterMatchings"
            :key="filterMatching.id"
          >
            <LibraryCardBadge :buttonFilterMatching="filterMatching" />
          </template>
        </div>
      </div>
      <!-- Card footer -->
      <div class="flex items-center justify-between mt-4">
        <div class="flex ml-1">
          <UTooltip
            v-if="repoUrl && library.nbStars"
            text="Go to github.com page"
          >
            <UButton
              icon="i-mdi-star-outline"
              :label="getDisplayableNumber(library.nbStars)"
              :to="repoUrl"
              target="_blank"
              variant="ghost"
              color="gray"
            />
          </UTooltip>
          <UTooltip
            v-if="registryUrl && library.nbDownloads"
            text="Go to npmjs.com page"
          >
            <UButton
              icon="i-material-symbols-download"
              :label="getDisplayableNumber(library.nbDownloads)"
              :to="registryUrl"
              target="_blank"
              variant="ghost"
              color="gray"
            />
          </UTooltip>
        </div>
        <div class="mr-2">
          <UTooltip text="Browse all available components">
            <UButton
              icon="i-heroicons-square-3-stack-3d"
              :label="`${availabilityScore} %`"
              variant="ghost"
              color="primary"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  initialLibrary: Library;
}>();

// required to mutate a prop
const library = ref(props.initialLibrary);

const colorMode = useColorMode();

const display = computed((): boolean => {
  /* Return true if this card should be displayed */
  const { touchedButtonFilterIDs, rangeFiltering } = useFilterStore();
  const libraryFilterIDs = library.value.filterMatchings.map((obj) => obj.id);

  // Check wether all the button logic is satisfied, and debranch if not
  if (isSubset(touchedButtonFilterIDs(), libraryFilterIDs) == false) {
    return false;
  }

  // ... Now range logic must be verified too.
  // We need to check every range filters living in the state
  if (
    rangeFiltering.value.FNbStars.qty > 0 &&
    library.value.nbStars! < rangeFiltering.value.FNbStars.qty
  ) {
    return false;
  }
  if (
    rangeFiltering.value.FNbDownloads.qty > 0 &&
    library.value.nbDownloads! < rangeFiltering.value.FNbDownloads.qty * 1000
  ) {
    return false;
  }
  // if (
  //   rangeFiltering.value.FComponentScore.value > 0 &&
  //   library.value.! < rangeFiltering.value.FNbStars.value
  // ) {
  //   return false;
  // }

  return true;
});

const logo = ((): string =>
  colorMode.value == "dark" && library.value.logoDark
    ? library.value.logoDark
    : library.value.logo)();

const availabilityScore = ((): number =>
  Math.round(
    (library.value.componentMatchings.length / useNbComponentsStore().value) * 100
  ))();

// Github related ------------------------------------------------------------------------

const repoUrl = ((): string | undefined => {
  if (library.value.repoName && library.value.repoOwner) {
    return `https://github.com/${library.value.repoOwner}/${library.value.repoName}`;
  }
})();

type GithubApiResponse = {
  stargazers_count: number; // known and useful key
  [key: string]: unknown; // unknown and useless keys
};

const { data: githubApiData } = useFetch<GithubApiResponse>(
  `https://api.github.com/repos/${library.value.repoOwner}/${library.value.repoName}`,
  {
    lazy: true,
    server: false, // This call will only be performed on the client
    onResponse({ response }) {
      library.value.nbStars = response._data.stargazers_count;
    },
  }
);

// NPM related ---------------------------------------------------------------------------

const registryUrl = ((library: Library): string | undefined =>
  library.package ? `https://www.npmjs.com/package/${library.package}` : undefined)(
  library.value
);

type NpmApiResponse = {
  downloads: number;
  [key: string]: unknown;
};

const { data: npmApiData } = useFetch<NpmApiResponse>(
  `https://api.npmjs.org/downloads/point/last-week/${library.value.package}`,
  {
    lazy: true,
    server: false,
    onResponse({ response }) {
      library.value.nbDownloads = response._data.downloads;
    },
  }
);
</script>
