<template>
  <div>
    <div class="flex gap-3 items-center mb-8">
      <img
        :src="`/img/${library.logo}`"
        :alt="library.logo"
        class="h-10 w-10 drop-shadow-lg mt-2"
      />
      <h2 class="text-xl md:text-2xl font-semibold decorated">
        {{ library.name }} components
      </h2>
    </div>

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
      <div class="flex gap-0 space-y-1 flex-wrap">
        <template
          v-for="component in section.components"
          :key="component.name"
        >
          <UTooltip
            v-if="showMissing || (!showMissing && isFound(component))"
            class="w-[150px] flex items-center gap-1.5 cursor-default"
          >
            <template #text>
              {{ component.help }}
              <div
                v-if="component.aliases"
                class="mt-2 italic"
              >
                Aliases: {{ component.aliases.join(", ") }}
              </div>
            </template>
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
        </template>
      </div>
    </div>
    <hr class="my-3" />
    <div class="flex items-center gap-2">
      <UToggle
        v-model="showMissing"
        size="xs"
        on-icon="i-heroicons-check-20-solid"
        off-icon="i-heroicons-x-mark-20-solid"
      />
      <p class="primary-text-muted text-xs">Show missing components</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { sections } from "@/data/sections";
import { Library } from "@/types/libraries.types";
import { Component } from "@/types/components.types";

const props = defineProps<{ library: Library }>();

const isFound = (component: Component): boolean =>
  props.library.componentMatchings.includes(component.name);

const { showMissing, invertMissing } = useShowMissingStore();
</script>
