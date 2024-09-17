import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '12px 16px',
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

export const boxIconContainer = style({
  '@layer': {
    [uiLayers.components]: {
      flexShrink: '0',
      marginTop: '-2px',
    },
  },
});

export const boxIcon = style({
  '@layer': {
    [uiLayers.components]: {
      width: '12px',
      height: '12px',
    },
  },
});

export const boxText = style([
  uiStyles.fonts.sansSerif.medium12,
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

export const editProfileIcon = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      right: '-26px',
      display: 'flex',
      alignItems: 'flex-start',
      width: '12px',
      marginLeft: '-12px',
      paddingTop: '4px',
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
