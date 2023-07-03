import { BuildOptions } from 'esbuild';

import {
  cssAutoImportPlugin,
  reactDocgenPlugin,
  stylesPlugin,
  svgPlugin,
  typescriptPlugin,
  vanillaExtractPlugin,
} from '../plugins';
import { createCssProcessor } from '../postcss';
import { Platform } from '../types';

type BrowserOptions = {
  name: string;
  production: boolean;
  repositoryRoot: string;
  storybook: boolean;
};

const extensions = [
  'bmp',
  'gif',
  'ico',
  'jpeg',
  'jpg',
  'png',
  'webp',
  'eot',
  'otf',
  'ttf',
  'woff',
  'woff2',
];

const staticLoaders: NonNullable<BuildOptions['loader']> = {};

for (const extension of extensions) {
  staticLoaders[`.${extension}`] = 'file';
}

/* eslint-disable no-param-reassign */

async function applyBrowserOptions(
  buildOptions: BuildOptions,
  { name, production, repositoryRoot, storybook }: BrowserOptions,
) {
  const processCss = await createCssProcessor({
    cssModules: {
      exportGlobals: true,
      generateScopedName: production ? '[hash:base64]' : `${name}//[path][name]__[local]`,
      hashPrefix: name,
      localsConvention: 'camelCaseOnly',
    },
    sourcemap: Boolean(buildOptions.sourcemap),
    sourcesContent: Boolean(buildOptions.sourcesContent),
  });

  buildOptions.assetNames = '[dir]/[name]';

  buildOptions.jsx = 'automatic';
  buildOptions.jsxDev = !production;

  buildOptions.loader = staticLoaders;

  buildOptions.metafile = true;

  buildOptions.platform = 'browser';
  buildOptions.target = 'esnext';

  buildOptions.plugins = [
    cssAutoImportPlugin(),
    stylesPlugin({ processCss }),
    svgPlugin(),
    vanillaExtractPlugin(),
  ];

  if (storybook) {
    buildOptions.plugins.push(reactDocgenPlugin(repositoryRoot));
  }
}

function applyNodeOptions(buildOptions: BuildOptions) {
  buildOptions.platform = 'node';
  buildOptions.target = 'node18';
}

type Options = {
  check: boolean;
  name: string;
  packageRoot: string;
  platform: Platform;
  production: boolean;
  repositoryRoot: string;
  storybook: boolean;
  typings: boolean;
};

export async function createBuildOptions({
  check,
  name,
  packageRoot,
  platform,
  production,
  repositoryRoot,
  storybook,
  typings,
}: Options): Promise<BuildOptions> {
  const options: BuildOptions = {
    absWorkingDir: packageRoot,
    bundle: true,
    entryPoints: ['src/index.ts'],
    format: 'esm',
    logLevel: 'info',
    outfile: 'lib/index.js',
    packages: 'external',
    sourcemap: true,
    sourcesContent: true,
    treeShaking: true,
  };

  if (production) {
    options.drop = ['debugger'];
  }

  switch (platform) {
    case 'browser': {
      await applyBrowserOptions(options, { name, production, repositoryRoot, storybook });

      break;
    }
    case 'node': {
      applyNodeOptions(options);

      break;
    }
  }

  if (check) {
    options.plugins = options.plugins ?? [];

    options.plugins.push(typescriptPlugin(typings));
  }

  return options;
}
