import { f as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, unref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as useAvatarStore, C as CATEGORY_TABS, A as ANIMATIONS } from './avatar-BjPzhEhc.mjs';
import { defineStore } from 'pinia';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import '@vue/shared';

const useUiStore = defineStore("ui", () => {
  const sidebarOpen = ref(true);
  const activeTab = ref("hair");
  const isDarkMode = ref(false);
  const showAnimationPanel = ref(false);
  const fullscreenMode = ref(false);
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
  }
  function setActiveTab(tab) {
    activeTab.value = tab;
  }
  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
  }
  function toggleAnimationPanel() {
    showAnimationPanel.value = !showAnimationPanel.value;
  }
  function setFullscreen(value) {
    fullscreenMode.value = value;
  }
  return {
    sidebarOpen,
    activeTab,
    isDarkMode,
    showAnimationPanel,
    fullscreenMode,
    toggleSidebar,
    setActiveTab,
    toggleDarkMode,
    toggleAnimationPanel,
    setFullscreen
  };
});
const useAnimationStore = defineStore("animation", () => {
  const currentAnimation = ref("idle");
  const isPlaying = ref(true);
  const speed = ref(1);
  const currentClip = computed(
    () => ANIMATIONS.find((a) => a.name === currentAnimation.value)
  );
  function setAnimation(name) {
    currentAnimation.value = name;
    isPlaying.value = true;
  }
  function togglePlay() {
    isPlaying.value = !isPlaying.value;
  }
  function setSpeed(newSpeed) {
    speed.value = Math.max(0.1, Math.min(3, newSpeed));
  }
  return {
    currentAnimation,
    isPlaying,
    speed,
    currentClip,
    setAnimation,
    togglePlay,
    setSpeed
  };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomizationPanel",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props) {
    const avatarStore = useAvatarStore();
    const uiStore = useUiStore();
    const animationStore = useAnimationStore();
    const config = computed(() => avatarStore.config);
    const isOpen = computed(() => uiStore.sidebarOpen);
    const activeTab = computed(() => uiStore.activeTab);
    const tabs = CATEGORY_TABS;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HairSelector = resolveComponent("HairSelector");
      const _component_FaceSelector = resolveComponent("FaceSelector");
      const _component_EyeColorSelector = resolveComponent("EyeColorSelector");
      const _component_ClothingSelector = resolveComponent("ClothingSelector");
      const _component_AccessorySelector = resolveComponent("AccessorySelector");
      const _component_HatSelector = resolveComponent("HatSelector");
      const _component_ShoeSelector = resolveComponent("ShoeSelector");
      const _component_AnimationSelector = resolveComponent("AnimationSelector");
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "h-full overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300",
          unref(isOpen) ? "w-80" : "w-0 overflow-hidden border-l-0"
        ]
      }, _attrs))}>`);
      if (unref(isOpen)) {
        _push(`<div class="p-4"><div class="flex items-center justify-between mb-4"><h2 class="text-sm font-semibold">Customize</h2><button class="p-1 rounded-md hover:bg-[var(--color-border)] transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex flex-wrap gap-1 mb-4"><!--[-->`);
        ssrRenderList(unref(tabs), (tab) => {
          _push(`<button class="${ssrRenderClass([
            "px-2.5 py-1.5 text-xs rounded-md transition-all border",
            unref(activeTab) === tab.id ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
          ])}">${ssrInterpolate(tab.icon)} ${ssrInterpolate(tab.label)}</button>`);
        });
        _push(`<!--]--></div><div class="space-y-4">`);
        if (unref(activeTab) === "hair") {
          _push(ssrRenderComponent(_component_HairSelector, {
            "current-style": unref(config).hairStyle,
            "current-color": unref(config).hairColor,
            "onUpdate:style": ($event) => unref(avatarStore).updateNested("hairStyle", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("hairColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "face") {
          _push(ssrRenderComponent(_component_FaceSelector, {
            "current-shape": unref(config).faceShape,
            "current-skin": unref(config).skinTone,
            "onUpdate:shape": ($event) => unref(avatarStore).updateNested("faceShape", $event),
            "onUpdate:skin": ($event) => unref(avatarStore).updateNested("skinTone", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "eyes") {
          _push(ssrRenderComponent(_component_EyeColorSelector, {
            "current-color": unref(config).eyeColor,
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("eyeColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "clothing") {
          _push(ssrRenderComponent(_component_ClothingSelector, {
            "current-style": unref(config).clothing,
            "current-color": unref(config).clothingColor,
            "onUpdate:style": ($event) => unref(avatarStore).updateNested("clothing", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("clothingColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "accessories") {
          _push(ssrRenderComponent(_component_AccessorySelector, {
            "current-accessory": unref(config).accessory,
            "current-color": unref(config).accessoryColor,
            "onUpdate:accessory": ($event) => unref(avatarStore).updateNested("accessory", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("accessoryColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "hats") {
          _push(ssrRenderComponent(_component_HatSelector, {
            "current-hat": unref(config).hat,
            "current-color": unref(config).hatColor,
            "onUpdate:hat": ($event) => unref(avatarStore).updateNested("hat", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("hatColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "shoes") {
          _push(ssrRenderComponent(_component_ShoeSelector, {
            "current-shoes": unref(config).shoes,
            "current-color": unref(config).shoesColor,
            "onUpdate:shoes": ($event) => unref(avatarStore).updateNested("shoes", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("shoesColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-6 pt-4 border-t border-[var(--color-border)] space-y-2"><div class="flex items-center gap-2"><label class="text-xs text-[var(--color-text-secondary)] flex-1">Animation</label>`);
        _push(ssrRenderComponent(_component_AnimationSelector, {
          current: unref(animationStore).currentAnimation,
          onSelect: unref(animationStore).setAnimation
        }, null, _parent));
        _push(`</div><div class="flex items-center gap-2"><label class="text-xs text-[var(--color-text-secondary)] flex-1">Speed</label><input type="range" min="0.1" max="3" step="0.1"${ssrRenderAttr("value", unref(animationStore).speed)} class="w-24 accent-[var(--color-accent)]"><span class="text-xs text-[var(--color-text-secondary)] w-6">${ssrInterpolate(unref(animationStore).speed)}x</span></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/CustomizationPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "CustomizationPanel" });
function useAvatarExport() {
  async function downloadScreenshot(canvas) {
    if (!canvas) return;
    const link = (void 0).createElement("a");
    link.download = `avatar-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
  function downloadJson(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = (void 0).createElement("a");
    link.download = `avatar-config-${Date.now()}.json`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  }
  function importJson(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result);
          resolve(data);
        } catch {
          reject(new Error("Invalid JSON file"));
        }
      };
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsText(file);
    });
  }
  function getAvatarPreviewUrl(canvas) {
    if (!canvas) return "";
    return canvas.toDataURL("image/png");
  }
  return {
    downloadScreenshot,
    downloadJson,
    importJson,
    getAvatarPreviewUrl
  };
}
function useAvatarPersistence() {
  const avatarStore = useAvatarStore();
  function saveCurrent(name) {
    const saved = avatarStore.saveAvatar(name);
    return saved;
  }
  function quickSave() {
    const name = `Avatar ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`;
    return avatarStore.saveAvatar(name);
  }
  function handleFileImport(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result);
        if (data.type === "avatar-config" && data.data) {
          avatarStore.importConfig(data);
        }
      } catch {
        console.error("Failed to import avatar config");
      }
    };
    reader.readAsText(file);
    input.value = "";
  }
  return {
    saveCurrent,
    quickSave,
    handleFileImport
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "studio",
  __ssrInlineRender: true,
  setup(__props) {
    const uiStore = useUiStore();
    const avatarStore = useAvatarStore();
    const { downloadJson } = useAvatarExport();
    const { quickSave } = useAvatarPersistence();
    const viewerRef = ref();
    const fileInputRef = ref();
    async function captureScreenshot() {
      const dataUrl = await viewerRef.value?.captureScreenshot();
      if (dataUrl) {
        const link = (void 0).createElement("a");
        link.download = `avatar-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      }
    }
    function handleExport() {
      const data = avatarStore.exportConfig();
      downloadJson(data);
    }
    function triggerImport() {
      fileInputRef.value?.click();
    }
    function toggleFullscreen() {
      if (!(void 0).fullscreenElement) {
        (void 0).documentElement.requestFullscreen();
      } else {
        (void 0).exitFullscreen();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppToolbar = resolveComponent("AppToolbar");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_CustomizationPanel = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col bg-[var(--color-bg)]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppToolbar, {
        onRotateLeft: ($event) => unref(viewerRef)?.rotateLeft(),
        onRotateRight: ($event) => unref(viewerRef)?.rotateRight(),
        onResetCamera: ($event) => unref(viewerRef)?.resetCamera(),
        onScreenshot: captureScreenshot,
        onExport: handleExport,
        onImport: triggerImport,
        onSave: unref(quickSave),
        onFullscreen: toggleFullscreen
      }, null, _parent));
      _push(`<div class="flex-1 flex overflow-hidden"><div class="flex-1 relative">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CustomizationPanel, {
        onClose: ($event) => unref(uiStore).toggleSidebar()
      }, null, _parent));
      _push(`</div><input type="file" accept=".json" class="hidden"></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/studio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=studio-CtTpkDqA.mjs.map
