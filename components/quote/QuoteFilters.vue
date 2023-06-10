<script setup lang="ts">
const quoteStore = useQuoteStore();
</script>

<template>
  <div class="p-5 card rounded-md bg-slate-800">
    <div class="collapse collapse-arrow">
      <input type="checkbox" :checked="!useIsSmallScren()" />
      <div class="collapse-title font-semibold">Filter by Category</div>
      <ClientOnly>
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
      </ClientOnly>
    </div>
  </div>
</template>
