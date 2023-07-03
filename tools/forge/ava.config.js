export default {
  extensions: {
    ts: 'module',
  },
  files: ['tests/*.test.ts'],
  nodeArguments: ['--no-warnings', '--loader=tsx'],
};
