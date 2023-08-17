<template>
  <div class="prose prose-a:text-primary-500 dark:prose-a:text-primary-400 prose-p:leading-5 prose-p:text-sm prose-h2:mb-8 prose-h3:mb-0 dark:prose-invert">
    <h2 class="decorated">
      How does it work?
    </h2>
    <h3>Filtering Libraries</h3>
    <p>
      Select any available feature filter on the left menu to start filtering libraries, according to your requirements.
    </p>
    <h3>Getting information</h3>
    <p>
      You can see library features directly on displayed cards. You may have more
      informations by clicking onto elements of those cards. For example, you can display the detailed list of all available components by clicking on the component score.
    </p>
    <h3>Filter Definition</h3>
    <p>Some filters may be less explicit that others, here are short definitions:</p>

    <p v-for="buttonFilter in buttonFilters">
      <div
        v-if="buttonFilter.help"
        class="flex gap-1 items-center text-primary-500 dark:text-primary-400 font-medium text-sm"
      >
        <UIcon :name="buttonFilter.icon" />
        <div>{{ buttonFilter.label }}</div>
      </div>
      <div>{{ buttonFilter.help }}</div>
    </p>

    <h3>More information</h3>
    <p>
      If you need more information about the project itself (who I am, contributions,
      support, ...), visit the
      <NuxtLink
        to="https://volta.net"
        target="_blank"
      >
        Project Github Page
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { buttonFilters } from "@/data/filters";
</script>
