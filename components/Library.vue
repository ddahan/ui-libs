<template>
  <div
    class="rounded-lg border border-slate-200 bg-white p-3 h-40 hover:border-pink-500 hover:bg-pink-50"
  >
    <div class="mx-2 mt-2">
      <img
        src="/img/vue.png"
        class="hidden max-h-10 drop-shadow-lg lg:block"
      />
      <p class="mt-4 font-medium tracking-wide">{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>
