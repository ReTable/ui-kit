import { style } from '@vanilla-extract/css';

// ----- Container styles
export const controls = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  selectors: {
    '&:not(:empty)': {
      marginBottom: '16px',
    },
  },
});

// -----

export const root = style({
  vars: {
    '--left-sidebar-width': '200px',
    '--right-sidebar-width': '200px',
  },

  width: '100%',
  height: '350px',
});

const base = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
});

export const body = style([
  base,
  {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
]);

export const leftSidebar = style([
  base,
  {
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
  },
]);

export const rightSidebar = style([
  base,
  {
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
  },
]);
