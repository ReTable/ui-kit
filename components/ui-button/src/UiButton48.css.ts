import { style } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { accentHover, accentPressed } from './const.css';
import { isDisabled } from './modifiers.css';
import { buildVariants } from './variants.css';

import { wrap } from './helpers';

const rootStyle = {
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
};

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

export const variants = buildVariants(rootStyle, variantStyles);

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
