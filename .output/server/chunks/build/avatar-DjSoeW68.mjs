import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

const BACKGROUND_STYLES = [
  { label: "Studio", value: "studio" },
  { label: "Sunset", value: "sunset" },
  { label: "Forest", value: "forest" },
  { label: "Ocean", value: "ocean" },
  { label: "Midnight", value: "midnight" },
  { label: "Minimal", value: "minimal" }
];
const BACKGROUND_COLORS = {
  studio: "#2a2a3a",
  sunset: "#1a0a2a",
  forest: "#0a1a0a",
  ocean: "#0a0a2a",
  midnight: "#050510",
  minimal: "#f0f0f0"
};
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
  shoesColor: "#374151",
  background: "studio",
  beard: "none",
  beardColor: "#2d1b0e",
  bodyType: "average",
  bodyHeight: 1
};
const SKIN_TONES = [
  { label: "Porcelain", value: "#fde8d0", hex: "#fde8d0" },
  { label: "Fair", value: "#f5d0b0", hex: "#f5d0b0" },
  { label: "Light", value: "#e8b88a", hex: "#e8b88a" },
  { label: "Tan", value: "#d4a574", hex: "#d4a574" },
  { label: "Warm", value: "#c9946a", hex: "#c9946a" },
  { label: "Olive", value: "#b8845a", hex: "#b8845a" },
  { label: "Brown", value: "#9c6b3e", hex: "#9c6b3e" },
  { label: "Dark", value: "#7a4d2a", hex: "#7a4d2a" },
  { label: "Deep", value: "#5a3520", hex: "#5a3520" },
  { label: "Ebony", value: "#3d2214", hex: "#3d2214" }
];
const EYE_COLORS = [
  { label: "Blue", value: "#4a7a9c", hex: "#4a7a9c" },
  { label: "Green", value: "#4a8c5c", hex: "#4a8c5c" },
  { label: "Brown", value: "#6b4426", hex: "#6b4426" },
  { label: "Hazel", value: "#8c6b3e", hex: "#8c6b3e" },
  { label: "Gray", value: "#7a8494", hex: "#7a8494" },
  { label: "Amber", value: "#c4943a", hex: "#c4943a" },
  { label: "Violet", value: "#7a5c9c", hex: "#7a5c9c" }
];
const HAIR_STYLES = [
  { label: "Short", value: "short" },
  { label: "Medium", value: "medium" },
  { label: "Long", value: "long" },
  { label: "Mohawk", value: "mohawk" },
  { label: "Curly", value: "curly" },
  { label: "Bun", value: "bun" },
  { label: "Ponytail", value: "ponytail" },
  { label: "Bald", value: "bald" },
  { label: "Pompadour", value: "pompadour" },
  { label: "Undercut", value: "undercut" }
];
const HAIR_COLORS = [
  { label: "Black", value: "#0a0a0a", hex: "#0a0a0a" },
  { label: "Dark Brown", value: "#2d1b0e", hex: "#2d1b0e" },
  { label: "Brown", value: "#5c3a1e", hex: "#5c3a1e" },
  { label: "Auburn", value: "#8b4513", hex: "#8b4513" },
  { label: "Red", value: "#c43a1e", hex: "#c43a1e" },
  { label: "Blonde", value: "#e8c84a", hex: "#e8c84a" },
  { label: "Platinum", value: "#e8e0d0", hex: "#e8e0d0" },
  { label: "Gray", value: "#8a8a8a", hex: "#8a8a8a" },
  { label: "Blue", value: "#3a7ac4", hex: "#3a7ac4" },
  { label: "Pink", value: "#e87a9c", hex: "#e87a9c" }
];
const FACE_SHAPES = [
  { label: "Round", value: "round" },
  { label: "Oval", value: "oval" },
  { label: "Square", value: "square" },
  { label: "Heart", value: "heart" },
  { label: "Diamond", value: "diamond" }
];
const CLOTHING_OPTIONS = [
  { label: "T-Shirt", value: "tShirt" },
  { label: "Hoodie", value: "hoodie" },
  { label: "Jacket", value: "jacket" },
  { label: "Suit", value: "suit" },
  { label: "Tank Top", value: "tankTop" },
  { label: "Dress", value: "dress" }
];
const ACCESSORY_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Glasses", value: "glasses" },
  { label: "Sunglasses", value: "sunglasses" },
  { label: "Necklace", value: "necklace" },
  { label: "Earrings", value: "earrings" },
  { label: "Watch", value: "watch" }
];
const HAT_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Baseball", value: "baseball" },
  { label: "Beanie", value: "beanie" },
  { label: "Top Hat", value: "topHat" },
  { label: "Cap", value: "cap" }
];
const SHOE_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Sneakers", value: "sneakers" },
  { label: "Boots", value: "boots" },
  { label: "Sandals", value: "sandals" },
  { label: "Formal", value: "formal" }
];
const ANIMATIONS = [
  { name: "idle", label: "Idle", duration: 3, loop: true, icon: "i-heroicons-stop" },
  { name: "walk", label: "Walk", duration: 1.5, loop: true, icon: "i-heroicons-arrow-right" },
  { name: "run", label: "Run", duration: 0.8, loop: true, icon: "i-heroicons-forward" },
  { name: "wave", label: "Wave", duration: 2, loop: false, icon: "i-heroicons-hand-raised" },
  { name: "sit", label: "Sit", duration: 1.5, loop: false, icon: "i-heroicons-arrow-down" },
  { name: "dance", label: "Dance", duration: 3, loop: true, icon: "i-heroicons-musical-note" },
  { name: "jump", label: "Jump", duration: 1.2, loop: false, icon: "i-heroicons-arrow-up" }
];
const BEARD_STYLES = [
  { label: "None", value: "none" },
  { label: "Stubble", value: "stubble" },
  { label: "Short", value: "short" },
  { label: "Goatee", value: "goatee" },
  { label: "Full", value: "full" }
];
const BODY_TYPES = [
  { label: "Slim", value: "slim" },
  { label: "Average", value: "average" },
  { label: "Athletic", value: "athletic" },
  { label: "Heavy", value: "heavy" }
];
const BEARD_COLORS = [
  { label: "Black", value: "#0a0a0a", hex: "#0a0a0a" },
  { label: "Dark Brown", value: "#2d1b0e", hex: "#2d1b0e" },
  { label: "Brown", value: "#5c3a1e", hex: "#5c3a1e" },
  { label: "Auburn", value: "#8b4513", hex: "#8b4513" },
  { label: "Red", value: "#c43a1e", hex: "#c43a1e" },
  { label: "Blonde", value: "#e8c84a", hex: "#e8c84a" },
  { label: "Gray", value: "#8a8a8a", hex: "#8a8a8a" }
];
const CATEGORY_TABS = [
  { id: "hair", label: "Hair", icon: "✂️" },
  { id: "face", label: "Face", icon: "😊" },
  { id: "eyes", label: "Eyes", icon: "👁️" },
  { id: "beard", label: "Beard", icon: "🧔" },
  { id: "body", label: "Body", icon: "💪" },
  { id: "clothing", label: "Clothing", icon: "👕" },
  { id: "accessories", label: "Accessories", icon: "✨" },
  { id: "hats", label: "Hats", icon: "🎩" },
  { id: "shoes", label: "Shoes", icon: "👟" },
  { id: "background", label: "Background", icon: "🎨" }
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
  function randomizeConfig() {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const clothingColors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6", "#ffffff", "#000000", "#64748b", "#a855f7"];
    const accessoryColors = ["#fbbf24", "#94a3b8", "#f472b6", "#000000", "#ffffff"];
    const hatColors = ["#1e293b", "#ef4444", "#3b82f6", "#000000", "#ffffff", "#22c55e"];
    const shoeColors = ["#374151", "#000000", "#8b4513", "#ef4444", "#3b82f6", "#ffffff"];
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
      bodyHeight: 0.85 + Math.random() * 0.3
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
    randomizeConfig,
    persistToStorage,
    loadFromStorage
  };
});

export { ANIMATIONS as A, BEARD_COLORS as B, CATEGORY_TABS as C, EYE_COLORS as E, FACE_SHAPES as F, HAIR_STYLES as H, SKIN_TONES as S, HAIR_COLORS as a, CLOTHING_OPTIONS as b, ACCESSORY_OPTIONS as c, HAT_OPTIONS as d, BEARD_STYLES as e, BODY_TYPES as f, SHOE_OPTIONS as g, BACKGROUND_STYLES as h, BACKGROUND_COLORS as i, useAvatarStore as u };
//# sourceMappingURL=avatar-DjSoeW68.mjs.map
