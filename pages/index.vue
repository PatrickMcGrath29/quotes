<script lang="ts" setup>
const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const columnSettings = computed(() => {
  return useColumnSettings(quoteStore.quotesForCategory.length);
});
</script>

<template>
  <Container>
    <Hero class="mb-8" />
    <HighlightedQuote class="mb-8" />
    <div class="gap-6 mb-8" :class="columnSettings">
      <QuoteCard
        v-for="quote in quoteStore.quotesForCategory"
        class="hover:brightness-125 transition-all duration-300"
        :quote="quote"
      />
    </div>
  </Container>
</template>
