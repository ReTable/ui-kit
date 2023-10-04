import { style } from '@vanilla-extract/css';

export const root = style({
  position: 'relative',
});

export const preview = style({
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
});
