<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-3">Create Your 3D Avatar</h1>
      <p class="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto">
        Customize every detail of your digital identity. Choose hairstyles, colors, accessories, and more.
      </p>
      <NuxtLink
        to="/studio"
        class="inline-block mt-6 px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Start Creating
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <NuxtLink
        v-for="feature in features"
        :key="feature.title"
        to="/studio"
        class="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all group cursor-pointer"
      >
        <div class="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">{{ feature.icon }}</div>
        <h3 class="text-sm font-semibold mb-1">{{ feature.title }}</h3>
        <p class="text-xs text-[var(--color-text-secondary)]">{{ feature.description }}</p>
      </NuxtLink>
    </div>

    <div v-if="avatarStore.savedAvatars.length > 0" class="mb-12">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">Recent Avatars</h2>
        <NuxtLink to="/gallery" class="text-xs text-[var(--color-accent)] hover:underline">
          View all
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="saved in recentAvatars"
          :key="saved.id"
          class="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all cursor-pointer group"
          @click="loadAvatar(saved.id)"
        >
          <div class="w-full aspect-square rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20 flex items-center justify-center mb-2 relative overflow-hidden">
            <svg class="w-10 h-10 text-[var(--color-text-secondary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
              <span class="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-2 py-1 rounded">
                Open
              </span>
            </div>
          </div>
          <p class="text-xs font-medium truncate">{{ saved.name }}</p>
          <p class="text-[10px] text-[var(--color-text-secondary)]">{{ new Date(saved.updatedAt).toLocaleDateString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const avatarStore = useAvatarStore()

const recentAvatars = computed(() =>
  [...avatarStore.savedAvatars]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 4)
)

function loadAvatar(id: string) {
  avatarStore.loadSavedAvatar(id)
  navigateTo('/studio')
}

const features = [
  {
    icon: '🎨',
    title: 'Full Customization',
    description: 'Change hair styles, colors, skin tones, eye colors, clothing, accessories, and more.',
  },
  {
    icon: '🔄',
    title: 'Real-time 3D Preview',
    description: 'See changes instantly with interactive 3D rendering powered by TresJS and Three.js.',
  },
  {
    icon: '💾',
    title: 'Save & Export',
    description: 'Save your creations, export as JSON, and import them later for further editing.',
  },
]
</script>
