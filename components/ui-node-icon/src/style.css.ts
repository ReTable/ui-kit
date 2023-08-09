import { assignVars, style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

const overrides = {
  ...assignVars(uiTheme.colors.icons.ai, {
    primary: {
      from: uiTheme.colors.icons.disabled.primary,
      to: uiTheme.colors.icons.disabled.primary,
    },
    secondary: {
      from: uiTheme.colors.icons.disabled.secondary,
      to: uiTheme.colors.icons.disabled.secondary,
    },
  }),
  ...assignVars(uiTheme.colors.brand, {
    postgres: uiTheme.colors.icons.disabled.primary,
    snowflake: uiTheme.colors.icons.disabled.primary,
  }),
  ...assignVars(uiTheme.colors.icons.clean, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.output, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.source, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
  ...assignVars(uiTheme.colors.icons.transformation, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
    tertiary: uiTheme.colors.icons.disabled.secondary,
  }),
};

export const disabled = style({});

export const icon = style({
  '@layer': {
    [uiLayers.components]: {
      selectors: {
        [`:disabled &, &${disabled}`]: {
          vars: overrides,
        },
      },
    },
  },
});
