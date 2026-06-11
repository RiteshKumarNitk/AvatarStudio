<template>
  <TresAmbientLight :intensity="0.5" color="#ffffff" />
  <TresDirectionalLight
    :position="[5, 8, 5]"
    :intensity="1.2"
    color="#ffffff"
    cast-shadow
  />
  <TresDirectionalLight
    :position="[-3, 4, -5]"
    :intensity="0.3"
    color="#8ec5fc"
  />
  <TresHemisphereLight
    :args="['#87ceeb', '#3a3a5c', 0.4]"
  />
</template>
