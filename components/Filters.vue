<template>
  <UAccordion
    :items="accordionSections"
    color="black"
    size="xl"
    variant="ghost"
    :multiple="true"
  >
    <template #features>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FStyled" />
          <FilterButton buttonFilterID="FUnstyled" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton buttonFilterID="FImported" />
          <FilterButton buttonFilterID="FPasted" />
        </div>

        <FilterButton buttonFilterID="FTailwind" />
        <FilterButton buttonFilterID="FComponents" />
        <FilterButton buttonFilterID="FAccessible" />
        <FilterButton buttonFilterID="FFigma" />
        <FilterButton buttonFilterID="FDarkMode" />
        <FilterButton buttonFilterID="FFree" />
        <FilterButton buttonFilterID="FOfficial" />
        <FilterButton buttonFilterID="FRoadmap" />
      </div>
    </template>

    <template #popularity>
      <div class="ml-2 flex flex-col gap-1">
        <FilterRange rangeFilterID="FNbStars" />
        <FilterRange rangeFilterID="FNbDownloads" />
      </div>
    </template>

    <template #availableComponents>
      <div class="ml-2">
        <FilterRange rangeFilterID="FComponentScore" />
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
    label: "Features",
    defaultOpen: true,
    slot: "features",
  },
  {
    label: "Popularity",
    defaultOpen: true,
    slot: "popularity",
  },
  {
    label: "Available Components",
    defaultOpen: true,
    slot: "availableComponents",
  },
];

const { nbTouchedFilters, clearFiltering } = useFilterStore();

const suffix = computed(() => (nbTouchedFilters() == 1 ? "" : "s"));
</script>
