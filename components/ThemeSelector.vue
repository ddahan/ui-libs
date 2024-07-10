<template>
  <ClientOnly>
    <UButton
      v-if="!colorMode.unknown"
      square
      variant="ghost"
      :icon="iconMap[colorMode.preference]"
      @click="setNextColorPreference"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const iconMap: any = {
  system: "i-ph-sun-dim-fill",
  dark: "i-ph-moon",
  light: "i-ph-sun",
}

const setNextColorPreference = (): void => {
  const nextColorMap: any = {
    dark: "light",
    light: "system",
    system: "dark",
  }
  colorMode.preference = nextColorMap[colorMode.preference]
}
</script>
