<template>
  <TresGroup ref="avatarGroup" :position="[0, 0, 0]">
    <TresGroup :position="[0, 1.6, 0]">
      <TresGroup ref="headGroup">
        <TresMesh :position="[0, 0.35, 0]" :scale="headScale">
          <TresSphereGeometry :args="[0.3, 32, 32]" />
          <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
        </TresMesh>
        <TresMesh :position="[0.12, 0.15, 0.25]" :scale="[1, 0.8, 0.6]">
          <TresSphereGeometry :args="[0.05, 16, 16]" />
          <TresMeshStandardMaterial :color="config.eyeColor" :roughness="0.1" :metalness="0.3" />
        </TresMesh>
        <TresMesh :position="[-0.12, 0.15, 0.25]" :scale="[1, 0.8, 0.6]">
          <TresSphereGeometry :args="[0.05, 16, 16]" />
          <TresMeshStandardMaterial :color="config.eyeColor" :roughness="0.1" :metalness="0.3" />
        </TresMesh>
      </TresGroup>
      <HairMesh :style="config.hairStyle" :color="config.hairColor" />
    </TresGroup>
    <TresGroup :position="[0, 0.8, 0]">
      <TresMesh>
        <TresBoxGeometry :args="[0.6, 0.6, 0.35]" />
        <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.7" />
      </TresMesh>
    </TresGroup>
    <TresGroup :position="[-0.4, 1.1, 0]" :rotation-z="leftArmAngle">
      <TresMesh>
        <TresCylinderGeometry :args="[0.08, 0.1, 0.5, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
    </TresGroup>
    <TresGroup :position="[0.4, 1.1, 0]" :rotation-z="rightArmAngle">
      <TresMesh>
        <TresCylinderGeometry :args="[0.08, 0.1, 0.5, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
    </TresGroup>
    <TresGroup :position="[0, 0, 0]">
      <TresMesh :position="[-0.15, 0.4, 0]">
        <TresCylinderGeometry :args="[0.1, 0.12, 0.5, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
      <TresMesh :position="[0.15, 0.4, 0]">
        <TresCylinderGeometry :args="[0.1, 0.12, 0.5, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
    </TresGroup>
    <AccessoriesMesh
      :accessory="config.accessory"
      :accessory-color="config.accessoryColor"
      :hat="config.hat"
      :hat-color="config.hatColor"
      :shoes="config.shoes"
      :shoes-color="config.shoesColor"
    />
  </TresGroup>
</template>

<script setup lang="ts">
import HairMesh from './HairMesh.vue'
import AccessoriesMesh from './AccessoriesMesh.vue'
import type { AvatarConfig, AnimationName } from '~/types/avatar'
import { useLoop } from '@tresjs/core'

const props = defineProps<{
  config: AvatarConfig
  animation: AnimationName
  animationPlaying: boolean
  animationSpeed: number
}>()

const avatarGroup = ref<{ position: { y: number } }>()

const headScale = computed(() => {
  const shapes: Record<string, number> = {
    round: 1,
    oval: 0.85,
    square: 0.95,
    heart: 0.8,
    diamond: 0.75,
  }
  const s = shapes[props.config.faceShape] ?? 1
  return [s, s, s]
})

const leftArmAngle = ref(0.1)
const rightArmAngle = ref(-0.1)
const animTime = ref(0)

watch(() => props.animation, () => {
  animTime.value = 0
})

function getArmAngles(t: number, anim: AnimationName) {
  switch (anim) {
    case 'idle': {
      const breathe = Math.sin(t * 2) * 0.02
      return { left: 0.1 + breathe, right: -0.1 - breathe }
    }
    case 'walk': {
      const swing = Math.sin(t * 6) * 0.4
      return { left: 0.1 + swing, right: -0.1 - swing }
    }
    case 'run': {
      const swing = Math.sin(t * 12) * 0.6
      return { left: 0.1 + swing, right: -0.1 - swing }
    }
    case 'wave': {
      const waveT = Math.min(t / 2, 1)
      const waveAngle = Math.sin(t * 4) * 0.3 * waveT
      return { left: -0.8 + waveAngle, right: -0.1 }
    }
    case 'sit':
      return { left: 0.1, right: -0.1 }
    case 'dance': {
      const dance = Math.sin(t * 4) * 0.5
      return { left: 0.1 + dance, right: -0.1 - dance }
    }
    case 'jump': {
      const jumpT = Math.min(t / 0.6, 1)
      const phase = jumpT < 0.5 ? jumpT * 2 : 2 - jumpT * 2
      return { left: 0.1 + phase * 0.3, right: -0.1 - phase * 0.3 }
    }
    default:
      return { left: 0.1, right: -0.1 }
  }
}

useLoop(({ delta }) => {
  if (!props.animationPlaying) return

  animTime.value += delta * props.animationSpeed

  const { left, right } = getArmAngles(animTime.value, props.animation)
  leftArmAngle.value = left
  rightArmAngle.value = right

  const breathe = Math.sin(animTime.value * 2) * 0.003
  if (avatarGroup.value) {
    avatarGroup.value.position.y = breathe
  }
})
</script>
