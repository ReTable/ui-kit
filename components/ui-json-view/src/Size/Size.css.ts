import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.regular12,
  {
    '@layer': {
      [uiLayers.components]: {
        color: uiTheme.colors.content.placeholder,
        userSelect: 'none',
      },
    },
  },
]);
