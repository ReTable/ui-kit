import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import * as shared from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.borderControl.default}`,

      color: uiTheme.colors.content.placeholder,

      cursor: 'pointer',

      // overflow: 'hidden',

      selectors: {
        [`${shared.variants.accent}&`]: {
          backgroundColor: uiTheme.colors.background.primaryContent,
        },

        [`${shared.variants.contrast}&`]: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export const isEmpty = style({});

export const isDisabled = style({
  '@layer': {
    [uiLayers.components]: {
      backgroundColor: 'transparent',

      cursor: 'default',

      selectors: {
        [`&:not(${isEmpty})`]: {
          border: 'none',
        },
      },
    },
  },
});
