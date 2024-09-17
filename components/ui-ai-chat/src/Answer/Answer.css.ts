import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const tableContainer = style({
  '@layer': {
    [uiLayers.components]: {
      overflowX: 'scroll',
    },
  },
});

export const table = style({
  '@layer': {
    [uiLayers.components]: {
      borderSpacing: '0',
      borderRadius: '8.5px',
      margin: '8px 0',
      borderCollapse: 'separate',
    },
  },
});

export const empty = style({});

export const headerRow = style({});

export const bodyRow = style({});

export const headerCell = style([
  uiStyles.fonts.sansSerif.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: '8px 12px',
        whiteSpace: 'nowrap',
        border: `1px solid ${uiTheme.colors.table.borderHeader}`,
        borderRight: 'none',
        borderBottom: 'none',

        selectors: {
          '&:first-child': {
            borderTopLeftRadius: '8px',
          },

          '&:last-child': {
            borderTopRightRadius: '8px',
            borderRight: `1px solid ${uiTheme.colors.table.borderHeader}`,
          },

          [`${empty} &`]: {
            borderBottom: `1px solid ${uiTheme.colors.table.borderHeader}`,
          },

          [`${empty} &:first-child`]: {
            borderBottomLeftRadius: '8px',
          },

          [`${empty} &:last-child`]: {
            borderBottomRightRadius: '8px',
          },
        },
      },
    },
  },
]);

export const rowCell = style([
  uiStyles.fonts.monospace.regular12,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: '4px 10px',
        whiteSpace: 'nowrap',
        border: `1px solid ${uiTheme.colors.table.borderHeader}`,
        borderRight: 'none',
        borderBottom: 'none',
        height: '25px',

        selectors: {
          '&:last-child': {
            borderRight: `1px solid ${uiTheme.colors.table.borderHeader}`,
          },

          [`${bodyRow}:last-child &`]: {
            borderBottom: `1px solid ${uiTheme.colors.table.borderHeader}`,
          },

          [`${bodyRow}:last-child &:first-child`]: {
            borderBottomLeftRadius: '8px',
          },

          [`${bodyRow}:last-child &:last-child`]: {
            borderBottomRightRadius: '8px',
          },
        },
      },
    },
  },
]);

export const tableActions = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      gap: '8px',
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
