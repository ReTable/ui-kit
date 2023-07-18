import { UserConfig, mergeConfig } from 'vite';

import { browser } from '@tabula/vitest-config';

export default mergeConfig(browser as UserConfig, {
  resolve: {
    alias: [
      {
        find: /~(.*)$/,
        replacement: `../lib/$1`,
      },
    ],
  },
});
