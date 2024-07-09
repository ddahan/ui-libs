<template>
  <div class="shadow-sm shadow-gray-200 backdrop-blur-md dark:shadow-gray-600">
    <div class="flex items-center justify-between px-4 py-2 md:px-8">
      <div class="hidden h-12 items-center gap-2 md:flex">
        <UIcon class="primary-text h-8 w-8" name="i-ic-outline-palette" />
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
          :ui="{ width: 'max-w-xs' }"
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
          icon="i-material-symbols-account-circle-outline"
          :square="true"
          :to="appConfig.myWebsiteUrl"
          target="_blank"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const appConfig = useAppConfig()
</script>
