<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow content-start">
    <LibraryCard
      v-for="library in libraries"
      :initialLibrary="library"
    />
  </div>
</template>

<script setup lang="ts">
import { libraries } from "@/data/libraries";
</script>
