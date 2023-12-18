<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Quotes - ${titleChunk}` : 'Quotes'
  },
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div tabindex="0" class="outline-none">
    <Header />
    <NuxtPage />
  </div>
</template>
