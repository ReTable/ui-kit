import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { variants } from '../shared.css';

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

export const prompt = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${variants.normal} &`]: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 52px 24px',
        },

        [`${variants.condensed} &`]: {
          padding: '0 16px 16px',
        },
      },
    },
  },
});

export const promptInput = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${variants.normal} &`]: {
          flex: '1 1 auto',
          maxWidth: '1000px',
        },
      },
    },
  },
});

export const conversation = style({
  '@layer': {
    [uiLayers.components]: {
      flexGrow: '1',
    },
  },
});
