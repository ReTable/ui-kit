import { style, styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { accentHover, accentPressed } from './const.css';
import { buildRootStyles, buildVariant, wrap } from './helpers.css';
import { isDisabled } from './modifiers.css';

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
      background: accentHover,
    },
    active: {
      background: accentPressed,
      boxShadow: 'unset',
    },
  },

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

// region Icon

export const icon = style(
  wrap({
    selectors: {
      [`${variants.secondary} &`]: {
        color: uiTheme.colors.content.tertiary,
      },

      [`${variants.secondary}:hover &`]: {
        color: uiTheme.colors.content.secondary,
      },

      [`${variants.secondary}:disabled &, ${variants.secondary}${isDisabled} &`]: {
        color: uiTheme.colors.content.disabled,
      },
    },
  }),
);

// endregion
