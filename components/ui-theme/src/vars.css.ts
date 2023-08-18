// IMPORTANT: Do not require any modules. It can be a problem for tokens export to Sass.
// region Layers

export const layers = ['reset', 'components'] as const;

// endregion

// region Tokens

export const sansSerif = `${JSON.stringify('Inter')}, sans-serif`;

export const monospace = `${JSON.stringify('IBM Plex Mono')}, monospace`;

export const tokens = {
  fonts: {
    sansSerif: {
      semiBold18: {
        font: `normal 600 18px/24px ${sansSerif}`,
        letterSpacing: '-0.015em',
      },
      semiBold14: {
        font: `normal 600 14px/22px ${sansSerif}`,
      },
      semiBold12: {
        font: `normal 600 12px/16px ${sansSerif}`,
      },
      semiBold10: {
        font: `normal 600 10px/16px ${sansSerif}`,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },

      medium32: {
        font: `normal 500 32px/40px ${sansSerif}`,
        letterSpacing: '-0.015em',
      },
      medium24: {
        font: `normal 500 24px/32px ${sansSerif}`,
        letterSpacing: '-0.015em',
      },
      medium18: {
        font: `normal 500 18px/24px ${sansSerif}`,
      },
      medium14: {
        font: `normal 500 14px/22px ${sansSerif}`,
      },
      medium12: {
        font: `normal 500 12px/16px ${sansSerif}`,
      },
      medium10: {
        font: `normal 500 10px/12px ${sansSerif}`,
      },

      regular24: {
        font: `normal 400 24px/32px ${sansSerif}`,
      },
      regular18: {
        font: `normal 400 18px/24px ${sansSerif}`,
      },
      regular14: {
        font: `normal 400 14px/22px ${sansSerif}`,
      },
      regular12: {
        font: `normal 400 12px/16px ${sansSerif}`,
      },
    },

    monospace: {
      bold12: {
        font: `normal 700 12px/16px ${monospace}`,
      },
      bold10: {
        font: `normal 700 10px/12px ${monospace}`,
      },

      semiBold14: {
        font: `normal 500 14px/20px ${monospace}`,
      },
      semiBold12: {
        font: `normal 500 12px/16px ${monospace}`,
      },

      regular12: {
        font: `normal normal 12px/16px ${monospace}`,
      },
      regular10: {
        font: `normal normal 10px/16px ${monospace}`,
      },
    },
  },
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
      disabled: {
        primary: '#b3b3b3',
        secondary: '#ebebeb',
      },
      group: {
        clean: '#aae5df',
        transformation: '#c2d8ef',
      },
      misc: {
        folder: '#5cb9ed',
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
    },
  },
};

// endregion
