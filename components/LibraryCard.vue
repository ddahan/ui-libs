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
            :src="`/img/${logo}`"
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
            v-for="filterMatching in library.filterMatchings"
            :key="filterMatching.id"
          >
            <LibraryCardBadge :filterMatching="filterMatching" />
          </template>
        </div>
      </div>
      <!-- Card footer -->
      <div class="flex items-center justify-between mt-4">
        <div class="flex ml-1">
          <UTooltip text="Click to open github.com page">
            <UButton
              v-if="repoUrl && githubApiData"
              icon="i-mdi-star-outline"
              :label="getDisplayableNumber(githubApiData.stargazers_count)"
              :to="repoUrl"
              target="_blank"
              variant="ghost"
              color="gray"
            />
          </UTooltip>
          <UTooltip text="Click to open npmjs.com page">
            <UButton
              v-if="registryUrl && npmApiData"
              icon="i-material-symbols-download"
              :label="getDisplayableNumber(npmApiData.downloads)"
              :to="registryUrl"
              target="_blank"
              variant="ghost"
              color="gray"
            />
          </UTooltip>
        </div>
        <div class="mr-2">
          <UTooltip text="Click to browse all available components">
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
import getDisplayableNumber from "@/utils/getDisplayableNumber";
import nbComponents from "@/types/section_and_component";

const props = defineProps<{
  library: Library;
}>();

const colorMode = useColorMode();

const display = computed((): boolean => {
  /* Return true if this card should be displayed */
  const { selectedFilterIDs } = useFilterStore();
  const libraryFilterIDs = props.library.filterMatchings.map((obj) => obj.id);
  return isSubset(selectedFilterIDs(), libraryFilterIDs);
});

const logo = ((): string =>
  colorMode.value == "dark" && props.library.logoDark
    ? props.library.logoDark
    : props.library.logo)();

const availabilityScore = ((): number =>
  Math.round((props.library.componentMatchings.length / nbComponents) * 100))();

// Github related ------------------------------------------------------------------------

const repoUrl = ((): string | undefined => {
  if (props.library.repoName && props.library.repoOwner) {
    return `https://github.com/${props.library.repoOwner}/${props.library.repoName}`;
  }
})();

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

const registryUrl = ((library: Library): string | undefined =>
  library.package ? `https://www.npmjs.com/package/${library.package}` : undefined)(
  props.library
);

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
