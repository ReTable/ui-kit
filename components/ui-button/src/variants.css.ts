import {
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';

import { hasIcon, isDisabled } from './modifiers.css';

import { wrap } from './helpers';

// region Types

type RequiredProperties<Props extends keyof CSSProperties> = Required<Pick<CSSProperties, Props>>;

type BaseProperties = RequiredProperties<
  'gap' | 'height' | 'padding' | 'borderRadius' | 'outlineWidth'
>;

type IconProperties = RequiredProperties<'paddingLeft'> | RequiredProperties<'paddingRight'>;

type RootStyle = BaseProperties & { icon: IconProperties };

type VariantStyle = {
  font: string;

  default?: CSSProperties;
  hover?: CSSProperties;
  active?: CSSProperties;
  focus?: CSSProperties;
  disabled?: CSSProperties;
};

// endregion

// region Variants

export function buildRootStyles(rootStyle: RootStyle): string {
  return style(
    wrap({
      gap: rootStyle.gap,
      height: rootStyle.height,
      padding: rootStyle.padding,
      borderRadius: rootStyle.borderRadius,

      selectors: {
        '&:focus': {
          outlineWidth: rootStyle.outlineWidth,
        },

        [`&${hasIcon}`]: rootStyle.icon,
      },
    }),
  );
}

function buildVariant(root: string, variant: VariantStyle): ComplexStyleRule {
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

  if (variant.disabled) {
    selectors[`&:disabled:disabled, &${isDisabled}${isDisabled}`] = variant.disabled;
  }

  return [root, variant.font, wrap({ selectors })];
}

export function buildVariants<VariantStyles extends Record<string, VariantStyle>>(
  rootStyle: RootStyle,
  variantStyles: VariantStyles,
): Record<keyof VariantStyles, string> {
  const root = buildRootStyles(rootStyle);

  return styleVariants(variantStyles, (variantStyle) => buildVariant(root, variantStyle));
}

// endregion
