<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Accessory</h3>
    <div class="grid grid-cols-3 gap-1.5 mb-3">
      <button
        v-for="item in accessoryOptions"
        :key="item.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md transition-all border text-center',
          currentAccessory === item.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:accessory', item.value)"
      >
        {{ item.label }}
      </button>
    </div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>
    <ColorSwatches :colors="accessoryColors" :selected="currentColor" @select="$emit('update:color', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { AccessoryType } from '~/types/avatar'
import { ACCESSORY_OPTIONS } from '~/utils/constants'
import ColorSwatches from '../ui/ColorSwatches.vue'

defineProps<{
  currentAccessory: AccessoryType
  currentColor: string
}>()

defineEmits<{
  'update:accessory': [value: AccessoryType]
  'update:color': [value: string]
}>()

const accessoryOptions = ACCESSORY_OPTIONS

const accessoryColors = [
  { label: 'Gold', value: '#fbbf24', hex: '#fbbf24' },
  { label: 'Silver', value: '#9ca3af', hex: '#9ca3af' },
  { label: 'Rose Gold', value: '#e8a0b4', hex: '#e8a0b4' },
  { label: 'Black', value: '#1e293b', hex: '#1e293b' },
  { label: 'White', value: '#f8fafc', hex: '#f8fafc' },
]
</script>
