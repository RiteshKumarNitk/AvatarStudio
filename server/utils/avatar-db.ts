import type { SavedAvatar } from '~/types/avatar'

const avatars: SavedAvatar[] = []

export function getAvatars(): SavedAvatar[] {
  return avatars
}

export function getAvatar(id: string): SavedAvatar | undefined {
  return avatars.find(a => a.id === id)
}

export function saveAvatar(avatar: SavedAvatar): SavedAvatar {
  const index = avatars.findIndex(a => a.id === avatar.id)
  if (index >= 0) {
    avatars[index] = avatar
  } else {
    avatars.push(avatar)
  }
  return avatar
}

export function deleteAvatar(id: string): boolean {
  const index = avatars.findIndex(a => a.id === id)
  if (index >= 0) {
    avatars.splice(index, 1)
    return true
  }
  return false
}
