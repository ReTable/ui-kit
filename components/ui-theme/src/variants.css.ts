import { styleVariants } from '@vanilla-extract/css';

import { vars } from './theme.css';

const sansSerif = styleVariants(vars.fonts.sansSerif);

const monospace = styleVariants(vars.fonts.monospace);

export const fonts = { monospace, sansSerif };
