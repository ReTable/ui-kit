// IMPORTANT: Do not require any modules. It can be a problem for tokens export to Sass.

// region Layers

export const layers = ['reset', 'components'] as const;

// endregion

// region Tokens

export const tokens = {
  colors: {
    brand: {
      postgres: '#38609b',
      snowflake: '#29b5e8',
    },
    icons: {
      ai: {
        primary: {
          from: '#02b7a4',
          to: '#3595ff',
        },
        secondary: {
          from: '#b2eae4',
          to: '#bfe8fa',
        },
      },
      clean: {
        primary: '#00b7a2',
        secondary: '#b2e9e3',
      },
      output: {
        primary: '#616986',
        secondary: '#d8dee3',
      },
      source: {
        primary: '#616986',
        secondary: '#d8dee3',
      },
      transformation: {
        primary: '#127ff9',
        secondary: '#a0ccfd',
        tertiary: '#b7d8fd',
      },
      disabled: {
        primary: '#b3b3b3',
        secondary: '#ebebeb',
      },
    },
  },
};

// endregion
