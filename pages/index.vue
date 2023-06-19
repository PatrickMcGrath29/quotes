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
    <QuoteFilters class="mb-8" />
    <div class="gap-6 mb-8" :class="columnSettings">
      <StyledCard
        v-for="quote in quoteStore.quotesForCategory"
        class="hover:brightness-125 transition-all duration-300 mb-6 inline-block"
      >
        <NuxtLink :to="`/quote/${quote.uuid}`">
          <QuoteContent :quote="quote" class="cursor-pointer" />
        </NuxtLink>
        <QuoteLinks :quote="quote" />
      </StyledCard>
    </div>
  </Container>
</template>
