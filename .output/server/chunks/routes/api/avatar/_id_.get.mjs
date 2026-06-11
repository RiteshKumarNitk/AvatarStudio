import { c as defineEventHandler, g as getRouterParam, e as createError } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const _id__get = defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, message: "Missing avatar ID" });
  }
  return {
    success: true,
    data: {
      id,
      name: "Sample Avatar",
      config: {
        skinTone: "#f5d0b0",
        eyeColor: "#4a7a9c",
        hairStyle: "short",
        hairColor: "#2d1b0e",
        faceShape: "oval",
        clothing: "tShirt",
        clothingColor: "#3b82f6",
        accessory: "none",
        accessoryColor: "#fbbf24",
        hat: "none",
        hatColor: "#1e293b",
        shoes: "sneakers",
        shoesColor: "#374151"
      },
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    }
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
