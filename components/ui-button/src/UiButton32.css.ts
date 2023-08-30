import { styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { buildRootStyles, buildVariant } from './helpers';

// region Styles

const [base, withIcon] = buildRootStyles({
  base: {
    gap: 6,
    height: 32,
    padding: 20,
    borderRadius: 16,
    outlineWidth: 2,
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

  secondaryDesign: {
    font: uiFonts.sansSerif.medium12,
    default: {
      background: uiTheme.colors.neutralAlpha['5'],
      color: uiTheme.colors.content.primary,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
    },
    active: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  primaryList: {
    font: uiFonts.sansSerif.semiBold12,
    default: {
      background: uiTheme.colors.accent['100'],
      color: uiTheme.colors.content.contrast,
      boxShadow: '0px 4px 4px 0px rgba(18, 127, 249, 0.1)',
    },
    hover: {
      background: '#3192fe',
      boxShadow: '0px 4px 4px 0px rgba(18, 127, 249, 0.1)',
    },
    active: {
      background: '#0b72e4',
    },
  },

  secondaryList: {
    font: uiFonts.sansSerif.medium12,
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

  dangerousList: {
    font: uiFonts.sansSerif.semiBold12,
    default: {
      background: uiTheme.colors.fillControl.btnDanger,
      color: uiTheme.colors.content.contrast,
    },
    hover: {
      background: uiTheme.colors.fillControl.btnDangerHover,
    },
    active: {
      background: uiTheme.colors.fillControl.btnDangerPressed,
    },
    focus: {
      outlineColor: uiTheme.colors.borderControl.dangerFocus,
    },
  },

  shadowList: {
    font: uiFonts.sansSerif.medium12,
    default: {
      background: uiTheme.colors.background.primaryContent,
      color: uiTheme.colors.content.secondary,
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 12px 0px rgba(0, 0, 0, 0.08)',
    },
    hover: {
      color: uiTheme.colors.content.primary,
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 12px 0px rgba(0, 0, 0, 0.08)',
    },
    active: {
      background: uiTheme.colors.background.panels,
      border: uiTheme.colors.neutralAlpha['10'],
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
