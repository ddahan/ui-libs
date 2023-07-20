<template>
  <UAccordion
    :items="items"
    color="black"
    variant="ghost"
    :multiple="true"
  >
    <template #features>
      <div class="ml-2 flex flex-col">
        <div class="grid grid-cols-2">
          <UButton
            class="w-full"
            icon="i-tabler-palette"
            label="Styled"
            variant="ghost"
          />
          <UButton
            class="w-full"
            icon="i-tabler-palette-off"
            label="Unstyled"
            variant="ghost"
          />
        </div>

        <div class="grid grid-cols-2">
          <UButton
            class="w-full"
            icon="i-mdi-import"
            label="Imported"
            variant="ghost"
          />
          <UButton
            class="w-full"
            icon="i-mdi-content-paste"
            label="Pasted"
            variant="ghost"
          />
        </div>

        <UButton
          icon="i-simple-icons-tailwindcss"
          label="Tailwind CSS based"
          variant="ghost"
        />

        <UButton
          icon="i-mdi-vuejs"
          label="Vue Components"
          variant="ghost"
        />
        <UButton
          icon="i-material-symbols-accessibility-new"
          label="Fully Accessible"
          variant="ghost"
        />
        <UButton
          icon="i-ph-figma-logo"
          label="Figma files"
          variant="ghost"
        />
        <UButton
          icon="i-mdi-weather-night"
          label="Dark Mode support"
          variant="ghost"
        />
        <UButton
          icon="i-material-symbols-money-off"
          label="Free"
          variant="ghost"
        />
        <UButton
          icon="i-solar-medal-ribbon-linear"
          label="Official"
          variant="ghost"
        />
      </div>
    </template>

    <template #popularity>
      <div class="ml-2">
        <div class="flex h-12 items-center">
          <UIcon
            name="i-mdi-star-outline"
            class="text-pink-500 h-5 w-5 ml-2 shrink-0"
          />
          <div class="w-full mx-2">
            <div class="text-sm font-medium text-pink-500">
              More than {{ nbStars }} stars
            </div>
            <div class="h-4 flex items-center">
              <URange
                v-model="nbStars"
                :min="0"
                :max="10000"
                :step="500"
                size="sm"
              />
            </div>
          </div>
        </div>

        <div class="flex h-12 items-center">
          <UIcon
            name="i-material-symbols-download"
            class="text-pink-500 h-5 w-5 ml-2 shrink-0"
          />
          <div class="w-full mx-2">
            <div class="text-sm font-medium text-pink-500">
              More than {{ nbDownloads }}k npm DLs
            </div>
            <div class="h-4 flex items-center">
              <URange
                v-model="nbDownloads"
                :min="0"
                :max="100"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #availableComponents>
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
    </template>
  </UAccordion>
</template>

<script setup lang="ts">
const nbStars = ref(0); // TODO: make dynamic
const nbDownloads = ref(0); // TODO: make dynamic

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
  {
    label: "Available Components",
    slot: "availableComponents",
  },
];
</script>
