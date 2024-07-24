import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const root = style([
  {
    '@layer': {
      [uiLayers.components]: {
        ...uiTheme.fonts.sansSerif.semiBold12,

        position: 'relative',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '12px',
        color: uiTheme.colors.content.primary,

        cursor: 'pointer',
      },
    },
  },
]);

// NOTE: We don't remove input from the flow for two reasons:
//         - the `display: none` style breaks focus handling;
//         - the `position: absolute` style allows to ignore flex's gap.
export const input = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: 0,
      left: 0,

      width: 0,
      height: 0,

      selectors: {
        '&:disabled': {
          cursor: 'default',
        },
      },
    },
  },
});

export const indicator = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '0 0 auto',
      width: '16px',
      height: '16px',
      border: `1px solid ${uiTheme.colors.borderControl.hover}`,
      borderRadius: '4px',
      backgroundColor: uiTheme.colors.content.contrast,
      color: 'transparent',
      pointerEvents: 'none',
      transition: `all ${uiTheme.duration.fast['1']}`,
      cursor: 'pointer',

      selectors: {
        [`${root}:hover &`]: {
          backgroundColor: uiTheme.colors.neutralAlpha['5'],
          borderColor: uiTheme.colors.borderControl.focus,
          color: uiTheme.colors.borderControl.focus,
        },

        [`${input}:is(:checked, :indeterminate) + &`]: {
          backgroundColor: uiTheme.colors.fillControl.checkbox,
          borderColor: uiTheme.colors.fillControl.checkbox,
          color: uiTheme.colors.content.contrast,
        },

        [`${root}:hover ${input}:not(:disabled):is(:checked, :indeterminate) + &`]: {
          backgroundColor: uiTheme.colors.fillControl.btnPrimaryHover,
          borderColor: uiTheme.colors.neutralAlpha['15'],
          color: uiTheme.colors.content.contrast,
        },

        [`${input}:disabled + &`]: {
          cursor: 'default',

          backgroundColor: uiTheme.colors.content.contrast,
          borderColor: uiTheme.colors.neutralAlpha['15'],
          color: 'transparent',
        },

        [`${input}:disabled:is(:checked, :indeterminate) + &`]: {
          backgroundColor: uiTheme.colors.neutralAlpha['7'],
          borderColor: uiTheme.colors.neutralAlpha['7'],
          color: uiTheme.colors.content.secondary,
        },

        [`${root}:focus-within &`]: {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },
      },
    },
  },
});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      width: '14px',
      height: '14px',
    },
  },
});

export const content = style({
  '@layer': {
    [uiLayers.components]: {
      flexGrow: 1,
      userSelect: 'none',
      cursor: 'pointer',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',

      selectors: {
        [`${input}:disabled ~ &`]: {
          cursor: 'default',
        },
      },
    },
  },
});
