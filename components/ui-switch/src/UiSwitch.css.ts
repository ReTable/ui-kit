import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const directions = styleVariants({
  direct: [],
  reverse: [],
});

export const sizes = styleVariants({
  small: [uiStyles.fonts.sansSerif.semiBold10],
  medium: [uiStyles.fonts.sansSerif.medium12],
});

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

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      alignItems: 'center',
      width: 'fit-content',
      cursor: 'pointer',
      userSelect: 'none',

      selectors: {
        [`&${directions.direct}`]: {
          flexDirection: 'row',
        },

        [`&${directions.reverse}`]: {
          flexDirection: 'row-reverse',
        },

        [`&${sizes.small}`]: {
          gap: '6px',
        },

        [`&${sizes.medium}`]: {
          gap: '8px',
        },

        [`&:has(${input}:disabled)`]: {
          cursor: 'default',
        },
      },
    },
  },
});

export const indicator = style({
  '@layer': {
    [uiLayers.components]: {
      backgroundColor: uiTheme.colors.accentSecondaryGrey['400'],
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.entrance.productive}`,
      overflow: 'hidden',

      selectors: {
        [`${sizes.small} &`]: {
          width: '20px',
          height: '12px',
          borderRadius: '12px',
        },

        [`${sizes.medium} &`]: {
          width: '28px',
          height: '16px',
          borderRadius: '16px',
        },

        [`${root}:hover &`]: {
          backgroundColor: uiTheme.colors.accentSecondaryGrey['600'],
        },

        [`${input}:checked + &`]: {
          backgroundColor: uiTheme.colors.fillControl.accentSecondary,
        },

        [`${input}:disabled + &`]: {
          backgroundColor: uiTheme.colors.neutralAlpha['10'],
        },

        [`${root}:focus-within &`]: {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },
      },
    },
  },
});

export const indicatorHandle = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'block',
      padding: '1px',
      boxShadow: [
        '0 4px 12px 0 rgba(0, 0, 0, 0.16)',
        '0 1px 2px 0 rgba(0, 0, 0, 0.08)',
        '0 1px 4px 0 rgba(0, 0, 0, 0.08)',
      ].join(', '),
      backgroundColor: uiTheme.colors.background.primaryContent,
      color: uiTheme.colors.content.tertiary,
      transform: 'translateX(1px) translateY(1px)',
      transition: `all ${uiTheme.duration.fast['1']} ${uiTheme.easing.entrance.productive}`,
      overflow: 'hidden',

      selectors: {
        [`${sizes.small} &`]: {
          width: '10px',
          height: '10px',
          borderRadius: '10px',
        },

        [`${sizes.medium} &`]: {
          width: '14px',
          height: '14px',
          borderRadius: '14px',
        },

        [`${input}:checked + ${indicator} &`]: {
          color: uiTheme.colors.content.primary,
        },

        [`${sizes.small} ${input}:checked + ${indicator} &`]: {
          transform: 'translateX(9px) translateY(1px)',
        },

        [`${sizes.medium} ${input}:checked + ${indicator} &`]: {
          transform: 'translateX(13px) translateY(1px)',
        },
      },
    },
  },
});

export const indicatorIcon = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'none',

      selectors: {
        [`${input}:disabled + ${indicator} &`]: {
          display: 'block',
          width: '12px',
          height: '12px',
        },

        [`${sizes.small} &`]: {
          transform: 'translateX(-2px) translateY(-2px)',
        },
      },
    },
  },
});

export const content = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',

      selectors: {
        [`${sizes.small} &`]: {
          color: uiTheme.colors.content.secondary,
        },

        [`${sizes.medium} &`]: {
          color: uiTheme.colors.content.primary,
        },
      },
    },
  },
});
