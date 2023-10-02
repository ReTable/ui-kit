import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

import { padding } from './UiJsonView.css';

// region Constants

export const height = 24;

const indent = '4ch';

// end

// region Variables

export const level = createVar();

// endregion

// region Expressions

const indentExpr = calc.add(calc.multiply(level, indent));

const paddingExpr = calc.add(padding, indentExpr);

// endregion

// region Root

const root = style([
  uiFonts.monospace.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        margin: '0',
        height: `${height}px`,
        paddingLeft: paddingExpr,
        lineHeight: `${height}px`,

        selectors: {
          '&::before': {
            position: 'absolute',
            top: '0',
            left: padding,
            content: '',
            display: 'inline-block',
            width: indentExpr,
            height: '100%',
            backgroundImage: `linear-gradient(to right, transparent 0px, transparent 2px, ${uiTheme.colors.borderControl.default} 3px, transparent 4px, transparent ${indent})`,
            backgroundSize: `${indent} ${height}px`,
          },
        },

        vars: {
          [level]: '0',
        },
      },
    },
  },
]);

export const variants = styleVariants(
  {
    bool: uiTheme.colors.code.function,
    null: uiTheme.colors.code.function,
    int: uiTheme.colors.code.numbers,
    float: uiTheme.colors.code.numbers,
    string: uiTheme.colors.code.stringLight,
    boundary: uiTheme.colors.content.primary,
    placeholder: uiTheme.colors.content.tertiary,
  },
  (color) => [
    root,
    {
      '@layer': {
        [uiLayers.components]: {
          color,
        },
      },
    },
  ],
);

// endregion

// region Controls

export const controls = styleVariants({
  toggle: [
    uiFonts.monospace.regular12,
    {
      '@layer': {
        [uiLayers.components]: {
          position: 'absolute',
          left: calc.subtract(paddingExpr, '19px'),
          top: '4px',
        },
      },
    },
  ],
});

// endregion
