import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { outline } from './UiButton.css';

import { buildRootStyles, buildVariant } from './helpers';

// region Styles

const [base, withIcon] = buildRootStyles({
  base: {
    gap: 8,
    height: 40,
    padding: 24,
    borderRadius: 20,
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
      boxShadow: outline,
    },
  },

  secondary: {
    font: uiFonts.sansSerif.medium14,
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
    },
  },

  secondaryBlue: {
    font: uiFonts.sansSerif.medium14,
    color: uiTheme.colors.accent['100'],
    default: {
      border: uiTheme.colors.accentAlpha['40'],
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      border: uiTheme.colors.accentAlpha['60'],
    },
    pressed: {
      background: uiTheme.colors.accentAlpha['15'],
    },
  },

  secondaryFilled: {
    font: uiFonts.sansSerif.medium14,
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
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
