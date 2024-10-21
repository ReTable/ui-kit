import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import * as shared from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',

      padding: '0',

      borderRadius: '50%',

      color: uiTheme.colors.content.tertiary,

      selectors: {
        [`${shared.sizes.small} &`]: {
          width: '20px',
          height: '20px',
        },

        [`${shared.sizes.medium} &`]: {
          width: '24px',
          height: '24px',
        },

        [`${shared.variants.accent} &`]: {
          border: 'none',

          backgroundColor: uiTheme.colors.neutralAlpha['5'],
        },

        [`${shared.variants.accent} &:hover`]: {
          border: 'none',

          backgroundColor: uiTheme.colors.neutralAlpha['7'],
        },

        [`${shared.variants.accent} &:active`]: {
          border: 'none',

          backgroundColor: uiTheme.colors.neutralAlpha['10'],
        },

        [`${shared.variants.contrast} &`]: {
          border: `1px solid ${uiTheme.colors.borderControl.default}`,

          backgroundColor: 'transparent',
        },

        [`${shared.variants.contrast} &:hover`]: {
          border: `1px solid ${uiTheme.colors.borderControl.hover}`,

          backgroundColor: uiTheme.colors.neutralAlpha['7'],
        },

        [`${shared.variants.contrast} &:active`]: {
          border: `1px solid ${uiTheme.colors.borderControl.hover}`,

          backgroundColor: uiTheme.colors.neutralAlpha['10'],
        },

        '&:focus': {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },

        '&:hover': {
          transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

          color: uiTheme.colors.content.primary,
        },

        '&:active': {
          color: uiTheme.colors.content.primary,

          transition: 'none',
        },
      },
    },
  },
});
