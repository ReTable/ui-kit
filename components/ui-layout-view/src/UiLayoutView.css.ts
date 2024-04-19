import { assignVars, createGlobalThemeContract, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

const theme = createGlobalThemeContract({
  duration: 'duration',

  easing: {
    entrance: 'entrance-easing',
    exit: 'exit-easing',
  },

  width: {
    left: 'left-sidebar-width',
    right: 'right-sidebar-width',
  },
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      vars: assignVars(theme, {
        duration: uiTheme.duration.moderate[1],

        easing: {
          entrance: uiTheme.easing.entrance.productive,
          exit: uiTheme.easing.exit.productive,
        },

        width: {
          left: '0px',
          right: '0px',
        },
      }),

      position: 'relative',
      overflow: 'hidden',
    },
  },
});

// ----- Panel styles

export const panels = styleVariants(
  {
    leftSidebar: {
      left: 0,
      zIndex: 1,
      width: theme.width.left,
      overflow: 'hidden',
    },
    body: {
      left: theme.width.left,
      right: theme.width.right,
    },
    rightSidebar: {
      right: 0,
      zIndex: 1,
      width: theme.width.right,
      overflow: 'hidden',
    },
  },
  (styles) => ({
    '@layer': {
      [uiLayers.components]: {
        position: 'absolute',
        top: 0,
        bottom: 0,

        ...styles,
      },
    },
  }),
);

// ----- Container and animation styles

export const leftSidebarStates = styleVariants(
  {
    enter: {
      left: calc.multiply(-1, theme.width.left),
    },
    enterActive: {
      left: 0,
      transition: `left ${theme.duration} ${theme.easing.entrance}`,
    },
    exit: {
      left: 0,
    },
    exitActive: {
      left: calc.multiply(-1, theme.width.left),
      transition: `left ${theme.duration} ${theme.easing.exit}`,
    },
  },
  (styles) => ({
    '@layer': {
      [uiLayers.components]: styles,
    },
  }),
);

export const rightSidebarStates = styleVariants(
  {
    enter: {
      right: calc.multiply(-1, theme.width.right),
    },
    enterActive: {
      right: 0,
      transition: `right ${theme.duration} ${theme.easing.entrance}`,
    },
    exit: {
      right: 0,
    },
    exitActive: {
      right: calc.multiply(-1, theme.width.right),
      transition: `right ${theme.duration} ${theme.easing.exit}`,
    },
  },
  (styles) => ({
    '@layer': {
      [uiLayers.components]: styles,
    },
  }),
);

export const container = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 0,
      bottom: 0,

      left: calc.multiply(-1, theme.width.left),
      right: calc.multiply(-1, theme.width.right),
      willChange: 'left, right',
      transition: [
        `left ${theme.duration} ${theme.easing.exit}`,
        `right ${theme.duration} ${theme.easing.exit}`,
      ].join(', '),

      selectors: {
        [`&:has(${panels.leftSidebar}:not(:empty))`]: {
          left: 0,
          transition: [
            `left ${theme.duration} ${theme.easing.entrance}`,
            `right ${theme.duration} ${theme.easing.entrance}`,
          ].join(', '),
        },

        [`&:has(${panels.rightSidebar}:not(:empty))`]: {
          right: 0,
          transition: [
            `left ${theme.duration} ${theme.easing.entrance}`,
            `right ${theme.duration} ${theme.easing.entrance}`,
          ].join(', '),
        },
      },
    },
  },
});
