import { CSSProperties, ComplexStyleRule, StyleRule } from '@vanilla-extract/css';

import { uiLayers } from '@tabula/ui-theme';

import { outline } from './UiButton.css';

// region Types

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

// Helpers

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
