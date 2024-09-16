import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

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

export const isReversed = style({
  '@layer': {
    [uiLayers.components]: {
      flexDirection: 'column-reverse',
    },
  },
});

export const input = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      padding: '12px 16px',

      selectors: {
        [`${isReversed} &`]: {
          borderTop: `1px solid ${uiTheme.colors.neutral['100']}`,
        },
      },
    },
  },
});

export const inputControl = style({
  '@layer': {
    [uiLayers.components]: {
      height: '64px',
    },
  },
});

export const startNewChat = style({
  '@layer': {
    [uiLayers.components]: {
      alignSelf: 'flex-end',
      marginTop: '12px',
    },
  },
});

export const chat = style({
  '@layer': {
    [uiLayers.components]: {
      flexGrow: '1',
      overflowY: 'auto',

      selectors: {
        [`${root}:not(${isReversed}) ${input} + &:not(:empty)`]: {
          borderTop: `1px solid ${uiTheme.colors.neutral['100']}`,
        },
      },
    },
  },
});
