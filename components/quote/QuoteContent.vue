<template>
  <div>
    <p class="whitespace-pre-wrap">
      {{ quote.text }}
    </p>
    <h5
      v-if="quote.link || quote.reference?.link"
      class="text-sm text-blue-300 pt-1"
    >
      <a
        :href="quote.link || quote.reference?.link"
        class="align-middle"
        nofollow
      >
        Continue Reading
        <Icon name="ci:external-link" />
      </a>
    </h5>
    <h4 class="card-title text-base pt-4" v-if="quote.reference?.referenceName">
      {{ quote.reference.referenceName }}
    </h4>
    <h5 class="text-sm">by {{ quote.reference?.authorName || "Anonymous" }}</h5>
  </div>
</template>

<script setup lang="ts">
import { Quote } from "~/types";

interface QuoteCardProps {
  quote: Quote;
}

defineProps<QuoteCardProps>();
</script>
