import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region Themes

export const size = createThemeContract({
  body: {
    height: null,
    horizontalPadding: null,
    leftPaddingWhenIcon: null,
    rightPaddingWhenRemove: null,
    gap: null,
    boxShadow: null,
  },

  remove: {
    position: {
      top: null,
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
      body: {
        height: '20px',
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
          top: '2px',
          right: '4px',
        },
        focus: {
          outlineOffset: '-2px',
        },
      },
    },
    medium: {
      body: {
        height: '28px',
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
          top: '6px',
          right: '4px',
        },
        focus: {
          outlineOffset: '0',
        },
      },
    },
    large: {
      body: {
        height: '32px',
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
          top: '8px',
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
      height: 'fit-content',

      color: variant.root.color,
    },
  },
});

export const icon = style({});

export const remove = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: size.remove.position.top,
      right: size.remove.position.right,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: '16px',
      height: '16px',

      padding: '0',

      background: variant.remove.default.backgroundColor,
      borderRadius: '2px',
      border: 'none',

      color: variant.remove.default.color,

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

        height: size.body.height,
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

          [`${root}:has(${icon}) &`]: {
            paddingLeft: size.body.leftPaddingWhenIcon,
          },

          [`${root}:has(${remove}) &`]: {
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
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
});

// endregion Styles
