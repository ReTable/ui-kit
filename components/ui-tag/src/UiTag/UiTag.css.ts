import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region Themes

export const size = createThemeContract({
  root: {
    height: null,
  },

  body: {
    horizontalPadding: null,
    leftPaddingWhenIcon: null,
    rightPaddingWhenRemove: null,
    gap: null,
    boxShadow: null,
  },

  remove: {
    position: {
      right: null,
    },
    focus: {
      outlineOffset: null,
    },
  },
});

export const variant = createThemeContract({
  root: {
    color: null,
  },

  body: {
    default: {
      backgroundColor: null,
    },
    hover: {
      backgroundColor: null,
    },
    active: {
      backgroundColor: null,
    },
    disabled: {
      backgroundColor: null,
    },
  },

  remove: {
    default: {
      backgroundColor: null,
      color: null,
    },
    focus: {
      outlineColor: null,
    },
    hover: {
      color: null,
    },
    active: {
      backgroundColor: null,
    },
  },
});

// endregion Themes

// region States & Variants

export const isDisabled = style({});

export const sizes = styleVariants(
  {
    small: {
      root: {
        height: '20px',
      },
      body: {
        horizontalPadding: '8px',
        leftPaddingWhenIcon: '4px',
        rightPaddingWhenRemove: '24px',
        gap: '4px',
        boxShadow: `
          0 1px 12px 0 ${uiTheme.colors.shadow['4']}
        `,
      },
      remove: {
        position: {
          right: '4px',
        },
        focus: {
          outlineOffset: '-2px',
        },
      },
    },

    medium: {
      root: {
        height: '28px',
      },
      body: {
        horizontalPadding: '12px',
        leftPaddingWhenIcon: '6px',
        rightPaddingWhenRemove: '28px',
        gap: '4px',
        boxShadow: `
          0 1px 12px 0 ${uiTheme.colors.shadow['4']}
        `,
      },
      remove: {
        position: {
          right: '4px',
        },
        focus: {
          outlineOffset: '0',
        },
      },
    },

    large: {
      root: {
        height: '32px',
      },
      body: {
        horizontalPadding: '16px',
        leftPaddingWhenIcon: '12px',
        rightPaddingWhenRemove: '30px',
        gap: '6px',
        boxShadow: `
          0 1px 2px 0 ${uiTheme.colors.shadow['4']},
          0 4px 12px 0 ${uiTheme.colors.shadow['6']}
        `,
      },
      remove: {
        position: {
          right: '8px',
        },
        focus: {
          outlineOffset: '0',
        },
      },
    },
  },
  (vars) => ({
    '@layer': {
      [uiLayers.components]: {
        vars: assignVars(size, vars),
      },
    },
  }),
);

export const variants = styleVariants(
  {
    accent: {
      root: {
        color: uiTheme.colors.content.contrast,
      },

      body: {
        default: {
          backgroundColor: uiTheme.colors.accentAlpha['60'],
        },
        hover: {
          backgroundColor: uiTheme.colors.accentAlpha['70'],
        },
        active: {
          backgroundColor: uiTheme.colors.accentAlpha['70'],
        },
        disabled: {
          backgroundColor: uiTheme.colors.accentAlpha['60'],
        },
      },

      remove: {
        default: {
          backgroundColor: 'transparent',
          color: uiTheme.colors.whiteAlpha['70'],
        },
        focus: {
          outlineColor: uiTheme.colors.whiteAlpha['30'],
        },
        hover: {
          color: uiTheme.colors.whiteAlpha['80'],
        },
        active: {
          backgroundColor: uiTheme.colors.whiteAlpha['10'],
        },
      },
    },
    contrast: {
      root: {
        color: uiTheme.colors.content.primary,
      },

      body: {
        default: {
          backgroundColor: uiTheme.colors.background.primaryContent,
        },
        hover: {
          backgroundColor: uiTheme.colors.background.panels,
        },
        active: {
          backgroundColor: uiTheme.colors.background.controlsDetails,
        },
        disabled: {
          backgroundColor: uiTheme.colors.background.controlsDetails,
        },
      },

      remove: {
        default: {
          backgroundColor: 'transparent',
          color: uiTheme.colors.content.tertiary,
        },
        focus: {
          outlineColor: uiTheme.colors.borderControl.focus2,
        },
        hover: {
          color: uiTheme.colors.content.primary,
        },
        active: {
          backgroundColor: uiTheme.colors.background.panels,
        },
      },
    },
  },
  (vars) => ({
    '@layer': {
      [uiLayers.components]: {
        vars: assignVars(variant, vars),
      },
    },
  }),
);

// endregion States & Variants

// region Styles

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: 'fit-content',
      height: size.root.height,

      borderRadius: '6px',

      color: variant.root.color,
    },
  },
});

export const icon = style({});

export const remove = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '50%',
      right: size.remove.position.right,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: '16px',
      height: '16px',

      padding: '0',

      backgroundColor: variant.remove.default.backgroundColor,
      borderRadius: '2px',
      border: 'none',

      color: variant.remove.default.color,

      transform: 'translateY(-50%)',

      selectors: {
        '&:focus': {
          outline: `2px solid ${variant.remove.focus.outlineColor}`,
          outlineOffset: size.remove.focus.outlineOffset,
        },

        '&:hover': {
          color: variant.remove.hover.color,
          transition: `color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
        },

        '&:active': {
          backgroundColor: variant.remove.active.backgroundColor,
          transition: 'none',
        },
      },
    },
  },
});

export const body = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: size.body.gap,

        width: '100%',
        height: '100%',
        padding: `0 ${size.body.horizontalPadding}`,

        borderRadius: '6px',

        backgroundColor: variant.body.default.backgroundColor,

        boxShadow: size.body.boxShadow,

        userSelect: 'none',

        cursor: 'default',

        overflow: 'hidden',

        selectors: {
          '&:is(button)': {
            border: 'none',

            cursor: 'pointer',
          },

          '&:is(button):focus': {
            outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
          },

          '&:is(button):not(:disabled):hover': {
            backgroundColor: variant.body.hover.backgroundColor,
            transition: `background-color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
          },

          '&:is(button):not(:disabled):active': {
            backgroundColor: variant.body.active.backgroundColor,
            transition: 'none',
          },

          '&:is(button):disabled': {
            cursor: 'default',
          },

          [`&:has(${icon})`]: {
            paddingLeft: size.body.leftPaddingWhenIcon,
          },

          [`${remove} + &`]: {
            paddingRight: size.body.rightPaddingWhenRemove,
          },

          [`${isDisabled} &`]: {
            backgroundColor: variant.body.disabled.backgroundColor,
          },

          [`${variants.accent} &`]: {
            boxShadow: 'none',
          },

          [`${variants.contrast}${isDisabled} &`]: {
            boxShadow: `inset 0 0 0 1px ${uiTheme.colors.borderControl.default}`,
          },
        },
      },
    },
  },
]);

export const label = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1 1 0',
      minWidth: '0',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
});

// endregion Styles
