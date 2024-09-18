import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

const itemSize = '32px';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
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

// region Action

export const action = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: itemSize,
      height: itemSize,

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

// endregion Action

// region Divider

export const divider = style({
  '@layer': {
    [uiLayers.components]: {
      width: '1px',
      height: itemSize,

      background: uiTheme.colors.neutralAlpha['10'],
    },
  },
});

// endregion Divider

// region Toggle

export const toggleInput = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0',
      left: '0',

      width: '100%',
      height: '100%',

      opacity: '0',
    },
  },
});

export const toggle = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: itemSize,
      height: itemSize,

      background: 'transparent',
      border: 'none',
      color: uiTheme.colors.content.tertiary,
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:has(input:checked)': {
          color: uiTheme.colors.content.primary,
        },

        '&:hover': {
          background: uiTheme.colors.neutralAlpha['3'],
          color: uiTheme.colors.content.secondary,
        },

        '&:focus-within': {
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

// endregion Toggle
