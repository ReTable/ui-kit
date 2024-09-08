import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: '0',
    },
  },
});

export const iconVariants = styleVariants({
  left: {
    '@layer': {
      [uiLayers.components]: {
        marginRight: '8px',
      },
    },
  },

  right: {
    '@layer': {
      [uiLayers.components]: {
        marginLeft: '8px',
      },
    },
  },
});

export const title = style([
  uiStyles.fonts.sansSerif.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'block',
        marginBottom: '2px',
        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const text = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${title} + &`]: {
          color: uiTheme.colors.content.secondary,
        },
      },
    },
  },
});

export const lines = styleVariants({
  single: {},

  multiple: {
    '@layer': {
      [uiLayers.components]: {
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },
  },
});

export const contentWrapper = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        maxWidth: '100%',

        selectors: {
          [`${lines.single} &`]: {
            minHeight: '16px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          },
        },
      },
    },
  },
]);
