import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import * as shared from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.borderControl.default}`,

      cursor: 'pointer',

      overflow: 'hidden',

      transition: `border-color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        [`${shared.variants.accent}&`]: {
          backgroundColor: uiTheme.colors.background.primaryContent,
        },

        [`${shared.variants.contrast}&`]: {
          backgroundColor: 'transparent',
        },

        '&:hover': {
          borderColor: uiTheme.colors.neutralAlpha['20'],
        },

        '&:has(input:focus)': {
          borderColor: uiTheme.colors.neutralAlpha['40'],
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },
      },
    },
  },
});

export const isEmpty = style({});

export const isDisabled = style({
  '@layer': {
    [uiLayers.components]: {
      backgroundColor: 'transparent',

      cursor: 'default',

      selectors: {
        [`&:not(${isEmpty})`]: {
          border: 'none',
        },

        '&:hover': {
          borderColor: uiTheme.colors.borderControl.default,
        },
      },
    },
  },
});

export const chevron = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      color: uiTheme.colors.content.tertiary,

      selectors: {
        [`${shared.sizes.small} &`]: {
          top: '10px',
          right: '8px',
        },

        [`${shared.sizes.small}${isEmpty} &`]: {
          top: '8px',
          right: '12px',
        },

        [`${shared.sizes.medium} &`]: {
          top: '12px',
          right: '8px',
        },

        [`${shared.sizes.medium}${isEmpty} &`]: {
          top: '8px',
          right: '12px',
        },
      },
    },
  },
});
