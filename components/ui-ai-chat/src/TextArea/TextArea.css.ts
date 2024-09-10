import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        alignItems: 'center',
        padding: '7px 12px',
        width: '100%',
        minHeight: '32px',
        borderRadius: '6px',
        border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,
        backgroundColor: uiTheme.colors.background.primaryContent,

        selectors: {
          '&:hover': {
            borderColor: uiTheme.colors.neutralAlpha['20'],
          },

          '&:focus': {
            outline: 'none',
          },

          '&:focus-within': {
            borderColor: uiTheme.colors.neutralAlpha['40'],
          },

          '&::placeholder': {
            color: uiTheme.colors.content.tertiary,
          },

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
]);
