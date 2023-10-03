import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
    },
  },
});

export const controls = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'sticky',
      top: '0',
      right: '0',
      float: 'right',
    },
  },
});
