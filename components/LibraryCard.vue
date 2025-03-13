<template>
  <div
    v-if="display"
    class="min-h-[180px] w-auto rounded-lg border border-gray-200 bg-white px-3 py-2 dark:border-gray-800 dark:bg-gray-700"
  >
    <div class="flex h-full flex-col justify-between">
      <div class="flex items-start justify-between gap-8 px-4 py-2">
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
                <img :src="`/img/${logo}`" :alt="logo" class="h-12 w-12 drop-shadow-lg" />
              </div>
              <p class="font-medium tracking-wide">{{ library.name }}</p>
            </UButton>
          </UTooltip>
          <div v-if="library.onTopOf" class="-mt-0.5 flex items-center gap-x-1 text-xs">
            <UIcon name="i-ph-stack-simple"></UIcon>
            <div>built on {{ library.onTopOf }}</div>
          </div>
        </div>

        <div class="flex flex-wrap place-content-end gap-2">
          <template v-for="buttonFilter in buttonFiltersToShow" :key="buttonFilter.id">
            <LibraryCardBadge class="w-28" :buttonFilter="buttonFilter" />
          </template>
        </div>
      </div>
      <!-- Card footer -->
      <div class="mt-4 flex items-center justify-between">
        <div class="ml-1 flex">
          <UTooltip v-if="repoUrl && library.nbStars" text="Go to github.com page">
            <UButton
              icon="i-mdi-star-outline"
              :label="getDisplayableNumber(library.nbStars)"
              :to="repoUrl"
              target="_blank"
              variant="ghost"
              color="gray"
            />
          </UTooltip>
          <UTooltip v-if="registryUrl && library.nbDownloads" text="Go to npmjs.com page">
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
              @click="isComponentPanelOpen = true"
              icon="i-heroicons-square-3-stack-3d"
              size="xl"
              :label="`${nbComponents} components`"
              variant="ghost"
              color="primary"
            />
            <USlideover
              @dblclick.prevent=""
              v-model="isComponentPanelOpen"
              side="right"
              :ui="{ width: 'max-w-[85%] md:max-w-2xl' }"
            >
              <SlideoverContent>
                <LibraryCardComponentPanel :library="library" />
              </SlideoverContent>
            </USlideover>
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { buttonFilters } from "@/data/filters"
import type { Library } from "@/types/libraries.types"
import type { ButtonFilter } from "@/types/filters.types"

const props = defineProps<{
  initialLibrary: Library
}>()

// required to mutate a prop
const library = ref(props.initialLibrary)
const isComponentPanelOpen = ref(false)
const colorMode = useColorMode()
const nbComponents = library.value.componentMatchings.length

const buttonFiltersToShow = computed((): ButtonFilter[] => {
  /* Return the button filters (ordered by indexes, to keep consistency over the different cards) than must be showed on the card */

  let result: ButtonFilter[] = []
  for (let filterMatching of library.value.filterMatchings) {
    const buttonFilter = <ButtonFilter>findBy("id", filterMatching.id, buttonFilters)!
    result.push(buttonFilter)
  }
  return result.sort((a, b) => a.index - b.index)
})

const display = computed((): boolean => {
  /* Return true if this card should be displayed */
  const { touchedButtonFilterIDs, rangeFiltering } = useFilterStore()
  const libraryFilterIDs = library.value.filterMatchings.map((obj) => obj.id)

  // Check wether all the button logic is satisfied, and debranch if not
  if (isSubset(touchedButtonFilterIDs(), libraryFilterIDs) == false) {
    return false
  }

  // ... Now range logic must be verified too.
  // We need to check every range filters living in the state
  if (
    rangeFiltering.value.FNbStars.qty > 0 &&
    library.value.nbStars! < rangeFiltering.value.FNbStars.qty
  ) {
    return false
  }
  if (
    rangeFiltering.value.FNbDownloads.qty > 0 &&
    library.value.nbDownloads! < rangeFiltering.value.FNbDownloads.qty * 1000
  ) {
    return false
  }
  if (
    rangeFiltering.value.FNbComponents.qty > 0 &&
    nbComponents < rangeFiltering.value.FNbComponents.qty
  ) {
    return false
  }

  return true
})

const logo = ((): string =>
  colorMode.value == "dark" && library.value.logoDark
    ? library.value.logoDark
    : library.value.logo)()

// Github related ------------------------------------------------------------------------

const repoUrl = ((library: Library): string | undefined =>
  library.repoName && library.repoOwner
    ? `https://github.com/${library.repoOwner}/${library.repoName}`
    : undefined)(library.value)

type GithubApiResponse = {
  stargazers_count: number // known and useful key
  [key: string]: unknown // unknown and useless keys
}

if (repoUrl) {
  const { data: githubApiData } = useFetch<GithubApiResponse>(
    `https://api.github.com/repos/${library.value.repoOwner}/${library.value.repoName}`,
    {
      lazy: true,
      server: false, // This call will only be performed on the client
      onResponse({ response }) {
        library.value.nbStars = response._data.stargazers_count
      },
    }
  )
}

// NPM related ---------------------------------------------------------------------------

const registryUrl = ((library: Library): string | undefined =>
  library.package ? `https://www.npmjs.com/package/${library.package}` : undefined)(
  library.value
)

type NpmApiResponse = {
  downloads: number
  [key: string]: unknown
}

if (registryUrl) {
  const { data: npmApiData } = useFetch<NpmApiResponse>(
    `https://api.npmjs.org/downloads/point/last-week/${library.value.package}`,
    {
      lazy: true,
      server: false,
      onResponse({ response }) {
        library.value.nbDownloads = response._data.downloads
      },
    }
  )
}
</script>
