interface ImportMetaEnv {
  DEV: boolean;
  MODE: string;
  PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
