import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

// region Theme

const variant = createThemeContract({
  default: {
    backgroundColor: null,
  },
  disabled: {
    backgroundColor: null,
  },
});

// endregion Themes

// region Variants

export const variants = styleVariants(
  {
    accent: {
      default: {
        backgroundColor: uiTheme.colors.background.primaryContent,
      },
      disabled: {
        backgroundColor: 'transparent',
      },
    },

    contrast: {
      default: {
        backgroundColor: 'transparent',
      },
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

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.borderControl.default}`,

      backgroundColor: variant.default.backgroundColor,

      color: uiTheme.colors.content.placeholder,

      cursor: 'pointer',

      overflow: 'hidden',
    },
  },
});

export const isDisabled = style({
  '@layer': {
    [uiLayers.components]: {
      backgroundColor: variant.disabled.backgroundColor,

      cursor: 'default',
    },
  },
});

// endregion Styles
