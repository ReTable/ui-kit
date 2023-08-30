import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { primaryShadow } from './const.css';
import { buildRootStyles, buildVariant, gradient } from './helpers.css';

// region Styles

const base = buildRootStyles({
  base: {
    gap: 4,
    height: 24,
    padding: 12,
    borderRadius: 12,
    outlineWidth: 2,
  },
  withIcon: {
    paddingLeft: 8,
  },
});

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.semiBold12,
    default: {
      background: uiTheme.colors.fillControl.btnPrimary,
      color: uiTheme.colors.content.contrast,
      boxShadow: primaryShadow,
    },
    hover: {
      background: uiTheme.colors.fillControl.btnPrimaryHover,
      boxShadow: primaryShadow,
    },
    active: {
      background: uiTheme.colors.fillControl.btnPrimaryPressed,
    },
  },

  secondary: {
    font: uiFonts.sansSerif.medium12,
    default: {
      borderColor: uiTheme.colors.borderControl.default,
      color: uiTheme.colors.content.secondary,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
      borderColor: uiTheme.colors.borderControl.hover,
      color: uiTheme.colors.content.primary,
    },
    active: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  cancel: {
    font: uiFonts.sansSerif.medium12,
    default: {
      borderColor: uiTheme.colors.borderControl.default,
      color: uiTheme.colors.content.primary,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
      borderColor: uiTheme.colors.borderControl.hover,
    },
    active: {
      background: uiTheme.colors.neutralAlpha['10'],
      borderColor: uiTheme.colors.borderControl.focus,
    },
  },

  cancelFilled: {
    font: uiFonts.sansSerif.medium12,
    default: {
      background: uiTheme.colors.neutralAlpha['7'],
      color: uiTheme.colors.content.primary,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
    active: {
      background: uiTheme.colors.neutralAlpha['15'],
    },
  },

  edit: {
    font: uiFonts.sansSerif.medium12,
    default: {
      borderColor: uiTheme.colors.accentAlpha['40'],
      color: uiTheme.colors.content.accentActive,
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      borderColor: uiTheme.colors.accentAlpha['60'],
    },
    active: {
      background: uiTheme.colors.accentAlpha['15'],
      borderColor: uiTheme.colors.accentAlpha['60'],
    },
  },

  test: {
    font: uiFonts.sansSerif.semiBold12,
    default: {
      borderColor: uiTheme.colors.accentAlpha['40'],
      color: uiTheme.colors.content.accentActive,
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      borderColor: uiTheme.colors.accentAlpha['60'],
    },
    active: {
      background: uiTheme.colors.accentAlpha['15'],
      borderColor: uiTheme.colors.accentAlpha['60'],
    },
  },

  ai: {
    font: uiFonts.sansSerif.semiBold12,
    default: {
      background: gradient(uiTheme.colors.fillControl.ai),
      color: uiTheme.colors.content.contrast,
      boxShadow: primaryShadow,
    },
    hover: {
      background: gradient(uiTheme.colors.fillControl.aiPrimaryHover),
      boxShadow: primaryShadow,
    },
    active: {
      background: gradient(uiTheme.colors.fillControl.aiPrimaryPressed),
      borderColor: uiTheme.colors.accentAlpha['60'],
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
