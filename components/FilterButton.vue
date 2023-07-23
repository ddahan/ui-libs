<template>
  <UButton
    class="w-full"
    :icon="icon"
    :label="label"
    :variant="selected ? 'solid' : 'ghost'"
    @click="invertSelect()"
  />
</template>

<script setup lang="ts">
export interface Props {
  label?: string;
  icon?: string;
  defaultSelected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultSelected: false,
});

let selected = ref(props.defaultSelected);

const invertSelect = () => {
  selected.value = !selected.value;
};
</script>
