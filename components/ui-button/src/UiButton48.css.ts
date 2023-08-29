import {
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';

import { uiFonts, uiLayers, uiTheme } from '@tabula/ui-theme';

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

  overrides?: CSSProperties;
};

// endregion

// region Helpers

function buildStateProperties({ background, border, boxShadow }: StateStyle) {
  const stateStyle: CSSProperties = {};

  if (background) {
    stateStyle.backgroundColor = background;
  }

  if (border) {
    stateStyle.borderColor = border;
  }

  if (boxShadow) {
    stateStyle.boxShadow = boxShadow;
  }

  return stateStyle;
}

function buildDefaultProperties(color: string, stateStyle: StateStyle): StyleRule['selectors'] {
  const properties = buildStateProperties(stateStyle);

  properties.color = color;

  return {
    '&:not(:disabled)': properties,
  };
}

function buildHoverProperties(stateStyle: StateStyle): StyleRule['selectors'] {
  const hoverProperties = buildStateProperties(stateStyle);

  if (stateStyle.boxShadow == null) {
    return {
      '&:not(:disabled):focus, &:not(:disabled):hover': hoverProperties,
    };
  }

  delete hoverProperties.boxShadow;

  const focusProperties = {
    boxShadow: `${outline}, ${stateStyle.boxShadow}`,
  };

  return {
    '&:not(:disabled):focus, &:not(:disabled):hover': hoverProperties,
    '&:not(:disabled):focus': focusProperties,
  };
}

function buildPressedProperties(stateStyle: StateStyle): StyleRule['selectors'] {
  return {
    '&:not(:disabled):active': buildStateProperties(stateStyle),
  };
}

function buildVariant(root: string, variant: VariantStyle): ComplexStyleRule {
  return [
    root,
    variant.font,
    {
      '@layer': {
        [uiLayers.components]: {
          ...variant.overrides,

          selectors: {
            ...buildDefaultProperties(variant.color, variant.default),
            ...buildHoverProperties(variant.hover),
            ...buildPressedProperties(variant.pressed),
          },
        },
      },
    },
  ];
}

// endregion

// region Styles

const base = style({
  '@layer': {
    [uiLayers.components]: {
      gap: '16px',
      height: '48px',
      padding: '0 32px',
      borderRadius: '24px',
    },
  },
});

export const withIcon = style({
  paddingRight: '16px',
});

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.medium18,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.accent['100'],
      boxShadow: '0px 5px 10px 0px rgba(77, 152, 236, 0.2)',
    },
    hover: {
      // TODO(demiazz): This color must be in the palette.
      background: '#3192fe',
      boxShadow: '0px 5px 10px 0px rgba(77, 152, 236, 0.2)',
    },
    pressed: {
      // TODO(demiazz): This color must be in the palette.
      background: '#0b72e4',
      boxShadow: outline,
    },
  },

  // TODO: Icon must have different color instead of text color.
  secondary: {
    font: uiFonts.sansSerif.regular18,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.accentShades.secondary1,
    },
    hover: {
      background: uiTheme.colors.accentShades.secondary2,
    },
    pressed: {
      background: uiTheme.colors.accentShades.secondary3,
    },
    overrides: {
      gap: '32px',
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
