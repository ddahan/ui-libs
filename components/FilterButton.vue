<template>
  <UButton
    class="w-full"
    :icon="icon"
    :label="label"
    :variant="filterData[props.name].selected ? 'solid' : 'ghost'"
    @click="invertFilter(name)"
  />
</template>

<script setup lang="ts">
export interface Props {
  name: FilterName;
  label?: string;
  icon?: string;
}

const props = defineProps<Props>();

const { filterData, invertFilter } = useFilterStore();
</script>
