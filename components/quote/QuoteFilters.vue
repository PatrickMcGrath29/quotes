<script setup lang="ts">
const quoteStore = useQuoteStore()
</script>

<template>
  <div class="p-5 card rounded-md bg-slate-800">
    <div class="collapse collapse-arrow">
      <input type="checkbox" :checked="!useIsSmallScren()">
      <div class="collapse-title font-semibold">
        Filter by Category
      </div>
      <ClientOnly>
        <div class="collapse-content flex flex-wrap gap-2">
          <PillButton
            v-for="(category, idx) in quoteStore.categories"
            :key="idx"
            :click-handler="() => (quoteStore.activeCategory = category)"
            :is-active="category === quoteStore.activeCategory"
          >
            {{ category }}
          </PillButton>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>
