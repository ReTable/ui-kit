import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import { variants } from '../shared.css';

export const height = 9;

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      width: '100%',
      height: `${height}px`,

      backgroundColor: 'transparent',

      selectors: {
        '&::after': {
          content: '',

          position: 'absolute',
          top: '50%',
          left: '0',
          right: '0',
          transform: 'translateY(-50%)',

          height: '1px',
        },

        [`${variants.normal} &::after`]: {
          backgroundColor: uiTheme.colors.neutralAlpha['5'],
        },

        [`${variants.inverse} &::after`]: {
          backgroundColor: uiTheme.colors.whiteAlpha['15'],
        },
      },
    },
  },
});
