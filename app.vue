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
  <div>
    <Header />
    <NuxtPage />
  </div>
</template>
