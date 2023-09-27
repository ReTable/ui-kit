import { style } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.regular10,
  {
    color: uiTheme.colors.content.secondary,
    userSelect: 'none',
  },
]);