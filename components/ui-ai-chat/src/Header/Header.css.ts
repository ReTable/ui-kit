import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',

      width: '100%',
      height: '32px',

      background: uiTheme.colors.background.primaryContent,
      boxShadow: `
        0px 1px 6px 0px ${uiTheme.colors.shadow['4']},
        0px 1px 2px 0px ${uiTheme.colors.shadow['4']}
      `,
    },
  },
});

export const title = style([
  uiStyles.fonts.sansSerif.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        marginLeft: '16px',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  },
]);
