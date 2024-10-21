import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

const itemHeight = '32px';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      maxHeight: `calc(10 * ${itemHeight} + 6px)`,

      padding: '6px 0',

      borderRadius: '6px',

      backgroundColor: uiTheme.colors.background.primaryContent,

      boxShadow: `
        0 4px 16px 0 ${uiTheme.colors.shadow['6']},
        0 1px 4px 0 ${uiTheme.colors.shadow['12']},
        0 1px 2px 0 ${uiTheme.colors.shadow['4']}
      `,

      overflowX: 'hidden',
      overflowY: 'auto',

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const hasIcons = style({});

export const highlight = style([uiStyles.fonts.sansSerif.bold12]);

export const search = style([
  uiStyles.fonts.sansSerif.bold12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'inline-block',

        padding: '2px 4px',

        borderRadius: '4px',

        backgroundColor: uiTheme.colors.neutralAlpha['10'],
      },
    },
  },
]);

export const divider = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
      height: '1px',

      margin: '4px 0',

      backgroundColor: uiTheme.colors.neutralAlpha['5'],
    },
  },
});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '0 0 auto',

      width: '16px',
      height: '16px',
    },
  },
});

export const item = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '6px',

        width: '100%',
        height: itemHeight,

        padding: '0 12px',

        border: 'none',

        backgroundColor: 'transparent',

        color: uiTheme.colors.content.primary,

        textAlign: 'left',

        selectors: {
          '&:hover': {
            backgroundColor: uiTheme.colors.neutralAlpha['5'],
          },

          [`${hasIcons} &`]: {
            paddingLeft: '32px',
          },

          [`${hasIcons} &:has(${icon})`]: {
            paddingLeft: '12px',
          },
        },
      },
    },
  },
]);

export const label = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1 1 auto',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
});

export const isCurrent = style({
  '@layer': {
    [uiLayers.components]: {
      backgroundColor: uiTheme.colors.neutralAlpha['5'],

      selectors: {
        [`${root}:hover &:not(:hover)`]: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export const key = style([
  uiStyles.fonts.sansSerif.regular12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        height: '16px',

        padding: '0 12px',

        borderRadius: '4px',
        border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,

        color: uiTheme.colors.content.tertiary,

        selectors: {
          [`${root}:hover &`]: {
            display: 'none',
          },
        },
      },
    },
  },
]);
