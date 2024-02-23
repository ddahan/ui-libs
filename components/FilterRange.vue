<template>
  <UTooltip :text="rangeFilter.help">
    <div class="primary-text flex h-10 w-56 items-center rounded-md">
      <UIcon :name="rangeFilter.icon" class="ml-2 h-5 w-5 shrink-0" />
      <div class="mx-2 w-full">
        <div class="text-sm font-medium">
          {{ rangeFilter.leadingLabel }}
          {{ rangeFiltering[rangeFilter.id].qty }}
          {{ rangeFilter.trailingLabel }}
        </div>
        <div class="flex h-4 items-center">
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
import { rangeFilters } from "@/data/filters"
import type { RangeFilter, RangeFilterID } from "@/types/filters.types"

const props = defineProps<{ rangeFilterID: RangeFilterID }>()
const rangeFilter = findBy<RangeFilter>("id", props.rangeFilterID, rangeFilters)!
const { rangeFiltering, changeRangeFiltering } = useFilterStore()
</script>
