<template>
  <div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Face Shape</h3>
    <div class="grid grid-cols-5 gap-1.5 mb-3">
      <button
        v-for="shape in faceShapes"
        :key="shape.value"
        :class="[
          'px-2 py-1.5 text-xs rounded-md transition-all border text-center',
          currentShape === shape.value
            ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
            : 'bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
        ]"
        @click="$emit('update:shape', shape.value)"
      >
        {{ shape.label }}
      </button>
    </div>
    <h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Skin Tone</h3>
    <ColorSwatches :colors="skinTones" :selected="currentSkin" @select="$emit('update:skin', $event)" />
  </div>
</template>

<script setup lang="ts">
import type { FaceShape } from '~/types/avatar'
import { FACE_SHAPES, SKIN_TONES } from '~/utils/constants'

defineProps<{
  currentShape: FaceShape
  currentSkin: string
}>()

defineEmits<{
  'update:shape': [value: FaceShape]
  'update:skin': [value: string]
}>()

const faceShapes = FACE_SHAPES
const skinTones = SKIN_TONES
</script>
