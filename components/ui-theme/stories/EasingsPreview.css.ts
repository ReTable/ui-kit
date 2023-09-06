import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: 'fit-content',
  margin: '0 auto !important',
});

export const motions = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '192px',
  width: '100%',
});

export const motion = style({});

export const animation = style({
  flex: '0 0 auto',
});

export const label = style({
  marginTop: '0 !important',
  textAlign: 'center',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  flex: '1 1 auto',
});
