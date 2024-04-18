import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiLayers } from '@tabula/ui-theme';

import { levelVar } from '../style.css';

export const root = style([
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',
      },
    },
  },
]);

export const toggle = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      zIndex: 1,

      left: calc.add('10px', calc.multiply('24px', levelVar)),
      top: '50%',

      transform: 'translateY(-50%)',
    },
  },
});
