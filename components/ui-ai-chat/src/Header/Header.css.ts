import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',

      width: '100%',
      height: '32px',

      background: uiTheme.colors.background.primaryContent,
      boxShadow: `
        0px 1px 6px 0px ${uiTheme.colors.shadow['4']},
        0px 1px 2px 0px ${uiTheme.colors.shadow['4']}
      `,
    },
  },
});

export const title = style([
  uiStyles.fonts.sansSerif.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        marginLeft: '16px',

        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  },
]);

export const actions = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  },
});

export const divider = style({
  '@layer': {
    [uiLayers.components]: {
      width: '1px',
      height: '32px',

      background: uiTheme.colors.neutralAlpha['10'],
    },
  },
});

export const action = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: '32px',
      height: '32px',

      background: 'transparent',
      border: 'none',
      color: uiTheme.colors.content.tertiary,
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:hover': {
          background: uiTheme.colors.neutralAlpha['3'],
          color: uiTheme.colors.content.secondary,
        },

        '&:focus': {
          outline: 'none',
          boxShadow: `inset 0 0 0 2px ${uiTheme.colors.borderControl.focus2}`,
        },

        '&:active': {
          background: uiTheme.colors.neutralAlpha['5'],
          transition: 'none',
        },
      },
    },
  },
});
