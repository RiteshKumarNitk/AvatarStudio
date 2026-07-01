<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Hat</h3>
    <div class="grid grid-cols-3 gap-1.5 mb-3">
      <button
        v-for="item in hatOptions"
        :key="item.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md transition-all border text-center',
          currentHat === item.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:hat', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>
    <ColorSwatches :colors="hatColors" :selected="currentColor" @select="$emit('update:color', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { HatType } from '~/types/avatar'
import { HAT_OPTIONS } from '~/utils/constants'
import ColorSwatches from '../ui/ColorSwatches.vue'

defineProps<{
  currentHat: HatType
  currentColor: string
}>()

defineEmits<{
  'update:hat': [value: HatType]
  'update:color': [value: string]
}>()

const hatOptions = HAT_OPTIONS

const hatColors = [
  { label: 'Black', value: '#1e293b', hex: '#1e293b' },
  { label: 'Navy', value: '#1e3a5f', hex: '#1e3a5f' },
  { label: 'Red', value: '#dc2626', hex: '#dc2626' },
  { label: 'Blue', value: '#2563eb', hex: '#2563eb' },
  { label: 'Green', value: '#16a34a', hex: '#16a34a' },
  { label: 'White', value: '#f8fafc', hex: '#f8fafc' },
]
</script>
