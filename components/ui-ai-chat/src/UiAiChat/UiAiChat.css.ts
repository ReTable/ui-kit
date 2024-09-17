import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflowY: 'auto',
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      zIndex: 1,
    },
  },
});

export const prompt = style({
  '@layer': {
    [uiLayers.components]: {
      margin: '0 16px 16px',
    },
  },
});

export const chat = style({
  '@layer': {
    [uiLayers.components]: {
      flexGrow: '1',
      overflowY: 'auto',
    },
  },
});

export const drawer = style({
  '@layer': {
    [uiLayers.components]: {
      zIndex: 2,
    },
  },
});
