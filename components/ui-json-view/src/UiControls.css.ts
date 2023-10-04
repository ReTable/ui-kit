import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '4px',
      padding: '4px',
      borderBottomLeftRadius: '14px',
      background: uiTheme.colors.background.panels,
    },
  },
});
