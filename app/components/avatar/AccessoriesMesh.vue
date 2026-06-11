<template>
  <TresGroup :position="[0, 1.6, 0]">
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
