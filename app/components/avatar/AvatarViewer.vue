<template>
  <TresCanvas
    ref="canvasRef"
    :clear-color="bgColor"
    :render-mode="'always'"
    :shadows="false"
    :alpha="bgAlpha"
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
    <ProceduralAvatar
      ref="avatarRef"
      :config="avatarStore.config"
      :animation="animationStore.currentAnimation"
      :animation-playing="animationStore.isPlaying"
      :animation-speed="animationStore.speed"
    />
    <StageEnvironment />
  </TresCanvas>
</template>

<script setup lang="ts">
import { BACKGROUND_COLORS } from '~/utils/constants'
import SceneLighting from './SceneLighting.vue'
import StageEnvironment from './StageEnvironment.vue'
import SceneControls from './SceneControls.vue'
import ProceduralAvatar from './ProceduralAvatar.vue'

const avatarStore = useAvatarStore()
const animationStore = useAnimationStore()

const bgColor = computed(() => BACKGROUND_COLORS[avatarStore.config.background ?? 'studio'] ?? '#2a2a3a')
const bgAlpha = computed(() => avatarStore.config.background === 'minimal' ? 0 : 1)

const canvasRef = ref()
const cameraRef = ref()
const controlsRef = ref()
const avatarRef = ref()

const autoRotate = ref(false)

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
