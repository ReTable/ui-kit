import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  {
    '@layer': {
      [uiLayers.components]: {
        ...uiTheme.fonts.monospace.semiBold12,

        color: uiTheme.colors.content.primary,
      },
    },
  },
]);
