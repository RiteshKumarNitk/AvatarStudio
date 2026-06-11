<template>
  <TresGroup ref="avatarGroup" :position="[0, 0, 0]" :scale="bodyScale">
    <!-- Feet -->
    <TresGroup :position="[-0.12, 0.06, 0.06]">
      <TresMesh :scale="[1.3, 0.3, 1.8]">
        <TresSphereGeometry :args="[0.08, 12, 12]" />
        <TresMeshStandardMaterial :color="config.shoesColor" :roughness="0.8" />
      </TresMesh>
    </TresGroup>
    <TresGroup :position="[0.12, 0.06, 0.06]">
      <TresMesh :scale="[1.3, 0.3, 1.8]">
        <TresSphereGeometry :args="[0.08, 12, 12]" />
        <TresMeshStandardMaterial :color="config.shoesColor" :roughness="0.8" />
      </TresMesh>
    </TresGroup>

    <!-- Legs -->
    <TresGroup :position="[-0.13, 0.4, 0]" :rotation-x="leftLegAngle">
      <TresMesh>
        <TresCylinderGeometry :args="[0.09, 0.11, 0.55, 10]" />
        <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.7" />
      </TresMesh>
    </TresGroup>
    <TresGroup :position="[0.13, 0.4, 0]" :rotation-x="rightLegAngle">
      <TresMesh>
        <TresCylinderGeometry :args="[0.09, 0.11, 0.55, 10]" />
        <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.7" />
      </TresMesh>
    </TresGroup>

    <!-- Torso (clothing shape variation) -->
    <TresGroup :position="[0, 1.0, 0]">
      <template v-if="config.clothing === 'tShirt'">
        <TresMesh>
          <TresCylinderGeometry :args="[0.25, 0.38, 0.65, 12, 1]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.7" />
        </TresMesh>
      </template>
      <template v-else-if="config.clothing === 'hoodie'">
        <TresMesh :position="[0, 0.02, 0]">
          <TresCylinderGeometry :args="[0.3, 0.42, 0.68, 12, 1]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.9" />
        </TresMesh>
        <TresMesh :position="[0, 0.38, 0.08]" :scale="[0.8, 0.5, 0.6]">
          <TresSphereGeometry :args="[0.12, 12, 12]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.9" />
        </TresMesh>
      </template>
      <template v-else-if="config.clothing === 'jacket'">
        <TresMesh>
          <TresCylinderGeometry :args="[0.3, 0.44, 0.67, 12, 1]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.5" />
        </TresMesh>
        <TresMesh :position="[0, 0.3, 0.08]" :scale="[0.9, 0.3, 0.5]">
          <TresSphereGeometry :args="[0.12, 12, 12]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.5" />
        </TresMesh>
      </template>
      <template v-else-if="config.clothing === 'suit'">
        <TresMesh>
          <TresCylinderGeometry :args="[0.22, 0.36, 0.68, 12, 1]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.3" :metalness="0.2" />
        </TresMesh>
        <TresMesh :position="[0, 0.32, 0.06]">
          <TresBoxGeometry :args="[0.04, 0.05, 0.01]" />
          <TresMeshStandardMaterial :color="'#ffffff'" />
        </TresMesh>
      </template>
      <template v-else-if="config.clothing === 'tankTop'">
        <TresMesh>
          <TresCylinderGeometry :args="[0.2, 0.32, 0.55, 12, 1]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.7" />
        </TresMesh>
      </template>
      <template v-else-if="config.clothing === 'dress'">
        <TresMesh>
          <TresCylinderGeometry :args="[0.22, 0.5, 0.75, 12, 1]" />
          <TresMeshStandardMaterial :color="config.clothingColor" :roughness="0.6" />
        </TresMesh>
      </template>
    </TresGroup>

    <!-- Neck -->
    <TresMesh :position="[0, 1.5, 0]">
      <TresCylinderGeometry :args="[0.1, 0.13, 0.1, 10]" />
      <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
    </TresMesh>

    <!-- Head group -->
    <TresGroup :position="[0, 1.75, 0]">
      <TresGroup ref="headGroup">
        <TresMesh :position="[0, 0.25, 0]" :scale="headScale">
          <TresSphereGeometry :args="[0.28, 32, 32]" />
          <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
        </TresMesh>
        <!-- Eyes -->
        <TresMesh :position="[0.11, 0.18, 0.24]" :scale="[1, 0.8, 0.6]">
          <TresSphereGeometry :args="[0.045, 16, 16]" />
          <TresMeshStandardMaterial :color="config.eyeColor" :roughness="0.1" :metalness="0.3" />
        </TresMesh>
        <TresMesh :position="[-0.11, 0.18, 0.24]" :scale="[1, 0.8, 0.6]">
          <TresSphereGeometry :args="[0.045, 16, 16]" />
          <TresMeshStandardMaterial :color="config.eyeColor" :roughness="0.1" :metalness="0.3" />
        </TresMesh>
        <!-- Nose -->
        <TresMesh :position="[0, 0.15, 0.27]">
          <TresConeGeometry :args="[0.025, 0.04, 8]" />
          <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.7" />
        </TresMesh>
        <!-- Mouth -->
        <TresMesh :position="[0, 0.07, 0.26]" :rotation="[0.1, 0, 0]">
          <TresTorusGeometry :args="[0.05, 0.008, 6, 12, Math.PI]" />
          <TresMeshStandardMaterial :color="'#c47a7a'" :roughness="0.6" />
        </TresMesh>
        <!-- Eyebrows -->
        <TresMesh :position="[0.1, 0.28, 0.25]" :rotation="[0, 0, -0.15]" :scale="[1, 0.3, 0.3]">
          <TresSphereGeometry :args="[0.035, 8, 8]" />
          <TresMeshStandardMaterial :color="config.hairColor" :roughness="0.8" />
        </TresMesh>
        <TresMesh :position="[-0.1, 0.28, 0.25]" :rotation="[0, 0, 0.15]" :scale="[1, 0.3, 0.3]">
          <TresSphereGeometry :args="[0.035, 8, 8]" />
          <TresMeshStandardMaterial :color="config.hairColor" :roughness="0.8" />
        </TresMesh>
        <!-- Ears -->
        <TresMesh :position="[-0.28, 0.15, 0]">
          <TresSphereGeometry :args="[0.04, 8, 8]" />
          <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
        </TresMesh>
        <TresMesh :position="[0.28, 0.15, 0]">
          <TresSphereGeometry :args="[0.04, 8, 8]" />
          <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
        </TresMesh>
        <!-- Beard -->
        <template v-if="config.beard === 'stubble'">
          <TresMesh :position="[0, 0.02, 0.23]" :scale="[1.5, 0.5, 1]">
            <TresSphereGeometry :args="[0.05, 8, 8]" />
            <TresMeshStandardMaterial :color="config.beardColor ?? config.hairColor" :roughness="0.9" />
          </TresMesh>
        </template>
        <template v-else-if="config.beard === 'short'">
          <TresMesh :position="[0, 0.02, 0.24]" :scale="[1.8, 0.7, 1.2]">
            <TresSphereGeometry :args="[0.06, 8, 8]" />
            <TresMeshStandardMaterial :color="config.beardColor ?? config.hairColor" :roughness="0.9" />
          </TresMesh>
        </template>
        <template v-else-if="config.beard === 'goatee'">
          <TresMesh :position="[0, 0.03, 0.26]">
            <TresConeGeometry :args="[0.035, 0.06, 8]" />
            <TresMeshStandardMaterial :color="config.beardColor ?? config.hairColor" :roughness="0.9" />
          </TresMesh>
        </template>
        <template v-else-if="config.beard === 'full'">
          <TresMesh :position="[0, -0.01, 0.2]" :scale="[2, 1.2, 1.5]">
            <TresSphereGeometry :args="[0.07, 8, 8]" />
            <TresMeshStandardMaterial :color="config.beardColor ?? config.hairColor" :roughness="0.9" />
          </TresMesh>
          <TresMesh :position="[0, -0.08, 0.15]" :scale="[1.5, 0.8, 1]">
            <TresSphereGeometry :args="[0.06, 8, 8]" />
            <TresMeshStandardMaterial :color="config.beardColor ?? config.hairColor" :roughness="0.9" />
          </TresMesh>
        </template>
      </TresGroup>
      <HairMesh :style="config.hairStyle" :color="config.hairColor" />
    </TresGroup>

    <!-- Arms -->
    <TresGroup :position="[-0.4, 1.25, 0]" :rotation-z="leftArmAngle">
      <TresMesh :position="[0, -0.25, 0]">
        <TresCylinderGeometry :args="[0.065, 0.08, 0.45, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
      <TresMesh :position="[0, -0.48, 0]">
        <TresSphereGeometry :args="[0.055, 8, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
    </TresGroup>
    <TresGroup :position="[0.4, 1.25, 0]" :rotation-z="rightArmAngle">
      <TresMesh :position="[0, -0.25, 0]">
        <TresCylinderGeometry :args="[0.065, 0.08, 0.45, 8]" />
        <TresMeshStandardMaterial :color="config.skinTone" :roughness="0.6" />
      </TresMesh>
      <TresMesh :position="[0, -0.48, 0]">
        <TresSphereGeometry :args="[0.055, 8, 8]" />
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

