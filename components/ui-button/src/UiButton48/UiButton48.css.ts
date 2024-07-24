import { style } from '@vanilla-extract/css';

import { uiTheme } from '@tabula/ui-theme';

import { accentHover, accentPressed } from '../const.css';
import { buildVariants } from '../variants.css';

import { wrap } from '../helpers';

const rootStyle = {
  gap: '16px',
  height: '48px',
  padding: '0 32px',
  borderRadius: '24px',
  outlineWidth: '3px',

  icon: {
    paddingRight: '16px',
  },
};

const variantStyles = {
  primary: {
    font: uiTheme.fonts.sansSerif.medium18,
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
    font: uiTheme.fonts.sansSerif.regular18,
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

      [`${variants.secondary}:disabled &, ${variants.secondary}[aria-disabled="true"] &`]: {
        color: uiTheme.colors.content.disabled,
      },
    },
  }),
);
