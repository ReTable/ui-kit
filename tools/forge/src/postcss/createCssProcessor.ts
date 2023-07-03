import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import modulesPlugin from 'postcss-modules';

import { CssProcessor } from './cssProcessor';
import { loadConfig } from './loadConfig';

export type CSSModulesOptions = Pick<
  Parameters<typeof modulesPlugin>[0],
  'exportGlobals' | 'generateScopedName' | 'hashPrefix' | 'localsConvention' | 'resolve'
>;

type Options = {
  cssModules: CSSModulesOptions;
  sourcemap: boolean;
  sourcesContent: boolean;
};

export async function createCssProcessor({
  cssModules: cssModulesOptions,
  sourcemap,
  sourcesContent,
}: Options): Promise<CssProcessor> {
  const { options, plugins } = await loadConfig();

  const hasAutoprefixer = plugins.some(
    (plugin) => 'postcssPlugin' in plugin && plugin.postcssPlugin === 'autoprefixer',
  );

  if (!hasAutoprefixer) {
    plugins.unshift(
      autoprefixer({
        flexbox: 'no-2009',
        grid: false,
      }),
    );
  }

  const map = sourcemap
    ? {
        inline: false,
        sourceContent: sourcesContent,
      }
    : false;

  return async ({ css, from, modules = false }) => {
    let classNames: Record<string, string> | false = false;

    const processor = modules
      ? postcss([
          ...plugins,

          modulesPlugin({
            ...cssModulesOptions,

            getJSON(_, json) {
              classNames = json;
            },
          }),
        ])
      : postcss(plugins);

    const result = await processor.process(css, {
      ...options,

      from,
      map,
    });

    return { css: result.css, classNames };
  };
}
