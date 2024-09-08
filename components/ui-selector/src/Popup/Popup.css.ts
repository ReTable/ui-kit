import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const isVisible = style({});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      top: '0',
      left: '0',
      zIndex: '14',
      opacity: '0',
      visibility: 'hidden',

      display: 'flex',
      maxHeight: '336px',

      selectors: {
        [`&${isVisible}`]: {
          opacity: '1',
          visibility: 'visible',
        },
      },
    },
  },
});

export const menu = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
      maxWidth: 'none',
      overflowY: 'auto',
    },
  },
});
