import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
    },
  },
});

export const options = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'sticky',
      top: '4px',
      right: '4px',
      float: 'right',
    },
  },
});
