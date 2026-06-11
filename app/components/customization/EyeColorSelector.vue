<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Eye Color</h3>
    <ColorSwatches :colors="eyeColors" :selected="currentColor" @select="$emit('update:color', $event)" />
  </div>
</template>

<script setup lang="ts">
import { EYE_COLORS } from '~/utils/constants'

defineProps<{
  currentColor: string
}>()

defineEmits<{
  'update:color': [value: string]
}>()

const eyeColors = EYE_COLORS
</script>
