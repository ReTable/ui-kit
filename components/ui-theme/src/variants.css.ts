import { styleVariants } from '@vanilla-extract/css';

import { layers } from './layers.css';
import { vars } from './theme.css';

const sansSerif = styleVariants(
  Object.entries(vars.fonts.sansSerif).reduce((props, [font, fontVars]) => {
    return {
      ...props,

      [font]: {
        '@layer': {
          [layers.components]: {
            font: fontVars.font,
            letterSpacing: fontVars.letterSpacing,
            textTransform: fontVars.textTransform,
          },
        },
      },
    };
  }, {}),
);

const monospace = styleVariants(
  Object.entries(vars.fonts.monospace).reduce((props, [font, fontVars]) => {
    return {
      ...props,

      [font]: {
        '@layer': {
          [layers.components]: {
            font: fontVars.font,
            letterSpacing: fontVars.letterSpacing,
            textTransform: fontVars.textTransform,
          },
        },
      },
    };
  }, {}),
);

export const fonts = { monospace, sansSerif };
