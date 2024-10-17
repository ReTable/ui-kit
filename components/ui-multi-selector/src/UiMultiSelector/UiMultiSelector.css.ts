import { style } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',
      minHeight: '32px',
      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,
      backgroundColor: 'transparent',
      overflow: 'hidden',
    },
  },
});

export const disabled = style({
  '@layer': {
    [uiLayers.components]: {
      // NOTE: this margin should compensate positive margin on Tag-components
      marginBottom: '-8px',
      padding: '0',
      backgroundColor: 'transparent',
      border: 'none',
    },
  },
});

export const empty = style({});

export const wrapper = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '8px 36px 0 8px',

      selectors: {
        [`${empty} &, ${disabled} &`]: {
          padding: '0',
        },
      },
    },
  },
});

export const placeholder = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        padding: '7px 28px 7px 12px',
        background: 'transparent',
        border: `1px solid ${uiTheme.colors.neutralAlpha['10']}`,
        borderRadius: '6px',
        color: uiTheme.colors.content.tertiary,
        cursor: 'default',
        userSelect: 'none',
      },
    },
  },
]);

export const item = style({
  '@layer': {
    [uiLayers.components]: {
      marginRight: '8px',
      marginBottom: '8px',
    },
  },
});

export const clear = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      margin: '0',

      selectors: {
        [`${empty} &, ${disabled} &`]: {
          display: 'none',
        },
      },
    },
  },
});

export const add = style({
  '@layer': {
    [uiLayers.components]: {
      paddingBottom: '2px',

      selectors: {
        [`${empty} &`]: {
          paddingBottom: '0',
        },
      },
    },
  },
});
