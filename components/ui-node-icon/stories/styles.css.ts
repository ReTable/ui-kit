import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gap: '8px',
});

export const iconContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '8px',
  pointerEvents: 'none',
  background: 'transparent',
  border: '0px',
});

export const icon = style({
  display: 'block',
  marginRight: '16px',
});

export const iconsTable = style({
  width: '100%',
});

export const iconsTableItem = style([
  iconContainer,
  {
    justifyContent: 'center',
  },
]);
