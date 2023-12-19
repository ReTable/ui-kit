import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      overflow: 'scroll',
      width: '100%',
      height: '100%',
      background: uiTheme.colors.background.primaryContent,

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const list = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      overflow: 'scroll',
      height: '100%',
      width: '100%',
    },
  },
});
