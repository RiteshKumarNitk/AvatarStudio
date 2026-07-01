import { g as __nuxt_component_0, _ as _export_sfc, f as useState } from './server.mjs';
import { defineComponent, ref, mergeProps, unref, isRef, withCtx, createVNode, withDirectives, withKeys, vModelText, openBlock, createBlock, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderTeleport, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { u as useAvatarStore, C as CATEGORY_TABS, A as ANIMATIONS, H as HAIR_STYLES, a as HAIR_COLORS, F as FACE_SHAPES, S as SKIN_TONES, E as EYE_COLORS, b as CLOTHING_OPTIONS, c as ACCESSORY_OPTIONS, d as HAT_OPTIONS, B as BEARD_COLORS, e as BEARD_STYLES, f as BODY_TYPES, g as SHOE_OPTIONS, h as BACKGROUND_STYLES, i as BACKGROUND_COLORS } from './avatar-DjSoeW68.mjs';
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
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ColorSwatches",
  __ssrInlineRender: true,
  props: {
    colors: {},
    selected: {}
  },
  emits: ["select"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-1.5" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.colors, (color) => {
        _push(`<button class="${ssrRenderClass([
          "w-6 h-6 rounded-full border-2 transition-all",
          __props.selected === color.value ? "border-[var(--color-accent)] scale-110" : "border-transparent hover:scale-110"
        ])}" style="${ssrRenderStyle({ backgroundColor: color.hex })}"${ssrRenderAttr("title", color.label)}></button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ColorSwatches.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const ColorSwatches = Object.assign(_sfc_main$h, { __name: "UiColorSwatches" });
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "HairSelector",
  __ssrInlineRender: true,
  props: {
    currentStyle: {},
    currentColor: {}
  },
  emits: ["update:style", "update:color"],
  setup(__props) {
    const hairStyles = HAIR_STYLES;
    const hairColors = HAIR_COLORS;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Hair Style</h3><div class="grid grid-cols-5 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(hairStyles), (hair) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md transition-all border text-center",
          __props.currentStyle === hair.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(hair.label)}</button>`);
      });
      _push(`<!--]--></div><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Hair Color</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: unref(hairColors),
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/HairSelector.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const HairSelector = Object.assign(_sfc_main$g, { __name: "CustomizationHairSelector" });
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "FaceSelector",
  __ssrInlineRender: true,
  props: {
    currentShape: {},
    currentSkin: {}
  },
  emits: ["update:shape", "update:skin"],
  setup(__props) {
    const faceShapes = FACE_SHAPES;
    const skinTones = SKIN_TONES;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Face Shape</h3><div class="grid grid-cols-5 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(faceShapes), (shape) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md transition-all border text-center",
          __props.currentShape === shape.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(shape.label)}</button>`);
      });
      _push(`<!--]--></div><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Skin Tone</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: unref(skinTones),
        selected: __props.currentSkin,
        onSelect: ($event) => _ctx.$emit("update:skin", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/FaceSelector.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const FaceSelector = Object.assign(_sfc_main$f, { __name: "CustomizationFaceSelector" });
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "EyeColorSelector",
  __ssrInlineRender: true,
  props: {
    currentColor: {}
  },
  emits: ["update:color"],
  setup(__props) {
    const eyeColors = EYE_COLORS;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Eye Color</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: unref(eyeColors),
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/EyeColorSelector.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const EyeColorSelector = Object.assign(_sfc_main$e, { __name: "CustomizationEyeColorSelector" });
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ClothingSelector",
  __ssrInlineRender: true,
  props: {
    currentStyle: {},
    currentColor: {}
  },
  emits: ["update:style", "update:color"],
  setup(__props) {
    const clothingOptions = CLOTHING_OPTIONS;
    const clothingColors = [
      { label: "Blue", value: "#3b82f6", hex: "#3b82f6" },
      { label: "Red", value: "#ef4444", hex: "#ef4444" },
      { label: "Green", value: "#22c55e", hex: "#22c55e" },
      { label: "Purple", value: "#a855f7", hex: "#a855f7" },
      { label: "Yellow", value: "#eab308", hex: "#eab308" },
      { label: "Pink", value: "#ec4899", hex: "#ec4899" },
      { label: "Orange", value: "#f97316", hex: "#f97316" },
      { label: "Teal", value: "#14b8a6", hex: "#14b8a6" },
      { label: "White", value: "#f8fafc", hex: "#f8fafc" },
      { label: "Black", value: "#1e293b", hex: "#1e293b" },
      { label: "Gray", value: "#64748b", hex: "#64748b" },
      { label: "Navy", value: "#1e3a5f", hex: "#1e3a5f" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Style</h3><div class="grid grid-cols-3 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(clothingOptions), (item) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md transition-all border text-center",
          __props.currentStyle === item.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(item.label)}</button>`);
      });
      _push(`<!--]--></div><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: clothingColors,
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/ClothingSelector.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const ClothingSelector = Object.assign(_sfc_main$d, { __name: "CustomizationClothingSelector" });
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "AccessorySelector",
  __ssrInlineRender: true,
  props: {
    currentAccessory: {},
    currentColor: {}
  },
  emits: ["update:accessory", "update:color"],
  setup(__props) {
    const accessoryOptions = ACCESSORY_OPTIONS;
    const accessoryColors = [
      { label: "Gold", value: "#fbbf24", hex: "#fbbf24" },
      { label: "Silver", value: "#9ca3af", hex: "#9ca3af" },
      { label: "Rose Gold", value: "#e8a0b4", hex: "#e8a0b4" },
      { label: "Black", value: "#1e293b", hex: "#1e293b" },
      { label: "White", value: "#f8fafc", hex: "#f8fafc" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Accessory</h3><div class="grid grid-cols-3 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(accessoryOptions), (item) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md transition-all border text-center",
          __props.currentAccessory === item.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(item.label)}</button>`);
      });
      _push(`<!--]--></div><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: accessoryColors,
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/AccessorySelector.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const AccessorySelector = Object.assign(_sfc_main$c, { __name: "CustomizationAccessorySelector" });
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "HatSelector",
  __ssrInlineRender: true,
  props: {
    currentHat: {},
    currentColor: {}
  },
  emits: ["update:hat", "update:color"],
  setup(__props) {
    const hatOptions = HAT_OPTIONS;
    const hatColors = [
      { label: "Black", value: "#1e293b", hex: "#1e293b" },
      { label: "Navy", value: "#1e3a5f", hex: "#1e3a5f" },
      { label: "Red", value: "#dc2626", hex: "#dc2626" },
      { label: "Blue", value: "#2563eb", hex: "#2563eb" },
      { label: "Green", value: "#16a34a", hex: "#16a34a" },
      { label: "White", value: "#f8fafc", hex: "#f8fafc" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Hat</h3><div class="grid grid-cols-3 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(hatOptions), (item) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md transition-all border text-center",
          __props.currentHat === item.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(item.label)}</button>`);
      });
      _push(`<!--]--></div><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: hatColors,
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/HatSelector.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HatSelector = Object.assign(_sfc_main$b, { __name: "CustomizationHatSelector" });
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "BeardSelector",
  __ssrInlineRender: true,
  props: {
    currentStyle: {},
    currentColor: {}
  },
  emits: ["update:style", "update:color"],
  setup(__props) {
    const styles = BEARD_STYLES;
    const colors = BEARD_COLORS.map((c) => ({ label: c.label, value: c.value, hex: c.value }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Style</label><div class="grid grid-cols-3 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(styles), (opt) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md border transition-all",
          __props.currentStyle === opt.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(opt.label)}</button>`);
      });
      _push(`<!--]--></div><label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Color</label>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: unref(colors),
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/BeardSelector.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const BeardSelector = Object.assign(_sfc_main$a, { __name: "CustomizationBeardSelector" });
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BodySelector",
  __ssrInlineRender: true,
  props: {
    currentType: {},
    currentHeight: {}
  },
  emits: ["update:type", "update:height"],
  setup(__props) {
    const types = BODY_TYPES;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Build</label><div class="grid grid-cols-2 gap-1.5 mb-4"><!--[-->`);
      ssrRenderList(unref(types), (opt) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md border transition-all",
          __props.currentType === opt.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(opt.label)}</button>`);
      });
      _push(`<!--]--></div><label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2"> Height: ${ssrInterpolate(Math.round(__props.currentHeight * 100))}% </label><input type="range" min="0.8" max="1.2" step="0.01"${ssrRenderAttr("value", __props.currentHeight)} class="w-full accent-[var(--color-accent)]"><div class="flex justify-between text-[10px] text-[var(--color-text-secondary)] mt-1"><span>Short</span><span>Tall</span></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/BodySelector.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const BodySelector = Object.assign(_sfc_main$9, { __name: "CustomizationBodySelector" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ShoeSelector",
  __ssrInlineRender: true,
  props: {
    currentShoes: {},
    currentColor: {}
  },
  emits: ["update:shoes", "update:color"],
  setup(__props) {
    const shoeOptions = SHOE_OPTIONS;
    const shoeColors = [
      { label: "White", value: "#f8fafc", hex: "#f8fafc" },
      { label: "Black", value: "#1e293b", hex: "#1e293b" },
      { label: "Red", value: "#dc2626", hex: "#dc2626" },
      { label: "Blue", value: "#2563eb", hex: "#2563eb" },
      { label: "Brown", value: "#7c3aed", hex: "#7c3aed" },
      { label: "Gray", value: "#64748b", hex: "#64748b" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Shoes</h3><div class="grid grid-cols-3 gap-1.5 mb-3"><!--[-->`);
      ssrRenderList(unref(shoeOptions), (item) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1.5 text-xs rounded-md transition-all border text-center",
          __props.currentShoes === item.value ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(item.label)}</button>`);
      });
      _push(`<!--]--></div><h3 class="text-xs font-medium text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">Color</h3>`);
      _push(ssrRenderComponent(ColorSwatches, {
        colors: shoeColors,
        selected: __props.currentColor,
        onSelect: ($event) => _ctx.$emit("update:color", $event)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/ShoeSelector.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ShoeSelector = Object.assign(_sfc_main$8, { __name: "CustomizationShoeSelector" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BackgroundSelector",
  __ssrInlineRender: true,
  props: {
    current: {}
  },
  emits: ["update:background"],
  setup(__props) {
    const backgrounds = BACKGROUND_STYLES;
    const colors = BACKGROUND_COLORS;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-2">Environment</label><div class="grid grid-cols-3 gap-2"><!--[-->`);
      ssrRenderList(unref(backgrounds), (bg) => {
        _push(`<button class="${ssrRenderClass([
          "p-2 rounded-lg border text-xs text-center transition-all",
          __props.current === bg.value ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]" : "border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)]"
        ])}"><div class="w-full h-8 rounded-md mb-1" style="${ssrRenderStyle({ backgroundColor: unref(colors)[bg.value] })}"></div> ${ssrInterpolate(bg.label)}</button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/BackgroundSelector.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const BackgroundSelector = Object.assign(_sfc_main$7, { __name: "CustomizationBackgroundSelector" });
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AnimationSelector",
  __ssrInlineRender: true,
  props: {
    current: {}
  },
  emits: ["select"],
  setup(__props) {
    const animations = ANIMATIONS;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-1" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(animations), (anim) => {
        _push(`<button class="${ssrRenderClass([
          "px-2 py-1 text-xs rounded-md transition-all border",
          __props.current === anim.name ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
        ])}">${ssrInterpolate(anim.label)}</button>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/avatar/AnimationSelector.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const AnimationSelector = Object.assign(_sfc_main$6, { __name: "AvatarAnimationSelector" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "h-full overflow-y-auto border-l border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 relative z-10",
          unref(isOpen) ? "w-80" : "w-0 overflow-hidden border-l-0"
        ]
      }, _attrs))}>`);
      if (unref(isOpen)) {
        _push(`<div class="p-4"><div class="flex items-center justify-between mb-4"><h2 class="text-sm font-semibold">Customize</h2><button class="p-1 rounded-md hover:bg-[var(--color-border)] transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div><div class="flex flex-wrap gap-1 mb-4"><!--[-->`);
        ssrRenderList(unref(tabs), (tab) => {
          _push(`<button class="${ssrRenderClass([
            "px-2.5 py-1.5 text-xs rounded-md transition-all border",
            unref(activeTab) === tab.id ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]" : "bg-[var(--color-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
          ])}" type="button">${ssrInterpolate(tab.icon)} ${ssrInterpolate(tab.label)}</button>`);
        });
        _push(`<!--]--></div><div class="space-y-4">`);
        if (unref(activeTab) === "hair") {
          _push(ssrRenderComponent(HairSelector, {
            "current-style": unref(config).hairStyle,
            "current-color": unref(config).hairColor,
            "onUpdate:style": ($event) => unref(avatarStore).updateNested("hairStyle", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("hairColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "face") {
          _push(ssrRenderComponent(FaceSelector, {
            "current-shape": unref(config).faceShape,
            "current-skin": unref(config).skinTone,
            "onUpdate:shape": ($event) => unref(avatarStore).updateNested("faceShape", $event),
            "onUpdate:skin": ($event) => unref(avatarStore).updateNested("skinTone", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "eyes") {
          _push(ssrRenderComponent(EyeColorSelector, {
            "current-color": unref(config).eyeColor,
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("eyeColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "clothing") {
          _push(ssrRenderComponent(ClothingSelector, {
            "current-style": unref(config).clothing,
            "current-color": unref(config).clothingColor,
            "onUpdate:style": ($event) => unref(avatarStore).updateNested("clothing", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("clothingColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "accessories") {
          _push(ssrRenderComponent(AccessorySelector, {
            "current-accessory": unref(config).accessory,
            "current-color": unref(config).accessoryColor,
            "onUpdate:accessory": ($event) => unref(avatarStore).updateNested("accessory", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("accessoryColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "hats") {
          _push(ssrRenderComponent(HatSelector, {
            "current-hat": unref(config).hat,
            "current-color": unref(config).hatColor,
            "onUpdate:hat": ($event) => unref(avatarStore).updateNested("hat", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("hatColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "beard") {
          _push(ssrRenderComponent(BeardSelector, {
            "current-style": unref(config).beard ?? "none",
            "current-color": unref(config).beardColor ?? "#2d1b0e",
            "onUpdate:style": ($event) => unref(avatarStore).updateNested("beard", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("beardColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "body") {
          _push(ssrRenderComponent(BodySelector, {
            "current-type": unref(config).bodyType ?? "average",
            "current-height": unref(config).bodyHeight ?? 1,
            "onUpdate:type": ($event) => unref(avatarStore).updateNested("bodyType", $event),
            "onUpdate:height": ($event) => unref(avatarStore).updateNested("bodyHeight", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "shoes") {
          _push(ssrRenderComponent(ShoeSelector, {
            "current-shoes": unref(config).shoes,
            "current-color": unref(config).shoesColor,
            "onUpdate:shoes": ($event) => unref(avatarStore).updateNested("shoes", $event),
            "onUpdate:color": ($event) => unref(avatarStore).updateNested("shoesColor", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeTab) === "background") {
          _push(ssrRenderComponent(BackgroundSelector, {
            current: unref(config).background ?? "studio",
            "onUpdate:background": ($event) => unref(avatarStore).updateNested("background", $event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-6 pt-4 border-t border-[var(--color-border)] space-y-2"><div class="flex items-center gap-2"><label class="text-xs text-[var(--color-text-secondary)] flex-1">Animation</label>`);
        _push(ssrRenderComponent(AnimationSelector, {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customization/CustomizationPanel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$5, { __name: "CustomizationPanel" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ToolButton",
  __ssrInlineRender: true,
  props: {
    tooltip: {}
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all disabled:opacity-50 disabled:cursor-not-allowed",
        title: __props.tooltip
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ToolButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ToolButton = Object.assign(_sfc_main$4, { __name: "UiToolButton" });
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const isDark = computed(() => colorMode.value === "dark");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "p-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all",
        title: unref(isDark) ? "Switch to light mode" : "Switch to dark mode"
      }, _attrs))}>`);
      if (unref(isDark)) {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ThemeToggle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ThemeToggle = Object.assign(_sfc_main$3, { __name: "UiThemeToggle" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppToolbar",
  __ssrInlineRender: true,
  emits: ["rotateLeft", "rotateRight", "resetCamera", "randomize", "screenshot", "export", "import", "save", "fullscreen"],
  setup(__props) {
    const uiStore = useUiStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "h-12 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 flex items-center justify-between shrink-0" }, _attrs))}><div class="flex items-center gap-3"><button class="p-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all"${ssrRenderAttr("title", unref(uiStore).sidebarOpen ? "Close sidebar" : "Open sidebar")}><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (unref(uiStore).sidebarOpen) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>`);
      }
      _push(`</svg></button><span class="text-sm font-semibold">Avatar Studio</span></div><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Rotate Left",
        onClick: ($event) => _ctx.$emit("rotateLeft")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Rotate Right",
        onClick: ($event) => _ctx.$emit("rotateRight")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Reset Camera",
        onClick: ($event) => _ctx.$emit("resetCamera")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-px h-5 bg-[var(--color-border)] mx-1"></div>`);
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Randomize (R)",
        onClick: ($event) => _ctx.$emit("randomize")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-px h-5 bg-[var(--color-border)] mx-1"></div>`);
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Screenshot",
        onClick: ($event) => _ctx.$emit("screenshot")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-1.586 1.586L15.172 7z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7L12 3.828 8.828 7 12 10.172 15.172 7z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15.172 7l-1.586 1.586L15.172 7z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M15.172 7L12 3.828 8.828 7 12 10.172 15.172 7z"
                }),
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Export JSON",
        onClick: ($event) => _ctx.$emit("export")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Import JSON",
        onClick: ($event) => _ctx.$emit("import")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 14l5-5 5 5M12 3v12"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 14l5-5 5 5M12 3v12"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Quick Save",
        onClick: ($event) => _ctx.$emit("save")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-px h-5 bg-[var(--color-border)] mx-1"></div>`);
      _push(ssrRenderComponent(ToolButton, {
        tooltip: "Fullscreen",
        onClick: ($event) => _ctx.$emit("fullscreen")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-4 h-4",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(ThemeToggle, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AppToolbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppToolbar = Object.assign(_sfc_main$2, { __name: "UiAppToolbar" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    title: {},
    message: {},
    confirmText: {},
    cancelText: {}
  },
  emits: ["update:modelValue", "confirm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.modelValue) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" data-v-d4d4645e><div class="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl" data-v-d4d4645e><div class="flex items-center justify-between mb-4" data-v-d4d4645e><h3 class="text-sm font-semibold" data-v-d4d4645e>${ssrInterpolate(__props.title)}</h3><button class="p-1 rounded-md hover:bg-[var(--color-border)] transition-colors" data-v-d4d4645e><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d4d4645e><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-d4d4645e></path></svg></button></div>`);
          if (__props.message) {
            _push2(`<div class="text-xs text-[var(--color-text-secondary)] mb-4" data-v-d4d4645e>${ssrInterpolate(__props.message)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`<div class="flex justify-end gap-2" data-v-d4d4645e><button class="px-3 py-1.5 text-xs rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] transition-colors" data-v-d4d4645e>${ssrInterpolate(__props.cancelText)}</button><button class="px-3 py-1.5 text-xs rounded-lg bg-[var(--color-accent)] text-white hover:opacity-90 transition-opacity" data-v-d4d4645e>${ssrInterpolate(__props.confirmText)}</button></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Modal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Modal = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4d4645e"]]), { __name: "UiModal" });
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
    const { saveCurrent } = useAvatarPersistence();
    const viewerRef = ref();
    const fileInputRef = ref();
    const showSaveModal = ref(false);
    const saveName = ref("");
    function handleRandomize() {
      avatarStore.randomizeConfig();
    }
    function openSaveModal() {
      saveName.value = `Avatar ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`;
      showSaveModal.value = true;
    }
    function confirmSave() {
      if (saveName.value.trim()) {
        saveCurrent(saveName.value.trim());
      }
      showSaveModal.value = false;
    }
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
      const _component_ClientOnly = __nuxt_component_0;
      const _component_CustomizationPanel = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex flex-col bg-[var(--color-bg)]" }, _attrs))}>`);
      _push(ssrRenderComponent(AppToolbar, {
        onRotateLeft: ($event) => unref(viewerRef)?.rotateLeft(),
        onRotateRight: ($event) => unref(viewerRef)?.rotateRight(),
        onResetCamera: ($event) => unref(viewerRef)?.resetCamera(),
        onRandomize: handleRandomize,
        onScreenshot: captureScreenshot,
        onExport: handleExport,
        onImport: triggerImport,
        onSave: openSaveModal,
        onFullscreen: toggleFullscreen
      }, null, _parent));
      _push(`<div class="flex-1 flex overflow-hidden"><div class="flex-1 relative overflow-hidden isolate">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CustomizationPanel, {
        onClose: ($event) => unref(uiStore).toggleSidebar()
      }, null, _parent));
      _push(`</div><input type="file" accept=".json" class="hidden">`);
      _push(ssrRenderComponent(Modal, {
        modelValue: unref(showSaveModal),
        "onUpdate:modelValue": ($event) => isRef(showSaveModal) ? showSaveModal.value = $event : null,
        title: "Save Avatar",
        message: "",
        "confirm-text": "Save",
        "cancel-text": "Cancel",
        onConfirm: confirmSave
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4"${_scopeId}><label class="text-xs font-medium text-[var(--color-text-secondary)] block mb-1"${_scopeId}>Name</label><input${ssrRenderAttr("value", unref(saveName))} type="text" class="w-full px-3 py-1.5 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]" placeholder="My Avatar"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "mb-4" }, [
                createVNode("label", { class: "text-xs font-medium text-[var(--color-text-secondary)] block mb-1" }, "Name"),
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => isRef(saveName) ? saveName.value = $event : null,
                  type: "text",
                  class: "w-full px-3 py-1.5 text-sm rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]",
                  placeholder: "My Avatar",
                  onKeyup: withKeys(confirmSave, ["enter"])
                }, null, 40, ["onUpdate:modelValue"]), [
                  [vModelText, unref(saveName)]
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
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
//# sourceMappingURL=studio-BO1_X4sZ.mjs.map
