import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const circleSize = 20;

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: '28px',
      cursor: 'pointer',
    },
  },
});

export const states = styleVariants({
  isDragging: {},
  isMouseDown: {},
});

export const line = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
      height: '4px',
      borderRadius: '2px',
      background: [
        uiTheme.colors.neutralAlpha['10'],
        `linear-gradient(to right, ${uiTheme.colors.fillControl.ai.from}, ${uiTheme.colors.fillControl.ai.to})`,
        'no-repeat',
      ].join(' '),
      transition: `background-size ${uiTheme.duration.moderate['1']} ${uiTheme.easing.standard.expressive}`,

      selectors: {
        [`${states.isDragging} &`]: {
          transition: 'none',
        },
      },
    },
  },
});

export const circleContainer = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '4px',
      transition: `left ${uiTheme.duration.moderate['1']} ${uiTheme.easing.standard.expressive}`,

      selectors: {
        [`${states.isDragging} &`]: {
          transition: 'none',
        },
      },
    },
  },
});

export const circle = style({
  '@layer': {
    [uiLayers.components]: {
      width: `${circleSize}px`,
      height: `${circleSize}px`,
      backgroundColor: uiTheme.colors.neutral['0'],
      borderRadius: '50%',
      transition: `transform ${uiTheme.duration.moderate['1']}`,
      boxShadow: [
        `0 4px 12px ${uiTheme.colors.shadow['16']}`,
        `0 1px 2px ${uiTheme.colors.shadow['12']}`,
      ].join(', '),

      selectors: {
        [`${root}:hover &`]: {
          transform: 'scale(1.15)',
        },

        [`${states.isMouseDown} &, ${states.isMouseDown}:hover &`]: {
          transform: 'scale(0.9)',
        },
      },
    },
  },
});
