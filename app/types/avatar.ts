export type HairStyle =
  | 'short'
  | 'medium'
  | 'long'
  | 'mohawk'
  | 'curly'
  | 'bun'
  | 'ponytail'
  | 'bald'
  | 'pompadour'
  | 'undercut'

export type FaceShape = 'round' | 'oval' | 'square' | 'heart' | 'diamond'

export type ClothingStyle =
  | 'tShirt'
  | 'hoodie'
  | 'jacket'
  | 'suit'
  | 'tankTop'
  | 'dress'

export type AccessoryType =
  | 'glasses'
  | 'sunglasses'
  | 'necklace'
  | 'earrings'
  | 'watch'
  | 'none'

export type HatType =
  | 'none'
  | 'baseball'
  | 'beanie'
  | 'topHat'
  | 'cap'

export type ShoeType =
  | 'sneakers'
  | 'boots'
  | 'sandals'
  | 'formal'
  | 'none'

export type HelmetType =
  | 'none'
  | 'bike'
  | 'knight'
  | 'space'

export type AnimationName =
  | 'idle'
  | 'walk'
  | 'run'
  | 'wave'
  | 'sit'
  | 'dance'
  | 'jump'

export interface AvatarConfig {
  skinTone: string
  eyeColor: string
  hairStyle: HairStyle
  hairColor: string
  faceShape: FaceShape
  clothing: ClothingStyle
  clothingColor: string
  accessory: AccessoryType
  accessoryColor: string
  hat: HatType
  hatColor: string
  shoes: ShoeType
  shoesColor: string
}

export interface AvatarState {
  config: AvatarConfig
  currentAnimation: AnimationName
  isExporting: boolean
  isLoading: boolean
}

export interface SavedAvatar {
  id: string
  name: string
  config: AvatarConfig
  thumbnail?: string
  createdAt: string
  updatedAt: string
}

export interface CustomizationOption<T = string> {
  label: string
  value: T
  preview?: string
  disabled?: boolean
}

export interface ColorOption {
  label: string
  value: string
  hex: string
}

export interface AnimationClipData {
  name: AnimationName
  label: string
  duration: number
  loop: boolean
  icon: string
}

export interface ExportData {
  version: string
  type: 'avatar-config'
  data: AvatarConfig
  exportedAt: string
}
