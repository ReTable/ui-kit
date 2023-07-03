import { Plugin } from 'esbuild';

import { typescript } from './typescript';

export function typescriptPlugin(declarations = false): Plugin {
  return {
    name: 'typescript-plugin',

    setup({ onStart }) {
      onStart(async () => typescript(declarations));
    },
  };
}
