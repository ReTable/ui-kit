import { uiTheme } from '@tabula/ui-theme';

import { accentHover, accentPressed, primaryShadow } from '../const.css';
import { buildVariants } from '../variants.css';

import { gradient } from '../helpers';

const rootStyle = {
  gap: '6px',
  height: '24px',
  padding: '0 12px',
  borderRadius: '12px',
  outlineWidth: '2px',

  icon: {
    paddingLeft: '8px',
  },
};

const variantStyles = {
  primary: {
    font: uiTheme.fonts.sansSerif.semiBold12,
    default: {
      background: uiTheme.colors.fillControl.btnPrimary,
      color: uiTheme.colors.content.contrast,
      boxShadow: primaryShadow,
    },
    hover: {
      background: uiTheme.colors.fillControl.btnPrimaryHover,
    },
    active: {
      background: uiTheme.colors.fillControl.btnPrimaryPressed,
      boxShadow: 'unset',
    },
  },

  secondary: {
    font: uiTheme.fonts.sansSerif.medium12,
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

  primaryHeader: {
    font: uiTheme.fonts.sansSerif.medium12,
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

  secondaryHeader: {
    font: uiTheme.fonts.sansSerif.medium12,
    default: {
      background: uiTheme.colors.whiteAlpha['20'],
      color: uiTheme.colors.content.contrast,
    },
    hover: {
      background: uiTheme.colors.whiteAlpha['15'],
    },
    focus: {
      outlineColor: uiTheme.colors.whiteAlpha['50'],
    },
    active: {
      background: uiTheme.colors.whiteAlpha['10'],
    },
  },

  cancel: {
    font: uiTheme.fonts.sansSerif.medium12,
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
    font: uiTheme.fonts.sansSerif.medium12,
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
    font: uiTheme.fonts.sansSerif.medium12,
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
    font: uiTheme.fonts.sansSerif.semiBold12,
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
    font: uiTheme.fonts.sansSerif.semiBold12,
    default: {
      background: gradient(uiTheme.colors.fillControl.ai),
      color: uiTheme.colors.content.contrast,
      boxShadow: primaryShadow,
    },
    hover: {
      background: gradient(uiTheme.colors.fillControl.aiPrimaryHover),
    },
    active: {
      background: gradient(uiTheme.colors.fillControl.aiPrimaryPressed),
      borderColor: uiTheme.colors.accentAlpha['60'],
      boxShadow: 'unset',
    },
  },
};

export const variants = buildVariants(rootStyle, variantStyles);
