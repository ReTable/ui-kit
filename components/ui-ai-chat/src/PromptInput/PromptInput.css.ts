import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      width: '100%',
    },
  },
});

export const input = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
      height: '100%',
      resize: 'none',
    },
  },
});

export const send = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      bottom: '6px',
      right: '6px',
      margin: '0',
    },
  },
});

export const controls = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      bottom: '6px',
      right: '6px',
      left: '6px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: '6px',
    },
  },
});

export const reset = style({
  '@layer': {
    [uiLayers.components]: {
      marginRight: 'auto',
    },
  },
});

export const progress = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);
