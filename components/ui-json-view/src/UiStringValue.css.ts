import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        cursor: 'pointer',
      },
    },
  },
]);
