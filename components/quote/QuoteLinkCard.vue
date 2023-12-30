<script setup lang="ts">
import type { Quote } from '~/types'

defineProps<{
  quote: Quote
}>()
</script>

<template>
  <StyledCard>
    <NuxtLink :to="`/quote/${quote.uuid}`" class="hover:brightness-125 transition-all duration-300">
      <QuoteText :quote="quote" class="cursor-pointer" />
    </NuxtLink>
  </StyledCard>
</template>
