<script setup lang="ts">
import type { Quote } from '~/types'

defineProps<{ quote: Quote; withLink?: boolean }>()
</script>

<template>
  <NuxtLink v-if="withLink" :to="`/quote/${quote.uuid}`">
    <QuoteContent :quote="quote" class="cursor-pointer " />
  </NuxtLink>
  <QuoteContent v-else :quote="quote" />
  <QuoteLinks :quote="quote" />
</template>
