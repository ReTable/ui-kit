export default {
  target: 'browser',
  entry: 'index',
  check: true,
  typings: true,
  svgrComponentName(name) {
    return `${name.slice(3)}Icon`;
  },
  svgrDisplayName(name) {
    return {
      displayName: name,
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
