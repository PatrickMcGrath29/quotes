<script setup lang="ts">
interface PillButtonProps {
  isActive: boolean
  clickHandler: Function
}

defineProps<PillButtonProps>()
</script>

<template>
  <button
    class="px-2.5 py-1.5 text-base rounded-md bg-slate-600 hover:bg-slate-700 transition-all"
    :class="{
      '!bg-slate-900': isActive,
    }"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>
