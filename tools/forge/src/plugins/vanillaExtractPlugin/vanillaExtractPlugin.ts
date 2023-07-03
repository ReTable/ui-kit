import { dirname, resolve } from 'node:path';

import { vanillaExtractPlugin as officialPlugin } from '@vanilla-extract/esbuild-plugin';
import { Plugin } from 'esbuild';

type PluginData = {
  importPath: string;
};

const staticOptions = {
  filter: /\.(bmp|gif|ico|jpeg|jpg|png|svg|webp|eot|otf|ttf|woff|woff2)$/,
};

// NOTE: The old `esbuild` has a little different `entries` format, but it's not a critical for our bundler.
export function vanillaExtractPlugin(): Plugin {
  return officialPlugin({
    esbuildOptions: {
      plugins: [
        {
          name: 'vanilla-extract-plugin/static',

          setup({ onLoad, onResolve }) {
            onResolve(staticOptions, ({ importer, path }) => ({
              path: resolve(dirname(importer), path),
              pluginData: {
                importPath: path,
              },
            }));

            onLoad(staticOptions, ({ pluginData }) => ({
              contents: `export default ${JSON.stringify((pluginData as PluginData).importPath)};`,
              loader: 'js',
            }));
          },
        },
      ],
    },
  }) as unknown as Plugin;
}
