<template>
  <UButtonGroup class="grid grid-cols-2">
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
  </UButtonGroup>

  <UButtonGroup class="grid grid-cols-2">
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
  </UButtonGroup>

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

  <!-- Github Stars -->
  <div class="flex h-12 items-center">
    <UIcon
      name="i-mdi-star-outline"
      class="text-pink-500 h-5 w-5 ml-2 shrink-0"
    />
    <div class="w-full mx-2">
      <div class="text-sm font-medium text-pink-500">More than {{ nbStars }} stars</div>
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

  <!-- NPM Downloads -->

  <div class="flex h-12 items-center">
    <UIcon
      name="i-material-symbols-download"
      class="text-pink-500 h-5 w-5 ml-2 shrink-0"
    />
    <div class="w-full mx-2">
      <div class="text-sm font-medium text-pink-500">
        More than {{ nbDownloads }} npm DLs
      </div>
      <div class="h-4 flex items-center">
        <URange
          v-model="nbDownloads"
          :min="0"
          :max="100000"
          :step="2000"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nbStars = ref(0); // TODO: make dynamic
const nbDownloads = ref(0); // TODO: make dynamic
</script>
