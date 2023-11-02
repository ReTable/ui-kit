import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      vars: {
        '--duration': uiTheme.duration.moderate[1],
        '--entrance-easing': uiTheme.easing.entrance.productive,
        '--exit-easing': uiTheme.easing.exit.productive,

        '--left-sidebar-width': '0px',
        '--right-sidebar-width': '0px',
      },

      position: 'relative',
      overflow: 'hidden',
    },
  },
});

// ----- Container and animation styles

export const container = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 0,
      bottom: 0,

      left: calc.multiply(-1, 'var(--left-sidebar-width)'),
      right: calc.multiply(-1, 'var(--right-sidebar-width)'),
      willChange: 'left, right',
    },
  },
});

// ----- Left sidebar styles

export const withLeftSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      left: 0,
    },
  },
});

export const enterLeftSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      left: calc.multiply(-1, 'var(--left-sidebar-width)'),
    },
  },
});

export const enterLeftSidebarActive = style({
  '@layer': {
    [uiLayers.components]: {
      left: 0,
      transition: 'left var(--duration) var(--entrance-easing)',
    },
  },
});

export const exitLeftSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      left: 0,
    },
  },
});

export const exitLeftSidebarActive = style({
  '@layer': {
    [uiLayers.components]: {
      left: calc.multiply(-1, 'var(--left-sidebar-width)'),
      transition: 'left var(--duration) var(--exit-easing)',
    },
  },
});

// ----- Right sidebar styles

export const withRightSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      right: 0,
    },
  },
});

export const enterRightSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      right: calc.multiply(-1, 'var(--right-sidebar-width)'),
    },
  },
});

export const enterRightSidebarActive = style({
  '@layer': {
    [uiLayers.components]: {
      right: 0,
      transition: 'right var(--duration) var(--entrance-easing)',
    },
  },
});

export const exitRightSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      right: 0,
    },
  },
});

export const exitRightSidebarActive = style({
  '@layer': {
    [uiLayers.components]: {
      right: calc.multiply(-1, 'var(--right-sidebar-width)'),
      transition: 'right var(--duration) var(--exit-easing)',
    },
  },
});

// ----- Panel styles

export const body = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 'var(--left-sidebar-width)',
      right: 'var(--right-sidebar-width)',
    },
  },
});

export const leftSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
      width: 'var(--left-sidebar-width)',
      overflow: 'hidden',
    },
  },
});

export const rightSidebar = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      width: 'var(--right-sidebar-width)',
      overflow: 'hidden',
    },
  },
});
