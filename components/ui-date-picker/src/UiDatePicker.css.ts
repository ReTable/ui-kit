import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      width: 'fit-content',
      background: uiTheme.colors.background.primaryContent,
      borderRadius: '8px',
      boxShadow: [
        '0px 4px 16px 0px rgba(0, 0, 0, 0.06)',
        '0px 1px 4px 0px rgba(0, 0, 0, 0.12)',
        '0px 1px 2px 0px rgba(0, 0, 0, 0.04)',
      ].join(', '),
    },
  },
});
