<template>
  <UTooltip :text="rangeFilter.help">
    <div class="flex h-10 items-center primary-text rounded-md w-56">
      <UIcon
        :name="rangeFilter.icon"
        class="h-5 w-5 ml-2 shrink-0"
      />
      <div class="w-full mx-2">
        <div class="text-sm font-medium">
          {{ rangeFilter.leadingLabel }}
          {{ rangeFiltering[rangeFilter.id].qty }}
          {{ rangeFilter.trailingLabel }}
        </div>
        <div class="h-4 flex items-center">
          <URange
            @change="
              changeRangeFiltering(rangeFilterID, rangeFiltering[rangeFilter.id].qty)
            "
            v-model="rangeFiltering[rangeFilter.id].qty"
            :min="0"
            :max="rangeFilter.rangeMax"
            :step="rangeFilter.rangeStep"
            size="sm"
          />
        </div>
      </div>
    </div>
  </UTooltip>
</template>

<script setup lang="ts">
import { rangeFilters } from "@/data/filters";
import { RangeFilter, RangeFilterID } from "@/types/filters.types";

const props = defineProps<{ rangeFilterID: RangeFilterID }>();
const rangeFilter = findBy<RangeFilter>("id", props.rangeFilterID, rangeFilters)!;
const { rangeFiltering, changeRangeFiltering } = useFilterStore();
</script>
