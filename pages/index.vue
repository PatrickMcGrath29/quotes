<script lang="ts" setup>
import { useQuoteStore } from "~/store/quotes";

const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const columnSettings = computed(() => {
  return useColumnSettings(quoteStore.filteredQuotes.length);
});
</script>

<template>
  <Container>
    <Hero />
    <div class="gap-6 mt-4 mb-10" :class="columnSettings">
      <QuoteCard :quote="quote" v-for="quote in quoteStore.filteredQuotes" />
    </div>
  </Container>
</template>
