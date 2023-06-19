<template>
  <div>
    <p class="whitespace-pre-wrap">
      {{ quote.text }}
    </p>

    <h4 class="card-title text-base pt-4" v-if="quote.reference?.referenceName">
      {{ quote.reference.referenceName }}
    </h4>
    <h5 class="text-sm">by {{ quote.reference?.authorName || "Anonymous" }}</h5>

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
      <a
        :href="`/quote/${quote.uuid}`"
        class="hover:underline flex items-center gap-1"
      >
        <Icon name="ion:expand" />
        Expand
      </a>
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
