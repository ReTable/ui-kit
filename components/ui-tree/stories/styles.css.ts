import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiTheme } from '@tabula/ui-theme';

export const tree = style({
  width: '264px',
  height: '500px',
  border: `1px solid ${uiTheme.colors.borderControl.default}`,
  borderRadius: '8px',
  padding: '8px',
  overflow: 'auto',
});

export const level = createVar();

export const item = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '4px',
  height: '36px',
  padding: '0 6px',
  marginLeft: calc.multiply(level, '22px'),
  borderRadius: '6px',
  transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

  selectors: {
    '&:hover': {
      backgroundColor: uiTheme.colors.accentShades.secondary1,
    },
  },

  vars: {
    [level]: '0',
  },
});

export const toggle = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '16px',
  height: '16px',
  padding: '0',
});

export const treeWithSearch = style({
  display: 'flex',
  flexDirection: 'column',
});
