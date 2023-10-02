import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.regular10,
  {
    '@layer': {
      [uiLayers.components]: {
        color: uiTheme.colors.content.secondary,
        userSelect: 'none',
      },
    },
  },
]);
