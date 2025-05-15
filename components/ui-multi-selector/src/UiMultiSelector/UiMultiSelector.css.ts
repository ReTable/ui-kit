import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import * as shared from '../shared.css';

const border = createThemeContract({
  default: null,
  hover: null,
  focus: null,
});

export const state = styleVariants({
  isEmpty: {},

  isEmptySearch: {},

  isWarning: {},

  isInvalid: {},

  isDisabled: {},
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      vars: assignVars(border, {
        default: uiTheme.colors.borderControl.default,
        hover: uiTheme.colors.neutralAlpha['20'],
        focus: uiTheme.colors.neutralAlpha['40'],
      }),

      position: 'relative',

      borderRadius: '6px',
      border: `1px solid ${border.default}`,

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
          borderColor: border.hover,
        },

        '&:has(input:focus)': {
          borderColor: border.focus,
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },

        [`${state.isDisabled}&`]: {
          backgroundColor: 'transparent',

          borderColor: border.default,

          cursor: 'default',
        },

        [`${state.isDisabled}&:not(${state.isEmpty})`]: {
          border: 'none',
        },

        [`${state.isDisabled}&:hover`]: {
          borderColor: border.default,
        },

        [`${state.isWarning}&`]: {
          vars: assignVars(border, {
            default: uiTheme.colors.borderControl.warning,
            hover: uiTheme.colors.borderControl.warningFocus,
            focus: uiTheme.colors.borderControl.warningFocus,
          }),
        },

        [`${state.isInvalid}&`]: {
          vars: assignVars(border, {
            default: uiTheme.colors.borderControl.error,
            hover: uiTheme.colors.borderControl.errorFocus,
            focus: uiTheme.colors.borderControl.errorFocus,
          }),
        },
      },
    },
  },
});

export const label = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '0',

      width: '100%',
      height: '100%',

      backgroundColor: 'transparent',
      cursor: 'text',
    },
  },
});

export const search = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-block',

      selectors: {
        [`${state.isEmpty}${shared.sizes.small} &`]: {
          height: '22px',
        },

        [`${state.isEmpty}${shared.sizes.medium} &`]: {
          height: '14px',
        },

        [`${root}:not(${state.isEmpty}) &${state.isEmptySearch}:not(:focus)`]: {
          position: 'absolute',
          right: '0',
          bottom: 0,
          zIndex: 0,
          opacity: '0',
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
          top: '6px',
          right: '8px',
        },

        [`${shared.sizes.medium} &`]: {
          top: '12px',
          right: '8px',
        },

        [`${state.isEmpty} &`]: {
          top: '7px',
          right: '12px',
        },
      },
    },
  },
});
