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
            <LibraryCardBadge :filterMatching="filterMatching" />
          </template>
        </div>
      </div>
      <!-- Card footer -->
      <div class="flex items-center justify-between mt-4">
        <div class="flex ml-1">
          <UTooltip
            v-if="repoUrl && githubApiData"
            text="Go to github.com page"
          >
            <UButton
              icon="i-mdi-star-outline"
              :label="getDisplayableNumber(githubApiData.stargazers_count)"
              :to="repoUrl"
              target="_blank"
              variant="ghost"
              color="gray"
            />
          </UTooltip>
          <UTooltip
            v-if="registryUrl && npmApiData"
            text="Go to npmjs.com page"
          >
            <UButton
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
import getDisplayableNumber from "@/utils/getDisplayableNumber";

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
  Math.round(
    (props.library.componentMatchings.length / useNbComponentsStore().value) * 100
  ))();

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
