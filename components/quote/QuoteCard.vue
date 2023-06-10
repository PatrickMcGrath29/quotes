<template>
  <div class="inline-block mb-6 card bg-slate-800 rounded-md">
    <div class="card-body">
      <slot name="heading" />
      <QuoteContent :quote="quote" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Quote } from "~/types";

interface QuoteCardProps {
  quote: Quote;
}

defineProps<QuoteCardProps>();
</script>
