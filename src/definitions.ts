export interface CookieManagerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  // 添加你的 getCookies 方法
  getCookies(options: { url: string }): Promise<{ cookies: string }>;
}