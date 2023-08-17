import { style } from '@vanilla-extract/css';

export const fontsRoot = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
});

export const font = style({
  display: 'block',
  margin: '16px',
});
