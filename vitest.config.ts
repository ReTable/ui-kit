import path from 'node:path';
import url from 'node:url';

import { Alias, UserConfig, mergeConfig } from 'vite';

import { browser } from '@tabula/vitest-config';

// region Resolver

const rootDir = path.dirname(url.fileURLToPath(import.meta.url));

const alias: Alias = {
  find: /^~$/,
  replacement: `../lib/$1`,
  customResolver(_, importer) {
    if (importer == null) {
      return null;
    }

    const [ns, pkgName] = path.relative(rootDir, importer).split(path.sep);

    return path.join(rootDir, ns, pkgName, 'lib/index.js');
  },
};

// endregion Resolver

export default mergeConfig(browser as UserConfig, {
  resolve: {
    alias: [alias],
  },
});
