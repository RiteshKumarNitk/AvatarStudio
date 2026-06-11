<template>
  <div>
    <label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Environment</label>
    <div class="grid grid-cols-3 gap-2">
      <button
        v-for="bg in backgrounds"
        :key="bg.value"
        :class="[
          'p-2 rounded-lg border text-xs text-center transition-all',
          current === bg.value
            ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
            : 'border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)]'
        ]"
        @click="$emit('update:background', bg.value)"
      >
        <div
          class="w-full h-8 rounded-md mb-1"
          :style="{ backgroundColor: colors[bg.value] }"
        />
        {{ bg.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BackgroundStyle } from '~/types/avatar'
import { BACKGROUND_STYLES, BACKGROUND_COLORS } from '~/utils/constants'

defineProps<{
  current: BackgroundStyle
}>()

defineEmits<{
  'update:background': [value: BackgroundStyle]
}>()

const backgrounds = BACKGROUND_STYLES
const colors = BACKGROUND_COLORS
</script>