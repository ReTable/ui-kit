import { styleVariants } from '@vanilla-extract/css';

import { layers } from './layers.css';
import { vars } from './theme.css';

const sansSerif = styleVariants(vars.fonts.sansSerif, (styles) => ({
  '@layer': {
    [layers.components]: styles,
  },
}));

const monospace = styleVariants(vars.fonts.monospace, (styles) => ({
  '@layer': {
    [layers.components]: styles,
  },
}));

export const fonts = { monospace, sansSerif };
