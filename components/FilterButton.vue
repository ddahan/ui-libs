<template>
  <UButton
    class="w-full"
    :icon="filter.icon"
    :label="filter.label"
    :variant="filters[filter.id].selected ? 'solid' : 'ghost'"
    @click="invertFilter(filter.id)"
  />
</template>

<script setup lang="ts">
export interface Props {
  filter: Filter;
}

defineProps<Props>();

const { filters, invertFilter } = useFilterStore();
</script>
