import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region States & Variants

export const isDisabled = style({});

export const sizes = styleVariants({
  small: {},
  medium: {},
  large: {},
});

// endregion States & Variants

// region Styles

export const root = style({
  position: 'relative',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: 'fit-content',
  height: 'fit-content',

  color: uiTheme.colors.content.primary,
});

export const icon = style({});

export const remove = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0',
      right: '0',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: '16px',
      height: '16px',

      padding: '0',

      background: 'transparent',
      borderRadius: '2px',
      border: 'none',

      color: uiTheme.colors.content.tertiary,

      selectors: {
        '&:focus': {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },

        '&:hover': {
          color: uiTheme.colors.content.primary,
          transition: `color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
        },

        '&:active': {
          backgroundColor: uiTheme.colors.background.panels,
          transition: 'none',
        },

        [`${sizes.small} &`]: {
          top: '2px',
          right: '4px',
        },

        [`${sizes.medium} &`]: {
          top: '6px',
          right: '4px',
        },

        [`${sizes.large} &`]: {
          top: '8px',
          right: '8px',
        },
      },
    },
  },
});

export const body = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        background: uiTheme.colors.background.primaryContent,
        borderRadius: '6px',

        userSelect: 'none',

        overflow: 'hidden',

        selectors: {
          '&:is(button)': {
            border: 'none',

            cursor: 'pointer',
          },

          '&:is(button):focus': {
            outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
          },

          '&:is(button):hover': {
            backgroundColor: uiTheme.colors.background.panels,
            transition: `backgroundColor ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
          },

          '&:is(button):active': {
            backgroundColor: uiTheme.colors.background.controlsDetails,
            transition: 'none',
          },

          '&:is(button):disabled': {
            cursor: 'default',
          },

          [`${sizes.small} &`]: {
            gap: '2px',
            height: '20px',
            padding: '0 8px',
            boxShadow: `
              0 1px 12px 0 ${uiTheme.colors.shadow['4']}
            `,
          },

          [`${sizes.small}:has(${icon}) &`]: {
            paddingLeft: '4px',
          },

          [`${sizes.small}:has(${remove}) &`]: {
            paddingRight: '24px',
          },

          [`${sizes.medium} &`]: {
            gap: '4px',
            height: '28px',
            padding: '0 12px',
            boxShadow: `
              0 1px 12px 0 ${uiTheme.colors.shadow['4']}
            `,
          },

          [`${sizes.medium}:has(${icon}) &`]: {
            paddingLeft: '6px',
          },

          [`${sizes.medium}:has(${remove}) &`]: {
            paddingRight: '28px',
          },

          [`${sizes.large} &`]: {
            gap: '6px',
            height: '32px',
            padding: '0 16px',
            boxShadow: `
              0 1px 2px 0 ${uiTheme.colors.shadow['4']},
              0 4px 12px 0 ${uiTheme.colors.shadow['6']}
            `,
          },

          [`${sizes.large}:has(${icon}) &`]: {
            paddingLeft: '12px',
          },

          [`${sizes.large}:has(${remove}) &`]: {
            paddingRight: '30px',
          },

          [`${isDisabled} &`]: {
            backgroundColor: uiTheme.colors.background.controlsDetails,
            boxShadow: `inset 0 0 0 1px ${uiTheme.colors.borderControl.default}`,
          },
        },
      },
    },
  },
]);

export const label = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '1 1 0',
      minWidth: '0',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },
});

// endregion Styles
