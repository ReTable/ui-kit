import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  {
    '@layer': {
      [uiLayers.components]: {
        ...uiTheme.fonts.sansSerif.medium14,

        padding: '12px 0',
        borderBottom: `1px solid ${uiTheme.colors.neutralAlpha['5']}`,

        selectors: {
          '&:has(input:disabled)': {
            color: uiTheme.colors.content.tertiary,
            cursor: 'default',
          },

          '&:has(input:disabled):hover': {
            backgroundColor: 'unset',
          },
        },
      },
    },
  },
]);
