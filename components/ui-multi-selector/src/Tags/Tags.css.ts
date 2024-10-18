import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

// region Theme

export const size = createThemeContract({
  root: {
    padding: null,
    gap: null,
  },

  tag: {
    margin: null,
  },

  clear: {
    margin: null,
  },
});

// endregion Theme

// region Variants

export const sizes = styleVariants(
  {
    small: {
      root: {
        padding: '4px',
        gap: '4px',
      },
      tag: {
        margin: '4px',
      },
      clear: {
        margin: '4px',
      },
    },

    medium: {
      root: {
        padding: '0 0 8px 0',
        gap: '8px',
      },
      tag: {
        margin: '8px',
      },
      clear: {
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

      lineHeight: '0',

      padding: size.root.padding,

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
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: size.root.gap,
      padding: '0',
    },
  },
});

export const tag = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-block',

      marginTop: size.tag.margin,
      marginLeft: size.tag.margin,

      selectors: {
        [`${isDisabled} &`]: {
          margin: '0',
        },
      },
    },
  },
});

export const clear = style({
  '@layer': {
    [uiLayers.components]: {
      float: 'right',

      margin: size.clear.margin,
    },
  },
});

// endregion Styles
