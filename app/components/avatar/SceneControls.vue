<template>
  <OrbitControls
    ref="controlsRef"
    :enable-damping="true"
    :damping-factor="0.08"
    :min-distance="2"
    :max-distance="12"
    :min-polar-angle="0.1"
    :max-polar-angle="Math.PI / 2.1"
    :auto-rotate="autoRotate"
    :auto-rotate-speed="2"
  />
</template>

<script setup lang="ts">
defineProps<{
  autoRotate?: boolean
}>()

const controlsRef = ref()

function getControls() {
  return controlsRef.value?.instance ?? null
}

defineExpose({
  getControls,
  instance: controlsRef,
})
</script>
