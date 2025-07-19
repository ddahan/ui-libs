<template>
  <ClientOnly>
    <UButton
      v-if="!colorMode.unknown"
      square
      variant="ghost"
      :icon="icon"
      @click="toggleTheme"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = shallowRef(false)
const icon = toRef(() => isDark.value ? "i-ph-moon" : "i-ph-sun")

watchEffect(() => {
  const prefersDark = !import.meta.server
    && window.matchMedia('(prefers-color-scheme: dark)').matches

  isDark.value = colorMode.preference === 'system' && prefersDark
    || colorMode.preference === 'dark'
})

const toggleTheme = (): void => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>
