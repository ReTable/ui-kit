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
      gap: '8px',
      height: '40px',
      padding: '0 24px',
      borderRadius: '20px',
    },
  },
});

export const withIcon = style({
  paddingLeft: '16px',
});

// endregion

// region Variants

const variantStyles = {
  primary: {
    font: uiFonts.sansSerif.semiBold14,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.fillControl.btnPrimary,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    hover: {
      background: uiTheme.colors.fillControl.btnPrimaryHover,
      boxShadow: '0px 2px 6px 0px rgba(81, 106, 130, 0.2)',
    },
    pressed: {
      background: uiTheme.colors.fillControl.btnPrimaryPressed,
      boxShadow: outline,
    },
  },

  secondary: {
    font: uiFonts.sansSerif.medium14,
    color: uiTheme.colors.content.primary,
    default: {
      border: uiTheme.colors.borderControl.default,
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
      border: uiTheme.colors.borderControl.hover,
    },
    pressed: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  secondaryBlue: {
    font: uiFonts.sansSerif.medium14,
    color: uiTheme.colors.accent['100'],
    default: {
      border: uiTheme.colors.accentAlpha['40'],
    },
    hover: {
      background: uiTheme.colors.accentAlpha['10'],
      border: uiTheme.colors.accentAlpha['60'],
    },
    pressed: {
      background: uiTheme.colors.accentAlpha['15'],
    },
  },

  secondaryFilled: {
    font: uiFonts.sansSerif.medium14,
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
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
