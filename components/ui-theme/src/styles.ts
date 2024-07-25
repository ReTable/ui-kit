import { CSSProperties } from 'react';

import { StyleRule } from '@vanilla-extract/css';

import { layers } from './layers.css';
import { vars } from './theme.css';

import { transformFonts } from './helpers';

export const styles = {
  fonts: transformFonts(
    vars.fonts,
    ({ font, letterSpacing, textTransform }): StyleRule => ({
      '@layer': {
        [layers.components]: {
          font,
          letterSpacing,
          textTransform: textTransform as CSSProperties['textTransform'],
        },
      },
    }),
  ),
};
