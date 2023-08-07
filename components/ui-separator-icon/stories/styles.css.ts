import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '8px',
});

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '16px',
});

export const icon = style({
  display: 'block',
  margin: '16px',
});
