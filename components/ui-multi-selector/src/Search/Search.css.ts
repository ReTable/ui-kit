import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import * as shared from '../shared.css';

export const root = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        width: '100%',
        height: '30px',

        padding: '0 12px',

        border: 'none',
        background: 'transparent',

        color: uiTheme.colors.content.primary,

        selectors: {
          '&:focus': {
            outline: 'none',
          },

          [`${shared.variants.accent} &:disabled`]: {
            backgroundColor: uiTheme.colors.background.controlsDetails,
          },

          [`${shared.variants.contrast} &:disabled`]: {
            backgroundColor: 'transparent',
          },

          '&::placeholder': {
            color: uiTheme.colors.content.placeholder,

            transition: `color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
          },

          '&:not(:disabled):hover::placeholder': {
            color: uiTheme.colors.content.primary,

            opacity: 1,
          },
        },
      },
    },
  },
]);
