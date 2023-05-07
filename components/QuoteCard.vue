<template>
  <div class="inline-block my-2 card bg-slate-800 rounded-md">
    <div class="card-body">
      <p class="whitespace-pre-wrap">
        {{ quote.text }}
      </p>
      <h5 v-if="quote.link" class="text-sm text-blue-300 pt-1">
        <a :href="quote.link" class="align-middle" nofollow>
          Continue Reading
          <Icon name="ci:external-link" />
        </a>
      </h5>

      <h4 class="card-title text-base pt-4" v-if="quote.reference.author_name">
        {{ quote.reference.reference_name }}
      </h4>
      <h5 class="text-sm" v-if="quote.reference.author_name">
        by {{ quote.reference.author_name }}
      </h5>
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
