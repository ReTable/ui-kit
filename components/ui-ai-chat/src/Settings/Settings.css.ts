import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { isReversed } from '../UiAiChat/UiAiChat.css';

export const creativity = style({
  '@layer': {
    [uiLayers.components]: {
      marginTop: '12px',
    },
  },
});

export const creativityTitle = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        margin: '4px 0',
      },
    },
  },
]);

export const creativityLevel = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const creativityTitleContainer = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
});

export const mode = style({
  '@layer': {
    [uiLayers.components]: {
      marginBottom: '12px',
    },
  },
});

export const experimental = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '12px 16px',
      backgroundColor: uiTheme.colors.background.panels,
      borderTop: `1px solid ${uiTheme.colors.neutral['100']}`,
      borderBottom: `1px solid ${uiTheme.colors.neutral['100']}`,

      selectors: {
        [`${isReversed} &`]: {
          borderBottom: 'none',
        },
      },
    },
  },
});

export const textarea = style({
  '@layer': {
    [uiLayers.components]: {
      resize: 'none',
      paddingRight: '32px',
      flexShrink: '0',
      overflow: 'auto',

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const label = style([
  uiStyles.fonts.sansSerif.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        marginLeft: '8px',
      },
    },
  },
]);
