import { uiFonts, uiTheme } from '@tabula/ui-theme';

import { buildVariants } from './helpers.css';

const rootStyle = {
  base: {
    gap: 4,
    height: 20,
    padding: 12,
    borderRadius: 6,
    outlineWidth: 2,
  },
  withIcon: {
    paddingLeft: 8,
  },
};

const variantStyles = {
  contract: {
    font: uiFonts.sansSerif.semiBold12,
    default: {
      borderColor: uiTheme.colors.whiteAlpha['30'],
      color: uiTheme.colors.content.contrast,
    },
    hover: {
      background: uiTheme.colors.whiteAlpha['10'],
      borderColor: uiTheme.colors.whiteAlpha['50'],
    },
    active: {
      borderColor: uiTheme.colors.whiteAlpha['70'],
    },
    focus: {
      outlineColor: uiTheme.colors.whiteAlpha['30'],
    },
    disabled: {
      background: uiTheme.colors.whiteAlpha['10'],
      borderColor: 'transparent',
      color: uiTheme.colors.content.contrastDisabled,
    },
  },
};

export const variants = buildVariants(rootStyle, variantStyles);
