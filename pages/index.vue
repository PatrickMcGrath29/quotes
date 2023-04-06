<script lang="ts" setup>
import { Quote } from "~/types";

const ALL_CATEGORIES_TAG = "All";

const allQuotes = await useQuotes();

const categories: string[] = [
  ALL_CATEGORIES_TAG,
  ...new Set(allQuotes.flatMap((quote: Quote) => quote.categories).sort()),
];

const selectedCategory = ref(ALL_CATEGORIES_TAG);
const setCategory = (category: string) => {
  selectedCategory.value = category;
};

const filteredQuotes = computed(() => {
  return selectedCategory.value === ALL_CATEGORIES_TAG
    ? allQuotes
    : allQuotes.filter((quote: Quote) =>
        quote.categories.includes(selectedCategory.value)
      );
});
</script>

<template>
  <Container>
    <div class="mt-6 mb-10 p-3 card rounded-md bg-slate-800">
      <div class="card-body">
        <div class="mb-8">
          <div class="mb-7">
            God has revealed termendous riches about who He is to faithful men
            and women of the past. This website aims to make some of these
            riches known to more of the body of Christ. May we find
            encouragement from the saints of the past to press on even further
            in our walk with Christ.
          </div>
          <div>
            <div class="italic mb-1">
              "... reaching forward to those things which are ahead, I press
              toward the goal for the prize of the upward call of God in Christ
              Jesus"
            </div>
            <div class="font-medium">Philippians 3:13-14</div>
          </div>
        </div>
        <hr class="border-slate-700" />
        <div>
          <div class="my-8">Filter by Category</div>
          <button
            @click="setCategory(category)"
            v-for="category in categories"
            class="px-3 py-2 m-1 rounded-md bg-slate-600 hover:bg-slate-700 transition-all"
            :class="{ '!bg-slate-900': category === selectedCategory }"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 grid-flow-row-dense gap-6 mt-4 mb-10"
    >
      <div
        v-for="quote in filteredQuotes"
        :class="`max-md:col-auto col-span-${quote.size}`"
      >
        <div class="card bg-slate-800 rounded-md">
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
