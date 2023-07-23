<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow content-start">
    <LibraryCard
      v-for="library in libraries"
      :library="library"
    />
  </div>
</template>
