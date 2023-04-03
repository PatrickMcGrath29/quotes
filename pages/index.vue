<script lang="ts" setup>
import { Quote } from "~/types";

const ALL_REFERENCES_TAG = "All";

const allQuotes = await useQuotes();

const references: string[] = [
  ALL_REFERENCES_TAG,
  ...new Set(allQuotes.map((quote: Quote) => quote.reference)),
];

const selectedReference = ref(ALL_REFERENCES_TAG);
const setReference = (reference: string) => {
  selectedReference.value = reference;
};

const filteredQuotes = computed(() => {
  return selectedReference.value === ALL_REFERENCES_TAG
    ? allQuotes
    : allQuotes.filter(
        (quote: Quote) => quote.reference == selectedReference.value
      );
});
</script>

<template>
  <Container>
    <div class="my-2">
      <div class="text-center">
        <button
          @click="setReference(reference)"
          v-for="reference in references"
          class="px-3 py-2 m-1 rounded-md bg-stone-500"
          :class="{ '!bg-stone-700': reference === selectedReference }"
        >
          {{ reference }}
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-6 mt-4 mb-10"
    >
      <div
        v-for="quote in filteredQuotes"
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
