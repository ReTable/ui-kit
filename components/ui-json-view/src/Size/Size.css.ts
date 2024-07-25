import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.monospace.regular12,
  {
    '@layer': {
      [uiLayers.components]: {
        color: uiTheme.colors.content.placeholder,
        userSelect: 'none',
      },
    },
  },
]);
