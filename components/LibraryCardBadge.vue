<template>
  <div
    class="flex items-center gap-1 text-xs bg-gray-50 dark:bg-gray-600 rounded-lg px-2 py-0.5"
  >
    <UIcon :name="filter.icon" />
    {{ filter.label }}
  </div>
</template>

<script setup lang="ts">
import findFilterbyId from "@/utils/findFilterById";

const props = defineProps<{
  filterID: FilterID;
}>();

const filter = findFilterbyId(props.filterID);
</script>
