<script setup lang="ts">
defineProps<{ link: string }>();
</script>

<template>
  <a :href="link">
    <slot />
  </a>
</template>
