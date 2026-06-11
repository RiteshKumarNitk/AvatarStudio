<template>
  <div>
    <label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Build</label>
    <div class="grid grid-cols-2 gap-1.5 mb-4">
      <button
        v-for="opt in types"
        :key="opt.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md border transition-all',
          currentType === opt.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:type', opt.value)"
      >
        {{ opt.label }}
      </button>
    </div>
    <label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">
      Height: {{ Math.round(currentHeight * 100) }}%
    </label>
    <input
      type="range"
      min="0.8"
      max="1.2"
      step="0.01"
      :value="currentHeight"
      class="w-full accent-[var(--color-accent)]"
      @input="$emit('update:height', Number(($event.target as HTMLInputElement).value))"
    />
    <div class="flex justify-between text-[10px] text-[var(--color-text-secondary)] mt-1">
      <span>Short</span>
      <span>Tall</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BodyType } from '~/types/avatar'
import { BODY_TYPES } from '~/utils/constants'

defineProps<{
  currentType: BodyType
  currentHeight: number
}>()

defineEmits<{
  'update:type': [value: BodyType]
  'update:height': [value: number]
}>()

const types = BODY_TYPES
</script>