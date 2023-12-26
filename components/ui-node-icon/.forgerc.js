export default {
  target: 'browser',
  entry: 'index',
  check: true,
  typings: true,
  svgrComponentName(name) {
    if (name.endsWith('small')) {
      return `Ui${name.slice(3, -5)}SIcon`;
    }

    if (name.endsWith('medium')) {
      return `${name.slice(3, -6)}MIcon`;
    }

    return `${name.slice(3, -5)}LIcon`;
  },
  svgrDisplayName(name) {
    return {
      displayName: name.startsWith('Ui') ? `ui-node-icon(${name})` : name,
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
