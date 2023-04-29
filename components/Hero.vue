<template>
  <div class="mb-10 p-3 card rounded-md bg-slate-800">
    <div class="card-body">
      <div class="mb-8">
        <div class="mb-7">
          God has revealed termendous riches about who He is to faithful men and
          women of the past. This website aims to make some of these riches
          known to more of the body of Christ. May we find encouragement from
          the saints of the past, and then press on even further in our walk
          with Christ.
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
      <ClientOnly>
        <div class="collapse collapse-arrow">
          <input type="checkbox" :checked="!useIsSmallScren()" />
          <div class="collapse-title font-semibold">Filter by Category</div>
          <div class="collapse-content flex flex-wrap gap-2">
            <button
              @click="quoteStore.activeCategory = category"
              v-for="category in quoteStore.categories"
              class="px-2.5 py-1.5 text-base rounded-md bg-slate-600 hover:bg-slate-700 transition-all"
              :class="{
                '!bg-slate-900': category === quoteStore.activeCategory,
              }"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuoteStore } from "~/store/quotes";

const quoteStore = useQuoteStore();
</script>
