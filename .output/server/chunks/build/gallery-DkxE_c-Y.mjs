import { _ as __nuxt_component_0 } from './nuxt-link-DK_3ILh-.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAvatarStore } from './avatar-kyCfDTh0.mjs';
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
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    const avatarStore = useAvatarStore();
    const showDeleteModal = ref(false);
    const deleteTargetId = ref(null);
    const sortedAvatars = computed(
      () => [...avatarStore.savedAvatars].sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      )
    );
    function handleDelete() {
      if (deleteTargetId.value) {
        avatarStore.deleteAvatar(deleteTargetId.value);
        deleteTargetId.value = null;
      }
      showDeleteModal.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Modal = resolveComponent("Modal");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-6 py-12" }, _attrs))}><div class="flex items-center justify-between mb-8"><div><h1 class="text-2xl font-bold">Gallery</h1><p class="text-sm text-[var(--color-text-secondary)] mt-1">Your saved avatars</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/studio",
        class: "px-3 py-1.5 text-xs bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` New Avatar `);
          } else {
            return [
              createTextVNode(" New Avatar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(avatarStore).savedAvatars.length === 0) {
        _push(`<div class="text-center py-20"><svg class="w-12 h-12 mx-auto text-[var(--color-text-secondary)] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><p class="text-sm text-[var(--color-text-secondary)]">No saved avatars yet</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/studio",
          class: "inline-block mt-3 text-xs text-[var(--color-accent)] hover:underline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Create your first avatar `);
            } else {
              return [
                createTextVNode(" Create your first avatar ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
        ssrRenderList(unref(sortedAvatars), (saved) => {
          _push(`<div class="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] group"><div class="w-full aspect-square rounded-lg bg-gradient-to-br from-[var(--color-accent)]/20 to-purple-500/20 flex items-center justify-center mb-2 relative"><svg class="w-10 h-10 text-[var(--color-text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><div class="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity"><button class="p-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]" title="Load"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></button><button class="p-1 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-red-500" title="Delete"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div><p class="text-xs font-medium truncate">${ssrInterpolate(saved.name)}</p><p class="text-[10px] text-[var(--color-text-secondary)]">${ssrInterpolate(new Date(saved.updatedAt).toLocaleDateString())}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_Modal, {
        "model-value": unref(showDeleteModal),
        title: "Delete Avatar",
        message: "Are you sure you want to delete this avatar? This action cannot be undone.",
        "confirm-text": "Delete",
        "cancel-text": "Cancel",
        "onUpdate:modelValue": ($event) => showDeleteModal.value = $event,
        onConfirm: handleDelete
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-DkxE_c-Y.mjs.map
