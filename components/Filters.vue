<template>
  <UAccordion
    :items="accordionSections"
    color="black"
    size="xl"
    variant="ghost"
    :multiple="true"
  >
    <template #mainFeatures>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FStyled" />
          <FilterButton buttonFilterID="FUnstyled" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FImported" />
          <FilterButton buttonFilterID="FPasted" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FComponents" />
          <FilterButton buttonFilterID="FCSS" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FVue" />
          <FilterButton buttonFilterID="FNuxt" />
        </div>

        <FilterButton buttonFilterID="FTailwind" />
        <FilterButton buttonFilterID="FFree" />
      </div>
    </template>

    <template #moreFeatures>
      <div class="ml-2 flex flex-col gap-1">
        <FilterButton buttonFilterID="FAccessible" />
        <FilterButton buttonFilterID="FBuiltinThemes" />
        <FilterButton buttonFilterID="FThemeGenerator" />
        <FilterButton buttonFilterID="FDarkMode" />
        <FilterButton buttonFilterID="FSemanticColors" />
        <FilterButton buttonFilterID="FFigma" />
        <FilterButton buttonFilterID="FOfficial" />
        <FilterButton buttonFilterID="FRoadmap" />
        <FilterButton buttonFilterID="FRTLSupport" />
        <FilterButton buttonFilterID="FTyped" />
        <FilterButton buttonFilterID="FForm" />
      </div>
    </template>

    <template #availableComponents>
      <div class="ml-2">
        <FilterRange rangeFilterID="FNbComponents" />
      </div>
    </template>

    <template #popularity>
      <div class="ml-2 flex flex-col gap-1">
        <FilterRange rangeFilterID="FNbStars" />
        <FilterRange rangeFilterID="FNbDownloads" />
      </div>
    </template>
  </UAccordion>
  <div
    v-if="nbTouchedFilters() > 0"
    class="flex justify-end"
  >
    <UButton
      color="gray"
      variant="ghost"
      size="xs"
      icon="i-material-symbols-delete-outline-rounded"
      :label="`Clear ${nbTouchedFilters()} filter${suffix}`"
      @click="clearFiltering()"
    />
  </div>
</template>

<script setup lang="ts">
const accordionSections = [
  {
    label: "Main Features",
    defaultOpen: true,
    slot: "mainFeatures",
  },
  {
    label: "More Features",
    defaultOpen: true,
    slot: "moreFeatures",
  },
  {
    label: "Available Components",
    defaultOpen: true,
    slot: "availableComponents",
  },
  {
    label: "Popularity",
    defaultOpen: true,
    slot: "popularity",
  },
];

const { nbTouchedFilters, clearFiltering } = useFilterStore();

const suffix = computed(() => (nbTouchedFilters() == 1 ? "" : "s"));
</script>
