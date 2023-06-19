<template>
  <div>
    <p class="whitespace-pre-wrap">
      {{ quote.text }}
    </p>

    <h4 class="card-title text-base pt-4" v-if="quote.reference?.referenceName">
      {{ quote.reference.referenceName }}
    </h4>
    <h5 class="text-sm">by {{ quote.reference?.authorName || "Anonymous" }}</h5>
  </div>
</template>

<script setup lang="ts">
import { Quote } from "~/types";

defineProps<{ quote: Quote }>();
</script>
