import path from 'node:path';
import url from 'node:url';

import { Alias, UserConfig, mergeConfig } from 'vite';

import { browser } from '@tabula/vitest-config';

// region Resolver

const rootDir = path.dirname(url.fileURLToPath(import.meta.url));

const alias: Alias = {
  find: /^~(.*)/,

  replacement: `$1`,

  customResolver(target, importer) {
    if (importer == null) {
      return null;
    }

    const [ns, pkgName] = path.relative(rootDir, importer).split(path.sep);

    const resolvedTarget = target === '' ? 'lib/index.js' : `lib${target}.js`;

    return path.join(rootDir, ns, pkgName, resolvedTarget);
  },
};

// endregion Resolver

export default mergeConfig(browser as UserConfig, {
  resolve: {
    alias: [alias],
  },
});
