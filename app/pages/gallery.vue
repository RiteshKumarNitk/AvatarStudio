<template>
  <div class="max-w-6xl mx-auto px-6 py-12">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold">Gallery</h1>
        <p class="text-sm text-[var(--color-text-secondary)] mt-1">Your saved avatars</p>
      </div>
      <NuxtLink
        to="/studio"
        class="px-3 py-1.5 text-xs bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        New Avatar
      </NuxtLink>
    </div>

    <div v-if="avatarStore.savedAvatars.length === 0" class="text-center py-20">
      <svg class="w-12 h-12 mx-auto text-[var(--color-text-secondary)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      <p class="text-sm text-[var(--color-text-secondary)]">No saved avatars yet</p>
      <NuxtLink
        to="/studio"
        class="inline-block mt-3 text-xs text-[var(--color-accent)] hover:underline"
      >
        Create your first avatar
      </NuxtLink>
    </div>

    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="saved in sortedAvatars"
        :key="saved.id"
        class="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] group"
      >
        <div class="w-full aspect-square rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20 flex items-center justify-center mb-2 relative">
          <svg class="w-10 h-10 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <div class="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              class="p-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
              title="Load"
              @click="loadAndGo(saved.id)"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button
              class="p-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-red-500"
              title="Delete"
              @click="promptDelete(saved.id)"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        <p class="text-xs font-medium truncate">{{ saved.name }}</p>
        <p class="text-[10px] text-[var(--color-text-secondary)]">{{ new Date(saved.updatedAt).toLocaleDateString() }}</p>
      </div>
    </div>

    <Modal
      :model-value="showDeleteModal"
      title="Delete Avatar"
      message="Are you sure you want to delete this avatar? This action cannot be undone."
      confirm-text="Delete"
      cancel-text="Cancel"
      @update:model-value="showDeleteModal = $event"
      @confirm="handleDelete"
    />
  </div>
</template>

<script setup lang="ts">
const avatarStore = useAvatarStore()

const showDeleteModal = ref(false)
const deleteTargetId = ref<string | null>(null)

const sortedAvatars = computed(() =>
  [...avatarStore.savedAvatars].sort((a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  )
)

function loadAndGo(id: string) {
  avatarStore.loadSavedAvatar(id)
  navigateTo('/studio')
}

function promptDelete(id: string) {
  deleteTargetId.value = id
  showDeleteModal.value = true
}

function handleDelete() {
  if (deleteTargetId.value) {
    avatarStore.deleteAvatar(deleteTargetId.value)
    deleteTargetId.value = null
  }
  showDeleteModal.value = false
}
</script>
