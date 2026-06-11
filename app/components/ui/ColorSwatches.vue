<template>
  <div class="flex flex-wrap gap-1.5">
    <button
      v-for="color in colors"
      :key="color.value"
      :class="[
        'w-6 h-6 rounded-full border-2 transition-all',
        selected === color.value
          ? 'border-[var(--color-accent)] scale-110'
          : 'border-transparent hover:scale-110'
      ]"
      :style="{ backgroundColor: color.hex }"
      :title="color.label"
      @click="$emit('select', color.value)"
    />
  </div>
</template>

<script setup lang="ts">
import type { ColorOption } from '~/types/avatar'

defineProps<{
  colors: ColorOption[]
  selected: string
}>()

defineEmits<{
  select: [value: string]
}>()
</script>
