import { style } from '@vanilla-extract/css';

export const root = style({
  width: '100%',
});

export const item = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  pointerEvents: 'none',
  background: 'transparent',
  border: '0px',
});
