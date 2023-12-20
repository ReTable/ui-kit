import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      width: '24px',
      height: '24px',
      borderRadius: '12px',
    },
  },
});

export const icon = styleVariants(
  {
    isExpanded: -180,
    isCollapsed: 0,
  },
  (rotate) => ({
    '@layer': {
      [uiLayers.components]: {
        transform: `rotateZ(${rotate}deg)`,
        transition: `transform ${uiTheme.duration.moderate['2']} ${uiTheme.easing.standard.productive}`,
      },
    },
  }),
);
