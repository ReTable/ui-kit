import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const outline = `0 0 0 3px ${uiTheme.colors.borderControl.focus2}`;

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      userSelect: 'none',

      selectors: {
        '&:focus': {
          boxShadow: outline,
          outline: 'unset',
        },
      },
    },
  },
});

export const disabled = style({
  backgroundColor: uiTheme.colors.fillControl.btnDisabled,
  borderColor: 'transparent',
  color: uiTheme.colors.content.disabled,
  boxShadow: 'unset',
  cursor: 'default',
  pointerEvents: 'none',
});

export const frozen = style({
  '@layer': {
    [uiLayers.components]: {
      cursor: 'default',
      pointerEvents: 'none',
    },
  },
});
