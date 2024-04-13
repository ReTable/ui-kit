import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '20px',
      height: '20px',
      padding: 0,
      borderWidth: 0,
      borderRadius: '4px',
      backgroundColor: 'transparent',
      color: uiTheme.colors.neutralAlpha['20'],
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:focus': {
          outlineStyle: 'solid',
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
          outlineWidth: 2,
        },

        '&:hover': {
          backgroundColor: uiTheme.colors.neutralAlpha['5'],
        },

        '&:active': {
          backgroundColor: uiTheme.colors.neutralAlpha['10'],
          transition: 'none',
        },
      },
    },
  },
});

export const chevron = styleVariants(
  {
    collapsed: 0,
    expanded: 90,
  },
  (angle) => ({
    '@layer': {
      [uiLayers.components]: {
        transformOrigin: 'center center',
        transform: `rotateZ(${angle}deg)`,
        transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
      },
    },
  }),
);
