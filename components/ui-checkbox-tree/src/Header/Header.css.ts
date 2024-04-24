import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiTheme.fonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: '12px 0',
        borderBottom: `1px solid ${uiTheme.colors.neutralAlpha['5']}`,
      },
    },
  },
]);
