<template>
  <div class="text-xs text-gray-600 bg-gray-50 rounded-lg px-2 py-0.5">
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
