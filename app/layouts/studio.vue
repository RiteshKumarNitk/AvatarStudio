<template>
  <div class="h-screen flex flex-col bg-[var(--color-bg)]">
    <AppToolbar
      @rotate-left="viewerRef?.rotateLeft()"
      @rotate-right="viewerRef?.rotateRight()"
      @reset-camera="viewerRef?.resetCamera()"
      @randomize="handleRandomize"
      @screenshot="captureScreenshot"
      @export="handleExport"
      @import="triggerImport"
      @save="openSaveModal"
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
    <Modal
      v-model="showSaveModal"
      title="Save Avatar"
      :message="''"
      confirm-text="Save"
      cancel-text="Cancel"
      @confirm="confirmSave"
    >
      <div class="mb-4">
        <label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-1">Name</label>
        <input
          v-model="saveName"
          type="text"
          class="w-full px-3 py-1.5 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
          placeholder="My Avatar"
          @keyup.enter="confirmSave"
        />
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
const uiStore = useUiStore()
const avatarStore = useAvatarStore()
const { downloadScreenshot, downloadJson } = useAvatarExport()
const { saveCurrent, quickSave, handleFileImport } = useAvatarPersistence()

const viewerRef = ref()
const fileInputRef = ref<HTMLInputElement>()
const showSaveModal = ref(false)
const saveName = ref('')

function handleRandomize() {
  avatarStore.randomizeConfig()
}

function openSaveModal() {
  saveName.value = `Avatar ${new Date().toLocaleDateString()}`
  showSaveModal.value = true
}

function confirmSave() {
  if (saveName.value.trim()) {
    saveCurrent(saveName.value.trim())
  }
  showSaveModal.value = false
}

onMounted(() => {
  function onKeydown(e: KeyboardEvent) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
    switch (e.key.toLowerCase()) {
      case 'r':
        viewerRef.value?.resetCamera()
        break
      case 's':
        if (!e.ctrlKey && !e.metaKey) captureScreenshot()
        break
      case 'arrowleft':
        viewerRef.value?.rotateLeft()
        break
      case 'arrowright':
        viewerRef.value?.rotateRight()
        break
      case 'f':
        toggleFullscreen()
        break
    }
  }
  window.addEventListener('keydown', onKeydown)
  onUnmounted(() => window.removeEventListener('keydown', onKeydown))
})

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
