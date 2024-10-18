import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

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
});

const size = createThemeContract({
  tags: {
    gap: null,
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

export const sizes = styleVariants(
  {
    small: {
      tags: {
        gap: '4px',
      },
    },

    medium: {
      tags: {
        gap: '8px',
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

// endregion States & Variants

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
      },
    },
  },
});
