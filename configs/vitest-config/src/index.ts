import { defineConfig } from 'vitest/config';

const include = ['tests/**/*.test.{ts,tsx}'];

export const node = defineConfig({
  test: {
    environment: 'node',

    include,
  },
});

export const browser = defineConfig({
  esbuild: {
    jsx: 'automatic',
  },

  test: {
    environment: 'happy-dom',

    include,
  },
});
