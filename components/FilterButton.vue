<template>
  <UButton
    class="w-full"
    :icon="filter.icon"
    :label="filter.label"
    :variant="filtering[filter.id].selected ? 'solid' : 'ghost'"
    @click="invertButtonFiltering(filter.id)"
  />
</template>

<script setup lang="ts">
import { filters } from "@/data/filters";

const props = defineProps<{ filterID: FilterID }>();
const filter = findBy<Filter>("id", props.filterID, filters)!;

const { filtering, invertButtonFiltering } = useFilterStore();
</script>
