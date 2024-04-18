import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '12px 0',
      borderBottom: `1px solid ${uiTheme.colors.neutralAlpha['5']}`,
      boxShadow: ['0 1px 6px 0 rgba(0, 0, 0, 0.04)', '0 1px 2px 0 rgba(0, 0, 0, 0.04)'].join(', '),
    },
  },
});

export const checkbox = style(uiTheme.fonts.sansSerif.medium14);
