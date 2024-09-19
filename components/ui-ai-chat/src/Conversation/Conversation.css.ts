import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { variants } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '16px',
      overflowY: 'auto',
    },
  },
});

export const isEmpty = style({});

export const requests = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${variants.normal} &`]: {
          maxWidth: '1104px',
          margin: '0 auto',
          padding: '0 52px 0 52px',
        },

        [`${isEmpty} &`]: {
          height: '100%',
        },
      },
    },
  },
});
