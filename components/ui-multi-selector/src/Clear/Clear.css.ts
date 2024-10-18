import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

// region Themes

const size = createThemeContract({
  size: null,
});

const variant = createThemeContract({
  border: null,

  backgroundColor: null,
});

// endregion Themes

// region Variants

export const sizes = styleVariants(
  {
    small: {
      size: '20px',
    },

    medium: {
      size: '24px',
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
      border: 'none',

      backgroundColor: uiTheme.colors.neutralAlpha['5'],
    },

    contrast: {
      border: `1px solid ${uiTheme.colors.borderControl.default}`,

      backgroundColor: 'transparent',
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      width: size.size,
      height: size.size,

      padding: '0',

      border: variant.border,
      borderRadius: '50%',

      backgroundColor: variant.backgroundColor,

      color: uiTheme.colors.content.tertiary,
    },
  },
});

// endregion Styles
