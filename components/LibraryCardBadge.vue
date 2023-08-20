<template>
  <UTooltip :text="buttonFilter.help">
    <div class="flex items-center gap-1 text-xs cursor-default">
      <UIcon :name="buttonFilter.icon" />
      {{ buttonFilter.label }}
    </div>
  </UTooltip>
</template>

<script setup lang="ts">
import { buttonFilters } from "@/data/filters";

const props = defineProps<{
  buttonFilterMatching: ButtonFilterMatching;
}>();

const buttonFilter = findBy<ButtonFilter>(
  "id",
  props.buttonFilterMatching.id,
  buttonFilters
)!;
</script>
