<template>
  <UTooltip :text="buttonFilter.help">
    <div class="flex cursor-default items-center gap-1 text-xs">
      <UIcon :name="buttonFilter.icon" />
      {{ buttonFilter.label }}
    </div>
  </UTooltip>
</template>

<script setup lang="ts">
import type { ButtonFilter } from "@/types/filters.types"

defineProps<{ buttonFilter: ButtonFilter }>()
</script>
