import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
});

export const variants = styleVariants({
  monospace: {},
  sansSerif: {},
});

export const samples = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '16px',
});

export const sample = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',

  fontSize: '48px',
  lineHeight: '48px',

  selectors: {
    [`${variants.sansSerif} &`]: {
      fontFamily: 'var(--tbl--fonts--sans-serif--bold-10--font-family)',
    },

    [`${variants.monospace} &`]: {
      fontFamily: 'var(--tbl--fonts--sans-serif--bold-10--font-family)',
    },
  },
});

export const before = style({
  color: '#696969',
});

export const after = style({
  color: '#1a1a1a',
});

export const property = style({
  color: '#696969',
});

export const value = style({
  color: '#1a1a1a',
});