const avatarGroup = ref<{ position: { y: number }; scale: { set: (x: number, y: number, z: number) => void } }>()

const bodyScale = computed(() => {
  const h = props.config.bodyHeight ?? 1
  const w = props.config.bodyType === 'slim' ? 0.85 : props.config.bodyType === 'athletic' ? 1.05 : props.config.bodyType === 'heavy' ? 1.15 : 1
  return [w, h, w]
})

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
const leftLegAngle = ref(0)
const rightLegAngle = ref(0)
const animTime = ref(0)

watch(() => props.animation, () => {
  animTime.value = 0
})

function getAngles(t: number, anim: AnimationName) {
  switch (anim) {
    case 'idle': {
      const breathe = Math.sin(t * 2) * 0.02
      return {
        leftArm: 0.1 + breathe, rightArm: -0.1 - breathe,
        leftLeg: 0, rightLeg: 0,
      }
    }
    case 'walk': {
      const swing = Math.sin(t * 6) * 0.4
      const legSwing = Math.sin(t * 6) * 0.25
      return {
        leftArm: 0.1 + swing, rightArm: -0.1 - swing,
        leftLeg: -legSwing, rightLeg: legSwing,
      }
    }
    case 'run': {
      const swing = Math.sin(t * 12) * 0.6
      const legSwing = Math.sin(t * 12) * 0.4
      return {
        leftArm: 0.1 + swing, rightArm: -0.1 - swing,
        leftLeg: -legSwing, rightLeg: legSwing,
      }
    }
    case 'wave': {
      const waveT = Math.min(t / 2, 1)
      const waveAngle = Math.sin(t * 4) * 0.3 * waveT
      return {
        leftArm: -0.8 + waveAngle, rightArm: -0.1,
        leftLeg: 0, rightLeg: 0,
      }
    }
    case 'sit':
      return {
        leftArm: 0.1, rightArm: -0.1,
        leftLeg: 0.2, rightLeg: -0.2,
      }
    case 'dance': {
      const dance = Math.sin(t * 4) * 0.5
      const legDance = Math.sin(t * 4) * 0.15
      return {
        leftArm: 0.1 + dance, rightArm: -0.1 - dance,
        leftLeg: legDance, rightLeg: -legDance,
      }
    }
    case 'jump': {
      const jumpT = Math.min(t / 0.6, 1)
      const phase = jumpT < 0.5 ? jumpT * 2 : 2 - jumpT * 2
      return {
        leftArm: 0.1 + phase * 0.3, rightArm: -0.1 - phase * 0.3,
        leftLeg: phase * 0.2, rightLeg: -phase * 0.2,
      }
    }
    default:
      return {
        leftArm: 0.1, rightArm: -0.1,
        leftLeg: 0, rightLeg: 0,
      }
  }
}

useLoop(({ delta }) => {
  if (!props.animationPlaying) return

  animTime.value += delta * props.animationSpeed

  const { leftArm, rightArm, leftLeg, rightLeg } = getAngles(animTime.value, props.animation)
  leftArmAngle.value = leftArm
  rightArmAngle.value = rightArm
  leftLegAngle.value = leftLeg
  rightLegAngle.value = rightLeg

  const breathe = Math.sin(animTime.value * 2) * 0.003
  if (avatarGroup.value) {
    avatarGroup.value.position.y = breathe
  }
})
</script>
