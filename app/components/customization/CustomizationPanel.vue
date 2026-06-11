<template>
  <aside
    :class="[
      'h-full overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 relative z-10',
      isOpen ? 'w-80' : 'w-0 overflow-hidden border-l-0'
    ]"
  >
    <div class="p-4" v-if="isOpen">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-sm font-semibold">Customize</h2>
        <button
          class="p-1 rounded-md hover:bg-[var(--color-border)] transition-colors"
          @click="$emit('close')"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-wrap gap-1 mb-4">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'px-2.5 py-1.5 text-xs rounded-md transition-all border',
            activeTab === tab.id
              ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
              : 'bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]'
          ]"
          type="button"
          @click="uiStore.setActiveTab(tab.id)"
        >
          {{ tab.icon }} {{ tab.label }}
        </button>
      </div>

      <div class="space-y-4">
        <HairSelector
          v-if="activeTab === 'hair'"
          :current-style="config.hairStyle"
          :current-color="config.hairColor"
          @update:style="avatarStore.updateNested('hairStyle', $event)"
          @update:color="avatarStore.updateNested('hairColor', $event)"
        />
        <FaceSelector
          v-if="activeTab === 'face'"
          :current-shape="config.faceShape"
          :current-skin="config.skinTone"
          @update:shape="avatarStore.updateNested('faceShape', $event)"
          @update:skin="avatarStore.updateNested('skinTone', $event)"
        />
        <EyeColorSelector
          v-if="activeTab === 'eyes'"
          :current-color="config.eyeColor"
          @update:color="avatarStore.updateNested('eyeColor', $event)"
        />
        <ClothingSelector
          v-if="activeTab === 'clothing'"
          :current-style="config.clothing"
          :current-color="config.clothingColor"
          @update:style="avatarStore.updateNested('clothing', $event)"
          @update:color="avatarStore.updateNested('clothingColor', $event)"
        />
        <AccessorySelector
          v-if="activeTab === 'accessories'"
          :current-accessory="config.accessory"
          :current-color="config.accessoryColor"
          @update:accessory="avatarStore.updateNested('accessory', $event)"
          @update:color="avatarStore.updateNested('accessoryColor', $event)"
        />
        <HatSelector
          v-if="activeTab === 'hats'"
          :current-hat="config.hat"
          :current-color="config.hatColor"
          @update:hat="avatarStore.updateNested('hat', $event)"
          @update:color="avatarStore.updateNested('hatColor', $event)"
        />
        <BeardSelector
          v-if="activeTab === 'beard'"
          :current-style="config.beard ?? 'none'"
          :current-color="config.beardColor ?? '#2d1b0e'"
          @update:style="avatarStore.updateNested('beard', $event)"
          @update:color="avatarStore.updateNested('beardColor', $event)"
        />
        <BodySelector
          v-if="activeTab === 'body'"
          :current-type="config.bodyType ?? 'average'"
          :current-height="config.bodyHeight ?? 1"
          @update:type="avatarStore.updateNested('bodyType', $event)"
          @update:height="avatarStore.updateNested('bodyHeight', $event)"
        />
        <ShoeSelector
          v-if="activeTab === 'shoes'"
          :current-shoes="config.shoes"
          :current-color="config.shoesColor"
          @update:shoes="avatarStore.updateNested('shoes', $event)"
          @update:color="avatarStore.updateNested('shoesColor', $event)"
        />
        <BackgroundSelector
          v-if="activeTab === 'background'"
          :current="config.background ?? 'studio'"
          @update:background="avatarStore.updateNested('background', $event)"
        />
      </div>

      <div class="mt-6 pt-4 border-t border-[var(--color-border)] space-y-2">
        <div class="flex items-center gap-2">
          <label class="text-xs text-[var(--color-text-secondary)] flex-1">Animation</label>
          <AnimationSelector
            :current="animationStore.currentAnimation"
            @select="animationStore.setAnimation"
          />
        </div>
        <div class="flex items-center gap-2">
          <label class="text-xs text-[var(--color-text-secondary)] flex-1">Speed</label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            :value="animationStore.speed"
            class="w-24 accent-[var(--color-accent)]"
            @input="animationStore.setSpeed(Number(($event.target as HTMLInputElement).value))"
          />
          <span class="text-xs text-[var(--color-text-secondary)] w-6">{{ animationStore.speed }}x</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { CATEGORY_TABS } from '~/utils/constants'
import { useAvatarStore } from '~/stores/avatar'
import { useUiStore } from '~/stores/ui'
import { useAnimationStore } from '~/stores/animation'

const avatarStore = useAvatarStore()
const uiStore = useUiStore()
const animationStore = useAnimationStore()

const config = computed(() => avatarStore.config)

const isOpen = computed(() => uiStore.sidebarOpen)
const activeTab = computed(() => uiStore.activeTab)

const tabs = CATEGORY_TABS

defineEmits<{
  close: []
}>()
</script>
