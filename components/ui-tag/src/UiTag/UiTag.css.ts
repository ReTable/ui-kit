import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region States & Variants

export const isDisabled = style({});

export const sizes = styleVariants({
  small: {},
  medium: {},
  large: {},
});

export const variants = styleVariants({
  accent: {},
  contrast: {},
});

// endregion States & Variants

// region Styles

export const main = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'absolute',

      top: '0',
      left: '0',

      width: '100%',
      height: '100%',

      padding: '0',

      border: 'none',

      backgroundColor: 'transparent',

      opacity: 0,

      cursor: 'pointer',

      selectors: {
        '&:focus': {
          outline: 'none',
        },
      },
    },
  },
});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      flex: '0 0 auto',
    },
  },
});

export const label = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        flex: '1 1 0',
        minWidth: '0',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  },
]);

export const remove = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      flex: '0 0 auto',

      width: '16px',
      height: '16px',

      padding: '0',

      borderRadius: '2px',
      border: 'none',

      transition: `color ${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

      selectors: {
        '&:focus': {
          outlineWidth: '2px',
          outlineStyle: 'solid',
        },

        '&:active': {
          transition: 'none',
        },

        [`${sizes.small} &`]: {
          outlineOffset: '-2px',
        },

        [`${variants.accent} &`]: {
          backgroundColor: 'transparent',

          color: uiTheme.colors.whiteAlpha['70'],
        },

        [`${variants.accent} &:focus`]: {
          outlineColor: uiTheme.colors.whiteAlpha['30'],
        },

        [`${variants.accent} &:hover`]: {
          color: uiTheme.colors.whiteAlpha['80'],
        },

        [`${variants.accent} &:active`]: {
          backgroundColor: uiTheme.colors.whiteAlpha['10'],
        },

        [`${variants.contrast} &`]: {
          backgroundColor: 'transparent',

          color: uiTheme.colors.content.tertiary,
        },

        [`${variants.contrast} &:focus`]: {
          outlineColor: uiTheme.colors.borderControl.focus2,
        },

        [`${variants.contrast} &:hover`]: {
          color: uiTheme.colors.content.primary,
        },

        [`${variants.contrast} &:active`]: {
          backgroundColor: uiTheme.colors.background.panels,
        },
      },
    },
  },
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      position: 'relative',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: 'fit-content',

      borderRadius: '6px',

      userSelect: 'none',
      cursor: 'default',

      selectors: {
        [`&${sizes.small}`]: {
          height: '20px',
          gap: '4px',
          padding: '0 8px',
          boxShadow: `
            0 1px 12px 0 ${uiTheme.colors.shadow['4']}
          `,
        },

        [`&${sizes.small}:has(${icon})`]: {
          paddingLeft: '4px',
        },

        [`&${sizes.small}:has(${remove})`]: {
          paddingRight: '4px',
        },

        [`&${sizes.medium}`]: {
          height: '28px',
          gap: '4px',
          padding: '0 12px',
          boxShadow: `
            0 1px 12px 0 ${uiTheme.colors.shadow['4']}
          `,
        },

        [`&${sizes.medium}:has(${icon})`]: {
          paddingLeft: '6px',
        },

        [`&${sizes.medium}:has(${remove})`]: {
          paddingRight: '4px',
        },

        [`&${sizes.large}`]: {
          height: '32px',
          gap: '8px',
          padding: '0 16px',
          boxShadow: `
            0 1px 2px 0 ${uiTheme.colors.shadow['4']},
            0 4px 12px 0 ${uiTheme.colors.shadow['6']}
          `,
        },

        [`&${sizes.large}:has(${icon})`]: {
          paddingLeft: '12px',
        },

        [`&${sizes.large}:has(${remove})`]: {
          paddingRight: '8px',
        },

        [`&${variants.accent}`]: {
          backgroundColor: uiTheme.colors.accentAlpha['60'],

          color: uiTheme.colors.content.contrast,

          boxShadow: 'none',
        },

        [`&${variants.accent}:has(${main}):hover`]: {
          backgroundColor: uiTheme.colors.accentAlpha['70'],
        },

        [`&${variants.accent}:has(${main}):active`]: {
          backgroundColor: uiTheme.colors.accentAlpha['70'],
        },

        [`&${variants.accent}${isDisabled}`]: {
          backgroundColor: uiTheme.colors.accentAlpha['60'],
        },

        [`&${variants.contrast}`]: {
          backgroundColor: uiTheme.colors.background.primaryContent,

          color: uiTheme.colors.content.primary,
        },

        [`&${variants.contrast}:has(${main}):hover`]: {
          backgroundColor: uiTheme.colors.background.panels,
        },

        [`&${variants.contrast}:has(${main}):active`]: {
          backgroundColor: uiTheme.colors.background.controlsDetails,
        },

        [`&${variants.contrast}${isDisabled}`]: {
          backgroundColor: uiTheme.colors.background.controlsDetails,

          boxShadow: `inset 0 0 0 1px ${uiTheme.colors.borderControl.default}`,
        },

        [`&:has(${main})`]: {
          cursor: 'pointer',
        },

        [`&:has(${main}:focus)`]: {
          outline: `2px solid ${uiTheme.colors.borderControl.focus2}`,
        },

        [`&${isDisabled}`]: {
          cursor: 'default',
        },
      },
    },
  },
});

// endregion Styles
