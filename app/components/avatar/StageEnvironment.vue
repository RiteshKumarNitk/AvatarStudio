<template>
  <TresMesh :position="[0, -0.01, 0]" :rotation="[-Math.PI / 2, 0, 0]">
    <TresCircleGeometry :args="[3.5, 64]" />
    <TresMeshStandardMaterial
      color="#888888"
      :transparent="true"
      :opacity="0.15"
      :roughness="1"
      :metalness="0"
    />
  </TresMesh>
  <TresGridHelper :args="[7, 20, '#666666', '#444444']" :position="[0, 0, 0]" :opacity="0.15" />
</template>
