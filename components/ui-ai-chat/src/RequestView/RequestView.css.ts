import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { variants } from '../shared.css';

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

export const prompt = style({
  '@layer': {
    [uiLayers.components]: {
      marginLeft: '32px',
    },
  },
});

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

// region Answer

export const answer = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
    },
  },
});

export const answerBody = style([
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

export const answerIcon = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${variants.normal} &`]: {
          position: 'absolute',
          top: '0',
          left: '-36px',
          width: '24px',
          height: '24px',
          color: uiTheme.colors.accent['100'],
        },

        [`${variants.condensed} &`]: {
          display: 'none',
        },
      },
    },
  },
});

// endregion Answer
