<template>
  <div>
    <h2 class="text-xl md:text-2xl font-semibold decorated mb-8">
      {{ library.name }} components
    </h2>

    <div
      class="mb-5"
      v-for="section in sections"
      :key="section.name"
    >
      <div class="flex items-center gap-2.5 mb-3">
        <UIcon
          :name="section.icon"
          class="h-5 w-5"
        />
        <h3 class="font-semibold">{{ section.name }}</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div
          v-for="component in section.components"
          :key="component.name"
        >
          <UTooltip
            :text="component.description"
            class="flex items-center gap-1.5 cursor-default"
          >
            <UIcon
              :name="
                isFound(component)
                  ? 'i-heroicons-check-circle-20-solid'
                  : 'i-heroicons-x-circle-20-solid'
              "
              :class="isFound(component) ? 'primary-text' : 'primary-text-muted'"
            />
            <span
              class="text-sm"
              :class="isFound(component) ? 'primary-text' : 'primary-text-muted'"
            >
              {{ component.name }}
            </span>
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sections } from "@/data/sections";

const props = defineProps<{ library: Library }>();

const isFound = (component: Component): boolean =>
  props.library.componentMatchings.includes(component.name);
</script>
