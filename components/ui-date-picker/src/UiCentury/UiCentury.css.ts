import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import { button } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      overflow: 'scroll',
      width: '100%',
      height: '100%',
      background: uiTheme.colors.background.primaryContent,

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const list = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      overflow: 'scroll',
      height: '100%',
      width: '100%',
    },
  },
});

export const item = style([
  button,
  {
    '@layer': {
      [uiLayers.components]: {
        height: '40px',
        borderWidth: '0',
        background: 'transparent',

        selectors: {
          '&:focus': {
            outlineStyle: 'inset',
          },
        },
      },
    },
  },
]);

export const selected = style({
  '@layer': {
    [uiLayers.components]: {
      cursor: 'default',

      selectors: {
        '&, &:hover': {
          color: uiTheme.colors.content.contrast,
        },

        '&::before, &:hover::before': {
          backgroundColor: uiTheme.colors.accent['100'],
        },
      },
    },
  },
});
