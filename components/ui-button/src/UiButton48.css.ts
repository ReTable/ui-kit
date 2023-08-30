import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { buildRootStyles, buildVariant } from './helpers';

// region Styles

const [base, withIcon] = buildRootStyles({
  base: {
    gap: 16,
    height: 48,
    padding: 32,
    borderRadius: 24,
  },
  withIcon: {
    paddingRight: 16,
  },
});

export { withIcon };

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.medium18,
    default: {
      background: uiTheme.colors.accent['100'],
      color: uiTheme.colors.content.contrast,
      boxShadow: '0px 5px 10px 0px rgba(77, 152, 236, 0.2)',
    },
    hover: {
      // TODO(demiazz): This color must be in the palette.
      background: '#3192fe',
      boxShadow: '0px 5px 10px 0px rgba(77, 152, 236, 0.2)',
    },
    active: {
      // TODO(demiazz): This color must be in the palette.
      background: '#0b72e4',
    },
  },

  // TODO: Icon must have different color instead of text color.
  secondary: {
    font: uiFonts.sansSerif.regular18,
    default: {
      background: uiTheme.colors.accentShades.secondary1,
      color: uiTheme.colors.content.primary,
    },
    hover: {
      background: uiTheme.colors.accentShades.secondary2,
    },
    active: {
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
