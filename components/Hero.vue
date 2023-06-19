<script setup lang="ts">
const quoteStore = useQuoteStore();
await useAsyncData("fetch-quotes", () => quoteStore.fetchQuotes());

const highlightedQuote = quoteStore.highlightedQuote();
</script>

<template>
  <div class="p-3 card rounded-md bg-slate-800">
    <div class="card-body">
      <div>
        <h1 class="text-xl mb-7 text-center font-semibold">Quote of the Day</h1>
        <ClientOnly>
          <QuoteContent :quote="highlightedQuote" />
          <QuoteLinks :quote="highlightedQuote" />
        </ClientOnly>
      </div>
      <hr class="border-slate-700 my-8" />
      <div class="mb-7">
        God has revealed termendous riches about who He is to faithful men and
        women of the past. This website aims to make some of these riches known
        to more of the body of Christ. May we find encouragement from the saints
        of the past, and then press on even further in our walk with Christ.
      </div>
      <div>
        <div class="mb-1 text-center italic">
          "... reaching forward to those things which are ahead, I press toward
          the goal for the prize of the upward call of God in Christ Jesus"
        </div>
        <div class="font-medium text-center">Philippians 3:13-14</div>
      </div>
    </div>
  </div>
</template>
