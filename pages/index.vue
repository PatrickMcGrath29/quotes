<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface Quote extends ParsedContent {
  text: string;
  author: string;
  reference: string;
  size: Number;
}

interface Quotes extends ParsedContent {
  quotes: Quote[];
}

const { quotes } = await queryContent<Quotes>("quotes").findOne();
</script>

<template>
  <Container>
    <div
      class="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-6 mt-4 mb-10"
    >
      <div
        v-for="quote in quotes"
        :class="`max-md:col-auto col-span-${quote.size}`"
      >
        <div class="card bg-stone-700 rounded-md">
          <div class="card-body">
            <p>
              {{ quote.text }}
            </p>
            <h4 class="card-title text-base pt-4">
              {{ quote.reference }}
            </h4>
            <h5 class="text-sm">by {{ quote.author }}</h5>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
