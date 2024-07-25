import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.monospace.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        cursor: 'pointer',
      },
    },
  },
]);
