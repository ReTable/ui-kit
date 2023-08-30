import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { accentHover, accentPressed, primaryShadow } from './const.css';
import { buildVariants } from './helpers.css';

const rootStyle = {
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
};

const variantStyles = {
  primaryDesign: {
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
      boxShadow: '0 4px 4px 0 rgba(18, 127, 249, 0.1)',
    },
    hover: {
      background: accentHover,
    },
    active: {
      background: accentPressed,
      boxShadow: 'unset',
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
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 12px 0 rgba(0, 0, 0, 0.08)',
    },
    hover: {
      color: uiTheme.colors.content.primary,
    },
    active: {
      background: uiTheme.colors.background.panels,
      borderColor: uiTheme.colors.neutralAlpha['10'],
      boxShadow: 'unset',
    },
  },
};

export const variants = buildVariants(rootStyle, variantStyles);
