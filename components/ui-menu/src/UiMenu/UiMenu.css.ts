import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { variants } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '4px 0',
      maxWidth: '312px',

      borderRadius: '6px',

      selectors: {
        [`&${variants.normal}`]: {
          backgroundColor: uiTheme.colors.background.primaryContent,
          boxShadow: [
            `0 1px 2px ${uiTheme.colors.shadow['4']}`,
            `0 1px 4px ${uiTheme.colors.shadow['12']}`,
            `0 4px 16px ${uiTheme.colors.shadow['6']}`,
          ].join(', '),
        },

        [`&${variants.inverse}`]: {
          backgroundColor: uiTheme.colors.background.dropdown,
          boxShadow: [
            `0 2px 8px ${uiTheme.colors.shadow['16']}`,
            `0 4px 24px ${uiTheme.colors.shadow['12']}`,
          ].join(', '),
        },
      },
    },
  },
});

export const emptyContent = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: ' 8px 0',
        color: uiTheme.colors.content.tertiary,
        textAlign: 'center',
      },
    },
  },
]);

export const title = style([
  uiStyles.fonts.sansSerif.semiBold10,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: '8px 20px 4px 12px',
        maxWidth: '100%',
        color: uiTheme.colors.content.tertiary,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },
]);
