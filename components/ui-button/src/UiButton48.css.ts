import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { buildRootStyles, buildVariant } from './helpers.css';

// region Styles

const base = buildRootStyles({
  base: {
    gap: 16,
    height: 48,
    padding: 32,
    borderRadius: 24,
    outlineWidth: 3,
  },
  withIcon: {
    paddingRight: 16,
  },
});

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.medium18,
    default: {
      background: uiTheme.colors.accent['100'],
      color: uiTheme.colors.content.contrast,
      boxShadow: '0 5px 10px 0 rgba(77, 152, 236, 0.2)',
    },
    hover: {
      // TODO(demiazz): This color must be in the palette.
      background: '#3192fe',
    },
    active: {
      // TODO(demiazz): This color must be in the palette.
      background: '#0b72e4',
      boxShadow: 'unset',
    },
  },

  // TODO: Icon must have different color instead of text color.
  secondary: {
    font: uiFonts.sansSerif.regular18,
    default: {
      gap: '32px',
      background: uiTheme.colors.accentShades.secondary1,
      color: uiTheme.colors.content.primary,
    },
    hover: {
      background: uiTheme.colors.accentShades.secondary2,
    },
    active: {
      background: uiTheme.colors.accentShades.secondary3,
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
