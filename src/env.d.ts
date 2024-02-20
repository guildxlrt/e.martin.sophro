/// <reference types="astro/client" />
interface ImportMetaEnv {
  // INFOS
  readonly EMAIL: string;
  readonly PHONE: string;

  // SOCIAL ACCOUNTS
  readonly INSTAGRAM: string;
  readonly FACEBOOK: string;
  readonly LINKEDIN: string;

  // GOOGLE MAPS
  readonly GOOGLEMAPS_API_KEY: string;
  readonly GOOGLEMAPS_Q: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
