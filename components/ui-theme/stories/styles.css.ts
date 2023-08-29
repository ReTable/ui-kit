import { style } from '@vanilla-extract/css';

export const filter = style({
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  padding: '16px 0 32px',
  background: '#ffffff',
  zIndex: 1,
});

export const list = style({
  display: 'grid',
  gridTemplateColumns: 'min-content auto',
  gap: '8px 24px',
  alignItems: 'center',
  padding: '16px 0 32px',
});

export const colorSample = style({
  display: 'block',
  width: '150px',
  height: '50px',
  border: '1px solid black',
});

export const fontSample = style({
  width: '200px',
  whiteSpace: 'nowrap',
});
