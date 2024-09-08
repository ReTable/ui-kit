import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      padding: '7px 11px',
      width: '100%',
      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,
      backgroundColor: uiTheme.colors.background.primaryContent,

      selectors: {
        '&:hover': {
          borderColor: uiTheme.colors.neutralAlpha['20'],
          cursor: 'pointer',
        },
      },
    },
  },
});

export const states = styleVariants({
  isVisible: {
    '@layer': {
      [uiLayers.components]: {
        borderColor: uiTheme.colors.neutralAlpha['40'],
      },
    },
  },
  isWarning: {
    '@layer': {
      [uiLayers.components]: {
        borderColor: uiTheme.colors.borderControl.warning,
      },
    },
  },
  isInvalid: {
    '@layer': {
      [uiLayers.components]: {
        borderColor: uiTheme.colors.borderControl.error,
      },
    },
  },
  isDisabled: {
    '@layer': {
      [uiLayers.components]: {
        backgroundColor: uiTheme.colors.neutral['50'],
        borderColor: uiTheme.colors.neutralAlpha['7'],

        selectors: {
          '&:hover': {
            cursor: 'default',
          },
        },
      },
    },
  },
});

export const arrow = style({
  '@layer': {
    [uiLayers.components]: {
      flexShrink: '0',
      marginLeft: '6px',

      selectors: {
        [`${states.isDisabled} &`]: {
          opacity: '0',
        },
      },
    },
  },
});

export const content = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        marginRight: 'auto',
        maxWidth: 'calc(100% - 18px)',
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const placeholder = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'block',
      height: '16px',
      color: uiTheme.colors.content.tertiary,
    },
  },
});
