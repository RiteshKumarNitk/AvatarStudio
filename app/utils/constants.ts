import type { AvatarConfig, CustomizationOption, ColorOption, AnimationClipData } from '~/types/avatar'

export const DEFAULT_AVATAR_CONFIG: AvatarConfig = {
  skinTone: '#f5d0b0',
  eyeColor: '#4a7a9c',
  hairStyle: 'short',
  hairColor: '#2d1b0e',
  faceShape: 'oval',
  clothing: 'tShirt',
  clothingColor: '#3b82f6',
  accessory: 'none',
  accessoryColor: '#fbbf24',
  hat: 'none',
  hatColor: '#1e293b',
  shoes: 'sneakers',
  shoesColor: '#374151',
}

export const SKIN_TONES: ColorOption[] = [
  { label: 'Porcelain', value: '#fde8d0', hex: '#fde8d0' },
  { label: 'Fair', value: '#f5d0b0', hex: '#f5d0b0' },
  { label: 'Light', value: '#e8b88a', hex: '#e8b88a' },
  { label: 'Tan', value: '#d4a574', hex: '#d4a574' },
  { label: 'Warm', value: '#c9946a', hex: '#c9946a' },
  { label: 'Olive', value: '#b8845a', hex: '#b8845a' },
  { label: 'Brown', value: '#9c6b3e', hex: '#9c6b3e' },
  { label: 'Dark', value: '#7a4d2a', hex: '#7a4d2a' },
  { label: 'Deep', value: '#5a3520', hex: '#5a3520' },
  { label: 'Ebony', value: '#3d2214', hex: '#3d2214' },
]

export const EYE_COLORS: ColorOption[] = [
  { label: 'Blue', value: '#4a7a9c', hex: '#4a7a9c' },
  { label: 'Green', value: '#4a8c5c', hex: '#4a8c5c' },
  { label: 'Brown', value: '#6b4426', hex: '#6b4426' },
  { label: 'Hazel', value: '#8c6b3e', hex: '#8c6b3e' },
  { label: 'Gray', value: '#7a8494', hex: '#7a8494' },
  { label: 'Amber', value: '#c4943a', hex: '#c4943a' },
  { label: 'Violet', value: '#7a5c9c', hex: '#7a5c9c' },
]

export const HAIR_STYLES: CustomizationOption<AvatarConfig['hairStyle']>[] = [
  { label: 'Short', value: 'short' },
  { label: 'Medium', value: 'medium' },
  { label: 'Long', value: 'long' },
  { label: 'Mohawk', value: 'mohawk' },
  { label: 'Curly', value: 'curly' },
  { label: 'Bun', value: 'bun' },
  { label: 'Ponytail', value: 'ponytail' },
  { label: 'Bald', value: 'bald' },
  { label: 'Pompadour', value: 'pompadour' },
  { label: 'Undercut', value: 'undercut' },
]

export const HAIR_COLORS: ColorOption[] = [
  { label: 'Black', value: '#0a0a0a', hex: '#0a0a0a' },
  { label: 'Dark Brown', value: '#2d1b0e', hex: '#2d1b0e' },
  { label: 'Brown', value: '#5c3a1e', hex: '#5c3a1e' },
  { label: 'Auburn', value: '#8b4513', hex: '#8b4513' },
  { label: 'Red', value: '#c43a1e', hex: '#c43a1e' },
  { label: 'Blonde', value: '#e8c84a', hex: '#e8c84a' },
  { label: 'Platinum', value: '#e8e0d0', hex: '#e8e0d0' },
  { label: 'Gray', value: '#8a8a8a', hex: '#8a8a8a' },
  { label: 'Blue', value: '#3a7ac4', hex: '#3a7ac4' },
  { label: 'Pink', value: '#e87a9c', hex: '#e87a9c' },
]

export const FACE_SHAPES: CustomizationOption<AvatarConfig['faceShape']>[] = [
  { label: 'Round', value: 'round' },
  { label: 'Oval', value: 'oval' },
  { label: 'Square', value: 'square' },
  { label: 'Heart', value: 'heart' },
  { label: 'Diamond', value: 'diamond' },
]

export const CLOTHING_OPTIONS: CustomizationOption<AvatarConfig['clothing']>[] = [
  { label: 'T-Shirt', value: 'tShirt' },
  { label: 'Hoodie', value: 'hoodie' },
  { label: 'Jacket', value: 'jacket' },
  { label: 'Suit', value: 'suit' },
  { label: 'Tank Top', value: 'tankTop' },
  { label: 'Dress', value: 'dress' },
]

export const ACCESSORY_OPTIONS: CustomizationOption<AvatarConfig['accessory']>[] = [
  { label: 'None', value: 'none' },
  { label: 'Glasses', value: 'glasses' },
  { label: 'Sunglasses', value: 'sunglasses' },
  { label: 'Necklace', value: 'necklace' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Watch', value: 'watch' },
]

export const HAT_OPTIONS: CustomizationOption<AvatarConfig['hat']>[] = [
  { label: 'None', value: 'none' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Beanie', value: 'beanie' },
  { label: 'Top Hat', value: 'topHat' },
  { label: 'Cap', value: 'cap' },
]

export const SHOE_OPTIONS: CustomizationOption<AvatarConfig['shoes']>[] = [
  { label: 'None', value: 'none' },
  { label: 'Sneakers', value: 'sneakers' },
  { label: 'Boots', value: 'boots' },
  { label: 'Sandals', value: 'sandals' },
  { label: 'Formal', value: 'formal' },
]

export const ANIMATIONS: AnimationClipData[] = [
  { name: 'idle', label: 'Idle', duration: 3, loop: true, icon: 'i-heroicons-stop' },
  { name: 'walk', label: 'Walk', duration: 1.5, loop: true, icon: 'i-heroicons-arrow-right' },
  { name: 'run', label: 'Run', duration: 0.8, loop: true, icon: 'i-heroicons-forward' },
  { name: 'wave', label: 'Wave', duration: 2, loop: false, icon: 'i-heroicons-hand-raised' },
  { name: 'sit', label: 'Sit', duration: 1.5, loop: false, icon: 'i-heroicons-arrow-down' },
  { name: 'dance', label: 'Dance', duration: 3, loop: true, icon: 'i-heroicons-musical-note' },
  { name: 'jump', label: 'Jump', duration: 1.2, loop: false, icon: 'i-heroicons-arrow-up' },
]

export const CATEGORY_TABS = [
  { id: 'hair', label: 'Hair', icon: '✂️' },
  { id: 'face', label: 'Face', icon: '😊' },
  { id: 'eyes', label: 'Eyes', icon: '👁️' },
  { id: 'clothing', label: 'Clothing', icon: '👕' },
  { id: 'accessories', label: 'Accessories', icon: '✨' },
  { id: 'hats', label: 'Hats', icon: '🎩' },
  { id: 'shoes', label: 'Shoes', icon: '👟' },
] as const
