import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const overlay = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0px',
      left: '0px',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',

      width: '100%',
      height: '100%',

      background: uiTheme.colors.neutralAlpha['20'],
    },
  },
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '0 0 228px',
      height: '100%',

      background: uiTheme.colors.background.primaryContent,
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: '100%',
      height: '48px',

      padding: '0 8px 0 16px',
    },
  },
});

export const title = style([
  uiStyles.fonts.sansSerif.bold12,
  {
    '@layer': {
      [uiLayers.components]: {},
    },
  },
]);

export const close = style({
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
          outlineStyle: 'solid',
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
        },

        '&:active': {
          background: uiTheme.colors.neutralAlpha['5'],
          transition: 'none',
        },
      },
    },
  },
});
