import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

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
  uiFonts.sansSerif.semiBold14,
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

export const cylinder = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1 1 auto',
    },
  },
});
