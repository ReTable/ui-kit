// IMPORTANT: Do not require any modules. It can be a problem for tokens export to Sass.

// region Layers

export const layers = ['reset', 'components'] as const;

// endregion

// region Tokens

export const tokens = {
  colors: {
    icons: {
      ai: {
        primary: {
          from: '#02b7a4', // var(--tbl--colors--icons--ai--primary--from)
          to: '#3595ff', // var(--tbl--colors--icons--ai--primary--to)
        },
        secondary: {
          from: '#b2eae4', // var(--tbl--colors--icons--ai--secondary--from)
          to: '#bfe8fa', // var(--tbl--colors--icons--ai--secondary--to)
        },
      },
      clean: {
        primary: '#00b7a2', // var(--tbl--colors--icons--clean--primary)
        secondary: '#b2e9e3', // var(--tbl--colors--icons--clean--secondary)
      },
      output: {
        primary: '#616986', // var(--tbl--colors--icons--output--primary)
        secondary: '#d8dee3', // var(--tbl--colors--icons--output--secondary)
      },
      source: {
        primary: '#616986', // var(--tbl--colors--icons--source--primary)
        secondary: '#d8dee3', // var(--tbl--colors--icons--source--secondary)
      },
      transformation: {
        primary: '#127ff9', // var(--tbl--colors--icons--transformation--primary)
        secondary: '#a0ccfd', // var(--tbl--colors--icons--transformation--secondary)
        tertiary: '#b7d8fd', // var(--tbl--colors--icons--transformation--tertiary)
      },
    },
  },
};

// endregion
