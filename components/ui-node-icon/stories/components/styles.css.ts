import { style } from '@vanilla-extract/css';

export const iconSizeStyle = {
  width: '48px',
  height: '48px',
};

export const iconSize = style(iconSizeStyle);

export const disabledContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  background: 'transparent',
  borderWidth: '1px',
});
