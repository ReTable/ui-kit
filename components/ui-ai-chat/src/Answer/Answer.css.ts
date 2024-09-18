import { globalStyle, style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const placeholder = style({
  '@layer': {
    [uiLayers.components]: {
      color: uiTheme.colors.content.placeholder,
    },
  },
});

// region Table

export const tableScroll = style({
  '@layer': {
    [uiLayers.components]: {
      overflowX: 'scroll',
    },
  },
});

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

// endregion Table

// region Actions

export const actions = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      gap: '8px',
      marginTop: '8px',
      marginBottom: '24px',
    },
  },
});

export const action = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '24px',
        padding: '0 12px',
        border: '1px solid transparent',
        borderRadius: '12px',
        background: uiTheme.colors.neutralAlpha['7'],
        color: uiTheme.colors.content.primary,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

        selectors: {
          '&:focus': {
            outlineStyle: 'solid',
            outlineColor: uiTheme.colors.borderControl.focus2,
            outlineOffset: '0',
          },

          '&:hover': {
            background: uiTheme.colors.neutralAlpha['10'],
          },

          '&:active': {
            background: uiTheme.colors.neutralAlpha['15'],
            transition: 'none',
          },
        },
      },
    },
  },
]);

// endregion Actions
