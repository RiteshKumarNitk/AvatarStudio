import { c as defineEventHandler } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const list_get = defineEventHandler(async () => {
  return {
    success: true,
    data: []
  };
});

export { list_get as default };
//# sourceMappingURL=list.get.mjs.map
