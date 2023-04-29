<script setup lang="ts">
import { Quote } from "~/types";
import { useQuoteStore } from "~/store/quotes";

const route = useRoute();
const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const findQuote = (): Quote => {
  const quote = quoteStore.quotes.find((q: Quote) => q.uuid == route.params.id);

  return quote as Quote;
};

const quote = findQuote();
</script>

<template>
  <Container>
    <div class="flex items-center flex-col">
      <QuoteCard :quote="quote" class="text-lg" />
      <div class="my-3">
        <NuxtLink class="btn btn-ghost" to="/">
          <Icon name="ic:sharp-keyboard-backspace" size="1.5em" />
          <span class="p-1">All Quotes</span>
        </NuxtLink>
      </div>
    </div>
  </Container>
</template>
