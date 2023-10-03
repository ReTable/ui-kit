import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
    },
  },
});

export const list = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
      height: '100%',
    },
  },
});

export const controls = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '0',
      right: '0',
    },
  },
});