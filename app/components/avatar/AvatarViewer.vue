<template>
  <TresCanvas
    ref="canvasRef"
    window-size
    clear-color="#00000000"
    :render-mode="'always'"
    :shadows="false"
    :alpha="true"
    :power-preference="'high-performance'"
    :tone-mapping="true"
  >
    <TresPerspectiveCamera
      ref="cameraRef"
      :position="[0, 2, 6]"
      :look-at="[0, 1, 0]"
      :fov="45"
      :near="0.1"
      :far="100"
    />
    <SceneLighting />
    <SceneControls
      ref="controlsRef"
      :auto-rotate="autoRotate"
    />
    <Suspense>
      <ProceduralAvatar
        ref="avatarRef"
        :config="avatarStore.config"
        :animation="animationStore.currentAnimation"
        :animation-playing="animationStore.isPlaying"
        :animation-speed="animationStore.speed"
      />
    </Suspense>
    <StageEnvironment />
  </TresCanvas>
</template>

<script setup lang="ts">
const avatarStore = useAvatarStore()
const animationStore = useAnimationStore()

const canvasRef = ref()
const cameraRef = ref()
const controlsRef = ref()
const avatarRef = ref()

const autoRotate = ref(true)

function onControlsUpdate() {
  autoRotate.value = false
  setTimeout(() => { autoRotate.value = true }, 3000)
}

function rotateLeft() {
  const controls = controlsRef.value?.instance
  if (!controls) return
  const target = controls.target
  const angle = 0.5
  const radius = controls.object.position.distanceTo(target)
  const currentAngle = Math.atan2(
    controls.object.position.x - target.x,
    controls.object.position.z - target.z
  )
  const newAngle = currentAngle + angle
  controls.object.position.x = target.x + Math.sin(newAngle) * radius
  controls.object.position.z = target.z + Math.cos(newAngle) * radius
  controls.update()
}

function rotateRight() {
  const controls = controlsRef.value?.instance
  if (!controls) return
  const target = controls.target
  const angle = -0.5
  const radius = controls.object.position.distanceTo(target)
  const currentAngle = Math.atan2(
    controls.object.position.x - target.x,
    controls.object.position.z - target.z
  )
  const newAngle = currentAngle + angle
  controls.object.position.x = target.x + Math.sin(newAngle) * radius
  controls.object.position.z = target.z + Math.cos(newAngle) * radius
  controls.update()
}

function resetCamera() {
  const controls = controlsRef.value?.instance
  if (!controls) return
  controls.object.position.set(0, 2, 6)
  controls.target.set(0, 1, 0)
  controls.update()
}

async function captureScreenshot(): Promise<string> {
  const canvas = canvasRef.value?.renderer?.domElement
  if (!canvas) return ''
  return canvas.toDataURL('image/png')
}

defineExpose({
  rotateLeft,
  rotateRight,
  resetCamera,
  captureScreenshot,
  avatarRef,
  cameraRef,
  controlsRef,
})
</script>
