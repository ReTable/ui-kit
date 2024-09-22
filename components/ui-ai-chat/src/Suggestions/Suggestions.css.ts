import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { containerQuery } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '0 16px',

      '@container': {
        [containerQuery]: {
          display: 'grid',
          gridTemplateColumns: 'minmax(auto, 1000px)',
          gridTemplateRows: 'auto auto',
          justifyContent: 'space-around',
          padding: '0 68px',
        },
      },
    },
  },
});

export const items = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: '8px',
    },
  },
});

export const item = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: '7px 10px',
        border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,
        borderRadius: '12px',
        background: 'transparent',
        color: uiTheme.colors.content.primary,
        textAlign: 'left',
        cursor: 'pointer',
        transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

        selectors: {
          '&:focus': {
            outlineStyle: 'solid',
            outlineColor: uiTheme.colors.borderControl.focus2,
            outlineOffset: '0',
          },

          '&:hover': {
            background: uiTheme.colors.neutralAlpha['7'],
            borderColor: uiTheme.colors.borderControl.hover,
          },

          '&:active': {
            background: uiTheme.colors.neutralAlpha['10'],
          },
        },
      },
    },
  },
]);
