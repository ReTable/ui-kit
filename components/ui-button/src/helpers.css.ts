import { CSSProperties, ComplexStyleRule, StyleRule, style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { hasIcon, isDisabled } from './modifiers.css';

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

export function buildRootStyles(rootStyle: RootStyle): string {
  const icon =
    'paddingLeft' in rootStyle.withIcon
      ? { paddingLeft: `${rootStyle.withIcon.paddingLeft}px` }
      : { paddingRight: `${rootStyle.withIcon.paddingRight}px` };

  return style(
    wrap({
      gap: `${rootStyle.base.gap}px`,
      height: `${rootStyle.base.height}px`,
      padding: `0 ${rootStyle.base.padding}px`,
      borderRadius: `${rootStyle.base.borderRadius}px`,

      selectors: {
        '&:focus': {
          outlineWidth: `${rootStyle.base.outlineWidth}px`,
        },

        [`&${hasIcon}`]: icon,
      },
    }),
  );
}

// endregion

// region Variants

export function buildVariant(root: string, variant: VariantStyle): ComplexStyleRule {
  const selectors: StyleRule['selectors'] = {};

  if (variant.default) {
    selectors[`&:not(:disabled, ${isDisabled})`] = variant.default;
  }

  if (variant.hover) {
    selectors[`&:not(:disabled, ${isDisabled}):hover`] = variant.hover;
  }

  if (variant.active) {
    selectors[`&:not(:disabled, ${isDisabled}):active`] = variant.active;
  }

  if (variant.focus) {
    selectors[`&:not(:disabled, ${isDisabled}):focus`] = variant.focus;
  }

  return [root, variant.font, wrap({ selectors })];
}

// endregion