export function useAvatarAnimation() {
  const currentTime = ref(0)
  const isPlaying = ref(true)
  const speed = ref(1)

  function play() { isPlaying.value = true }
  function pause() { isPlaying.value = false }
  function toggle() { isPlaying.value = !isPlaying.value }
  function reset() { currentTime.value = 0 }
  function setSpeed(s: number) { speed.value = Math.max(0.1, Math.min(3, s)) }

  return {
    currentTime: readonly(currentTime),
    isPlaying: readonly(isPlaying),
    speed: readonly(speed),
    play,
    pause,
    toggle,
    reset,
    setSpeed,
  }
}
