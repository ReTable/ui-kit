import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      maxWidth: '308px',
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      justifyContent: 'space-between',
    },
  },
});

export const title = style([
  uiFonts.sansSerif.semiBold14,
  {
    '@layer': {
      [uiLayers.components]: {},
    },
  },
]);
