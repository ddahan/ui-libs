<template>
  <div
    class="sticky top-0 z-20 border-t border-transparent backdrop-blur-md shadow-sm shadow-gray-200 dark:shadow-gray-600"
  >
    <div class="flex items-center justify-between px-4 md:px-8 py-2">
      <div class="hidden md:flex gap-2 items-center h-12">
        <UIcon
          class="w-8 h-8 primary-text"
          name="i-ic-outline-palette"
        />
        <h1 class="text-xl font-bold">UI Lib Picker</h1>
      </div>
      <div class="md:invisible">
        <UButton
          icon="i-material-symbols-format-list-bulleted"
          :square="true"
          variant="outline"
          @click="isMenuOpen = true"
        />
        <USlideover
          @dblclick.prevent=""
          v-model="isMenuOpen"
          side="left"
          :ui="{ width: 'max-w-[256px]' }"
          class="md:hidden"
        >
          <SlideoverContent>
            <Filters />
          </SlideoverContent>
        </USlideover>
      </div>
      <div class="flex items-center justify-end gap-1 md:gap-2">
        <UButton
          icon="i-mdi-github"
          :square="true"
          variant="ghost"
          :to="appConfig.repoUrl"
          target="_blank"
        />

        <ThemeSelector />

        <UButton
          icon="i-bx-coffee-togo"
          :trailing="false"
          :square="true"
          :to="appConfig.buyMeACoffeeUrl"
          target="_blank"
        >
          <span class="hidden md:inline-block">Buy Me a Coffee</span>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const appConfig = useAppConfig();
</script>
