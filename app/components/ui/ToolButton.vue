<template>
  <button
    class="p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    :title="tooltip"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  tooltip?: string
}>()

defineEmits<{
  click: []
}>()
</script>
