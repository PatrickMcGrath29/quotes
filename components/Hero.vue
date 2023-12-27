<script setup lang="ts">
const quoteStore = useQuoteStore()
await useAsyncData('fetch-quotes', () => quoteStore.fetchQuotes())

const highlightedQuote = quoteStore.highlightedQuote()
</script>

<template>
  <StyledCard>
    <div>
      <h1 class="text-xl mb-7 text-center font-semibold">
        Quote of the Day
      </h1>
      <ClientOnly>
        <QuoteCard :quote="highlightedQuote" :with-link="true" />
      </ClientOnly>
    </div>
  </StyledCard>
</template>
