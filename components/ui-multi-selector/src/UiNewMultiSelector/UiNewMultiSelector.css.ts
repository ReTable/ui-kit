import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region Theme

const variant = createThemeContract({
  root: {
    default: {
      backgroundColor: null,
    },
    disabled: {
      backgroundColor: null,
    },
  },

  input: {
    disabled: {
      backgroundColor: 'transparent',
    },
  },
});

// endregion Themes

// region States & Variants

export const isDisabled = style({});

export const variants = styleVariants(
  {
    accent: {
      root: {
        default: {
          backgroundColor: uiTheme.colors.background.primaryContent,
        },
        disabled: {
          backgroundColor: 'transparent',
        },
      },
      input: {
        disabled: {
          backgroundColor: uiTheme.colors.background.controlsDetails,
        },
      },
    },

    contrast: {
      root: {
        default: {
          backgroundColor: 'transparent',
        },
        disabled: {
          backgroundColor: 'transparent',
        },
      },
      input: {
        disabled: {
          backgroundColor: 'transparent',
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

export const sizes = styleVariants({
  small: {},

  medium: {},

  large: {},
});

// endregion States & Variants

export const tags = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: '8px',
      maxWidth: '100%',
      padding: '8px',

      selectors: {
        '&:empty': {
          display: 'none',
        },

        [`${isDisabled} &`]: {
          padding: '0',
        },
      },
    },
  },
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.borderControl.default}`,

      backgroundColor: variant.root.default.backgroundColor,

      color: uiTheme.colors.content.placeholder,

      cursor: 'pointer',

      overflow: 'hidden',

      selectors: {
        [`${isDisabled}&`]: {
          backgroundColor: variant.root.disabled.backgroundColor,

          cursor: 'default',
        },

        [`${isDisabled}&:has(${tags}:not(:empty))`]: {
          border: 'none',
        },
      },
    },
  },
});

export const search = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        width: '100%',
        height: '30px',

        padding: '0 12px',

        border: 'none',
        background: 'transparent',

        color: uiTheme.colors.content.primary,

        selectors: {
          '&:focus': {
            outline: 'none',
          },

          '&::placeholder': {
            color: uiTheme.colors.content.placeholder,
          },

          [`${isDisabled} ${tags}:empty + &`]: {
            backgroundColor: variant.input.disabled.backgroundColor,
          },

          [`${isDisabled} ${tags}:not(:empty) + &`]: {
            display: 'none',
          },
        },
      },
    },
  },
]);
