<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Shoes</h3>
    <div class="grid grid-cols-3 gap-1.5 mb-3">
      <button
        v-for="item in shoeOptions"
        :key="item.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md transition-all border text-center',
          currentShoes === item.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:shoes', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>
    <ColorSwatches :colors="shoeColors" :selected="currentColor" @select="$emit('update:color', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { ShoeType } from '~/types/avatar'
import { SHOE_OPTIONS } from '~/utils/constants'
import ColorSwatches from '../ui/ColorSwatches.vue'

defineProps<{
  currentShoes: ShoeType
  currentColor: string
}>()

defineEmits<{
  'update:shoes': [value: ShoeType]
  'update:color': [value: string]
}>()

const shoeOptions = SHOE_OPTIONS

const shoeColors = [
  { label: 'White', value: '#f8fafc', hex: '#f8fafc' },
  { label: 'Black', value: '#1e293b', hex: '#1e293b' },
  { label: 'Red', value: '#dc2626', hex: '#dc2626' },
  { label: 'Blue', value: '#2563eb', hex: '#2563eb' },
  { label: 'Brown', value: '#7c3aed', hex: '#7c3aed' },
  { label: 'Gray', value: '#64748b', hex: '#64748b' },
]
</script>
