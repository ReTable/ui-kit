import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

import { padding } from './UiJsonView.css';

// region Constants

export const height = 24;

export const verticalPadding = 16;

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

export const position = styleVariants(
  {
    isFirst: 'paddingTop',
    isLast: 'paddingBottom',
  },
  (paddingSide) => ({
    '@layer': {
      [uiLayers.components]: {
        [paddingSide]: `${verticalPadding}px`,
      },
    },
  }),
);

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
        paddingRight: '16px',
        lineHeight: `${height}px`,
        whiteSpace: 'nowrap',

        selectors: {
          '&::before': {
            position: 'absolute',
            top: '0',
            left: padding,
            content: '',
            display: 'inline-block',
            width: indentExpr,
            height: `${height}px`,
            backgroundImage: `linear-gradient(to right, transparent 0px, transparent 2px, ${uiTheme.colors.borderControl.default} 3px, transparent 4px, transparent ${indent})`,
            backgroundSize: `${indent} ${height}px`,
          },

          [`${position.isFirst}&, ${position.isLast}&`]: {
            height: `${height + verticalPadding}px`,
          },

          [`${position.isFirst}${position.isLast}&`]: {
            height: `${verticalPadding + height + verticalPadding}px`,
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
          left: calc.subtract(paddingExpr, '19.5px'),
          top: '4px',

          selectors: {
            [`${position.isFirst} &`]: {
              top: '20px',
            },
          },
        },
      },
    },
  ],

  action: {
    marginLeft: '1ch',
    opacity: 0,
    transition: `${uiTheme.duration.fast['1']} ${uiTheme.easing.standard.productive}`,

    selectors: {
      '& + &': {
        marginLeft: '0.5ch',
      },

      [`${root}:hover &`]: {
        opacity: 1,
      },
    },
  },
});

// endregion
