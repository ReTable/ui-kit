import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: '48px',
      padding: '0 16px',
      borderBottom: `1px solid ${uiTheme.colors.neutralAlpha['7']}`,
    },
  },
});
