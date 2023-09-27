import { style, styleVariants } from '@vanilla-extract/css';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

// region Line

const baseLine = style([
  uiFonts.monospace.semiBold12,
  {
    height: '20px',
    margin: '0',
    padding: '2px 0',
  },
]);

export const line = styleVariants(
  {
    boolean: uiTheme.colors.code.function,
    null: uiTheme.colors.code.function,
    number: uiTheme.colors.code.numbers,
    string: uiTheme.colors.code.stringLight,
    boundary: uiTheme.colors.content.primary,
    placeholder: uiTheme.colors.content.tertiary,
  },
  (color) => [baseLine, { color }],
);

// endregion

export const toggleButton = style({
  display: 'inline-block',
  width: '16px',
  height: '16px',
  lineHeight: '0',
});

// region Service

export const property = style([
  uiFonts.monospace.semiBold12,
  {
    color: uiTheme.colors.content.primary,
  },
]);

export const meta = style([
  uiFonts.monospace.regular10,
  {
    color: uiTheme.colors.content.secondary,
    userSelect: 'none',
  },
]);

// endregion
