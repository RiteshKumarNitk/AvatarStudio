import { _ as __nuxt_component_0 } from './nuxt-link-DK_3ILh-.mjs';
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
import 'pinia';
import 'vue-router';
import '@vue/shared';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_ThemeToggle = resolveComponent("ThemeToggle");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-[var(--color-bg)]" }, _attrs))}><header class="h-14 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 flex items-center justify-between shrink-0">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-sm font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Avatar Studio`);
      } else {
        return [
          createTextVNode("Avatar Studio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center gap-3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/gallery",
    class: "text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Gallery `);
      } else {
        return [
          createTextVNode(" Gallery ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/studio",
    class: "px-3 py-1.5 text-xs bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Create Avatar `);
      } else {
        return [
          createTextVNode(" Create Avatar ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
  _push(`</div></header><main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-CbWlS8Yb.mjs.map
