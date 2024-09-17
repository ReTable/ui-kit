import { globalStyle, style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const tableScroll = style({
  '@layer': {
    [uiLayers.components]: {
      overflowX: 'scroll',
    },
  },
});

export const tableActions = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px',
      marginBottom: '1em',
    },
  },
});

export const tableActionButton = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        border: '0',
        borderRadius: '6px',
        padding: '4px 12px',
        userSelect: 'none',
        cursor: 'pointer',
        backgroundColor: uiTheme.colors.neutralAlpha['5'],

        selectors: {
          '&:hover': {
            backgroundColor: uiTheme.colors.neutralAlpha['7'],
          },

          '&:active': {
            backgroundColor: uiTheme.colors.neutralAlpha['10'],
          },
        },
      },
    },
  },
]);

export const tableContainer = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'column',

      width: 'fit-content',

      border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,
      borderRadius: '12px',

      overflow: 'hidden',
    },
  },
});

globalStyle(`${tableContainer} :where(th, td)`, {
  '@layer': {
    [uiLayers.components]: {
      border: `1px solid ${uiTheme.colors.table.borderCells}`,
      borderCollapse: 'collapse',
    },
  },
});

globalStyle(`${tableContainer} th`, uiStyles.fonts.sansSerif.semiBold12);

globalStyle(`${tableContainer} th`, {
  '@layer': {
    [uiLayers.components]: {
      padding: '8px',
    },
  },
});

globalStyle(`${tableContainer} td`, uiStyles.fonts.monospace.regular12);

globalStyle(`${tableContainer} td`, {
  '@layer': {
    [uiLayers.components]: {
      padding: '4px 10px',
    },
  },
});

globalStyle(`${tableContainer} thead tr:first-child :where(th, td)`, {
  '@layer': {
    [uiLayers.components]: {
      borderTop: 'none',
    },
  },
});

globalStyle(`${tableContainer} tr:last-child :where(th, td)`, {
  '@layer': {
    [uiLayers.components]: {
      borderBottom: 'none',
    },
  },
});

globalStyle(`${tableContainer} :where(th, td):first-child`, {
  '@layer': {
    [uiLayers.components]: {
      borderLeft: 'none',
    },
  },
});

globalStyle(`${tableContainer} :where(th, td):last-child`, {
  '@layer': {
    [uiLayers.components]: {
      borderRight: 'none',
    },
  },
});
