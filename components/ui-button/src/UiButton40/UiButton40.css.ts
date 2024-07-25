import { uiStyles, uiTheme } from '@tabula/ui-theme';

import { accentHover, accentPressed, primaryShadow } from '../const.css';
import { buildVariants } from '../variants.css';

const rootStyle = {
  gap: '8px',
  height: '40px',
  padding: '0 24px',
  borderRadius: '20px',
  outlineWidth: '3px',

  icon: {
    paddingLeft: '16px',
  },
};

const variantStyles = {
  primary: {
    font: uiStyles.fonts.sansSerif.semiBold14,
    default: {
      background: uiTheme.colors.accent['100'],
      color: uiTheme.colors.content.contrast,
      boxShadow: primaryShadow,
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
    font: uiStyles.fonts.sansSerif.medium14,
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
    },
  },

  secondaryBlue: {
    font: uiStyles.fonts.sansSerif.medium14,
    default: {
      borderColor: uiTheme.colors.accentAlpha['40'],
      color: uiTheme.colors.accent['100'],
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      borderColor: uiTheme.colors.accentAlpha['60'],
    },
    active: {
      background: uiTheme.colors.accentAlpha['15'],
    },
  },

  secondaryFilled: {
    font: uiStyles.fonts.sansSerif.medium14,
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

  secondaryDark: {
    font: uiStyles.fonts.sansSerif.semiBold14,
    default: {
      borderColor: uiTheme.colors.content.contrast,
      color: uiTheme.colors.content.contrast,
    },
    hover: {
      background: accentHover,
      borderColor: accentHover,
    },
    active: {
      background: accentPressed,
      borderColor: accentPressed,
    },
  },
};

export const variants = buildVariants(rootStyle, variantStyles);
