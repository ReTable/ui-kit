import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { uiLayers, uiStyles, uiTheme } from '@tabula/ui-theme';

import { basePadding, itemHeight, padding } from '../shared.css';

// region Constants

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
        [paddingSide]: `${basePadding}px`,
      },
    },
  }),
);

const root = style([
  uiStyles.fonts.monospace.semiBold12,
  {
    '@layer': {
      [uiLayers.components]: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        margin: '0',
        height: `${itemHeight}px`,
        paddingLeft: paddingExpr,
        paddingRight: '16px',
        lineHeight: `${itemHeight}px`,
        whiteSpace: 'nowrap',

        selectors: {
          '&::before': {
            position: 'absolute',
            top: '0',
            left: padding,
            content: '',
            display: 'inline-block',
            width: indentExpr,
            height: `${itemHeight}px`,
            backgroundImage: `linear-gradient(to right, transparent 0px, transparent 2px, ${uiTheme.colors.borderControl.default} 3px, transparent 4px, transparent ${indent})`,
            backgroundSize: `${indent} ${itemHeight}px`,
          },

          [`${position.isFirst}&, ${position.isLast}&`]: {
            height: `${itemHeight + basePadding}px`,
          },

          [`${position.isFirst}${position.isLast}&`]: {
            height: `${basePadding + itemHeight + basePadding}px`,
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
    uiStyles.fonts.monospace.regular12,
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
    '@layer': {
      [uiLayers.components]: {
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
    },
  },
});

// endregion
