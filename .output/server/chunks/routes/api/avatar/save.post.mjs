import { c as defineEventHandler, r as readBody, e as createError } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const save_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, config } = body;
  if (!config) {
    throw createError({ statusCode: 400, message: "Missing avatar config" });
  }
  const avatar = {
    id: crypto.randomUUID(),
    name: name || `Avatar ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`,
    config,
    thumbnail: null,
    createdAt: (/* @__PURE__ */ new Date()).toISOString(),
    updatedAt: (/* @__PURE__ */ new Date()).toISOString()
  };
  return { success: true, data: avatar };
});

export { save_post as default };
//# sourceMappingURL=save.post.mjs.map
