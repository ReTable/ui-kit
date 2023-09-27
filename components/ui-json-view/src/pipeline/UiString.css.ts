import { style } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.semiBold12,
  {
    display: 'block',
    margin: 0,
    color: uiTheme.colors.code.stringLight,
  },
]);