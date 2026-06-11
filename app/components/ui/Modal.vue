<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click.self="$emit('update:modelValue', false)"
      >
        <div class="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold">{{ title }}</h3>
            <button
              class="p-1 rounded-md hover:bg-[var(--color-border)] transition-colors"
              @click="$emit('update:modelValue', false)"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="text-xs text-[var(--color-text-secondary)] mb-4">{{ message }}</div>
          <div class="flex justify-end gap-2">
            <button
              class="px-3 py-1.5 text-xs rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors"
              @click="$emit('update:modelValue', false)"
            >
              {{ cancelText }}
            </button>
            <button
              class="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity"
              @click="$emit('confirm')"
            >
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
  confirm: []
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
