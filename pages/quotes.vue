<script lang="ts" setup>
const quoteStore = useQuoteStore()
await useAsyncData('fetch-quotes', () => quoteStore.fetchQuotes())

const columnSettings = computed(() => {
  return useColumnSettings(quoteStore.quotesForCategory.length)
})
</script>

<template>
  <Container>
    <div class="p-5 card rounded-md bg-slate-800 mb-8">
      <Filters />
    </div>
    <div class="gap-6 mb-8" :class="columnSettings">
      <QuoteLinkCard
        v-for="(quote, idx) in quoteStore.quotesForCategory" :key="idx" :quote="quote"
        class="mb-6 inline-block"
      />
    </div>
  </Container>
</template>
