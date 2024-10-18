import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

// region Theme

export const size = createThemeContract({
  tag: {
    margin: null,
  },
});

// endregion Theme

// region Variants

export const sizes = styleVariants(
  {
    small: {
      tag: {
        margin: '4px',
      },
    },

    medium: {
      tag: {
        margin: '8px',
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

// endregion Variants

// region Styles

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      maxWidth: '100%',
      padding: '8px',

      lineHeight: '0',

      selectors: {
        '&::after': {
          content: '',
          display: 'block',
          clear: 'both',
        },
      },
    },
  },
});

export const isDisabled = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '0',
    },
  },
});

export const tag = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-block',

      marginRight: size.tag.margin,
      marginBottom: size.tag.margin,
    },
  },
});

export const clear = style({
  '@layer': {
    [uiLayers.components]: {
      float: 'right',

      margin: '0 0 8px 0',
    },
  },
});

// endregion Styles
