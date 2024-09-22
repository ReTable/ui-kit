import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { containerQuery } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '0 16px 16px',

      '@container': {
        [containerQuery]: {
          display: 'grid',
          gridTemplateColumns: 'minmax(auto, 1000px)',
          gridTemplateRows: 'auto auto',
          justifyContent: 'space-around',
          padding: '0 68px 16px',
        },
      },
    },
  },
});

export const context = style({
  '@layer': {
    [uiLayers.components]: {
      borderRadius: `16px 16px 0 0`,
    },
  },
});

export const input = style({
  '@layer': {
    [uiLayers.components]: {
      borderRadius: `0 0 16px 16px`,

      selectors: {
        '&:first-child': {
          borderRadius: `16px`,
        },
      },
    },
  },
});
