import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
  },
});

export const disabled = style({});

export const withIcon = style({});

export const stickLeftIcon = style({});

export const stickClearIcon = style({});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 'calc(50% - 8px)',
      left: '8px',

      width: '16px',
      height: '16px',

      color: uiTheme.colors.content.tertiary,

      selectors: {
        [`${disabled} &`]: {
          color: uiTheme.colors.content.disabled,
        },

        [`${stickLeftIcon} &`]: {
          left: 0,
        },
      },
    },
  },
});

export const inputWrapper = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '8px',
      paddingRight: '32px',
      width: '100%',

      selectors: {
        [`${withIcon} &`]: {
          paddingLeft: '32px',
        },

        [`${withIcon}${stickLeftIcon} &`]: {
          paddingLeft: '24px',
        },

        [`${stickClearIcon} &`]: {
          paddingRight: '24px',
        },
      },
    },
  },
});

export const input = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'block',
        padding: '0',
        width: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        color: uiTheme.colors.content.primary,
        boxSizing: 'border-box',

        selectors: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
  },
]);

export const clear = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 'calc(50% - 10px)',
      right: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      width: '20px',
      height: '20px',
      border: 'none',
      color: uiTheme.colors.content.tertiary,
      borderRadius: '4px',
      backgroundColor: 'transparent',
      cursor: 'pointer',

      selectors: {
        '&:hover': {
          color: uiTheme.colors.content.primary,
        },

        '&:focus': {
          outline: 'none',
        },

        [`${stickClearIcon} &`]: {
          right: 0,
        },
      },
    },
  },
});
