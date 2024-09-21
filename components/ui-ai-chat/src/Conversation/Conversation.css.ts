import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { containerQuery } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '16px',
      overflowY: 'auto',
    },
  },
});

export const placeholder = style({
  '@layer': {
    [uiLayers.components]: {
      height: '100%',
    },
  },
});

export const requests = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      minHeight: '100%',

      '@container': {
        [containerQuery]: {
          maxWidth: '1104px',
          margin: '0 auto',
          padding: '0 52px 0 52px',
        },
      },
    },
  },
});
