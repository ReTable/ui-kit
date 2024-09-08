import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      cursor: 'default !important',
      backgroundColor: 'transparent !important',
    },
  },
});

export const content = style({
  '@layer': {
    [uiLayers.components]: {
      flex: 'none',
      height: '16px',
      borderRadius: '4px',
      backgroundColor: uiTheme.colors.neutralAlpha['10'],

      selectors: {
        [`${root}:nth-child(even) &`]: {
          width: '75%',
        },

        [`${root}:nth-child(odd) &`]: {
          width: '45%',
        },
      },
    },
  },
});
