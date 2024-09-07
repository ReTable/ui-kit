import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const empty = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'block',
      width: '16px',
      height: '16px',
    },
  },
});
