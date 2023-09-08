<template>
  <UTooltip>
    <UButton
      class="w-full"
      :icon="buttonFilter.icon"
      :label="buttonFilter.label"
      :variant="buttonFiltering[buttonFilter.id].selected ? 'solid' : 'ghost'"
      @click="invertButtonFiltering(buttonFilter.id)"
    />
    <template #text>
      {{ buttonFilter.help }}
    </template>
  </UTooltip>
</template>

<script setup lang="ts">
import { buttonFilters } from "@/data/filters";
import { ButtonFilterID } from "@/types/filters.types";

const props = defineProps<{ buttonFilterID: ButtonFilterID }>();
const buttonFilter = findBy("id", props.buttonFilterID, buttonFilters)!;

const { buttonFiltering, invertButtonFiltering } = useFilterStore();
</script>
