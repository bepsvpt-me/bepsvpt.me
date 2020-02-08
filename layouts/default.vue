<template>
  <div class="h-full flex flex-col">
    <nuxt class="container flex-grow px-4 py-6 mx-auto" />

    <footer class="py-3 bg-gray-300 flex justify-center">
      <span>bepsvpt.me</span>
      <span class="mx-1">@</span>
      <span v-text="new Date().getFullYear()" />
    </footer>
  </div>
</template>
