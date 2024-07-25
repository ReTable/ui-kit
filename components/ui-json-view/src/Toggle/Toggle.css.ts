import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.monospace.regular12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '16px',
        height: '16px',
        background: 'transparent',
        border: `1px solid ${uiTheme.colors.borderControl.default}`,
        borderRadius: '4px',
        padding: '0',
        transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
        userSelect: 'none',
        cursor: 'pointer',
        color: uiTheme.colors.content.primary,

        selectors: {
          '&:focus': {
            outlineStyle: 'solid',
            outlineColor: uiTheme.colors.borderControl.focus2,
          },

          '&:hover': {
            backgroundColor: uiTheme.colors.neutralAlpha['7'],
            borderColor: uiTheme.colors.borderControl.hover,
          },

          '&:active': {
            backgroundColor: uiTheme.colors.neutralAlpha['10'],
            borderColor: uiTheme.colors.borderControl.focus,
            transition: 'none',
          },
        },
      },
    },
  },
]);
