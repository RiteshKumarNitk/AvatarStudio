<template>
  <div>
    <label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Style</label>
    <div class="grid grid-cols-3 gap-1.5 mb-3">
      <button
        v-for="opt in styles"
        :key="opt.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md border transition-all',
          currentStyle === opt.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:style', opt.value)"
      >
        {{ opt.label }}
      </button>
    </div>
    <label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Color</label>
    <ColorSwatches
      :colors="colors"
      :selected="currentColor"
      @select="$emit('update:color', $event)"
    />
  </div>
</template>

<script setup lang="ts">
import type { BeardStyle } from '~/types/avatar'
import { BEARD_STYLES, BEARD_COLORS } from '~/utils/constants'
import ColorSwatches from '../ui/ColorSwatches.vue'

defineProps<{
  currentStyle: BeardStyle
  currentColor: string
}>()

defineEmits<{
  'update:style': [value: BeardStyle]
  'update:color': [value: string]
}>()

const styles = BEARD_STYLES
const colors = BEARD_COLORS.map(c => ({ label: c.label, value: c.value, hex: c.value }))
</script>