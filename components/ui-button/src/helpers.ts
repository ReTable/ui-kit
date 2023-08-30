import { CSSProperties, ComplexStyleRule, StyleRule, style } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { outline } from './UiButton.css';

// region Types

type BaseStyle = {
  gap: number;
  height: number;
  padding: number;
  borderRadius: number;
};

type WithIconStyle = { paddingLeft: number } | { paddingRight: number };

type RootStyle = {
  base: BaseStyle;
  withIcon: WithIconStyle;
};

type StateStyle = {
  background?: string;
  border?: string;
  boxShadow?: string;
};

type VariantStyle = {
  font: string;

  color: string;

  default: StateStyle;
  hover: StateStyle;
  pressed: StateStyle;
};

// endregion

// region Root Styles

export function buildRootStyles(rootStyle: RootStyle): [string, string] {
  const base = style({
    '@layer': {
      [uiLayers.components]: {
        gap: `${rootStyle.base.gap}px`,
        height: `${rootStyle.base.height}px`,
        padding: `0 ${rootStyle.base.padding}px`,
        borderRadius: `${rootStyle.base.borderRadius}px`,
      },
    },
  });

  const icon =
    'paddingLeft' in rootStyle.withIcon
      ? { paddingLeft: `${rootStyle.withIcon.paddingLeft}px` }
      : { paddingRight: `${rootStyle.withIcon.paddingRight}px` };

  const withIcon = style({
    '@layer': {
      [uiLayers.components]: {
        ...icon,
      },
    },
  });

  return [base, withIcon];
}

// endregion

// region Variants

function buildStateProperties({ background, border, boxShadow }: StateStyle) {
  const stateStyle: CSSProperties = {};

  if (background) {
    stateStyle.background = background;
  }

  if (border) {
    stateStyle.borderColor = border;
  }

  if (boxShadow) {
    stateStyle.boxShadow = boxShadow;
  }

  return stateStyle;
}

function buildDefaultProperties(color: string, stateStyle: StateStyle): StyleRule {
  const properties = buildStateProperties(stateStyle);

  properties.color = color;

  return properties;
}

function buildHoverProperties(stateStyle: StateStyle): StyleRule['selectors'] {
  const hoverProperties = buildStateProperties(stateStyle);

  if (stateStyle.boxShadow == null) {
    return {
      [`&:focus, &:hover`]: hoverProperties,
    };
  }

  delete hoverProperties.boxShadow;

  const focusProperties = {
    boxShadow: `${outline}, ${stateStyle.boxShadow}`,
  };

  return {
    [`&:focus, &:hover`]: hoverProperties,
    [`&:focus`]: focusProperties,
  };
}

function buildPressedProperties(stateStyle: StateStyle): StyleRule['selectors'] {
  return {
    [`&:active`]: buildStateProperties(stateStyle),
  };
}

export function buildVariant(root: string, variant: VariantStyle): ComplexStyleRule {
  return [
    root,
    variant.font,
    {
      '@layer': {
        [uiLayers.components]: {
          ...buildDefaultProperties(variant.color, variant.default),

          selectors: {
            ...buildHoverProperties(variant.hover),
            ...buildPressedProperties(variant.pressed),
          },
        },
      },
    },
  ];
}

// endregion
