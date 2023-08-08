import { assignVars, style } from '@vanilla-extract/css';

import { uiLayers, uiTheme } from '@tabula/ui-theme';

export const disabled = style({});

const selector = `:disabled &, &${disabled}`;

function override(vars: Record<string, string>): string {
  return style({
    '@layer': {
      [uiLayers.components]: {
        selectors: {
          [selector]: {
            vars,
          },
        },
      },
    },
  });
}

export const ai = override(
  assignVars(uiTheme.colors.icons.ai, {
    primary: {
      from: uiTheme.colors.icons.disabled.primary,
      to: uiTheme.colors.icons.disabled.primary,
    },
    secondary: {
      from: uiTheme.colors.icons.disabled.secondary,
      to: uiTheme.colors.icons.disabled.secondary,
    },
  }),
);

export const brand = override(
  assignVars(uiTheme.colors.brand, {
    postgres: uiTheme.colors.icons.disabled.primary,
    snowflake: uiTheme.colors.icons.disabled.primary,
  }),
);

export const clean = override(
  assignVars(uiTheme.colors.icons.clean, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
);

export const output = override(
  assignVars(uiTheme.colors.icons.output, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
);

export const source = override(
  assignVars(uiTheme.colors.icons.source, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
  }),
);

export const transformation = override(
  assignVars(uiTheme.colors.icons.transformation, {
    primary: uiTheme.colors.icons.disabled.primary,
    secondary: uiTheme.colors.icons.disabled.secondary,
    tertiary: uiTheme.colors.icons.disabled.secondary,
  }),
);
