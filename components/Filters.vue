<template>
  <UAccordion
    :items="items"
    color="black"
    size="xl"
    variant="ghost"
    :multiple="true"
  >
    <template #features>
      <div class="ml-2 flex flex-col gap-1">
        <div class="grid grid-cols-2 gap-1">
          <FilterButton
            name="FStyled"
            icon="i-tabler-palette"
            label="Styled"
          />
          <FilterButton
            name="FUnstyled"
            icon="i-tabler-palette-off"
            label="Unstyled"
          />
        </div>

        <div class="grid grid-cols-2 gap-1">
          <FilterButton
            name="FImported"
            icon="i-mdi-import"
            label="Imported"
          />
          <FilterButton
            name="FPasted"
            icon="i-mdi-content-paste"
            label="Pasted"
          />
        </div>

        <FilterButton
          name="FTailwind"
          icon="i-simple-icons-tailwindcss"
          label="Tailwind CSS based"
        />

        <FilterButton
          name="FComponents"
          icon="i-mdi-vuejs"
          label="Vue Components"
        />

        <FilterButton
          name="FAccessible"
          icon="i-material-symbols-accessibility-new"
          label="Fully Accessible"
        />
        <FilterButton
          name="FFigma"
          icon="i-ph-figma-logo"
          label="Figma files"
        />
        <FilterButton
          name="FDarkMode"
          icon="i-mdi-weather-night"
          label="Dark Mode support"
        />
        <FilterButton
          name="FFree"
          icon="i-material-symbols-money-off"
          label="Free"
        />
        <FilterButton
          name="FOfficial"
          icon="i-solar-medal-ribbon-linear"
          label="Official"
        />
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
const items = [
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
