import { style } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiFonts.monospace.regular10,
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20px',
        background: 'transparent',
        border: `1px solid ${uiTheme.colors.borderControl.default}`,
        borderRadius: '4px',
        transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
        userSelect: 'none',
        cursor: 'pointer',
        color: uiTheme.colors.content.primary,
        padding: '0 8px',

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
