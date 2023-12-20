import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const copied = style({
  '@layer': {
    [uiLayers.components]: {
      color: uiTheme.colors.content.success,
    },
  },
});
