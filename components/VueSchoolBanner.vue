<template>
  <div class="bg-blue-950 backdrop-blur-md hover:cursor-pointer" v-show="open">
    <div
      class="plausible-event-name=VueSchoolBanner+click flex h-16 shrink-0 items-center justify-between px-4 text-white"
      @click="navigate"
    >
      <div></div>
      <div class="hidden lg:block">
        <img src="/img/vueschool/vueschool.svg" alt="VueSchool Logo" class="h-6" />
      </div>
      <div
        class="hidden bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-lg font-semibold tracking-wide text-transparent sm:inline-block"
      >
        New Vue Masterclass
      </div>
      <div class="hidden lg:flex lg:gap-x-2">
        <img src="/img/vueschool/vue-with-hat.svg" alt="VueJS Logo" class="h-6" />
        <img src="/img/vueschool/pinia.svg" alt="Pinia Logo" class="h-6" />
        <img src="/img/vueschool/vite.svg" alt="Vite Logo" class="h-6" />
        <img src="/img/vueschool/vitest.svg" alt="Vitest Logo" class="h-6" />
      </div>
      <div class="text-center leading-5">
        <span
          class="inline-block bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text font-semibold tracking-wide text-transparent"
        >
          Vue.js Masterclass 2024 Edition
        </span>
        <span class="ml-2 hidden font-semibold sm:inline">LAUNCHED</span>
        <br />
        <span class="text-sm text-gray-300 sm:text-base">
          Code a real world app using the latest Vue.js tech
        </span>
      </div>
      <UButton
        class="plausible-event-name=VueSchoolBanner+click hidden px-4 font-bold md:inline-flex"
        label="Buy Now"
        icon="i-tabler-caret-right-filled"
        variant="solid"
        :ui="{ rounded: 'rounded-full' }"
        trailing
        @click="navigate"
      />
      <UIcon name="i-ph-x" class="size-5 hover:opacity-80" @click.stop="open = false" />
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(true)
const affiliateId = "UILIBPIC"
const fullUrl = computed(
  () => `https://vueschool.io/the-vuejs-3-master-class?friend=${affiliateId}`
)

const navigate = () => {
  window.open(fullUrl.value, "_blank")
}
</script>
