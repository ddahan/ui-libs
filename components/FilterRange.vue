<template>
  <div
    class="flex h-10 items-center primary-text border border-transparent rounded-md"
    :class="
      rangeFiltering[rangeFilter.id].value > 0
        ? 'border-primary-500 dark:border-primary-400'
        : ''
    "
  >
    <UIcon
      :name="rangeFilter.icon"
      class="h-5 w-5 ml-2 shrink-0"
    />
    <div class="w-full mx-2">
      <div class="text-sm font-medium">
        {{ rangeFilter.leadingLabel }} {{ rangeFiltering[rangeFilter.id].value }}
        {{ rangeFilter.trailingLabel }}
      </div>
      <div class="h-4 flex items-center">
        <URange
          @change="
            changeRangeFiltering(rangeFilterID, rangeFiltering[rangeFilter.id].value)
          "
          v-model="rangeFiltering[rangeFilter.id].value"
          :min="0"
          :max="rangeFilter.rangeMax"
          :step="rangeFilter.rangeStep"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { rangeFilters } from "@/data/filters";

const props = defineProps<{ rangeFilterID: RangeFilterID }>();
const rangeFilter = findBy<RangeFilter>("id", props.rangeFilterID, rangeFilters)!;
const { rangeFiltering, changeRangeFiltering } = useFilterStore();

// TODO: do not use `value` as it is very confusing
</script>
