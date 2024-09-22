import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.sansSerif.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',
        border: `3px solid ${uiTheme.colors.background.controlsDetails}`,
        backgroundColor: uiTheme.colors.background.primaryContent,
        color: uiTheme.colors.accent['100'],
      },
    },
  },
]);

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '11px',
      left: '13px',
    },
  },
});

export const reset = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '24px',
      height: '24px',
      padding: '0',
      border: 'none',
      background: 'transparent',
      color: uiTheme.colors.content.tertiary,
      cursor: 'pointer',
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:hover': {
          color: uiTheme.colors.content.secondary,
        },

        '&:focus': {
          outlineStyle: 'solid',
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
        },

        '&:active': {
          color: uiTheme.colors.content.primary,
          transition: 'none',
        },
      },
    },
  },
});

export const context = style({
  '@layer': {
    [uiLayers.components]: {
      margin: '11px 10px 11px 35px',

      selectors: {
        [`${root}:has(${reset}) &`]: {
          marginRight: '34px',
        },
      },
    },
  },
});
