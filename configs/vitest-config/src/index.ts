import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const include = ['tests/**/*.test.{ts,tsx}'];

export const node = defineConfig({
  test: {
    environment: 'node',

    include,
  },
});

const browserSetup = fileURLToPath(import.meta.resolve('@tabula/vitest-config/browserSetup'));

export const browser = defineConfig({
  esbuild: {
    jsx: 'automatic',
  },

  test: {
    environment: 'happy-dom',

    setupFiles: browserSetup,

    include,
  },
});
