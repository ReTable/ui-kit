export default {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },

  framework: {
    name: '@storybook/react-vite',

    options: {
      fastRefresh: true,
    },
  },

  staticDirs: ['./public'],

  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
};
