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
        <div class="grid grid-cols-2">
          <FilterButton
            icon="i-tabler-palette"
            label="Styled"
          />
          <FilterButton
            icon="i-tabler-palette-off"
            label="Unstyled"
          />
        </div>

        <div class="grid grid-cols-2">
          <FilterButton
            icon="i-mdi-import"
            label="Imported"
          />
          <FilterButton
            icon="i-mdi-content-paste"
            label="Pasted"
          />
        </div>

        <FilterButton
          icon="i-simple-icons-tailwindcss"
          label="Tailwind CSS based"
        />

        <FilterButton
          icon="i-mdi-vuejs"
          label="Vue Components"
        />

        <FilterButton
          icon="i-material-symbols-accessibility-new"
          label="Fully Accessible"
        />
        <FilterButton
          icon="i-ph-figma-logo"
          label="Figma files"
        />
        <FilterButton
          icon="i-mdi-weather-night"
          label="Dark Mode support"
        />
        <FilterButton
          icon="i-material-symbols-money-off"
          label="Free"
        />
        <FilterButton
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
          trailingLabel="npm DLs"
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

const filters = reactive({
  styledFilter: {
    selected: true,
  },
});
</script>
