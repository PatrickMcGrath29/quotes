<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface Quote extends ParsedContent {
  text: string;
  author: string;
  reference: string;
  size: Number;
}

interface Quotes extends ParsedContent {
  body: Quote[];
}

const quotes = await queryContent<Quotes>("quotes").findOne();
</script>

<template>
  <Container>
    <div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-4">
      <div
        v-for="quote in quotes.body"
        :class="`max-md:col-auto col-span-${quote.size}`"
      >
        <div class="bg-neutral hover:bg-opacity-80 shadow-xl rounded-md">
          <div class="card-body">
            <p>
              {{ quote.text }}
            </p>
            <h4 class="card-title text-base">
              {{ quote.author }}
            </h4>
            <h4 class="card-title text-base">
              {{ quote.reference }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
