import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const button = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      background: 'transparent',
      borderWidth: '0',
      color: uiTheme.colors.content.primary,
      transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:focus': {
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
          outlineStyle: 'solid',
          outlineWidth: '2px',
        },

        '&:hover': {
          background: uiTheme.colors.neutralAlpha['7'],
        },

        '&:active': {
          background: uiTheme.colors.neutralAlpha['10'],
        },
      },
    },
  },
});

const baseItem = style([
  button,
  {
    '@layer': {
      [uiLayers.components]: {
        height: '40px',
      },
    },
  },
]);

export const item = styleVariants(
  {
    default: {
      selectors: {
        '&:focus': {
          outlineWidth: '0',
          boxShadow: `inset 0 0 0 2px ${uiTheme.colors.borderControl.focus2}`,
        },
      },
    },

    selected: {
      backgroundColor: uiTheme.colors.accent['100'],
      color: uiTheme.colors.content.contrast,

      selectors: {
        '&:hover': {
          backgroundColor: uiTheme.colors.accent['100'],
        },
      },
    },
  },

  (styles) => [
    baseItem,
    {
      '@layer': {
        [uiLayers.components]: styles,
      },
    },
  ],
);
