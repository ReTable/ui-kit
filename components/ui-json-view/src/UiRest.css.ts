import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '0 1ch',
    },
  },
});
