import { _ as __nuxt_component_0 } from './nuxt-link-DK_3ILh-.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAvatarStore } from './avatar-BjPzhEhc.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import '@vue/shared';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const avatarStore = useAvatarStore();
    const recentAvatars = computed(
      () => [...avatarStore.savedAvatars].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 4)
    );
    const features = [
      {
        icon: "🎨",
        title: "Full Customization",
        description: "Change hair styles, colors, skin tones, eye colors, clothing, accessories, and more."
      },
      {
        icon: "🔄",
        title: "Real-time 3D Preview",
        description: "See changes instantly with interactive 3D rendering powered by TresJS and Three.js."
      },
      {
        icon: "💾",
        title: "Save & Export",
        description: "Save your creations, export as JSON, and import them later for further editing."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-6 py-12" }, _attrs))}><div class="text-center mb-12"><h1 class="text-3xl font-bold mb-3">Create Your 3D Avatar</h1><p class="text-sm text-[var(--color-text-secondary)] max-w-md mx-auto"> Customize every detail of your digital identity. Choose hairstyles, colors, accessories, and more. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/studio",
        class: "inline-block mt-6 px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Creating `);
          } else {
            return [
              createTextVNode(" Start Creating ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: feature.title,
          to: "/studio",
          class: "p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all group cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block"${_scopeId}>${ssrInterpolate(feature.icon)}</div><h3 class="text-sm font-semibold mb-1"${_scopeId}>${ssrInterpolate(feature.title)}</h3><p class="text-xs text-[var(--color-text-secondary)]"${_scopeId}>${ssrInterpolate(feature.description)}</p>`);
            } else {
              return [
                createVNode("div", { class: "text-2xl mb-2 group-hover:scale-110 transition-transform inline-block" }, toDisplayString(feature.icon), 1),
                createVNode("h3", { class: "text-sm font-semibold mb-1" }, toDisplayString(feature.title), 1),
                createVNode("p", { class: "text-xs text-[var(--color-text-secondary)]" }, toDisplayString(feature.description), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (unref(avatarStore).savedAvatars.length > 0) {
        _push(`<div class="mb-12"><div class="flex items-center justify-between mb-4"><h2 class="text-lg font-semibold">Recent Avatars</h2>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/gallery",
          class: "text-xs text-[var(--color-accent)] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` View all `);
            } else {
              return [
                createTextVNode(" View all ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(unref(recentAvatars), (saved) => {
          _push(`<div class="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:shadow-lg transition-all cursor-pointer group"><div class="w-full aspect-square rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20 flex items-center justify-center mb-2 relative overflow-hidden"><svg class="w-10 h-10 text-[var(--color-text-secondary)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><div class="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors"><span class="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 px-2 py-1 rounded"> Open </span></div></div><p class="text-xs font-medium truncate">${ssrInterpolate(saved.name)}</p><p class="text-[10px] text-[var(--color-text-secondary)]">${ssrInterpolate(new Date(saved.updatedAt).toLocaleDateString())}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D_uRKVdh.mjs.map
