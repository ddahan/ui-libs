<template>
  <div
    class="sticky top-0 z-20 border-t border-transparent backdrop-blur-md shadow-sm shadow-gray-200"
  >
    <div class="flex items-center justify-between px-4 md:px-6 py-2">
      <div class="md:invisible">
        <UButton
          icon="i-material-symbols-format-list-bulleted"
          :square="true"
          variant="outline"
        />
      </div>
      <div class="flex items-center justify-end gap-2">
        <UButton
          icon="i-mdi-github"
          :square="true"
          variant="ghost"
          to="https://volta.net"
          target="_blank"
        />

        <ThemeSelector />

        <UButton
          variant="ghost"
          label="About"
          to="https://volta.net"
          target="_blank"
        />

        <UButton
          icon="i-bx-coffee-togo"
          label="Buy Me a Coffee"
          :trailing="false"
          to="https://volta.net"
          target="_blank"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
