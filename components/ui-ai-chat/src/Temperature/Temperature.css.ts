import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      marginTop: '12px',
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
});

export const label = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        margin: '4px 0',
      },
    },
  },
]);

export const value = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);
