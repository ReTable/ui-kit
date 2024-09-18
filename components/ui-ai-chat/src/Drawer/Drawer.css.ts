import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const transition = styleVariants({
  enter: {},
  enterActive: {},
  enterDone: {},
  exit: {},
  exitActive: {},
  exitDone: {},
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0',
      left: '0',

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',

      width: '100%',
      height: '100%',
    },
  },
});

const overlayColor = uiTheme.colors.neutralAlpha['20'];

export const overlay = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0px',
      left: '0px',

      width: '100%',
      height: '100%',

      selectors: {
        [`${transition.enter} &`]: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
        },

        [`${transition.enterActive} &`]: {
          backgroundColor: overlayColor,
          transition: `background-color ${uiTheme.duration.moderate['2']} ${uiTheme.easing.entrance.productive}`,
        },

        [`${transition.enterDone} &`]: {
          backgroundColor: overlayColor,
          transition: `none`,
        },

        [`${transition.exit} &`]: {
          backgroundColor: overlayColor,
        },

        [`${transition.exitActive} &`]: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          transition: `background-color ${uiTheme.duration.moderate['2']} ${uiTheme.easing.exit.productive}`,
        },

        [`${transition.exitDone} &`]: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          transition: `none`,
        },
      },
    },
  },
});

const rootWidth = '228px';

export const body = style({
  '@layer': {
    [uiLayers.components]: {
      flex: `0 0 ${rootWidth}`,
      height: '100%',

      background: uiTheme.colors.background.primaryContent,

      selectors: {
        [`${transition.enter} &`]: {
          transform: `translateX(${rootWidth})`,
        },

        [`${transition.enterActive} &`]: {
          transform: `translateX(0px)`,
          transition: `transform ${uiTheme.duration.moderate['2']} ${uiTheme.easing.entrance.productive}`,
        },

        [`${transition.enterDone} &`]: {
          transform: `translateX(0px)`,
        },

        [`${transition.exit} &`]: {
          transform: `translateX(0px)`,
        },

        [`${transition.exitActive} &`]: {
          transform: `translateX(${rootWidth})`,
          transition: `transform ${uiTheme.duration.moderate['2']} ${uiTheme.easing.exit.productive}`,
        },

        [`${transition.exitDone} &`]: {
          transform: `translateX(${rootWidth})`,
        },
      },
    },
  },
});

export const header = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: '100%',
      height: '48px',

      padding: '0 8px 0 16px',
    },
  },
});

export const title = style([
  uiStyles.fonts.sansSerif.bold12,
  {
    '@layer': {
      [uiLayers.components]: {
        margin: '0',

        color: uiTheme.colors.content.primary,
      },
    },
  },
]);

export const close = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      width: '32px',
      height: '32px',

      background: 'transparent',
      border: 'none',
      color: uiTheme.colors.content.tertiary,
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:hover': {
          background: uiTheme.colors.neutralAlpha['3'],
          color: uiTheme.colors.content.secondary,
        },

        '&:focus': {
          outlineStyle: 'solid',
          outlineColor: uiTheme.colors.borderControl.focus2,
          outlineOffset: '0',
        },

        '&:active': {
          background: uiTheme.colors.neutralAlpha['5'],
          transition: 'none',
        },
      },
    },
  },
});

export const content = style({
  '@layer': {
    [uiLayers.components]: {
      padding: '0 16px 16px',
    },
  },
});
