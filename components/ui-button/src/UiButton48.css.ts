import { style, styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

import { outline } from './UiButton.css';

import { buildVariant } from './helpers';

// region Styles

const base = style({
  '@layer': {
    [uiLayers.components]: {
      gap: '16px',
      height: '48px',
      padding: '0 32px',
      borderRadius: '24px',
    },
  },
});

export const withIcon = style({
  paddingRight: '16px',
});

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.medium18,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.accent['100'],
      boxShadow: '0px 5px 10px 0px rgba(77, 152, 236, 0.2)',
    },
    hover: {
      // TODO(demiazz): This color must be in the palette.
      background: '#3192fe',
      boxShadow: '0px 5px 10px 0px rgba(77, 152, 236, 0.2)',
    },
    pressed: {
      // TODO(demiazz): This color must be in the palette.
      background: '#0b72e4',
      boxShadow: outline,
    },
  },

  // TODO: Icon must have different color instead of text color.
  secondary: {
    font: uiFonts.sansSerif.regular18,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.accentShades.secondary1,
    },
    hover: {
      background: uiTheme.colors.accentShades.secondary2,
    },
    pressed: {
      background: uiTheme.colors.accentShades.secondary3,
    },
    overrides: {
      gap: '32px',
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
