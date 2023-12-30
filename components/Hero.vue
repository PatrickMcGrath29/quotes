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
        <NuxtLink :to="`/quote/${highlightedQuote.uuid}`" class="cursor-pointer">
          <QuoteText :quote="highlightedQuote" />
        </NuxtLink>
      </ClientOnly>
    </div>
  </StyledCard>
</template>
