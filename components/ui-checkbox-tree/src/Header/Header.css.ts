import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
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
