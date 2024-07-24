import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  {
    '@layer': {
      [uiLayers.components]: {
        ...uiTheme.fonts.monospace.regular12,

        color: uiTheme.colors.content.placeholder,
        userSelect: 'none',
      },
    },
  },
]);
