export function useAvatarPersistence() {
  const avatarStore = useAvatarStore()

  onMounted(() => {
    avatarStore.loadFromStorage()
  })

  function saveCurrent(name: string) {
    const saved = avatarStore.saveAvatar(name)
    return saved
  }

  function quickSave() {
    const name = `Avatar ${new Date().toLocaleDateString()}`
    return avatarStore.saveAvatar(name)
  }

  function handleFileImport(event: Event) {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        if (data.type === 'avatar-config' && data.data) {
          avatarStore.importConfig(data)
        }
      } catch {
        console.error('Failed to import avatar config')
      }
    }
    reader.readAsText(file)
    input.value = ''
  }

  return {
    saveCurrent,
    quickSave,
    handleFileImport,
  }
}
