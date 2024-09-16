import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const temperature = style({
  '@layer': {
    [uiLayers.components]: {
      marginTop: '12px',
    },
  },
});

export const context = style({
  '@layer': {
    [uiLayers.components]: {
      marginTop: '12px',
      resize: 'none',
      overflow: 'auto',

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});
