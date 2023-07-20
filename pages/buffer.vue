<template>
  <!-- Nb selected filters -->
  <div
    v-if="nbSelectedFilters > 0"
    class="flex items-center justify-center gap-1"
  >
    <div class="text-sm text-gray-500">{{ nbSelectedFilters }} selected filters</div>
    <UButton
      icon="i-mdi-sync"
      size="xs"
      :square="true"
      variant="ghost"
    />
  </div>

  <!-- More filters -->
  <div class="mt-2 text-sm text-right">
    <UButton
      size="xs"
      label="show more filters ..."
      color="gray"
      variant="ghost"
    >
    </UButton>
  </div>
</template>

<script setup lang="ts"></script>
