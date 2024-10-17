import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0',
      width: '24px',
      height: '24px',
      padding: '0',
      backgroundColor: 'transparent',
      border: '1px solid $colors--neutral--A10',
      borderRadius: '50%',
      color: '$colors--content--tertiary',
      cursor: 'pointer',

      selectors: {
        '&:hover, &:focus': {
          color: uiTheme.colors.content.secondary,
        },

        '&:focus': {
          outline: 'none',
          boxShadow: `0 0 0 2px ${uiTheme.colors.borderControl.focus}`,
        },

        '&:active': {
          color: uiTheme.colors.content.primary,
        },

        '&:disabled': {
          color: uiTheme.colors.content.disabled,
          cursor: 'default',
        },
      },
    },
  },
});
