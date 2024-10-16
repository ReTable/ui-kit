import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const readOnly = style({});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      display: 'inline-block',
      maxWidth: '100%',
      paddingTop: '4px',
      paddingBottom: '4px',
      borderRadius: '6px',
      color: uiTheme.colors.content.primary,
      backgroundColor: uiTheme.colors.background.primaryContent,
      boxShadow: `
        0 4px 12px ${uiTheme.colors.shadow['6']},
        0 1px 2px ${uiTheme.colors.shadow['4']}
      `,
      overflow: 'hidden',

      selectors: {
        '&:is(button)': {
          border: 'none',
          cursor: 'pointer',
        },

        '&:is(button):disabled': {
          cursor: 'default',
        },

        '&:is(button):focus': {
          outline: 'none',
        },

        [`&${readOnly}`]: {
          background: uiTheme.colors.neutral['50'],
          boxShadow: `inset 0 0 1px 1px ${uiTheme.colors.neutralAlpha['10']}`,
        },
      },
    },
  },
});

export const sizes = styleVariants(
  {
    small: {
      default: '6px',
      readOnly: '8px',
    },

    medium: {
      default: '8px',
      readOnly: '16px',
    },
  },
  (styles) => ({
    '@layer': {
      [uiLayers.components]: {
        paddingLeft: styles.default,
        paddingRight: styles.default,

        selectors: {
          [`&${readOnly}`]: {
            paddingRight: styles.readOnly,
          },
        },
      },
    },
  }),
);

export const body = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
    },
  },
});

export const iconWrapper = style({
  '@layer': {
    [uiLayers.components]: {
      flexShrink: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      selectors: {
        [`&${sizes.small}`]: {
          width: '20px',
          height: '20px',
          marginRight: '4px',
        },

        [`&${sizes.medium}`]: {
          width: '24px',
          height: '24px',
          marginRight: '6px',
        },
      },
    },
  },
});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      maxWidth: '100%',
      maxHeight: '100%',
      color: 'inherit',
    },
  },
});

export const infoColor = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      width: '3px',
    },
  },
});

export const text = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'block',
        marginRight: 'auto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      },
    },
  },
]);

export const close = style({
  '@layer': {
    [uiLayers.components]: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '8px',
      padding: '0',
      width: '16px',
      height: '16px',
      backgroundColor: 'transparent',
      border: 'none',
      color: uiTheme.colors.content.secondary,
      cursor: 'pointer',

      selectors: {
        '&:is(:hover, :focus)': {
          color: uiTheme.colors.content.tertiary,
        },

        '&:is(:focus)': {
          outline: 'none',
        },

        [`${readOnly} &`]: {
          display: 'none',
        },
      },
    },
  },
});
