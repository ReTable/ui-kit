// IMPORTANT: Do not require any modules. It can be a problem for tokens export to Sass.

// region Helpers

type FontOptions = {
  family: string;
  isUppercase?: boolean;
  letterSpacing?: number;
  lineHeight: number;
  size: number;
  weight: number | 'normal';
};

export type Font = {
  font: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  letterSpacing: string;
  lineHeight: string;
  textTransform: string;
};

function font({ family, isUppercase, letterSpacing, lineHeight, size, weight }: FontOptions): Font {
  return {
    font: `normal ${weight} ${size}px/${lineHeight}px ${family}`,
    fontFamily: family,
    fontSize: `${size}px`,
    fontWeight: weight.toString(),
    letterSpacing: letterSpacing == null ? 'normal' : `${letterSpacing}em`,
    lineHeight: `${lineHeight}px`,
    textTransform: isUppercase ? 'uppercase' : 'none',
  };
}

type SansSerifOptions = Pick<
  FontOptions,
  'isUppercase' | 'letterSpacing' | 'lineHeight' | 'size'
> & {
  weight: 700 | 600 | 500 | 400;
};

const SANS_SERIF_FAMILY = `${JSON.stringify('Inter var')}, sans-serif`;

function sansSerif(options: SansSerifOptions): Font {
  return font({ family: SANS_SERIF_FAMILY, ...options });
}

type MonospaceOptions = {
  lineHeight: number;
  size: number;
  weight: 700 | 500 | 'normal';
};

const MONOSPACE_FAMILY = `${JSON.stringify('IBM Plex Mono')}, monospace`;

function monospace(options: MonospaceOptions): Font {
  return font({ family: MONOSPACE_FAMILY, ...options });
}

// endregion

// region Layers

export const layers = ['reset', 'components'] as const;

// endregion

// region Tokens

