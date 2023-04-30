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
      <NuxtLink
        v-for="quote in quoteStore.filteredQuotes"
        :to="`/quote/${quote.uuid}`"
        class="hover:brightness-125 transition-all duration-300"
      >
        <QuoteCard :quote="quote" />
      </NuxtLink>
    </div>
  </Container>
</template>
