<script setup lang="ts">
const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const highlightedQuote = quoteStore.quotes[0];
</script>

<template>
  <QuoteCard
    :quote="highlightedQuote"
    class="bg-gradient-to-br from-sky-950 to-100% to-slate-800"
  >
    <template #heading>
      <h1 class="text-xl mb-3 text-center font-semibold">Quote of the Day</h1>
    </template>
  </QuoteCard>
</template>
