import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { UserConfig, mergeConfig } from 'vite';

import { browser } from '@tabula/vitest-config';

// region Resolver

const rootDir = dirname(fileURLToPath(import.meta.url));

const alias: Alias = {
  find: /^~(.*)/,

  replacement: `$1`,

  customResolver(target, importer) {
    if (importer == null) {
      return null;
    }

    const [ns, pkgName] = relative(rootDir, importer).split(sep);

    const resolvedTarget = target === '' ? 'lib/index.js' : `lib${target}.js`;

    return join(rootDir, ns, pkgName, resolvedTarget);
  },
};

// endregion Resolver

export default mergeConfig(browser as UserConfig, {
  resolve: {
    alias: [alias],
  },
});
