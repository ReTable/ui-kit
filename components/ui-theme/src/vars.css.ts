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
    accent: {
      100: '#127ff9',
      30: '#c8e1fd',
      10: '#e7f2fe',
    },

    accentAlpha: {
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
      contrastDisabled: 'rgba(255, 255, 255, 0.7)',
      contrastSecondary: 'rgba(255, 255, 255, 0.3)',

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
      btnDanger: '#e55d5d',
      btnDangerHover: '#f27373',
      btnDangerPressed: '#d22e2e',
      btnDisabled: 'rgba(51, 51, 51, 0.05)',
      btnPrimary: '#616986',
      btnPrimaryHover: '#707896',
      btnPrimaryPressed: '#4f5877',
      checkbox: '#89a8cb',
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

    indexed: {
      0: '#5cb9ed',
      1: '#3e5eb0',
      2: '#db7ba3',
      3: '#97c23a',
      4: '#f1b33f',
      5: '#fc7d7c',
      6: '#bc5090',
      7: '#c06ddd',
      8: '#796fb8',
      9: '#bda8fd',
      10: '#7ec99c',
      11: '#8cdbcd',
      12: '#ace9fd',
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
  },
};

// endregion
