import { WebPlugin } from '@capacitor/core';

import type { CookieManagerPlugin } from './definitions';

export class CookieManagerWeb extends WebPlugin implements CookieManagerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
