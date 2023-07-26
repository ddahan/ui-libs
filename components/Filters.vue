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
          <FilterButton filterID="FStyled" />
          <FilterButton filterID="FUnstyled" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton filterID="FImported" />
          <FilterButton filterID="FPasted" />
        </div>

        <FilterButton filterID="FTailwind" />
        <FilterButton filterID="FComponents" />
        <FilterButton filterID="FAccessible" />
        <FilterButton filterID="FFigma" />
        <FilterButton filterID="FDarkMode" />
        <FilterButton filterID="FFree" />
        <FilterButton filterID="FOfficial" />
        <FilterButton filterID="FRoadmap" />
      </div>
    </template>

    <template #popularity>
      <div class="ml-2 flex flex-col gap-1">
        <FilterRange
          leadingLabel="More than"
          trailingLabel="stars"
          icon="i-mdi-star-outline"
          :rangeMax="10000"
          :rangeStep="500"
        />

        <FilterRange
          leadingLabel="More than"
          trailingLabel="k npm DLs"
          icon="i-material-symbols-download"
          :rangeStep="10"
          :rangeMax="200"
        />
      </div>
    </template>

    <template #availableComponents>
      <div class="ml-2">
        <FilterRange
          leadingLabel="Score higher than"
          trailingLabel="%"
          icon="i-heroicons-square-3-stack-3d"
          :rangeMax="95"
          :rangeStep="5"
        />
      </div>
    </template>
  </UAccordion>
  <div
    v-if="nbSelectedFilters() > 0"
    class="flex justify-end"
  >
    <UButton
      color="gray"
      variant="ghost"
      size="xs"
      icon="i-material-symbols-delete-outline-rounded"
      :label="`Clear ${nbSelectedFilters().toString()} filter${suffix}`"
      @click="resetFilters()"
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

const { nbSelectedFilters, resetFilters } = useFilterStore();

const suffix = computed(() => (nbSelectedFilters() == 1 ? "" : "s"));
</script>
