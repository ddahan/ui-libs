<template>
  <div>
    <UDropdown
      :ui="{ width: 'w-28' }"
      :items="items"
      :popper="{ placement: 'bottom-start' }"
    >
      <UButton
        icon="i-mdi-weather-night"
        :square="true"
        variant="ghost"
      />
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toMode = (mode: string) => {
  colorMode.preference = mode;
};

const items = [
  [
    {
      label: "Light",
      slot: "light",
      icon: "i-material-symbols-light-mode-outline",
      click: () => {
        toMode("light");
      },
    },
    {
      label: "Dark",
      icon: "i-material-symbols-dark-mode-outline",
      click: () => {
        toMode("dark");
      },
    },
    {
      label: "System",
      icon: "i-material-symbols-desktop-windows-outline",
      click: () => {
        toMode("system");
      },
    },
  ],
];
</script>
