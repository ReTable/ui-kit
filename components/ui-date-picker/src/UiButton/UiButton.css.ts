import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      background: 'transparent',
      borderWidth: '0',
      color: uiTheme.colors.content.primary,
      transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:focus': {
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
          outlineStyle: 'solid',
          outlineWidth: '2px',
        },

        '&:hover': {
          background: uiTheme.colors.neutralAlpha['7'],
        },

        '&:active': {
          background: uiTheme.colors.neutralAlpha['10'],
        },
      },
    },
  },
});
