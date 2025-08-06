export interface CookieManagerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
