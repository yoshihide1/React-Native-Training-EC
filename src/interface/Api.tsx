export interface UrlApi {
  get(request: string): string;
  baseUrl(): string;
}

export interface IMember {
  email: string;
  password: string;
}
