import { createVar, fallbackVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

// region CSS Variables

// NOTE: Used to toggle minimal padding for array/object values, because we can want to render expand/collapse buttons.
export const basePaddingVar = createVar();

// NOTE: Used to calculate padding sizes depends on the level.
export const levelVar = createVar();

// endregion

// region Line

const height = '24px';

const indentStepWidth = '4ch';

const level = fallbackVar(levelVar, '0');

const basePadding = fallbackVar(basePaddingVar, '0');

const indentWidth = calc.add(calc.multiply(level, indentStepWidth));

const padding = calc.add(basePadding, indentWidth);

const baseLine = style([
  uiFonts.monospace.semiBold12,
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    margin: '0',
    height,
    paddingLeft: padding,
    lineHeight: height,

    selectors: {
      '&::before': {
        position: 'absolute',
        top: '0',
        left: basePadding,
        content: '',
        display: 'inline-block',
        width: indentWidth,
        height: '100%',
        backgroundImage: `linear-gradient(to right, transparent 0px, transparent 2px, ${uiTheme.colors.borderControl.default} 3px, transparent 4px, transparent ${indentStepWidth})`,
        backgroundSize: `${indentStepWidth} ${height}`,
      },
    },
  },
]);

export const container = styleVariants(
  {
    plain: 0,
    nested: 24,
  },
  (value) => ({
    vars: {
      [basePaddingVar]: `${value}px`,
    },
  }),
);

export const lines = styleVariants(
  {
    bool: uiTheme.colors.code.function,
    null: uiTheme.colors.code.function,
    int: uiTheme.colors.code.numbers,
    float: uiTheme.colors.code.numbers,
    string: uiTheme.colors.code.stringLight,
    boundary: uiTheme.colors.content.primary,
    placeholder: uiTheme.colors.content.tertiary,
  },
  (color) => [baseLine, { color }],
);

// endregion

// region Actions & Controls

export const toggleButton = style([
  uiFonts.monospace.regular12,
  {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '16px',
    height: '16px',
    left: calc.subtract(padding, '19px'),
    top: '4px',
    background: 'transparent',
    border: `1px solid ${uiTheme.colors.borderControl.default}`,
    borderRadius: '4px',
    padding: '0',
    transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,
    userSelect: 'none',
    cursor: 'pointer',
    color: uiTheme.colors.content.primary,

    selectors: {
      '&:focus': {
        outlineStyle: 'solid',
        outlineColor: uiTheme.colors.borderControl.focus2,
      },

      '&:hover': {
        backgroundColor: uiTheme.colors.neutralAlpha['7'],
        borderColor: uiTheme.colors.borderControl.hover,
      },

      '&:active': {
        backgroundColor: uiTheme.colors.neutralAlpha['10'],
        borderColor: uiTheme.colors.borderControl.focus,
        transition: 'none',
      },
    },
  },
]);

// endregion

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
