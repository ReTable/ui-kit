import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
        border: 'none',
        background: 'transparent',
        color: uiTheme.colors.content.primary,
        resize: 'none',

        selectors: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },

          '&:focus': {
            outline: 'none',
          },

          '&::placeholder': {
            color: uiTheme.colors.content.tertiary,
          },
        },
      },
    },
  },
]);
