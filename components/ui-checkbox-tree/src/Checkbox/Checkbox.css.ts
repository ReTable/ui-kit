import { styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import { levelVar } from '../style.css';

export const variants = styleVariants(
  {
    branch: uiTheme.fonts.sansSerif.semiBold14,
    leaf: uiTheme.fonts.sansSerif.medium14,
  },
  (fontStyles) => ({
    '@layer': {
      [uiLayers.components]: {
        ...fontStyles,

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '8px',
        height: '40px',
        padding: `0 12px 0 ${calc.add('34px', calc.multiply('24px', levelVar))}`,
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

          '&:has(input:disabled)': {
            color: uiTheme.colors.content.tertiary,
            cursor: 'default',
          },

          '&:has(input:disabled):hover': {
            backgroundColor: 'unset',
          },
        },
      },
    },
  }),
);
