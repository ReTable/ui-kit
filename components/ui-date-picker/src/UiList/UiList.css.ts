import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'grid',
      gridTemplateRows: 'auto',
      overflow: 'scroll',

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const item = styleVariants(
  {
    default: {
      selectors: {
        '&:focus': {
          outlineWidth: '0 !important',
          boxShadow: `inset 0 0 0 2px ${uiTheme.colors.borderControl.focus2}`,
        },
      },
    },

    selected: {
      backgroundColor: uiTheme.colors.accent['100'],
      color: uiTheme.colors.content.contrast,

      selectors: {
        '&:hover': {
          backgroundColor: uiTheme.colors.accent['100'],
        },
      },
    },
  },

  (styles) => [
    {
      '@layer': {
        [uiLayers.components]: {
          height: '40px',

          ...styles,
        },
      },
    },
  ],
);
