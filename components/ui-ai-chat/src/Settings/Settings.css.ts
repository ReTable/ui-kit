import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const temperature = style({
  '@layer': {
    [uiLayers.components]: {
      marginTop: '12px',
    },
  },
});

export const context = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        marginTop: '12px',
        width: '100%',
        padding: '7px 11px',
        backgroundColor: 'white',
        overflow: 'auto',
        border: `1px solid ${uiTheme.colors.borderControl.default}`,
        borderRadius: '4px',
      },
    },
  },
]);
