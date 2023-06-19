<template>
  <div class="text-sm text-blue-300 pt-1 mt-3 flex gap-3">
    <a
      v-if="quote.link || quote.reference?.link"
      :href="quote.link || quote.reference?.link"
      class="flex items-center gap-1 hover:underline"
      nofollow
    >
      <Icon name="ci:external-link" />
      Continue Reading
    </a>
  </div>
</template>

<script setup lang="ts">
import { Quote } from "~/types";

interface QuoteCardProps {
  quote: Quote;
}

defineProps<QuoteCardProps>();
</script>
