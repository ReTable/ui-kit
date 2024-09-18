import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { variants } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: uiTheme.colors.background.controlsDetails,

      selectors: {
        [`${variants.normal} &`]: {
          gap: '12px',
          padding: '12px 12px 12px 24px',
          borderRadius: '28px',
        },

        [`${variants.condensed} &`]: {
          gap: '8px',
          padding: '8px',
          borderRadius: '16px',
        },
      },
    },
  },
});

export const isSending = style({});

export const input = style([
  uiStyles.fonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
        flex: '1 1 auto',
        border: 'none',
        background: 'transparent',
        color: uiTheme.colors.content.primary,
        resize: 'none',

        selectors: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },

          '&:focus': {
            outline: 'none',
          },

          '&::placeholder': {
            color: uiTheme.colors.content.tertiary,
          },
        },
      },
    },
  },
]);

export const send = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '0 0 auto',
      alignSelf: 'flex-end',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      border: 'none',
      borderRadius: '16px',
      background: uiTheme.colors.fillControl.btnPrimary,
      color: uiTheme.colors.content.contrast,
      cursor: 'pointer',
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:focus': {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
          outlineOffset: '0',
        },

        '&:hover': {
          background: uiTheme.colors.fillControl.btnPrimaryHover,
        },

        '&:active': {
          background: uiTheme.colors.fillControl.btnPrimaryPressed,
          transition: 'none',
        },

        '&:disabled': {
          background: uiTheme.colors.neutral['150'],
          cursor: 'default',
        },

        [`${isSending} &:disabled`]: {
          background: uiTheme.colors.fillControl.btnPrimary,
        },
      },
    },
  },
});
