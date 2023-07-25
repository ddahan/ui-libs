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
          <FilterButton :filter="findFilterbyId('FStyled')" />
          <FilterButton :filter="findFilterbyId('FUnstyled')" />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton :filter="findFilterbyId('FImported')" />
          <FilterButton :filter="findFilterbyId('FPasted')" />
        </div>

        <FilterButton :filter="findFilterbyId('FTailwind')" />
        <FilterButton :filter="findFilterbyId('FComponents')" />
        <FilterButton :filter="findFilterbyId('FAccessible')" />
        <FilterButton :filter="findFilterbyId('FFigma')" />
        <FilterButton :filter="findFilterbyId('FDarkMode')" />
        <FilterButton :filter="findFilterbyId('FFree')" />
        <FilterButton :filter="findFilterbyId('FOfficial')" />
        <FilterButton :filter="findFilterbyId('FRoadmap')" />
      </div>
    </template>

    <template #popularity>
      <div class="ml-2">
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
          :rangeMax="100"
        />
      </div>
    </template>

    <!-- <template #availableComponents>
      <div class="ml-2">
        <UButton
          size="xs"
          label="Accordion"
          variant="ghost"
        />
        <UButton
          size="xs"
          label="Dropdown"
          variant="ghost"
        />
        <UButton
          size="xs"
          label="Badge"
          variant="ghost"
        />
      </div>
    </template> -->
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
import findFilterbyId from "@/utils/findFilterById";

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
  // {
  //   label: "Available Components",
  //   slot: "availableComponents",
  // },
];

const { nbSelectedFilters, resetFilters } = useFilterStore();

const suffix = computed(() => (nbSelectedFilters() == 1 ? "" : "s"));
</script>
