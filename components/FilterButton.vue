<template>
  <UButton
    class="w-full"
    :icon="filter.icon"
    :label="filter.label"
    :variant="filtering[filter.id].selected ? 'solid' : 'ghost'"
    @click="invertFilter(filter.id)"
  />
</template>

<script setup lang="ts">
import { filters } from "@/data/filters";
import { findBy } from "@/utils/findBy";

export interface Props {
  filterID: FilterID;
}
const props = defineProps<Props>();
const filter = findBy<Filter>("id", props.filterID, filters)!;

const { filtering, invertFilter } = useFilterStore();
</script>
