<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Style</h3>
    <div class="grid grid-cols-3 gap-1.5 mb-3">
      <button
        v-for="item in clothingOptions"
        :key="item.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md transition-all border text-center',
          currentStyle === item.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:style', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>
    <ColorSwatches :colors="clothingColors" :selected="currentColor" @select="$emit('update:color', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { ClothingStyle } from '~/types/avatar'
import { CLOTHING_OPTIONS } from '~/utils/constants'
import ColorSwatches from '../ui/ColorSwatches.vue'

defineProps<{
  currentStyle: ClothingStyle
  currentColor: string
}>()

defineEmits<{
  'update:style': [value: ClothingStyle]
  'update:color': [value: string]
}>()

const clothingOptions = CLOTHING_OPTIONS

const clothingColors = [
  { label: 'Blue', value: '#3b82f6', hex: '#3b82f6' },
  { label: 'Red', value: '#ef4444', hex: '#ef4444' },
  { label: 'Green', value: '#22c55e', hex: '#22c55e' },
  { label: 'Purple', value: '#a855f7', hex: '#a855f7' },
  { label: 'Yellow', value: '#eab308', hex: '#eab308' },
  { label: 'Pink', value: '#ec4899', hex: '#ec4899' },
  { label: 'Orange', value: '#f97316', hex: '#f97316' },
  { label: 'Teal', value: '#14b8a6', hex: '#14b8a6' },
  { label: 'White', value: '#f8fafc', hex: '#f8fafc' },
  { label: 'Black', value: '#1e293b', hex: '#1e293b' },
  { label: 'Gray', value: '#64748b', hex: '#64748b' },
  { label: 'Navy', value: '#1e3a5f', hex: '#1e3a5f' },
]
</script>
