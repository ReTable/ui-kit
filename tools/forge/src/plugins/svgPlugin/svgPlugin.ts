import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import { transform } from '@svgr/core';
import { Plugin } from 'esbuild';
import { optimize } from 'svgo';

import { getOriginalPath, isVanillaCss } from '../vanillaExtractPlugin';

type PluginData = {
  path: string;
};

const svgrSuffix = '?svgr';

export function svgPlugin(): Plugin {
  return {
    name: 'svg-plugin',

    setup({ initialOptions, onLoad, onResolve }) {
      const minify = Boolean(initialOptions.minify);

      onResolve(
        {
          filter: /^ni:svgr;/,
        },
        ({ pluginData }) => ({ path: (pluginData as PluginData).path }),
      );

      onResolve(
        {
          filter: /\.svg$/,
        },
        ({ importer, kind, path }) => {
          const importerPath = isVanillaCss(importer) ? getOriginalPath(importer) : importer;

          const absPath = resolve(dirname(importerPath), path);

          const isCSSImport = kind === 'import-rule' || kind === 'url-token';

          return isCSSImport ? { path: absPath } : { path: absPath, suffix: svgrSuffix };
        },
      );

      onLoad(
        {
          filter: /\.svg(\?svgr)?$/,
        },
        async ({ path, suffix }) => {
          const svg = await readFile(path, 'utf8');

          if (suffix !== svgrSuffix) {
            return {
              contents: minify ? optimize(svg).data : svg,
              loader: 'file',
              resolveDir: dirname(path),
            };
          }

          const component = await transform(
            svg,
            {
              exportType: 'named',
              namedExport: 'ReactComponent',
              memo: true,
              plugins: ['@svgr/plugin-jsx'],
              svgo: minify,
            },
            {
              filePath: path,
            },
          );

          const base64 = createHash('sha256').update(component).digest('base64url');
          const url = `ni:svgr;${base64}`;

          const contents = [
            `import svgUrl from ${JSON.stringify(url)};`,
            'export default svgUrl;',
            component,
          ].join('\n');

          return {
            contents,
            loader: 'jsx',
            pluginData: {
              path,
            },
            resolveDir: dirname(path),
          };
        },
      );
    },
  };
}
