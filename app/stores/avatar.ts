import { defineStore } from 'pinia'
import type { AvatarConfig, SavedAvatar, ExportData } from '~/types/avatar'
import { DEFAULT_AVATAR_CONFIG, HAIR_STYLES, HAIR_COLORS, SKIN_TONES, EYE_COLORS, FACE_SHAPES, CLOTHING_OPTIONS, ACCESSORY_OPTIONS, HAT_OPTIONS, SHOE_OPTIONS, BACKGROUND_STYLES, BEARD_STYLES, BEARD_COLORS, BODY_TYPES } from '~/utils/constants'

export const useAvatarStore = defineStore('avatar', () => {
  const config = ref<AvatarConfig>({ ...DEFAULT_AVATAR_CONFIG })
  const savedAvatars = ref<SavedAvatar[]>([])
  const isLoading = ref(false)
  const currentAvatarId = ref<string | null>(null)

  const currentSavedAvatar = computed(() =>
    savedAvatars.value.find(a => a.id === currentAvatarId.value) ?? null
  )

  function updateConfig<K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) {
    config.value = { ...config.value, [key]: value }
  }

  function updateNested<K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) {
    config.value[key] = value
  }

  function resetConfig() {
    config.value = { ...DEFAULT_AVATAR_CONFIG }
    currentAvatarId.value = null
  }

  function loadConfig(newConfig: AvatarConfig) {
    config.value = { ...newConfig }
  }

  function saveAvatar(name: string): SavedAvatar {
    const now = new Date().toISOString()
    const existing = savedAvatars.value.find(a => a.id === currentAvatarId.value)

    if (existing) {
      existing.config = { ...config.value }
      existing.name = name
      existing.updatedAt = now
      return existing
    }

    const avatar: SavedAvatar = {
      id: crypto.randomUUID(),
      name,
      config: { ...config.value },
      createdAt: now,
      updatedAt: now,
    }
    savedAvatars.value.push(avatar)
    currentAvatarId.value = avatar.id
    return avatar
  }

  function loadSavedAvatar(id: string) {
    const avatar = savedAvatars.value.find(a => a.id === id)
    if (avatar) {
      config.value = { ...avatar.config }
      currentAvatarId.value = id
    }
  }

  function deleteAvatar(id: string) {
    savedAvatars.value = savedAvatars.value.filter(a => a.id !== id)
    if (currentAvatarId.value === id) {
      currentAvatarId.value = null
    }
  }

  function exportConfig(): ExportData {
    return {
      version: '1.0.0',
      type: 'avatar-config',
      data: { ...config.value },
      exportedAt: new Date().toISOString(),
    }
  }

  function randomizeConfig() {
    const pick = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]
    const randColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    const clothingColors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6', '#ffffff', '#000000', '#64748b', '#a855f7']
    const accessoryColors = ['#fbbf24', '#94a3b8', '#f472b6', '#000000', '#ffffff']
    const hatColors = ['#1e293b', '#ef4444', '#3b82f6', '#000000', '#ffffff', '#22c55e']
    const shoeColors = ['#374151', '#000000', '#8b4513', '#ef4444', '#3b82f6', '#ffffff']

    config.value = {
      skinTone: pick(SKIN_TONES).value,
      eyeColor: pick(EYE_COLORS).value,
      hairStyle: pick(HAIR_STYLES).value,
      hairColor: pick(HAIR_COLORS).value,
      faceShape: pick(FACE_SHAPES).value,
      clothing: pick(CLOTHING_OPTIONS).value,
      clothingColor: pick(clothingColors),
      accessory: pick(ACCESSORY_OPTIONS).value,
      accessoryColor: pick(accessoryColors),
      hat: pick(HAT_OPTIONS).value,
      hatColor: pick(hatColors),
      shoes: pick(SHOE_OPTIONS).value,
      shoesColor: pick(shoeColors),
      background: pick(BACKGROUND_STYLES).value,
      beard: pick(BEARD_STYLES).value,
      beardColor: pick(BEARD_COLORS).value,
      bodyType: pick(BODY_TYPES).value,
      bodyHeight: 0.85 + Math.random() * 0.3,
    }
  }

  function importConfig(data: ExportData) {
    if (data.type === 'avatar-config' && data.data) {
      config.value = { ...data.data }
    }
  }

  function persistToStorage() {
    if (import.meta.client) {
      localStorage.setItem('avatar-studio-config', JSON.stringify(config.value))
      localStorage.setItem('avatar-studio-saved', JSON.stringify(savedAvatars.value))
    }
  }

  function loadFromStorage() {
    if (import.meta.client) {
      try {
        const saved = localStorage.getItem('avatar-studio-config')
        if (saved) {
          const parsed = JSON.parse(saved)
          config.value = { ...DEFAULT_AVATAR_CONFIG, ...parsed }
        }
        const savedList = localStorage.getItem('avatar-studio-saved')
        if (savedList) {
          savedAvatars.value = JSON.parse(savedList)
        }
      } catch {
        // ignore parse errors
      }
    }
  }

  watch(config, persistToStorage, { deep: true })
  watch(savedAvatars, persistToStorage, { deep: true })

  return {
    config,
    savedAvatars,
    isLoading,
    currentAvatarId,
    currentSavedAvatar,
    updateConfig,
    updateNested,
    resetConfig,
    loadConfig,
    saveAvatar,
    loadSavedAvatar,
    deleteAvatar,
    exportConfig,
    importConfig,
    randomizeConfig,
    persistToStorage,
    loadFromStorage,
  }
})
