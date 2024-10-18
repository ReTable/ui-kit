import { assignVars, createThemeContract, style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

// region Theme

const variant = createThemeContract({
  root: {
    default: {
      backgroundColor: null,
    },
    disabled: {
      backgroundColor: null,
    },
  },

  input: {
    disabled: {
      backgroundColor: 'transparent',
    },
  },
});

const size = createThemeContract({
  tags: {
    gap: null,
  },
});

// endregion Themes

// region States & Variants

export const isDisabled = style({});

export const variants = styleVariants(
  {
    accent: {
      root: {
        default: {
          backgroundColor: uiTheme.colors.background.primaryContent,
        },
        disabled: {
          backgroundColor: 'transparent',
        },
      },
      input: {
        disabled: {
          backgroundColor: uiTheme.colors.background.controlsDetails,
        },
      },
    },

    contrast: {
      root: {
        default: {
          backgroundColor: 'transparent',
        },
        disabled: {
          backgroundColor: 'transparent',
        },
      },
      input: {
        disabled: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  (vars) => ({
    '@layer': {
      [uiLayers.components]: {
        vars: assignVars(variant, vars),
      },
    },
  }),
);

export const sizes = styleVariants(
  {
    small: {
      tags: {
        gap: '4px',
      },
    },

    medium: {
      tags: {
        gap: '8px',
      },
    },
  },
  (vars) => ({
    '@layer': {
      [uiLayers.components]: {
        vars: assignVars(size, vars),
      },
    },
  }),
);

// endregion States & Variants

export const tags = style({
  '@layer': {
    [uiLayers.components]: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: size.tags.gap,
      maxWidth: '100%',
      padding: '8px',

      selectors: {
        '&:empty': {
          display: 'none',
        },

        // NOTE: When component is disabled, we should remove paddings around tags.
        [`${isDisabled} &`]: {
          padding: '0',
        },
      },
    },
  },
});

export const root = style({
  '@layer': {
    [uiLayers.components]: {
      borderRadius: '6px',
      border: `1px solid ${uiTheme.colors.borderControl.default}`,

      backgroundColor: variant.root.default.backgroundColor,

      color: uiTheme.colors.content.placeholder,

      cursor: 'pointer',

      overflow: 'hidden',

      selectors: {
        [`${isDisabled}&`]: {
          backgroundColor: variant.root.disabled.backgroundColor,

          cursor: 'default',
        },

        // NOTE: When component is disabled, and at least one option is selected, then we hide
        //       borders.
        [`${isDisabled}&:has(${tags}:not(:empty))`]: {
          border: 'none',
        },
      },
    },
  },
});

export const clear = style({
  '@layer': {
    [uiLayers.components]: {},
  },
});

export const search = style([
  uiStyles.fonts.sansSerif.medium12,
  {
    '@layer': {
      [uiLayers.components]: {
        width: '100%',
        height: '30px',

        padding: '0 12px',

        border: 'none',
        background: 'transparent',

        color: uiTheme.colors.content.primary,

        selectors: {
          '&:focus': {
            outline: 'none',
          },

          '&::placeholder': {
            color: uiTheme.colors.content.placeholder,
          },

          // NOTE: When have no options are selected then we should set background color
          //       for an input.
          [`${isDisabled} ${tags}:empty + &`]: {
            backgroundColor: variant.input.disabled.backgroundColor,
          },

          // NOTE: Otherwise, we should hide an input itself.
          [`${isDisabled} ${tags}:not(:empty) + &`]: {
            display: 'none',
          },
        },
      },
    },
  },
]);
