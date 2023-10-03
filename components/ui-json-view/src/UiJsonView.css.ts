import { createVar, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

// region Constants

export const itemHeight = 24;

export const basePadding = 16;

export const controlPadding = 24;

// endregion

// region Variables

export const padding = createVar();

// endregion

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
