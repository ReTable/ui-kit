import { style } from '@vanilla-extract/css';

import { uiTheme } from '@tabula/ui-theme';

import { wrap } from './helpers.css';
import { isDisabled } from './modifiers.css';

export const root = style(
  wrap({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    userSelect: 'none',

    selectors: {
      '&:focus': {
        outlineStyle: 'solid',
        outlineColor: uiTheme.colors.borderControl.focus2,
        outlineOffset: '0',
      },

      [`&${isDisabled}`]: {
        background: uiTheme.colors.fillControl.btnDisabled,
        borderColor: 'transparent',
        color: uiTheme.colors.content.disabled,
        boxShadow: 'unset',
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
  }),
);

export const frozen = style(
  wrap({
    cursor: 'default',
    pointerEvents: 'none',
  }),
);
