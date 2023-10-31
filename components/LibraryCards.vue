<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow content-start">
    <LibraryCard v-for="library in sortedLibraries" :initialLibrary="library" />
  </div>
</template>

<script setup lang="ts">
import { sortedLibraries } from "@/data/libraries";
</script>
