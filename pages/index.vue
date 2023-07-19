<template>
  <Header />
  <UContainer class="max-w-2xl">
    <div class="text-center">
      <UIcon
        class="mt-6 w-16 h-16 sm:w-28 sm:h-28"
        name="i-twemoji-artist-palette"
      />
      <h1 class="text-2xl sm:text-4xl">Pick the right UI Library</h1>
      <p class="sm:text-lg">for your Vue Project</p>
    </div>

    <div class="mt-6 flex gap-4 flex-grow justify-center">
      <!-- filters -->
      <div class="w-64 p-3 hidden md:block">
        <div
          v-if="nbSelectedFilters > 0"
          class="flex items-center justify-center gap-1"
        >
          <div class="text-sm text-gray-500">
            {{ nbSelectedFilters }} selected filters
          </div>
          <UButton
            icon="i-mdi-sync"
            size="xs"
            :square="true"
            variant="ghost"
          />
        </div>

        <div class="mt-2 flex flex-col gap-1.5">
          <Filters />
        </div>

        <div class="mt-2 text-sm text-right">
          <UButton
            size="xs"
            label="show more filters ..."
            color="gray"
            variant="ghost"
          >
          </UButton>
        </div>
      </div>

      <!-- libraries -->
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 flex-grow">
        <Library
          v-for="library in libraries"
          :name="library.name"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
interface Library {
  name: string;
}

const nbSelectedFilters = ref(3); // TODO: change

const libraries: Library[] = [
  { name: "NuxtLabs UI" },
  { name: "Tailwind UI" },
  { name: "Prime Vue" },
  { name: "Quasar" },
  { name: "Vuetify" },
  { name: "Daisy UI" },
  { name: "NuxtLabs UI" },
  { name: "FlowBite" },
];
</script>
