import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { mergeConfig } from 'vite';

const ROOT_DIR = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '../');

function searchStories(workspace) {
  try {
    const workspaceDir = path.join(ROOT_DIR, workspace);

    const stories = [];

    for (const entry of fs.readdirSync(workspaceDir)) {
      const packageDir = path.join(workspaceDir, entry);

      let packageJson;

      // NOTE: A developer can work on few branches simultaneously, including work on a new package. If switch between
      //       branches in that case, directory with build artifacts of a new package leaved by Git, and break Storybook
      //       build.
      //
      //       If directory have no `package.json`, then just ignore it.
      try {
        packageJson = require(path.join(packageDir, 'package.json'));
      } catch {
        continue;
      }

      const [_, name] = packageJson.name.split('/');

      stories.push({
        directory: packageDir,
        titlePrefix: `${workspace}/${name}@${packageJson.version}`,
        files: 'stories/**/*.@(mdx|stories.@(mdx|ts|tsx))',
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

    const [ns, pkgName] = path.relative(ROOT_DIR, importer).split(path.sep);

    const resolvedTarget = target === '' ? 'lib/index.js' : `lib${target}.js`;

    return path.join(ROOT_DIR, ns, pkgName, resolvedTarget);
  },
};

export default {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
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
      directory: path.join(ROOT_DIR, 'contributing'),
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

  logLevel: 'debug',
};
