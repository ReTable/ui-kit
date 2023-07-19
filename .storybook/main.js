import { readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { capitalCase } from 'change-case';
import { mergeConfig } from 'vite';

const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '../');

function searchStories(workspace) {
  try {
    const workspaceDir = join(ROOT_DIR, workspace);

    const stories = [];

    for (const entry of readdirSync(workspaceDir)) {
      const packageDir = join(workspaceDir, entry);
      const packageJson = require(join(packageDir, 'package.json'));

      const [_, name] = packageJson.name.split('/');

      stories.push({
        directory: packageDir,
        titlePrefix: `${capitalCase(workspace)}/${name}@${packageJson.version}`,
        files: 'stories/**/*.stories.@(mdx|ts|tsx)',
      });
    }

    return stories;
  } catch {
    return [];
  }
}

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

  stories: [...searchStories('components'), ...searchStories('hooks')],

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: /~(.*)$/,
            replacement: `../lib/$1`,
          },
        ],
      },
    });
  },
};
