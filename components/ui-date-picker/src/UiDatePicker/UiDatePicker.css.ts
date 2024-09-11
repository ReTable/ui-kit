import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

const clockHeight = 328;
const clockWidth = 220;

const base = style({
  '@layer': {
    [uiLayers.components]: {
      width: 'fit-content',
      background: uiTheme.colors.background.primaryContent,
      borderRadius: '8px',
      boxShadow: [
        `0px 4px 16px 0px ${uiTheme.colors.shadow['6']}`,
        `0px 1px 4px 0px ${uiTheme.colors.shadow['12']}`,
        `0px 1px 2px 0px ${uiTheme.colors.shadow['4']}`,
      ].join(', '),
      overflow: 'hidden',
    },
  },
});

export const root = styleVariants({
  date: [base],
  time: [base],
  datetime: [
    base,
    {
      '@layer': {
        [uiLayers.components]: {
          position: 'relative',
          paddingRight: `${clockWidth}px`,
        },
      },
    },
  ],
});

export const calendar = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${root.datetime} &`]: {
          borderRight: `1px solid ${uiTheme.colors.neutralAlpha['7']}`,
        },
      },
    },
  },
});

export const clock = style({
  '@layer': {
    [uiLayers.components]: {
      width: `${clockWidth}px`,

      selectors: {
        [`${root.time} &`]: {
          height: `${clockHeight}px`,
        },

        [`${root.datetime} &`]: {
          position: 'absolute',
          top: '0',
          right: '0',
          height: '100%',
        },
      },
    },
  },
});
