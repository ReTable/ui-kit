import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { buildRootStyles, buildVariant } from './helpers';

// region Styles

const [base, withIcon] = buildRootStyles({
  base: {
    gap: 8,
    height: 40,
    padding: 24,
    borderRadius: 20,
    outlineWidth: 3,
  },
  withIcon: {
    paddingLeft: 16,
  },
});

export { withIcon };

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.semiBold14,
    default: {
      background: uiTheme.colors.fillControl.btnPrimary,
      color: uiTheme.colors.content.contrast,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    hover: {
      background: uiTheme.colors.fillControl.btnPrimaryHover,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    active: {
      background: uiTheme.colors.fillControl.btnPrimaryPressed,
    },
  },

  secondary: {
    font: uiFonts.sansSerif.medium14,
    default: {
      border: uiTheme.colors.borderControl.default,
      color: uiTheme.colors.content.primary,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
      border: uiTheme.colors.borderControl.hover,
    },
    active: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  secondaryBlue: {
    font: uiFonts.sansSerif.medium14,
    default: {
      border: uiTheme.colors.accentAlpha['40'],
      color: uiTheme.colors.accent['100'],
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      border: uiTheme.colors.accentAlpha['60'],
    },
    active: {
      background: uiTheme.colors.accentAlpha['15'],
    },
  },

  secondaryFilled: {
    font: uiFonts.sansSerif.medium14,
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
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
