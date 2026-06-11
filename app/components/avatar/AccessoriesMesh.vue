<template>
  <TresGroup :position="[0, 1.73, 0]">
    <template v-if="accessory === 'glasses'">
      <TresMesh :position="[0, 0.3, 0.28]">
        <TresTorusGeometry :args="[0.1, 0.02, 8, 16]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.5" :roughness="0.3" />
      </TresMesh>
      <TresMesh :position="[-0.2, 0.3, 0.28]">
        <TresTorusGeometry :args="[0.1, 0.02, 8, 16]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.5" :roughness="0.3" />
      </TresMesh>
      <TresMesh :position="[-0.1, 0.3, 0.28]" :scale="[0.6, 1, 0.6]">
        <TresBoxGeometry :args="[0.02, 0.02, 0.01]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.5" :roughness="0.3" />
      </TresMesh>
      <TresMesh :position="[0.1, 0.3, 0.28]" :scale="[0.6, 1, 0.6]">
        <TresBoxGeometry :args="[0.02, 0.02, 0.01]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.5" :roughness="0.3" />
      </TresMesh>
    </template>
    <template v-else-if="accessory === 'sunglasses'">
      <TresMesh :position="[0, 0.3, 0.28]">
        <TresTorusGeometry :args="[0.12, 0.025, 8, 16]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.7" :roughness="0.2" />
      </TresMesh>
      <TresMesh :position="[-0.24, 0.3, 0.28]">
        <TresTorusGeometry :args="[0.12, 0.025, 8, 16]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.7" :roughness="0.2" />
      </TresMesh>
      <TresMesh :position="[-0.12, 0.3, 0.28]" :scale="[0.8, 1, 0.6]">
        <TresBoxGeometry :args="[0.025, 0.025, 0.01]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.7" :roughness="0.2" />
      </TresMesh>
      <TresMesh :position="[0.12, 0.3, 0.28]" :scale="[0.8, 1, 0.6]">
        <TresBoxGeometry :args="[0.025, 0.025, 0.01]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.7" :roughness="0.2" />
      </TresMesh>
    </template>
    <template v-else-if="accessory === 'necklace'">
      <TresMesh :position="[0, 0.1, 0]" :rotation="[0, 0, 0]">
        <TresTorusGeometry :args="[0.2, 0.015, 8, 24, Math.PI]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.8" :roughness="0.2" />
      </TresMesh>
    </template>
    <template v-else-if="accessory === 'earrings'">
      <TresMesh :position="[-0.3, 0.15, 0]">
        <TresTorusGeometry :args="[0.03, 0.008, 8, 12]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.8" :roughness="0.2" />
      </TresMesh>
      <TresMesh :position="[0.3, 0.15, 0]">
        <TresTorusGeometry :args="[0.03, 0.008, 8, 12]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.8" :roughness="0.2" />
      </TresMesh>
    </template>
    <template v-else-if="accessory === 'watch'">
      <TresMesh :position="[-0.35, -0.2, 0]" :rotation="[0, 0, 0.5]">
        <TresTorusGeometry :args="[0.06, 0.015, 8, 16]" />
        <TresMeshStandardMaterial :color="accessoryColor" :metalness="0.8" :roughness="0.2" />
      </TresMesh>
    </template>
  </TresGroup>

  <!-- Hats -->
  <TresGroup :position="[0, 1.98, 0]">
    <template v-if="hat === 'baseball'">
      <TresMesh :position="[0, 0.06, 0.02]" :rotation="[0.1, 0, 0]">
        <TresSphereGeometry :args="[0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2.5]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.01, 0.08]" :scale="[1, 0.08, 0.6]">
        <TresBoxGeometry :args="[0.25, 0.02, 0.08]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="hat === 'beanie'">
      <TresMesh :position="[0, 0.06, 0.02]" :scale="[1, 0.7, 1]">
        <TresSphereGeometry :args="[0.18, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.9" />
      </TresMesh>
      <TresMesh :position="[0, 0.14, 0.02]" :scale="[1, 0.6, 1]">
        <TresSphereGeometry :args="[0.08, 8, 8]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.9" />
      </TresMesh>
    </template>
    <template v-else-if="hat === 'topHat'">
      <TresMesh :position="[0, 0.04, 0.02]">
        <TresCylinderGeometry :args="[0.22, 0.24, 0.03, 16]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.5" :metalness="0.3" />
      </TresMesh>
      <TresMesh :position="[0, 0.17, 0.02]">
        <TresCylinderGeometry :args="[0.15, 0.16, 0.22, 16]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.5" :metalness="0.3" />
      </TresMesh>
    </template>
    <template v-else-if="hat === 'cap'">
      <TresMesh :position="[0, 0.05, 0.02]">
        <TresSphereGeometry :args="[0.19, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2.3]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.01, 0.1]" :scale="[0.9, 0.06, 0.5]">
        <TresBoxGeometry :args="[0.22, 0.02, 0.08]" />
        <TresMeshStandardMaterial :color="hatColor" :roughness="0.8" />
      </TresMesh>
    </template>
  </TresGroup>

  <!-- Shoes -->
  <TresGroup :position="[0, 0, 0]">
    <template v-if="shoes === 'sneakers'">
      <TresMesh :position="[-0.13, 0.05, 0.05]" :scale="[1.4, 0.5, 2]">
        <TresSphereGeometry :args="[0.08, 10, 10]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.7" />
      </TresMesh>
      <TresMesh :position="[0.13, 0.05, 0.05]" :scale="[1.4, 0.5, 2]">
        <TresSphereGeometry :args="[0.08, 10, 10]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.7" />
      </TresMesh>
    </template>
    <template v-else-if="shoes === 'boots'">
      <TresMesh :position="[-0.13, 0.12, 0.05]" :scale="[1.3, 1.2, 1.8]">
        <TresSphereGeometry :args="[0.08, 10, 10]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.5" :metalness="0.3" />
      </TresMesh>
      <TresMesh :position="[0.13, 0.12, 0.05]" :scale="[1.3, 1.2, 1.8]">
        <TresSphereGeometry :args="[0.08, 10, 10]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.5" :metalness="0.3" />
      </TresMesh>
    </template>
    <template v-else-if="shoes === 'sandals'">
      <TresMesh :position="[-0.13, 0.03, 0.05]" :scale="[1.2, 0.2, 1.6]">
        <TresBoxGeometry :args="[0.1, 0.02, 0.15]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.9" />
      </TresMesh>
      <TresMesh :position="[0.13, 0.03, 0.05]" :scale="[1.2, 0.2, 1.6]">
        <TresBoxGeometry :args="[0.1, 0.02, 0.15]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.9" />
      </TresMesh>
    </template>
    <template v-else-if="shoes === 'formal'">
      <TresMesh :position="[-0.13, 0.04, 0.06]" :scale="[1.3, 0.4, 2.2]">
        <TresSphereGeometry :args="[0.08, 10, 10]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.3" :metalness="0.6" />
      </TresMesh>
      <TresMesh :position="[0.13, 0.04, 0.06]" :scale="[1.3, 0.4, 2.2]">
        <TresSphereGeometry :args="[0.08, 10, 10]" />
        <TresMeshStandardMaterial :color="shoesColor" :roughness="0.3" :metalness="0.6" />
      </TresMesh>
    </template>
  </TresGroup>
</template>

<script setup lang="ts">
import type { AccessoryType } from '~/types/avatar'

defineProps<{
  accessory: AccessoryType
  accessoryColor: string
  hat: string
  hatColor: string
  shoes: string
  shoesColor: string
}>()
</script>
