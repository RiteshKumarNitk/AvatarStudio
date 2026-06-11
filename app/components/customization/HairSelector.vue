<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Hair Style</h3>
    <div class="grid grid-cols-5 gap-1.5 mb-3">
      <button
        v-for="hair in hairStyles"
        :key="hair.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md transition-all border text-center',
          currentStyle === hair.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:style', hair.value)"
      >
        {{ hair.label }}
      </button>
    </div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Hair Color</h3>
    <ColorSwatches :colors="hairColors" :selected="currentColor" @select="$emit('update:color', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { HairStyle } from '~/types/avatar'
import { HAIR_STYLES, HAIR_COLORS } from '~/utils/constants'

defineProps<{
  currentStyle: HairStyle
  currentColor: string
}>()

defineEmits<{
  'update:style': [value: HairStyle]
  'update:color': [value: string]
}>()

const hairStyles = HAIR_STYLES
const hairColors = HAIR_COLORS
</script>
