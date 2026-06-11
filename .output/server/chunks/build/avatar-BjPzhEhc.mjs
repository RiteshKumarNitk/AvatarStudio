import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

const DEFAULT_AVATAR_CONFIG = {
  skinTone: "#f5d0b0",
  eyeColor: "#4a7a9c",
  hairStyle: "short",
  hairColor: "#2d1b0e",
  faceShape: "oval",
  clothing: "tShirt",
  clothingColor: "#3b82f6",
  accessory: "none",
  accessoryColor: "#fbbf24",
  hat: "none",
  hatColor: "#1e293b",
  shoes: "sneakers",
  shoesColor: "#374151"
};
const ANIMATIONS = [
  { name: "idle", label: "Idle", duration: 3, loop: true, icon: "i-heroicons-stop" },
  { name: "walk", label: "Walk", duration: 1.5, loop: true, icon: "i-heroicons-arrow-right" },
  { name: "run", label: "Run", duration: 0.8, loop: true, icon: "i-heroicons-forward" },
  { name: "wave", label: "Wave", duration: 2, loop: false, icon: "i-heroicons-hand-raised" },
  { name: "sit", label: "Sit", duration: 1.5, loop: false, icon: "i-heroicons-arrow-down" },
  { name: "dance", label: "Dance", duration: 3, loop: true, icon: "i-heroicons-musical-note" },
  { name: "jump", label: "Jump", duration: 1.2, loop: false, icon: "i-heroicons-arrow-up" }
];
const CATEGORY_TABS = [
  { id: "hair", label: "Hair", icon: "✂️" },
  { id: "face", label: "Face", icon: "😊" },
  { id: "eyes", label: "Eyes", icon: "👁️" },
  { id: "clothing", label: "Clothing", icon: "👕" },
  { id: "accessories", label: "Accessories", icon: "✨" },
  { id: "hats", label: "Hats", icon: "🎩" },
  { id: "shoes", label: "Shoes", icon: "👟" }
];
const useAvatarStore = defineStore("avatar", () => {
  const config = ref({ ...DEFAULT_AVATAR_CONFIG });
  const savedAvatars = ref([]);
  const isLoading = ref(false);
  const currentAvatarId = ref(null);
  const currentSavedAvatar = computed(
    () => savedAvatars.value.find((a) => a.id === currentAvatarId.value) ?? null
  );
  function updateConfig(key, value) {
    config.value = { ...config.value, [key]: value };
  }
  function updateNested(key, value) {
    config.value[key] = value;
  }
  function resetConfig() {
    config.value = { ...DEFAULT_AVATAR_CONFIG };
    currentAvatarId.value = null;
  }
  function loadConfig(newConfig) {
    config.value = { ...newConfig };
  }
  function saveAvatar(name) {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const existing = savedAvatars.value.find((a) => a.id === currentAvatarId.value);
    if (existing) {
      existing.config = { ...config.value };
      existing.name = name;
      existing.updatedAt = now;
      return existing;
    }
    const avatar = {
      id: crypto.randomUUID(),
      name,
      config: { ...config.value },
      createdAt: now,
      updatedAt: now
    };
    savedAvatars.value.push(avatar);
    currentAvatarId.value = avatar.id;
    return avatar;
  }
  function loadSavedAvatar(id) {
    const avatar = savedAvatars.value.find((a) => a.id === id);
    if (avatar) {
      config.value = { ...avatar.config };
      currentAvatarId.value = id;
    }
  }
  function deleteAvatar(id) {
    savedAvatars.value = savedAvatars.value.filter((a) => a.id !== id);
    if (currentAvatarId.value === id) {
      currentAvatarId.value = null;
    }
  }
  function exportConfig() {
    return {
      version: "1.0.0",
      type: "avatar-config",
      data: { ...config.value },
      exportedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
  }
  function importConfig(data) {
    if (data.type === "avatar-config" && data.data) {
      config.value = { ...data.data };
    }
  }
  function persistToStorage() {
  }
  function loadFromStorage() {
  }
  watch(config, persistToStorage, { deep: true });
  watch(savedAvatars, persistToStorage, { deep: true });
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
    persistToStorage,
    loadFromStorage
  };
});

export { ANIMATIONS as A, CATEGORY_TABS as C, useAvatarStore as u };
//# sourceMappingURL=avatar-BjPzhEhc.mjs.map
