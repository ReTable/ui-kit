import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
});

export const variants = styleVariants(
  {
    previous: {
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px',
    },
    next: {
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px',
    },
  },
  (styles) => ({
    '@layer': {
      [uiLayers.components]: {
        width: '24px',
        height: '24px',

        ...styles,
      },
    },
  }),
);
