export default {
  target: 'browser',
  entry: 'index',
  check: true,
  typings: true,
  postBuild: 'node ../../scripts/convert-forge-output-to-mjs.mjs',
  svgrComponentName(name) {
    return `Ui${name.slice(3)}Icon`;
  },
  svgrDisplayName(name) {
    return {
      displayName: `ui-separator-icon(${name})`,
      isDebugOnly: true,
    };
  },
  build: {
    production: true,
  },
  watch: {
    production: false,
    storybook: true,
  },
};
