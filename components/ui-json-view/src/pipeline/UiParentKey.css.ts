import { style } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.semiBold12,
  {
    color: uiTheme.colors.content.primary,
  },
]);
