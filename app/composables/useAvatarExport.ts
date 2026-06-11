export function useAvatarExport() {
  async function downloadScreenshot(canvas: HTMLCanvasElement | null) {
    if (!canvas) return
    const link = document.createElement('a')
    link.download = `avatar-${Date.now()}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  function downloadJson(data: unknown) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = `avatar-config-${Date.now()}.json`
    link.href = url
    link.click()
    URL.revokeObjectURL(url)
  }

  function importJson(file: File): Promise<unknown> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string)
          resolve(data)
        } catch {
          reject(new Error('Invalid JSON file'))
        }
      }
      reader.onerror = () => reject(new Error('Failed to read file'))
      reader.readAsText(file)
    })
  }

  function getAvatarPreviewUrl(canvas: HTMLCanvasElement | null): string {
    if (!canvas) return ''
    return canvas.toDataURL('image/png')
  }

  return {
    downloadScreenshot,
    downloadJson,
    importJson,
    getAvatarPreviewUrl,
  }
}
