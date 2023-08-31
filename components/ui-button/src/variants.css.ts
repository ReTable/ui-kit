import {
  CSSProperties,
  ComplexStyleRule,
  StyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';

import { uiTheme } from '@tabula/ui-theme';

import { hasIcon } from './modifiers.css';

import { wrap } from './helpers';

// region Types

type RequiredProperties<Props extends keyof CSSProperties> = Required<Pick<CSSProperties, Props>>;

type BaseProperties = RequiredProperties<
  'gap' | 'height' | 'padding' | 'borderRadius' | 'outlineWidth'
>;

type IconProperties = RequiredProperties<'paddingLeft'> | RequiredProperties<'paddingRight'>;

type BaseStyle = BaseProperties & { icon: IconProperties };

type VariantStyle = {
  font: string;

  default?: CSSProperties;
  hover?: CSSProperties;
  active?: CSSProperties;
  focus?: CSSProperties;
  disabled?: CSSProperties;
};

// endregion

// region Root

const root = style(
  wrap({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 'fit-content',
    background: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    userSelect: 'none',

    selectors: {
      '&:focus': {
        outlineStyle: 'solid',
        outlineColor: uiTheme.colors.borderControl.focus2,
        outlineOffset: '0',
      },

      ['&:disabled, &[aria-disabled="true"]']: {
        background: uiTheme.colors.fillControl.btnDisabled,
        borderColor: 'transparent',
        color: uiTheme.colors.content.disabled,
        boxShadow: 'unset',
        cursor: 'default',
        pointerEvents: 'none',
      },
    },
  }),
);

// endregion

// region Variants

export function buildBaseStyle({ icon, outlineWidth, ...properties }: BaseStyle): string {
  return style(
    wrap({
      ...properties,

      selectors: {
        '&:focus': {
          outlineWidth: outlineWidth,
        },

        [`&${hasIcon}`]: icon,
      },
    }),
  );
}

function buildVariant(base: string, variant: VariantStyle): ComplexStyleRule {
  const selectors: StyleRule['selectors'] = {};

  if (variant.default) {
    selectors['&:not(:disabled, [aria-disabled="true"])'] = variant.default;
  }

  if (variant.hover) {
    selectors['&:not(:disabled, [aria-disabled="true"]):hover'] = variant.hover;
  }

  if (variant.active) {
    selectors['&:not(:disabled, [aria-disabled="true"]):active'] = variant.active;
  }

  if (variant.focus) {
    selectors['&:not(:disabled, [aria-disabled="true"]):focus'] = variant.focus;
  }

  if (variant.disabled) {
    selectors['&:disabled, &[aria-disabled="true"]'] = variant.disabled;
  }

  return [root, base, variant.font, wrap({ selectors })];
}

export function buildVariants<VariantStyles extends Record<string, VariantStyle>>(
  rootStyle: BaseStyle,
  variantStyles: VariantStyles,
): Record<keyof VariantStyles, string> {
  const base = buildBaseStyle(rootStyle);

  return styleVariants(variantStyles, (variantStyle) => buildVariant(base, variantStyle));
}

// endregion
