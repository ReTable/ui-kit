import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { buildRootStyles, buildVariant } from './helpers';

// region Styles

const [base, withIcon] = buildRootStyles({
  base: {
    gap: 4,
    height: 24,
    padding: 12,
    borderRadius: 12,
  },
  withIcon: {
    paddingLeft: 8,
  },
});

export { withIcon };

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.fillControl.btnPrimary,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    hover: {
      background: uiTheme.colors.fillControl.btnPrimaryHover,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    pressed: {
      background: uiTheme.colors.fillControl.btnPrimaryPressed,
    },
  },

  secondary: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.secondary,
    default: {
      border: uiTheme.colors.borderControl.default,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
      border: uiTheme.colors.borderControl.hover,
    },
    pressed: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  cancel: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.primary,
    default: {
      border: uiTheme.colors.borderControl.default,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
      border: uiTheme.colors.borderControl.hover,
    },
    pressed: {
      background: uiTheme.colors.neutralAlpha['10'],
      border: uiTheme.colors.borderControl.focus,
    },
  },

  cancelFilled: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.neutralAlpha['7'],
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
    pressed: {
      background: uiTheme.colors.neutralAlpha['15'],
    },
  },

  edit: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.accentActive,
    default: {
      border: uiTheme.colors.accentAlpha['40'],
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      border: uiTheme.colors.accentAlpha['60'],
    },
    pressed: {
      background: uiTheme.colors.accentAlpha['15'],
      border: uiTheme.colors.accentAlpha['60'],
    },
  },

  test: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.accentActive,
    default: {
      border: uiTheme.colors.accentAlpha['40'],
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      border: uiTheme.colors.accentAlpha['60'],
    },
    pressed: {
      background: uiTheme.colors.accentAlpha['15'],
      border: uiTheme.colors.accentAlpha['60'],
    },
  },

  ai: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.contrast,
    default: {
      background: `linear-gradient(to right, ${uiTheme.colors.fillControl.ai.from} 0%, ${uiTheme.colors.fillControl.ai.to} 100%)`,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    hover: {
      background: `linear-gradient(to right, ${uiTheme.colors.fillControl.aiPrimaryHover.from} 0%, ${uiTheme.colors.fillControl.aiPrimaryHover.to} 100%)`,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    pressed: {
      background: `linear-gradient(to right, ${uiTheme.colors.fillControl.aiPrimaryPressed.from} 0%, ${uiTheme.colors.fillControl.aiPrimaryPressed.to} 100%)`,
      border: uiTheme.colors.accentAlpha['60'],
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
