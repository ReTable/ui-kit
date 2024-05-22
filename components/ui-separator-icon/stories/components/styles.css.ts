import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('.icon-size', {
  width: '32px',
  height: '32px',
});

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '8px',
});

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px',
});

export const icon = style({
  display: 'block',
  marginRight: '16px',
});
