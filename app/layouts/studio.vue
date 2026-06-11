<template>
  <div class="h-screen flex flex-col bg-[var(--color-bg)]">
    <AppToolbar
      @rotate-left="viewerRef?.rotateLeft()"
      @rotate-right="viewerRef?.rotateRight()"
      @reset-camera="viewerRef?.resetCamera()"
      @screenshot="captureScreenshot"
      @export="handleExport"
      @import="triggerImport"
      @save="quickSave"
      @fullscreen="toggleFullscreen"
    />
    <div class="flex-1 flex overflow-hidden">
      <div class="flex-1 relative">
        <ClientOnly>
          <AvatarViewer ref="viewerRef" />
        </ClientOnly>
      </div>
      <CustomizationPanel @close="uiStore.toggleSidebar()" />
    </div>
    <input
      ref="fileInputRef"
      type="file"
      accept=".json"
      class="hidden"
      @change="handleFileImport"
    />
  </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
const avatarStore = useAvatarStore()
const { downloadScreenshot, downloadJson } = useAvatarExport()
const { quickSave, handleFileImport } = useAvatarPersistence()

const viewerRef = ref()
const fileInputRef = ref<HTMLInputElement>()

async function captureScreenshot() {
  const dataUrl = await viewerRef.value?.captureScreenshot()
  if (dataUrl) {
    const link = document.createElement('a')
    link.download = `avatar-${Date.now()}.png`
    link.href = dataUrl
    link.click()
  }
}

function handleExport() {
  const data = avatarStore.exportConfig()
  downloadJson(data)
}

function triggerImport() {
  fileInputRef.value?.click()
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>
