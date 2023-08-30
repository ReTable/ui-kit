import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { outline } from './UiButton.css';

import { buildRootStyles, buildVariant } from './helpers';

// region Styles

const [base, withIcon] = buildRootStyles({
  base: {
    gap: 6,
    height: 32,
    padding: 20,
    borderRadius: 16,
  },
  withIcon: {
    paddingLeft: 16,
  },
});

export { withIcon };

// endregion

// region Variants

const variantStyles = {
  primaryDesign: {
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
      boxShadow: outline,
    },
  },

  secondaryDesign: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.neutralAlpha['5'],
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
    },
    pressed: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  primaryList: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.accent['100'],
      boxShadow: '0px 4px 4px 0px rgba(18, 127, 249, 0.1)',
    },
    hover: {
      background: '#3192fe',
      boxShadow: '0px 4px 4px 0px rgba(18, 127, 249, 0.1)',
    },
    pressed: {
      background: '#0b72e4',
    },
  },

  secondaryList: {
    font: uiFonts.sansSerif.medium12,
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

  dangerousList: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.fillControl.btnDanger,
    },
    hover: {
      background: uiTheme.colors.fillControl.btnDangerHover,
    },
    pressed: {
      background: uiTheme.colors.fillControl.btnDangerPressed,
    },
  },

  shadowList: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.background.primaryContent,
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 12px 0px rgba(0, 0, 0, 0.08)',
    },
    hover: {
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 12px 0px rgba(0, 0, 0, 0.08)',
    },
    pressed: {
      background: uiTheme.colors.background.panels,
      border: uiTheme.colors.neutralAlpha['10'],
      boxShadow: outline,
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
