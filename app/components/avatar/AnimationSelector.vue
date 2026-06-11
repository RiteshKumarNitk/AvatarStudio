<template>
  <div class="flex items-center gap-1">
    <button
      v-for="anim in animations"
      :key="anim.name"
      :class="[
        'px-2 py-1 text-xs rounded-md transition-all border',
        current === anim.name
          ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
          : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
      ]"
      @click="$emit('select', anim.name)"
    >
      {{ anim.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { AnimationName } from '~/types/avatar'
import { ANIMATIONS } from '~/utils/constants'

defineProps<{
  current: AnimationName
}>()

defineEmits<{
  select: [name: AnimationName]
}>()

const animations = ANIMATIONS
</script>
