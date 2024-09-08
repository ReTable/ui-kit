import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const triggerContainer = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
    },
  },
});

export const search = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: '1',

      padding: '0',
      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.neutralAlpha['40']}`,
      backgroundColor: uiTheme.colors.background.primaryContent,
    },
  },
});

export const searchInput = style({
  '@layer': {
    [uiLayers.components]: {
      paddingLeft: '3px',
    },
  },
});
