import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const levelVar = createVar('0');

const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '8px',
      height: '40px',
      padding: `0 ${calc.add('34px', calc.multiply('24px', levelVar))}`,
      borderRadius: '6px',
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:hover': {
          backgroundColor: uiTheme.colors.accentShades.secondary1,
        },

        '&:active': {
          backgroundColor: uiTheme.colors.accentShades.secondary2,
          transition: 'none',
        },
      },
    },
  },
});

export const items = styleVariants({
  branch: [root, uiTheme.fonts.sansSerif.semiBold14],
  leaf: [root, uiTheme.fonts.sansSerif.medium14],
});
