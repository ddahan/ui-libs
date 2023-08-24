<template>
  <UTooltip :text="buttonFilter.help">
    <div class="flex items-center gap-1 text-xs cursor-default">
      <UIcon :name="buttonFilter.icon" />
      {{ buttonFilter.label }}
    </div>
  </UTooltip>
</template>

<script setup lang="ts">
import { ButtonFilter } from "@/types/filters.types";

defineProps<{ buttonFilter: ButtonFilter }>();
</script>
