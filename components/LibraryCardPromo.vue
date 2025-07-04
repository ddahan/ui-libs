<template>
  <div>
    <div
      class="bg-primary flex h-7 cursor-pointer items-center justify-between rounded-t-md px-2 text-sm font-bold text-white dark:text-black"
      @click="openPromoUrl"
    >
      <div></div>
      <div class="flex items-center justify-center gap-x-1.5">
        <UIcon class="text-lg" v-if="promo.icon" :name="promo.icon"></UIcon>
        <div>{{ promo.text }}</div>
      </div>
      <UIcon class="text-lg" name="ph:arrow-right-bold"></UIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Promo } from "@/types/libraries.types"

const props = defineProps<{ promo: Promo }>()

const openPromoUrl = () => {
  window.open(props.promo.url, "_blank", "noopener,noreferrer")
}
</script>
