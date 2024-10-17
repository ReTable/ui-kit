import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const hiddenRoot = style({
  '@layer': {
    [uiLayers.components]: {
      visibility: 'hidden',
      opacity: '0',
    },
  },
});

export const emptyRoot = style({});

export const control = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: '8px 0 8px 16px',
      backgroundColor: 'transparent',
      border: 'none',
      color: uiTheme.colors.content.tertiary,
      cursor: 'pointer',

      selectors: {
        '&:not(:disabled):hover': {
          color: uiTheme.colors.content.primary,
        },

        '&:focus': {
          outline: 'none',
        },

        [`${emptyRoot} &`]: {
          paddingTop: '7px',
          paddingBottom: '7px',
        },
      },
    },
  },
});

export const text = style([uiStyles.fonts.sansSerif.medium12]);

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      marginRight: '4px',
    },
  },
});

export const selectList = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',

      width: 'auto',
    },
  },
});

export const searchField = style({
  '@layer': {
    [uiLayers.components]: {
      paddingLeft: '4px',

      border: 'none',
      backgroundColor: 'transparent',
    },
  },
});
