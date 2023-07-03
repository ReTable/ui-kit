import { dirname } from 'node:path';

import { Plugin } from 'esbuild';

import { CssProcessor } from '../../postcss';

import { renderModule } from './renderModule';
import { renderStyle } from './renderStyle';

type Options = {
  processCss: CssProcessor;
};

type CssPluginData = {
  css: string;
  path: string;
};

type JsPluginData = {
  css: string;
  resolveDir: string;
};

const moduleSuffix = '?css-module';

export function stylesPlugin({ processCss }: Options): Plugin {
  return {
    name: 'styles-plugin',

    setup({ initialOptions, onLoad, onResolve, resolve }) {
      const sourcemap = Boolean(initialOptions.sourcemap);
      const sourcesContent = Boolean(initialOptions.sourcesContent);

      onResolve(
        {
          filter: /^~.*\.css$/,
        },
        async ({ path, importer, resolveDir, kind }) =>
          resolve(path.slice(1), {
            importer,
            kind,
            resolveDir,
          }),
      );

      onResolve(
        {
          filter: /^ni:css-module;/,
        },
        ({ pluginData, resolveDir }) => ({
          path: (pluginData as CssPluginData).path,
          pluginData: {
            css: (pluginData as CssPluginData).css,
            resolveDir,
          },
          suffix: moduleSuffix,
        }),
      );

      onLoad(
        {
          filter: /\.(css|pcss|scss)(\?css-module)?$/,
          namespace: 'file',
        },
        async ({ path, pluginData, suffix }) => {
          // Step 1: If file has a suffix of the CSS Module, then just load CSS
          //         as is.

          if (suffix === moduleSuffix) {
            return {
              contents: (pluginData as JsPluginData).css,
              resolveDir: (pluginData as JsPluginData).resolveDir,
              loader: 'css',
            };
          }

          // Step 2: Render a styles.

          const { css: renderedCss, watchFiles } = await renderStyle({
            path,
            sourcemap,
            sourcesContent,
          });

          // Step 3: Process rendered styles with PostCSS.

          const { classNames, css } = await processCss({
            css: renderedCss,
            from: path,
            modules: /\.module\.\w{3,4}$/.test(path),
          });

          // Step 4: If it's a not a CSS module, then load processed CSS as is.

          if (classNames === false) {
            return {
              contents: css,
              loader: 'css',
              watchFiles,
            };
          }

          // Step 5: Render JS module with CSS module import.

          return {
            contents: renderModule({ classNames, css }),
            loader: 'js',
            pluginData: {
              css,
              path,
            },
            resolveDir: dirname(path),
            watchFiles,
          };
        },
      );
    },
  };
}
