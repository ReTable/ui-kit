import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'sticky',
      width: '100%',
      height: '100%',
      overflow: 'auto',
    },
  },
});
