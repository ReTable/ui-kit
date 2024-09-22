import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

import { containerQuery } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
      padding: '8px',
      backgroundColor: uiTheme.colors.background.controlsDetails,

      selectors: {
        '&:not(:first-child)': {
          paddingTop: '4px',
        },
      },

      '@container': {
        [containerQuery]: {
          gap: '12px',
          padding: '12px',

          selectors: {
            '&:not(:first-child)': {
              paddingTop: '8px',
            },
          },
        },
      },
    },
  },
});

export const isSending = style({});

export const input = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1 1 auto',
    },
  },
});

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
      background: `linear-gradient(to bottom, ${uiTheme.colors.fillControl.ai.from}, ${uiTheme.colors.fillControl.ai.to})`,
      color: uiTheme.colors.content.contrast,
      cursor: 'pointer',
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:focus': {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
          outlineOffset: '0',
        },

        '&:hover': {
          background: `linear-gradient(to bottom, ${uiTheme.colors.fillControl.aiPrimaryHover.from}, ${uiTheme.colors.fillControl.aiPrimaryHover.to})`,
        },

        '&:active': {
          background: `linear-gradient(to bottom, ${uiTheme.colors.fillControl.aiPrimaryPressed.from}, ${uiTheme.colors.fillControl.aiPrimaryPressed.to})`,
          transition: 'none',
        },

        '&:disabled': {
          background: uiTheme.colors.neutral['150'],
          cursor: 'default',
        },

        [`${isSending} &:disabled`]: {
          background: `linear-gradient(to bottom, ${uiTheme.colors.fillControl.ai.from}, ${uiTheme.colors.fillControl.ai.to})`,
        },
      },
    },
  },
});
