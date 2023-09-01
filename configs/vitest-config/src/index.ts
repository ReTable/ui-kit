import { createRequire } from 'node:module';

import { defineConfig } from 'vitest/config';

const include = ['tests/**/*.test.{ts,tsx}'];

export const node = defineConfig({
  test: {
    environment: 'node',

    include,
  },
});

const { resolve } = createRequire(import.meta.url);

export const browser = defineConfig({
  esbuild: {
    jsx: 'automatic',
  },

  test: {
    environment: 'happy-dom',

    setupFiles: resolve('@tabula/vitest-config/browserSetup'),

    include,
  },
});
