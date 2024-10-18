import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region Theme

const variant = createThemeContract({
  disabled: {
    backgroundColor: null,
  },
});

// endregion Theme

// region Variants

export const variants = styleVariants(
  {
    accent: {
      disabled: {
        backgroundColor: uiTheme.colors.background.controlsDetails,
      },
    },

    contrast: {
      disabled: {
        backgroundColor: 'transparent',
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

// endregion Variants

// region Styles

export const root = style([
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

          '&:disabled': {
            backgroundColor: variant.disabled.backgroundColor,
          },

          '&::placeholder': {
            color: uiTheme.colors.content.placeholder,
          },
        },
      },
    },
  },
]);

// endregion Styles
