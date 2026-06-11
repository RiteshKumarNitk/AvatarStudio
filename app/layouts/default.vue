<template>
  <div class="min-h-screen flex flex-col bg-[var(--color-bg)]">
    <header class="h-14 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 flex items-center justify-between shrink-0">
      <NuxtLink to="/" class="text-sm font-semibold">Avatar Studio</NuxtLink>
      <div class="flex items-center gap-3">
        <NuxtLink
          to="/gallery"
          class="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
        >
          Gallery
        </NuxtLink>
        <NuxtLink
          to="/studio"
          class="px-3 py-1.5 text-xs bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Create Avatar
        </NuxtLink>
        <ThemeToggle />
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>
