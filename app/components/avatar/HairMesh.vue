<template>
  <TresGroup :position="[0, 0.55, 0]">
    <template v-if="style === 'short'">
      <TresMesh :position="[0, 0.12, 0.05]">
        <TresSphereGeometry :args="[0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'medium'">
      <TresMesh :position="[0, 0.15, 0]">
        <TresSphereGeometry :args="[0.3, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.05, -0.12]">
        <TresCylinderGeometry :args="[0.05, 0.08, 0.15, 8]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'long'">
      <TresMesh :position="[0, 0.15, 0]">
        <TresSphereGeometry :args="[0.3, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[-0.12, -0.1, 0]" :rotation="[0.1, 0, 0.1]">
        <TresCylinderGeometry :args="[0.04, 0.06, 0.3, 6]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0.12, -0.1, 0]" :rotation="[0.1, 0, -0.1]">
        <TresCylinderGeometry :args="[0.04, 0.06, 0.3, 6]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, -0.08, -0.1]" :rotation="[0.2, 0, 0]">
        <TresCylinderGeometry :args="[0.04, 0.06, 0.35, 6]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'mohawk'">
      <TresMesh :position="[0, 0.12, 0.05]">
        <TresSphereGeometry :args="[0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.28, 0]" :scale="[0.5, 1, 0.5]">
        <TresBoxGeometry :args="[0.15, 0.2, 0.06]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'curly'">
      <TresMesh :position="[0, 0.15, 0]">
        <TresSphereGeometry :args="[0.32, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.9" />
      </TresMesh>
      <TresMesh :position="[0.15, 0.2, 0.1]">
        <TresSphereGeometry :args="[0.08, 12, 12]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.9" />
      </TresMesh>
      <TresMesh :position="[-0.15, 0.2, 0.1]">
        <TresSphereGeometry :args="[0.08, 12, 12]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.9" />
      </TresMesh>
      <TresMesh :position="[0.12, 0.25, -0.05]">
        <TresSphereGeometry :args="[0.07, 12, 12]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.9" />
      </TresMesh>
      <TresMesh :position="[-0.12, 0.25, -0.05]">
        <TresSphereGeometry :args="[0.07, 12, 12]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.9" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'bun'">
      <TresMesh :position="[0, 0.12, 0.05]">
        <TresSphereGeometry :args="[0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.35, 0.05]">
        <TresSphereGeometry :args="[0.12, 16, 16]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'ponytail'">
      <TresMesh :position="[0, 0.12, 0.05]">
        <TresSphereGeometry :args="[0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.05, -0.25]">
        <TresCylinderGeometry :args="[0.04, 0.08, 0.25, 8]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'pompadour'">
      <TresMesh :position="[0, 0.2, 0.08]">
        <TresSphereGeometry :args="[0.3, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2.5]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
      <TresMesh :position="[0, 0.32, 0.12]" :scale="[0.8, 1, 0.6]">
        <TresSphereGeometry :args="[0.1, 16, 16]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
    <template v-else-if="style === 'undercut'">
      <TresMesh :position="[0, 0.12, 0.05]">
        <TresSphereGeometry :args="[0.28, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]" />
        <TresMeshStandardMaterial :color="color" :roughness="0.8" />
      </TresMesh>
    </template>
  </TresGroup>
</template>

<script setup lang="ts">
import type { HairStyle } from '~/types/avatar'

defineProps<{
  style: HairStyle
  color: string
}>()
</script>
