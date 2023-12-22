import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { basePadding, controlPadding, padding } from '../shared.css';

// region Styles

const root = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
      height: '100%',
      overflow: 'auto',

      vars: {
        [padding]: '0',
      },
    },
  },
});

export const variants = styleVariants(
  {
    static: basePadding,
    interactive: basePadding + controlPadding,
  },
  (value) => [
    root,
    {
      '@layer': {
        [uiLayers.components]: {
          vars: {
            [padding]: `${value}px`,
          },
        },
      },
    },
  ],
);

// endregion
