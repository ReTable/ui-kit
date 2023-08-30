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

function buildVariant(root: string, variant: VariantStyle): ComplexStyleRule {
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

// region Styles

const base = style({
  '@layer': {
    [uiLayers.components]: {
      gap: '6px',
      height: '32px',
      padding: '0 20px',
      borderRadius: '16px',
    },
  },
});

export const withIcon = style({
  paddingLeft: '16px',
});

// endregion

// region Variants

const variantStyles = {
  primaryDesign: {
    font: uiFonts.sansSerif.semiBold12,
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

  secondaryDesign: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.neutralAlpha['5'],
    },
    hover: {
      background: uiTheme.colors.neutralAlpha['7'],
    },
    pressed: {
      background: uiTheme.colors.neutralAlpha['10'],
    },
  },

  primaryList: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.accent['100'],
      boxShadow: '0px 4px 4px 0px rgba(18, 127, 249, 0.1)',
    },
    hover: {
      background: '#3192fe',
      boxShadow: '0px 4px 4px 0px rgba(18, 127, 249, 0.1)',
    },
    pressed: {
      background: '#0b72e4',
    },
  },

  secondaryList: {
    font: uiFonts.sansSerif.medium12,
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

  dangerousList: {
    font: uiFonts.sansSerif.semiBold12,
    color: uiTheme.colors.content.contrast,
    default: {
      background: uiTheme.colors.fillControl.btnDanger,
    },
    hover: {
      background: uiTheme.colors.fillControl.btnDangerHover,
    },
    pressed: {
      background: uiTheme.colors.fillControl.btnDangerPressed,
    },
  },

  shadowList: {
    font: uiFonts.sansSerif.medium12,
    color: uiTheme.colors.content.primary,
    default: {
      background: uiTheme.colors.background.primaryContent,
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 12px 0px rgba(0, 0, 0, 0.08)',
    },
    hover: {
      boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 12px 0px rgba(0, 0, 0, 0.08)',
    },
    pressed: {
      background: uiTheme.colors.background.panels,
      border: uiTheme.colors.neutralAlpha['10'],
      boxShadow: outline,
    },
  },
};

export const variants = styleVariants(variantStyles, (variantStyle) =>
  buildVariant(base, variantStyle),
);

// endregion
