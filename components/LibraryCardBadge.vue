<template>
  <NuxtLink
    class="flex items-center gap-1 text-xs bg-gray-50 dark:bg-gray-600 rounded-lg px-2 py-0.5"
    :class="filterMatching.to ? 'hover:bg-primary-50 dark:hover:bg-primary-900' : ''"
    :to="filterMatching.to"
    target="_blank"
  >
    <UIcon :name="filter.icon" />
    {{ filter.label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { filters } from "@/data/filters";

const props = defineProps<{
  filterMatching: FilterMatching;
}>();

const filter = findBy<Filter>("id", props.filterMatching.id, filters)!;
</script>
