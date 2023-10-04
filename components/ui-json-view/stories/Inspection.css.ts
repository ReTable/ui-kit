import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  background: 'rgba(0, 0, 0, 0.8)',
  color: 'white',
  padding: '16px',
});

export const content = style({
  overflow: 'auto',
});

export const close = style({
  background: 'transparent',
  border: '1px solid white',
  color: 'white',
  padding: '8px',

  selectors: {
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.8)',
      color: 'black',
    },

    '&:active': {
      background: 'white',
      border: '1px solid white',
      color: 'black',
    },
  },
});
