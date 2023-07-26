<template>
  <div
    class="flex h-10 items-center primary-text border border-transparent rounded-md"
    :class="value > 0 ? 'border-primary-500 dark:border-primary-400' : ''"
  >
    <UIcon
      :name="icon"
      class="h-5 w-5 ml-2 shrink-0"
    />
    <div class="w-full mx-2">
      <div class="text-sm font-medium">
        {{ leadingLabel }} {{ value }} {{ trailingLabel }}
      </div>
      <div class="h-4 flex items-center">
        <URange
          v-model="value"
          :min="0"
          :max="rangeMax"
          :step="rangeStep"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  leadingLabel?: string;
  trailingLabel?: string;
  icon: string;
  defaultValue?: number;
  rangeMax: number;
  rangeStep?: number;
}
const props = withDefaults(defineProps<Props>(), {
  defaultValue: 0,
  leadingLabel: "",
  trailingLabel: "",
});

let value = ref(props.defaultValue);
</script>
