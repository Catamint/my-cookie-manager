// web.ts
import { WebPlugin } from '@capacitor/core';
import type { CookieManagerPlugin } from './definitions';

export class CookieManagerWeb extends WebPlugin implements CookieManagerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  // 添加你的 getCookies 方法的 Web 回退实现
  async getCookies(options: { url: string }): Promise<{ cookies: string }> {
    console.log('GETTING COOKIES from Web for URL:', options.url);
    // 这是一个简单的 Web 端回退实现
    return { cookies: document.cookie };
  }
}