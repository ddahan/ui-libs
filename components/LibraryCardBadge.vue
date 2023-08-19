<template>
  <NuxtLink
    class="flex items-center gap-1 text-xs"
    :class="
      buttonFilterMatching.to ? 'hover:bg-primary-50 dark:hover:bg-primary-900' : ''
    "
    :to="buttonFilterMatching.to"
    target="_blank"
  >
    <UIcon :name="filter.icon" />
    {{ filter.label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { buttonFilters } from "@/data/filters";

const props = defineProps<{
  buttonFilterMatching: ButtonFilterMatching;
}>();

const filter = findBy<ButtonFilter>("id", props.buttonFilterMatching.id, buttonFilters)!;
</script>
