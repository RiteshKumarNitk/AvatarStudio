import { defineStore } from 'pinia'
import type { AnimationName } from '~/types/avatar'
import { ANIMATIONS } from '~/utils/constants'

export const useAnimationStore = defineStore('animation', () => {
  const currentAnimation = ref<AnimationName>('idle')
  const isPlaying = ref(true)
  const speed = ref(1)

  const currentClip = computed(() =>
    ANIMATIONS.find(a => a.name === currentAnimation.value)
  )

  function setAnimation(name: AnimationName) {
    currentAnimation.value = name
    isPlaying.value = true
  }

  function togglePlay() {
    isPlaying.value = !isPlaying.value
  }

  function setSpeed(newSpeed: number) {
    speed.value = Math.max(0.1, Math.min(3, newSpeed))
  }

  return {
    currentAnimation,
    isPlaying,
    speed,
    currentClip,
    setAnimation,
    togglePlay,
    setSpeed,
  }
})
