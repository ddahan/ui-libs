<template>
  <div class="grid flex-grow grid-cols-1 content-start gap-6 lg:grid-cols-2">
    <LibraryCard v-for="library in libraries" :initialLibrary="library" />
  </div>
</template>

<script setup lang="ts">
import { libraries } from "@/data/libraries"
</script>
