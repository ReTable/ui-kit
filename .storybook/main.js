import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';

const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../');

function searchStories(workspace) {
  try {
    const workspaceDir = join(ROOT_DIR, workspace);

    const stories = [];

    for (const entry of readdirSync(workspaceDir)) {
      const packageDir = join(workspaceDir, entry);

      let packageJson;

      // NOTE: A developer can work on few branches simultaneously, including work on a new package. If switch between
      //       branches in that case, directory with build artifacts of a new package leaved by Git, and break Storybook
      //       build.
      //
      //       If directory have no `package.json`, then just ignore it.
      try {
        packageJson = JSON.parse(readFileSync(join(packageDir, 'package.json'), 'utf8'));
      } catch {
        continue;
      }

      const [_, name] = packageJson.name.split('/');

      stories.push({
        directory: packageDir,
        titlePrefix: `${workspace}/${name}@${packageJson.version}`,
        files: 'stories/**/*.@(mdx|stories.@(ts|tsx))',
      });
    }

    return stories;
  } catch {
    return [];
  }
}

const alias = {
  find: /^~(.*)/,

  replacement: `$1`,

  customResolver(target, importer) {
    if (importer == null) {
      return null;
    }

    const [ns, pkgName] = relative(ROOT_DIR, importer).split(sep);

    const resolvedTarget = target === '' ? 'lib/index.mjs' : `lib${target}.mjs`;

    return join(ROOT_DIR, ns, pkgName, resolvedTarget);
  },
};

export default {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],

  core: {
    disableTelemetry: true,
  },

  framework: {
    name: '@storybook/react-vite',

    options: {
      fastRefresh: true,
    },
  },

  staticDirs: ['./public'],

  stories: [
    ...searchStories('components'),
    ...searchStories('hooks'),
    ...searchStories('libraries'),

    {
      directory: join(ROOT_DIR, 'contributing'),
      titlePrefix: `Contributing`,
      files: '**/*.mdx',
    },
  ],

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],

      resolve: {
        alias: [alias],
      },
    });
  },
};
