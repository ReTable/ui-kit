import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',

      selectors: {
        '&:not(:last-child)': {
          marginBottom: '16px',
        },
      },
    },
  },
});

export const prompt = style([
  uiStyles.fonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
        marginLeft: '32px',
        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: uiTheme.colors.background.controlsDetails,
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const box = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      gap: '6px',
      minHeight: '44px',
      padding: '10px 12px',
      backgroundColor: uiTheme.colors.background.primaryContent,
      borderRadius: '6px',
      boxShadow: `0 1px 12px ${uiTheme.colors.shadow['4']}`,
    },
  },
});

export const boxText = style([
  uiStyles.fonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
        flexGrow: '1',
        maxWidth: 'calc(100% - 18px)',
        overflowWrap: 'break-word',
      },
    },
  },
]);

export const textarea = style({
  '@layer': {
    [uiLayers.components]: {
      flexShrink: '0',
      resize: 'none',
      paddingLeft: '34px',
      overflow: 'auto',

      selectors: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
});

export const editButton = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: '0',
      width: '24px',
      height: '24px',
      backgroundColor: uiTheme.colors.background.panels,
      borderRadius: '50%',
      cursor: 'pointer',

      selectors: {
        '&:hover': {
          backgroundColor: uiTheme.colors.neutral['50'],
        },

        [`${box}:hover &`]: {
          display: 'flex',
        },
      },
    },
  },
});

export const editGroupContainer = style({
  '@layer': {
    [uiLayers.components]: {
      flexGrow: '1',
    },
  },
});

export const editTextAreaContainer = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
    },
  },
});

export const editControls = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '8px',
      marginTop: '8px',
    },
  },
});
