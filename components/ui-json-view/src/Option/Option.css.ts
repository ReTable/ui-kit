import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
      },
    },
  },
]);

export const input = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'none',
    },
  },
});

export const indicator = style({
  '@layer': {
    [uiLayers.components]: {
      width: '20px',
      height: '12px',
      padding: '1px',
      borderRadius: '16px',
      backgroundColor: uiTheme.colors.accentSecondaryGrey['400'],
      overflow: 'hidden',

      selectors: {
        [`${input}:hover + &, ${input}:focus + &`]: {
          backgroundColor: uiTheme.colors.accentSecondaryGrey['600'],
        },

        [`${input}:focus + &`]: {
          outlineStyle: 'solid',
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
        },

        [`${input}:checked + &`]: {
          backgroundColor: uiTheme.colors.fillControl.accentSecondary,
        },
      },
    },
  },
});

export const handle = style({
  '@layer': {
    [uiLayers.components]: {
      backgroundColor: uiTheme.colors.background.primaryContent,
      borderRadius: '50%',
      boxShadow: `0 1px 4px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.16)`,
      transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.entrance.productive}`,
      width: '10px',
      height: '10px',

      selectors: {
        [`${input}:checked + ${indicator} &`]: {
          transform: 'translate(calc(100% - 2px), 0)',
        },
      },
    },
  },
});
