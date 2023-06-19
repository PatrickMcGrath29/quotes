<template>
  <div>
    <p class="whitespace-pre-wrap">
      {{ quote.text }}
    </p>

    <div class="pt-4">
      <h4 class="card-title text-base" v-if="quote.reference?.referenceName">
        {{ quote.reference.referenceName }}
      </h4>
      <h5 class="text-sm">
        by {{ quote.reference?.authorName || "Anonymous" }}
      </h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Quote } from "~/types";

defineProps<{ quote: Quote }>();
</script>
