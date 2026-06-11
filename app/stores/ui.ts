import { defineStore } from 'pinia'

export type SidebarTab = 'hair' | 'face' | 'eyes' | 'beard' | 'body' | 'clothing' | 'accessories' | 'hats' | 'shoes' | 'background'

export const useUiStore = defineStore('ui', () => {
  const sidebarOpen = ref(true)
  const activeTab = ref<SidebarTab>('hair')
  const isDarkMode = ref(false)
  const showAnimationPanel = ref(false)
  const fullscreenMode = ref(false)

  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  function setActiveTab(tab: SidebarTab) {
    activeTab.value = tab
  }

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  function toggleAnimationPanel() {
    showAnimationPanel.value = !showAnimationPanel.value
  }

  function setFullscreen(value: boolean) {
    fullscreenMode.value = value
  }

  return {
    sidebarOpen,
    activeTab,
    isDarkMode,
    showAnimationPanel,
    fullscreenMode,
    toggleSidebar,
    setActiveTab,
    toggleDarkMode,
    toggleAnimationPanel,
    setFullscreen,
  }
})
