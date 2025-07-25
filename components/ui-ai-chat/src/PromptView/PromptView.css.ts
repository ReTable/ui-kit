import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({});

// region View

export const view = style([
  uiStyles.fonts.sansSerif.medium14,
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',

        padding: '8px 16px',
        borderRadius: '12px',
        backgroundColor: uiTheme.colors.background.controlsDetails,
        color: uiTheme.colors.content.primary,
        whiteSpace: 'pre-wrap',
      },
    },
  },
]);

export const startEdit = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '7px',
      right: '7px',

      width: '24px',
      height: '24px',
      padding: '0',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      borderRadius: '12px',
      background: uiTheme.colors.background.controlsDetails,
      color: uiTheme.colors.content.tertiary,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      opacity: 0,
      outlineWidth: 0,

      selectors: {
        [`${view}:hover &`]: {
          opacity: 1,
          outlineWidth: '2px',
        },

        '&:focus': {
          outlineStyle: 'solid',
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
        },

        '&:hover': {
          color: uiTheme.colors.content.secondary,
        },

        '&:active': {
          color: uiTheme.colors.content.primary,
          transition: 'none',
        },
      },
    },
  },
});

// endregion View

// region Edit

export const edit = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      padding: '8px 16px',
      borderRadius: '12px',
      backgroundColor: uiTheme.colors.background.controlsDetails,
      color: uiTheme.colors.content.primary,
    },
  },
});

export const input = style({
  '@layer': {
    [uiLayers.components]: {
      width: '100%',
    },
  },
});

export const controls = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '8px',
    },
  },
});

// endregion Edit
