import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      gap: '4px',
      padding: '8px',
      borderRadius: '4px',
      background: uiTheme.colors.whiteAlpha['80'],
    },
  },
});
