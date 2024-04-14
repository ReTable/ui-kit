import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'block',
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
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },

        '&:hover': {
          backgroundColor: uiTheme.colors.neutralAlpha['7'],
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
    collapsed: {
      rotate: 0,
      x: 8,
      y: 6,
    },
    expanded: {
      rotate: 90,
      x: 7,
      y: 7,
    },
  },
  ({ rotate, x, y }) => ({
    '@layer': {
      [uiLayers.components]: {
        position: 'absolute',
        top: 0,
        left: 0,
        transformOrigin: 'center center',
        transform: `translateX(${x}px) translateY(${y}px) rotateZ(${rotate}deg)`,
        transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
      },
    },
  }),
);
