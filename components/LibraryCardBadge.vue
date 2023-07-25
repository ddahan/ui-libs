<template>
  <!-- <UButton
    size="2xs"
    variant="link"
    color="gray"
    :disabled="!filterMatching.to"
    :label="filter.label"
    :icon="filter.icon"
    :to="filterMatching.to"
    target="_blank"
  /> -->

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
import findFilterbyId from "@/utils/findFilterById";

const props = defineProps<{
  filterID: FilterID;
  filterMatching: TrueFilterMatching; // we only display True matches
}>();

const filter = findFilterbyId(props.filterID);
</script>
