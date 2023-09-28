import { createVar, fallbackVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiFonts, uiTheme } from '@tabula/ui-theme';

export const indentVar = createVar();

// region Line

const lineHeight = '24px';

const indentStepWidth = '4ch';

const paddingLeft = calc.multiply(fallbackVar(indentVar, '0'), indentStepWidth);

const baseLine = style([
  uiFonts.monospace.semiBold12,
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    lineHeight: lineHeight,
    height: lineHeight,
    margin: '0',
    paddingLeft,

    selectors: {
      '&::before': {
        position: 'absolute',
        top: '0',
        left: '0',
        content: '',
        display: 'inline-block',
        width: paddingLeft,
        height: '100%',
        backgroundImage: `linear-gradient(to right, transparent 0px, transparent 2px, ${uiTheme.colors.borderControl.default} 3px, transparent 4px, transparent ${indentStepWidth})`,
        backgroundSize: `${indentStepWidth} ${lineHeight}`,
      },
    },
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

export const toggleButton = style([
  uiFonts.monospace.regular12,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '16px',
    height: '16px',
    marginLeft: '-4px',
    marginRight: '4px',
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
