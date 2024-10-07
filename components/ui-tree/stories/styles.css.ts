import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const tree = style({
  width: '264px',
  height: '500px',
  border: `1px solid rgba(0, 0, 0, 0.1)`,
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
  transition: `all 70ms cubic-bezier(0.2, 0, 0.38, 0.9)`,

  selectors: {
    '&:hover': {
      backgroundColor: '#f1f5fa',
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
