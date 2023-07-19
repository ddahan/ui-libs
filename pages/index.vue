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
          :library="library"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
// import { Library } from "@/types/interfaces";

interface Project {
  name: string;
  repoUrl: string;
}

interface Component {
  name: string;
}

interface Dependency {
  name: string;
}

interface User {
  name: string;
}

interface Library {
  name: string;
  logo?: string;
  url: string;
  styling: "STYLED" | "UNSTYLED" | "BOTH";
  usage: "IMPORT" | "PASTE";
  tailwindCSSBased: boolean;
  darkModeSupport: boolean;
  accessible: boolean;
  free: boolean;
  official: boolean;
  // projects: Project[];
  // creator: User;
  // TODO: other potentiel filters to integrate later
  // components: Component[];
  // dependencies: Dependency[];
  // hasFigmaFiles: boolean;
  // hasTyping: boolean;
  // releaseDate: Date;
  // customizability: string;
  // nbStars: number;
  // nbDownloads: number;
  // activityLevel: number;
  // nuxtOnly: boolean;
}

const nbSelectedFilters = ref(3); // TODO: change

const libraries: Library[] = [
  {
    name: "NuxtLabs UI",
    logo: "nuxt.svg",
    url: "https://ui.nuxtlabs.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: true,
    accessible: true,
    free: true,
    official: true,
  },
  {
    name: "Tailwind UI",
    logo: "tailwind.svg",
    url: "https://tailwindui.com",
    styling: "STYLED",
    usage: "PASTE",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: false,
    free: false,
    official: false,
  },
  {
    name: "Prime Vue",
    logo: "primevue.svg",
    url: "https://primevue.org",
    styling: "BOTH",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: false,
    free: true,
    official: false,
  },
  {
    name: "Quasar",
    logo: "quasar.svg",
    url: "https://quasar.dev",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: true,
    free: true,
    official: false,
  },
  {
    name: "Vuetify",
    logo: "vuetify.svg",
    url: "https://vuetifyjs.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: false,
    darkModeSupport: false,
    accessible: true,
    free: true,
    official: false,
  },
  {
    name: "Daisy UI",
    logo: "daisyui.svg",
    url: "https://daisyui.com",
    styling: "STYLED",
    usage: "IMPORT",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: false,
    free: true,
    official: false,
  },
  {
    name: "FlowBite",
    logo: "flowbite.svg",
    url: "https://flowbite.com",
    styling: "STYLED",
    usage: "PASTE",
    tailwindCSSBased: true,
    darkModeSupport: false,
    accessible: true,
    free: true,
    official: false,
  },
];
</script>