export const tokens = {
  colors: {
    accent: {
      100: '#127ff9',
      30: '#c8e1fd',
      10: '#e7f2fe',
    },

    accentAlpha: {
      70: 'rgba(18, 127, 249, 0.7)',
      60: 'rgba(18, 127, 249, 0.6)',
      40: 'rgba(18, 127, 249, 0.4)',
      15: 'rgba(18, 127, 249, 0.15)',
      10: 'rgba(18, 127, 249, 0.1)',
    },

    accentSecondaryGrey: {
      800: '#3c3f4a',
      600: '#808596',
      400: '#b0b3bd',
    },

    accentShades: {
      secondary1: '#f1f5fa',
      secondary2: '#e2ebf4',
      secondary3: '#dbe4ee',
      secondary4: '#bdcee1',
    },

    background: {
      canvas: '#e7e7e7',
      controlsDetails: '#f2f2f2',
      data: '#fff',
      dropdown: '#1a1a1a',
      panels: '#f8f8f8',
      primaryContent: '#fff',
      table: '#f8f8f8',
    },

    status: {
      error: 'rgba(229, 93, 93, 0.1)',
      idle: 'rgba(0, 0, 0, 0.05)',
      running: 'rgba(18, 127, 249, 0.1)',
      success: 'rgba(0, 183, 162, 0.1)',
      warning: 'rgba(226, 158, 56, 0.1)',
    },

    borderControl: {
      canvasFlowPath: 'rgba(97, 105, 134, 0.3)',
      dangerFocus: 'rgba(229, 93, 93, 0.4)',
      default: 'rgba(0, 0, 0, 0.1)',
      error: 'rgba(183, 76, 81, 0.4)',
      errorFocus: 'rgba(183, 76, 81, 0.7)',
      focus2: 'rgba(18, 127, 249, 0.4)',
      focus: 'rgba(0, 0, 0, 0.4)',
      hover: 'rgba(0, 0, 0, 0.2)',
      selection: '#127ff9',
      warning: 'rgba(226, 158, 56, 0.4)',
      warningFocus: 'rgba(226, 158, 56, 0.7)',
    },

    brand: {
      postgres: '#38609b',
      salesforce: '#67a3e5',
      snowflake: '#29b5e8',
      tabulaDrive: '#3c3f4a',
      tomatDrive: '#da4141',
    },

    chart: {
      0: '#5cb9ed',
      1: '#3e5eb0',
      2: '#bc5090',
      3: '#5fb582',
      4: '#c0c23a',
      5: '#f1b33f',
      6: '#fc7d7c',
      7: '#796fb8',
      8: '#c06ddd',
      9: '#5b98a5',
      10: '#8cdbcd',
      11: '#ace9fd',
      12: '#874b6e',
      13: '#9c9f1c',
      14: '#f99044',
      15: '#dd5858',
      16: '#574ca0',
      17: '#9443b0',
      18: '#127ff9',
      19: '#71b2fb',
      20: '#a0ccfd',
      21: '#c8e1fd',
      22: '#dbecfe',
      23: '#ebebeb',
      24: '#b0b3bd',
      25: '#808596',
      26: '#3c3f4a',
    },

    code: {
      backgroundIconData: '#b0b3bd',
      backgroundIconFunction: '#89a8cb',
      backgroundRegexHelpLetters: 'rgba(159, 86, 0, 0.15)',
      columnBackground: '#5cb9ed',
      function: '#266cba',
      functionOutside: 'rgba(38, 108, 186, 0.5)',
      numbers: '#937200',
      numbersOutside: 'rgba(147, 114, 0, 0.5)',
      regex: '#9f5600',
      sql: '#de5f02',
      stringLight: '#1b7840',
      stringLightOutsideFocus: 'rgba(27, 120, 64, 0.5)',
    },

    codeColumns: {
      0: '#545761',
      1: '#00607e',
      2: '#8a1dbb',
      3: '#496001',
      4: '#982b4c',
      5: '#2a4bba',
      6: '#864902',
    },

    columnMenu: {
      press: 'rgba(18, 127, 249, 0.2)',
      hover: 'rgba(18, 127, 249, 0.15)',
    },

    content: {
      primary: '#1a1a1a',
      secondary: '#696969',
      tertiary: '#909090',

      disabled: '#b3b3b3',
      disabledLight: '#ebebeb',

      contrast: '#fff',
      contrastSecondary: 'rgba(255, 255, 255, 0.7)',
      contrastTertiary: 'rgba(255, 255, 255, 0.5)',
      contrastDisabled: 'rgba(255, 255, 255, 0.5)',

      accentActive: '#127ff9',
      accentActiveHover: '#3594ff',

      counting: '#a4b4b2',
      placeholder: '#909090',

      success: '#00b7a2',
      warning: '#de9425',
      warningLarge: '#f2a93c',
      error: '#c33232',
    },

    fillControl: {
      accentSecondary: '#00b7a2',
      ai: {
        from: '#01b7a3',
        to: '#3595ff',
      },
      aiPrimaryHover: {
        from: '#14d1bc',
        to: '#1bb8ea',
      },
      aiSecondaryHover: {
        from: '#a27bf4',
        to: '#7291ff',
      },
      aiPrimaryPressed: {
        from: '#02aa97',
        to: '#0095c4',
      },
      aiSecondaryPressed: {
        from: '#8157dd',
        to: '#3a66ff',
      },
      btnDanger: '#e55d5d',
      btnDangerHover: '#f27373',
      btnDangerPressed: '#d22e2e',
      btnDisabled: 'rgba(51, 51, 51, 0.05)',
      btnPrimary: '#616986',
      btnPrimaryHover: '#707896',
      btnPrimaryPressed: '#4f5877',
      checkbox: '#616986',
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
      tomat: {
        primary: '#91e9c9',
        secondary: '#ffffff',
      },
      transformation: {
        primary: '#127ff9',
        secondary: '#a0ccfd',
        tertiary: '#b7d8fd',
      },
    },

    indexed: {
      0: '#5cb9ed',
      1: '#3e5eb0',
      2: '#db6899',
      3: '#5fb582',
      4: '#c0c23a',
      5: '#f1b33f',
      6: '#fc7d7c',
      7: '#bc5090',
      8: '#c06ddd',
      9: '#796fb8',
      10: '#8cdbcd',
      11: '#ace9fd',
      12: '#bda8fd',
      13: '#5b98a5',
    },

    neutral: {
      1000: '#000000',
      800: '#1a1a1a',
      600: '#696969',
      500: '#909090',
      300: '#b3b3b3',
      200: '#cccccc',
      150: '#dddddd',
      100: '#ebebeb',
      50: '#f2f2f2',
      30: '#f8f8f8',
      0: '#ffffff',
    },

    neutralAlpha: {
      40: 'rgba(0, 0, 0, 0.4)',
      20: 'rgba(0, 0, 0, 0.2)',
      15: 'rgba(0, 0, 0, 0.15)',
      10: 'rgba(0, 0, 0, 0.1)',
      7: 'rgba(0, 0, 0, 0.07)',
      5: 'rgba(0, 0, 0, 0.05)',
      3: 'rgba(0, 0, 0, 0.03)',
    },

    table: {
      labelPreview: '#808596',
      backgroundHeader: '#ffffff',
      backgroundHeaderHover: '#f8f8f8',
      borderHeader: '#f2f2f2',
      borderCells: '#f2f2f2',
      backgroundCells: '#ffffff',
      labelNew: '#00b7a2',
      borderNew: '#d1e8e5',
      backgroundNew: '#f0f9f8',
      labelRemove: '#da5656',
      borderRemove: '#f3d5d5',
      backgroundRemove: '#fbeeee',
      selectionLabel: '#127ff9',
      borderSelection: '#c8e1fd',
      backgroundSelection: '#edf5ff',
      sourceLabel: '#3c3d4a',
      borderSource: '#dddddd',
      backgroundSource: '#f8f8f8',
    },

    whiteAlpha: {
      80: 'rgba(255, 255, 255, 0.8)',
      70: 'rgba(255, 255, 255, 0.7)',
      50: 'rgba(255, 255, 255, 0.5)',
      30: 'rgba(255, 255, 255, 0.3)',
      20: 'rgba(255, 255, 255, 0.2)',
      15: 'rgba(255, 255, 255, 0.15)',
      10: 'rgba(255, 255, 255, 0.1)',
    },

    shadow: {
      16: 'rgba(0, 0, 0, 0.16)',
      12: 'rgba(0, 0, 0, 0.12)',
      8: 'rgba(0, 0, 0, 0.08)',
      6: 'rgba(0, 0, 0, 0.06)',
      4: 'rgba(0, 0, 0, 0.04)',
    },
  },

  duration: {
    fast: {
      1: '70ms',
      2: '110ms',
    },
    moderate: {
      1: '150ms',
      2: '240ms',
    },
    slow: {
      1: '400ms',
      2: '700ms',
    },
  },

  easing: {
    standard: {
      productive: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
      expressive: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    },
    entrance: {
      productive: 'cubic-bezier(0, 0, 0.38, 0.9)',
      expressive: 'cubic-bezier(0, 0, 0.3, 1)',
    },
    exit: {
      productive: 'cubic-bezier(0.2, 0, 1, 0.9)',
      expressive: 'cubic-bezier(0.4, 0.14, 1, 1)',
    },
  },

  fonts: {
    sansSerif: {
      bold12: sansSerif({
        lineHeight: 16,
        size: 12,
        weight: 700,
      }),
      bold10: sansSerif({
        lineHeight: 12,
        size: 10,
        weight: 700,
      }),

      semiBold18: sansSerif({
        letterSpacing: -0.015,
        lineHeight: 24,
        size: 18,
        weight: 600,
      }),
      semiBold14: sansSerif({
        lineHeight: 22,
        size: 14,
        weight: 600,
      }),
      semiBold12: sansSerif({
        lineHeight: 16,
        size: 12,
        weight: 600,
      }),
      semiBold10: sansSerif({
        isUppercase: true,
        letterSpacing: 0.08,
        lineHeight: 16,
        size: 10,
        weight: 600,
      }),

      medium32: sansSerif({
        letterSpacing: -0.015,
        lineHeight: 40,
        size: 32,
        weight: 500,
      }),
      medium24: sansSerif({
        letterSpacing: -0.015,
        lineHeight: 32,
        size: 24,
        weight: 500,
      }),
      medium18: sansSerif({
        lineHeight: 24,
        size: 18,
        weight: 500,
      }),
      medium14: sansSerif({
        lineHeight: 22,
        size: 14,
        weight: 500,
      }),
      medium12: sansSerif({
        lineHeight: 16,
        size: 12,
        weight: 500,
      }),
      medium10: sansSerif({
        lineHeight: 12,
        size: 10,
        weight: 500,
      }),

      regular24: sansSerif({
        lineHeight: 32,
        size: 24,
        weight: 400,
      }),
      regular18: sansSerif({
        lineHeight: 24,
        size: 18,
        weight: 400,
      }),
      regular14: sansSerif({
        lineHeight: 22,
        size: 14,
        weight: 400,
      }),
      regular12: sansSerif({
        lineHeight: 16,
        size: 12,
        weight: 400,
      }),
    },

    monospace: {
      bold12: monospace({
        lineHeight: 16,
        size: 12,
        weight: 700,
      }),

      bold10: monospace({
        lineHeight: 12,
        size: 10,
        weight: 700,
      }),

      semiBold14: monospace({
        lineHeight: 20,
        size: 14,
        weight: 500,
      }),

      semiBold12: monospace({
        lineHeight: 16,
        size: 12,
        weight: 500,
      }),

      regular12: monospace({
        lineHeight: 16,
        size: 12,
        weight: 'normal',
      }),

      regular10: monospace({
        lineHeight: 16,
        size: 10,
        weight: 'normal',
      }),
    },
  },
};

// endregion
