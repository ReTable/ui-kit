// IMPORTANT: Do not require any modules. It can be a problem for tokens export to Sass.

// region Helpers

function font(family: string, weight: number | string, size: number, lineHeight: number) {
  return `normal ${weight} ${size}px/${lineHeight}px ${family}`;
}

function sansSerif(weight: 700 | 600 | 500 | 400, size: number, lineHeight: number) {
  return font(`${JSON.stringify('Inter')}, sans-serif`, weight, size, lineHeight);
}

function monospace(weight: 700 | 500 | 'normal', size: number, lineHeight: number) {
  return font(`${JSON.stringify('IBM Plex Mono')}, monospace`, weight, size, lineHeight);
}

// endregion

// region Layers

export const layers = ['reset', 'components'] as const;

// endregion

// region Tokens

export const tokens = {
  fonts: {
    sansSerif: {
      bold10: {
        font: sansSerif(700, 10, 12),
      },

      semiBold18: {
        font: sansSerif(600, 18, 24),
        letterSpacing: '-0.015em',
      },
      semiBold14: {
        font: sansSerif(600, 14, 22),
      },
      semiBold12: {
        font: sansSerif(600, 12, 16),
      },
      semiBold10: {
        font: sansSerif(600, 10, 16),
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      },

      medium32: {
        font: sansSerif(500, 32, 40),
        letterSpacing: '-0.015em',
      },
      medium24: {
        font: sansSerif(500, 24, 32),
        letterSpacing: '-0.015em',
      },
      medium18: {
        font: sansSerif(500, 18, 24),
      },
      medium14: {
        font: sansSerif(500, 14, 22),
      },
      medium12: {
        font: sansSerif(500, 12, 16),
      },
      medium10: {
        font: sansSerif(500, 10, 12),
      },

      regular24: {
        font: sansSerif(400, 24, 32),
      },
      regular18: {
        font: sansSerif(400, 18, 24),
      },
      regular14: {
        font: sansSerif(400, 14, 22),
      },
      regular12: {
        font: sansSerif(400, 12, 16),
      },
    },

    monospace: {
      bold12: {
        font: monospace(700, 12, 16),
      },
      bold10: {
        font: monospace(700, 10, 12),
      },

      semiBold14: {
        font: monospace(500, 14, 20),
      },
      semiBold12: {
        font: monospace(500, 12, 16),
      },

      regular12: {
        font: monospace('normal', 12, 16),
      },
      regular10: {
        font: monospace('normal', 10, 16),
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
