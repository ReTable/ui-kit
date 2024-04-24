import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      zIndex: 1,

      selectors: {
        '&::after': {
          content: '',

          position: 'absolute',

          bottom: '-6px',
          left: '0',

          width: '100%',
          height: '6px',

          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0))',
        },
      },
    },
  },
});

export const list = style({
  '@layer': {
    [uiLayers.components]: {
      overflow: 'auto',
    },
  },
});
