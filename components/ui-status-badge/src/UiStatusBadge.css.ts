import { style, styleVariants } from '@vanilla-extract/css';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      width: '16px',
      height: '16px',
    },
  },
});

export const root = style([
  uiStyles.fonts.sansSerif.semiBold10,
  {
    '@layer': {
      [uiLayers.components]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        height: '24px',
        width: 'fit-content',
        padding: '0 12px',
        borderRadius: '12px',

        selectors: {
          [`&:has(${icon})`]: {
            paddingLeft: '4px',
          },
        },
      },
    },
  },
]);

export const variants = styleVariants(
  {
    active: {
      backgroundColor: uiTheme.colors.status.running,
      color: uiTheme.colors.content.accentActive,
    },
    error: {
      backgroundColor: uiTheme.colors.status.error,
      color: uiTheme.colors.content.error,
    },
    inactive: {
      backgroundColor: uiTheme.colors.status.idle,
      color: uiTheme.colors.content.tertiary,
    },
    success: {
      backgroundColor: uiTheme.colors.status.success,
      color: uiTheme.colors.content.success,
    },
  },
  (styles) => [root, styles],
);
