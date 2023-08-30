import { CSSProperties, ComplexStyleRule, StyleRule, style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { disabled } from './marks.css';

// region Types

type BaseStyle = {
  gap: number;
  height: number;
  padding: number;
  borderRadius: number;
  outlineWidth: number;
};

type WithIconStyle = { paddingLeft: number } | { paddingRight: number };

type RootStyle = {
  base: BaseStyle;
  withIcon: WithIconStyle;
};

type VariantStyle = {
  font: string;

  default?: CSSProperties;
  hover?: CSSProperties;
  active?: CSSProperties;
  focus?: CSSProperties;
};

// endregion

// region Helpers

export function wrap(styleRule: StyleRule): StyleRule {
  return {
    '@layer': {
      [uiLayers.components]: styleRule,
    },
  };
}

// endregion

// region Root Styles

export function buildRootStyles(rootStyle: RootStyle): [string, string] {
  const base = style(
    wrap({
      gap: `${rootStyle.base.gap}px`,
      height: `${rootStyle.base.height}px`,
      padding: `0 ${rootStyle.base.padding}px`,
      borderRadius: `${rootStyle.base.borderRadius}px`,

      selectors: {
        '&:focus': {
          outlineWidth: `${rootStyle.base.outlineWidth}px`,
        },
      },
    }),
  );

  const icon =
    'paddingLeft' in rootStyle.withIcon
      ? { paddingLeft: `${rootStyle.withIcon.paddingLeft}px` }
      : { paddingRight: `${rootStyle.withIcon.paddingRight}px` };

  const withIcon = style(wrap(icon));

  return [base, withIcon];
}

// endregion

// region Variants

export function buildVariant(root: string, variant: VariantStyle): ComplexStyleRule {
  const selectors: StyleRule['selectors'] = {};

  if (variant.default) {
    selectors[`&:not(:disabled, ${disabled})`] = variant.default;
  }

  if (variant.hover) {
    selectors[`&:not(:disabled, ${disabled}):hover`] = variant.hover;
  }

  if (variant.active) {
    selectors[`&:not(:disabled, ${disabled}):active`] = variant.active;
  }

  if (variant.focus) {
    selectors[`&:not(:disabled, ${disabled}):focus`] = variant.focus;
  }

  return [root, variant.font, wrap({ selectors })];
}

// endregion
