<script setup lang="ts">
import type { Quote } from '~/types'

defineProps<{
  quote: Quote
}>()
</script>

<template>
  <div>
    <p class="whitespace-pre-wrap">
      {{ quote.text }}
    </p>

    <div class="pt-4">
      <h4 v-if="quote.reference?.referenceName" class="card-title text-base">
        {{ quote.reference.referenceName }}
      </h4>
      <h5 class="text-sm">
        by {{ quote.reference?.authorName || "Anonymous" }}
      </h5>
    </div>
  </div>
</template>
