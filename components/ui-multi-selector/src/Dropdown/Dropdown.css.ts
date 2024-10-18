import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

const itemHeight = '32px';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      maxHeight: `calc(10 * ${itemHeight})`,

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

export const hasIcons = style({
  '@layer': {
    [uiLayers.components]: {},
  },
});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      width: '16px',
      height: '16px',
    },
  },
});

export const label = style({
  '@layer': {
    [uiLayers.components]: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
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

        padding: '0 12px 0 32px',

        border: 'none',

        backgroundColor: 'transparent',

        color: uiTheme.colors.content.primary,

        textAlign: 'left',

        transition: `background-color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

        selectors: {
          '&:hover': {
            backgroundColor: uiTheme.colors.neutralAlpha['5'],
          },

          [`${hasIcons} &:has(${icon})`]: {
            paddingLeft: '12px',
          },
        },
      },
    },
  },
]);
