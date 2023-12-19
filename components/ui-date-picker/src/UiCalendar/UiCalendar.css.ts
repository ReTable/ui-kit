import { style, styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

import { button } from '../shared.css';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      width: 'fit-content',
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      justifyContent: 'space-between',
      padding: '0 8px 0 16px',
    },
  },
});

const slot = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
});

export const slots = styleVariants(
  {
    left: {
      justifyContent: 'flex-start',
      gap: '4px',
    },
    right: {
      justifyContent: 'flex-end',
    },
  },
  (styles) => [
    slot,
    {
      '@layer': {
        [uiLayers.components]: styles,
      },
    },
  ],
);

export const title = style([
  uiFonts.sansSerif.semiBold14,
  {
    '@layer': {
      [uiLayers.components]: {
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const expand = style([
  button,
  {
    '@layer': {
      [uiLayers.components]: {
        width: '24px',
        height: '24px',
        borderRadius: '12px',
      },
    },
  },
]);

export const today = style({
  '@layer': {
    [uiLayers.components]: {
      marginRight: '4px',
    },
  },
});

export const siblings = styleVariants(
  {
    previous: {
      borderTopLeftRadius: '12px',
      borderBottomLeftRadius: '12px',
    },
    next: {
      borderTopRightRadius: '12px',
      borderBottomRightRadius: '12px',
    },
  },
  (styles) => [
    button,
    {
      '@layer': {
        [uiLayers.components]: {
          width: '24px',
          height: '24px',

          ...styles,
        },
      },
    },
  ],
);
