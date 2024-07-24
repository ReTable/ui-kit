import { style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

const cellSize = '40px';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: `repeat(7, ${cellSize})`,
      gridAutoRows: cellSize,
      padding: '12px 12px 8px',
      zIndex: 1,
    },
  },
});

const day = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: cellSize,
      height: cellSize,
      background: 'transparent',
      borderWidth: 0,
      color: uiTheme.colors.content.primary,
      userSelect: 'none',
    },
  },
});

export const dayOfWeek = style([
  day,
  {
    '@layer': {
      [uiLayers.components]: uiTheme.fonts.sansSerif.semiBold12,
    },
  },
]);

export const dayOfMonth = style([
  day,

  {
    '@layer': {
      [uiLayers.components]: {
        ...uiTheme.fonts.sansSerif.medium12,

        position: 'relative',
        cursor: 'pointer',

        selectors: {
          '&::before': {
            content: '',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            zIndex: -1,
          },

          '&:focus': {
            outlineWidth: '0',
          },

          '&:focus, &:hover': {
            color: uiTheme.colors.content.primary,
          },

          '&:focus::before': {
            outlineWidth: '0',
            boxShadow: `inset 0 0 0 2px ${uiTheme.colors.borderControl.focus2}`,
          },

          '&:focus::before, &:hover::before': {
            backgroundColor: uiTheme.colors.neutralAlpha['5'],
          },

          '&:active::before': {
            backgroundColor: uiTheme.colors.neutralAlpha['7'],
          },
        },
      },
    },
  },
]);

export const outOfMonth = style({
  '@layer': {
    [uiLayers.components]: {
      color: uiTheme.colors.content.tertiary,

      selectors: {
        '&:hover, &:active': {
          color: uiTheme.colors.content.primary,
        },
      },
    },
  },
});

export const selected = style({
  '@layer': {
    [uiLayers.components]: {
      cursor: 'default',

      selectors: {
        '&, &:hover': {
          color: uiTheme.colors.content.contrast,
        },

        '&::before, &:hover::before': {
          backgroundColor: uiTheme.colors.accent['100'],
        },
      },
    },
  },
});
