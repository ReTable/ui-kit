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
