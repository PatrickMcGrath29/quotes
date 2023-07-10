<script setup lang="ts">
import { Quote } from "~/types";

const route = useRoute();
const router = useRouter();

const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const selectedQuote = computed(() => {
  const quote = quoteStore.quotes.find((q: Quote) => q.uuid == route.params.id);

  if (quote === undefined) {
    throw createError({ statusCode: 404, statusMessage: "Quote not found." });
  }

  return quote;
});

const relatedQuotes = computed(() => {
  return quoteStore.quotes.filter((q) => {
    if (
      q.uuid == selectedQuote.value.uuid ||
      selectedQuote.value.reference === undefined
    )
      return false;

    return q.reference?.authorName == selectedQuote.value.reference?.authorName;
  });
});

const title = computed(() =>
  selectedQuote.value.reference != undefined
    ? selectedQuote.value.reference?.authorName
    : undefined
);

useSeoMeta({
  description: selectedQuote.value.text,
  ogDescription: selectedQuote.value.text,
  ogTitle: title,
  title: title.value,
});
</script>

<template>
  <Container>
    <div class="flex items-center flex-col my-5">
      <StyledCard>
        <QuoteContent :quote="selectedQuote" />
        <QuoteLinks :quote="selectedQuote" />
      </StyledCard>
      <div class="my-8">
        <NuxtLink
          class="btn btn-ghost"
          @click="() => useNavigateBackToPath('/')"
        >
          <Icon name="ic:sharp-keyboard-backspace" size="1.5em" />
          <span class="p-1">All Quotes</span>
        </NuxtLink>
      </div>
      <template v-if="relatedQuotes.length > 0">
        <div class="divider mb-8">
          <h1 class="font-semibold text-xl">
            More from {{ selectedQuote.reference?.authorName }}
          </h1>
        </div>

        <div :class="useColumnSettings(relatedQuotes.length)" class="gap-8">
          <StyledCard v-for="quote in relatedQuotes" class="mb-8 inline-block">
            <QuoteContent :quote="quote" />
            <QuoteLinks :quote="quote" />
          </StyledCard>
        </div>
      </template>
    </div>
  </Container>
</template>
