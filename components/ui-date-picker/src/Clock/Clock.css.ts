import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '100%',
    },
  },
});

export const title = style([
  uiStyles.fonts.sansSerif.semiBold14,
  {
    '@layer': {
      [uiLayers.components]: {
        margin: '0 auto',
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '0 0 auto',
    },
  },
});

export const body = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1 1 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '8px',
      padding: '0 12px',
      overflow: 'hidden',
    },
  },
});

export const list = style({
  '@layer': {
    [uiLayers.components]: {
      gridTemplateColumns: '1fr',
      flex: '1 1 auto',
      height: '100%',
    },
  },
});
