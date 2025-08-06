import { registerPlugin } from '@capacitor/core';

import type { CookieManagerPlugin } from './definitions';

const CookieManager = registerPlugin<CookieManagerPlugin>('CookieManager', {
  web: () => import('./web').then((m) => new m.CookieManagerWeb()),
});

export * from './definitions';
export { CookieManager };
