import { style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { items } from '../style.css';

export const root = style([
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',
      },
    },
  },
]);

export const { branch: checkbox } = items;

export const toggle = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      zIndex: 1,

      left: '10px',
      top: '50%',

      transform: 'translateY(-50%)',
    },
  },
});
