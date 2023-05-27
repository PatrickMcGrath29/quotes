<script lang="ts" setup>
const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const columnSettings = computed(() => {
  return useColumnSettings(quoteStore.quotesForCategory.length);
});
</script>

<template>
  <Container>
    <Hero />
    <div class="gap-6 mt-4 mb-10" :class="columnSettings">
      <QuoteCard
        v-for="quote in quoteStore.quotesForCategory"
        class="hover:brightness-125 transition-all duration-300 select-text"
        :quote="quote"
      />
    </div>
  </Container>
</template>
