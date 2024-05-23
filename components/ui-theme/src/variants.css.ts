import { styleVariants } from '@vanilla-extract/css';

import { layers } from './layers.css';
import { vars } from './theme.css';

const sansSerif = styleVariants(vars.fonts.sansSerif, (styles) => ({
  '@layer': {
    [layers.components]: {
      font: styles.font,
      letterSpacing: styles.letterSpacing,
      textTransform: styles.textTransform,
    },
  },
}));

const monospace = styleVariants(vars.fonts.monospace, (styles) => ({
  '@layer': {
    [layers.components]: {
      font: styles.font,
      letterSpacing: styles.letterSpacing,
      textTransform: styles.textTransform,
    },
  },
}));

export const fonts = { monospace, sansSerif };
