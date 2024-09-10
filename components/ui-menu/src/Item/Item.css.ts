import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { sizes, variants } from '../shared.css';

export const root = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',

        selectors: {
          '&:focus': {
            outline: 'none',
          },

          '&:disabled': {
            color: uiTheme.colors.content.disabled,
            cursor: 'not-allowed',
          },

          [`${variants.normal} &`]: {
            color: uiTheme.colors.content.primary,
          },

          [`${variants.normal} &:not(:disabled):is(:hover, :focus)`]: {
            backgroundColor: uiTheme.colors.neutralAlpha['5'],
          },

          [`${variants.inverse} &`]: {
            color: uiTheme.colors.content.contrast,
          },

          [`${variants.inverse} &:not(:disabled):is(:hover, :focus)`]: {
            backgroundColor: uiTheme.colors.whiteAlpha['20'],
          },

          [`${sizes.small} &`]: {
            padding: '6px 12px',
          },

          [`${sizes.medium} &`]: {
            padding: '8px 12px',
          },
        },
      },
    },
  },
]);

export const leftIcon = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${sizes.small} &`]: {
          marginRight: '6px',
        },

        [`${sizes.medium} &`]: {
          marginRight: '8px',
        },
      },
    },
  },
});

export const rightIcon = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`${sizes.small} &`]: {
          marginLeft: '6px',
        },

        [`${sizes.medium} &`]: {
          marginLeft: '8px',
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
        padding: '12px',
      },
    },
  },
});

export const content = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1',
      minWidth: '0',

      selectors: {
        [`${lines.single} &`]: {
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
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

        selectors: {
          [`${root}:disabled &`]: {
            color: uiTheme.colors.content.secondary,
          },
        },
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

        [`${root}:disabled &`]: {
          color: uiTheme.colors.content.disabled,
        },
      },
    },
  },
});
